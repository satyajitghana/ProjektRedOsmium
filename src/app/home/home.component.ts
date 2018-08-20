import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quote: any;

  thequote: any = {
    title: 'John Romero',
    content:
    'You might not think that programmers are artists,\ but programming is an extremely creative profession. It\'s logic-based creativity.'
  };

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.quoteService.getQuote().subscribe(data => {
      this.thequote = {
        title: data.json()[0].title,
        content: data.json()[0].content
      };
      console.log(this.thequote);
    });
  }

}
