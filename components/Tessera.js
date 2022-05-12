function Tessera({color}) {
  return (
    <>
      {(color) ?
        <div className="flex justify-center items-center h-18 w-18  bg-white" /> : 
        <div className="flex justify-center items-center h-18 w-18  bg-black" />  
      }
    </>
  )
}
export default Tessera