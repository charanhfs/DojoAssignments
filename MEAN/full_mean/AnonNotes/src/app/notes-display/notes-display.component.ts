import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../note.service';

import { Note } from '../note';

@Component({
  selector: 'app-notes-display',
  templateUrl: './notes-display.component.html',
  styleUrls: ['./notes-display.component.css']
})
export class NotesDisplayComponent implements OnInit {
  @Input() myNotes;
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  

  ngOnInit() {

  }

}
