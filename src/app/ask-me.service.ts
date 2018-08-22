import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AskMeService {

  // private basepath: String = '/questions';
  private basepath: any = '/questions';

  items: AngularFireList<any> = null;

  constructor(private db: AngularFireDatabase) { }

  createQuestion(question: String): void {
    const questionData: any = {
      question: question,
      date: Date.now()
    };
    // console.log(questionData);
    this.items.push(questionData);
  }

  getItemsList(limit: any, end?: string): AngularFireList<any> {
    this.items = this.db.list(this.basepath, ref => {
      let q = ref.orderByKey();
      if (end != null) {
        q = q.endAt(end);
      }
      q = q.limitToLast(limit + 1);
      return q;
    });

    return this.items;
  }
}
