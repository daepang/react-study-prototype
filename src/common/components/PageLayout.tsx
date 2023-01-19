import React, { forwardRef, ReactNode, useEffect, useState } from 'react';
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
  // 헤더 우측 Function
  headerUtilFunc?: Function;
}

const PageLayout = forwardRef(
  ({ children, headerType = HEADER_TYPE.DEFAULT, showHeader = true, headerTitle, headerUtilFunc }: Props) => {
    return (
      <>
        <section className={classNames('wrap')}>
          {showHeader && <Header headerType={headerType} headerTitle={headerTitle} headerUtilFunc={headerUtilFunc} />}
          <section>{children}</section>
        </section>
      </>
    );
  },
);

export default PageLayout;
