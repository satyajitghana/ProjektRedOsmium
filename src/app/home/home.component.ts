import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { MusicService } from '../music.service';
import { Observable } from 'rxjs';

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

  public playing: Observable<any>;

  status = 'Offline';

  constructor(private quoteService: QuoteService, private musicService: MusicService) { }

  ngOnInit() {
    this.getQuote();
    this.getPlaying();
  }

  quoteMe() {
    console.log('You Clicked Me');
    this.getQuote();
  }

  getQuote() {
    this.quoteService.getQuote().subscribe(data => {
      this.thequote = {
        title: data.json()[0].title,
        content: data.json()[0].content
      };
      console.log(this.thequote);
    });
  }

  private getPlaying(): void {
    this.playing = this.musicService.getPlaying();
    this.getStatus();
  }

  private getStatus(): void {
    this.playing.subscribe((data) => {
      console.log('Time Difference ' + (Date.now() / 1000 - data.timestamp) + ' seconds');

      /* If the time difference is less than 5 mins, then i'm not online */
      if (((Date.now() / 1000 - data.timestamp) / 60) < 5) {
        this.status = 'Online';
      } else {
        this.status = 'Offline';
      }
    });
  }

}
