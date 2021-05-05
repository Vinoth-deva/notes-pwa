import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteformComponent } from './noteform/noteform.component';
import { NoteslistComponent } from './noteslist/noteslist.component';


const routes: Routes = [{
  path: 'home',
  component: NoteslistComponent
},
{
  path: 'form',
  component: NoteformComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
