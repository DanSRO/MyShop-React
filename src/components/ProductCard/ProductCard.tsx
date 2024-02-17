import { FiShoppingCart } from 'react-icons/fi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styles';
import { Product } from '../../Data/products';
import { RootReducer } from '../../redux/root-reducer';
import { addProduct, removeProduct } from '../../redux/Cart/cart-slice';

export interface ProductCardProps{
    product: Product;
}

export const ProductCard:React.FC <ProductCardProps>= ({product}) =>{
    const { cart } = useSelector((rootReducer:RootReducer)=>rootReducer.cartReducer);
    const dispatch=useDispatch();
    //variável booleana que informa se o produto está no carrinho
    const isProductOnCart = cart.find(productOnCart=>product.id === productOnCart.id) !== undefined;

    function handleAddProductToCart(){
        //despachar a action de add o produto ao carrinho
        dispatch(addProduct(product));
    }

    function handleRemoveProductToCart(){
        dispatch(removeProduct(product));
    }
    return (
        <S.Card>
            <S.ProductImage src={product.image} alt={product.description}/>
            <S.ProductTitle>{product.title}</S.ProductTitle>
            <S.ReviewPriceContainer>
                <S.Review>
                    { Array.from({ length: 5}).map((_, index) => index < Math.round(product.rating.rate) ? ( 
                        <AiFillStar key={index} />
                        ) : ( 
                        <AiOutlineStar key={index} />
                        )
                    )}
                    ({` ${product.rating.rate}`})
                </S.Review>
                <S.Price>${product.price}</S.Price >
            </S.ReviewPriceContainer>
            <S.AddToCardButtonWrapper>
                {isProductOnCart ? (
                    <S.RemoveFromCardButton onClick={handleRemoveProductToCart}>
                        Remover do carrinho ...
                        <FiShoppingCart/>
                    </S.RemoveFromCardButton>
                ) : (
                    <S.AddToCardButton onClick={handleAddProductToCart}>
                        Adicionar ao carrinho ...
                        <FiShoppingCart/>
                    </S.AddToCardButton>
                )}                
            </S.AddToCardButtonWrapper>
        </S.Card>
    );
}