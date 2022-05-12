import Draggable from 'react-draggable'
import Image from "next/image"

function ActorPawn({actor}) {
  return (
    <div className='bg-zinc-200'>
      <Draggable>
          <div>
            <Image src={actor} width={50} height={50} className="rounded-full" />
        </div>
      </Draggable>    
    </div>
  )
}

export default ActorPawn