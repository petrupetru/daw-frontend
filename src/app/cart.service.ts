import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { License } from './interfaces/license';
import { MessagesService } from './messages.service';
import { cartModel } from './models/cartModel';
import { licenseModel } from './models/licenseModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartsURL = 'https://localhost:5001/api/Cart'; 
  curentCart?: cartModel;
  userCart?: cartModel;


  constructor(
    private http: HttpClient,
    private messageService: MessagesService) { }

  private log(message: string) {
    this.messageService.add(`CartService: ${message}`);
  }
  
  getLicensesListed( id : string): Observable<License[]>{
      return this.http.get<License[]>(`${this.cartsURL}/Licenses${id}`);
  }

  getCartById(id : string) : Observable<cartModel>{
    return this.http.get<cartModel>(`${this.cartsURL}/${id}`)

  }

  addCart( id : string, userId : string){
    this.getCartById(id).subscribe(cart => this.curentCart = cart);
    if(this.curentCart?.UserId)
    {
      this.deleteCart(userId);
    }
    var cartModel :  cartModel = {Id : id, UserId : userId };
    this.http.post<any>(`${this.cartsURL}/create`, cartModel).subscribe();
  }

  deleteCart( id : string){
    var deleteURL = `${this.cartsURL}/delete${id}`;
    this.http.delete(deleteURL).subscribe();
    
  }

  addToCart(licenseid: string, cartid : string)
  {
    this.http.post<any>(`${this.cartsURL}/addtocart${licenseid}/${cartid}`, null).subscribe();
  }

  remove(licenseid: string, cartid : string)
  {
    this.http.delete(`${this.cartsURL}/removefromcart${licenseid}/${cartid}`)
    .subscribe();
  }

}
