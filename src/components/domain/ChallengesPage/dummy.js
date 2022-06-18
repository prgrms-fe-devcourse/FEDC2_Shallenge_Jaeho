// GET /channels => Channel[]
export const channelsData = [
  {
    authRequired: "boolean", // 사용되지 않음
    posts: [],
    _id: "channelid1", // 채널 id
    name: "운동",
    description: "운동",
    createdAt: "2022-06-07T09:44:19.128Z",
    updatedAt: "2022-06-07T09:44:19.128Z",
  },
  {
    authRequired: "boolean", // 사용되지 않음
    posts: [],
    _id: "channelid2", // 채널 id
    name: "독서",
    description: "독서",
    createdAt: "2022-06-07T09:44:19.128Z",
    updatedAt: "2022-06-07T09:44:19.128Z",
  },
  {
    authRequired: "boolean", // 사용되지 않음
    posts: [],
    _id: "channelid3", // 채널 id
    name: "자기계발",
    description: "자기계발",
    createdAt: "2022-06-07T09:44:19.128Z",
    updatedAt: "2022-06-07T09:44:19.128Z",
  },
  {
    authRequired: "boolean", // 사용되지 않음
    posts: [],
    _id: "channelid4", // 채널 id
    name: "루틴",
    description: "루틴",
    createdAt: "2022-06-07T09:44:19.128Z",
    updatedAt: "2022-06-07T09:44:19.128Z",
  },
  {
    authRequired: "boolean", // 사용되지 않음
    posts: [], //post
    _id: "channelid5", // 채널 id
    name: "공부",
    description: "공부",
    createdAt: "2022-06-07T09:44:19.128Z",
    updatedAt: "2022-06-07T09:44:19.128Z",
  },
];

// GET /channels/{channelName} => Channel
export const channelData = {
  authRequired: "boolean", // 사용되지 않음
  posts: [
    {
      likes: [
        {
          _id: "likeid1",
          user: "userid1", // 사용자 id
          post: "postid1", // 포스트 id
          createdAt: "2022-06-11T09:44:19.128Z",
          updatedAt: "2022-06-11T09:44:19.128Z",
        },
        {
          _id: "likeid1",
          user: "userid1", // 사용자 id
          post: "postid1", // 포스트 id
          createdAt: "2022-06-11T09:44:19.128Z",
          updatedAt: "2022-06-11T09:44:19.128Z",
        },
      ],
      comments: [
        {
          _id: "commentid1",
          comment: "댓글댓",
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
          post: "postid1",
          createdAt: "Asd",
          updatedAt: "ASdas",
        },
      ], // 포스트 댓글
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
      channel: "adf", // Channel type
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
      likes: [],
      comments: [], // 포스트 댓글
      _id: "postid2", // 포스트 id
      image: "",
      imagePublicId: "",
      title: {
        title: "공부하기",
        reward: "공부를 열심히 하기",
        days: [
          {
            day: 1,
            isChecked: true,
          },
        ],
        date: "new Date().toISOString()",
      },
      channel: "Adf", // Channel type
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
  ],
  _id: "channelid1", // 채널 id
  name: "운동",
  description: "운동",
  createdAt: "2022-06-07T09:44:19.128Z",
  updatedAt: "2022-06-07T09:44:19.128Z",
};

// Post 쪽 타입 임시 변경
// title: {
//   title: string;
//   reward: string;
//   date: string;
//   days: {
//     day: number;
//     isChecked: boolean;
//   }[];
// };
// channel: string;
