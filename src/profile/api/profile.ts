import { api } from 'src/common/api';
import { API_RESULT } from 'src/common/const/apiResult';

// 친구 목록
export const fetchFriendList = async () => {
  try {
    const result = await api({
      requestUrl: '/profile/friendList',
    });
    if (result) {
      if (result.data && result.data.code === API_RESULT.SUC_PROC_0000) {
        return result.data;
      } else {
        console.error(`error code: ${result.data.code} message: ${result.data.message}`);
      }
    }
  } catch (e) {
    console.error(e);
  }
};
