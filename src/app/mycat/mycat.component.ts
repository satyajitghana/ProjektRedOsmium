import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mycat',
  templateUrl: './mycat.component.html',
  styleUrls: ['./mycat.component.css']
})
export class MycatComponent implements OnInit {

  constructor(public chat: ChatService) { }


  ngOnInit() {
  }

}
