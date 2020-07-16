import React, { userReducer } from "react";
import MainContainer from "./containers/MainContainer"

const App = () => {
  return <MainContainer />
};

export default App;


{
  /* Explication of the structure :
  <MainCt>
  <Main>
    lista de todos
    <Form>
      <input></input>
      <input></input>
      <buton>Add</buton>
    </Form>
  </Main>
</MainCt>; */
}
