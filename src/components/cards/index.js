import React, { useEffect, useState } from 'react'
import './index.css'
import api from '../../services/api'

const Cards = () => {
    const [pokemons,setPokemon] = useState()
useEffect(()=>{
    api.get('https://pokeapi.co/api/v2/pokemon/?offset=151&limit=302',{

    }).then(response=>{
        setPokemon(response.data)
        console.log(response.data)
    })

},[])
    
    return (
        <div className='container'>
            <h1>Pokedex</h1>
        { {pokemons.map(pokemon =>{
            return(
                <h1>{pokemon.name}</h1>
            )
        })} }
 
        </div>
    )}
export default Cards;