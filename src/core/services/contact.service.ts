import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  async getUserDetails(id: number) 
   {

    console.log("ok")
   
    // const jsonData = await this.getUsers();
    // const user = jsonData.filter((user) => user.id == id);
    // return user.length > 0 ? user[0] : {};
  }

  async getContacts(): Promise<Contact[]>  {
    /* return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(contactosMock)
      }, 300);
    }); */

    const data = await fetch('https://localhost:7048/api/Contact');
    return await data.json();
  }

  async getContact(id: number): Promise<Contact[]>  {
    const data = await fetch('//localhost:7048/api/Contact/GetOne/'+id);
    return await data.json();
  }

  async deleteContact(id: number): Promise<boolean>  {
    const res = await fetch('https://localhost:7048/api/Contact/'+id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    return res.ok;
  }

  async AddContact(c: Contact): Promise<Contact>  {
    const res = await fetch('https://localhost:7048/api/Contact/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(c)
    });
    return res.json();
  }

  async UpdateContact(c: Contact): Promise<Contact>  {
    const res = await fetch('https://localhost:7048/api/Contact/', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(c)
    });
    return res.json();
  }
}

