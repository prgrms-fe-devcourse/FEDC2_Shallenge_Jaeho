import { Route, Routes } from "react-router-dom";
import AppContainer from "./components/template/AppContainer";
import {
  AuthPage,
  CreateGoalPage,
  EditProfilePage,
  GoalPage,
  GoalsPage,
  HomePage,
  NotFoundPage,
  NotificationPage,
  SearchUserPage,
  UserProfilePage,
} from "./pages";

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchUserPage />} />
        <Route path="/auth" element={<AuthPage />} />

        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/goals/:goalId" element={<GoalPage />} />
        <Route path="/goals/create" element={<CreateGoalPage />} />

        <Route path="/notification" element={<NotificationPage />} />

        <Route path="/profile/:userId" element={<UserProfilePage />} />
        <Route path="/profile/:userId/edit" element={<EditProfilePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
