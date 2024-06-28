import React from 'react'

const Svg = ({stoke}) => {
    
  return (
    <svg className={`h-full w-full  group-hover:fill-white ${ stoke && stoke  } `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
  )
}
const Svg1 = ({stoke}) => {
    
  return (
    <svg className={`h-full w-full  group-hover:stroke-white ${ stoke && stoke  } `} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.6876 2.78444H18.9066C19.6833 2.78444 20.3128 3.41401 20.3128 4.19068V21.6563C20.3128 22.4329 19.6833 23.0625 18.9066 23.0625H5.09375C4.31712 23.0625 3.6875 22.4329 3.6875 21.6563V4.19068C3.6875 3.41401 4.31712 2.78444 5.09375 2.78444H8.3125" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.6878 4.6313H8.3125V0.937563H15.6878V4.6313Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.3125 12.7079L10.7608 15.1562L15.6875 10.2297" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}
const Svg2 = ({stoke}) => {
    
  return (
    <svg className={`h-full w-full group-hover:stroke-white ${ stoke && stoke  } `} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59102 15.2068C13.28 15.2068 16.433 15.7658 16.433 17.9988C16.433 20.2318 13.301 20.8068 9.59102 20.8068C5.90102 20.8068 2.74902 20.2528 2.74902 18.0188C2.74902 15.7848 5.88002 15.2068 9.59102 15.2068Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59108 12.0198C7.16908 12.0198 5.20508 10.0568 5.20508 7.6348C5.20508 5.2128 7.16908 3.2498 9.59108 3.2498C12.0121 3.2498 13.9761 5.2128 13.9761 7.6348C13.9851 10.0478 12.0351 12.0108 9.62208 12.0198H9.59108Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.4824 10.8816C18.0834 10.6566 19.3164 9.2826 19.3194 7.6196C19.3194 5.9806 18.1244 4.6206 16.5574 4.3636" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.5947 14.7322C20.1457 14.9632 21.2287 15.5072 21.2287 16.6272C21.2287 17.3982 20.7187 17.8982 19.8947 18.2112" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export {Svg,Svg1, Svg2}