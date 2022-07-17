import React, { useState } from "react";

import { fetchPostLogout } from "@api/auth";
import { fetchPutUpdatedPassword, fetchPutUpdateMyInfo } from "@api/setting";
import { fetchPostUserProfileImage } from "@api/user";
import { useToast, Avatar, Button, Flex, Input } from "@chakra-ui/react";
import styled from "@emotion/styled";
import usePageTitle from "@hooks/usePageTitle";
import { deleteTokenFromLocalStorage } from "@lib/localStorage";
import userAtom from "@store/user";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

const EditProfilePage = () => {
  usePageTitle("프로필 설정");
  const toast = useToast();
  const [myUser, setMyUser] = useAtom(userAtom);
  const [newFullName, setNewFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const onFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fullName = e.target.value;
    setNewFullName(fullName);
  };

  const onChangeFullNameClick = () => {
    if (!newFullName) {
      alert("새로운 닉네임을 입력하세요!");
      return;
    }

    if (confirm(newFullName + "으로 변경하시겠어요?")) {
      fetchPutUpdateMyInfo(newFullName)
        .then(() => {
          alert("변경되었습니다.");
        })
        .catch(() => {
          alert("닉네임 변경에 실패했습니다");
        })
        .finally(() => {
          navigate("/my/profile");
        });
    }
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setNewPassword(password);
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
        location.reload();
      });
  };

  const profileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fd = new FormData();
    const imageFile = e.target.files[0];
    fd.append("isCover", "false");
    fd.append("image", imageFile);

    fetchPostUserProfileImage(fd)
      .then(() => {
        toast({
          title: "프로필 이미지 변경을 성공했습니다!",
          description: "프로필 이미지 변경 성공",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/my/profile");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <EditProfilePageContainer>
      <Avatar size="2xl" src={myUser?.image} />
      <ProfileImageButton htmlFor="profile">
        프로필 사진 변경
      </ProfileImageButton>
      <input
        type="file"
        id="profile"
        style={{ display: "none" }}
        onChange={profileChange}
      />
      <FormContainer>
        <Flex alignItems="center">
          <InfoText>이메일</InfoText>
          <div>{myUser?.email}</div>
        </Flex>
        <Flex alignItems="center">
          <InfoText>닉네임</InfoText>
          <Input
            type="text"
            width="70%"
            outline="none"
            placeholder={myUser?.fullName}
            onChange={onFullNameChange}
          />
          <ChangeButton onClick={onChangeFullNameClick}>변경</ChangeButton>
        </Flex>
        <Flex alignItems="center">
          <InfoText>새 비밀번호</InfoText>
          <Input
            type="password"
            width="70%"
            outline="none"
            placeholder="새 비밀번호를 입력해주세요"
            value={newPassword}
            onChange={onPasswordChange}
          />
          <ChangeButton onClick={onPasswordClick}>변경</ChangeButton>
        </Flex>
      </FormContainer>
      <Button
        marginBottom="40px"
        color="#838489"
        bgColor="#f4f6f8"
        onClick={onLogoutClick}
      >
        로그아웃
      </Button>
    </EditProfilePageContainer>
  );
};

export default EditProfilePage;

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

const ProfileImageButton = styled.label`
  padding: 6px 25px;
  background-color: #ff6600;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const InfoText = styled.div`
  width: 100px;
  font-size: 16px;
  font-weight: 400;
`;
