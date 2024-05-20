import React from 'react'
import Layout from '../Layouts/Layout'
import Banner from '../components/Banner'
import Section from '../Layouts/Section'
import img from '../assets/images/contact-us.jpg'
const Carrer = () => {
  return (
    <Layout>
        <Banner src={img} text={'Checkout Our Jobs...!'}/>
        <Section heading={'Our Jobs'} subHeading={'Checkout Our jobs'}>
            <h2>Oops!, We don't have any jobs currently</h2>
        </Section>
    </Layout>
  )
}

export default Carrer