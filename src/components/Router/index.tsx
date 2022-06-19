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
import { Route, Routes } from "react-router-dom";
import MyProfilePage from "@pages/MyProfilePage";

import AuthProvider from "../Provider/AuthProvider";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/my/profile/"
          element={
            <PrivateRoute>
              <MyProfilePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/my/profile/edit"
          element={
            <PrivateRoute>
              <EditProfilePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/my/challenge/create"
          element={
            <PrivateRoute>
              <CreateChallengePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/my/notifications"
          element={
            <PrivateRoute>
              <NotificationPage />
            </PrivateRoute>
          }
        />

        <Route path="/follow/:userId" element={<FollowPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/challenges/:channelId/:challengeId"
          element={<ChallengePage />}
        />

        <Route path="/challenges/:channelId" element={<ChallengesPage />} />

        <Route
          path="/challenges/:channelId/:challengeId/comment"
          element={<CommentPage />}
        />

        <Route path="/search" element={<SearchUserPage />} />

        <Route path="/profile/:userId" element={<UserProfilePage />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
  );
};

export default AppRouter;
