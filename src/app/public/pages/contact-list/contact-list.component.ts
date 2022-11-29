import { Component, OnInit } from '@angular/core';
import { contactData } from 'src/assets/MockaData/FakeData';
import { Contact } from 'src/core/interfaces/contact';
import { ContactService } from 'src/core/services/contact.service';
import { ContactCardComponent } from '../../contact-card/contact-card.component';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contactInfo:Contact[] = []
  constructor(public us:ContactService) { }

  ngOnInit(): void {
    this.getData()
  }

  async getData() {
    this.contactInfo = await this.us.getContacts();
    console.log(this.contactInfo)
  }
}
