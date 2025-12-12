import { Component } from '@angular/core';
// Importamos TiendaComponent para usarlo
import { Tienda } from './tienda/tienda'; 
// Asume que también tienes el router-outlet para las notas
import { RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // Asegúrate de incluir TiendaComponent en los imports
  imports: [Tienda, RouterOutlet, RouterLink], 
  templateUrl: './app.html',
})
export class App {
  title = 'AngularDemo';
}