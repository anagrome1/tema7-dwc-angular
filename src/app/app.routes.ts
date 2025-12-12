import { Routes } from '@angular/router';
import { Notes } from "./notes/notes";
import { Tienda } from "./tienda/tienda"; // Tu componente de Tienda

export const routes: Routes = [
    { path: "", component: Notes, pathMatch: "full" },
    { path: "tienda", component: Tienda },     // Nueva ruta: Tienda
];
