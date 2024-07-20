

export default function Heading({title, clas=''}) {
  return (
    <p className={clas +"  text-[28px] text-accenttt dark:text-accent capitalize "}>{title}</p>
  )
}
