export interface Club {
  coverUrl: string;
  description: string;
  id: string;
  meetings: Meeting[];
  name: string;
  place: string;
  type: string;
}

export interface Meeting {
  order: number;
  endedAt: string;
  startedAt: string;
}

export interface Person {
  name: string;
}

export interface Products {
  club: Club;
  price: number;
  leaders: Person[];
  partners: Person[];
  createdAt: string;
}
