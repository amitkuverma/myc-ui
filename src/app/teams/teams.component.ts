import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/services/users.service';
import { SharedModule } from '../theme/shared/shared.module';
import { CookieService } from 'src/services/cookie.service';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule, SharedModule, RouterModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchQuery: string = '';
  selectedUser: any = null;
  loading: boolean = false;
  page: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  successMessage: string = '';
  isMenuOpen: { [key: number]: boolean } = {};
  totalDirect:any;

  constructor(private usersService: UsersService, private router: Router,
    private toastr: ToastrService, private cookies: CookieService
  ) {
  }
  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.loading = true;
    this.usersService.getUserReferrals(this.cookies.decodeToken().userId).subscribe((data: any) => {
      this.users = data.referrals;
      this.totalDirect = data.referrals.filter((item: any) => item.parentUserId === data.user.userId);
      this.filteredUsers = this.totalDirect;
      this.totalItems = this.totalDirect;
      this.loading = false;
      this.toastr.success('Users loaded successfully!', 'Success');
    });
  }


  filterUsers() {
    this.filteredUsers = this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.totalItems = this.filteredUsers.length;
  }

  viewUserDetails(user: any): void {
    this.selectedUser = user;
  }

  closeModal(): void {
    this.selectedUser = null;
  }
  toggleMenu(userId: number) {
    this.isMenuOpen[userId] = !this.isMenuOpen[userId];
  }

  deleteUser(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.usersService.deleteUser(userId).subscribe(
        (response: any) => {
          this.successMessage = 'User deleted successfully!';
          this.filteredUsers = this.filteredUsers.filter(user => user.userId !== userId);
        },
        (error: any) => {
          console.error('Error deleting user', error);
          this.successMessage = 'Failed to delete user!';
        }
      );
    }
  }

  goToUserNetwork(userId: number): void {
    this.router.navigate(['/friends-network', userId]);
  }

  goToUserDetails(userId: number): void {
    this.router.navigate(['/user-details', userId]);
  }

  goToPaymentDetails(userId: number): void {
    this.router.navigate(['/payment-status', userId]);
  }

}
