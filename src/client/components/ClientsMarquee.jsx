import React from 'react'
import Section from '../Layouts/Section'
import client1  from '../assets/images/client1.png'
import client2  from '../assets/images/client2.png'
import client3  from '../assets/images/client3.png'
import client4  from '../assets/images/client4.png'
import client5  from '../assets/images/client5.png'
import client6  from '../assets/images/client6.png'
import client7  from '../assets/images/client7.png'
import client8  from '../assets/images/client8.png'
import client9  from '../assets/images/client9.png'
import client10 from '../assets/images/client10.png'

const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10
]

const ClientsMarquee = () => {
  return (<Section subHeading={'Our clients'}>
    <div className='logo'>
        <div className='logo-slide'>
            {
                clients?.map((src,index)=><img src={src} key={index}/>)
            }
        </div>
        <div className='logo-slide'>
            {
                clients?.map((src,index)=><img src={src} key={index}/>)
            }
        </div>
    </div>
</Section>
  )
}

export default ClientsMarquee