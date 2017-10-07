import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { MenuObject } from "./menuObject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SystemConfig{
    systemName:String="高校专业管理系统";
    logo:String="logo.png";
    rights:String="AlienLab ©️ 2017-2020";
    menus:Array<MenuObject>=new Array<MenuObject>();

    constructor(private http: Http){
    
    }

    getMenus(): Observable<Array<MenuObject>>{
         return this.http.get('./assets/menu.json').map(
            (res: Response) => {
              const array: Array<MenuObject> = res.json();
              return array;
            }
          );
    }
    
    ngOnInit() {
        
    }
}