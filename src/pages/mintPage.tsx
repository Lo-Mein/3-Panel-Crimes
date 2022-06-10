/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import contract from '../contracts/NFTCollectible.json';
import { ethers } from 'ethers';
import Router from 'next/router';
import RouteGuard from '../components/RouteGuard';

const contractAddress = '0xDF27FbDcfC0644d425e1C68539118C8f3A6BbddE';
const abi = contract.abi;
const desiredNFTCollections = ['0x159640309cf1e732cff90a3a7c23d3825cd50f5a'];

const MintPage = ({ pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [errorState, setErrorState] = useState(false);
  const [successState, setSuccessState] = useState(false);
  const [imageURLs, setImageURLs] = useState([]);


  const MintNFTHandler = async () => {
    const { ethereum } = window;

    if (currentAccount == null) {
      // set error state
      // console.log('Error with connected account.');
      return;
    }

    if (!ethereum) {
      alert('Please install metamask');
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const nftContract = new ethers.Contract(contractAddress, abi, signer);

      console.log('Initialize Payment');
      let nftTxn = await nftContract.mintNFTs(1, {
        value: ethers.utils.parseEther('0.01'),
      });
      // console.log('Mining... please wait');
      await nftTxn.wait();

      // change from rinkeby

      console.log(
        `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`,
      );
      console.log('Mint Success');
      setSuccessState(true);
    } catch (err) {
      console.log('ERROR MINTING', err);
      setErrorState(true);
      return;
    }
  };

  const mintNftButton = () => {
    return (
      <button
        onClick={MintNFTHandler}
        className="mint-nft-button text-center bg-green border-green-200"
      >
        CLAIM
      </button>
    );
  };

  useEffect(() => {
    async function fetchData() {
      const { ethereum } = window;
      let address = '';
      try {
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        });
        setCurrentAccount(accounts[0]);
        address = accounts[0];
        console.log('Obtained Account Address');
      } catch (err) {
        console.log(' Error', err);
      }

      try {
        const options = {
          method: 'GET',
          headers: { Accept: 'application/json' },
        };

        const ownerAddress = '0x8D77A8cf55f99d62D6B8AbC9050faf5859c0108f';

        let response = await fetch(
          'https://api.opensea.io/api/v1/assets?owner=' +
            ownerAddress +
            '&order_direction=desc&limit=20&include_orders=false',
          options,
        )
          .then((response) => response.json())
          .catch((err) =>
            // ERROR
            console.error('Error Obtaining Image URLs', err),
          );

        response.assets.forEach((element) => {
          if (
            desiredNFTCollections.includes(
              String(element.asset_contract.address).toLowerCase(),
            )
          ) {
            console.log('Found Asset', element.asset_contract);
            // replace with hashes for uniqueness
            const stateDict = { key: element.token_id, url: element.image_url };

            setImageURLs((imageURLs) => [...imageURLs, stateDict]);
          }
 
        });

        console.log('Obtained image URLs');
      } catch (err) {
        console.error('Error Obtaining Image URLs', err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="text-light-foreground dark:text-dark-foreground min-w-max text-md md:min-w-full md:text-base content-start">
        <div className="grid place-items-center h-96 w-full space-y-6">
          <h1 className="mb-2 text-2xl font-bold">
            Fear Not Weary Collector, Mint is Here!
          </h1>
<div className='nftContainer'>
          {imageURLs ? (
            imageURLs.map((element) => (
              <img
                key={element.key}
                className="picture1 w-48 h-48 flex justify-center text-center items-center bg-white rounded-lg border border-yellow-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                src={element.url}
              ></img>

            ))
          ) : (
            <p>ERROR</p>
          )}
          </div>
          <div>{mintNftButton()}</div>
        </div>
      </div>
    </>
  );
};

export default RouteGuard(MintPage);