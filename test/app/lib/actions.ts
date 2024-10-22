'use client'; // Assurez-vous que ce code est dans un composant côté client

import React from 'react';
import { signIn } from 'next-auth/react';

const Login = () => {
  // Fonction pour gérer l'envoi du formulaire
  const handleSignIn = async (e) => {
    e.preventDefault(); // Empêche le  rechargement de la page

    // Récupérer les données du formulaire
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    // Utiliser next-auth pour se connecter
    const result = await signIn('credentials', {
      redirect: false, // Ne pas rediriger automatiquement après la connexion
      username,
      password,
    });

    if (result.error) {
      console.error('Error signing in:', result.error);
    } else {
      console.log('Successfully signed in:', result);
    }
  };return (<form>)
};

export default Login;


// <form onSubmit={handleSignIn}>
//     <input type="text" name="username" placeholder="Username" />
//     <input type="password" name="password" placeholder="Password" />
//     <button type="submit">Sign In</button>
//   </form>);