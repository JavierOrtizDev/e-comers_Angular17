// {
//     id:1,
//     title:'...',
//     price:'...',
//     category:'...',
//     description:'...',
//     image:'...'
// }
interface Rating {
  rate: number;
  count: number;
}
export interface Product {
  id: number;
  titel: string;
  price: number;
  category: string;
  description: string;
  image: string;
  qty: number;
  subtotal: number;
  rating: Rating;
}
