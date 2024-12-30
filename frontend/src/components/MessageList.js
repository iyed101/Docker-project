import React, { useEffect, useState } from "react"; // Importer React et les hooks
import axios from "axios"; // Importer Axios pour les requêtes HTTP

// Composant MessageList
const MessageList = () => {
  const [messages, setMessages] = useState([]); // État pour stocker les messages
  const [loading, setLoading] = useState(true); // État pour indiquer le chargement
  const [error, setError] = useState(null); // État pour gérer les erreurs

  // Fonction pour récupérer les messages depuis l'API
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/messages") // URL de votre backend
      .then((response) => {
        setMessages(response.data); // Stocker les données dans l'état
        setLoading(false); // Indiquer que le chargement est terminé
      })
      .catch((err) => {
        setError("Erreur lors de la récupération des messages."); // Gérer les erreurs
        setLoading(false); // Arrêter le chargement
      });
  }, []); // Le tableau vide [] signifie que cette fonction s'exécute au montage du composant

  // Affichage conditionnel
  if (loading) {
    return <div>Chargement des messages...</div>; // Afficher un message pendant le chargement
  }

  if (error) {
    return <div>{error}</div>; // Afficher un message d'erreur si nécessaire
  }

  return (
    <div>
      <h1>Liste des Messages</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li> // Afficher chaque message
        ))}
      </ul>
    </div>
  );
};

export default MessageList;

