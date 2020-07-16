import React from "react"
import Main from "../view/Main"
import { useTodos } from "../hooks/useTodos"

const MainContainer = () => {
    const { state, handleSubmit, handleChange } = useTodos()
    return (
        <Main
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            state={state}
        />
    )
}

export default MainContainer