export default function MyRates({
  myBeauty,
  myGameplay,
  myStory,
  myTotal,
  myReview,
  rank,
}) {
  const coloring = (num) => {
    if (num === 100) return "green";
    else if (num < 100 && num >= 90) return "cyan";
    else if (num < 90 && num >= 80) return "yellow";
    else if (num < 80 && num >= 70) return "orange";
    else if (num < 70) return "red";
  };

  const unknown = (v) => {
    if (v === 0) return v;
    else if (!v) return <p className="w-full text-center">--</p>;
    else return <p>{v}</p>;
  };

  return (
    <div className="w-full">
      <table className="w-[80%] h-[70px] bg-bglight dark:bg-darker text-center rounded-[10px] mx-auto">
        <tbody>
          <tr>
            <td>Story</td>
            <td>Beauty</td>
            <td>Gameplay</td>
            <td>Total</td>
          </tr>
          <tr>
            <td className={"font-medium " + coloring(myStory)}>
              {unknown(myStory)}
            </td>
            <td className={"font-medium " + coloring(myBeauty)}>
              {unknown(myBeauty)}
            </td>
            <td className={"font-medium " + coloring(myGameplay)}>
              {unknown(myGameplay)}
            </td>
            <td className={"font-medium " + coloring(myTotal)}>
              {unknown(myTotal)}
            </td>
          </tr>
        </tbody>
      </table>
      {myReview && (
        <div className="w-[90%] h-[200px] bg-bglight dark:bg-darker rounded-[10px] mt-4 mx-auto py-1 px-3">
          {unknown(myReview)}
        </div>
      )}
    </div>
  );
}
// MyBeauty , MyGameplay , MyStory , MyTotal , MyReview , Rank
