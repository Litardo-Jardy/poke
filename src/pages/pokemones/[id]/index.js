import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from 'styled-components';

const Home = ( {data} ) =>{
     const router = useRouter();
     const Container = styled.div`
           display: flex;
           flex-wrap: wrap;
           margin-top: 140px;
           justify-content: center;`

     const H2 = styled.h2`
           font-size: 30px;
           text-align: center;
           width: 100%`

     if(router.isFallback) return <p>Cargando</p>
     
     return(
      
       <Container>
               <Link style={{ textDecoration: 'none', fontSize: '25px' }} href="/">Inicio</Link>
               <H2>{`Hola soy el pokemon ${router.query.id} y me llamo ${data.name} `}</H2>
               <Image src={data.sprites.front_default} width={400} height={400} />
       </Container>
     )}
export default Home;

export const getStaticProps = async ( {params} ) =>{
       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
       const data = await response.json();

       return { props: { data }}}

export const getStaticPaths = async () => {
       const paths = [
        { params: { id: '1' }}]
      
       return {
         paths,
         fallback: true}}