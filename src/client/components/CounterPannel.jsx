import React from 'react'
import Section from '../Layouts/Section'

const data = [
    {
        count:500,
        title:'CLIENTS',
    },
    {
        count:200,
        title:'LOCATIONS',
    },
    {
        count:1500,
        title:'EMPLOYEES',
    },
    {
        count:1300,
        title:'REGIONAL OFFICES',
    },
    {
        count:10,
        title:'STATES',
    }
]
const CounterPannel = () => {
  return (
    <Section heading={'What we have'} subHeading={'Our Strengths'}>
        <div className='counter-pannel-wrapper'>
            {
                data?.map((item,i)=><SingleItem item={item} key={i}/>)
            }
        </div>
    </Section>


  )
}

const SingleItem=({item})=>{
    return(
        <div style={{textAlign:'center',color:'#ffff'}}>
            <h1>{item?.count}+</h1>
            <div>{item?.title}</div>
        </div>
    )
}
export default CounterPannel