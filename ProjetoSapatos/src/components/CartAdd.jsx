import React from "react"
import * as S from "./style"
import Carrinho from "./ItemCardAdd"

const CartAdd = ()=>{
    return (
        <S.Fundo>
            <header>
                <p>Cart</p>
            </header>
            <span>
                <p id="cart">Your cart is empty</p>
            </span>
            <Carrinho />
        </S.Fundo>
    )
}
export default CartAdd