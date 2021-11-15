import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../src/components/Head';
import {NavBar}  from '../src/components/NavBar';
import { TributeInfoForm } from '../src/components/InfoTribute';
import {FooterInfo} from '../src/components/Footer';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <NavBar />
      <TributeInfoForm 
      title="Test title" 
      description="description test"
      image_url="/url"
       />
      <FooterInfo />
      </div>
  );
};

export default Home;
      

        
         

          
