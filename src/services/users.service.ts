import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import { Headers , RequestOptions } from "@angular/http"
import 'rxjs/add/operator/map';
import {Base} from "./base/base.service";
@Injectable()
export class UsersService extends Base{
    headers: Headers = new Headers();
    options: RequestOptions = new RequestOptions() ;

    constructor( private h: Http ) {
        super( h );
    }


    getUserById( data : any, successCallback , errorCallback: (error) => void ){
        this.query( 'users', data, res=>{
            if( res.length > 0 && !res[0].error )successCallback( res[0] );
            else {
                let err = { error: {
                    code: 404,
                    message: 'no result'
                }};
                if( res[0].error  ) errorCallback( err );
                // else errorCallback( err[0] );
            }
        },err=>errorCallback( err ));
    }
    getAllUsers( successCallback , errorCallback: (error:string) => void ){
        this.query( 'users',null, res=>{
            successCallback( res );
        }, err =>{
            errorCallback( err );
        })
    }

    login( userdata, successCallback, errorCallback: ( error: string) => void ){
        this.query( 'login', userdata, res=>{
            successCallback( res );
        }, error=> errorCallback( error ));
    }
}
