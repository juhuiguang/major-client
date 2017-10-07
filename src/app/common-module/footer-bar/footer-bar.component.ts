import { Component, OnInit } from '@angular/core';
import { SystemConfig } from '../model/system-config';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.css']
})
export class FooterBarComponent implements OnInit {
  // private sysconfig:SystemConfig;
  constructor(private sysconfig:SystemConfig) { }

  ngOnInit() {
    // this.sysconfig=new SystemConfig();
  }

}
