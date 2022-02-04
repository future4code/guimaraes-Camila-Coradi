import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  `
    
class App extends React.Component {
  state={
    post:[
      {nomeUsuario:"paulinha", fotoUsuario:"https://picsum.photos/50/50", fotoPost:"https://picsum.photos/200/150"},
      {nomeUsuario:"joao", fotoUsuario:"https://picsum.photos/51/50", fotoPost:"https://picsum.photos/200/151"},
      {nomeUsuario:"amanda", fotoUsuario:"https://picsum.photos/52/50", fotoPost:"https://picsum.photos/200/152"},
    ]
  }

  render() {
    const componentePost = this.state.post.map((pessoa, index) =>{
      return <Post nomeUsuario={pessoa.nomeUsuario} fotoUsuario={pessoa.fotoUsuario} fotoPost={pessoa.fotoPost}/>
    }
    );
    return (
      <MainContainer>
        <div>
          {componentePost}
        </div>        
      </MainContainer>
    );
  }
}

export default App;
