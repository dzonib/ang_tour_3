import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  // Angular only binds to public component properties.
  // (you can use it in template if its public)
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
