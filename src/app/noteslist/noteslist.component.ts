import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INotesList } from '../model.ts/INoteList';
import { DataBroadCastService } from '../services/dataService';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.scss']
})
export class NoteslistComponent implements OnInit {


  public notesList: INotesList[] =  [];

  private _router: Router;
  private _form = ['form'];
  private _dataBroadCastService: DataBroadCastService;

  constructor(private injector: Injector) {
    this._router = this.injector.get(Router);
    this._dataBroadCastService = this.injector.get(DataBroadCastService);
  }

  ngOnInit(): void {
    this.notesList = this._dataBroadCastService.getData();
  }

  onAddNoteClick() {
    this._router.navigate(this._form);
  }


}
