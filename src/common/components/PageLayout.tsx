import React, { forwardRef, ReactNode, useEffect, useState } from 'react';
import Header from 'src/common/components/header/Header';
import classNames from 'classnames';

// Props
interface Props {
  // 자식 컴포넌트
  children: ReactNode;
  // 헤더 노출 여부
  showHeader?: boolean;
  // 헤더 제목
  headerTitle?: string;
}

const PageLayout = forwardRef(({ children, showHeader = true, headerTitle }: Props) => {
  return (
    <>
      <section className={classNames('wrap')}>
        {showHeader && <Header headerTitle={headerTitle} />}
        <section>{children}</section>
      </section>
    </>
  );
});

export default PageLayout;
