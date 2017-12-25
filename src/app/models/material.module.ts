import { NgModule } from '@angular/core';
import {
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatGridListModule } from '@angular/material';


@NgModule({
  imports: [MatButtonModule, 
            MatCheckboxModule, 
            MatToolbarModule, 
            MatCardModule,
            MatMenuModule,
            MatIconModule,
            MatProgressSpinnerModule,
            MatTableModule,
            MatPaginatorModule,
            MatInputModule,
            MatGridListModule ],
  exports: [MatButtonModule, 
            MatCheckboxModule, 
            MatToolbarModule, 
            MatCardModule,
            MatMenuModule,
            MatIconModule,
            MatProgressSpinnerModule,
            MatTableModule,
            MatPaginatorModule,
            MatInputModule,
            MatGridListModule ],
})
export class MyMaterialModule { }