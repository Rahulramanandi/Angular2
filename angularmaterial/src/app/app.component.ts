import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component'; 


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule,MatCardModule,MatIconModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularmaterial';

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent);
  }

}
