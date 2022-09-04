import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Producer } from '../interfaces/producer';
import { MessagesService } from '../messages.service';
import { PRODUCERS } from '../mock-data';
import { producerModel } from '../models/producerModel';
import { ProducerService } from '../producer.service';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.css']
})
export class ProducersComponent implements OnInit {
  createProducerForm = this.fb.group({
    id : ['', Validators.required],
    name : ['', Validators.required]
  });

  updateProducerForm = this.fb.group({
    id : ['', Validators.required],
    name : ['', Validators.required]
  });

  deleteProdForm = this.fb.group({
    id : ['', Validators.required]
  });

  producers? :Producer[] = [];
  selectedProducer?: Producer;

  constructor(private fb : FormBuilder, private producerService : ProducerService, private messagesService : MessagesService) { }

  ngOnInit(): void {
    this.getProducers();
  }

  getProducers(): void{
      this.producerService.getProducers() 
        .subscribe(producers => this.producers = producers)
  }

  createProducer(): void{
    var newProducer = new producerModel(this.createProducerForm.value as producerModel);
    this.producerService.addProducer(newProducer).subscribe();
  }

  updateProducer(): void{
    var newProducer = new producerModel(this.updateProducerForm.value as producerModel);
    this.producerService.updateProducer(newProducer);
  }

  deleteProd(): void{
    var id = this.deleteProdForm.value.id as string;
    this.producerService.deleteProducer(id);
  }

  



  onSelect(producer: Producer): void {
    this.selectedProducer = producer
    this.messagesService.add(`producerComponent : producer id=${producer.id} selected`);
  }

  refresh(): void {
    window.location.reload();
}

}
