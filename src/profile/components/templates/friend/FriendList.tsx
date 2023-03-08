import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import classNames from 'classnames';

import Modal from 'src/common/components/molecules/Modal';

import OneFriend from 'src/profile/components/molecules/friend/OneFriend';
import { fetchFriendList } from 'src/profile/api/profile';

interface Props {
  // 친구 추가 창 열림,닫힘 상태
  isFriendAddOpen: boolean;
  // 친구 추가 창 열림,닫힘 상태 변경
  setIsFriendAddOpen: Dispatch<SetStateAction<boolean>>;
}

// 친구 타입
interface friendType {
  // 친구 이름
  friendName: string;
  // 친구 프로필 이미지 URL
  friendImageUrl: string;
}

const FriendList = ({ isFriendAddOpen, setIsFriendAddOpen }: Props) => {
  // 친구 목록
  const [friendList, setFriendList] = useState<friendType[]>([]);
  // 메시지 모달 창 열림,닫힘 상태
  const [isMessageOpen, setIsMessageOpen] = useState<boolean>(false);
  // 모달창 친구 이름
  const [modalFriendName, setModalFriendName] = useState<string>('');
  // 모달 창 메시지
  const [modalMessage, setModalMessage] = useState<string>('');
  // 결과 메시지
  const [resultMessage, setResultMessage] = useState<string>('');
  // 친구 추가 창 친구 이름
  const [addFriendName, setAddFriendName] = useState<string>('');
  // 친구 추가 창 친구 프로필 이미지 URL
  const [addFriendImageUrl, setAddFriendImageUrl] = useState<string>('');

  // 친구 목록 API 호출
  const callContents = async () => {
    const result = await fetchFriendList();
    setFriendList(result?.response?.result?.friendList);
  };

  // 메시지 노출 이벤트
  const showMessage = () => {
    setResultMessage(modalMessage);
    setModalMessage('');
  };

  // 친구 추가 이벤트
  const addFriend = () => {
    if (friendList) {
      const list = [...friendList];
      setFriendList([...list, { friendName: addFriendName, friendImageUrl: addFriendImageUrl }]);
    } else {
      setFriendList([{ friendName: addFriendName, friendImageUrl: addFriendImageUrl }]);
    }
    setAddFriendName('');
    setAddFriendImageUrl('');
  };

  useEffect(() => {
    callContents();
  }, []);

  return (
    <>
      <section>
        {/* 친구 목록 영역 */}
        {friendList?.map((item: friendType, index: number) => (
          <OneFriend
            imageUrl={item.friendImageUrl}
            friendName={item.friendName}
            key={index}
            sendMessage={() => {
              setIsMessageOpen(true);
              setModalFriendName(item.friendName);
            }}
          />
        ))}
        <br />
        <h1>입력한 메세지 : {resultMessage}</h1>

        {/* 메세지 모달 영역 */}
        {isMessageOpen && (
          <Modal
            isOpen={isMessageOpen}
            setIsOpen={setIsMessageOpen}
            title={modalFriendName}
            clickConfirmProp={() => showMessage()}
          >
            <>
              <div className={'inputBase directionCol'}>
                <textarea
                  className={'inp'}
                  cols={50}
                  rows={5}
                  value={modalMessage}
                  onChange={e => setModalMessage(e.target.value)}
                ></textarea>
                <div className={'inpFrame'}></div>
              </div>
            </>
          </Modal>
        )}

        {/* 친구 추가 모달 영역 */}
        {isFriendAddOpen && (
          <Modal
            isOpen={isFriendAddOpen}
            setIsOpen={setIsFriendAddOpen}
            title={'친구 추가'}
            clickConfirmProp={() => addFriend()}
          >
            <>
              <h1>친구 이름</h1>
              <input type='text' value={addFriendName} onChange={e => setAddFriendName(e.target.value)} />
              <br />
              <h1>친구 프로필 URL</h1>
              <input type='text' value={addFriendImageUrl} onChange={e => setAddFriendImageUrl(e.target.value)} />
            </>
          </Modal>
        )}
      </section>
    </>
  );
};

export default FriendList;
