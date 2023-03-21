import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { HEADER_TYPE } from 'src/common/const/header';
import HeaderFriend from 'src/common/components/header/HeaderFriend';

interface Props {
  // 헤더 타입 (src/common/const/header.ts => HEADER_TYPE )
  headerType: string;
  // 헤더 제목
  headerTitle?: string;
  // 헤더 우측 이벤트
  headerUtilFunc?: Function;
}

const Header = ({ headerType = HEADER_TYPE.DEFAULT, headerTitle, headerUtilFunc }: Props) => {
  return (
    <>
      {/* 기본 헤더 영역 */}
      {headerType !== HEADER_TYPE.FRIEND && (
        <header className={classNames('module-header')}>
          <div className={classNames('module-header-layer')}>
            <h1 className={classNames('module-header-title')}>{headerTitle}</h1>
            <div className={'module-header-right'}>
              {/* 알림 설정 */}
              {headerType === HEADER_TYPE.PROFILE && (
                <Link href={'/profile/setting'}>
                  <a className={'module-header-btn module-header-btn-setting'}>셋팅</a>
                </Link>
              )}
            </div>
          </div>
        </header>
      )}

      {/* 친구 헤더 영역 */}
      {headerType === HEADER_TYPE.FRIEND && <HeaderFriend addFriend={headerUtilFunc && headerUtilFunc} />}
    </>
  );
};

export default Header;
