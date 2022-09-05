import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { License } from '../interfaces/license';
import { MessagesService } from '../messages.service';
import { cartModel } from '../models/cartModel';
import { licenseModel } from '../models/licenseModel';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  remove = this.fb.group({});

  licenses? : License[] = [];
  cartId : string = "";
  constructor(private cartService : CartService,
    private fb : FormBuilder,
    private ms : MessagesService) { }

  ngOnInit(): void {
    this.getLicensesListed()
    this.cartId = localStorage.getItem("token") || "";
  }

  getLicensesListed(){
    this.cartService.getLicensesListed(localStorage.getItem("token") || "")
    .subscribe(licenses => this.licenses = licenses)

  }

  removeLicense(licenseId : string, cartId : string){
    this.cartService.remove(licenseId, cartId);
    this.log(`license ${licenseId} removed from cart`)
  }

  private log(message: string) {
    this.ms.add(`CartService: ${message}`);
  }

  refresh(): void {
    window.location.reload();
  }


}
