import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // Importamos la utilidad

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes: string[] = [];
  private readonly STORAGE_KEY = 'appNotesList';
  private isBrowser: boolean; // Bandera para saber si estamos en el navegador

  // Inyectamos PLATFORM_ID en el constructor
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    // 1. Verificamos si la plataforma es el navegador
    this.isBrowser = isPlatformBrowser(platformId);

    // 2. Solo cargamos las notas si estamos en el navegador
    if (this.isBrowser) {
      this.loadNotes();
    } else {
      // Opcional: Si estamos en el servidor, podemos inicializar con datos vacíos o estáticos
      this.notes = ['Cargando...']; 
    }
  }

  private loadNotes(): void {
    // 3. Ya no necesitamos la comprobación aquí, porque el constructor ya la hizo
    const storedNotes = localStorage.getItem(this.STORAGE_KEY);
    this.notes = storedNotes ? JSON.parse(storedNotes) : ['Nota inicial del servicio'];
  }

  private saveNotes(): void {
    // 4. Aseguramos que guardamos solo si estamos en el navegador
    if (this.isBrowser) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.notes));
    }
  }

  // Getters y Setters permanecen iguales, pero llaman a los métodos seguros:

  getNotes(): string[] {
    return this.notes;
  }

  addNote(newNote: string): void {
    if (newNote && newNote.trim().length > 0) {
      this.notes.push(newNote);
      this.saveNotes(); // Este método ahora verifica si es seguro guardar
    }
  }
}