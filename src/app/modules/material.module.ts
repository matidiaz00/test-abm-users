import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatDividerModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatDividerModule, MatInputModule],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatDividerModule, MatInputModule],
})
export class MaterialModule { }