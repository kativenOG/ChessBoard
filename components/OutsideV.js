function OutsideV({content,i}) {
  
  let empty= true 
  let angle = [ " rounded-tl-lg" , " rounded-tr-lg" ," rounded-bl-lg"]
  let position = 0  
  if(i==0 || i==9 || i==90){
    empty= false
    if(i==9) position=1
    else if(i==90) position = 2 
  }
  return (
    <>
      {
        (empty) ? 
        <div className="w-16 h-16 flex flex-col justify-center items-end bg-gradient-to-r from-stone-400 to-stone-600">
          {(content) ? <div className="flex justify-center items-center bg-gradient-to-r to-stone-600 from-stone-400 h-16 w-5 gap-2 text-center text-slate-50 font-bold">{content}</div> : ""}
        </div> 
        : <div className={"bg-stone-800 w-16 h-16" + angle[position] }/>
      }
    </>
  )
}

export default OutsideV