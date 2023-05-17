import { useEffect } from 'react';
import { ethers } from 'ethers';
import config from '../config.json';
import TOKEN-ABI from '../abis/Token.json'
import '../App.css';


function App() {

  const loadBlockchainData = async () => {
  const accounts =  await window.ethereum.request({ method: 'eth_requestAccounts' })
  console.log(accounts[0])

  // Connect Ethers to Blockchain
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const network = await provider.getNetwork()
  console.log(network.chainId)

  console. log()

  // Token Smart Contract
  const token  = ethers.Contract(config[chainId].DApp.address, TOKEN_ABI, provider )
  consol.log(token.address)
  const.symbol = await token.symbol()
  sonsole.log(symbol)

  }

  useEffect(() => {
    loadBlockchainData()
  })



  return (
    <div>

      {/* Navbar */}

      <main className='exchange grid'>
        <section className='exchange__section--left grid'>

          {/* Markets */}

          {/* Balance */}

          {/* Order */}

        </section>
        <section className='exchange__section--right grid'>

          {/* PriceChart */}

          {/* Transactions */}

          {/* Trades */}

          {/* OrderBook */}

        </section>
      </main>

      {/* Alert */}

    </div>
  );
}

export default App;