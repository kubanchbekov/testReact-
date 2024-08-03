import styled from "styled-components"

export const QuizItem = (props)=>{
    console.log(props);
    return(
        <div>
          <Button onClick={()=>props.onAnswer(props.item.isCorrect)}>{props.item.answerText}</Button>
        </div>
    )
}

const Button = styled.button`
    border: none;
    background-color: #b5c7d1;
    border-radius: 5px;
    padding: 4px 8px ;
    cursor: pointer;
    color: white;
    font-weight:900;
    margin-top: 14px;
    width: 100%;
    &:hover{
        background-color: #239a3d;
    }
    &:active{
        background-color: #0e1a68;
    }
`