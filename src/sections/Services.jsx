import Card from "../components/Card";
function Services() {
  return (
    <section id="services" className="min-h-auto md:min-h-screen flex flex-col justify-center py-24 relative overflow-hidden" >   
    <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-blue-900/10 to-cyan-900/10 -z-10 skew-y-6"></div>
    <div>
        <h2 className="text-4xl md:text-5xl font-black text-center text-slate-100 mb-6 tracking-tight">Services</h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-16 px-4">
             I offer a range of services to help you achieve your goals. From conceptualizing the architecture to delivering a scalable full-stack application.
        </p>         
    </div>

    <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto justify-items-center w-full">

        <Card title="Frontend Development" description="Modern, responsive, and highly interactive user interfaces perfectly tailored to your brand." iconName="Monitor" />
        <Card title="React Development" description="Complex single-page applications optimized for speed and dynamic user experiences." iconName="Code" />
        <Card title="Backend Architecture" description="Robust APIs, server-side logic, and secure authentication systems built to scale." iconName="Server" />
        <Card title="Database Management" description="Optimized relational and non-relational database design and queries for high performance." iconName="Database" />  
        <Card title="Full-Stack Solutions" description="End-to-end web applications managing everything from the database to the deployment." iconName="Layers" />
        <Card title="API Integration" description="Connecting systems with seamless third-party service integration and microservices." iconName="Workflow" />

    </div>

    </section> 
  );
}  


export default Services;