import { Component, OnInit } from '@angular/core';
import { SystemConfig } from '../model/system-config';
import { MenuObject } from '../model/menuObject';
import { JhiEventManager } from 'ng-jhipster';


@Component({
  selector: 'app-banner-bar',
  templateUrl: './banner-bar.component.html',
  styleUrls: ['./banner-bar.component.css']
})
export class BannerBarComponent implements OnInit {
  // private sysconfig:SystemConfig
  constructor(
    private sysconfig:SystemConfig,
    private eventManager: JhiEventManager
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
    menu.selected=true;
    this.eventManager.broadcast({name:"menuSelect",menu:menu})
  }

  ngOnInit() {
    
    // this.sysconfig=new SystemConfig();
  }

}
