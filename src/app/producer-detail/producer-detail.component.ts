import { Component, Input, OnInit } from '@angular/core';
import { Producer } from '../interfaces/producer';
import { ProducerService } from '../producer.service';


@Component({
  selector: 'app-producer-detail',
  templateUrl: './producer-detail.component.html',
  styleUrls: ['./producer-detail.component.css']
})
export class ProducerDetailComponent implements OnInit {
  @Input() selectedProducer? : Producer;


  constructor(private producerService : ProducerService) { }

  ngOnInit(): void {
  }

 
}
