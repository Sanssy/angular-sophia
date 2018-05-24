import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";

import { NavComponent } from './components/nav/nav.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [NavComponent, FormComponent, ReactiveFormComponent],
  exports: [NavComponent, FormComponent, ReactiveFormComponent]
})
export class SharedModule { }
