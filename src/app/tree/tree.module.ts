import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeComponent } from './tree.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    TreeComponent,
  ],
  entryComponents: [
  ]
})

export class TreeModule {
}
