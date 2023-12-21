import { EarthquakesTableType } from '@/app/containers/EarthquakesTableContainer';
import HistoryFilter from '@/app/history/HistoryFilter';
import { flexRender } from '@tanstack/react-table';
import { Table } from '@tanstack/table-core';

type Props = {
  table: Table<EarthquakesTableType>;
  tableTitle: string;
  isHistoryPage?: boolean;
};

export default function EarthquakesTable({ table, tableTitle, isHistoryPage = false }: Props) {
  return (
    <div className="table-responsive">
      <div>
        <h4 className="tw-text-[24px] tw-font-bold tw-tracking-[-1px]">{tableTitle} </h4>
      </div>
      <div className="h-2" />
      <table className="table table-striped">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                        {header.column.getCanFilter() ? (
                          <div>
                            <HistoryFilter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  let cellStyle = {};

                  // TODO: 리팩토링할 때 타입 단언 수정하기
                  if (cell.column.id === 'mag' && parseFloat(cell.getValue() as string) >= 5.0) {
                    cellStyle = { fontWeight: 'bold', color: 'red' };
                  }
                  return (
                    <td key={cell.id} style={cellStyle}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="tw-flex tw-items-center tw-justify-between tw-gap-2">
        <div>
          <button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {'<<'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {'>>'}
          </button>
        </div>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </strong>
        </span>
      </div>
      <div>{table.getPrePaginationRowModel().rows.length} Rows</div>
    </div>
  );
}
