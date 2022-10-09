// export interface Contact{
//     firstName: string,
//     password: string,
//     email: string,
//     phoneNumber: string
// }

export interface Contact {
    id: number,
    first_name: string,
    last_name: string,
    email:string,
    phone_number: string,
    photo: string,
 } 

// export interface Contact {
//     firstName: string,
//     lastName: string,
//     phoneNumber: string,
// }

export const defaultContact:Contact = {
     first_name: "First name",
     last_name: "Last Name",
     phone_number: "+5412345678",
     id:0,
     email: "",
     photo: "https://robohash.org/eosomnissit.png?size=50x50&set=set1"
    }



export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

// export interface ContactJsonPlaceholder {
//     id?: number;
//     name?: string;
//     username?: string;
//     email?: string;
//     address?: Address;
//     phone?: string;
//     website?: string;
//     company?: Company;
// }

