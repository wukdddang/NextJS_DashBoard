import { Table } from '@tanstack/table-core';
import { flexRender } from '@tanstack/react-table';
import { EqPointsType } from '../store/GlobalStore';
import HistoryFilter from './HistoryFilter';
import DebouncedInput from './DebouncedInput';
import PaginationNumber from '../containers/PaginationNumber';

type Earthquake = {
  date: string;
  lat: string;
  lng: string;
  platform: string;
  preData: string;
  postData: string;
  downloads: React.ReactNode;
  algorithms: string | string[];
} & Omit<EqPointsType, 'createdAt' | 'isRead' | 'lat' | 'lng'>;

type Props = {
  table: Table<Earthquake>;
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  data: Earthquake[];
  pageIndex: number;
  pageSize: number;
};

export default function HistoryTable({
  table,
  globalFilter,
  setGlobalFilter,
  data,
  pageIndex,
  pageSize,
}: Props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-md-flex">
          <div>
            <h4 className="card-title display-4">Histories of Last Earthquakes</h4>
          </div>
        </div>
        <div className="table-responsive">
          <div className="p-2">
            <div className="tw-flex tw-justify-between">
              <div>
                <DebouncedInput
                  value={globalFilter ?? ''}
                  onChange={(value) => setGlobalFilter(String(value))}
                  className="p-2 font-lg border border-block"
                  placeholder="Search with keywords..."
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  Go to page:
                  <input
                    type="number"
                    min={1}
                    defaultValue={table.getState().pagination.pageIndex + 1}
                    onChange={(e) => {
                      const page = e.target.value ? Number(e.target.value) - 1 : 0;
                      table.setPageIndex(page);
                    }}
                    className="border p-1 rounded w-16"
                  />
                </span>
                <select
                  value={table.getState().pagination.pageSize}
                  onChange={(e) => {
                    table.setPageSize(Number(e.target.value));
                  }}
                >
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
              </div>
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
                        if (
                          cell.column.id === 'mag' &&
                          parseFloat(cell.getValue() as string) >= 5.0
                        ) {
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
              <PaginationNumber table={table} pageIndex={pageIndex} pageSize={pageSize} />
              <span className="flex items-center gap-1">
                <div>Page</div>
                <strong>
                  {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </strong>
              </span>
            </div>
            <div>{table.getPrePaginationRowModel().rows.length} Rows</div>
            {/* <div>
                  <button onClick={() => rerender()}>Force Rerender</button>
                </div>
                <div>
                  <button onClick={() => refreshData()}>Refresh Data</button>
                </div> */}
            {/* <pre>{JSON.stringify(table.getState(), null, 2)}</pre> */}
          </div>
        </div>
      </div>
    </div>
  );
}
