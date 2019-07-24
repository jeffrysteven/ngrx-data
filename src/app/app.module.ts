import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppStoreModule } from './store/app-store.module';
import { ServicesModule } from './services/services.module';
import { CatFormComponent } from './components/cat-form/cat-form.component';
import { CatListComponent } from './components/cat-list/cat-list.component';

@NgModule({
  declarations: [AppComponent, CatFormComponent, CatListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AppStoreModule,
    ServicesModule
  ],
  /* providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    }
  ],*/
  bootstrap: [AppComponent]
})
export class AppModule {}
