export default function Card(props) {
  return (
    <div className="rounded-2xl gap-6 p-6 cursor-pointer glass ">
      <h1 className="font-bold text-2xl p-3 ">{props.name}</h1>
      <img
        className="h-60 w-full object-cover rounded-lg mb-4"
        src={props.img1}
      />
      <p className="text-black font-semibold text-base">{props.description}</p>
    </div>
  );
}
