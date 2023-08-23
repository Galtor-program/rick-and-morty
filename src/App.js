import Navbar from './components/Navbar'
import React, { useEffect, useState } from 'react';
import Characters from './components/Characters';
import Pagination from './components/Pagination';

function App() {
  const initialUrl = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [search, setSearch] = useState ("")
  

const searcher = (e) => {
  setSearch(e.target.value)
  console.log(e.target.value)
}

let resultados = []
if(!search)
{
  resultados = characters

} else{
  resultados = characters.filter((dato) => dato.name.toLowerCase().includes(search.toLowerCase()))
}



  const fectchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };
  const onPrevious = () =>{
    fectchCharacters(info.prev);
  }

  const onNext = () =>{
    fectchCharacters(info.next);
  }  

  useEffect(() => {
    fectchCharacters(initialUrl);
  }, []);

  return (
    <>
   
    <Navbar brand="Rick and Morty APP" />
    
     <br/>
     <input value={search}  onChange={searcher}  type="text" placeholder='Busqueda por nombre en cada pagina' className='form-control'></input>  
    <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
    <div className="container mt-2">
      
      <Characters characters={resultados} />
    </div>
    
    
    </>
    

  );
}

export default App;
