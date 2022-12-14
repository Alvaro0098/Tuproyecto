import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactListRoutingModule } from './contact-list-routing.module';
import { ContactListComponent } from './contact-list.component';
import { ContactCardComponent } from '../../contact-card/contact-card.component';
import { AppModule } from 'src/app/app.module';

@NgModule({
  declarations: [
    ContactListComponent,
    ContactCardComponent
  ],
  imports: [
    CommonModule,
    ContactListRoutingModule
  
  ]
})
export class ContactListModule { }
