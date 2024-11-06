import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../interface";

const initialState: Task[] = [];

const TaskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    completeTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });
    },
  },
});

export const { addTask, deleteTask, completeTask } = TaskSlice.actions;
export default TaskSlice.reducer;
