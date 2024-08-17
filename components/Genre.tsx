export default function Genre({ title, clas }) {
  return (
    <div
      className={`inline px-1 bg-accent text-dark rounded-[5px] text-[14px] font-medium ${clas}`}
    >
      {title}
    </div>
  );
}
