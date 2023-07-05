import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import EMAILJS_USER_ID from '../config/email.config';

const FormContact = (f) => {
  emailjs.init(EMAILJS_USER_ID);

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [societe, setSociete] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [site, setSite] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');

  const isValidEmail = (email) => {
    // Expression régulière pour vérifier le format de l'adresse e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(email);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
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
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
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
        setLastName('');
        setFirstName('');
        setSociete('');
        setPhone('');
        setEmail('');
        setSite('');
        setMessage('');

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
          <input placeholder="Nom" type="text" id="lastname" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div>
          <input placeholder="Prénom" type="text" id="fistname" value={firstName} onChange={handleFirstNameChange} />
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
          <input placeholder="Message" type="textarea" id="message" value={message} onChange={handleMessageChange} />
        </div>
        <div>
            <p className='error_signup'>{error}</p>
        </div>
        <button type="submit">Contacter moi</button>
      </form>
    </div>
  );
};

export default FormContact;
