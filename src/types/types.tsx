type Status = "Inprogress" | "Completed" | "Timeout";
type Priority = "Low" | "Medium" | "High";

export interface FormData {
  task: string;
  description: string;
  date: Date;
  status: Status;
  priority: Priority;
}