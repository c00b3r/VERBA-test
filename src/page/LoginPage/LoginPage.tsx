import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function LoginPage() {
  const authContext = useContext(AuthContext);
  console.log(authContext);
  return <div>LoginPage</div>;
}
