import { Component } from '@angular/core'

@Component({
  selector: 'skill-bar',
  standalone: true,
  imports: [],
  template: `
   <ng-content>
    <div class="skill-bar">Skill Bar</div>
</ng-content>
  `,
  styles: ``
})
export class SkillBarComponent {

}
