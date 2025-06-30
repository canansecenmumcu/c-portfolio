"use client"
import React, { useState } from 'react'
/* import { motion } from 'framer-motion' */

const Portfoliopage = () => {

    const [on, setOn] = useState(true)
 
    function toggle() {
        setOn((prev)=>!prev )
    }
console.log(on)
    return (
        <div>
            <h1>Will be updated soon!</h1>
        </div>
       
    )
}
{/* <motion.div
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1 }}
    className="h-full">
    
Portfolio
</motion.div> */}

export default Portfoliopage;