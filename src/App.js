import './App.css';
import {Ventana} from './components/vistas/vista'
import {InputText} from './components/inputText/inputText'
import {useState, useEffect} from 'react';

function App() {
  const [texto, setTexto] = useState( 'inicio' )

  useEffect(() => {
    setTexto(() => {return "# text test state"})
  }, [])

  

  return (
    <div className = "App">
      {/* <span>{texto}</span> */}
      <Ventana
        // id = "editor"
        titulo = "editor" 
        cuerpo={
          <InputText id="editor" estado={{texto, setTexto}}/>
        }
      />
      <Ventana 
        tipo = "prevista"
        id = "preview"
        titulo = "preview"
        cuerpo = {texto}
      />
    </div>
  );
}

export default App;


// estado = {{texto, setTexto}}