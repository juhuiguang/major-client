import { Component, OnInit } from '@angular/core';
import { JhiEventManager } from 'ng-jhipster';
import { MenuObject } from '../model/menuObject';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-tree',
  templateUrl: './nav-tree.component.html',
  styleUrls: ['./nav-tree.component.css']
})
export class NavTreeComponent implements OnInit {
  subMenus:Array<MenuObject>=new Array<MenuObject>();
  constructor(
    private eventManager: JhiEventManager,
    private router:Router
  ) { 

  }


  clickMenu(menu:MenuObject){
    this.subMenus.forEach(element => {
      element.selected=false;
    });
    menu.selected=true;
    this.eventManager.broadcast({name:"subMenuChange",menu:menu});
    if(menu.menuLink!=null&&menu.menuLink.length>0){
      this.router.navigateByUrl(menu.menuLink.toString());
    }
  }

  ngOnInit() {
    this.eventManager.subscribe("menuSelect",(response)=>{
        var menu:MenuObject=response.menu;
        this.subMenus=menu.subMenus;
        if(this.subMenus.length>0){
          this.clickMenu(this.subMenus[0]);
        }
    })
  }

}
