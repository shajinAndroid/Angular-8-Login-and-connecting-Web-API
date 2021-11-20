import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { InitialComponent } from './initial/initial.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    LoginComponent,
    InitialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
         path: 'root1',
         component: LoginComponent
      },
      {
        path: 'root',
        component: AppComponent
     }
   ]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [InitialComponent]
})
export class AppModule { }
