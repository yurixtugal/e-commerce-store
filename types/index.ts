type Store = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

type Category = {
  id : string;
  name : string;
  createdAt: Date;
  updatedAt: Date;
  billBoard: Billboard;
}

type Billboard = {
  id : string;
  name : string;
  createdAt: Date;
  updatedAt: Date;
  imageUrl: String;
}