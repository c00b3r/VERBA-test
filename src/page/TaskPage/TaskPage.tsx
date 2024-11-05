import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function TaskPage() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  if (!authContext) {
    navigate("/login");
  }
  return <div>TaskPage</div>;
}
