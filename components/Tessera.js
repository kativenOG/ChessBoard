import ActorPawn from "./ActorPawn"

function Tessera({color,actors}) {
  return (
    <>
      {(color) ?
        <div className="flex justify-center items-center h-16 w-16  bg-white"> 

        </div>
        : <div className="flex justify-center items-center h-16 w-16  bg-black">

        </div>  
      }
    </>
  )
}
export default Tessera