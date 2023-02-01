import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {
  HomePage,
  ProfessorPage,
  WorkPage,
  TasksPage,
} from "../pages";
import ActivityPage from "../pages/activityPage";
import UploadPage from "../pages/uploadPage";
import { AppRoutes } from "./types";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.HOME} element={<HomePage />} />
        <Route path={AppRoutes.WORK} element={<WorkPage />} />
        <Route path={AppRoutes.PROFESSORS} element={<ProfessorPage />} />
        <Route path={AppRoutes.DOCUMENTS} element={<UploadPage />} />
        <Route path={AppRoutes.ACTIVITY} element={<ActivityPage />} />
        <Route path={AppRoutes.TASKS} element={<TasksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
