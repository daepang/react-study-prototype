import React, {forwardRef, ReactNode, useEffect, useState} from 'react';
import Header from 'src/common/components/header/Header';

// Props
interface Props {
    // 자식 컴포넌트
    children: ReactNode;
    // 헤더 노출 여부
    showHeader?: boolean;
}

const PageLayout = forwardRef(({ children, showHeader = true }: Props) => {

    return (
        <>
            <section>
                {showHeader && (<Header />)}
                <section>{children}</section>
            </section>
        </>
    );
});

export default PageLayout;