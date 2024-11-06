import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Box, Button, Tab, Tabs, TextField } from "@mui/material";

export default function TaskPage() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  if (!authContext) {
    navigate("/login");
  }

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        p={2}
        width={800}
        sx={{ backgroundColor: "gray", borderRadius: "8px", height: "40px" }}
        alignItems={"center"}
      >
        <Button variant="contained">+ Добавить</Button>
        <TextField
          label="Название задачи"
          sx={{
            label: { color: "white" },
            input: { color: "white" },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": { borderColor: "black" },
            },
            "& .MuiInputLabel-root.Mui-focused": { color: "white" },
          }}
        ></TextField>
        <Button color="error" variant="contained">
          Очистисть
        </Button>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        p={2}
        width={800}
        sx={{ backgroundColor: "gray", borderRadius: "8px", height: "40px" }}
        alignItems={"center"}
      >
        <Tabs>
          <Tab label="Текущие дела" />
          <Tab label="Все дела" />
          <Tab label="Выполненные дела" />
          <Tab label="Корзина" />
        </Tabs>
      </Box>
    </Box>
  );
}
