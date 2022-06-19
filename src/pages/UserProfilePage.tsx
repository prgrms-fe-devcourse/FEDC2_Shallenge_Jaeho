import UserAvatar from "@domain/UserProfilePage/UserAvatar";
import UserChallenges from "@domain/UserProfilePage/UserChallenges";
import UserSummary from "@domain/UserProfilePage/UserSummary";
import styled from "@emotion/styled";

const UserInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 32px;
`;

const UserProfilePage = () => {
  const image = "";
  const name = "chogyejin";
  const coverImage = "안녕하세요 자기 소개";
  const follower = [{}, {}];
  const following = [{}, {}, {}];
  const posts = [
    {
      likes: [
        {
          _id: "likeid1",
          user: "userid1", // 사용자 id
          post: "postid1", // 포스트 id
          createdAt: "2022-06-11T09:44:19.128Z",
          updatedAt: "2022-06-11T09:44:19.128Z",
        },
      ],
      comments: [], // 포스트 댓글
      _id: "postid1", // 포스트 id
      image: "",
      imagePublicId: "",
      title: {
        title: "공원달리기",
        reward: "가지고 싶었던 운동화 사기",
        days: [
          {
            day: 1,
            isChecked: true,
          },
        ],
        date: "new Date().toISOString()",
      },
      // channel: "채널 데이터", // Channel type
      author: {
        coverImage: "자기소개",
        image: "프로필이미지주소", // 프로필 이미지
        role: "role",
        emailVerified: true, // 사용되지 않음
        banned: true, // 사용되지 않음
        isOnline: true,
        posts: [],
        likes: [],
        comments: [],
        followers: [],
        following: [],
        notifications: [],
        messages: [],
        _id: "userid1", // 사용자 id
        fullName: "사용자닉네임", //
        email: "asd@asd.com",
        createdAt: "2022-05-12T09:44:19.128Z",
        updatedAt: "2022-05-12T09:44:19.128Z",
      },
      createdAt: "2022-06-10T09:44:19.128Z",
      updatedAt: "2022-06-10T09:44:19.128Z",
    },
    {
      likes: [
        {
          _id: "likeid1",
          user: "userid1", // 사용자 id
          post: "postid1", // 포스트 id
          createdAt: "2022-06-11T09:44:19.128Z",
          updatedAt: "2022-06-11T09:44:19.128Z",
        },
      ],
      comments: [], // 포스트 댓글
      _id: "postid2", // 포스트 id
      image: "",
      imagePublicId: "",
      title: {
        title: "매일 축구하기",
        reward: "피시방에서 밤 새기",
        days: [
          {
            day: 1,
            isChecked: true,
          },
        ],
        date: "new Date().toISOString()",
      },
      // channel: "채널 데이터", // Channel type
      author: {
        coverImage: "자기소개",
        image: "프로필이미지주소", // 프로필 이미지
        role: "role",
        emailVerified: true, // 사용되지 않음
        banned: true, // 사용되지 않음
        isOnline: true,
        posts: [],
        likes: [],
        comments: [],
        followers: [],
        following: [],
        notifications: [],
        messages: [],
        _id: "userid1", // 사용자 id
        fullName: "사용자닉네임", //
        email: "asd@asd.com",
        createdAt: "2022-05-12T09:44:19.128Z",
        updatedAt: "2022-05-12T09:44:19.128Z",
      },
      createdAt: "2022-06-10T09:44:19.128Z",
      updatedAt: "2022-06-10T09:44:19.128Z",
    },
  ];
  return (
    <>
      <UserInfo>
        <UserAvatar image={image} name={name} />
        <UserSummary
          introduce={coverImage}
          followerCount={follower.length}
          followingCount={following.length}
        />
      </UserInfo>
      <UserChallenges challenges={posts} />
    </>
  );
};

export default UserProfilePage;
