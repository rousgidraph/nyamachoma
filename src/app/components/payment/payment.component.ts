import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(public cart : CartServiceService) { }
  total = 0
  
  tot(){
   this.total = this.cart.grand_total();
  }


  calc(a : number, b : number){
    return a * b ;
  }
  

  ngOnInit(): void {
  }

}
