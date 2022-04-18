import './index.css'
import { useState, useEffect } from 'react';
import { API_BASE_URL } from './config';
import Blockchain from './components/Blockchain';
import logo from './assets/logo.png'

export default function Root(props) {
  console.log("PROPS", props)
  const WALLET_URL = `${API_BASE_URL}/wallet/info`

  const [walletInfo, setWalletInfo] = useState({});

  useEffect(() =>{
    fetch(WALLET_URL)
    .then(res => res.json())
    .then(json => {setWalletInfo(json);
    console.log("RESPONSE OBJECT: ", json)
    })
  }, [])

  const {address, balance } = walletInfo;


  return (
    <div>
      <section className="App">{props.name}
        is mounted!!
        <div>Welcome To Beancoin!</div>
      </section>
      <img src={logo} className="logo" alt="" />
      <div>Address: {address}</div>
      <div>Balance: {balance}</div>
      <Blockchain></Blockchain>

    </div>
  );
}
