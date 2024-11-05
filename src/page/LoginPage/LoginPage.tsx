import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const authContext = useContext(AuthContext);
  const [auth, setAuth] = useState<null | boolean>(authContext);
  const navigate = useNavigate();
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  if (auth) {
    navigate("/");
  }

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      border={"1px solid black"}
      p={2}
      gap={2}
      borderRadius={"8px"}
    >
      <Typography variant="h5">Войти</Typography>
      <TextField
        label="Логин"
        sx={{
          label: { color: "white" },
          input: { color: "white" },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": { borderColor: "black" },
          },
          "& .MuiInputLabel-root.Mui-focused": { color: "white" },
        }}
        value={loginValue}
        onChange={(e) => setLoginValue(e.target.value)}
      />
      <TextField
        label="Пароль"
        type="password"
        sx={{
          label: { color: "white" },
          input: { color: "white" },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": { borderColor: "black" },
          },
          "& .MuiInputLabel-root.Mui-focused": { color: "white" },
        }}
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          "&:hover": {
            backgroundColor: "#0a0a0a",
          },
        }}
        onClick={() => {
          if (loginValue === "admin" && passwordValue === "admin") {
            setAuth(true);
          }
        }}
      >
        Войти
      </Button>
    </Box>
  );
}
