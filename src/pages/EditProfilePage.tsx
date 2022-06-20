import { ChangeEvent, useState } from "react";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

import { Avatar, Button, Flex, Input } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { fetchPostLogout } from "@api/auth";
import { fetchPutUpdatedPassword } from "@api/setting";

import userAtom from "@store/user";
import { deleteTokenFromLocalStorage } from "@lib/localStorage";

const EditProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  margin-top: 40px;
  padding-top: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ChangeButton = styled(Button)`
  color: white;
  background-color: #ffaa6d;
  margin: 12px;

  &:hover {
    background-color: #ff7900;
  }
`;

const FormContainer = styled.div`
  margin-top: 36px;
  margin-bottom: 36px;
`;

const CFlex = styled(Flex)`
  align-items: center;
`;

const InfoText = styled.div`
  width: 100px;
  font-size: 16px;
  font-weight: 400;
`;

const CInput = styled(Input)`
  width: 70%;
  outline: none;
`;

const LogoutButton = styled(Button)`
  color: #838489;
  background-color: #f4f6f8;
  margin-bottom: 40px;
`;

const EditProfilePage = () => {
  const [myUser, setMyUser] = useAtom(userAtom);
  const [newFullName, setNewFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const onChangeProfileImageClick = () => {
    // console.log("프로필이미지변경클릭");
  };

  const onChangeFullNameClick = () => {
    if (!newFullName) {
      alert("새로운 닉네임을 입력하세요!");
      return;
    }

    if (confirm(newFullName + "으로 변경하시겠어요?")) {
      alert("변경되었습니다.");
    }
  };

  const onPasswordClick = () => {
    if (!newPassword) {
      alert("새로운 비밀번호를 입력하세요!");
      return;
    }

    if (confirm("정말 변경하시겠어요?")) {
      fetchPutUpdatedPassword(newPassword)
        .then(() => {
          alert("변경되었습니다.");
        })
        .catch(() => {
          alert("비밀번호변경이 실패했습니다");
        });
    }
  };

  const onPasswordChange = (e: any) => {
    const password = e.target.value as string;
    setNewPassword(password);
  };

  const onLogoutClick = () => {
    fetchPostLogout()
      .then(() => {
        setMyUser(null);
        deleteTokenFromLocalStorage();
      })
      .catch(() => {
        alert("로그인 실패");
      })
      .finally(() => {
        navigate("/");
      });
  };

  return (
    <EditProfilePageContainer>
      <Avatar size="2xl" src={myUser?.image} />
      <ChangeButton display="block" onClick={onChangeProfileImageClick}>
        프로필 사진 변경
      </ChangeButton>
      <FormContainer>
        <CFlex>
          <InfoText>이메일</InfoText>
          <div>{myUser?.email}</div>
        </CFlex>
        <CFlex>
          <InfoText>닉네임</InfoText>
          <CInput type="text" placeholder={myUser?.fullName} />
          <ChangeButton onClick={onChangeFullNameClick}>변경</ChangeButton>
        </CFlex>
        <CFlex>
          <InfoText>새 비밀번호</InfoText>
          <CInput
            type="password"
            placeholder="새 비밀번호를 입력해주세요"
            value={newPassword}
            onChange={onPasswordChange}
          />
          <ChangeButton onClick={onPasswordClick}>변경</ChangeButton>
        </CFlex>
      </FormContainer>
      <LogoutButton onClick={onLogoutClick}>로그아웃</LogoutButton>
    </EditProfilePageContainer>
  );
};

export default EditProfilePage;
