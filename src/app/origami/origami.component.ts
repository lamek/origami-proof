import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-origami',
  standalone: true,
  imports: [CommonModule], // add to the imports array
  templateUrl: './origami.component.html',
  styleUrl: './origami.component.css'
})

export class OrigamiComponent implements AfterViewInit {
  @Input() currentStepIndex: number = 0;
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
      const canvas = this.canvasRef.nativeElement;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return; // Error handling if context is not available
      }
      this.drawOrigami(ctx);
  }

  drawOrigami(ctx: CanvasRenderingContext2D) {
      // Clear the canvas
      ctx.clearRect(0, 0, 300, 300);

      // Draw the square
      ctx.fillStyle = 'lightblue';
      ctx.fillRect(0, 0, 300, 300);
      ctx.strokeStyle = "black";
      ctx.strokeRect(0, 0, 300, 300);

      // Draw elements based on the current step
      if (this.currentStepIndex >= 1) {
          // Draw the diagonal fold
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(300, 300);
          ctx.stroke();

          // // Label the corners
          // ctx.fillStyle = 'black';  // Set text color to black
          // ctx.font = '16px Arial';
          // ctx.fillText('A', -5, 10);   // Top-left (A), outside the square
          // ctx.fillText('B', 305, 290); // Bottom-right (B), outside the square
      } 
      
      if (this.currentStepIndex >= 2) {
          // Draw the vertical fold
          ctx.beginPath();
          ctx.moveTo(150, 0);
          ctx.lineTo(150, 300);
          ctx.stroke();
      }
      
      if (this.currentStepIndex >= 3) {
          // Draw the intersecting fold
          ctx.beginPath();
          ctx.moveTo(150, 0);
          ctx.lineTo(0, 300);
          ctx.stroke();
      }

      if (this.currentStepIndex >= 4 && this.currentStepIndex <= 5) { // Show the circle only on step 4 or later
          ctx.beginPath();
          ctx.arc(100, 100, 10, 0, 2 * Math.PI); // (x, y, radius, startAngle, endAngle)
          ctx.strokeStyle = 'blue'; 
          ctx.lineWidth = 3;        // Make the circle bolder
          ctx.stroke();
          ctx.lineWidth = 1; 
      }

      if (this.currentStepIndex >= 5) { // Show the circle only on step 4 or later
          ctx.beginPath();
          ctx.setLineDash([5, 5]); 
          ctx.strokeStyle = 'red'; 
          ctx.moveTo(0, 100);
          ctx.lineTo(300, 100);
          ctx.setLineDash([]);
          ctx.stroke();
      }

      if (this.currentStepIndex == 6) { // Draw the grid only on step 6 or later
        // Set the grid line properties
        ctx.strokeStyle = 'darkgray';  // Light gray color
        ctx.lineWidth = 1;              // Adjust the line width as needed

        // Draw horizontal grid lines
        for (let y = 100; y < 300; y += 100) { // Assuming you want 3 lines (3 equal sections)
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(300, y);
            ctx.stroke();
        }

        // Draw vertical grid lines
        for (let x = 100; x < 300; x += 100) { // Assuming you want 3 lines (3 equal sections)
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, 300);
            ctx.stroke();
        }
    }
  }

  ngOnChanges() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return; // Error handling if context is not available
    }
    this.drawOrigami(ctx);
  }
}