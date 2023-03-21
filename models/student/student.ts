interface Student {
    name: string;
    email: string;
    password: string;
}

class Student {
    #name;
    #email;
    #password;

    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

}

export {Student};

