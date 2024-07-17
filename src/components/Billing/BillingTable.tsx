import { ModelTable } from "../../models/modelTable";

interface Props<T> {
  dataTable: ModelTable<T>;
}

export default function BillingTable<T>({ dataTable }: Props<T>) {
  return (
    <div>
      <div className={`grid grid-cols-${dataTable.columns.length} bg-[#E7FAFF] text-[#24A2CE] font-bold py-2`}>
        {dataTable.columns.map((column) => (
          <div key={column.field} className="px-2">
            {column.header}
          </div>
        ))}
      </div>
      <div className="max-h-[500px] overflow-auto">
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
    </div>
  );
}
