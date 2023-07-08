/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare module 'bitverse-jsbridge'
interface Window {
    ethereum: any
    solana: any
    isTrust: boolean
    isBitverse: boolean
  }
  
