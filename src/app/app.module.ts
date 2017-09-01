import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from "@angular/http"
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [ HttpModule ],
    bootstrap: [AppComponent]
})
export class AppModule { }
