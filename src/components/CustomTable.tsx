import { ModelTable } from "../models/modelTable";

interface Props<T> {
  dataTable: ModelTable<T>;
}

export default function CustomTable<T>({ dataTable }: Props<T>) {
  return (
    <div>
      <div className={`grid grid-cols-${dataTable.columns.length} bg-[#E7FAFF] text-[#24A2CE] font-bold py-2`}>
        {dataTable.columns.map((column) => (
          <div key={column.field} className="px-10">
            {column.header}
          </div>
        ))}
      </div>
      {dataTable.rows.map((row, rowIndex) => (
        <div key={rowIndex} className={`grid grid-cols-${dataTable.columns.length}`}>
          {dataTable.columns.map((column) => (
            <p key={`${rowIndex}-${column.field}`} className="px-5 py-2 border-solid border-b-2 border-[#F5F5F5]">
              {(row as any)[column.field]}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
