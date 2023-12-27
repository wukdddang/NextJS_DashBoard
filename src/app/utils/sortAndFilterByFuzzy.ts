import { RankingInfo, compareItems, rankItem } from '@tanstack/match-sorter-utils';
import { FilterFn, SortingFn, sortingFns } from '@tanstack/table-core';

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

export const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // 아이템 순위 계산
  const itemRank = rankItem(row.getValue(columnId), value);

  // 메타 데이터에 아이템 순위 추가
  addMeta({
    itemRank,
  });

  // 아이템 순위가 0보다 크면 통과
  return itemRank.passed;
};

export const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
  let dir = 0;

  // 아이템 순위 비교
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(
      rowA.columnFiltersMeta[columnId]?.itemRank!,
      rowB.columnFiltersMeta[columnId]?.itemRank!
    );
  }

  // 아이템 순위가 같으면 알파벳 순서로 정렬
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};
