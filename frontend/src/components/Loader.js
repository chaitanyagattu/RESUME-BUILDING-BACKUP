// import React, { useEffect, useState } from 'react'
// import loader from '../images/loader.gif'
// import { Box, CircularProgress } from '@mui/material'

// const Loader = ({ percentage }) => {
//     const [uploadOrDownloadCount, setUploadOrDownloadCount] = useState(0);
//     console.log(percentage)
//     useEffect(() => {
//         setUploadOrDownloadCount((previousCount) => {
//             const newCount = previousCount + percentage;
//             console.log("loader " + previousCount)
//             console.log("loader " + percentage)
//             return newCount >= 100 ? 100 : newCount;
//         });
//     }, [percentage]);


//     return (
//         // <div style={{ position:'fixed', top: '0', left:'0',right:'0', zIndex:'20', height: '100vh', width: '100vw', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         //     <img src={loader} alt="Loading..." />
//         // </div>
//         <div style={{ backgroundColor: '#000000', height: '100vh', width: '100vw', zIndex: '20', position: 'fixed', top: '0', left: '0', right: '0', }}>
//             <Box position={'relative'} justifyContent={'center'} height={'100vh'} alignItems={'center'} display="flex">
//                 <CircularProgress variant="determinate"
//                     value={uploadOrDownloadCount} />
//                 <Box
//                     bottom={0}
//                     right={0}
//                     top={0}
//                     justifyContent="center"
//                     left={0}
//                     display="flex"
//                     alignItems="center"
//                     position="absolute"
//                 >
//                     {`${Math.round(uploadOrDownloadCount)}%`}
//                 </Box>
//             </Box>
//         </div>
//     )
// }

// export default Loader