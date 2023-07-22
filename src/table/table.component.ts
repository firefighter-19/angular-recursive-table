import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { Table, TableHeader, TableRow } from '../model/table.model';
import { TableSizeListenerDirective } from './table.directive';

@Component({
  selector: 'table-component',
  templateUrl: 'table.component.html',
  styles: ['table.component.css'],
  standalone: true,
  imports: [CommonModule, TableSizeListenerDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableComponent implements OnInit, AfterViewChecked {
  tableHeaders: TableHeader[] = [];
  tableRows: TableRow[] = [];
  expanded: Record<string, boolean> = {};
  cellUnderEdit: Record<string, string> = {};

  flexParams: Record<string, string> = {};

  private readonly renderer2: Renderer2 = inject(Renderer2);

  constructor() {
    this.cells = null;
    this.headerCells = null;
  }

  @ViewChildren('tableCell', {
    read: ElementRef,
  })
  cells: QueryList<ElementRef> | null;

  @ViewChildren('headerCell', {
    read: ElementRef,
  })
  headerCells: QueryList<ElementRef> | null;

  @Input() table: Table | null = null;

  ngOnInit(): void {
    if (this.table) {
      const { headers, rows } = this.table;
      const { headers: header, rows: tableRows } = this.tableMapper(
        headers,
        rows
      );
      this.tableHeaders = header;
      this.tableRows = tableRows;
    }
  }

  ngAfterViewChecked(): void {
    this.setDistanceBetweenHeaderElements();
  }

  private setDistanceBetweenHeaderElements(): void {
    this.cells
      ?.map((el) => el.nativeElement.offsetWidth)
      .slice(0, this.tableHeaders.length)
      .forEach((length, index) => {
        if (this.headerCells) {
          this.renderer2.setAttribute(
            this.headerCells?.toArray()[index]?.nativeElement,
            'style',
            `width: ${length}px`
          );
        }
        if (this.cells) {
          const elemIndex =
            this.cells.length - this.tableHeaders.length + index;
          this.renderer2.setAttribute(
            this.cells.toArray()[elemIndex].nativeElement,
            'style',
            `width: ${length}px`
          );
        }
      });
  }

  getId(id: string): void {
    console.log(this.expanded);
    this.expanded[id] = !this.expanded[id];
  }

  editField(id: string): void {
    this.cellUnderEdit[id] = id;
  }

  private tableMapper(
    tableHeaders: TableHeader[],
    tableRows: TableRow[]
  ): Table {
    const { rowHasChild, rowSelectable } = this.getRowOptions(tableRows);
    if (rowHasChild && !rowSelectable) {
      return this.createTableWithChild(tableHeaders, tableRows);
    } else if (rowSelectable && !rowHasChild) {
      return this.createTableWithSelect(tableHeaders, tableRows);
    }
    return {
      headers: [...tableHeaders],
      rows: [...tableRows],
    };
  }

  private createTableWithChild(
    tableHeaders: TableHeader[],
    tableRows: TableRow[]
  ): Table {
    return {
      headers: [{ name: null, translatedName: null }, ...tableHeaders],
      rows: this.addRowChild(tableRows),
    } as Table;
  }

  private createTableWithSelect(
    tableHeaders: TableHeader[],
    tableRows: TableRow[]
  ): Table {
    return {
      headers: [{ name: 'selectable', translatedName: null }, ...tableHeaders],
      rows: [...tableRows],
    };
  }

  private addRowChild(tableRows: TableRow[]): TableRow[] {
    return tableRows.map((row) => ({
      ...row,
      fields: {
        null: {
          name: null,
          editable: false,
          status: null,
          icon: null,
          id: null,
        },
        ...row.fields,
      },
    }));
  }

  private getRowOptions(tableRows: TableRow[]): {
    rowHasChild: boolean;
    rowSelectable: boolean;
  } {
    const rowOptions = {
      rowHasChild: false,
      rowSelectable: false,
    };
    tableRows.forEach((row) => {
      if (row.children) {
        rowOptions.rowHasChild = true;
      }
      if (row.selectable) {
        rowOptions.rowSelectable = true;
      }
    });
    return rowOptions;
  }
}
