import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import classNames from 'classnames';

import TextButton from 'src/common/components/atoms/button/TextButton';

// Props
interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title?: string;
  children: string | ReactNode;
  onlyConfirmBtn?: boolean;
  clickConfirmProp?: Function;
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
  const ConfirmButtonComps = () => <TextButton title={'확인'} onClick={clickConfirm} />;

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
