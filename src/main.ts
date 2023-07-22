import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TableComponent } from './table/table.component';
import { table } from './mock/table-data-mock';
import { Table } from './model/table.model';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TableComponent],
  template: `
    <table-component [table]="table"></table-component>
  `,
})
export class App {
  table: Table = table;
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});
