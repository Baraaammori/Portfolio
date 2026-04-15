import Input from "../components/Input";
function ContactMe() {
  return (
    <section id="contact" className="w-full min-h-[70vh] flex flex-col justify-center items-center py-24 px-4 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>
        <div>
        <h2 className="text-4xl md:text-5xl font-black text-center text-slate-100 mb-6 tracking-tight">Let's Connect</h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16">
             Ready to start your next project? Cultivating connections and building great products starts with a message.
        </p>         
    </div>
    <div className="w-full flex justify-center items-center">
      <form className="w-full max-w-4xl glass-panel p-8 rounded-3xl" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input text="Your Name" />
          <Input text="Email Address" />
          <Input text="Phone Number" />
          <Input text="Timeline" />
          <div className="md:col-span-2">
            <Input text="Project Details" className="h-full min-h-[160px]" isTextArea={true} />
          </div>
        </div>
        <div className="w-full flex justify-center mt-8">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-10 py-3.5 rounded-full font-bold shadow-lg shadow-cyan-500/20 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                Send Message
            </button>
        </div>
      </form>
    </div>

    </section>
  );
}

export default ContactMe;