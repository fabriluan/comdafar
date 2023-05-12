import { useState } from "react";
import { GroupForm, GroupRadio, HomeForm, HomeSt, InfosContent } from "./styleHome";
import imgLogo  from "../../assets/COMDAFAR_logo.jpeg";
import { IMaskInput } from "react-imask";
import api from "../../services/api";

function Home(){

    const [nome, setNome] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [sexo, setSexo] = useState();
    const [civil, setCivil] = useState('');
    const [data, setData] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [numero, setNumero] = useState('');
    const [check, setCheck] = useState(true);
    const [cep, setCep] = useState('');
    const [infos, setInfos] = useState([]);

    function VerifInput(){

        if(nome === ''){
            alert('Nome está vazio');
            return true;
        }
        if(nacionalidade === ''){
            alert('Nacionalidade está vazio');
            return true;
        }
        if(sexo === undefined){
            alert('Sexo está vazio');
            return true;
        }
        if(civil === ''){
            alert('Estado civil precisa ser informado!!!')
            return true;
        }
        if(data === ''){
            alert('Data está vazio');
            return true;
        }
        if(rg === ''){
            alert('RG está vazio');
            return true;
        }
        if(cpf === ''){
            alert('Cpf está vazio');
            return true;
        }
        if(localidade === ''){
            alert('Localidade está vazio');
            return true;
        }
        if(numero === ''){
            alert('Numero está vazio');
            return true;
        }
        if(cep === ''){
            alert('CEP vazio!!!');
            return true;
        }


    }

    const HandleInfo = async (e) => {
        e.preventDefault();
        
        if(VerifInput()){
            return false;
        }

        const response = await api.get(`${cep}/json`);

        let conteudo =  <span> <b> {nome.toUpperCase()} </b>, {nacionalidade}, {civil}, {sexo === 'true' ? 'agricultor' : 'agricultora'}, {sexo === 'true' ? 'nascido' : 'nascida'} em {data}, {sexo === 'true' ? 'portador' : 'portadora'} da Carteira de Identidade civil (RG) n° {rg}-SSP/PR, inscrito no cadastro de pessoas físicas do ministério da fazenda (CPF) sob n° {cpf}, residente e domiciliado, na localidade {localidade}, {numero}, {check ? 'Zona Rural' : 'Zona Urbana'}, Município de {response.data.localidade} CEP: {cep}; </span>;

        infos.push(conteudo);

        setInfos([...infos])    

        setNome('') 
        setNacionalidade('')
        setSexo('')
        setCivil('')
        setData('') 
        setRg('')
        setCpf('')
        setLocalidade('')
        setNumero('')
        setCep('')
        
    }



    return(
        <HomeSt>

            <img src={imgLogo} alt="fabricio"/>

            <HomeForm>

                <GroupForm>
                    <div>
                        <label>Nome: </label>
                        <input 
                        type="text"
                        placeholder="Digite o nome" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)}
                        required />
                    </div>
                    <div>
                        <label>Nacionalidade: </label>
                        <input 
                        type="text"
                        placeholder="Digite a nacionalidade" 
                        value={nacionalidade} 
                        onChange={(e) => setNacionalidade(e.target.value)}
                        required />
                    </div>
                </GroupForm>

                <GroupRadio>
                    <div>
                        <label>Sexo</label>

                        <div>
                            <input type="radio" name="teste" value={true} onChange={ e => setSexo(e.target.value)} required/>
                            <span>Masculino</span>
                            <input type="radio" name="teste" value={false} onChange={ e => setSexo(e.target.value)} required/>
                            <span>Femenino</span>
                        </div>
                    </div>

                    <select value={civil} onChange={ (e) => setCivil(e.target.value)} required>
                        <option selected value={''}>Estado Civil</option>
                        <option value={'casado'}>Casado</option>
                        <option value={'solteiro'}>Solteiro</option>
                        <option value={'viúvo'}>Viúvo</option>
                        <option value={'amasiado'}>Amasiado</option>
                        <option value={'divorciado'}>Divorciado</option>
                    </select>

                    <div>
                        <label>Data de nascimento</label>
                        <IMaskInput 
                        mask="00/00/0000"
                        placeholder="Digite a data" 
                        type="type" 
                        value={data} 
                        onChange={(e) => setData(e.target.value)} 
                        required/>
                    </div>
                </GroupRadio>

                <GroupForm>
                    <div>
                        <label>Rg</label>
                        <input
                        placeholder="Digite o rg" 
                        type="text" 
                        value={rg} 
                        onChange={(e) => setRg(e.target.value)} 
                        required/>
                    </div>
                    <div>
                        <label>Cpf</label>
                        <IMaskInput 
                        mask="000.000.000-00" 
                        placeholder="Digite o cpf" 
                        type="text" 
                        value={cpf} 
                        onChange={(e) => setCpf(e.target.value)} 
                        required/>
                    </div>
                </GroupForm>

                <GroupForm>
                    <div>
                        <label>Localidade</label>
                        <input 
                        type="text"
                        placeholder="Digite a localidade" 
                        value={localidade} 
                        onChange={(e) => setLocalidade(e.target.value)} 
                        required/>
                    </div>

                    <div>
                        <label>Zona Rural</label>
                        <input type="checkbox" checked  ={check} onChange={(e) => setCheck(e.target.checked)} required />
                    </div>

                    <div>
                        <label>Numero</label>
                        <input 
                        type="text"
                        placeholder="Digite o num" 
                        value={numero} 
                        onChange={(e) => setNumero(e.target.value)} 
                        required />
                    </div>

                    <div>
                        <label>CEP</label>
                        <IMaskInput
                        type="text"
                        placeholder="Digite o CEP"
                        mask='00000-000' 
                        value={cep} 
                        onChange={(e) => setCep(e.target.value)}
                        required />
                    </div>
                </GroupForm>
                <button onClick={ HandleInfo } >Enviar</button>
            </HomeForm>


            <InfosContent>

                {infos.length !== 0 && (
                    <h1>Informações</h1>
                )}

                {infos.map((item, index) => (
                    <>
                        {item}
                    </>
                ))}

            </InfosContent>
        </HomeSt>
    )
}

export default Home;