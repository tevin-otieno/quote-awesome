import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  quote = new Quote(0,'','','',new Date());
  @Output() add = new EventEmitter<Quote>();

  submitQuote(){
    this.add.emit(this.quote);
    this.quote = new Quote(0,'','','',new Date());
  }

  constructor() { }

  ngOnInit(): void {
  }

}
