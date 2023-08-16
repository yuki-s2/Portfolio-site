import React from 'react'
import img1 from '../images/IMG_63C0F4B54CBD-1.jpeg';

function Portfolio() {
  return (
    <maim className='mainPortforio'>
      <div className='title'>PORTFOLIO</div>

      <div className='cntainer'>

        <div className='itemBox'>枠</div>

          <article className='item'>
            <div className="itemLeft">
            <img src={img1} />
            </div>
            <div className="itemRight">
            <div className="title">Cafe</div>
            <p>カフェのホームページです。スクールで提供されたデザインを元にコーディングをしてWordPress化しました。</p>
            <div className="design">デザイン</div>
            <div className="coding">コーディング</div>
            <div className="wordpress">WordPress</div>
            </div>
          </article>
        
      </div>
    </maim>

  )
}

export default Portfolio;