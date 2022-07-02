import React, { useState } from "react";

import { Avatar, Button, Flex, Input, useToast } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { User } from "../types/index";
import { fetchPostLogout } from "@/api/auth";
import { fetchPutUpdatedPassword, fetchPutUpdateMyInfo } from "@/api/setting";
import { fetchPostUserProfileImage } from "@/api/user";
import usePageTitle from "@/hooks/usePageTitle";
import axios from "@/lib/axios";
import { deleteTokenFromLocalStorage } from "@/lib/localStorage";
import userAtom from "@/store/user";

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
  const toast = useToast();
  usePageTitle("프로필 설정");
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

  const { mutate } = useMutation(
    (fd) => {
      return axios.post("/users/upload-photo", fd);
    },
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  const profileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fd = new FormData();
    const imageFile = e.target.files[0];
    fd.append("isCover", "false");
    fd.append("image", imageFile);
    mutate();

    // fetchPostUserProfileImage(fd)
    //   .then(() => {
    //     toast({
    //       title: "프로필 이미지 변경을 성공했습니다!",
    //       description: "프로필 이미지 변경 성공",
    //       status: "success",
    //       duration: 3000,
    //       isClosable: true,
    //     });
    //     navigate("/my/profile");
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
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
        <CFlex>
          <InfoText>이메일</InfoText>
          <div>{myUser?.email}</div>
        </CFlex>
        <CFlex>
          <InfoText>닉네임</InfoText>
          <CInput
            type="text"
            placeholder={myUser?.fullName}
            onChange={onFullNameChange}
          />
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
