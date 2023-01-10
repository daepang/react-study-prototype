import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

interface Props {
  headerTitle?: string;
}

const Header = ({ headerTitle }: Props) => {
  return (
    <>
      <header className={classNames('module-header')}>
        <div className={classNames('module-header-layer')}>
          <h1 className={classNames('module-header-title')}>{headerTitle}</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
