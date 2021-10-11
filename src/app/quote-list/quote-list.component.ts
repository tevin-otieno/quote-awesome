import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  quotes:Quote[]=[
    new Quote (1, 'Spider Man', 'With great power comes great responsibility', 'Uncle Ben',new Date(2002,2,14),0,0),
    new Quote (2, 'Marvel', 'I am inevitable', 'Thanos',new Date(2012,9,24),0,0),
    new Quote (3, 'Spider Man', 'With great power comes great responsibility', 'Uncle Ben',new Date(2002,2,14),0,0),
    new Quote (4, 'The Rickest Rick', 'Wab laba dub dub', 'Rick C-137',new Date(2011,7,14),0,0),
  ];
  @Input() quoty!: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  addedQuote(quote: Quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.date = new Date(quote.date)
    this.quotes.push(quote)
  }
  quoteDelete(isRead:any, index:number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
  }
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.quoty.inspiration+=1;
  }
  downvote(){
    this.quoty.terrible+=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
