import { Component } from '@angular/core';
import { JhiEventManager } from 'ng-jhipster';
import { LoginUser } from './common-module/model/loginUser';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin = false;
  
  constructor(
    private eventManager:JhiEventManager,
    private sessionStorage:SessionStorageService
  ){

  }
  
  ngOnInit() {

    //如果session中存在用户，直接进入
    var lu:LoginUser=this.sessionStorage.retrieve("loginUser");
    if(lu!=null&&lu.userName.length>0){
      this.isLogin=true;
    }

    this.eventManager.subscribe("loginSuccess",(response)=>{
      var loginUser:LoginUser=response.loginUser;
      this.isLogin=true;
      this.sessionStorage.store("loginUser",loginUser);
    });

    this.eventManager.subscribe("logout",(response)=>{
      this.isLogin=false;
      this.sessionStorage.clear("loginUser");
    });
  }
}

