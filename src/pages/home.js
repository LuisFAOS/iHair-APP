import React from 'react';
import withAuth from '../components/WithAuth';


function Home(){
    return (
        <div>Hello world! Você está logado!!</div>
    )
} 

export default withAuth(Home)