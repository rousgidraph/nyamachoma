import { Injectable } from '@angular/core';
import { reduce } from 'rxjs';
import { MEAL } from "../models/meal";



@Injectable({
  providedIn: 'root'
})
export class CartServiceService {


  cart_items : MEAL[] = [];
  constructor() { }
  total = 0;

  add(item : MEAL){
    var pos = this.cart_items.indexOf(item); 
   

    if( pos > -1){
      this.cart_items[pos].count ++;
      item.total += item.pricing;
    }else if (pos == -1){
      
      item.count = 1;
      item.total = item.pricing;
      this.cart_items.push(item);

    }
    
    this.grand_total()
  }

  item_count(){
    var count = 0;
    if (this.cart_items.length  < 1){
      return count;
    }
    for (var  i = 0; i < this.cart_items.length; i++){
      count += this.cart_items[i].count
    }
    return count
  }

  grand_total(){
    var tot = 0;
    if (this.cart_items.length  < 1){
      return tot;
    }
    for (var  i = 0; i < this.cart_items.length; i++){
      tot += this.cart_items[i].total
    }
    this.total = tot;
    return tot
  }

  size(){
    const len = this.cart_items.length
    return len;
  }

  clear(){
    this.cart_items = [];
  }

}
