import heroTruck from "@/assets/hero-truck.png";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/SplitText";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-[600px] md:h-[700px] xl:h-screen flex items-center p-8"
    >
      <div
        className="bg-cover overflow-hidden relative bg-center w-full h-full flex bg-op justify-center items-center rounded-3xl"
        style={{ backgroundImage: `url(${heroTruck})` }}
      >
        <div className="bg-gradient w-full h-full flex justify-center items-center">
          <div className="container flex justify-center items-center mx-auto px-4 relative z-10 text-white">
            <div className="max-w-3xl text-center">
              <SplitText
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white"
                splitType="words"
                tag="h1"
                text={"Reliable Dry Van Transportation Across 50 U.S. States"}
              />
              <SplitText
                className="text-xl md:text-2xl mb-8 text-white/90"
                splitType="words"
                text={
                  "We provide safe, professional, and nationwide long-haul trucking and logistics solutions."
                }
              />
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-white font-semibold px-8 py-6 text-lg hover:bg-red-500/80 bg-red-500"
              >
                Contact Us
              </Button>
              <div>
                <SplitText
                  className="mt-6 text-sm text-white/80"
                  splitType="words"
                  text={
                    "FMCSA-compliant, insured, and operating across most states in the USA."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
