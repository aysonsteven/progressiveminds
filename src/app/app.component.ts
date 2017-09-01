import { Component } from '@angular/core';
import { UsersService } from "../services/users.service"
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UsersService]
})
export class AppComponent {
    constructor( private users: UsersService ){
        this.users.req().subscribe(res => {
            if( res.length > 0) console.log( res );
            else console.log( 'no result');
        });
    }
    title = 'app';
}
