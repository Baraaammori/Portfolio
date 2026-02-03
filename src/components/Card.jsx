function Card({title , description}) {
  return (
    <div className="card flex w-full max-w-xs items-center flex-col gap-4 justify-center p-6 bg-neutral-950 rounded-lg shadow-lg border border-neutral-800 hover:border-orange-500 transition-all duration-300">
      <img src="src/assets/User.png" alt="" />
      <h2 className="text-orange-500 font-bold capitalize text-xl">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default Card;