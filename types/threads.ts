interface Thread {
  id: string;
  author: User;
  content: string;
  image?: string;
  replies: Reply[];
  replyCount: number;
  likeCount: number;
  mention?: boolean;
  mentionUser?: User;
  createdAt: string;
}

interface Reply {
  id: string;
  author: User;
  content: string;
  likes: number;
  createdAt: string;
}

interface User {
  id: string;
  name: string;
  username: string;
  verified: boolean;
  photo: string;
  bio: string;
  link?: string;
  followers?: User[];
}

export { Thread, Reply, User }
