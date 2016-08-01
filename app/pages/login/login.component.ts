
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: 'pages/login/login.component.html',
    styleUrls:["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
    
    public username: String;
    public password: String;

    constructor() {
     this.username = new String();
     this.password = new String();
        
     }

    ngOnInit() { }

    onTap(){
        alert(  this.username +" " + this.password);
    }
}

