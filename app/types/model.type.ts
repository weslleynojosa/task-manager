export type Task = {
  id: number;
  contractNumber: number;
  name: string;
  status: string;
  phone?: number;
  sex?: string;
  address?: string;
  ocrBirthdate?: string;
  birthdate?: string;
  dateInserted?: string;
  dateUpdated?: string;
};

export interface TaskDetails {
  data: Task;
}

export type TMiscWidget = {
  heading?: string;
  data?: string;
  dataType?: string;
};

export type DBSchema = Task[];
