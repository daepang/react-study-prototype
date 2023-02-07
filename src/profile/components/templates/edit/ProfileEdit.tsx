import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import type { RootState } from 'src/store';

import ProfileImage from 'src/profile/components/molecules/ProfileImage';
import { setProfile, setProfileName, setImageUrl } from 'src/profile/features/slice';

const ProfileEdit = () => {
  const dispatch = useDispatch();
  // 프로필 닉네임 상태
  const profileName = useSelector((state: RootState) => state.profile.profileName);

  // 닉네임 상태
  const [nickName, setNickName] = useState<string>(profileName);

  // 닉네임 입력 Change Event 호출
  const handleChangeNickName = (inputNickName: string) => {
    let notWord = false;
    const wordPattern =
      /[0-9a-zA-Zㄱ-ㅎ가-힣ㅏ-ㅣ\u318D\u119E\u11A2\u2022\u2025\u00B7\uFE55\u4E10\u3163\u3161ㆍᆢᄀ-ᄒ]/;
    const words = inputNickName.split('');
    words.map(word => {
      if (!wordPattern.test(word)) {
        notWord = true;
        return false;
      }
    });
    if (notWord) return;
    setNickName(inputNickName);
  };

  // 닉네임 변경 Event
  const changeNickName = () => {
    dispatch(setProfileName(nickName));
    window.alert('닉네임이 변경되었습니다.');
  };

  return (
    <>
      <section>
        {/* 프로필 이미지 영역 */}
        <section className={classNames('profileEdit')}>
          <ProfileImage imageUrl={'https://picsum.photos/100/100'} />
        </section>

        {/* 프로필 닉네임 영역 */}
        <div className={'profileEdit-field'}>
          <div className={'profileEdit-titleBox'}>
            <h2 className={'profileEdit-title'}>프로필 닉네임 변경</h2>
          </div>
          <div className={'formGrid'}>
            <div className={'formControl'}>
              <div className={'inputBase'}>
                <input
                  type={'text'}
                  className={'inp'}
                  placeholder={'닉네임을 입력해주세요.'}
                  title={'닉네임을 입력해주세요.'}
                  value={nickName}
                  onChange={e => handleChangeNickName(e.target.value)}
                />
                <div className={'inpFrame'}></div>
              </div>
            </div>
            <div className={'formControl formButton'}>
              <button className={'btnContained colorSecondary'} onClick={changeNickName}>
                닉네임 변경
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileEdit;
