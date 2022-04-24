export interface Post {
  edited: {
    at: number;
    by: string;
    moderated: boolean;
  };
  publishedAt: number;
  text: string;
  threadId: string;
  userId: string;
  id: string;
}

export type Posts = Post[];
