export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}


export interface PostData {
  id?: number;
  userId: number;
  title: string;
  body: string;
}


export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}


export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
}


export interface UserModalProps {
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}
