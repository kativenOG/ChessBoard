import React from 'react'

function EmptyTile({dir}) {
  return (
    <>
        {(dir) ? 
            <div className=" w-16 h-16 flex justify-items-end items-end bg-gradient-to-b from-stone-400 to-stone-600 ">
                  <div className="bg-gradient-to-b  to-stone-600 from-stone-400 h-5 w-16 gap-2 "/> 
            </div> : 
            <div className="w-16 h-16 flex flex-col justify-center items-start bg-gradient-to-l from-stone-400 to-stone-600 ">
                  <div className="bg-gradient-to-l  to-stone-600 from-stone-400 h-16 w-5 gap-2"/> 
            </div>
        }
    </>
  )
}
export default EmptyTile