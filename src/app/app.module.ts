import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { CommonModuleModule } from './common-module/common-module.module';
import { LoginComponent } from './common-module/login/login.component';
import { WelcomePageComponent } from './common-module/welcome-page/welcome-page.component';
import { BusinessModuleModule } from './business-module/business-module.module';

// 定义系统路由
const routes: Routes = [
  {
    path : '',
    component: WelcomePageComponent
  }, {
    path : 'login',
    component : LoginComponent
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    CommonModuleModule,
    BusinessModuleModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


