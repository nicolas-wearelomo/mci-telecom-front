export interface CustomTableOrderProps {
  columns: any;
  rows: any[];
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
  settings?: boolean;
  cols?: any; //BORRAR
  title?: any; //BORRAR
  renderMap?: boolean;
}

export interface ColumnsTableGrid {
  label: string;
  key: string;
}
