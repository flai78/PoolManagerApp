import { Injectable } from '@angular/core';
import * as appSetting from 'application-settings';

@Injectable()
export class AppSettingService {
       
        constructor() {

        }

getTypeSetting<T>(key : string):T{

    try {
        return <T>JSON.parse(appSetting.getString(key))
        } 
    catch (error) {
        return null; 
    }
   
}

    setTypeSetting<T>(key: string, value: T){
        
        let str = JSON.stringify(value);
        appSetting.setString(key,str);
    }

    getSetting(key : string) : string{

        try {
            return appSetting.getString(key,'default');
        } catch (error) {
           console.log(error) 
           return 'error'
        }
    }

    setSetting(key: string, value: string){
        appSetting.setString(key,value);
    }

}

   
