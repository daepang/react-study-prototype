import * as React from 'react';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import classNames from 'classnames';

interface Props {
  // 열림/닫힘 상태
  isOpen: boolean;
  // 열림/닫힘 상태 변경
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  // 상단 타이틀
  title?: string;
  // 상단 우측 닫기 버튼
  closeBtn?: boolean;
  // 상단 우측 버튼 컴포넌트
  utilBtn?: ReactNode;
  // 내용
  children: string | ReactNode;
  // 열림 함수
  openLayer?: () => void;
  // 닫힘 함수
  closeLayer?: () => void;
  // 상단 좌측 뒤로가기 버튼 여부
  showBeforeBtn?: boolean;
  // 뒤로가기 함수
  beforeLayer?: () => void;
  // 헤더 클래스
  headerClasses?: string;
}

const FullPageLayer = ({
  isOpen,
  setIsOpen,
  title,
  closeBtn,
  utilBtn,
  children,
  openLayer: openLayerProp,
  closeLayer: closeLayerProp,
  showBeforeBtn,
  beforeLayer,
  headerClasses,
}: Props) => {
  // 레이어 열리기 전 부모 창 scroll 저장
  const [scrollPosition, setScrollPosition] = useState<number | undefined>(undefined);

  // 레이어 열렸을 때 호출
  const openLayer = () => {
    if (openLayerProp) openLayerProp(); // prop으로 받은 함수 호출
  };

  // 레이어 닫혔을 때 호출
  const closeLayer = () => {
    if (closeLayerProp) closeLayerProp(); // prop으로 받은 함수 호출
    setIsOpen(false); // 레이어 닫힘 상태 변경
  };

  useEffect(() => {
    const bodyElem = document.getElementsByTagName('body')?.[0];
    const bodyClassList = bodyElem?.classList;
    const bodyStyle = bodyElem?.style;
    const FIXED_CLASS = 'fixedFullPageLayer';

    if (isOpen) {
      openLayer();

      // 스크롤 값 기억
      const position = window.pageYOffset;
      setScrollPosition(position);
      if (bodyElem) {
        bodyClassList.add(FIXED_CLASS);
        bodyStyle.top = `-${position}px`;
      }
    } else {
      scrollPosition && window.scrollTo(0, scrollPosition);
      setScrollPosition(undefined);
      if (bodyElem) bodyStyle.top = '0';
    }

    if (isOpen) {
      return () => {
        closeLayer();
        if (bodyElem) bodyClassList.remove(FIXED_CLASS);
      };
    }
  }, [isOpen]);

  return (
    <section className={classNames('modalPopupWrap', { open: isOpen })}>
      <div className={classNames('popupWrap fullLayer')}>
        <div className={'popupcontainerBox'}>
          <div className={'popupInner'}>
            {/* 헤더 */}
            <div
              className={classNames({
                popupHead: true,
              })}
            >
              <div className={classNames('module-header-layer')}>
                {showBeforeBtn && beforeLayer && (
                  <button className='btnIr back' onClick={beforeLayer}>
                    뒤로
                  </button>
                )}
                {!!title && <h1 className={'module-header__title'}>{title}</h1>}
                <div className={'module-header--right'}>
                  {closeBtn && (
                    <button
                      className='module-header__btn module-header__btn--close'
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      닫기
                    </button>
                  )}
                  {utilBtn && utilBtn}
                </div>
              </div>
            </div>

            {/* 내용 */}
            <div className={classNames('popupContents')}>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullPageLayer;
