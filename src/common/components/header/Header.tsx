import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { HEADER_TYPE } from 'src/common/const/header';
import HeaderFriend from 'src/common/components/header/HeaderFriend';

interface Props {
  headerType: string;
  headerTitle?: string;
  headerUtilFunc?: Function;
}

const Header = ({ headerType = HEADER_TYPE.DEFAULT, headerTitle, headerUtilFunc }: Props) => {
  return (
    <>
      {headerType !== HEADER_TYPE.FRIEND && (
        <header className={classNames('module-header')}>
          <div className={classNames('module-header-layer')}>
            <h1 className={classNames('module-header-title')}>{headerTitle}</h1>
            <div className={'module-header-right'}>
              {headerType === HEADER_TYPE.PROFILE && (
                <Link href={'/profile/setting'}>
                  <a className={'module-header-btn module-header-btn-setting'}>셋팅</a>
                </Link>
              )}
            </div>
          </div>
        </header>
      )}

      {headerType === HEADER_TYPE.FRIEND && <HeaderFriend addFriend={headerUtilFunc && headerUtilFunc} />}
    </>
  );
};

export default Header;
