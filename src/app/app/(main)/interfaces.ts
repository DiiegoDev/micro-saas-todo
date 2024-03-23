export interface Todo {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt?: Date;
  doneAt?: Date;
}
