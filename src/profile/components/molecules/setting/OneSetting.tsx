import React from 'react';
import classNames from 'classnames';

const OneSetting = () => {
  return (
    <>
      <div className={classNames('setting-switch')}>
        <span className={classNames('title')}>알림 설정</span>
        <span className={classNames('form__checkbox-switch')}>
          <input type='checkbox' id={'switch'} className={classNames('checkbox-switch')} />
          <label htmlFor={'switch'} className={classNames('label-switch')}>
            알림체크
          </label>
        </span>
      </div>
    </>
  );
};

export default OneSetting;
