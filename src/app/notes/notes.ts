import { Component, OnInit } from '@angular/core';
// Importación necesaria para usar FormsModule [(ngModel)]
import { FormsModule } from '@angular/forms';
//Importación del servicio
import { NotesService } from '../services/notes';

@Component({
  selector: 'app-notes',
  imports: [
    FormsModule
  ],
  templateUrl: './notes.html',
  styleUrl: './notes.css',
})
export class Notes {
  // notes: string[]; // Ya NO necesitamos esta variable local
  note: string = '';

  // 1. Inyección de Dependencias
  // Angular 'inyecta' la instancia única de NotesService aquí.
  constructor(private notesService: NotesService) { }

  // 2. Método para obtener las notas
  get notesList(): string[] {
    // Obtenemos la lista directamente del servicio
    return this.notesService.getNotes();
  }
  createNote() {
    // 3. Llamamos al método del servicio, el componente solo coordina
    this.notesService.addNote(this.note);
    this.note = '';
  }
}

