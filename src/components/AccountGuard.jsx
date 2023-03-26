//ログインしていない状態でアカウントページにアクセスさせいないようにする

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const AccountGuard = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  if (!currentUser) {
    return navigate("/");
  } else {
    return children;
  }
};

export default AccountGuard;
