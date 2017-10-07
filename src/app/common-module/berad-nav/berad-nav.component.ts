import { Component, OnInit } from '@angular/core';
import { MenuObject } from '../model/menuObject';
import { JhiEventManager } from 'ng-jhipster';

@Component({
  selector: 'app-berad-nav',
  templateUrl: './berad-nav.component.html',
  styleUrls: ['./berad-nav.component.css']
})
export class BeradNavComponent implements OnInit {
  firstMenu:String;
  secMenu:String;

  constructor(
    private eventManager:JhiEventManager
  )
     { }

  ngOnInit() {
    this.eventManager.subscribe("menuSelect",(response)=>{
      var menu:MenuObject=response.menu;
      this.firstMenu=menu.menuName;
    })

    this.eventManager.subscribe("subMenuChange",(response)=>{
      var menu:MenuObject=response.menu;
      this.secMenu=menu.menuName;
    })
  }

}
