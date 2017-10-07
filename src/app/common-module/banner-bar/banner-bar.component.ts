import { Component, OnInit } from '@angular/core';
import { SystemConfig } from '../model/system-config';
import { MenuObject } from '../model/menuObject';
import { JhiEventManager } from 'ng-jhipster';
import { LoginUser } from '../model/loginUser';
import { SessionStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-banner-bar',
  templateUrl: './banner-bar.component.html',
  styleUrls: ['./banner-bar.component.css']
})
export class BannerBarComponent implements OnInit {
  loginUser:LoginUser=new LoginUser();
  constructor(
    private sysconfig:SystemConfig,
    private eventManager: JhiEventManager,
    private sessionStorage:SessionStorageService
  ) { 
    if(sysconfig.menus.length==0){
      sysconfig.getMenus().subscribe((res:Array<MenuObject>)=>{
        sysconfig.menus=res;
        if(sysconfig.menus.length>0){
          this.selectMenu(sysconfig.menus[0]);
        }
      });
    }
  }

  /**
   * 选中菜单
   * @param menu 
   */
  selectMenu(menu:MenuObject){
    this.sysconfig.menus.forEach(element => {
      element.selected=false;
    });
    menu.selected=true;
    this.eventManager.broadcast({name:"menuSelect",menu:menu})
  }

  logout(){
    this.eventManager.broadcast({name:"logout"});
  }

  ngOnInit() {
    this.loginUser=this.sessionStorage.retrieve("loginUser");

    this.eventManager.subscribe("loginSuccess",(response)=>{
      if(this.sysconfig.menus.length>0){
        this.selectMenu(this.sysconfig.menus[0]);
      }
    })
  
  }



}
