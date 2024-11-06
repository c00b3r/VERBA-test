import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../interface";

const loadTasksFromLocalStorage = (): Task[] => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

const TaskSlice = createSlice({
  name: "task",
  initialState: loadTasksFromLocalStorage(),
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      const updatedTasks = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    },
    completeTask: (state, action) => {
      const updatedTask = state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(updatedTask));
      return updatedTask;
    },
    clearAllTasks: () => {
      localStorage.setItem("tasks", JSON.stringify([]));
      return [];
    },
  },
});

export const { addTask, deleteTask, completeTask, clearAllTasks } =
  TaskSlice.actions;
export default TaskSlice.reducer;
