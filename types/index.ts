type Store = {
  id: string;
  name: string;
  backgroundImageUrl: string;
  logoImageUrl: string;
  description: string;
  address: string;
  fbLink: string;
  igLink: string;
  xLink: string;
  tiktokLink: string;
  phoneSupport: string;
  emailSupport: string;
  showWhatsapp: boolean;
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

type Color = {
  id : string;
  name : string;
  value: string;
  createdAt: Date;
  updatedAt: Date;
}

type Size = {
  id : string;
  name : string;
  value: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

type Product = {
  id : string;
  name: string;
  basePrice: number;
  createdAt: Date;
  updatedAt: Date;
  store: Store;
  Category: Category;
  isVariant: boolean;
  isFeatured: boolean;
  images: ImagesProduct[];
  variants: VariantProduct[]; 
}

type ImagesProduct = {
  id : string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

type VariantProduct = {
  id: string;
  quantity: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  Size: Size;
  Color: Color;  
}

type Pagination = {
  currentPage: number;
  total: number;
  lastPage: number;
}

type ProductAndPagination = {
  data: Product[];
  pagination: Pagination;
}