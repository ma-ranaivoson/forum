export interface User {
  avatar: string;
  email: string;
  lastVisitAt: number;
  name: string;
  isModerator: true;
  registeredAt: number;
  username: string;
  usernameLower: string;
  id: string;
}

export type Users = User[];
