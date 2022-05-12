function OutsideV({content,i}) {
  let empty= true 
  if(i==0 || i==9 || i==90) empty= false
  return (
    <>
      {
        (empty) ? 
        <div className="w-16 h-16 flex flex-col justify-center items-end bg-gradient-to-r from-stone-400 to-stone-600">
          {(content) ? <div className="flex justify-center items-center bg-gradient-to-r to-stone-600 from-stone-400 h-16 w-5 gap-2 text-center text-slate-50 font-bold">{content}</div> : ""}
        </div> 
        : <div className="bg-zinc-300 w-16 h-16"/>
      }
    </>
  )
}

export default OutsideV