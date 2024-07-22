

export default function Submit({title, clas=''}) {
  return (
    <input type="submit" value={title} className={'input btn-hover ' + clas} />
  )
}
