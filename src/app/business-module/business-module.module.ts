import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MajorManageComponent } from './major-manage/major-manage.component';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './training/training.component';

//定义系统路由
const routes: Routes = [
  {
    path : 'majormanage',
    component: MajorManageComponent
  },{
    path : 'majortrain',
    component: TrainingComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [MajorManageComponent, TrainingComponent],
  exports:[MajorManageComponent,TrainingComponent]
})
export class BusinessModuleModule { }
