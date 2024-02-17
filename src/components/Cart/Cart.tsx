import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { RootReducer, rootReducer } from '../../redux/root-reducer';
import { Product } from '../../Data/products';
import { useEffect } from 'react';
import { removeProduct } from '../../redux/Cart/cart-slice';
interface CartProps{
    showCart:boolean;
}
export const Cart:React.FC<CartProps> = ({showCart}) =>{
    const { cart } = useSelector((rootReducer:RootReducer)=>rootReducer.cartReducer);
    const dispatch=useDispatch();
    const total = cart.reduce((totalCart, product)=>{
        return totalCart+product.price;
    },0);
    useEffect(() => {
        const fetchProductsFromApi = async () => {
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
              throw new Error('Failed to fetch products');
            }
            const data: Product[] = await response.json();
    
            // Despacha uma ação para adicionar os produtos da API ao carrinho (se necessário)
            dispatch({
              type: 'cart/add-multiple-products',
              payload: data,
            });
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchProductsFromApi();
      }, [dispatch]);   

    const removeFromList = (product:Product) =>{
        dispatch(removeProduct(product));
    }
    return (
        <S.Container showCart={showCart}>
            <S.Title>Carrinho</S.Title>
            <S.CartProductList>
                {cart.map((product)=>(
                    <S.CartProductItem key={product.id}>
                        <strong>{product.title}</strong> - ${product.price}
                        <button onClick={()=>removeFromList(product)}>Remover</button>
                    </S.CartProductItem>
                    ))}
            </S.CartProductList>
            <S.CartTotal>Total ${total}</S.CartTotal>
        </S.Container>
    );
}