"use client";

import { motion , useScroll, useTransform} from "framer-motion"
import { useRef } from  'react'
import Image from "next/image";

export default function ParallexSection() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [ 'start start',  'end start']
  })

  const y = useTransform(scrollYProgress,  [0, 1], ['0%', '30%'])
  return (
    <section ref={ref} style={{ height:  '100vh', position:  'relative' }}>
      
        <motion.div style={{ y }}>
          <Image
            src="/AdobeStock_840181486_Preview.jpeg"
            alt="Tattoo-parlor"
            fill
            style={{ objectFit: "cover" }}
         
          />
        </motion.div>
      
    </section>
  );
}
