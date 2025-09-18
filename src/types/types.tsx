type Status = "Inprogress" | "Completed" | "Timeout";
type Priority = "Low" | "Medium" | "High";

export interface FormData {
  id?: string;
  title: string;
  description: string;
  date: string;
  status: Status;
  priority: Priority;
}