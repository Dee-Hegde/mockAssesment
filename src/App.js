import { Button, Input,Row } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CountryCard from './components/CountryCard';

import { getDataProcess } from './redux/countryData/Action';

function App() {
  const dispatch=useDispatch();
  const [dark, setDark] = useState(false);
  const root = document.querySelector(":root");
  const countries=useSelector(state=>state.countryRed.data);
  let DisplayData=countries;
  const [searchName,setSearchName]=useState("")

  const handleSearch=()=>{
    console.log(searchName)
    const temp=countries.map((item)=>item?.name?.common===searchName);
   DisplayData=[];
   DisplayData=temp
  }

  useEffect(() => {
  dispatch( getDataProcess())
  }, [])
  useEffect(() => {
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);
  useEffect(() => {
  }, [DisplayData]);
  
  return (<div>
  <Row className='navbar'>
 <Row style={{width:"30%"}}>
    <Input onChange={(e)=>setSearchName(e.target.value)} placeholder="Country name" />
 </Row>
 <Row>
 <Button onClick={handleSearch} type='primary'>search</Button>
 </Row>
 <Row>
 <Button onClick={()=>setDark(!dark)} type='primary'>Mode</Button>
 </Row>
  </Row>
    <div className="App country-card">
      {DisplayData&&DisplayData.map((item)=><CountryCard item={item}/>)}
    </div>
    </div>);
}

export default App;
