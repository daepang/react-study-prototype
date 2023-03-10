import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import classNames from 'classnames';

import TextButton from 'src/common/components/atoms/button/TextButton';

interface Props {
  // 열림,닫힘 상태
  isOpen: boolean;
  // 열림,닫힘 상태 변경
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  // 상단 타이틀
  title?: string;
  // 내용
  children: string | ReactNode;
  // 확인 버튼만 상태
  onlyConfirmBtn?: boolean;
  // 확인 버튼 클릭 시 호출 이벤트
  clickConfirmProp?: Function;
  // 취소 버튼 클릭 시 호출 이벤트
  clickCancelProp?: Function;
}

const Modal = ({ isOpen, setIsOpen, title, children, onlyConfirmBtn, clickConfirmProp, clickCancelProp }: Props) => {
  // 모달 닫혔을 때 호출
  const closeModal = () => {
    setIsOpen(false);
  };

  const clickConfirm = () => {
    if (clickConfirmProp) clickConfirmProp();
    closeModal();
  };
  const clickCancel = () => {
    if (clickCancelProp) clickCancelProp();
    closeModal();
  };

  // 확인 버튼
  const ConfirmButtonComps = () => <TextButton btnClasses={'btnContained'} title={'확인'} onClick={clickConfirm} />;

  // 취소 버튼
  const CancelButtonComps = () => <TextButton btnClasses={'btnCloseLayer'} title={'취소'} onClick={clickCancel} />;

  return (
    <>
      <section className={classNames('modalPopupWrap', { open: isOpen })}>
        <div className={classNames('popupBg')}></div>
        <div className={classNames('popupWrap')}>
          <div className={classNames('popupcontainerBox', { 'is-scroll': isOpen })}>
            <div>
              {title && (
                <div className={'popupHead'}>
                  <div>
                    {title.split('<br/>').map((txt: string, idx: number) => (
                      <React.Fragment key={`title-${idx}`}>
                        {txt}
                        {idx !== title.split('<br/>').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
              <div className={'popupContents'}>{children}</div>
            </div>
            <div className={classNames('popupBtnWrap')}>
              {!onlyConfirmBtn && <CancelButtonComps />}
              <ConfirmButtonComps />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Modal;
