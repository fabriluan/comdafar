import { useState } from "react";
import { GroupForm, GroupRadio, HomeForm, HomeSt } from "./styleHome";
import imgLogo  from "../../assets/COMDAFAR_logo.jpeg";
import { IMaskInput } from "react-imask";

function Home(){

    const [nome, setNome] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [data, setData] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [numero, setNumero] = useState('');
    const [cep, setCep] = useState('');
    const [infos, setInfos] = useState([]);

    const HandleInfo = (e) => {
        e.preventDefault();

        // console.log(new Intl.DateTimeFormat('pt-BR').format(date));

        let conteudo =  <p> <b> {nome} </b>, {nacionalidade} casado, agricultor, nascido em {data} , portador da Carteira de Identidade civil (RG) n° {rg}-SSP/PR, inscrito no cadastro de pessoas físicas do ministério da fazenda (CPF) sob n° {cpf}, </p>;

        infos.push(conteudo);

        setInfos([...infos])    
        
    }

    return(
        <HomeSt>

            <img src={imgLogo} alt="fabricio"/>

            <HomeForm>

                <GroupForm>
                    <div>
                        <label>Nome: </label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div>
                        <label>Nacionalidade: </label>
                        <input type="text" value={nacionalidade} onChange={(e) => setNacionalidade(e.target.value)} />
                    </div>
                </GroupForm>

                <GroupRadio>
                    <div>
                        <label>Genêro</label>

                        <div>
                            <input type="radio" name="teste"/>
                            <span>Masculino</span>
                            <input type="radio" name="teste"/>
                            <span>Femenino</span>
                        </div>
                    </div>

                    <select>
                        <option selected disabled>Estado Civil</option>
                        <option value={'Casado'}>Casado</option>
                        <option value={'Solteiro'}>Solteiro</option>
                        <option value={'Viúvo'}>Viúvo</option>
                    </select>

                    <div>
                        <label>Data de nascimento</label>
                        <IMaskInput mask="00/00/0000" type="type" value={data} onChange={(e) => setData(e.target.value)} />
                    </div>
                </GroupRadio>

                <GroupForm>
                    <div>
                        <label>Rg</label>
                        <input type="text" value={rg} onChange={(e) => setRg(e.target.value)} />
                    </div>
                    <div>
                        <label>Cpf</label>
                        <IMaskInput mask="000.000.000-00" placeholder="Digite o cpf" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    </div>
                </GroupForm>

                <GroupForm>
                    <div>
                        <label>Localidade</label>
                        <input type="text" value={localidade} onChange={(e) => setLocalidade(e.target.value)} />
                    </div>

                    <div>
                        <label>Zona Rural</label>
                        <input type="checkbox" value={rg} onChange={(e) => setRg(e.target.value)} />
                    </div>

                    <div>
                        <label>Numero</label>
                        <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
                    </div>

                    <div>
                        <label>CEP</label>
                        <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
                    </div>
                </GroupForm>
                <button onClick={ HandleInfo } >Enviar</button>
            </HomeForm>


            <section>

                <h1>Infos</h1>

                {console.log(infos)}

                {infos.map((item, index) => (
                    <>
                        {item}
                    </>
                ))}

            </section>
        </HomeSt>
    )
}

export default Home;