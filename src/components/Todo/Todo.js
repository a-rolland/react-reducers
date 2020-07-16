import React from "react"
import { TodoContainer, Text, Title } from "./styles"

const Todo = ({title, text}) => (
    <TodoContainer>
        <Title>{title}</Title>
        <Text>{text}</Text>
    </TodoContainer>
)

// EQUIVALENT TO :
// const Todo = (props) => (
//   <div>
//     <h2>{props.title}</h2>
//     <p>{props.text}</p>
//   </div>
// );
// WITHOUT STYLED-COMPONENTS
// !!! OJO !!! STYLED COMPONENT AND REAL COMPONENT MUST HAVE DIFFERENT NAMES !!!

export default Todo