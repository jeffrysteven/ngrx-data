import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import { ServicesModule } from './services/services.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CatFormComponent } from './components/cat-form/cat-form.component';
import { CatListComponent } from './components/cat-list/cat-list.component';
// import { HeaderInterceptor } from './utils/http-header.interceptor';

@NgModule({
  declarations: [AppComponent, CatFormComponent, CatListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServicesModule,
    AppStoreModule,
    FormsModule
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
