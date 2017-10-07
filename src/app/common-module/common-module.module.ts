import { NgZorroAntdModule } from "ng-zorro-antd";
import { NgModule } from "@angular/core";
import { SystemConfig } from "./model/system-config";
import { LoginComponent } from "./login/login.component";
import { BannerBarComponent } from "./banner-bar/banner-bar.component";
import { NavTreeComponent } from "./nav-tree/nav-tree.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { MessageBoxComponent } from "./message-box/message-box.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { FooterBarComponent } from "./footer-bar/footer-bar.component";
import { HttpModule } from "@angular/http";
import 'rxjs/Rx';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgJhipsterModule, JhiEventManager } from "ng-jhipster";
import { BeradNavComponent } from './berad-nav/berad-nav.component';
import { Routes, RouterModule } from "@angular/router";
import {  ReactiveFormsModule } from "@angular/forms";
import { Ng2Webstorage } from "ngx-webstorage";




@NgModule({
  imports: [
    ReactiveFormsModule,
    NgZorroAntdModule,
    HttpModule,
    BrowserModule,
    CommonModule,
    NgJhipsterModule,
    Ng2Webstorage
  ],
  providers:[
    SystemConfig,
    JhiEventManager
  ],
  declarations: [
    LoginComponent,
    BannerBarComponent, 
    NavTreeComponent, 
    UserInfoComponent, 
    MessageBoxComponent, 
    WelcomePageComponent, 
    FooterBarComponent, 
    BeradNavComponent
  ],
  exports:[
    LoginComponent,
    BannerBarComponent, 
    NavTreeComponent, 
    UserInfoComponent, 
    MessageBoxComponent,
    WelcomePageComponent,
    FooterBarComponent,
    BeradNavComponent
  ]
})
export class CommonModuleModule { }
