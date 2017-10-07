import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { TeachtaskComponent } from './teach-manage/teachtask/teachtask.component';
import { CoursestructComponent } from './teach-manage/coursestruct/coursestruct.component';
import { ResourcemanageComponent } from './resource-manage/resourcemanage/resourcemanage.component';
import { CoursemanageComponent } from './basedata/coursemanage/coursemanage.component';
import { CoursetreeComponent } from './basedata/coursetree/coursetree.component';
import { TermmanageComponent } from './basedata/termmanage/termmanage.component';
import { DepmanageComponent } from './basedata/depmanage/depmanage.component';
import { ClassmanageComponent } from './basedata/classmanage/classmanage.component';
import { TeachermanageComponent } from './basedata/teachermanage/teachermanage.component';
import { StudentmanageComponent } from './basedata/studentmanage/studentmanage.component';
import { MajormanageComponent } from './major-manage/majormanage/majormanage.component';
import { TrainingComponent } from './major-manage/training/training.component';
import { MajorcourseComponent } from './major-manage/majorcourse/majorcourse.component';

// 定义系统路由
const routes: Routes = [
  {
    path : 'majormanage',
    component: MajormanageComponent
  }, {
    path : 'majortrain',
    component: TrainingComponent
  }, {
    path : 'majorcourse',
    component: MajorcourseComponent
  }, {
    path : 'coursestruct',
    component: CoursestructComponent
  }, {
    path : 'teachtask',
    component: TeachtaskComponent
  }, {
    path : 'resourcemanage',
    component: ResourcemanageComponent
  }, {
    path : 'coursemanage',
    component: CoursemanageComponent
  }
  , {
    path : 'coursetree',
    component: CoursetreeComponent
  }
  , {
    path : 'termmanage',
    component: TermmanageComponent
  }
  , {
    path : 'depmanage',
    component: DepmanageComponent
  }
  , {
    path : 'classmanage',
    component: ClassmanageComponent
  }
  , {
    path : 'teachermanage',
    component: TeachermanageComponent
  }
  , {
    path : 'studentmanage',
    component: StudentmanageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    MajormanageComponent,
    TrainingComponent ,
    MajorcourseComponent ,
    TeachtaskComponent ,
    CoursestructComponent ,
    ResourcemanageComponent ,
    CoursemanageComponent ,
    CoursetreeComponent ,
    TermmanageComponent ,
    DepmanageComponent ,
    ClassmanageComponent ,
    TeachermanageComponent ,
    StudentmanageComponent
    ],
  exports: [
    MajormanageComponent,
    TrainingComponent ,
    MajorcourseComponent ,
    TeachtaskComponent ,
    CoursestructComponent ,
    ResourcemanageComponent ,
    CoursemanageComponent ,
    CoursetreeComponent ,
    TermmanageComponent ,
    DepmanageComponent ,
    ClassmanageComponent ,
    TeachermanageComponent ,
    StudentmanageComponent
  ]
})
export class BusinessModuleModule { }
