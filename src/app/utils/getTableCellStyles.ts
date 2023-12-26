import { Cell } from '@tanstack/table-core';
import tailwindConfig from '../../../tailwind.config.js';
import { UsgsStatusEnum } from '@/app/enum/usgs.status.enum';

type TailwindColors = {
  PRIMARY: string;
  SECONDARY: string;
  BODY_COLOR: string;
  SUCCESS: string;
  ERROR: string;
  WARN: string;
  INFO: string;
  TEXT: string;
  ICON: string;
};

export const getTableCellStyles = <T>(cell: Cell<T, unknown>, isHistoryPage: boolean) => {
  const tailwindColors: TailwindColors = tailwindConfig.theme?.extend?.colors as TailwindColors;

  const successColor = tailwindColors?.SUCCESS;
  const errorColor = tailwindColors?.ERROR;
  const warnColor = tailwindColors?.WARN;
  const infoColor = tailwindColors?.INFO;
  const primaryColor = tailwindColors?.PRIMARY;
  const secondaryColor = tailwindColors?.SECONDARY;
  const bodyColor = tailwindColors?.BODY_COLOR;
  const iconColor = tailwindColors?.ICON;
  const textColor = tailwindColors?.TEXT;

  let cellStyle = {
    fontSize: isHistoryPage ? '14px' : '12px',
    color: textColor,
    fontWeight: 'normal',
  };

  if (cell.column.id === 'mag') {
    cellStyle = { ...cellStyle, fontWeight: 'bold', fontSize: '16px' };

    if (parseFloat(cell.getValue() as string) >= 5.0) {
      cellStyle = { ...cellStyle, color: errorColor };
    }
  } else if (cell.column.id === 'date') {
    cellStyle = { ...cellStyle, fontSize: '12px' };
  } else if (cell.column.id === 'status') {
    cellStyle = { ...cellStyle, fontWeight: 'bold' };
    if (cell.getValue() === UsgsStatusEnum.COMPLETE) {
      cellStyle = { ...cellStyle, color: successColor };
    } else if (cell.getValue() === UsgsStatusEnum.STOPPED) {
      cellStyle = { ...cellStyle, color: errorColor };
    } else if (cell.getValue() === UsgsStatusEnum.WAITING) {
      cellStyle = { ...cellStyle, color: warnColor };
    } else if (cell.getValue() === UsgsStatusEnum.ACTIVE) {
      cellStyle = { ...cellStyle, color: infoColor };
    } else if (cell.getValue() === UsgsStatusEnum.FAILED) {
      cellStyle = { ...cellStyle, color: errorColor };
    } else if (cell.getValue() === UsgsStatusEnum.PAUSED) {
      cellStyle = { ...cellStyle, color: warnColor };
    } else if (cell.getValue() === UsgsStatusEnum.COLLECTING) {
      cellStyle = { ...cellStyle, color: secondaryColor };
    } else if (cell.getValue() === UsgsStatusEnum.COLLECTING1) {
      cellStyle = { ...cellStyle, color: secondaryColor };
    } else {
      cellStyle = { ...cellStyle, color: iconColor };
    }
  }

  return cellStyle;
};
