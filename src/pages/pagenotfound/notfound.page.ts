import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
@Component({
    selector: 'notfound',
    template: `
    <div>
        <h1><h1>{{ returnRoute() }}</h1> page does not exist</h1>
    </div>
    `,
    styles: [ `
        div{
            text-align: center;
        }
    div  h1 {
        color: #2aabd2;
        display: inline-block;
        
    }
        h1 > h1{
            text-transform: capitalize;
        }
    ` ]
})
export class NotfoundPage implements OnInit{

    constructor( private activeRoute: Router ){}

    ngOnInit(){
        console.log('route', this.activeRoute.url )
    }

    returnRoute(){
        return this.activeRoute.url.replace('/', '');
    }

}