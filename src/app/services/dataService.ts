import { Injectable } from '@angular/core';
import { INotesList } from '../model.ts/INoteList';

@Injectable({
    providedIn: 'root'
})

export class DataBroadCastService {

    private _notesList: INotesList[] = [
        {
            title: 'tets',
            content: 'lorem ipsum',
            createdOn: new Date()
          }
    ];

    constructor() {}

    public pushData(note: INotesList) {
        this._notesList.push(note);
    }

    public getData(): INotesList[] {
        return this._notesList;
    }

}
