import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),  // ✅ Required for Angular Material animations
    importProvidersFrom(MatFormFieldModule, MatInputModule, MatButtonModule,MatCardModule)
  ],
});
