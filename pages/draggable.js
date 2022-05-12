import Draggable from "react-draggable";
import Image from "next/image";


export default function draggable() {
    return (
        <Draggable>
            <div>
                <Image src="/actor1.jpg" width={50} height={50}/>
            </div>
        </Draggable>
    )
}