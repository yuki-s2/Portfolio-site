import React from "react";
// import { motion } from "framer-motion";
import AnimateOpacity from "../motion/AnimateOpacity";
import Header from "./Header";
import Footer from "./Footer";

function Portfolio() {
  return (
    <AnimateOpacity>
      <Header />
      <section className="portfolio">
        <div className="portfolio_headline">
          <h2 className="portfolio_title">Portfolio</h2>
        </div>

        <div className="portfolio_container">
          <a href="http://sample-j.xyz/cake-shop/">
            <article className="portfolio_item">
              <div className="portfolio_item_border"></div>
                <div className="portfolio_item_img">
                  <img src="../IMG1.png" className="portfolio_item_img1" />
                </div>
              <div className="portfolio_item_textBox_right">
                <div className="portfolio_item_text">
                  <div className="portfolio_item_title">CAKE SHOP</div>
                  <p className="portfolio_item_detail">ケーキ屋のホームページです。</p>
                  <p className="portfolio_item_when">2023.6</p>
                  <div className="portfolio_category">
                    <div className="portfolio_category_item portfolio_design">design</div>
                    <div className="portfolio_category_item portfolio_coding">coding</div>
                    <div className="portfolio_category_item portfolio_wordpress">WordPress</div>
                  </div>
                </div>
              </div>
            </article>
          </a>

          <a href="http://sample-w.com/">
            <article className="portfolio_item">
              <div className="portfolio_item_border"></div>
              <div className="portfolio_item_textBox_left">
                <div className="portfolio_item_text">
                  <div className="portfolio_item_title">FURNITURE</div>
                  <p className="portfolio_item_detail">家具屋のホームページです。</p>
                  <p className="portfolio_item_when">2023.5</p>
                  <div className="portfolio_category">
                    <div className="portfolio_category_item portfolio_design">design</div>
                    <div className="portfolio_category_item portfolio_coding">coding</div>
                    <div className="portfolio_category_item portfolio_wordpress">WordPress</div>
                  </div>
                </div>
              </div>
                <div className="portfolio_item_img">
                  <img src="../IMG2.png" className="portfolio_item_img2" />
                </div>
            </article>
          </a>

          <a href="https://yuki-honda.net/">
            <article className="portfolio_item">
              <div className="portfolio_item_border"></div>
                <div className="portfolio_item_img">
                  <img src="../IMG3.jpeg" className="portfolio_item_img3" />
                </div>
              <div className="portfolio_item_textBox_right">
                <div className="portfolio_item_text">
                  <div className="portfolio_item_title">CAFE</div>
                  <p className="portfolio_item_detail">カフェのホームページです。</p>
                  <p className="portfolio_item_when">2023.6</p>
                  <div className="portfolio_category">
                    <div className="portfolio_category_item portfolio_design">design</div>
                    <div className="portfolio_category_item portfolio_coding">coding</div>
                    <div className="portfolio_category_item portfolio_wordpress">WordPress</div>
                  </div>
                </div>
              </div>
            </article>
          </a>
        </div>
      </section>
      <Footer />
    </AnimateOpacity>
  );
}

export default Portfolio;
