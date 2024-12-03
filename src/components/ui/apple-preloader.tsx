// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";


// const slideUp = {
//   initial: {
//     top: 0,
//   },
//   enter: {
//     top: 0,
//     transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
//   },
//   exit: {
//     top: "-100vh",
//     transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
//   },
// };

// const textSlide = {
//   initial: {
//     y: "100%",
//     opacity: 0,
//   },
//   enter: {
//     y: "0%",
//     opacity: 1,
//     transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
//   },
//   exit: {
//     y: "-100%",
//     opacity: 0,
//     transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
//   },
// };

// const words = ["Advitya, Feel The Enigma"];

// export default function Preloader() {
//   const [index, setIndex] = useState(0);
//   const [dimension, setDimension] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     setDimension({ width: window.innerWidth, height: window.innerHeight });
//   }, []);

//   useEffect(() => {
//     if (index === words.length - 1) return;
//     setTimeout(
//       () => {
//         setIndex(index + 1);
//       },
//       index === 0 ? 1000 : 150
//     );
//   }, [index]);

//   const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
//     dimension.height
//   } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
//     dimension.height
//   }  L0 0`;
//   const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
//     dimension.height
//   } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

//   const curve = {
//     initial: {
//       d: initialPath,
//       transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
//     },
//     exit: {
//       d: targetPath,
//       transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
//     },
//   };

//   return (
//     <>
//     <BackgroundBeamsWithCollision className={""}>
//     <motion.div
//       variants={slideUp}
//       initial="initial"
//       animate="enter"
//       exit="exit"
//       className="h-[100vh] w-[100vw] flex items-center justify-center fixed top-0 left-0 z-[99] "
//     >
//        {/* <SparklesCore
//           id="tsparticlesfullpage"
//           background="transparent"
//           minSize={0.6}
//           maxSize={1.4}
//           particleDensity={100}
//           className="w-full h-full"
//           particleColor="#FFFFFF"
//         /> */}
        
//       {dimension.width > 0 && (
//         <>
//           <motion.p
//             variants={textSlide}
//             initial="initial"
//             animate="enter"
//             exit="exit"
//             className="flex bg-clip-text   font-medium text-[50px] items-center absolute z-[1]"
//             style={{ color: "yellow" }}
//           >
//             {words[index]}
//           </motion.p>
//           <svg className="absolute top-0 w-[100%] h-[calc(100% + 200px)]">
//             <motion.path
//               variants={curve}
//               initial="initial"
//               exit="exit"
//               fill="#000"
//             ></motion.path>
//           </svg>
//         <div className="w-[40rem] h-40 absolute">
//           {/* Gradients */}
//           {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
//           <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
//           <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
//           <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}
  
//           {/* Core component */}
//           {/* <SparklesCore
//             background="transparent"
//             minSize={0.4}
//             maxSize={1}
//             particleDensity={1200}
//             className="w-full h-full"
//             particleColor="#FFFFFF"
//           /> */}
  
//           {/* Radial Gradient to prevent sharp edges */}
//           {/* <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
//         </div>
//         </>
//       )}
      
//     </motion.div>
//     </BackgroundBeamsWithCollision>
//     </>
//   );
// }


import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

export default function BackgroundBeamsWithCollisionDemo() {
  return (
    (<BackgroundBeamsWithCollision className={"h-screen"}>
      <h2
        className="text-2xl relative z-20 flex flex-col md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        The wait is Over !{" "}
        <div
          className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">

      
          <div
            className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Advitya 2025</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>)
  );
}
