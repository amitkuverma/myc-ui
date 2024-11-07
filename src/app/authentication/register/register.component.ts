// angular import
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/services/payment.service';
import { CookieService } from 'src/services/cookie.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent {
  // public method
  SignUpOptions = [
    {
      image: 'assets/images/authentication/google.svg',
      name: 'Google'
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      name: 'Twitter'
    },
    {
      image: 'assets/images/authentication/facebook.svg',
      name: 'Facebook'
    }
  ];
  signupForm: FormGroup;
  loading = false;
  errorMessage = '';
  successMessage = '';
  userInfo: any;
  @ViewChild('packageModal') packageModal!: ElementRef;
  private modalInstance: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private paymentService: PaymentService,
    private cookiesSerrvice: CookieService
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]], // Mobile number validation
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      referralCode: [''] // Optional
    });
    this.route.queryParamMap.subscribe((params) => {
      const referralCode = params.get('referralCode');
      if (referralCode) {
        this.signupForm.get('referralCode')?.setValue(referralCode);
        this.signupForm.get('referralCode')?.disable();
      }
    });
  }

  ngAfterViewInit() {
    this.initializeModal();
  }

  initializeModal() {
    const modalElement = this.packageModal.nativeElement;
    if (modalElement) {
      this.modalInstance = new bootstrap.Modal(modalElement);
    }
  }

  openModal() {
    if (this.modalInstance) {
      this.modalInstance.show();
    } else {
      console.error('Modal instance is not initialized.');
    }
  }

  closeModal() {
    if (this.modalInstance) {
      this.modalInstance.hide();
      this.router.navigate(['/login'])
    } else {
      console.error('Modal instance is not initialized.');
    }
  }

  register() {
    if (this.signupForm.invalid) {
      return;
    }

    this.loading = true; // Start loading
    this.errorMessage = '';
    this.successMessage = '';
    this.signupForm.get('referralCode')?.enable();
    this.authService.register(this.signupForm.value).subscribe(
      (response) => {
        this.userInfo = response;
        const login = {
          userId: response.userId,
          password: this.signupForm.get('password').value
        }
        this.authService.login(login).subscribe(
          res => {
            this.cookiesSerrvice.setCookie('token', res.token, 1);
            const body = {
              userId: response.userId,
              userName: response.name,
              status: 'create'
            }
            this.paymentService.createPayment(body).subscribe(
              res => {
                this.loading = false; // Stop loading
                this.openModal();
                this.toastr.success('Account created successfully!', 'Success');
                this.cookiesSerrvice.deleteCookie('token');
              }
            )
          }
        )
      },
      (error) => {
        this.loading = false; // Stop loading
        this.toastr.error('Registration failed. Please try again.', 'Error');
      }
    );
  }
}
