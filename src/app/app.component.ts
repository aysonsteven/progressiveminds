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
            id: 1
        };

        let userdata = {
            username: 'admin',
            password: 'admin'
        }
        this.users.getAllUsers( res =>{
            this.data = res;
            console.log( res );
        }, error => console.log( 'ERROR', error ));

        this.users.getUserById( values, res =>{
            console.log( res )
        }, error => console.log('ERROR', error ) );

        this.users.login( userdata, res =>{
            console.log( res );
        }, error => console.log( error ));
    }
}
