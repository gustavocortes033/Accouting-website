
import React from 'react';
import { FormContainer, Form, Input, Textarea, Button } from './Form.elements';

const ContactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    try {
      const response = await fetch('https://formspree.io/f/xblryyno', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
      } else {
        alert('Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <FormContainer>
      <h2>Contáctanos</h2>
      <br/>
      <br/>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Nombre" required />
        <Input type="email" name="email" placeholder="Correo Electrónico" required />
        <Textarea name="message" rows="4" placeholder="Tu Mensaje" required />
        <Button type="submit">Enviar</Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
