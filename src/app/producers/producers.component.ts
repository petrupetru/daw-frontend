import { Component, OnInit } from '@angular/core';
import { Producer } from '../interfaces/producer';
import { MessagesService } from '../messages.service';
import { PRODUCERS } from '../mock-data';
import { ProducerService } from '../producer.service';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.css']
})
export class ProducersComponent implements OnInit {

  producers? :Producer[] = [];
  selectedProducer?: Producer;

  constructor(private producerService : ProducerService, private messagesService : MessagesService) { }

  ngOnInit(): void {
    this.getProducers();
  }

  getProducers(): void{
      this.producerService.getProducers() 
        .subscribe(producers => this.producers = producers)
  }

  onSelect(producer: Producer): void {
    this.selectedProducer = producer
    this.messagesService.add(`producerComponent : producer id=${producer.id} selected`);
  }

}
