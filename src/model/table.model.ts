export interface Table {
  headers: TableHeader[];
  rows: TableRow[];
}

export interface TableHeader {
  name: string;
  translatedName: string | null;
}

export interface TableRow {
  id: string;
  fields: Record<string, TableRowValue>;
  parentId: string | null;
  children: Table | null;
  selectable: boolean;
  editOptions: string[];
}

export interface TableRowValue {
  id: string | null;
  name: string | null;
  icon: string | null;
  editable: boolean;
  status: TableRowStatusField | null;
}

export interface TableRowStatusField {
  hasStatus: boolean;
  color: string | null;
}
