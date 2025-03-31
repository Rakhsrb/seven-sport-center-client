export interface BlogPost {
  _id?: string;
  photos: string[];
  title: string;
  description: string;
  createdAt?: string;
}

export interface TrainerMember {
  photo: string;
  fullName: string;
  achievements: string;
  experience: string;
  clients: string;
}
