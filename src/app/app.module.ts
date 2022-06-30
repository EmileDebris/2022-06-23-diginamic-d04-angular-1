import { CreateCollegueReactivePage } from './pages/create-collegue-reactive/create-collegue-reactive.page';
import { CreateColleaguePage } from './pages/create-colleague/create-colleague.page';
import { WelcomePage } from './pages/welcome/welcome.page';
import { RouterModule, Routes } from '@angular/router';
import { CreateCollegueReactiveModule } from './pages/create-collegue-reactive/create-collegue-reactive.module';
import { CreateColleagueModule } from './pages/create-colleague/create-colleague.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    WelcomeModule,
    HttpClientModule,
    CreateColleagueModule,
    CreateCollegueReactiveModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
