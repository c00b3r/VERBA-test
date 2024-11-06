import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskReducer/TaskSlice";

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
