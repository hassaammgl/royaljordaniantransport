import fleetTrucks from "@/assets/fleet-trucks.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-last md:order-first">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              About Our Company
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                We are a U.S.-based transportation and logistics company
                specializing in Dry Van trucking services. Our trucks operate
                across nearly all 50 states, ensuring reliable state-to-state
                delivery for our clients.
              </p>
              <p>
                With a strong focus on compliance, safety, and professionalism,
                we follow all U.S. government regulations that require logistics
                companies to maintain a functional website and transparent
                service information.
              </p>
              <p>
                Our mission is to provide safe, efficient, and dependable
                transportation solutions with long-haul Dry Van trucks.
              </p>
            </div>
          </div>

          {/* Image - now smaller & centered */}
          <div className="flex justify-center md:justify-end">
            <img
              src={fleetTrucks}
              alt="Professional truck fleet"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;