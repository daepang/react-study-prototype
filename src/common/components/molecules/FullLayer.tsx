import React, { Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Draggable, { DraggableEvent } from 'react-draggable';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title?: string;
  subTitle?: string;
  titleNode?: ReactNode;
  children: string | ReactNode;
  openLayer?: () => void;
  closeLayer?: (...args: any) => void;
  isShowCloseLayerBtn?: boolean;
  bottomComps?: ReactNode;
  classes?: string;
}

const FullLayer = ({
  isOpen,
  setIsOpen,
  title,
  subTitle,
  titleNode,
  children,
  openLayer: openLayerProp,
  closeLayer: closeLayerProp,
  isShowCloseLayerBtn = true,
  bottomComps,
  classes,
}: Props) => {
  const popupContainerRef = useRef<HTMLDivElement>(null);
  const DEFAULT_POSITION = { x: 0, y: 0 };
  const [position, setPosition] = useState<{ x: number; y: number }>(DEFAULT_POSITION);
  const [deltaPositionY, setDeltaPositionY] = useState<number>(0); // 이동한 Y 값
  const [popupBoundY, setPopupBoundY] = useState<number>(0); // 드래그 가능 범위 Y 제한 값
  // 레이어 열리기 전 부모 창 scroll 저장
  const [scrollPosition, setScrollPosition] = useState<number | undefined>(undefined);

  // Draggable 드래그 시작 시점에 호출
  const handleDragStart = useCallback(() => {
    setPosition(DEFAULT_POSITION);
    setDeltaPositionY(0);
  }, []);

  // Draggable 드래그 하는 동안 호출
  const handleDrag = (
    e: DraggableEvent,
    ui: { deltaX: number; deltaY: number; lastX: number; lastY: number; x: number; y: number; node: HTMLElement },
  ) => {
    setDeltaPositionY(deltaPositionY + ui.deltaY);
  };

  // Draggable 드래그 멈춘 시점에 호출
  const handleDragStop = () => {
    if (deltaPositionY > popupBoundY) closeLayer();
    else {
      setPosition(DEFAULT_POSITION);
      setDeltaPositionY(0);
    }
  };

  // 레이어 열렸을 때 호출
  const openLayer = () => {
    if (openLayerProp) openLayerProp(); // prop으로 받은 함수 호출
  };

  // 레이어 닫혔을 때 호출
  const closeLayer = () => {
    setIsOpen(false); // 레이어 닫힘 상태 변경
  };

  useEffect(() => {
    const bodyElem = document.getElementsByTagName('body')?.[0];
    const bodyStyle = bodyElem?.style;

    if (isOpen) {
      openLayer();
      setPopupBoundY(popupContainerRef?.current?.clientHeight! * 0.5); // 드래그 가능 범위 Y 제한 값 = 레이어 높이의 50%로 설정

      // 스크롤 값 기억
      const position = window.pageYOffset;
      setScrollPosition(position);
      if (bodyElem) {
        bodyStyle.top = `-${position}px`;
      }
    } else {
      setPopupBoundY(0);
      scrollPosition && window.scrollTo(0, scrollPosition);
      setScrollPosition(undefined);
      if (bodyElem) bodyStyle.top = '0';
    }
  }, [isOpen]);

  return (
    <section className={classNames('modalPopupWrap', { open: isOpen })}>
      <div className={'popupBg'} onClick={() => setIsOpen(false)} />
      <div className={classNames('popupWrap anchorBottom', classes)}>
        <Draggable
          axis={'y'}
          defaultPosition={DEFAULT_POSITION}
          position={position}
          bounds={{ top: 0, right: 0, left: 0, bottom: popupBoundY + 50 }}
          onStart={handleDragStart}
          onDrag={handleDrag}
          onStop={handleDragStop}
        >
          <div className={'popupcontainerBox'} ref={popupContainerRef}>
            <div className={'popupInner'}>
              <button>{'레이어 끌기 버튼'}</button>

              {(title || titleNode) && (
                <div className={'popupHead'}>
                  {!!title && <h2 className={'tit'}>{title}</h2>}
                  {!!subTitle && <p className={'subtext'}>{subTitle}</p>}
                  {titleNode}
                </div>
              )}

              <div className={'popupContents'}>{children}</div>
              {bottomComps}
              {isShowCloseLayerBtn && <button onClick={() => setIsOpen(false)}>{'레이어 닫기'}</button>}
            </div>
          </div>
        </Draggable>
      </div>
    </section>
  );
};

export default FullLayer;
