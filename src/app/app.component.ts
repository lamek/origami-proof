import { Component } from '@angular/core';
import { OrigamiComponent } from './origami/origami.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [OrigamiComponent, InstructionsComponent, CommonModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentStepIndex = 0; 
}

