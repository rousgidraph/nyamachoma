import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Response } from 'src/app/models/response';



@Injectable({
  providedIn: 'root'
})
export class MpesaServiceService {

  constructor(private http : HttpClient) { }

  readonly ROOT_ONLY = 'https://my-json-server.typicode.com/rousgidraph/posts/employees';
  response : Response = {"message":"one"};
  pay(ammount : number, phone : String  ){

  }

  reverse(){

  }

  check_balance(){

  }

  confirm_payment(){
    
  }

  get_token(){
   
    
  }


}
