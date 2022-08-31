import { Component, Input, OnInit } from '@angular/core';
import { License } from '../interfaces/license';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LicenseService } from '../license.service'; 

@Component({
  selector: 'app-license-detail',
  templateUrl: './license-detail.component.html',
  styleUrls: ['./license-detail.component.css']
})
export class LicenseDetailComponent implements OnInit {
  license?: License;

  constructor(
    private route: ActivatedRoute,
    private licenseService: LicenseService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getLicense();
  }
  getLicense(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.licenseService.getLicense(id)
      .subscribe(license => this.license = license);
  }
  

}
