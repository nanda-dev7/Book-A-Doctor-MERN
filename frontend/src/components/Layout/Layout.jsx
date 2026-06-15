import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../redux/features/authSlice";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector(
    (state) => state.auth
  );

  const handleLogout = () => {
    localStorage.removeItem("token");

    dispatch(logout());

    navigate("/login");
  };

  return (
    <div>
      <div
        style={{
          padding: "15px",
          background: "#1677ff",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2>Book A Doctor</h2>
        </div>

        <div>
          <span>
            {user?.name}
          </span>

          <span
            style={{
              marginLeft: "10px",
            }}
          >
            ({user?.role})
          </span>

          <Button
            danger
            style={{
              marginLeft: "15px",
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>

      <div
        style={{
          padding: "20px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;