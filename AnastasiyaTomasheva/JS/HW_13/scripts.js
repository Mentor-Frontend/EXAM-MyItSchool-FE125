'use strict';

class User {

    constructor(data){

        this.id = +(data.id);
        this.name = data.name;
        this.email = data.email;
        this.address = data.address;
        this.phone = data.phone;
    }

    edit(obj){
        this.id = +(obj.id);
        this.name = obj.name;
        this.email = obj.email;
        this.address = obj.address;
        this.phone = obj.phone;
    }
    

    get() {
        return this;
    }
};

class Contacts {

    constructor(data){

        this.data = [];

    }

    add(user) {
        
        let search = this.data.findIndex(contact => contact.id === user.id);
        if (search === -1) this.data.push(user)
            
    }
        
    elem(id) {

        return this.data.find(contact => contact.id === +id)
    }

    edit(id, obj) {
        let search = this.data.find(contact => contact.id === +id);
        search.edit(obj);
    }

    remove(id) {
        let search = this.data.findIndex(contact => contact.id === id);
        if (search !== -1) {this.data.splice(search, 1)}
    }

    get(){
        return this.data
        
    }
};

class ContactsApp extends Contacts {
    constructor(data) {
        super(data);
        let div = document.createElement('div');
        div.classList.add('contacts');
        div.innerHTML = `
        <h1>Contacts</h1>
        <fieldset>
            <legend>Создание контакта</legend>
        <form id = "myForm">
        <div>
            Создайте свой ID (только цифры) <br>
            <input id="ID" value=" " minlength="1" maxlength="50" type="number" name="id"/>
        </div>
        <div>
            Ваше имя <br>
            <input id="names" value=" " minlength="2" maxlength="50" type="text" name="firstname"/>
        </div>
        <div>
            Эл. почта <br>
            <input id="mail" value=" " placeholder="name@gmail.com" type="email" name="email"/>
        </div>
        <div>
            Ваш адрес <br>
            <input id="address" value=" " type="email" name="mail"/>
        </div>
        <div>
            Телефон <br>
            <input id="phone" value=" " type="tel" name="phone"/>
        </div>
        </form>
        </fieldset>
        <div id="list">
            
        </div>
        `
    document.body.append(div);
    this.app = div;
    this.content();

        

    }

    content() {
        

        let buttons = document.createElement('div');
        buttons.classList.add('button')
        buttons.innerHTML = `
        <button id = "press_1">Add</button>
        <button id = "press_2">Edit</button>
        <button id = "press_3">Remove</button>
        <button id = "press_4">Clear</button>
        `;
        document.body.append(buttons);
        document.querySelector('#press_1').onclick = this.onAdd;
        document.querySelector('#press_2').onclick = this.onEdit;
        document.querySelector('#press_3').onclick = this.onRemove;
        document.querySelector('#press_4').onclick = this.onReset;

        let style = document.createElement('style');
        style.innerHTML = `
        .contacts {
            text-align: center;
            width: 50%;
            box-shadow: 7px 7px 31px 16px lightblue;
            border-radius: 10%;
            margin-bottom: 50px;
            padding-bottom: 30px;
        }

        .button {

            width: 50%;
            text-align: center;
        }

        input:checked + em {
            background-color: #e5f716f1;
        }
        `
        document.head.append(style);
    };

    onAdd() {
        let user = new User ({id: document.querySelector('#ID').value,
                            name: document.querySelector('#names').value,
                            email: document.querySelector('#mail').value,
                            address: document.querySelector('#address').value,
                            phone: document.querySelector('#phone').value})

        let contactsData = [];

        function setStorage(data) {
    
            localStorage.setItem('contactsData', JSON.stringify(app.data));
            document.cookie = 'contactsData=user; max-age=864000';
        }

        let search2 = app.data.findIndex(contact => contact.id === user.id);
        if (search2 === -1) { 
                app.add(user);
                contactsData.push(app.data);
                setStorage(app.data);
    }
                
    else {alert('Пользователь с таким ID уже существует')}

    function getStorage(){

        let localContactsData = localStorage.getItem('contactsData');
            if (localContactsData.length > 0) contactsData = JSON.parse(localContactsData);
    }

    console.log(contactsData)

    function contactsUpdate(){

        getStorage();

        let contactList = document.querySelector('#list');
        contactList.innerHTML = '';
        contactsData.forEach(function(user, id) {

            let elemContact = document.createElement('div');
            elemContact.innerHTML = `
            <div class="ID_1">${id + 1}</div>
            <em>Пользователь ${user.name}: ID - ${user.id}, электронная почта - ${user.email}, адрес - ${user.address}, телефон - ${user.phone}</em>
            `;

            contactList.appendChild(elemContact);
        });
    }

    contactsUpdate();

    if (document.cookie == null) window.localStorage.clear();

    }


    onEdit(){

        let correction = app.elem(document.getElementById('ID').value);
            if(correction) {
                app.edit(correction.id, {id: document.querySelector('#ID').value,
                    name: document.querySelector('#names').value,
                    email: document.querySelector('#mail').value,
                    address: document.querySelector('#address').value,
                    phone: document.querySelector('#phone').value});
                    console.log(app.get());
    }
        
    let em = document.querySelector('em'); 

    names.oninput = function() {
        em.innerHTML = `Пользователь ${document.querySelector('#names').value}: ID - ${document.querySelector('#ID').value}, электронная почта - ${document.querySelector('#mail').value}, адрес - ${document.querySelector('#address').value}, телефон - ${document.querySelector('#phone').value}`
    }

    mail.oninput = function() {
        em.innerHTML = `Пользователь ${document.querySelector('#names').value}: ID - ${document.querySelector('#ID').value}, электронная почта - ${document.querySelector('#mail').value}, адрес - ${document.querySelector('#address').value}, телефон - ${document.querySelector('#phone').value}`
    }

    address.oninput = function() {
        em.innerHTML = `Пользователь ${document.querySelector('#names').value}: ID - ${document.querySelector('#ID').value}, электронная почта - ${document.querySelector('#mail').value}, адрес - ${document.querySelector('#address').value}, телефон - ${document.querySelector('#phone').value}`
    }

    phone.oninput = function() {
        em.innerHTML = `Пользователь ${document.querySelector('#names').value}: ID - ${document.querySelector('#ID').value}, электронная почта - ${document.querySelector('#mail').value}, адрес - ${document.querySelector('#address').value}, телефон - ${document.querySelector('#phone').value}`
    } 
    }

    onReset(){
        document.getElementById("myForm").reset();  
    }

    onRemove(){
        app.remove(+(document.getElementById('ID').value));
        console.log(app.get());
    }

}

    let app = new ContactsApp();

    let getData = async function () {
        
        let url = 'https://jsonplaceholder.typicode.com/users';

            if (app.data.length === 0) {

                await fetch(url).then(function(responce){

                return responce.json()
    }).then (function (putData) {
                app.data.push(putData);
                console.log(app.data);
    })

    localStorage.setItem('contacts', JSON.stringify(app.data));

    
}

}()