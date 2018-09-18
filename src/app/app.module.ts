import { TodoService } from './services/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { NewToDoComponent } from './components/new-to-do/new-to-do.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/toDos', pathMatch: 'full' },
  { path: 'toDos', component: TodosComponent },
  { path: 'newToDo', component: NewToDoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NewToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
