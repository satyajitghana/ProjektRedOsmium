import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AskMeService } from '../ask-me.service';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-ask-me-anything',
  templateUrl: './ask-me-anything.component.html',
  styleUrls: ['./ask-me-anything.component.css']
})
export class AskMeAnythingComponent implements OnInit {

  public items: AngularFireList<any[]>;
  public itemsList: Observable<any[]>;

  titlecolor = ['#ffbe76', '#f6e58d', '#ff7979', '#badc58', '#dff9fb', '#f8a5c2', '#e77f67', '#ea8685', '#cf6a87'];

  offset = 4;
  currKey: any;
  nextKey: any;
  prevKeys: any[] = [];

  question: any = {
    question: ''
  };

  constructor(private askMeService: AskMeService, public db: AngularFireDatabase) {
    // this.items = this.db.list('/questions').valueChanges();
    // this.db.list<any>('/questions').valueChanges().subscribe(console.log);
  }

  ngOnInit() {
    this.getQuestions();
    // this.items = this.askMeService.getItemsList(this.offset);
    // this.itemsList = this.items.valueChanges();
  }

  onSubmit() {
    this.askMeService.createQuestion(this.question.question);
  }

  createQuestion() {
    // this.askMeService.createQuestion('Hello From Angular');
    // this.itemsList.forEach(element => {
    //   console.log(element);
    // });
  }

  nextPage() {
    // this.prevKeys.push(this.nextKey);
    this.prevKeys.push(this.currKey);
    this.getQuestions(this.nextKey);
  }

  prevPage() {
    this.getQuestions(this.prevKeys.pop());
  }

  private getQuestions(key?): void {
    this.items = this.askMeService.getItemsList(this.offset, key);
    this.items.snapshotChanges().subscribe(data => {
      console.log(data);
      console.log(this.prevKeys);
      this.currKey = data[data.length - 1].key;
      if (data.length > this.offset) {
        this.nextKey = data[0].key;
      } else {
        this.nextKey = null;
      }
      console.log(this.nextKey);
    });
    this.itemsList = this.items.valueChanges();
    // console.log(this.itemsList);
  }

  testFunction() {
    console.log('You clicked me !');
  }

  questiontitle() {
    return this.titlecolor[Math.floor(Math.random() * (this.titlecolor.length - 1)) + 1];
  }

}
