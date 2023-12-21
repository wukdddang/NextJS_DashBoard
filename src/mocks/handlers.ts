import { http } from 'msw';

export const handlers = [
  http.get('http://192.168.10.178:3333/api/usgs/list?take=3000', () => {
    console.log('good');
  }),
];
