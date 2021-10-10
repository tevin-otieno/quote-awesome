import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  quotes:Quote[]=[
    new Quote (1, 'Spider Man', 'With great power comes great responsibility', 'Uncle Ben',new Date(2002,2,14)),
    new Quote (1, 'Spider Man', 'With great power comes great responsibility', 'Uncle Ben',new Date(2002,2,14)),
    new Quote (1, 'Spider Man', 'With great power comes great responsibility', 'Uncle Ben',new Date(2002,2,14)),
    new Quote (1, 'Spider Man', 'With great power comes great responsibility', 'Uncle Ben',new Date(2002,2,14)),
    new Quote (1, 'Spider Man', 'With great power comes great responsibility', 'Uncle Ben',new Date(2002,2,14)),
    new Quote (1, 'Spider Man', 'With great power comes great responsibility', 'Uncle Ben',new Date(2002,2,14)),
    new Quote (1, 'Spider Man', 'With great power comes great responsibility', 'Uncle Ben',new Date(2002,2,14))
  ];
  @Input()
  quote:any;
  @Output() isComlete=new EventEmitter<boolean>();
  get sortQuotes(){
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }
  addNewQuote(quote:Quote){
    const quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    quote.date=new Date(quote.date);
    this.quotes.push(quote);
  }
  deleteQuote(doDelete:boolean){
    this.isComlete.emit(doDelete);
  }
  upvote(isClicked:any,index:any){
    if (isClicked){
      this.quote[index].inspiration+=1;
    }
  }
  downvote(){
    this.quote.terrible+=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
