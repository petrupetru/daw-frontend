import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { License } from '../interfaces/license';
import { licenseModel } from '../models/licenseModel';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  licenses? : License[] = [];
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.getLicensesListed()
  }

  getLicensesListed(){
    this.cartService.getLicensesListed(localStorage.getItem("token") || "")
    .subscribe(licenses => this.licenses = licenses)

  }

}
