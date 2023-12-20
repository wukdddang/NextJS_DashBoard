import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from '@tanstack/table-core';
import { LuDownload } from 'react-icons/lu';
import { useMemo, useState } from 'react';
import { fuzzyFilter, fuzzySort } from './SortAndFilterByFuzzy';
import { flexRender, useReactTable } from '@tanstack/react-table';
// import { Person, makeData } from './makeData';
import { EqPointsType } from '../store/GlobalStore';
import HistoryFilter from './HistoryFilter';
import DebouncedInput from './DebouncedInput';

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

export default function HistoryTable() {
  // const rerender = React.useReducer(() => ({}), {})[1];

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [data, setData] = useState<Earthquake[]>([
    {
      mag: '6.5',
      date: '2024-01-04T01:23:19',
      location: 'Kanyakumari, India',
      lat: '8.0844°N',
      lng: '77.5495°E',
      innerProcessStatus: 'Waiting',
      algorithms: 'D-InSAR',
      platform: 'Sentinel-1A',
      preData: 'Downloaded',
      postData: 'Downloaded',
      downloads: LuDownload,
    },
    {
      mag: '6.5',
      date: '2024-01-01T11:49:32',
      location: 'Bardufoss, Norway',
      lat: '69.0648°N',
      lng: '18.5151°E',
      innerProcessStatus: 'Collecting',
      algorithms: 'D-InSAR',
      platform: 'Sentinel-1A',
      preData: 'Downloaded',
      postData: 'Downloaded',
      downloads: LuDownload,
    },
    {
      mag: '6.6',
      date: '2023-12-04T05:24:34',
      location: 'Daejeon, Korea',
      lat: '36.3504°N',
      lng: '127.3845°E',
      innerProcessStatus: 'Collecting1',
      algorithms: 'D-InSAR',
      platform: 'Sentinel-1A',
      preData: 'Downloaded',
      postData: 'Downloaded',
      downloads: LuDownload,
    },
    {
      mag: '6.5',
      date: '2023-12-01T02:41:31',
      location: 'Aira, Japan',
      lat: '31.5938°N',
      lng: '130.6579°E',
      innerProcessStatus: 'Collecting',
      algorithms: 'D-InSAR',
      platform: 'Sentinel-1A',
      preData: 'Downloaded',
      postData: 'Downloaded',
      downloads: LuDownload,
    },
  ]);

  // const refreshData = () => setData((old) => makeData(50000));

  // const coreOptions: CoreOptions<> = {
  //   columns: [],
  //   data: [],
  // };

  const columns = useMemo<ColumnDef<Earthquake, any>[]>(
    () => [
      {
        accessorKey: 'mag',
        header: () => 'Magnitude',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'date',
        header: () => 'Date',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'location',
        header: () => 'Location',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'lat',
        header: () => 'Lat.',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'lng',
        header: () => 'Lng.',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'innerProcessStatus',
        header: () => 'Processing Status',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'algorithms',
        header: () => 'Algorithms',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'platform',
        header: () => 'Platform',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: 'Processed Data',
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: 'preData',
            header: () => 'Pre-Data',
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id,
          },
          {
            accessorKey: 'postData',
            header: () => 'Post-Data',
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id,
          },
        ],
      },
      {
        accessorKey: 'downloads',
        header: () => 'Downloads',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-md-flex">
          <div>
            <h4 className="card-title">Histories of Last Earthquakes</h4>
          </div>
        </div>
        <div className="table-responsive">
          <div className="p-2">
            <div>
              <DebouncedInput
                value={globalFilter ?? ''}
                onChange={(value) => setGlobalFilter(String(value))}
                className="p-2 font-lg border border-block"
                placeholder="검색 키워드를 입력하세요."
              />
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
                        return (
                          <td key={cell.id}>
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
            <div className="flex items-center gap-2">
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
              <span className="flex items-center gap-1">
                <div>Page</div>
                <strong>
                  {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </strong>
              </span>
              <span className="flex items-center gap-1">
                | Go to page:
                <input
                  type="number"
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
            <div>{table.getPrePaginationRowModel().rows.length} Rows</div>
            {/* <div>
                  <button onClick={() => rerender()}>Force Rerender</button>
                </div>
                <div>
                  <button onClick={() => refreshData()}>Refresh Data</button>
                </div> */}
            {/* <pre>{JSON.stringify(table.getState(), null, 2)}</pre> */}
          </div>
          {/* <table className="table mb-0 table-hover align-middle text-nowrap">
            <thead>
              <tr className="">
                <th rowSpan={2} colSpan={1} className="border-top-0">
                  Magnitude
                </th>
                <th rowSpan={2} className="border-top-0">
                  Date
                </th>
                <th rowSpan={2} className="border-top-0">
                  Location
                </th>
                <th rowSpan={2} className="border-top-0">
                  Lat.
                </th>
                <th rowSpan={2} className="border-top-0">
                  Lng.
                </th>
                <th rowSpan={2} className="border-top-0">
                  Processing Status
                </th>
                <th rowSpan={2} className="border-top-0">
                  Algorithms
                </th>
                <th rowSpan={2} className="border-top-0">
                  Platform
                </th>
                <th
                  colSpan={2}
                  rowSpan={1}
                  className="border-top-0  border-bottom-0 tw-text-center"
                >
                  Processed Data
                </th>
              </tr>
              <tr>
                <th className="border-top-0">Pre-Data</th>
                <th className="border-top-0">Post-Data</th>
                <th className="border-top-0">Downloads</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <a href="#" className="btn btn-circle d-flex btn-info text-white">
                      6.5
                    </a>
                  </div>
                </td>
                <td>2024-01-04T01:23:19</td>
                <td>Kanyakumari, India</td>
                <td>8.0844°N</td>
                <td>77.5495°E</td>
                <td>
                  <label className="badge tw-bg-WARN">Waiting</label>
                </td>
                <td>D-InSAR</td>
                <td>
                  <label className="badge bg-danger">Angular</label>
                </td>
                <td>46</td>
                <td>356</td>
                <td>
                  <h5 className="tw-mb-0">$2850.06</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <a href="#" className="btn btn-circle d-flex btn-orange text-white">
                      6.5
                    </a>
                  </div>
                </td>
                <td>2024-01-01T11:49:32</td>
                <td>Bardufoss, Norway</td>
                <td>Kanyakumari, India</td>
                <td>Kanyakumari, India</td>
                <td>Kanyakumari, India</td>
                <td>Kanyakumari, India</td>
                <td>
                  <label className="badge bg-info">Vue Js</label>
                </td>
                <td>46</td>
                <td>356</td>
                <td>
                  <h5 className="tw-mb-0">$2850.06</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="tw-mr-10">
                      <a href="#" className="btn btn-circle d-flex btn-success text-white">
                        6.6
                      </a>
                    </div>
                  </div>
                </td>
                <td>2023-12-04T05:24:34</td>
                <td>Daejeon, Korea</td>
                <td>Kanyakumari, India</td>
                <td>Kanyakumari, India</td>
                <td>Kanyakumari, India</td>
                <td>Kanyakumari, India</td>
                <td>
                  <label className="badge bg-success">Bootstrap</label>
                </td>
                <td>46</td>
                <td>356</td>
                <td>
                  <h5 className="tw-mb-0">$2850.06</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="tw-mr-10">
                      <a href="#" className="btn btn-circle d-flex btn-purple text-white">
                        6.5
                      </a>
                    </div>
                  </div>
                </td>
                <td>2023-12-01T02:41:31</td>
                <td>Aira, Japan</td>
                <td>Kanyakumari, India</td>
                <td>Kanyakumari, India</td>
                <td>Kanyakumari, India</td>
                <td>Kanyakumari, India</td>
                <td>
                  <label className="badge bg-purple">React</label>
                </td>
                <td>46</td>
                <td>356</td>
                <td>
                  <h5 className="tw-mb-0">$2850.06</h5>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
}
