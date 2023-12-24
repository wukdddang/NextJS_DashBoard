import { HttpResponse, http } from 'msw';
import { SERVER_HOST } from '@/app/common/constants/environment.const';

export const handlers = [
  http.get(`${SERVER_HOST}/usgs/list`, () => {
    // console.log('good');
    return HttpResponse.json('good');
  }),
];
