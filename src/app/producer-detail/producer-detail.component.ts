import { Component, Input, OnInit } from '@angular/core';
import { Producer } from '../interfaces/producer';


@Component({
  selector: 'app-producer-detail',
  templateUrl: './producer-detail.component.html',
  styleUrls: ['./producer-detail.component.css']
})
export class ProducerDetailComponent implements OnInit {
  @Input() selectedProducer? : Producer;

  constructor() { }

  ngOnInit(): void {
  }

}
