import { User } from './User';

export class List {
  _id: string;
  title: string;
  description: string;
  creator: User;
  buddy: User;
  accomplished: boolean;
}