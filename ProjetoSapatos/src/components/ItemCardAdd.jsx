import React from "react"
import * as S from "./Itemstyle"
import Icone from "../images/1thumb.jpg"
import DeleteIcon from "../images/delete.png"

const ItemCardAdd = ()=> {

    return (
        <S.TerminoCompra>
            <div className='container'>
                    <div className="content">
                    <div className="photo">
                    <img src={Icone} />
                    </div>
                    <div className="text">
                    <p>
                        Fall Limited Edition Sneakers $125.00 x 3 
                        <b>$375.00</b>
                    </p>
                    </div>
                    <button className="DeleteProduct">
                    <img src={DeleteIcon} />
                    </button>
                </div>
                <button id="Chekout">Checkout</button>
            </div>

        </S.TerminoCompra>
    )
}
export default ItemCardAdd