import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ToastyModule} from 'ng2-toasty';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-modules';
import { CursoModule } from './curso/curso.module';
import { AuthModule } from './auth/auth.module';
import { CursoService } from './curso/curso.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursoModule,
    AuthModule,
    ToastyModule.forRoot()
  ],
  exports:[
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
