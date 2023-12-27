import { EarthquakesTableType } from '@/app/containers/EarthquakesTableContainer';
// import HistoryFilter from '@/app/history/HistoryFilter';
import { getTableCellStyles } from '@/app/utils/getTableCellStyles';
import { flexRender } from '@tanstack/react-table';
import { Table } from '@tanstack/table-core';
import { useEffect } from 'react';
// import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type Props = {
  table: Table<EarthquakesTableType>;
  tableTitle: string;
  // router: AppRouterInstance;
  isHistoryPage?: boolean;
};

export default function EarthquakesTable({ table, tableTitle, isHistoryPage = false }: Props) {
  useEffect(() => {
    table.setPageSize(4);
  }, [table]);

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
                              ? 'tw-cursor-pointer tw-select-none tw-font-bold tw-text-[12px]'
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
                        {/* {header.column.getCanFilter() ? (
                          <div>
                            <HistoryFilter column={header.column} table={table} />
                          </div>
                        ) : null} */}
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
                  const cellStyle = getTableCellStyles(cell, isHistoryPage);
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
        <div className="tw-flex tw-items-center tw-justify-between tw-gap-1">
          <button
            className="btn tw-rounded tw-border tw-bg-PRIMARY tw-pt-2 tw-text-white tw-drop-shadow-lg"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {'<<'}
          </button>
          <button
            className="btn btn-primary tw-rounded tw-border tw-pt-2 tw-drop-shadow-lg"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>
          <button
            className="btn btn-primary tw-rounded tw-border tw-pt-2 tw-drop-shadow-lg"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
          <button
            className="btn tw-rounded tw-border tw-bg-PRIMARY tw-pt-2 tw-text-white tw-drop-shadow-lg"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {'>>'}
          </button>
        </div>

        <span className="tw-flex tw-items-center tw-gap-1">
          <div>
            <span>Page</span>
            <select
              value={table.getState().pagination.pageIndex}
              onChange={(e) => {
                table.setPageIndex(Number(e.target.value));
              }}
            >
              {Array.from({ length: table.getPageCount() }, (_, i) => i + 1).map((pageSize) => (
                <option key={pageSize} value={pageSize - 1}>
                  <strong>{pageSize}</strong>
                </option>
              ))}
            </select>
          </div>
          {/* <div>Page</div> */}
          <strong>of {table.getPageCount()}</strong>
        </span>
      </div>
      <div>{table.getPrePaginationRowModel().rows.length} Rows</div>
    </div>
  );
}
