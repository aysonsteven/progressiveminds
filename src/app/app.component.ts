import { Component } from '@angular/core';
import { UsersService } from "../services/users.service"
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [UsersService]
})
export class AppComponent {
    data = [{}];
    constructor( private users: UsersService ){
        let values = {
            id: 2
        };
        this.users.getAllUsers( res =>{
            this.data = res;
        }, err =>{
            console.log( 'error', err );
        });
        this.users.getUserById( values, res =>{
            console.log( res )
        }, error => console.log('ERROR', error ) );
    }
}
