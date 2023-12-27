'use client';

import EarthquakePointTable from '@/app/components/organisms/EarthquakePointTable';
import { EqPointsType } from '@/app/store/GlobalStore';
import { getProcessStatus } from '@/app/utils/getProcessStatus';
// import { useReactTable } from '@tanstack/react-table';
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
// import { fuzzyFilter } from '../history/SortAndFilterByFuzzy';

export type EarthquakePointTableType =
  | 'status'
  | 'phase'
  | 'data_acquisition'
  | 'processing_algorithms';

type Props = {
  // data: EarthquakePointTableType[];
  currentEqPoint: EqPointsType;
};

function EarthquakePointTableContainer({ /*data, */ currentEqPoint }: Props) {
  const processStatus = getProcessStatus(currentEqPoint.status);

  console.log(processStatus, currentEqPoint);
  return <EarthquakePointTable processStatus={processStatus} currentEqPoint={currentEqPoint} />;
}

export default EarthquakePointTableContainer;
