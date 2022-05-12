import React from 'react'

function EmptyTile({dir}) {
  return (
    <>
        {(dir) ? 
            <div className=" w-16 h-16 flex justify-items-end items-end bg-stone-500">
                  <div className=" bg-stone-700 h-5 w-16 gap-2"/> 
            </div> : 
            <div className="w-16 h-16 flex flex-col justify-center items-start bg-stone-500">
                  <div className=" bg-stone-700 h-16 w-5 gap-2"/> 
            </div>
        }
    </>
  )
}
export default EmptyTile