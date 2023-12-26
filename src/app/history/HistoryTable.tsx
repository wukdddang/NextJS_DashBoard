import { Table } from '@tanstack/table-core';
import { flexRender } from '@tanstack/react-table';
import { EqPointsType } from '../store/GlobalStore';
import HistoryFilter from './HistoryFilter';
import DebouncedInput from './DebouncedInput';
import PaginationNumber from '../containers/PaginationNumber';
import { getTableCellStyles } from '../utils/getTableCellStyles';
import { MdDownload } from 'react-icons/md';

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
  isHistoryPage?: boolean;
};

export default function HistoryTable({
  table,
  globalFilter,
  setGlobalFilter,
  // data,
  pageIndex,
  pageSize,
  isHistoryPage = false,
}: Props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-md-flex">
          <div>
            <h4 className="tw-text-[24px] tw-font-bold tw-tracking-[-1px]">
              Histories of Last Earthquakes
            </h4>
          </div>
        </div>
        <div className="table-responsive">
          <div className="p-2">
            <div className="tw-flex tw-justify-between">
              <div>
                <DebouncedInput
                  value={globalFilter ?? ''}
                  onChange={(value) => setGlobalFilter(String(value))}
                  className="tw-font-lg tw-border-block tw-border tw-p-2"
                  placeholder="Search with keywords..."
                />
              </div>
              <div className="gap-2 tw-flex tw-items-center">
                {/* <span className="tw-flex tw-items-center tw-gap-1">
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
                </span> */}
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
                        const cellValue = cell.getValue();
                        const isLuDownload = cellValue === 'LuDownload';
                        const cellStyle = getTableCellStyles(cell, isHistoryPage);
                        return (
                          <td key={cell.id} style={cellStyle}>
                            {isLuDownload ? (
                              <div className="dropstart">
                                <span
                                  className="dropdown-toggle dropdown-toggle-icon"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <MdDownload className={'tw-cursor-pointer'} />
                                </span>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Action
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Another action
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Something else here
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            ) : (
                              flexRender(cell.column.columnDef.cell, cell.getContext())
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="h-2" />
            <div className="tw-flex tw-items-center tw-justify-between">
              <div className="tw-flex tw-items-center tw-justify-between tw-gap-1">
                <button
                  className="btn tw-rounded tw-border tw-bg-PRIMARY tw-pt-2 tw-text-white tw-drop-shadow-lg"
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  {'Home'}
                </button>
                <button
                  className="btn btn-primary tw-rounded tw-border tw-pt-2 tw-drop-shadow-lg"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  {'Prev'}
                </button>
                <button
                  className="btn btn-primary tw-rounded tw-border tw-pt-2 tw-drop-shadow-lg"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  {'Next'}
                </button>
                <button
                  className="btn tw-rounded tw-border tw-bg-PRIMARY tw-pt-2 tw-text-white tw-drop-shadow-lg"
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  {'End'}
                </button>
              </div>
              {/* <PaginationNumber table={table} pageIndex={pageIndex} pageSize={pageSize} /> */}
              <span className="tw-flex tw-items-center tw-gap-1">
                <div>
                  <span>Page</span>
                  <select
                    value={table.getState().pagination.pageIndex}
                    onChange={(e) => {
                      table.setPageIndex(Number(e.target.value));
                    }}
                  >
                    {Array.from({ length: table.getPageCount() }, (_, i) => i + 1).map(
                      (pageSize) => (
                        <option key={pageSize} value={pageSize - 1}>
                          <strong>{pageSize}</strong>
                        </option>
                      )
                    )}
                  </select>
                </div>
                {/* <div>Page</div> */}
                <strong>of {table.getPageCount()}</strong>
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
