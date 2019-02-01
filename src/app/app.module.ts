
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
// Components recem criados 
//import { HeaderComponent } from './componente';
//import { HomeComponent } from './home';
import { LoginComponent } from './login';
// used to create fake backend
import { BasicAuthInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';

//==============


import { HeaderComponent } from './componente/header/header.component';
import { FooterComponent } from './componente/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ComponentOneComponent } from './componente/component-one/component-one.component';
import { ComponentTwoComponent } from './componente/component-two/component-two.component';
import { HomeComponent } from './componente/home/home.component';





//import { ContentComponent } from './content/content.component';
//import { FooterComponent } from './footer/footer.component';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        RouterModule.forRoot([
        { path: '',component: HomeComponent  },
        { path: 'component-one', component: ComponentOneComponent },
        { path: 'component-two', component: ComponentTwoComponent }
          ])
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        ComponentOneComponent,
        ComponentTwoComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }