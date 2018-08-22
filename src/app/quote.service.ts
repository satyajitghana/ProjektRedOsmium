import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'': ''})
};

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  // url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
  url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=JSONP_CALLBACK';

  constructor(private http: HttpClient, private jsonp: Jsonp) { }

  getQuote(): Observable<any> {
    // this.http.get(this.url).subscribe(res => console.log(res));
    // this.jsonp.request(this.url).subscribe(res => {
      // console.log(res.json()[0].content + res.json()[0].title);
      // return {
      //   content: res.json()[0].content,
      //   title: res.json()[0].title
      // };
    // });
    return this.jsonp.request(this.url);
  }
}
