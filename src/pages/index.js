import Link from "next/link";
import styled from 'styled-components';


const P = styled.p`
     margin: 5%;
     padding: 5px;
     text-decoration: none;`

const Pokemon = ( {pokemon} ) => {
     const id = pokemon.url.split('/').filter(x => x).pop()
      return(
          <P><Link style={{ textDecoration:' none', fontSize: '22px' }} href={`pokemones/${id}`}>{pokemon.name}</Link></P>)}

const Pokemones = ({ pokemones }) =>{
    
     const Container = styled.div`
           display: flex;
           flex-direction: row;
           flex-wrap: wrap;
           justify-content: center;`

     const H2 = styled.h2`
           font-size: 30px;
           text-align: center;
           width: 100%`

     return(
          <Container>
             <H2>Name Pokemones</H2>
               {pokemones.map(pokemon =>  <Pokemon pokemon={pokemon} key={pokemon.name} /> )}
          </Container>)}
     export default Pokemones;


export const getStaticProps = async () => {
     const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
     const data = await response.json();

     return{
          props: { pokemones: data.results }}}  