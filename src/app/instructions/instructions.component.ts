import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule here


@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css'
})
export class InstructionsComponent {
  @Input() currentStepIndex: number = 0;
  @Output() currentStepIndexChange = new EventEmitter<number>();

  steps = [
    { instruction: "Let's prove how to fold a square into thirds." },
    { instruction: "To start, fold the paper in half diagonally. Fold from the top left corner to bottom right." },
    { instruction: "Fold the paper in half again vertically." },
    { instruction: "The next fold is slightly more difficult. Make a diagonal fold from the top middle of the page, down to the bottom left corner." },
    { instruction: "Notice this intersection." },
    { instruction: "When you draw a line that bisects this intersection (horizontally or vertically), you've found your 1/3rd mark. But how can we prove that this is actually 1/3 of our square?" },
    { instruction: "One easy way is to overlay a grid. When we add a 3x3 grid over our lines, we can see our 1/3rd mark intersects perfectly. Let's try a mathematical way to prove this." },
    { instruction: "Notice how our 1/3 line ." },
    // ... add more steps later
  ];

  previousStep() {
    this.currentStepIndexChange.emit(Math.max(this.currentStepIndex - 1, 0));
  }

  nextStep() {
    this.currentStepIndexChange.emit(Math.min(this.currentStepIndex + 1, this.steps.length - 1));
  }
  
}
