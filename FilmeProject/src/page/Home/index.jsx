import React from "react"
import * as S from "./style"
import Filmes from "../../components/filmes"

const Home = ()=>{
    return (
        <>
        <S.Main>
            <S.Container>
                <div className="information">
                    <h2>Capitão Cueca</h2>
                    <ul className="information-type">
                        <li>2017</li>
                        <li>+12</li>
                        <li>1h 29m</li>
                    </ul>
                    <div className="information-description">
                        <p>Baseada nos quadrinhos de Dav Pilkey, a história acompanha George e Harold, dois melhores-amigos do ensino fundamental, famosos por suas pegadinhas no Diretor Krupp, um homem mal-humorado que persegue a...</p>
                    </div>
                    <div className="information-button">
                        <button>Viewer Now</button>
                        <button>+ My list</button>
                    </div>
                </div>
            </S.Container>
        </S.Main>
        <Filmes />
        </>
    )
}
export default Home 