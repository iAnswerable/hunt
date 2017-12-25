import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyMaterialModule } from './models/material.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { UserpostsComponent } from './user/userposts/userposts.component';
import { AddpostComponent } from './posts/addpost/addpost.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes:Routes = [
    { path:'', component: UserComponent },
    { path:'posts', component:PostsComponent },
    { path:'add', component:AddpostComponent},
    { path:'add/:userId', component:AddpostComponent},
    { path:'user', component: UserComponent },
    { path:'user/:id', component: UserpostsComponent },
    { path:'contact', component: ContactsComponent },
    { path:'**', component:UserComponent }
  ]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostsComponent,
    UserpostsComponent,
    AddpostComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
