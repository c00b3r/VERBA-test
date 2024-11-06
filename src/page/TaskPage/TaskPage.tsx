import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Box, Button, Tab, Tabs, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  completeTask,
  deleteTask,
} from "../../store/TaskReducer/TaskSlice";
import { Task } from "../../interface";
import { RootState } from "../../store/store";
import TaskItem from "../../components/TaskItem";

export default function TaskPage() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const taskList = useSelector((state: RootState) => state.task);
  console.log(taskList);
  const [taskTitle, setTaskTitle] = useState("");

  if (!authContext) {
    navigate("/login");
  }

  function handleAddTask() {
    if (taskTitle.trim()) {
      const newTask = {
        id: Date.now().toString(),
        name: taskTitle,
        isDone: false,
        isDelete: false,
      };
      dispatch(addTask(newTask));
      setTaskTitle("");
    }
  }

  function handleClearAllTask() {
    dispatch(addTask([]));
  }

  function handleDeleteTask(id: string) {
    dispatch(deleteTask(id));
  }

  function handleCompleteTask(id: string) {
    dispatch(completeTask(id));
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
        <Button variant="contained" onClick={handleAddTask}>
          + Добавить
        </Button>
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
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        ></TextField>
        <Button color="error" variant="contained" onClick={handleClearAllTask}>
          Очистисть
        </Button>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        p={2}
        width={800}
        sx={{ backgroundColor: "gray", borderRadius: "8px" }}
        alignItems={"center"}
      >
        <Tabs>
          <Tab value="1" label="Текущие дела" />
          <Tab value="2" label="Все дела" />
          <Tab value="3" label="Выполненные дела" />
          <Tab value="4" label="Корзина" />
        </Tabs>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          {taskList.map((task: Task) => (
            <TaskItem
              name={task.name}
              isDone={task.isDone}
              onDone={handleCompleteTask}
              onDelete={handleDeleteTask}
              id={task.id}
              isDelete={false}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
