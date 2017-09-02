import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import { Observable } from "rxjs/Observable";
import { Headers , RequestOptions } from "@angular/http"
import 'rxjs/add/operator/map';
@Injectable()
export class UsersService {
    headers: Headers = new Headers();
    options: RequestOptions = new RequestOptions() ;
    url:string = 'http://localhost/project/progressiveminds-backend/public/';
    constructor( private http: Http ) {
    }
    get requestOptions() : RequestOptions {
        let headers  = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options  = new RequestOptions({ headers: headers });
        return options;
    }
    buildQuery( params : any ) {
        return this.http_build_query( params );

    }
    urlencode (str : any) {
        str = (str + '')
        return encodeURIComponent(str)
            .replace(/!/g, '%21')
            .replace(/'/g, '%27')
            .replace(/\(/g, '%28')
            .replace(/\)/g, '%29')
            .replace(/\*/g, '%2A')
            .replace(/%20/g, '+')
    }
    http_build_query (formdata : any, numericPrefix='', argSeparator='') {
        var urlencode = this.urlencode;
        var value : any
        var key : any
        var tmp : any = []
        var _httpBuildQueryHelper = function (key : any, val : any, argSeparator : any) {
            var k : any
            var tmp : any = []
            if (val === true) {
                val = '1'
            } else if (val === false) {
                val = '0'
            }
            if (val !== null) {
                if (typeof val === 'object') {
                    for (k in val) {
                        if (val[k] !== null) {
                            tmp.push(_httpBuildQueryHelper(key + '[' + k + ']', val[k], argSeparator))
                        }
                    }
                    return tmp.join(argSeparator)
                } else if (typeof val !== 'function') {
                    return urlencode(key) + '=' + urlencode(val)
                } else {
                    throw new Error('There was an error processing for http_build_query().')
                }
            } else {
                return ''
            }
        }

        if (!argSeparator) {
            argSeparator = '&'
        }
        for (key in formdata) {
            value = formdata[key]
            if (numericPrefix && !isNaN(key)) {
                key = String(numericPrefix) + key
            }
            var query = _httpBuildQueryHelper(key, value, argSeparator)
            if (query !== '') {
                tmp.push(query)
            }
        }

        return tmp.join(argSeparator)
    }
    query( api, data : any, successCallback : any, errorCallback  : any ) {
        let body = this.buildQuery( data );
        this.http.post( this.getUrl(api), body, this.requestOptions )
            .subscribe( data => {
                try {
                    let re = JSON.parse( data['_body'] );
                    if ( re['code'] ) return errorCallback( re['message'] );;
                    successCallback( re );
                }
                catch( e ) {
                    errorCallback(data['_body']);
                }
            });
    }

    getById( data : any, successCallback , errorCallback: (error:string) => void ){
        this.query( 'hello', data, res=>{
            successCallback( res )
        },err=>{

            errorCallback( err );
        })
    }
    getAll( successCallback , errorCallback: (error:string) => void ){
        this.query( 'all',null, res=>{
            successCallback( res );
        }, err =>{
            errorCallback( err );
        })
    }
    getUrl( qs: string = '' ) {
        return this.url + qs;
    }
    // req( data, successCallback, errorCallback, ){
    //     this.post( data, res =>{
    //     successCallback( res );
    //     }, error =>{
    //         errorCallback( error );
    //
    //     })
    // }
}
