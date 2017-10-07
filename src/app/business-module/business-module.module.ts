import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MajorManageComponent } from './major-manage/major-manage.component';
import { RouterModule, Routes } from '@angular/router';

//定义系统路由
const routes: Routes = [
  {
    path : 'majormanage',
    component: MajorManageComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [MajorManageComponent],
  exports:[MajorManageComponent]
})
export class BusinessModuleModule { }
