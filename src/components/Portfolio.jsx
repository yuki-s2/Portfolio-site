import React from 'react'
import { motion } from 'framer-motion';
import AnimateOpacity from '../motion/AnimateOpacity';


function Portfolio() {
  return (
    <section className='portfolio'>
      <AnimateOpacity>
      <div className="portfolio-headline">
      <h2 className='portfolio-title'>PORTFOLIO</h2>
      </div>

      <div className='container'>
          <a href='http://sample-j.xyz/cake-shop/'>
          <article className='item'>
          <div className='item-border'></div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6, delay: .5 }}>
              <div className='item-img'>
            <img src="../IMG1.png" className='item-img1'/>
            </div>
            </motion.div>
            <div className="item-textBox-right">
            <div className="item-text">
            <div className='item-title'>CAKE SHOP</div>
            <p className='item-detail'>カフェのホームページです。</p>
            <p className='item-when'>2023.6</p>
            <div className="category">
            <div className="category-item design">design</div>
            <div className="category-item coding">coding</div>
            <div className="category-item wordpress">WordPress</div>
            </div>
            </div>
            </div>
          </article>
          </a>

          <a href='http://sample-w.com/'>
          <article className='item'>
          <div className='item-border'></div>
            <div className="item-textBox-left">
              <div className="item-text">
               <div className='item-title'>FURNITURE</div>
               <p className='item-detail'>家具屋のホームページです。</p>
               <p className='item-when'>2023.5</p>
               <div className="category">
                 <div className="category-item design">design</div>
                 <div className="category-item coding">coding</div>
                 <div className="category-item wordpress">WordPress</div>
               </div>
              </div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6, delay: .5 }}>
              <div className='item-img'>
            <img src="../IMG2.png" className='item-img2'/>
            </div>
            </motion.div>
          </article>
          </a>

          <a href='https://yuki-honda.net/'>
          <article className='item'>
          <div className='item-border'></div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6, delay: .5 }}>
            <div className='item-img'>
            <img src="../IMG3.jpeg" className='item-img3'/>
            </div>
            </motion.div>
            <div className="item-textBox-right">
            <div className="item-text">
            <div className='item-title'>CAFE</div>
            <p className='item-detail'>カフェのホームページです。</p>
            <p className='item-when'>2023.6</p>
            <div className="category">
            <div className="category-item design">design</div>
            <div className="category-item coding">coding</div>
            <div className="category-item wordpress">WordPress</div>
            </div>
            </div>
            </div>
          </article>
          </a>
        
      </div>
    </AnimateOpacity>
    </section>

  )
}

export default Portfolio;