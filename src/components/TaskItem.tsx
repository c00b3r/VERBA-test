import { Box, Button, Checkbox, Typography } from "@mui/material";
import { Task } from "../interface";

interface TaskItemProps extends Task {
  onDelete: (id: string) => void;
  onDone: (id: string) => void;
}

export default function TaskItem({
  name,
  isDone,
  id,
  onDelete,
  onDone,
}: TaskItemProps) {
  return (
    <Box
      key={id}
      display={"flex"}
      justifyContent={"space-between"}
      border={"1px solid white"}
      p={2}
      borderRadius={"8px"}
      width={"500px"}
      alignItems={"center"}
    >
      <Checkbox value={isDone} onChange={() => onDone(id)}></Checkbox>
      <Typography
        variant="h5"
        sx={{
          maxWidth: "350px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </Typography>
      <Button onClick={() => onDelete(id)} variant={"contained"} color="error">
        🗑️
      </Button>
    </Box>
  );
}
