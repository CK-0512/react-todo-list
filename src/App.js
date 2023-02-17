import { AppBar, Toolbar } from "@mui/material";
import { Routes, Route, Navigate, NavLink, useLocation } from "react-router-dom";

import MainPage from "./pages/MainPage";
import WritePage from "./pages/WritePage";
import EditPage from "./pages/EditPage";
import {NoticeSnackBar} from "./components/NoticeSnackbar";

function App() {
  const location = useLocation();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <span className="font-bold select-none">NOTE</span>
          <div className="flex-1 flex justify-end">
            {location.pathname != "/main" && (
              <NavLink to="/main" className="select-none">할 일 추가</NavLink>
            )}
            {location.pathname == "/main" && (
              <NavLink to="/write" className="select-none">리스트</NavLink>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <NoticeSnackBar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </>
  );
}

export default App;
