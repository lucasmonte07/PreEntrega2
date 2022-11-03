
import { useState, useEffect } from "react" 
import compuApi from "../../APIrest/compuApi" 
import Card from "../../components/Home/Card/Card"
import {useParams} from "react-router-dom"
import '../Home/Home.css';

function Home() {  
  
  const [filter, setFilter] = useState("");  
  const [characters, setCharacters] = useState([]);
  const {cat} = useParams();

  const getImages = () => {
    setTimeout(() => {
    const characters = compuApi;
    setCharacters(characters);
    }, 2000);
  }

  useEffect(() => {
    getImages();
  }, []);         

  return (

  <div className='principal-container'>
      
      {cat}
      
      <h1>Productos</h1>
      
      <input id="filter" name="filter" type="text" value={filter} 
      onChange={(event) => setFilter(event.target.value)}
      />

      <div className='cards-container'>          
          
          {cat?
          characters
          .filter((producto) => producto.character.includes(filter))
          .filter((producto) => producto.category === 'Hard')
          .map((character, i) => (          
          
              <Card 
                ids={i}
                key={i}
                name = {character.character}
                image = {character.image}
                quote = {character.quote}
                category = {character.category}
                id = {character.id}
                />
          ))
          :
          characters
          .filter((producto) => producto.character.includes(filter))        
          .map((character, i) => (          
          
              <Card 
                ids={i}
                key={i}
                name = {character.character}
                image = {character.image}
                quote = {character.quote}
                category = {character.category}
                id = {character.id}               
                />
          ))  
        }
      </div>
    </div>  
  );
}

export default Home;