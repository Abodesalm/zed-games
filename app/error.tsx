"use client"

export default function error({error, reset}) {

  return (
    <div className="text-center min-h-[70vh] flex flex-col justify-center items-center gap-4 ">
      <h1 className="text-red-600">Something Went Wrong</h1>
      <p>{error}</p>
      <button className="bg-accent py-1 px-2 rounded-[5px] text-dark" onClick={()=>reset()}>Try Again</button>
    </div>
  )
}
