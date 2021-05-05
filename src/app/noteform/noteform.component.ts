import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { title } from 'process';
import { INotesList } from '../model.ts/INoteList';
import { DataBroadCastService } from '../services/dataService';

@Component({
  selector: 'app-noteform',
  templateUrl: './noteform.component.html',
  styleUrls: ['./noteform.component.scss']
})
export class NoteformComponent implements OnInit {

  private _router: Router;
  private _home = ['home'];
  private _fb: FormBuilder;
  private _dataBroadCastService: DataBroadCastService;

  public addNoteForm: FormGroup;

  constructor(private injector: Injector) {
    this._router = this.injector.get(Router);
    this._fb = this.injector.get(FormBuilder);
    this._dataBroadCastService = this.injector.get(DataBroadCastService);
  }



  ngOnInit() {

    this.addNoteForm = this._fb.group({
      titleField: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      bodyField: ['', [Validators.required, Validators.minLength(3)]]
    });

  }

  onCancelClick() {
    this._router.navigate(this._home);
  }

  onSubmit() {
    debugger
    if (this.addNoteForm.valid) {
      const formData: INotesList = {
        title: this.addNoteForm.value.titleField,
        content: this.addNoteForm.value.bodyField,
        createdOn: new Date()
      };
      this._dataBroadCastService.pushData(formData);
      this._router.navigate(this._home);
    }
  }

}
