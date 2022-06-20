import { Avatar, Button, Flex, Input } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";

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
  const [newFullName, setNewFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const image = "";
  const email = "asdfds@adsfdsaf";
  const fullName = "chogyejin";

  const onChangeProfileImageClick = () => {
    console.log("프로필이미지변경클릭");
  };

  const onChangeFullNameClick = () => {
    console.log(newFullName);
    if (!newFullName) {
      alert("새로운 닉네임을 입력하세요!");
      return;
    }

    if (confirm(newFullName + "으로 변경하시겠어요?")) {
      // api
      alert("변경되었습니다.");
    }
  };

  const onChangePasswordClick = () => {
    console.log(newPassword);
    if (!newFullName) {
      alert("새로운 비밀번호를 입력하세요!");
      return;
    }

    if (confirm("정말 변경하시겠어요?")) {
      // api
      alert("변경되었습니다.");
    }
  };

  const onLogoutClick = () => {
    console.log("로그아웃 클릭");
    // 로그아웃 api
  };

  return (
    <EditProfilePageContainer>
      <Avatar size="2xl" src={image} />
      <ChangeButton display="block" onClick={onChangeProfileImageClick}>
        프로필 사진 변경
      </ChangeButton>
      <FormContainer>
        <CFlex>
          <InfoText>이메일</InfoText>
          <div>{email}</div>
        </CFlex>
        <CFlex>
          <InfoText>닉네임</InfoText>
          <CInput
            type="text"
            placeholder={`현재는 ${fullName}`}
            onChange={(e) => setNewFullName(e.target.value)}
          />
          <ChangeButton onClick={onChangeFullNameClick}>변경</ChangeButton>
        </CFlex>
        <CFlex>
          <InfoText>새 비밀번호</InfoText>
          <CInput
            type="password"
            placeholder="새 비밀번호를 입력해주세요"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <ChangeButton onClick={onChangePasswordClick}>변경</ChangeButton>
        </CFlex>
      </FormContainer>
      <LogoutButton onClick={onLogoutClick}>로그아웃</LogoutButton>
    </EditProfilePageContainer>
  );
};

export default EditProfilePage;
