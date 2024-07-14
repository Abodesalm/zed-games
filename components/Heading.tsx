

export default function Heading({title, clas=''}) {
  return (
    <p className={"text-[28px] text-accenttt dark:text-accent capitalize " + clas}>{title}</p>
  )
}
