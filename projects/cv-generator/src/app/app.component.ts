import { Component } from '@angular/core'
import { RouterOutlet, Routes } from '@angular/router';
import { LibreriaAngular18Component } from '../../../libreria-angular-18/src/lib/libreria-angular-18.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [{ path: '', component: LayoutComponent }];

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<router-outlet />`,
  imports: [RouterOutlet, LibreriaAngular18Component, LayoutComponent],
})
export class AppComponent {
  title = 'cv-generator';
}
