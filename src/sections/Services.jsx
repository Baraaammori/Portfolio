import Card from "../components/Card";
function Services() {
  return (
    <section id="services" className=" h-[100vh] flex flex-col justify-center bg-black" >   
    <div>
        <h2 className="text-4xl font-bold text-center text-white mb-8">Services</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
             I offer a range of services to help you achieve your goals. Whether you need web development, design, or consulting, I've got you covered.
        </p>         
    </div>

    <div className="cards grid grid-cols-2 lg:grid-cols-3 gap-5 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto justify-items-center">

        <Card title="Frontend Development" description="Modern, responsive user interfaces." />
        <Card title="React Development" description="Interactive single-page applications." />
        <Card title="Backend Development" description="APIs and server-side logic." />
        <Card title="Database Management" description="MySQL database design and queries." />  
        <Card title="Full-Stack Web Applications" description="End-to-end web solutions." />
        <Card title="API Integration" description="Connecting frontends with backend services." />
        


    </div>


    


    </section> 
  );
}  


export default Services;