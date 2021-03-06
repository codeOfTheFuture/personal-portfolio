import React from "react";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Layout>
      <Navigation />
      <div className='contact'>
        <h1>Contact</h1>
        <h2>Please contact me using the form below!</h2>
        <ContactForm />
        <style jsx>{`
          .contact {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            width: 100%;
          }
          .contact h1 {
            margin-bottom: 0;
            font-family: Montserrat;
            background-color: lightgrey;
            letter-spacing: 2px;
            padding: 0.3em 0.5em;
            border: 1px solid black;
            border-radius: 20px;
            box-shadow: 0 0 0 4px whitesmoke;
          }
          .contact h2 {
            font-size: 1.3em;
          }
          @media only screen and (max-width: 600px) {
            .contact {
              justify-content: center;
              text-align: center;
            }
            .contact h1 {
              margin-top: 3em;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Contact;
