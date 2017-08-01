import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Note } from './note';

@Injectable()
export class NoteService {
  constructor(private http: Http) {}

  getNotes(): Promise<Note[]> {
    return this.http.get('/api/notes')
      .map(response => response.json())
      .toPromise();
  }

  createNote(note: Note): Promise<Note> {
    return this.http.post('/api/notes', note)
      .map(data => data.json())
      .toPromise();
  }
}