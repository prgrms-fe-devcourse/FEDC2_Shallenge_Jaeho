# ⭐️ Shallenge

## 목표 인증 공유 SNS 서비스

<img src="https://user-images.githubusercontent.com/50866506/180643633-e357d51e-36eb-4ff0-8990-7d0002ebc0ef.png" width=250px alt="logo">

#### 수행기간 : 2022.06.06 ~ 2022.06.22
#### [배포 링크](https://shallenge.vercel.app/) / [노션 링크](https://prgrms.notion.site/Shallenge-0609c326406e4869b5b2673ddd31eece) / [Github Wiki](https://github.com/prgrms-fe-devcourse/FEDC2_Shallenge_Jaeho/wiki)

<br>

## 👥 팀원

<table>
  <tr>
    <td align="center">
      <div>프론트엔드</div>
    </td>
    <td align="center">
      <div>프론트엔드</div>
    </td>
    <td align="center">
      <div>프론트엔드</div>
    </td>
    <td align="center">
      <div>프론트엔드</div>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/75849590/180480337-134d3317-2fbd-4fc9-8725-657809567e9e.jpg" width=130px alt="권내영">
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/75886763/180629001-13dab661-7858-4184-84b1-46a2e2aa2413.png" width=130px alt="김재호"/>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/75886763/180628969-67f1b506-fa8f-4f93-ab49-82c1ae99916c.png" width=130px alt="조계진">
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/75886763/180628961-94bbf84b-50fc-425f-a993-89b870262c9d.png" width=130px alt="조승희">
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/nyoung113">
        <div>권내영</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/dar-jeeling">
        <div>김재호</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/taewook1">
        <div>조계진</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/sa02045">
        <div>조승희</div>
      </a>
    </td>
  </tr>
</table>

<br>

## 실행방법
```
npm install
npm start
```

## 🌁 기획 배경
- 대다수의 사람들이 계획을 세우고 달성하기 위해 어플리케이션을 사용하지만 잘 지키지 못한다.
    - 목표를 꾸준히 지킬 수 있는 동기부여가 필요하다.
    - 단순 목표를 세우는 것 보다 달성 시 나에게 주는 보상을 정함으로써 동기부여가 되게 한다.
    - 또한 나와 비슷한 목표를 가진 다른 사용자들의 기록을 보며 자극 받고, 서로 응원이나 댓글을 통해 격려해 목표를 완수할 수 있도록 도와준다.
- todo app 및 habit tracker와 같이 많은 목표, 습관 서비스가 있지만, 서로 자신의 목표와 상황을 공유하는 SNS 형태는 거의 존재하지 않는다.
    - 목표에 대한 내용과 기간을 금전적인 강제성 없이 스스로 정해 **도전**하고, 그것을 **공유**하는 것에도 도전만큼의 가치를 두어 개인의 목표 달성을 독려한다.
    - 자신이 세운 목표와 보상을 기록함으로써 성취감을 얻을 수 있다.
- 기존의 todo app, habit tracker은 기록을 하는 것 자체에 중점을 두는데, 단순 기록을 넘어 목표를 달성할 수 있도록 장치를 만들어 목표 달성을 독려할 수 있도록 한다.

<br>

## 💡 기능
- 챌린지 설정 기능
    - 기간 및 요일을 설정해서 챌린지를 설정 가능
- 챌린지 인증 기능
    - 사진 업로드 기능을 통해  사진을 통한 기록 가능
- 기록 보기 기능
    - 각 챌린지별로 달성 퍼센트 및 남은 기간 보기 가능
- 계정 공개 기능
    - 자신의 기록 계정 공개 기능을 통해 다른 사람이 자신의 챌린지들과 기록들을 볼 수 있도록 공개
- 계정 팔로우, 응원하기 기능
    - 다른 사용자를 팔로우하거나, 다른 사용자의 특정 챌린지를 응원하기
- 알람 기능
    - 자신의 계정에 다른 사용자가 팔로우, 댓글, 응원을 하면 알림 울리기

<br>

## 💻 화면 예시

<table>
  <tr>
    <td align="center">
      <div>메인 화면</div>
    </td>
    <td align="center">
      <div>채널 화면</div>
    </td>
    <td align="center">
      <div>알림 화면</div>
    </td>
    <td align="center">
      <div>목표 상세 화면</div>
    </td>
    <td align="center">
      <div>사용자 정보 화면</div>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img width="642" alt="메인 화면" src="https://user-images.githubusercontent.com/75886763/180639962-bcf16715-21ee-4091-ba83-87273fbba549.png">
    </td>
    <td align="center">
      <img width="655" alt="채널 화면" src="https://user-images.githubusercontent.com/75886763/180639980-dbb9001b-7328-47ba-ab85-3289a75374b2.png">
    </td>
    <td align="center">
      <img width="650" alt="알림 화면" src="https://user-images.githubusercontent.com/75886763/180639986-03578ed7-8e1d-46c6-b458-37942b60efa8.png">
    </td>
    <td align="center">
      <img width="658" alt="상세 화면" src="https://user-images.githubusercontent.com/75886763/180639992-40f0c057-a3f6-4b85-a562-999fc7bbf982.png">
    </td>
    <td align="center">
      <img width="652" alt="회원 정보 화면" src="https://user-images.githubusercontent.com/75886763/180639997-d5501d90-d7a1-44d4-93cb-584a62de16fd.png">
    </td>
  </tr>
</table>

<br>

## ⚙️ 개발 환경
- VScode
- NPM ^8
- Node.js ^16
- Webpack ^5.73.0

<br>

## 📃 기술 스택

<table>
  <tr>
    <td align="center">
      <div>프레임워크</div>
    </td>
    <td align="center">
      <div>라이브러리</div>
    </td>
    <td align="center">
      <div>UI</div>
    </td>
    <td align="center">
      <div>협업</div>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://img.shields.io/badge/React-18.1.0-61DAFB?style=for-the-badge">
      <img src="https://img.shields.io/badge/Typescript-4.7.3-3178C6?style=for-the-badge">
    </td>
    <td align="center">
      <img src="https://img.shields.io/badge/Jotai-1.7.2-FFFFFF?style=for-the-badge">
      <img src="https://img.shields.io/badge/Prettier-2.6.2-F7B93E?style=for-the-badge">
      <img src="https://img.shields.io/badge/Eslint-8.17.0-4B32C3?style=for-the-badge">
      <img src="https://img.shields.io/badge/ReactQuery-3.39.1-FF4154?style=for-the-badge">
      <img src="https://img.shields.io/badge/ReactRouter-6.3.0-CA4245?style=for-the-badge">
      <img src="https://img.shields.io/badge/Axios-0.27.2-76448a?style=for-the-badge">
      <img src="https://img.shields.io/badge/FeatherIcons-4.29.0-000000?style=for-the-badge">
    </td>
    <td align="center">
      <img src="https://img.shields.io/badge/StoryBook-2.6.2-FF4785?style=for-the-badge">
      <img src="https://img.shields.io/badge/Emotion-11.9.0-c783be?style=for-the-badge">
    </td>
    <td align="center">
      <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge">
      <img src="https://img.shields.io/badge/Figma-000000?style=for-the-badge">
      <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge">
      <img src="https://img.shields.io/badge/Notion-FFFFFF?style=for-the-badge">
      <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge">
    </td>
  </tr>
</table>
