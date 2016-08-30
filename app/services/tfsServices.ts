import { Injectable } from '@angular/core';
import { User } from '../shared/dto';

@Injectable()
export class TfsService {
    constructor() {
        
    }

    getBuilds(user: User) :Array<any>
    {
        return[

            {
                id: 1,
                name: "build 1"
            }
        ];
    }



}