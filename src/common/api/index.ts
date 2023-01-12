import axios from 'axios';

import { ApiParams } from 'src/common/type/commonTypes';

const baseURL = 'https://localhost:7443';

export const api = async (param: ApiParams) => {
  return await axios.get(baseURL + param.requestUrl);
};
