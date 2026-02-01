
import Input from "../components/Input";


function ContactMe() {
  return (
    <section className="w-full  flex flex-col justify-center items-center  text-white px-4">
         <div>
        <h2 className="text-4xl font-bold text-center text-white mb-8">Contact Me</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
             Cultivating Connections: Reach Out and Connect with Me
        </p>         
    </div>
    <div className="w-full flex justify-center items-center">
      <form className="w-full max-w-4xl p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input text=" Name" />
          <Input text="Email" />
          <Input text="Phone Number" />
          <Input text="Timeline" />
          <div className="md:row-span-2 md:col-start-2 md:row-start-1">
            <Input text="Project details" className="h-full min-h-[120px]" />
            
          </div>
        </div>
           <div className="w-[97%] flex justify-end my-5"><button className="border-2  border-gray-400 px-6 py-1 rounded-md">Send</button></div>
      </form>
    </div>

    </section>
  );
}

export default ContactMe;