import { NavLink, useLocation } from "react-router";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

import { ChevronLeft } from "lucide-react";
import { BackToHome, BagCount, HeaderContainer, Location, LogoImg } from "./styles";

export function Header() {
  const currentPage = useLocation();
  
  const { amountBagItems, activeOrder, resetOrderData } = useContext(OrderContext);
  
  const homePage = currentPage.pathname === '/';
  const checkoutPage = currentPage.pathname === '/checkout';
  const successPage = currentPage.pathname === '/success';

  return (
    <HeaderContainer>
      {homePage ? (
        <Location>
          São Paulo, SP
        </Location>
      ) : checkoutPage ? (
        <NavLink to={"/"}>
          <BackToHome>
            <ChevronLeft size={18}/>
            Back
          </BackToHome>
        </NavLink>
      ) : successPage && (
        <NavLink to={"/"}>
          <BackToHome onClick={resetOrderData}>
            <ChevronLeft size={18}/>
            Home
          </BackToHome>
        </NavLink>
      )}

      {successPage ? (
        <NavLink to={"/"} onClick={resetOrderData}>
          <LogoImg src="./coffeLogo.svg"/>
        </NavLink>
      ) : (
        <NavLink to={"/"}>
          <LogoImg src="./coffeLogo.svg"/>
        </NavLink>
      )}
      
      {activeOrder ? (
        <Location>
          São Paulo, SP
        </Location>
      ) : (
        <NavLink  to={`${amountBagItems === 0 ? "/" : "/checkout" }`}>
          <BagCount>
            <p>Bag</p>
            <span>[</span>
              <p>{amountBagItems}</p>
            <span>]</span>
          </BagCount>
        </NavLink>
      )}
    </HeaderContainer>
  )
}