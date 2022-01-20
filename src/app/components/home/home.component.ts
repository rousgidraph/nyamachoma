import { Component, OnInit } from '@angular/core';
import { meal_listing } from 'src/app/mock_data/meal_listing';
import { MEAL } from 'src/app/models/meal';
import { CartServiceService } from 'src/app/services/cart-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menu = meal_listing;
  
  constructor(public cart : CartServiceService) { }

  ngOnInit(): void {
  }

  test(){
    alert("clicked")

  }

  cancel(){
    
  }

  add_to_cart(item: MEAL){
    
    this.cart.add(item);
    
  }
}
