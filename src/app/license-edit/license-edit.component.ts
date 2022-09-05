import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { License } from '../interfaces/license';
import { LicenseService } from '../license.service';
import { MessagesService } from '../messages.service';
import { licenseModel } from '../models/licenseModel';

@Component({
  selector: 'app-license-edit',
  templateUrl: './license-edit.component.html',
  styleUrls: ['./license-edit.component.css']
})
export class LicenseEditComponent implements OnInit {

  createLicenseForm = this.fb.group({
    id : ['', Validators.required],
    name : ['', Validators.required],
    key : ['', Validators.required],
    producerId : ['', Validators.required]
  });

  updateLicenseForm = this.fb.group({
    id : ['', Validators.required],
    name : ['', Validators.required],
    key : ['', Validators.required],
    producerId : ['', Validators.required]
  });

  deleteLicenseForm = this.fb.group({
    id : ['', Validators.required]
  });

  licenses? :License[] = [];
  selectedLicense?: License;


  constructor(
    private fb : FormBuilder,
    private licenseService : LicenseService,
    private messagesService : MessagesService) { }

  ngOnInit(): void {
    this.getLicenses();

  }

  getLicenses(): void{
    this.licenseService.getLicenses() 
      .subscribe(licenses => this.licenses = licenses)
  }

  createLicense(): void{
    var newLicense = new licenseModel(this.createLicenseForm.value as licenseModel);
    this.licenseService.addLicense(newLicense);
  }

  updateLicense(): void{
    var newLicense = new licenseModel(this.updateLicenseForm.value as licenseModel);
    this.licenseService.updateLicense(newLicense);
  }

  deleteLicense(): void{
    var id = this.deleteLicenseForm.value.id as string;
    this.licenseService.deleteLicense(id);
  }

  onSelect(license: License): void {
    this.selectedLicense = license
    this.messagesService.add(`licenseEditComponent : license id=${license.id} selected`);
  }

  refresh(): void {
    window.location.reload();
  }



}
