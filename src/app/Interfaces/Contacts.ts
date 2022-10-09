// export interface Contact {
//     id: number,
//     FirstName: string,
//     LastName: string,
//     email:string,
//     PhoneNumber: string,
// }

export interface Contact {
    firstName: string,
    lastName: string,
    phoneNumber: string,
}

export const defaultContact:Contact = {
    firstName: "First name",
    lastName: "Last Name",
    phoneNumber: "+5412345678",
    // id:0,
    // FirstName: "",
    // LastName: "",
    // email: "",
    // PhoneNumber: ""
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

export interface ContactJsonPlaceholder {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    address?: Address;
    phone?: string;
    website?: string;
    company?: Company;
}
    
// Cree una interfas que se usa para generar el tipo de dato del Contact
// seria como instanciar una clase pero donde creo la clase tipo Contact
// 'export' sirve para poder importar la interfas en otro archivo.

//Por lo general las interfase se usa para el manejo de datos, que es mucho mas simple
// Las clases quedan reservadas para generar modulos.
