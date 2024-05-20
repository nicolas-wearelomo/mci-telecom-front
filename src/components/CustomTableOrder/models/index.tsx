export interface CustomTableOrderProps {
  columns: ColumnsTableGrid[];
  rows: any[];
  cols: number;
  title: string;
}

export interface ColumnsTableGrid {
  label: string;
  key: string;
}
