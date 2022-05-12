function OutsideH({content}) {
  return (
    <div className=" w-16 h-16 flex flex-col justify-items-center items-center bg-stone-500">
      {(content) ? <div className=" bg-stone-700 h-5 w-16 gap-2 text-center text-slate-50">{content}</div> : ""}
    </div>
  )
}
export default OutsideH