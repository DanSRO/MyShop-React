import { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
// import { products } from '../../Data/products';

import * as S from './styles';
import { Product } from '../../Data/products';

export const ProductsList:React.FC = () =>{
    const [apiProducts, setApiProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductsFromApi = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        setApiProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductsFromApi();
  }, []);
    return (
        <S.Container>
            { apiProducts.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </S.Container>
    );
}