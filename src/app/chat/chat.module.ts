import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatService } from '../chat.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, BrowserAnimationsModule
  ],
  declarations: [ChatDialogComponent],
  exports: [ ChatDialogComponent ],
  providers: [ ChatService ]
})
export class ChatModule { }
