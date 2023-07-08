import { Route, Routes, useNavigate } from 'react-router-dom'

import { I18nextProvider } from 'react-i18next'

import i18n from './i18n/i18n'
import { useEffect, useState, useRef } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'
import Home from './pages/Home'

import { StoreProvider } from '@/hooks/useStore'

const intervalMS = 60 * 60 * 1000

function App() {
  const updateServiceWorker = useRegisterSW({
    onRegistered(r) {
      r &&
        setInterval(() => {
          r.update()
        }, intervalMS)
    },
  })
  const [num, setCount] = useState<number>(0)
  const navigate = useNavigate()
  const ref = useRef({
    userAddress: '',
  })

  useEffect(() => {
    console.log(`[版本号]: __APP_VERSION__`)

    //todo 先去掉
    // if (isRun()) {
    //   Dialog.confirm({
    //     title: '提示',
    //     content: '当前版本不支持，请升级到最新版本！',
    //     // showCancelButton: false,
    //     confirmText: '去升级',
    //     className: 'dialog',
    //     onConfirm: () => {
    //       location.href = 'https://www.bitverse.zone/download'
    //     },
    //   })
    // }
  }, [])

  return (
    <I18nextProvider i18n={i18n}>
      <StoreProvider>
        <div className="device-app">
          <div className={`App`}>
            <Routes>
              <Route path="/pop" element={<Home />}></Route>
            </Routes>
          </div>
        </div>
      </StoreProvider>
    </I18nextProvider>
  )
}

export default App
