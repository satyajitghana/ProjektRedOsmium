import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private basepath: any = '/gaana/current_playing';

  item: Observable<any>;

  constructor(db: AngularFireDatabase) {
    this.item = db.object(this.basepath).valueChanges();
  }

  getPlaying() {
    return this.item;
  }
}
