// import {
//   ColumnDef,
//   ColumnFiltersState,
//   getCoreRowModel,
//   getFacetedMinMaxValues,
//   getFacetedRowModel,
//   getFacetedUniqueValues,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
// } from '@tanstack/table-core';
// import { useMemo, useState } from 'react';
// import { fuzzyFilter, fuzzySort } from './SortAndFilterByFuzzy';
// import { flexRender, useReactTable } from '@tanstack/react-table';
// import { Person, makeData } from './makeData';
// import DebouncedInput from './DebouncedInput';
// import HistoryFilter from './HistoryFilter';

// export default function HistoryTable() {
//   // const rerender = React.useReducer(() => ({}), {})[1];

//   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
//   const [globalFilter, setGlobalFilter] = useState('');
//   const [data, setData] = useState<Person[]>(() => makeData(50000));

//   // const refreshData = () => setData((old) => makeData(50000));

//   // const coreOptions: CoreOptions<> = {
//   //   columns: [],
//   //   data: [],
//   // };

//   const columns = useMemo<ColumnDef<Person, any>[]>(
//     () => [
//       {
//         header: 'Name',
//         footer: (props) => props.column.id,
//         columns: [
//           {
//             accessorKey: 'firstName',
//             cell: (info) => info.getValue(),
//             footer: (props) => props.column.id,
//           },
//           {
//             accessorFn: (row) => row.lastName,
//             id: 'lastName',
//             cell: (info) => info.getValue(),
//             header: () => <span>Last Name</span>,
//             footer: (props) => props.column.id,
//           },
//           {
//             accessorFn: (row) => `${row.firstName} ${row.lastName}`,
//             id: 'fullName',
//             header: 'Full Name',
//             cell: (info) => info.getValue(),
//             footer: (props) => props.column.id,
//             filterFn: 'fuzzy',
//             sortingFn: fuzzySort,
//           },
//         ],
//       },
//       {
//         header: 'Info',
//         footer: (props) => props.column.id,
//         columns: [
//           {
//             accessorKey: 'age',
//             header: () => 'Age',
//             footer: (props) => props.column.id,
//           },
//           {
//             header: 'More Info',
//             columns: [
//               {
//                 accessorKey: 'visits',
//                 header: () => <span>Visits</span>,
//                 footer: (props) => props.column.id,
//               },
//               {
//                 accessorKey: 'status',
//                 header: 'Status',
//                 footer: (props) => props.column.id,
//               },
//               {
//                 accessorKey: 'progress',
//                 header: 'Profile Progress',
//                 footer: (props) => props.column.id,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//     []
//   );

//   const table = useReactTable({
//     data,
//     columns,
//     filterFns: {
//       fuzzy: fuzzyFilter,
//     },
//     state: {
//       columnFilters,
//       globalFilter,
//     },
//     onColumnFiltersChange: setColumnFilters,
//     onGlobalFilterChange: setGlobalFilter,
//     globalFilterFn: fuzzyFilter,
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getFacetedRowModel: getFacetedRowModel(),
//     getFacetedUniqueValues: getFacetedUniqueValues(),
//     getFacetedMinMaxValues: getFacetedMinMaxValues(),
//     debugTable: true,
//     debugHeaders: true,
//     debugColumns: false,
//   });

//   return (
//     <div className="p-2">
//       <div>
//         <DebouncedInput
//           value={globalFilter ?? ''}
//           onChange={(value) => setGlobalFilter(String(value))}
//           className="p-2 font-lg border border-block"
//           placeholder="검색 키워드를 입력하세요."
//         />
//       </div>
//       <div className="h-2" />
//       <table className="table table-striped">
//         <thead>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header) => {
//                 return (
//                   <th key={header.id} colSpan={header.colSpan}>
//                     {header.isPlaceholder ? null : (
//                       <>
//                         <div
//                           {...{
//                             className: header.column.getCanSort()
//                               ? 'cursor-pointer select-none'
//                               : '',
//                             onClick: header.column.getToggleSortingHandler(),
//                           }}
//                         >
//                           {flexRender(header.column.columnDef.header, header.getContext())}
//                           {{
//                             asc: ' 🔼',
//                             desc: ' 🔽',
//                           }[header.column.getIsSorted() as string] ?? null}
//                         </div>
//                         {header.column.getCanFilter() ? (
//                           <div>
//                             <HistoryFilter column={header.column} table={table} />
//                           </div>
//                         ) : null}
//                       </>
//                     )}
//                   </th>
//                 );
//               })}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table.getRowModel().rows.map((row) => {
//             return (
//               <tr key={row.id}>
//                 {row.getVisibleCells().map((cell) => {
//                   return (
//                     <td key={cell.id}>
//                       {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                     </td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div className="h-2" />
//       <div className="flex items-center gap-2">
//         <button
//           className="border rounded p-1"
//           onClick={() => table.setPageIndex(0)}
//           disabled={!table.getCanPreviousPage()}
//         >
//           {'<<'}
//         </button>
//         <button
//           className="border rounded p-1"
//           onClick={() => table.previousPage()}
//           disabled={!table.getCanPreviousPage()}
//         >
//           {'<'}
//         </button>
//         <button
//           className="border rounded p-1"
//           onClick={() => table.nextPage()}
//           disabled={!table.getCanNextPage()}
//         >
//           {'>'}
//         </button>
//         <button
//           className="border rounded p-1"
//           onClick={() => table.setPageIndex(table.getPageCount() - 1)}
//           disabled={!table.getCanNextPage()}
//         >
//           {'>>'}
//         </button>
//         <span className="flex items-center gap-1">
//           <div>Page</div>
//           <strong>
//             {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
//           </strong>
//         </span>
//         <span className="flex items-center gap-1">
//           | Go to page:
//           <input
//             type="number"
//             defaultValue={table.getState().pagination.pageIndex + 1}
//             onChange={(e) => {
//               const page = e.target.value ? Number(e.target.value) - 1 : 0;
//               table.setPageIndex(page);
//             }}
//             className="border p-1 rounded w-16"
//           />
//         </span>
//         <select
//           value={table.getState().pagination.pageSize}
//           onChange={(e) => {
//             table.setPageSize(Number(e.target.value));
//           }}
//         >
//           {[10, 20, 30, 40, 50].map((pageSize) => (
//             <option key={pageSize} value={pageSize}>
//               Show {pageSize}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>{table.getPrePaginationRowModel().rows.length} Rows</div>
//       {/* <div>
//                   <button onClick={() => rerender()}>Force Rerender</button>
//                 </div>
//                 <div>
//                   <button onClick={() => refreshData()}>Refresh Data</button>
//                 </div> */}
//       {/* <pre>{JSON.stringify(table.getState(), null, 2)}</pre> */}
//     </div>
//   );
// }
