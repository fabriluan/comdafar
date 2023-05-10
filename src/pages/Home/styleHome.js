import { styled } from "styled-components";
// import times from "../../fonts/Times_New_Roman";

export const HomeSt = styled.article `
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    img{
        width: 100%;
        max-width: 500px;
    }

    button{
        width: 100%;
        max-width: 200px;
        margin-left: auto;
        font-size: 1rem;
        padding: 5px 0;
        margin-top: 20px;
        cursor: pointer;
    }
`

export const HomeForm = styled.form `
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    label{
        font-size: 1rem;
    }

    input{
        width: 100%;
        padding: 5px;
        font-size: 1rem;
        background-color: #f1f1f1;
        border: 1px solid #000;
    }

    section:nth-last-child(2){

        > div:nth-child(2){
            /* background-color: red; */
            width: 20%;
            margin: 0 10px;
            align-items: center;
            justify-content: center;

            input{
                margin-top: 5px;
            }
        }

        > div:nth-child(3){
            /* background-color: red; */
            width: 20%;
            margin: 0 10px;
            align-items: center;
        }
        
    }
`

export const GroupRadio = styled.section `
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    justify-content: space-around;
    
    input{
        width: 40%;
    }

    select{
        width: 25%;
        background-color: #f1f1f1;
    }

    > div:nth-last-child(1){
        input{
            width: 100%;
            text-align: center;
        }
    }

    > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 15px;
        background-color: #f1f1f1;

        label{
            margin-bottom: 7px;
        }

        > div{
            display: flex;

            input{
                margin: 0 5px;
                cursor: pointer;
            }
        }
    }

`

export const GroupForm = styled.section `

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;

    > div{
        width: 49%;
        display: flex;
        flex-direction: column;
    }
`       

export const InfosContent = styled.section `
    margin-top: 20px;
    width: 60%;

    h1{
        margin-bottom: 10px;
        font-weight: 600;
    }

    span{
        font-family: 'Times New Roman', Times, serif;
        font-size: 12pt;
    }
    
`