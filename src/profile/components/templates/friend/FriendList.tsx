import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import classNames from 'classnames';

import Modal from 'src/common/components/molecules/Modal';

import OneFriend from 'src/profile/components/molecules/friend/OneFriend';
import { fetchFriendList } from 'src/profile/api/profile';

interface Props {
  isFriendAddOpen: boolean;
  setIsFriendAddOpen: Dispatch<SetStateAction<boolean>>;
}

interface friendType {
  friendName: string;
  friendImageUrl: string;
}

const FriendList = ({ isFriendAddOpen, setIsFriendAddOpen }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [friendList, setFriendList] = useState<friendType[]>([]);
  const [modalFriendName, setModalFriendName] = useState<string>('');
  const [resultMessage, setResultMessage] = useState<string>('');
  const [modalMessage, setModalMessage] = useState<string>('');
  const [addFriendName, setAddFriendName] = useState<string>('');
  const [addFriendImageUrl, setAddFriendImageUrl] = useState<string>('');

  const callContents = async () => {
    const result = await fetchFriendList();
    setFriendList(result?.response?.result?.friendList);
  };

  const showMessage = () => {
    setResultMessage(modalMessage);
    setModalMessage('');
  };

  const addFriend = () => {
    const list = [...friendList];
    setFriendList([...list, { friendName: addFriendName, friendImageUrl: addFriendImageUrl }]);
    setAddFriendName('');
    setAddFriendImageUrl('');
  };

  useEffect(() => {
    callContents();
  }, []);

  return (
    <>
      <section>
        {friendList?.map((item: friendType, index: number) => (
          <OneFriend
            imageUrl={item.friendImageUrl}
            friendName={item.friendName}
            key={index}
            sendMessage={() => {
              setIsOpen(true);
              setModalFriendName(item.friendName);
            }}
          />
        ))}
        <br />
        <h1>입력한 메세지 : {resultMessage}</h1>

        {isOpen && (
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={modalFriendName} clickConfirmProp={() => showMessage()}>
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
