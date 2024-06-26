import { useState, useEffect } from 'react';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from './pages/Detail';
import Pocket from './pages/Pocket';



function App() {
  const [data, setData] = useState([]);
  const [cartItem, setCartItem] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  

  const fetchApi = async () => {
    try {
      const urls = [
        "https://pokeapi.co/api/v2/pokemon/1",
        "https://pokeapi.co/api/v2/pokemon/2",
        "https://pokeapi.co/api/v2/pokemon/3/",
        "https://pokeapi.co/api/v2/pokemon/4/",
        "https://pokeapi.co/api/v2/pokemon/5/",
        "https://pokeapi.co/api/v2/pokemon/6/",
        "https://pokeapi.co/api/v2/pokemon/7/",
        "https://pokeapi.co/api/v2/pokemon/8/",
        "https://pokeapi.co/api/v2/pokemon/9/",
        "https://pokeapi.co/api/v2/pokemon/10/",
        "https://pokeapi.co/api/v2/pokemon/11/",
        "https://pokeapi.co/api/v2/pokemon/12/",
      ];
      const requests = urls.map((url) => axios.get(url));
      const responses = await Promise.all(requests);
      const data = responses.map((response) => response.data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  
   

   const addToCart = (pokemon , quantity) => {
    setCartItem((prevItem) => {
      const existingItem = prevItem.find((item) => item.pokemon.id === pokemon.id);
      if(existingItem){
        return prevItem.map((item) => 
        item.pokemon.id === pokemon.id
        ? {...item ,quantity: item.quantity + quantity}
        :item
      )
      } else{
        return [...prevItem, {pokemon, quantity}]
      }
    })
   }
  


    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };

  return (
    <>
      <BrowserRouter>
        <Navbar
          cartItem={cartItem}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
        />
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route
              path="/"
              element={<Home data={data} searchTerm={searchTerm} />}
            />
            <Route
              path="/pokemon/:id"
              element={<Detail addToCart={addToCart} />}
            />
            <Route
              path="/pocket"
              element={
                <Pocket
                  cartItem={cartItem}
                  data={data}
                  setCartItem={setCartItem}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
