import { Component } from '@angular/core';
import { Note } from './note';
import { NoteService } from './note.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   note: Note = new Note(); 
   notes: Note[] = [];
   errorMessages: string[] = [];

   constructor(private noteService: NoteService){}
   getNotes(): void {
    this.noteService.getNotes()
      .then(notes => this.notes = notes)
      .catch(() => {});
  }

  ngOnInit() {
    this.getNotes();

  }

   onSubmit(note: NgForm): void {
      console.log('submitting note', note);
      this.noteService.createNote(note.value)
        .then((note) => console.log('I have just created a note',note) )
        .catch(error => {
          console.log('catching errors', error);
          this.handleErrors(error.json())
        });
      note.reset();
      this.getNotes();
   }

   private handleErrors(error: string[] | Error): void {
      this.errorMessages = Array.isArray(error) ? error : [error.message];
    }

}

