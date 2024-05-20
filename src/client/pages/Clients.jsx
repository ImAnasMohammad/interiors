import React from 'react'
import Layout from '../Layouts/Layout'
import img from '../assets/images/contact-us.jpg'
import Banner from '../components/Banner';
import Section from '../Layouts/Section';


const imageList =[
    require('../assets/images/client1.png'),
    require('../assets/images/client2.png'),
    require('../assets/images/client3.png'),
    require('../assets/images/client4.png'),
    require('../assets/images/client5.png'),
    require('../assets/images/client6.png'),
    require('../assets/images/client7.png'),
    require('../assets/images/client8.png'),
    require('../assets/images/client9.png'),
    require('../assets/images/client10.png')
]

const Clients = () => {
  return (
    <Layout>
        <Banner src={img} text={'Checkout Our Clients...!'}/>
        <Section heading={'Our Clients'} subHeading={'Some Of Our Esteemed Clients'}>
            <div className="client--logo--wrapper">
                {
                    imageList?.map((img,index)=><Client src={img} key={index}/>)
                }
            </div>
        </Section>
    </Layout>
  )
}


const Client = ({src})=>{
    return <img src={src}/>;

}
export default Clients