import React from 'react'
import img1 from '../images/IMG_63C0F4B54CBD-1.jpeg';
import { motion } from 'framer-motion';

function Portfolio() {
  return (
    <maim className='mainPortforio'>
      <div className='title'>PORTFOLIO</div>

      <div className='cntainer'>

        <div className='itemBox'>枠</div>

          <article className='item'>
            <motion.div animate={{ rotate: 135 }} transition={{ duration: 3 }}>
            <img src={img1} />
            </motion.div>
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