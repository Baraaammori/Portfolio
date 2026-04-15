function Input({text, className, isTextArea = false}) {
  const baseClasses = "w-full px-4 py-3 bg-slate-800/80 border border-slate-700/50 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300";
  
  if (isTextArea) {
    return <textarea placeholder={text} className={`${baseClasses} resize-none ${className}`} />;
  }
  
  return <input placeholder={text} className={`${baseClasses} ${className}`} type="text" />;
}

export default Input;