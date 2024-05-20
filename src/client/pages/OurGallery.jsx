import React from 'react'
import Layout from '../Layouts/Layout';
import img from '../assets/images/contact-us.jpg'
import Banner from '../components/Banner';
import Section from '../Layouts/Section';
import Gallery from '../components/Gallery';



const OurGallery = () => {
  return (
    <Layout>
        <Banner src={img} text={'Checkout Our Gallery...!'}/>
        <Section heading={'Our Gallery'} subHeading={'Checkout Our Gallery'}>
            <Gallery/>
        </Section>
    </Layout>
  )
}

export default OurGallery