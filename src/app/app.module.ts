import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './services/data.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TaskFormComponent } from './components/tasks/task-form/task-form.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';

import {TaskService} from './services/task.service';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import { ApirestComponent } from './apirest/apirest.component';
import { LoginComponent } from './login/login.component';
import { LoginListComponent } from './components/login/login-list/login-list.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { LoginViewComponent } from './components/login/login-view/login-view.component';
import { ApiViewComponent } from './components/api/api-view/api-view.component';
import { ApiListComponent } from './components/api/api-list/api-list.component';
import { ApiFormComponent } from './components/api/api-form/api-form.component';
import { ChatboxComponent } from './chatbox/chatbox.component';

const routes: Route[] = [
  { path: ' ', component: AppComponent},
  { path: 'localstorage', component: LocalstorageComponent},
  { path: 'apirest', component: ApirestComponent},
  { path: 'login', component: LoginComponent},
  { path: 'chatbot', component: ChatboxComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TaskFormComponent,
    TaskComponent,
    TaskListComponent,
    LocalstorageComponent,
    ApirestComponent,
    LoginComponent,
    LoginListComponent,
    LoginFormComponent,
    LoginViewComponent,
    ApiViewComponent,
    ApiListComponent,
    ApiFormComponent,
    ChatboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
