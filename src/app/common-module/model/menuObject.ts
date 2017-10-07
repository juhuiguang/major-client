export class MenuObject{
     menuName:String;
     menuLink:String;
     menuRoles:String;
     selected:boolean=false;
     subMenus:Array<MenuObject>;
}