import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import OneSetting from 'src/profile/components/molecules/setting/OneSetting';

interface settingType {
  id: number;
  name: string;
  checked: boolean;
}

const Setting = () => {
  const [settingList, setSettingList] = useState<settingType[]>([
    { id: 0, name: '팔로잉 사용자 새 글 알림', checked: false },
    { id: 1, name: '팔로워 알림', checked: false },
    { id: 2, name: '댓글 등록 알림', checked: false },
    { id: 3, name: '배지 및 활동 달성 알림', checked: false },
  ]);

  const [allChecked, setAllChecked] = useState<boolean>(false);

  // 전체 알림 설정 Event
  const handleChangeAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAllChecked(e.target.checked);

    const list: settingType[] = [...settingList];
    list.map((item: settingType) => {
      list[item.id].checked = e.target.checked;
    });
    setSettingList(list);
  };

  // 개별 알림 설정 Event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const list = [...settingList];
    list[id].checked = e.target.checked;
    setSettingList(list);

    // 개별 알림에 따른 전체 알림 설정 세팅
    let checkFlag = true;
    list.map((item: settingType) => {
      if (!item.checked) checkFlag = false;
    });
    setAllChecked(checkFlag);
  };

  return (
    <>
      <section>
        <div>
          <div className={classNames('setting-all')}>
            <OneSetting id={99} name={'전체 알림 설정'} isChecked={allChecked} handleChange={handleChangeAll} />
          </div>
          {settingList.map((item, index: number) => (
            <div className={classNames('setting-list')} key={index}>
              <OneSetting id={item.id} name={item.name} isChecked={item.checked} handleChange={handleChange} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Setting;
