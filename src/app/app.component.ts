import { Component } from '@angular/core';
import { UsersService } from "../services/users.service"
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UsersService]
})
export class AppComponent {
    data = [{}];
    constructor( private users: UsersService ){
        let values = {
            id: 2
        };
        // this.users.getById( values, res =>{
        //     this.data = res;
        // }, err=>{ console.log( 'error', err )} );
        this.users.getAll( res =>{
            this.data = res;
        }, err =>{
            console.log( 'error', err );
        })
    }
    title = 'app';
}
