import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from './cookie.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    token!: any;
    headers!: any;

    constructor(private http: HttpClient, private cookiesService: CookieService) {
        this.token = this.cookiesService.getCookie("token")
    }

    createTransaction(body: any): Observable<any> {
        body.userId = this.cookiesService.decodeToken().userId;        
        body.userName = this.cookiesService.decodeToken().userName;
        return this.http.post(`${environment.API_URL}/transaction`, body);
        
    }

    createTransactionForOneTime(body: any): Observable<any> {
        return this.http.post(`${environment.API_URL}/transaction`, body);        
    }

    getAllTransaction(): Observable<any> {                
        return this.http.get(`${environment.API_URL}/transaction`);
    }

    getTransactionsById(id:any): Observable<any> {                
        return this.http.get(`${environment.API_URL}/transaction/${id}`);
    }

    geTransactionsByUserId(userId:any): Observable<any> {                
        return this.http.get(`${environment.API_URL}/transaction/user/${userId}`);
    }
    
    updateTransaction(body:any, id:any): Observable<any> {                
        return this.http.put(`${environment.API_URL}/transaction/${id}`, body);
    }

    uploadTransactionReceipt(transId: any, receiptData: FormData): Observable<any> {        
        return this.http.post(`${environment.API_URL}/payment/${transId}/upload-receipt`, receiptData);
    }
}
