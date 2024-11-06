export interface Task {
  id: string;
  name: string;
  isDone: boolean;
  isDelete: boolean;
}

export enum TaskStatus {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
  DELETED = "deleted",
}
