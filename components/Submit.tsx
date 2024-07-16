

export default function Submit({title, clas=''}) {
  return (
    <input type="submit" value={title} className={'bg-accent py-1 px-2 rounded-[5px] text-dark font-medium cursor-pointer ' + clas} />
  )
}
