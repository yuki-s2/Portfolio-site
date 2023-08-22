import * as React from "react";
import { motion } from "framer-motion";

export const Motion = () => (
  <motion.div
  style={{ backgroundColor: "red", width: "30px", height: "30px"}}
    className="container"
    animate={{  x: 100 }}
    transition={{
      type: "spring",
      bounce:5,
      
    }}
  />
);




export default Motion;