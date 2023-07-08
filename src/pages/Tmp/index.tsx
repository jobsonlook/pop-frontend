import React from 'react'
import './index.scss'
import close from '@/assets/close.png'
import prize from '@/assets/prizeBackground.png'
import dBTC from '@/assets/dBTC.png'

const Tmp = () => {
  return (
    <>
      <div className="prize">
        <div className="prize-background">
          <img className="prize-backgroundImg" src={prize} alt="" />
        </div>
        <div className="prize-prize">
          <img className="prize-prizeImg" src={dBTC} alt="" />
        </div>
        <div className="prize-prizeTitle">Y/N 盲盒</div>
        <div className="prize-button">accept</div>
        <div className="prize-view">奖品可在xxx中查看</div>
        <div className="prize-close">
          <img className="prize-closeImg" src={close} alt="" />
        </div>
      </div>
    </>
  )
}

export default Tmp
