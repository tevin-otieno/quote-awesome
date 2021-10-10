import { Component } from '@angular/core';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
//import { QuoteListComponent } from '../app/quote-list/quote-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quote awesome';
  facebook = faFacebook;
  twitter = faTwitter;
}
