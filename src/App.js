import Navbar from './components/Navbar'
import React, { useEffect, useState } from 'react';
import Characters from './components/Characters';
import Pagination from './components/Pagination';

function App() {
  const initialUrl = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});



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
    <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
    <div className="container mt-2">
      <Characters characters={characters} />
    </div>
    
    
    </>
    

  );
}

export default App;
