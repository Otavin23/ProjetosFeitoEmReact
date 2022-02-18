import React from 'react'
import * as S from "./style"
import Code from "../images/code.png"

const App = ()=>{
    return (
        <S.MainBg>
            <S.Container>
                <div className="bg-cod">
                    <img src={Code} />
                </div>
                <div className="information">
                    <div className="container-information">
                        <h2>Improve your front-end skills by building projects</h2>
                        <p>Scan the QR code to visit Frontend Mentor and take your codding skills to the next level</p>
                    </div>
                </div>
            </S.Container>
        </S.MainBg>
    )
}
export default App 


