export interface ModelTable<T> {
  columns: ModelColumsTable[];
  rows: T[];
}

export interface ModelColumsTable {
  header: string;
  field: string;
}
