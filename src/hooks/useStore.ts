// import { wordCupContractAddress } from '@/utils/abi'
import { ethers } from 'ethers'
import { createStore } from 'hox'
import { useEffect, useState, useRef } from 'react'
export const [useStore, StoreProvider] = createStore(() => {
  const [address, setGlobalAddress] = useState('')
  const [chainId, setChainId] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [hasUnPublish, setHasUnPublish] = useState(false)
  const [walletConnectConnector, setWalletConnectConnector] =
    useState<any>(null)

  useEffect(() => {}, [])

  return {
    address: address,
    chainId: chainId,
    categoryId: categoryId,
    setCategoryId: setCategoryId,
    hasUnPublish: hasUnPublish,
    setHasUnPublish: setHasUnPublish,
    walletConnectConnector: walletConnectConnector,
    setWalletConnectConnector: setWalletConnectConnector,
  }
})
