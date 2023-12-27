import { useMemo, useState } from 'react';
import { Earthquake } from './HistoryTableContainer';
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
import { useReactTable } from '@tanstack/react-table';
import EarthquakesTable from '@/app/components/organisms/EarthquakesTable';
import { fuzzyFilter } from '@/app/utils/sortAndFilterByFuzzy';

export type EarthquakesTableType = Pick<Earthquake, 'mag' | 'date' | 'location' | 'status'>;

type Props = {
  data: EarthquakesTableType[];
  tableTitle: string;
  isHistoryPage?: boolean;
};

export default function EarthquakesTableContainer({ data = [], tableTitle, isHistoryPage }: Props) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const tableAccessorObj = [
    { accessorKey: 'mag', header: () => 'Magnitude' },
    { accessorKey: 'date', header: () => 'Date' },
    { accessorKey: 'location', header: () => 'Location' },
    { accessorKey: 'status', header: () => 'Status' },
  ];

  const columns = useMemo<ColumnDef<EarthquakesTableType, any>[]>(
    () =>
      tableAccessorObj.map((obj) => {
        return {
          accessorKey: obj.accessorKey,
          header: () => obj.header(),
          cell: (info) => info.getValue(),
          footer: (props) => props.column.id,
          enableColumnFilter: false,
        };
      }),
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

  return <EarthquakesTable table={table} tableTitle={tableTitle} isHistoryPage={isHistoryPage} />;
}
