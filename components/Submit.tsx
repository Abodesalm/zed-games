

export default function Submit({title, clas=''}) {
  return (
    <button className={'bg-accent py-1 px-2 rounded-[5px] text-dark font-medium ' + clas}>
      {title}
    </button>
  )
}
