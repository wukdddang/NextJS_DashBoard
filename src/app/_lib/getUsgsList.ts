import axios from 'axios';

import { SERVER_HOST, PAGE_LIMIT } from '@/app/common/constants/environment.const';
// import { Earthquake } from '@/app/containers/HistoryTableContainer';
// import { EqPointsType } from '@/app/store/GlobalStore';
import { UsgsStatusEnum } from '../enum/usgs.status.enum';

export interface UsgsListItem {
  id: string;
  type: string;
  is_read: boolean;
  status: UsgsStatusEnum;
  job_id: any;
  created_at: string;
  updated_at: string;
  geometry: UsgsGeometry;
  properties: Properties;
  __alaska__: any[];
  __files__: any[];
}

export interface UsgsGeometry {
  id: number;
  updatedAt: string;
  createdAt: string;
  type: string;
  coordinates: number[];
}

export interface Properties {
  id: number;
  updatedAt: string;
  createdAt: string;
  mag: number;
  place: string;
  time: string;
  updated: string;
  tz: any;
  url: string;
  detail: string;
  felt: number;
  cdi: number;
  mmi: any;
  alert: any;
  status: string;
  tsunami: number;
  sig: number;
  net: string;
  code: string;
  ids: string;
  sources: string;
  types: string;
  nst: number;
  dmin: number;
  rms: number;
  gap: number;
  magType: string;
  type: string;
  title: string;
}

type UsgsList = {
  result: boolean;
  message: string;
  data: UsgsListItem[];
};

export async function getUsgsList() {
  try {
    const response = await axios.get(`${SERVER_HOST}/usgs/list?take=${PAGE_LIMIT}`);
    return response.data as UsgsList;
  } catch (error) {
    console.error('데이터를 불러오는 데 오류가 발생했습니다: ', error);
    return null;
    // Handle the error accordingly
  }
}
