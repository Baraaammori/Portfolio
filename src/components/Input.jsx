function Input({text , className}) {
  return <input placeholder={text} className={`bg-neutral-900  w-sm px-4 py-3 rounded-md ${className}`} type="text" />;
}

export default Input;