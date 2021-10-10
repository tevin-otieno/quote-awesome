import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  quotes:Quote[]=[
    new Quote (1, 'Spider Man', 'With great power comes great responsibility', 'Uncle Ben',new Date(2002,2,14),0,0 ),
    new Quote (1, 'Spider Man', 'With great power comes great responsibility', 'Uncle Ben',new Date(2002,2,14),0,0 ),
    new Quote (1, 'Spider Man', 'With great power comes great responsibility', 'Uncle Ben',new Date(2002,2,14),0,0 ),
    new Quote (1, 'Spider Man', 'With great power comes great responsibility', 'Uncle Ben',new Date(2002,2,14),0,0 ),
    new Quote (1, 'Spider Man', 'With great power comes great responsibility', 'Uncle Ben',new Date(2002,2,14),0,0 ),
    new Quote (1, 'Spider Man', 'With great power comes great responsibility', 'Uncle Ben',new Date(2002,2,14),0,0 ),
    new Quote (1, 'Spider Man', 'With great power comes great responsibility', 'Uncle Ben',new Date(2002,2,14),0,0 )
  ];
  get sortQuotes(){
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }
  addQuote(quote: Quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.pubDate = new Date(quote.pubDate)
    this.quotes.push(quote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
