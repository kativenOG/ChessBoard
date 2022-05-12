function OutsideV({content}) {
  return (
    <div className="w-16 h-16 flex flex-col justify-center items-end bg-stone-500">
      {(content) ? <div className="flex justify-center items-center bg-stone-700 h-16 w-5 gap-2 text-center text-slate-50">{content}</div> : ""}
    </div>
  )
}

export default OutsideV