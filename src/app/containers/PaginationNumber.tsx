import { Table } from '@tanstack/table-core';

export default function PaginationNumber<T>({
  table,
  pageIndex,
  pageSize,
}: {
  table: Table<T>;
  pageIndex: number;
  pageSize: number;
}) {
  let pages = [];
  for (let i = 0; i < pageSize; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => table.setPageIndex(i)}
        style={{ fontWeight: pageIndex === i ? 'bold' : 'normal' }}
      >
        {i + 1}
      </button>
    );
  }
  return pages;
}
