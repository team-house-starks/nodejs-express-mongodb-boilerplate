import {server} from '../src';

after(async () => {
  server.close();
});
