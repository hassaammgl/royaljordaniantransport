import { Truck, MapPin, Package, Wrench } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import s1 from "@/assets/s1.png";
import s2 from "@/assets/s2.png";
import s3 from "@/assets/s3.png";

const services = [
  {
    id: "dry-van",
    icon: Truck,
    imgSrc: s1,
    title: "Dry Van Transportation",
    description:
      "Long-haul and regional Dry Van freight shipping. Ideal for general cargo, packaged goods, and pallet shipments.",
    tagline:
      "SECURE, EFFICIENT, AND RELIABLE TRANSPORT FOR YOUR GENERAL FREIGHT NEEDS.",
  },
  {
    id: "state-to-state",
    imgSrc: s2,
    icon: MapPin,
    title: "State-to-State Freight Delivery",
    description:
      "Reliable transportation covering almost all U.S. states with on-time delivery guarantees.",
    tagline:
      "CONNECTING BUSINESSES ACROSS STATE LINES WITH SPEED AND PRECISION.",
  },
  {
    id: "logistics",
    imgSrc: s3,
    icon: Package,
    title: "24/7 Dispatch",
    description:
      "Our dedicated dispatch team is available around the clock to ensure seamless communication, real-time tracking, and immediate support for drivers and clients alike.",
    tagline:
      "ALWAYS ON, ALWAYS AVAILABLE. KEEPING YOUR FREIGHT MOVING DAY AND NIGHT.",
  },
];

const Services = () => {
  return (
    <section id="services" className="p-8 flex justify-center ">
      <div className=" flex justify-center items-center w-full">
        <div className="bg-secondary rounded-3xl p-6 md:p-12 border border-gray-200 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 border border-primary/20">
                <Wrench className="w-4 h-4" />
                <span className="text-sm font-medium">Services</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Our Services.
              </h2>
              <p className="text-gray-300 text-sm md:text-base uppercase tracking-wide max-w-xl">
                Our trucking company delivers freight nationwide with reliable,
                on-time service. A 24/7 dispatch team provides constant
                communication and real-time load support.
              </p>
            </div>
          </div>

          <Tabs defaultValue="dry-van" className="w-full">
            <TabsList className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8 bg-transparent h-auto p-0">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-2xl text-sm md:text-base font-semibold transition-all duration-300 bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary"
                  >
                    <Icon className="size-5" />
                    {service.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {services.map((service) => {
              const Icon = service.icon;
              return (
                <TabsContent
                  key={service.id}
                  value={service.id}
                  className="mt-0"
                >
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                    <div className="space-y-4 md:space-y-6">
                      <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm uppercase tracking-wide leading-relaxed">
                        {service.tagline}
                      </p>
                      <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300">
                        Let's Chat
                        <span className="text-lg">🎧</span>
                      </button>
                    </div>

                    <div className="relative">
                      <div className="relative aspect-3/3 rounded-3xl overflow-hidden border-4 ">
                        <img
                          src={service.imgSrc}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Services;
