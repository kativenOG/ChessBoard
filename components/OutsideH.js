function OutsideH({content,i}) {
  let empty= true 
  if(i==99) empty=false
  return (
    <>
      {
        (empty) ? 
        <div className=" w-16 h-16 flex flex-col justify-items-center items-center bg-gradient-to-t from-stone-400 to-stone-600">
          {(content) ? <div className="bg-gradient-to-t  to-stone-600 from-stone-400 h-5 w-16 gap-2 text-center text-slate-50 text-sm font-bold">{content}</div> : ""}
        </div> 
        : <div className="bg-zinc-300 w-18 h-18"/>
      }
    </>
  )
}
export default OutsideH