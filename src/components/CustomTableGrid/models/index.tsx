export interface CustomTableGridProps {
  columns: ColumnsTableGrid[];
  rows: any[];
  cols: number;
}

export interface ColumnsTableGrid {
  label: string;
  key: string;
}
