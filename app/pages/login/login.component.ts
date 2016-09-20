
import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/dto';
import { TfsService } from '../../services/tfsServices';
import { AppSettingService } from '../../services/appSettingsService';
import * as location from 'location'

@Component({
    selector: 'login',
    providers: [TfsService,AppSettingService],
    templateUrl: 'pages/login/login.component.html',
    styleUrls:["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
    
    public user: User;


    constructor(private tfsService: TfsService,
                private appSetting: AppSettingService) {
    
        this.user = new User();
        
     }

    ngOnInit() { 

        // location.getLocation().then((data)=>{
        //      this.user.username = data.latitude.toString() + " " +
        //                          data.longitude.toString();
        // } );
       
       var userCahe = this.appSetting.getTypeSetting<User>('USERNAME');
    if(userCahe)
        this.user = userCahe;

    }

    onTap(){

        var data = this.tfsService.getBuilds(this.user);
        this.appSetting.setTypeSetting<User>('USERNAME', this.user);
        alert(  this.user.username + " " + this.user.password);
    }
}

