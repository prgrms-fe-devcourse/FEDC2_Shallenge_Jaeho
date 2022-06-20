import { Route, Routes } from "react-router-dom";

import LoginPage from "@pages/LoginPage";
import ChallengePage from "@pages/ChallengePage";
import ChallengesPage from "@pages/ChallengesPage";
import CommentPage from "@pages/CommentPage";
import CreateChallengePage from "@pages/CreateChallengePage";
import EditProfilePage from "@pages/EditProfilePage";
import FollowPage from "@pages/FollowPage";
import HomePage from "@pages/HomePage";
import NotFoundPage from "@pages/NotFoundPage";
import NotificationPage from "@pages/NotificationPage";
import SearchUserPage from "@pages/SearchUserPage";
import UserProfilePage from "@pages/UserProfilePage";
import MyProfilePage from "@pages/MyProfilePage";

import AuthProvider from "../Provider/AuthProvider";
import PrivateRoute from "./PrivateRoute";
import InputLayout from "@layout/InputLayout";
import TextLayout from "@layout/TextLayout";

const AppRouter = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<InputLayout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="my" element={<PrivateRoute />}>
            <Route path="profile" element={<MyProfilePage />} />
            <Route path="profile/edit" element={<EditProfilePage />} />
            <Route path="challenge/create" element={<CreateChallengePage />} />
            <Route path="notifications" element={<NotificationPage />} />
          </Route>

          <Route path="/follow/:userId" element={<FollowPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<SearchUserPage />} />
        </Route>

        <Route element={<TextLayout />}>
          <Route path="challenges" element={<ChallengesPage />}>
            <Route path=":channelId" element={<ChallengesPage />}>
              <Route path=":challengeId" element={<ChallengePage />} />
            </Route>
          </Route>
        </Route>

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
  );
};

export default AppRouter;
