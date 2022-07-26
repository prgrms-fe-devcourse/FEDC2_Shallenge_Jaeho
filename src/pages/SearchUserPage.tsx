import { useEffect, useState } from "react";

import { Flex } from "@chakra-ui/react";
import QueryString from "qs";
import { useLocation, useNavigate } from "react-router";

import Card from "@/base/Card";
import DefaultText from "@/base/DefaultText";
import useGetUserList from "@/hooks/quries/useGetUserList";
import { User } from "src/types";

const SearchUserPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  const [userName, setUserName] = useState(query.userName as string);
  const [userList, setUserList] = useState<User[]>([]);
  const { data: allUserList } = useGetUserList();

  useEffect(() => {
    if (allUserList) {
      const newUserList: User[] = allUserList.filter((user: User) =>
        user.fullName.match(new RegExp(userName, "i"))
      );
      setUserList(newUserList);
    }
  }, [userName, allUserList]);

  if (userName !== query.userName) {
    setUserName(query.userName as string);
  }

  const handleClickUserCard = (userId: string) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <Flex justifyContent={"center"} width="100%">
      {userList.length === 0 ? (
        <DefaultText>
          {userName}
          으로 찾은 사용자가 없어요 😢
          <br />
          다른 이름으로 찾아보시는 건 어떠신가요?
        </DefaultText>
      ) : (
        <Flex width="100%" flexDirection="column">
          <DefaultText styleProps={{ padding: "32px 0px" }}>
            {userName}
            으로 찾은 사용자들이에요
          </DefaultText>
          {userList.map((user: User) => {
            return (
              <Card
                type="user"
                heading={user.fullName}
                text={user.coverImage ?? "한줄 소개 없음"}
                margin="4px 0"
                key={user._id}
                avatarSrc={user.image}
                onClick={() => {
                  handleClickUserCard(user._id);
                }}
              ></Card>
            );
          })}
        </Flex>
      )}
    </Flex>
  );
};

export default SearchUserPage;
