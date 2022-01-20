import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { MpesaServiceService } from 'src/app/services/mpesa-service.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Response } from 'src/app/models/response';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Mpesa_Request } from 'src/app/models/mpesa-request';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(public cart : CartServiceService , public mpesa : MpesaServiceService, private http : HttpClient) { }
  total = 0
  
  readonly ROOT_URL = 'https://my-json-server.typicode.com/rousgidraph/posts';
  readonly Greeting = 'http://localhost:8080'
  
  posts : any ;

  response : Observable<Response[]>
  newpost : Observable<any>;
  

  req : Mpesa_Request = { 'PhoneNumber':'0',
  'Amount':'0'};

  getPosts(){
    let headers = new HttpHeaders().set('Authorization','auth-token')
    let params = new HttpParams().set('id','2')
    this.posts = this.http.get(this.ROOT_URL+'/employees',{headers})
  }

  getGreeting(){
    this.response = this.http.get<Response[]>(this.Greeting+'/status')
  }

  createpost(){
    this.tot()
    
      
      console.log( "phone : "+this.req.PhoneNumber+" ammount : "+this.req.Amount);
    
    const data: Mpesa_Request={
      'PhoneNumber': this.req.PhoneNumber,
      'Amount':this.req.Amount
    }
    this.newpost = this.http.post(this.Greeting+'/mobile-money/stk-transaction-request',data)

  }

  tot(){
   this.total = this.cart.grand_total();
   this.req.Amount = this.total.toString()
   console.log("done")
   
  }

  cancel(){
   
    
  }

  calc(a : number, b : number){
    return a * b ;
  }
  

  ngOnInit(): void {
    
  }

}
