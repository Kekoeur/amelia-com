import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import EMAILJS_USER_ID from '../config/email.config';

const FormDevis = (f) => {
  emailjs.init(EMAILJS_USER_ID);

  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [societe, setSociete] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [site, setSite] = useState('');
  const [projet, setProjet] = useState('');

  const [error, setError] = useState('');

  const isValidEmail = (email) => {
    // Expression régulière pour vérifier le format de l'adresse e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(email);
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };
  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };
  const handleSocieteChange = (e) => {
    setSociete(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSiteChange = (e) => {
    setSite(e.target.value);
  };
  const handleProjetChange = (e) => {
    setProjet(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
        if (!isValidEmail(email)) {
            setError('Adresse e-mail invalide');
            return;
          }

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
          to_name: 'Recipient Name',
          message: 'Hello, how are you?'
        })
        .then(function(response) {
          console.log('E-mail sent!', response);
        }, function(error) {
          console.error('Error sending e-mail:', error);
        });

        // Réinitialisation des valeurs du formulaire après l'envoi
        setLastname('');
        setFirstname('');
        setSociete('');
        setPhone('');
        setEmail('');
        setSite('');
        setProjet('');

        // Affichage d'un message de succès
        alert('Votre message a été envoyé avec succès !');

        } catch (error) {
        console.error('Erreur lors de l\'envoi du mail', error);
        setError('Une erreur s\'est produite lors de l\'envoi du message.');
        }
  };

  return (
    <div className='userForm'>
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder="Nom" type="text" id="lastname" value={lastname} onChange={handleLastnameChange} />
        </div>
        <div>
          <input placeholder="Prénom" type="text" id="fistname" value={firstname} onChange={handleFirstnameChange} />
        </div>
        <div>
          <input placeholder="Société" type="text" id="societe" value={societe} onChange={handleSocieteChange} />
        </div>
        <div>
          <input placeholder="Numéro de téléphone" type="phone" id="phone" value={phone} onChange={handlePhoneChange} />
        </div>
        <div>
          <input placeholder="Email" type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <input placeholder="Url du site" type="url" id="site" value={site} onChange={handleSiteChange} />
        </div>
        <div>
          <input placeholder="Projet" type="textarea" id="projet" value={projet} onChange={handleProjetChange} />
        </div>
        <div>
            <p className='error_signup'>{error}</p>
        </div>
        <button type="submit">Contacter moi</button>
      </form>
    </div>
  );
};

export default FormDevis;
