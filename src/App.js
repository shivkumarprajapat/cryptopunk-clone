import React, { useEffect, useState } from 'react';

import './App.scss';
import Header from './components/Header/Header';
import axios from 'axios';
import PunkList from './components/PunkList/PunkList';
function App() {
  const [punkListData, setPunkListData] = useState([])

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xf1C53f1845906a942E6F22a745A5cD75F515dD59&order_direction=asc');
        setPunkListData(response.data.assets);
        console.log(response.data.assets);
      }
      fetchData()

    } catch (error) {
      throw new Error(error)
    }

  }, [])

  return (
    <div className="App">
      <Header />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
