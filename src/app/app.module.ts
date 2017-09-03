import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from "@angular/http"
import { AppComponent } from './app.component';


//MODULES


//COMPONENTS
    //pages
import { LoginPage } from "../pages/users/login/login.page"
import { RegisterPage } from "../pages/users/register/register.page"
    //components
import { Template } from "../template/template"

//DIRECTIVES


//SERVICES

@NgModule({
    declarations: [
        AppComponent,
        LoginPage,
        RegisterPage,
        Template
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [ HttpModule ],
    bootstrap: [AppComponent]
})
export class AppModule { }
