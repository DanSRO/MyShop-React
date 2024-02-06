import { AuthButton, ButtonWrapper, CardButton, HeaderTitle, StyledHeader, Wrapper } from "./styles";
import { FiLogIn, FiLogOut,  FiShoppingCart } from 'react-icons/fi';
export const Header:React.FC =()=>{
    return (
        <StyledHeader>
            <Wrapper>
                <HeaderTitle>MyShop.</HeaderTitle>
                <ButtonWrapper>
                    <AuthButton>
                        Login
                        <FiLogIn />
                    </AuthButton>
                    <CardButton>
                        Carrinho
                        <FiShoppingCart />
                    </CardButton>
                </ButtonWrapper>
            </Wrapper>
        </StyledHeader>
    );
};