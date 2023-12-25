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
import { useEffect, useMemo, useState } from 'react';
import { fuzzyFilter, fuzzySort } from '@/app/history/SortAndFilterByFuzzy';
import { flexRender, useReactTable } from '@tanstack/react-table';
import useGlobalStore, { EqPointsType } from '../store/GlobalStore';
import HistoryTable from '@/app/history/HistoryTable';
import { getUsgsList } from '@/app/_lib/getUsgsList';
import _ from 'lodash';
import { produce } from 'immer';
import { UsgsStatusEnum } from '../enum/usgs.status.enum';

export type Earthquake = {
  date: string;
  lat: string;
  lng: string;
  platform: string;
  preData: string;
  postData: string;
  downloads: React.ReactNode;
  algorithms: string | string[];
  status: UsgsStatusEnum;
} & Omit<EqPointsType, 'createdAt' | 'isRead' | 'lat' | 'lng'>;

export default function HistoryTableContainer() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [data, setData] = useState<Earthquake[]>([]);
  // const setCurrentEqPoints = useGlobalStore((state) => state.setCurrentEqPoints);

  const tableAccessorObj = [
    { accessorKey: 'mag', header: () => 'Magnitude' },
    { accessorKey: 'date', header: () => 'Date' },
    { accessorKey: 'location', header: () => 'Location' },
    { accessorKey: 'lat', header: () => 'Lat.' },
    { accessorKey: 'lng', header: () => 'Lng.' },
    { accessorKey: 'status', header: () => 'Status' },
    { accessorKey: 'algorithms', header: () => 'Algorithms' },
    { accessorKey: 'platform', header: () => 'Platform' },
    { accessorKey: 'preData', header: () => 'Processed Pre-Data' },
    { accessorKey: 'postData', header: () => 'Processed Post-Data' },
    { accessorKey: 'downloads', header: () => 'Downloads' },
  ];

  const columns = useMemo<ColumnDef<Earthquake, any>[]>(
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
    // [
    //   {
    //     accessorKey: 'mag',
    //     header: () => 'Magnitude',
    //     cell: (info) => info.getValue(),
    //     footer: (props) => props.column.id,
    //     // enableColumnFilter: false,
    //   },
    //   {
    //     accessorKey: 'date',
    //     header: () => 'Date',
    //     cell: (info) => info.getValue(),
    //     footer: (props) => props.column.id,
    //   },
    //   {
    //     accessorKey: 'location',
    //     header: () => 'Location',
    //     cell: (info) => info.getValue(),
    //     footer: (props) => props.column.id,
    //   },
    //   {
    //     accessorKey: 'lat',
    //     header: () => 'Lat.',
    //     cell: (info) => info.getValue(),
    //     footer: (props) => props.column.id,
    //   },
    //   {
    //     accessorKey: 'lng',
    //     header: () => 'Lng.',
    //     cell: (info) => info.getValue(),
    //     footer: (props) => props.column.id,
    //   },
    //   {
    //     accessorKey: 'innerProcessStatus',
    //     header: () => 'Processing Status',
    //     cell: (info) => info.getValue(),
    //     footer: (props) => props.column.id,
    //   },
    //   {
    //     accessorKey: 'algorithms',
    //     header: () => 'Algorithms',
    //     cell: (info) => info.getValue(),
    //     footer: (props) => props.column.id,
    //   },
    //   {
    //     accessorKey: 'platform',
    //     header: () => 'Platform',
    //     cell: (info) => info.getValue(),
    //     footer: (props) => props.column.id,
    //   },
    //   {
    //     header: 'Processed Data',
    //     footer: (props) => props.column.id,
    //     columns: [
    //       {
    //         accessorKey: 'preData',
    //         header: () => 'Pre-Data',
    //         cell: (info) => info.getValue(),
    //         footer: (props) => props.column.id,
    //       },
    //       {
    //         accessorKey: 'postData',
    //         header: () => 'Post-Data',
    //         cell: (info) => info.getValue(),
    //         footer: (props) => props.column.id,
    //       },
    //     ],
    //   },
    //   {
    //     accessorKey: 'downloads',
    //     header: () => 'Downloads',
    //     cell: (info) => info.getValue(),
    //     footer: (props) => props.column.id,
    //   },
    // ]
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

  const { pageIndex, pageSize } = table.getState().pagination;

  useEffect(() => {
    getUsgsList().then((res) => {
      const updateData = res?.data.map((item) => {
        // setCurrentEqPoints로 newEqPoint 저장하기

        return {
          id: item.id,
          mag: String(item.properties.mag),
          date: item.properties.createdAt,
          location:
            item.properties.place.split('of').length > 1
              ? item.properties.place.split('of')[1]
              : item.properties.place,
          lat:
            item.geometry.coordinates[1] > 0
              ? item.geometry.coordinates[1] + '°N'
              : item.geometry.coordinates[1] + '°S',
          lng:
            item.geometry.coordinates[0] > 0
              ? item.geometry.coordinates[0] + '°E'
              : item.geometry.coordinates[0] + '°W',
          status: item.status,
          algorithms: 'D-InSAR',
          platform: 'Sentinel-1A',
          preData: 'Waiting',
          postData: 'Waiting',
          downloads: 'LuDownload',
        };
      });

      setData((prev) =>
        produce(prev, (draft) => {
          // 새 데이터와 이전 데이터가 다른 경우에만 상태 업데이트
          if (!_.isEqual(updateData, prev)) {
            // 중복 데이터를 제거하고 새 데이터 병합
            updateData?.forEach((newItem) => {
              if (!draft.some((d) => _.isEqual(d, newItem))) {
                draft.push(newItem);
              }
            });
          }
        })
      );
    });
  }, []);

  return (
    <HistoryTable
      table={table}
      globalFilter={globalFilter}
      setGlobalFilter={setGlobalFilter}
      data={data}
      pageIndex={pageIndex}
      pageSize={pageSize}
    />
  );
}
