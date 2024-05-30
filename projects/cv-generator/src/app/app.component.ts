import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { LibreriaAngular18Component } from "../../../libreria-angular-18/src/lib/libreria-angular-18.component"

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, LibreriaAngular18Component]
})
export class AppComponent {
  title = 'cv-generator';
}
