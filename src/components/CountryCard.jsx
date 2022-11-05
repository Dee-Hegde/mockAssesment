import React from 'react'
import {Button, Row} from "antd"
import { useState } from 'react'
import MoreDetails from './MoreDetails';

function CountryCard({item}) {
const [visible, setVisible]=useState(false);

const handleModal=()=>{
    setVisible(true);
}

  return (
    <Row className='card-container'>
        <Row className='flagContainer'>
            <img className='countryFlag' src={item?.flags?.png} alt="" />
        </Row>
        <Row className='countryDetails'>
            <h2>{item?.name?.common}</h2>
            <p>Population:{item?.population}</p>
            <p>Region:{item?.region}</p>
            <p>Capital:{item?.capital?.map((names,i)=><span key={i}>{names}</span>)}</p>
            <Button onClick={handleModal} type='primary'>Read More</Button>
        </Row>
        <MoreDetails item={item} visible={visible} setVisible={setVisible}/>
    </Row>
  )
}

export default CountryCard