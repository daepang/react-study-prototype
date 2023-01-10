import React from 'react';
import classNames from 'classnames';

import OneSetting from 'src/profile/components/molecules/setting/OneSetting';

const Setting = () => {
  return (
    <>
      <section>
        <div>
          {/*
            전체알림 class = 'setting-all'
            일반알림 class = 'setting-list'
           */}
          <div className={classNames('setting-all')}>
            <OneSetting />
          </div>
        </div>
      </section>
    </>
  );
};

export default Setting;
