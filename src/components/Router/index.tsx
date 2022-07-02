import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";

import AuthProvider from "../Provider/AuthProvider";
import PrivateRoute from "./PrivateRoute";
import InputLayout from "@/layout/InputLayout";
import TextLayout from "@/layout/TextLayout";
import ChallengePage from "@/pages/ChallengePage";
import ChallengesPage from "@/pages/ChallengesPage";
import CommentPage from "@/pages/CommentPage";
import CreateChallengePage from "@/pages/CreateChallengePage";
import EditProfilePage from "@/pages/EditProfilePage";
import FollowPage from "@/pages/FollowPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import MyProfilePage from "@/pages/MyProfilePage";
import NotFoundPage from "@/pages/NotFoundPage";
import NotificationPage from "@/pages/NotificationPage";
import OtherProfilePage from "@/pages/OtherProfilePage";
import SearchUserPage from "@/pages/SearchUserPage";

const AppRouter = () => {
  return (
    <AuthProvider>
      <Helmet>
        <title>Shallenge</title>
      </Helmet>
      <Routes>
        <Route element={<InputLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchUserPage />} />
          <Route path="/profile/:username" element={<OtherProfilePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>

        <Route element={<TextLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/challenges/:channelId" element={<ChallengesPage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route
            path="/challenges/:channelId/:challengeId"
            element={<ChallengePage />}
          />
          <Route
            path="/challenges/:channelId/:challengeId/comment"
            element={<CommentPage />}
          />
          <Route path="/follow/:userId" element={<FollowPage />} />

          <Route path="my" element={<PrivateRoute />}>
            <Route path="profile" element={<MyProfilePage />} />
            <Route path="profile/edit" element={<EditProfilePage />} />
            <Route path="challenge/create" element={<CreateChallengePage />} />
            <Route path="notifications" element={<NotificationPage />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default AppRouter;
