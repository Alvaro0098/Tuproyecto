import { Component, OnInit,Input } from '@angular/core';
import { Contact, defaultContact } from 'src/core/interfaces/contact';


@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  constructor() { }

  @Input() contact: Contact = defaultContact
 // @Input() contact: Contact = {} as Contact;

  ngOnInit(): void {
  }

}

// @Input() contact: Contact = {} as Contact;