import styled from "styled-components";


export const Container = styled.div`
    background-color: #395B64;
    color: white;
    height: 400px;
    width: 400px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    h2{
        border-radius: 10px;
        border: 2px solid white;
        padding: 10px;
        width: 75%;
        text-align: center;
    }

    .inputValue{
        display: flex;
        flex-direction: column;
    }

    input{
        padding: 10px;
        border-radius: 10px;
        border: 2px solid white;
        margin-top: 10px;
        background-color: transparent;
        color: white;
        text-align: center;
    }
    input::placeholder {
        color: white;
    }
    input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    }
    input[type=number] { 
    -moz-appearance: textfield;
     appearance: textfield;
    }
    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
} 
    
    .btnGroup{
        margin-top: 10px;
        display: grid;
        grid: repeat(2, 60px) / auto-flow     60px;
    }

    button{
        padding: 10px;
        width: 50px;
        margin-top: 5px;
        background-color: transparent;
        border: 2px solid white;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        transition: all .3s ease-in;
        font-size: 20px;
        font-weight: bolder;
    }
    button:hover{
        transform: scale(1.1);
        background-color: white;
        color: #395B64;
    }

`