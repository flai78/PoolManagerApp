
import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/dto';
import { TfsService } from '../../services/tfsServices';

@Component({
    selector: 'login',
    providers: [TfsService],
    templateUrl: 'pages/login/login.component.html',
    styleUrls:["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
    
    public user: User;


    constructor(private tfsService: TfsService) {
    
        this.user = new User();
        
     }

    ngOnInit() { }

    onTap(){

var data = this.tfsService.getBuilds(this.user);
        
        alert(  this.user.username + " " + this.user.password);
    }
}

