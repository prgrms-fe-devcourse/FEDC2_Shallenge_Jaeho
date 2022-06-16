import AuthPage from "@pages/AuthPage";
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

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route
        path="/challenges/:channelId/:challengeId"
        element={<ChallengePage />}
      />
      <Route path="/challenges/:channelId" element={<ChallengesPage />} />
      <Route
        path="/challenges/:channelId/:challengeId/comment"
        element={<CommentPage />}
      />
      <Route path="/challenges/create" element={<CreateChallengePage />} />
      <Route path="/profile/:userId/edit" element={<EditProfilePage />} />
      <Route path="/follow/:userId" element={<FollowPage />} />
      <Route path="/notification/:userId" element={<NotificationPage />} />
      <Route path="/search" element={<SearchUserPage />} />
      <Route path="/profile/:userId" element={<UserProfilePage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
