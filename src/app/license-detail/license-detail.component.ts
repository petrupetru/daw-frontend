import { Component, Input, OnInit } from '@angular/core';
import { License } from '../interfaces/license';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LicenseService } from '../license.service'; 
import { CartService } from '../cart.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-license-detail',
  templateUrl: './license-detail.component.html',
  styleUrls: ['./license-detail.component.css']
})
export class LicenseDetailComponent implements OnInit {
  license?: License;
  add = this.fb.group({
  });

  constructor(
    private route: ActivatedRoute,
    private licenseService: LicenseService,
    private cartService : CartService,
    private location: Location,
    private fb : FormBuilder
  ) {}

  ngOnInit(): void {
    this.getLicense();
  }
  getLicense(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.licenseService.getLicense(id)
      .subscribe(license => this.license = license);
  }

  addToCart(): void{
    this.cartService.addToCart(this.license?.id || "", localStorage.getItem("token") || "");
  }
  

}
