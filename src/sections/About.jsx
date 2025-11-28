import fleetTrucks from "@/assets/fleet-trucks.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
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

          <div className="order-first md:order-last">
            <img
              src={fleetTrucks}
              alt="Professional truck fleet"
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
