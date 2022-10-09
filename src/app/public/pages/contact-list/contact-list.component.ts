import { Component, OnInit } from '@angular/core';
import { contactData } from 'src/assets/MockaData/FakeData';
import { Contact } from 'src/core/interfaces/contact';
import { ContactCardComponent } from '../../contact-card/contact-card.component';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contactData:Contact[] = contactData
  constructor() { }

  ngOnInit(): void {
  }

}
