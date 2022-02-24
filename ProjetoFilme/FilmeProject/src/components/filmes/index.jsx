import React, { useContext } from 'react'
import * as S from "./style"
import UserContext from '../../UserContext'

const Filmes = ()=>{
    const dados = useContext(UserContext)

    return (
        <S.SecaoFilme>
            <S.Container>
                {dados.api.filter((el)=> {
                    if(el.backdrop_path === null){
                        return ""
                    }else{
                        return el 
                    }
                }).map((el,index)=> (
                    <div className="card" key={index}>
                        <img src={"https://image.tmdb.org/t/p/w500/"+el.poster_path} />
                        <div className='card-title'>
                            <h3>{el.title}</h3>
                        </div>
                        <div>
                            <p>{el.release_date}</p>
                        </div>
                    </div>
                ))}
        
            </S.Container>
        </S.SecaoFilme>
    )
}
export default Filmes 