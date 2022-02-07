import './index.css'
import { useState, useEffect } from 'react';

export default function Root(props) {
  console.log("PROPS", props)
  const WALLET_URL = "http://localhost:8080/wallet/info"

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
        is mounted and girls are cute!!
        <div>Welcome To Beancoin!</div>
      </section>
      <div>Address: {address}</div>
      <div>Balance: {balance}</div>

    </div>
  );
}
