import { useState } from "react";
import { HomeSt } from "./styleHome";

function Home(){

    const [info, setInfo] = useState('');
    const [info2, setInfo2] = useState('');
    const [infos, setInfos] = useState([]);

    const HandleInfo = (e) => {
        e.preventDefault();

        let conteudo = `Olá essa é a info1 : ${info} e essa a ${info2}`;

        infos.push(conteudo);

        setInfos([...infos])
        
    }

    return(
        <HomeSt>
            <form>
                <input type="text" value={info} onChange={(e) => setInfo(e.target.value)} />
                <input type="text" value={info2} onChange={(e) => setInfo2(e.target.value)} />
                <button onClick={ HandleInfo } >Enviar</button>
            </form>


            <section>

                <h1>Infos</h1>

                {console.log(infos)}

                {infos.map((item, index) => (
                    <>
                        <h2>{item}</h2>
                        <span>{index}</span>
                    </>
                ))}

            </section>
        </HomeSt>
    )
}

export default Home;