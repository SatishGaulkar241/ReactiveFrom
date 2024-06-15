import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';



@NgModule({
  declarations: [
    DiagnosisComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DiagnosisComponent
  ]
})
export class DiagnosisModule { }
