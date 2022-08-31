import { Component, OnInit } from '@angular/core';
import { License } from '../interfaces/license';
import { LicenseService } from '../license.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {
  licenses? : License[] = [];


  constructor(private licenseService : LicenseService,
    private messageService : MessagesService) { }

  ngOnInit(): void {
    this.licenseService.getLicenses()
    .subscribe(licenses => this.licenses = licenses)
  }


}
