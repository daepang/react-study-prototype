import React, { ReactNode } from 'react';
import classNames from 'classnames';

import Header from 'src/common/components/header/Header';
import { HEADER_TYPE } from 'src/common/const/header';

// Props
interface Props {
  // 자식 컴포넌트
  children: ReactNode;
  // 헤더 타입
  headerType?: string;
  // 헤더 노출 여부
  showHeader?: boolean;
  // 헤더 제목
  headerTitle?: string;
  // 헤더 우측 호출 이벤트
  headerUtilFunc?: Function;
  // 하단 버튼
  bottomButton?: ReactNode;
}

const PageLayout = ({
  children,
  headerType = HEADER_TYPE.DEFAULT,
  showHeader = true,
  headerTitle,
  headerUtilFunc,
  bottomButton,
}: Props) => {
  return (
    <>
      <section className={classNames('wrap')}>
        {showHeader && <Header headerType={headerType} headerTitle={headerTitle} headerUtilFunc={headerUtilFunc} />}
        <section className={classNames('container', { hasFixedBtn: !!bottomButton })}>
          <section className={classNames('contents')}>{children}</section>
          {bottomButton}
        </section>
      </section>
    </>
  );
};
export default PageLayout;
