import { Component } from '@angular/core';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Quote } from './quote';
import { QuoteListComponent } from '../app/quote-list/quote-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quote awesome';
  facebook = faFacebook;
  twitter = faTwitter;

  quotes:Quote[]=[
    new Quote(1,"this is a quote","Victoria Okuku","Atieno",new Date(2021,6,20)),
    new Quote(2,"quote is me ","Victoria Okuku","Atieno",new Date(2021,6,2)),
    new Quote(3,"qqqq","Victoria Okuku","Atieno",new Date(2021,6,10)),
    new Quote(4,"Kenya Yetu","Victoria Okuku","Atieno",new Date(2021,6,3))
  ]
  ;
  max:any;
  getMax():any{
    this.max=0;
    this.quotes.forEach(quote=>{
      if(quote.id>this.max){
        this.max=quote.id;
      }
    return this.max;
    });
  }
  maximum=this.getMax();
  constructor() { 
    
  }
  getHighest(index: any){
    Math.max(this.quotes[index].id);

  }
  
  deleteQuote(isComlete: any,index:any){
    if(isComlete){
      const toDelete=confirm('Are you sure you want to delete this quote?');
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
  }
  upVoteQuote(isClick:any,index:any){
    if(isClick){
      const doUp=confirm('Are you sure you want to up vote this quote?');
      if(doUp){
        this.quotes[index].inspiration=this.quotes[index].inspiration+1;
      }
    }
  }
  downVoteQuote(isClicked: any,index:any){
    if(isClicked){
      const doDown=confirm('Are you sure you want to down vote this quote?');
      if(doDown){
        this.quotes[index].terrible=this.quotes[index].terrible+1;
      }
    }

  }
  addNewQuote(quote:Quote){
    const quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    quote.date=new Date(quote.date);
    this.quotes.push(quote);
  }
}
