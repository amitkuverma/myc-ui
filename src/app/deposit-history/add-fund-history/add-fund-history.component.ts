import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { CookieService } from 'src/services/cookie.service';
import { TransactionService } from 'src/services/transaction.service';

@Component({
  selector: 'app-add-fund-history',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './add-fund-history.component.html',
  styleUrl: './add-fund-history.component.scss'
})
export class AddFundHistoryComponent {
  transInfo: any[] = [];
  filteredTrans: any[] = [];
  searchQuery: string = '';
  selectedUser: any = null;
  loading: boolean = false;
  page: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  successMessage: string = '';
  imageUrl:any;
  

  constructor(private transactionService: TransactionService, private cookies: CookieService, private toastr:ToastrService) {
    this.imageUrl = environment.IMAGE_URL;
   }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.loading = true;
    this.transactionService.getAllTransaction().subscribe((data: any) => {
      if (this.cookies.isAdmin()) {
        const adminHistory = data.filter((item:any) => item.paymentType === 'fund');
        this.transInfo = adminHistory;
        this.filteredTrans = adminHistory;
        this.totalItems = adminHistory.length;

      } else {
        const userHistory = data.filter((item:any) => item.userId === this.cookies.decodeToken().userId && item.paymentType === 'fund');
        this.transInfo = userHistory
        this.filteredTrans = userHistory;
        this.totalItems = userHistory.length;
      }
      this.loading = false;
      this.toastr.success('Fund data loaded successfully!');
    });
  }

  filterUsers() {
    this.filteredTrans = this.transInfo.filter(
      (user) =>
        user.userId.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.userName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.totalItems = this.filteredTrans.length;
  }

  viewUserDetails(user: any): void {
    this.selectedUser = user;
  }
}