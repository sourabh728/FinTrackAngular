import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,
    LoginComponent],
  imports: [BrowserModule,
    FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }