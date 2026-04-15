function Card({title , description}) {
  return (
    <div className="group glass-panel flex w-full max-w-sm items-center flex-col gap-5 justify-center p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/10 hover:border-cyan-500/30 text-center">
      <div className="w-16 h-16 rounded-full bg-slate-800/80 p-3 shadow-inner shadow-cyan-500/20 group-hover:bg-cyan-500/10 transition-colors">
        <img src="src/assets/User.png" alt="" className="w-full h-full object-contain filter group-hover:brightness-125" />
      </div>
      <h3 className="text-slate-100 font-bold capitalize text-xl tracking-tight group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default Card;