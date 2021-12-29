import { NotFound, PrivateRoute } from "components/Common";
import { Admin } from "components/Layout";
import LoginPage from "features/auth/pages/LoginPage";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/admin" element={<PrivateRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
