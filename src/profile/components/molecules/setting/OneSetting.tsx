import React from 'react';
import classNames from 'classnames';

interface Props {
  // 설정 구분 id
  id: number;
  // 설정 이름
  name: string;
  // 설정 체크 여부
  isChecked: boolean;
  // 설정 체크 이벤트
  handleChange: Function;
}

const OneSetting = ({ id, name, isChecked, handleChange }: Props) => {
  return (
    <>
      <div className={classNames('setting-switch')}>
        <span className={classNames('title')}>{name}</span>
        <span className={classNames('form__checkbox-switch')}>
          <input
            type='checkbox'
            id={'switch' + id}
            className={classNames('checkbox-switch')}
            checked={isChecked}
            onChange={name === '전체 알림 설정' ? e => handleChange(e) : e => handleChange(e, id)}
          />
          <label htmlFor={'switch' + id} className={classNames('label-switch')}>
            알림체크
          </label>
        </span>
      </div>
    </>
  );
};

export default OneSetting;
