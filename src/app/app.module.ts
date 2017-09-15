import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from "@angular/http"
import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from "@angular/router"

//MODULES


//COMPONENTS
    //pages
import { LoginPage } from "../pages/users/login/login.page"
import { RegisterPage } from "../pages/users/register/register.page"
import { AboutPage } from "../pages/about/about.page"
import { ContactPage } from "../pages/contact/contact.page"
import { HomePage } from "../pages/home/home.page"

import { NotfoundPage } from "../pages/pagenotfound/notfound.page"
    //components
import { Template } from "../template/template"

import { HeaderComponent } from "../components/header/header.component"
import { FooterComponent } from "../components/footer/footer.component"
import { SliderComponent } from "../components/slider/slider.component"
//DIRECTIVES


//SERVICES


const routes: Routes = [
    { path: 'about', component: AboutPage },
    { path: 'home', component: HomePage },
    { path: '', redirectTo: 'home' , pathMatch: 'full'},
    { path: 'contact', component: ContactPage },
    { path: '**', component: NotfoundPage }
]
@NgModule({
    declarations: [
        AppComponent,
        LoginPage,
        RegisterPage,
        Template,
        HeaderComponent,
        FooterComponent,
        SliderComponent,
        AboutPage,
        ContactPage,
        HomePage,
        NotfoundPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot( routes )
    ],
    providers: [ HttpModule ],
    bootstrap: [AppComponent]
})
export class AppModule { }
