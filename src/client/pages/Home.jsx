import React from 'react'
import Layout from '../Layouts/Layout';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import Team from '../components/Team';
import CounterPannel from '../components/CounterPannel';
import ClientsMarquee from '../components/ClientsMarquee';

const Home = () => {
  return (
    <Layout>
        <Carousel/>
        <Services/>
        <Team/>
        <CounterPannel/>
        <ClientsMarquee/>
    </Layout>
  )
}

export default Home