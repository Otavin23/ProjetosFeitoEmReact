import React, { useContext } from 'react'
import * as S from "./style"
import UserContext from '../../UserContext'


const InformationMovie = ()=>{
    
    const {date,imagePath,image, title} = useContext(UserContext)
    
    const imagePrincipal = "https://image.tmdb.org/t/p/w500/"+imagePath
    const imageFundo = "https://image.tmdb.org/t/p/w500/"+image

    return (
        <S.Main image={imageFundo}>
            <S.Container>
                <div className="image">
                    <img src={imagePrincipal} />
                </div>
                <div className="information">
                    <h3>{title}</h3>
                    <div className="timelive">
                        <span>Data lançamento: <p>{date}</p></span>
                    </div>
                    <div className="link-button">
                        <button>Play now</button>
                        <button>Watch Trailer</button>
                    </div>
                </div>
            </S.Container>
        </S.Main>

    )
}
export default InformationMovie