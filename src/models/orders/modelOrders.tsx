export interface ModelOrders {
  company: number | null;
}

export interface ModelTableOrders<T> {
  columns: ModelColumsTableOrders[];
  rows: T[];
}

export interface ModelColumsTableOrders {
  header: string;
  field: string;
  width: number;
}
