import { Component, OnInit } from '@angular/core';
import { SystemConfig } from '../model/system-config';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { LoginUser } from '../model/loginUser';
import { JhiEventManager } from 'ng-jhipster';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private sysconfig:SystemConfig,
    private fb: FormBuilder,
    private eventManager:JhiEventManager
  ) { }

  isLoginError:boolean=false;
  loginError:String="";
  validateForm: FormGroup;
  
    _submitForm() {
      this.isLoginError=false;
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[ i ].markAsDirty();
      }
      if(this.validateForm.valid){
        var loginUser:LoginUser=this.validateForm.value;
        console.log(loginUser);
        if(loginUser!=null&&loginUser.userName=="admin"&&loginUser.password=="admin"){
          console.log("login success");
          this.eventManager.broadcast({name:"loginSuccess",loginUser:loginUser});
        }else{
          this.isLoginError=true;
          this.loginError="登录失败，登录名或密码错误。"
        }
      }
      

    }
  
    ngOnInit() {
      this.validateForm = this.fb.group({
        userName: [ null, [ Validators.required ] ],
        password: [ null, [ Validators.required ] ],
        remember: [ true ],
      });
    }


}
