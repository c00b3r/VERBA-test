import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function LoginPage() {
  const authContext = useContext(AuthContext);
  console.log(authContext);
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
        color="info"
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
      >
        Войти
      </Button>
    </Box>
  );
}
