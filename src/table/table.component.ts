import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import {
  Table,
  TableHeader,
  TableRow,
  TableRowValue,
} from '../model/table.model';

@Component({
  selector: 'table-component',
  templateUrl: 'table.component.html',
  styles: ['table.component.css'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
      transition(
        'expanded <=> void',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableComponent implements OnInit, AfterViewInit {
  tableHeaders: TableHeader[] = [];
  tableRows: TableRow[] = [];

  expanded: Record<string, boolean> = {};
  cellUnderEdit: Record<string, string> = {};

  private readonly renderer2: Renderer2 = inject(Renderer2);

  constructor() {
    this.cells = null;
    this.headerCells = null;
  }

  @Input() table: Table | null = null;
  @Output() updateField = new EventEmitter<{ id: string; name: string }>();

  @ViewChildren('tableCell', {
    read: ElementRef,
  })
  cells: QueryList<ElementRef> | null;

  @ViewChildren('headerCell', {
    read: ElementRef,
  })
  headerCells: QueryList<ElementRef> | null;

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

  ngAfterViewInit(): void {
    this.setDistanceBetweenElements();
  }

  private setDistanceBetweenElements(): void {
    this.cells
      ?.map((el) => el.nativeElement.offsetWidth)
      .slice(0, this.tableHeaders.length)
      .forEach((length, index) => {
        if (this.headerCells) {
          this.renderer2.setAttribute(
            this.headerCells.toArray()[index].nativeElement,
            'style',
            `width: ${length}px`
          );
        }
        if (this.cells) {
          this.renderer2.setAttribute(
            this.cells.toArray()[index].nativeElement,
            'style',
            `width: ${length}px`
          );
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
    this.expanded = { ...this.expanded, [id]: !this.expanded[id] };
    console.log(this.expanded);
  }

  editField(id: string): void {
    this.cellUnderEdit[id] = id;
  }

  saveField(cell: TableRowValue): void {
    if (cell.id && cell.name) {
      delete this.cellUnderEdit[cell.id];
      this.updateField.emit({ id: cell.id, name: cell.name });
    }
  }

  sortColumnBy(headerTable: string): void {
    const isChild = this.tableRows.every((row) => row.parentId);
    if (isChild) {
      this.tableRows = this.tableRows.sort((a, b) => {
        if (
          (a.fields[headerTable].name as string) <
          (b.fields[headerTable].name as string)
        ) {
          return -1;
        }
        return 1;
      });
    }
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
