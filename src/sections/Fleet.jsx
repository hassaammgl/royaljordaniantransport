import reeferTruck from "@/assets/fleet2.png";
import longHaulTruck from "@/assets/fleet3.png";
import fleetTrucks from "@/assets/fleet1.png";

const Fleet = () => {
  const fleetItems = [
    {
      image: fleetTrucks,
      title: "Dry Van Trucks",
      subtitle: "(Primary)",
      description:
        "Standard long-haul Dry Van trailers ideal for general freight. Most of our operations revolve around this category.",
    },
    {
      image: reeferTruck,
      title: "Reefer Trucks",
      subtitle: "(Optional)",
      description:
        "Temperature-controlled trailers for perishable goods requiring specific climate conditions.",
    },
    {
      image: longHaulTruck,
      title: "Long-Haul Trucks",
      subtitle: "",
      description:
        "Capable of multi-state trips covering long distances efficiently across the nation.",
    },
  ];

  return (
    <section id="fleet" className="py-20 bg-white h-screen flex justify-center ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Our Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern, well-maintained trucks ready to transport your freight
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 h-full">
          {fleetItems.map((item, index) => (
            <article
              key={index}
              className="relative flex flex-col max-h-[63vh] justify-end overflow-hidden rounded-2xl px-6 pb-6 pt-40 max-w-sm mx-auto shadow-sm h-full"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40"></div>

              {/* Title */}
              <h3 className="z-10 text-2xl font-bold text-white">
                {item.title}{" "}
                {item.subtitle && (
                  <span className="text-sm font-normal text-gray-300">
                    {item.subtitle}
                  </span>
                )}
              </h3>

              {/* Description */}
              <p className="z-10 text-sm text-gray-300 mt-1 overflow-hidden leading-6">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
