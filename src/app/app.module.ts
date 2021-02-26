import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { GoHomeComponent } from './gohome/gohome.component';
import { OwnerComponent } from './owner/owner.component';
import { LoginComponent } from './login/login.component';
import { TryComponent } from './try/try.component';
import { SignComponent } from './signup/signup.component';
import { FeedComponent } from './feedback/feedback.component';
import { SearchComponent } from './search/search.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, GoHomeComponent, OwnerComponent, LoginComponent, TryComponent, SignComponent, FeedComponent, SearchComponent, HelpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
