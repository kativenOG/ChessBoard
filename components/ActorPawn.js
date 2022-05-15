import Image from "next/image"
import Draggable from "react-draggable"

function ActorPawn({actor}) {
  return (
    <Draggable>
        <div className="">
          <Image rel="actor" src={actor} width={55} height={55} className="rounded-full" /> 
      </div>
    </Draggable>
  )
}
export default ActorPawn