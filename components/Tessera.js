import Image from "next/image"
function Tessera({color}) {
  return (
    <>
      {(color%3==0) ?
        <div className="flex justify-center items-center h-16 w-16  bg-white" /> : 
        <div className="flex justify-center items-center h-16 w-16  bg-black" />  
      }
    </>
  )
}
export default Tessera