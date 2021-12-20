import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AntyplagiatComponent } from './antyplagiat/antyplagiat.component';
import { MenuVerticalComponent } from './components/menu-vertical/menu-vertical.component';



@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AntyplagiatComponent,
    MenuVerticalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
