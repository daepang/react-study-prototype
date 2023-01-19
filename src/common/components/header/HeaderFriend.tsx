import React from 'react';
import classNames from 'classnames';

interface Props {
  // 친구 추가 이벤트
  addFriend?: Function;
}

const Header = ({ addFriend }: Props) => {
  return (
    <>
      <header className={classNames('module-header')}>
        <div className={classNames('module-header-layer')}>
          <h1 className={classNames('module-header-title')}>친구 목록</h1>
          <div className={'module-header-right'}>
            <a className={'module-header-btn module-header-btn-add'} onClick={addFriend && (() => addFriend())}>
              친구 추가
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
