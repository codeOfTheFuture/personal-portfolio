import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import PortfolioImg from "../components/PortfolioImg";
import SocialMediaLinks from "../components/SocialMediaLinks";

const Home = () => (
  <Layout>
    <div>
      <Head>
        <title>Jeff Oliver - Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <div className='home-container'>
        <div className='home-bg'>
          <div className='bg-overlay-top'></div>
          <h1 className='title'>
            <span className='name'>Jeff Oliver</span>
            <span className='hyphen'>|</span>
            <span>Full Stack Web Developer</span>
          </h1>
          <div className='portfolio'>
            <PortfolioImg />
          </div>
          <div className='bg-overlay-bottom'></div>
          <div className='social-links'>
            <SocialMediaLinks />
          </div>
        </div>
        <div className='bg-overlay'></div>
      </div>

      <style jsx>{`
        .home-container {
          height: 91.5vh;
          width: 100%;
        }
        .home-bg {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 92vh;
          width: 100%;
          background-image: url("/assets/home-bg.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        }
        .bg-overlay-top,
        .bg-overlay-bottom {
          height: 50%;
          width: 100%;
          position: absolute;
          background-color: rgba(0, 0, 0, 0.9);
        }
        .bg-overlay-top {
          // border-bottom: 2.5px solid whitesmoke;
        }
        .bg-overlay-bottom {
          top: 50%;
          // border-top: 2.5px solid whitesmoke;
        }
        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          margin-top: 1em;
          padding: 0.5em 0;
          width: 65%;
          line-height: 1.15;
          letter-spacing: 2px;
          font-size: 2em;
          text-align: center;
          color: black;
          background-color: lightgrey;
          border-radius: 20px;
          border: 1px solid black;
          box-shadow: 0 0 0 4px whitesmoke;
        }
        .title span {
          margin: 0 0.5em;
        }
        .portfolio {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .social-links {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 76vh;
          width: 100%;
          height: 50px;
          z-index: 10;
        }
        @media only screen and (max-width: 600px) {
          .title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            margin-top: 7em;
            width: 80%;
            line-height: 1.15;
            font-size: 1rem;
            text-align: center;
            color: black;
          }
          .title span {
            margin: 0.3em 0;
          }
          .title span.hyphen {
            display: none;
          }
          .portfolio-pic {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </div>
  </Layout>
);

export default Home;
