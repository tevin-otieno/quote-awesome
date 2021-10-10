import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  quote = new Quote(0,'','','',new Date(),0,0);
  @Output() add = new EventEmitter<Quote>();

  addQuote(){
    this.add.emit(this.quote);
    this.quote = new Quote(0,'','','',new Date(),0,0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
