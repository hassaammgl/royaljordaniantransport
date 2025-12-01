import React from "react";
import tql from "@/assets/tql.png";
import uber from "@/assets/uber.png";
import dhl from "@/assets/dhl.png";
import fedex from "@/assets/fedex.png";
import ups from "@/assets/ups.png";
import arrive from "@/assets/arrive.png";
import sche from "@/assets/sche.png";
import landstar from "@/assets/landstar.png";
import jb from "@/assets/JB.png"
import ford from "@/assets/FORD.png"
import gm from "@/assets/GM.png"

const customers = [
  {
    name: "TQL",
    _id: crypto.randomUUID(),
    imgSrc: tql,
  },
  {
    name: "Uber Freight",
    _id: crypto.randomUUID(),
    imgSrc: uber,
  },
  {
    name: "DHL",
    _id: crypto.randomUUID(),
    imgSrc: dhl,
  },
  {
    name: "FEDEX",
    _id: crypto.randomUUID(),
    imgSrc: fedex,
  },
  {
    name: "UPS",
    _id: crypto.randomUUID(),
    imgSrc: ups,
  },
  {
    name: "ARRIVE",
    _id: crypto.randomUUID(),
    imgSrc: arrive,
  },
  {
    name: "SCHNIEDER",
    _id: crypto.randomUUID(),
    imgSrc: sche,
  },
  {
    name: "FORD",
    _id: crypto.randomUUID(),
    imgSrc: ford,
  },
  {
    name: "GENERAL MOTORS",
    _id: crypto.randomUUID(),
    imgSrc: gm,
  },
  {
    name: "LANDSTAR",
    _id: crypto.randomUUID(),
    imgSrc: landstar,
  },
  {
    name: "JB HUNT",
    _id: crypto.randomUUID(),
    imgSrc: jb,
  },
];

const Customer = () => {
  return (
    <section id="customer" className="py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-primary font-medium mb-2">Trusted By</p>
        <h2 className="text-3xl font-bold text-foreground">Our Partners</h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee gap-12 items-center">
          {/* First set of items */}
          {customers.map((customer) => (
            <div
              key={customer._id}
              className="flex items-center justify-center flex-col min-w-[250px] gap-4 group cursor-pointer"
            >
              <img
                src={customer.imgSrc}
                alt={customer.name}
                className="h-12 w-auto object-contain transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
              <div className="text-xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
                {customer.name}
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {customers.map((customer) => (
            <div
              key={`${customer._id}-duplicate`}
              className="flex items-center justify-center flex-col min-w-[250px] gap-4 group cursor-pointer"
            >
              <img
                src={customer.imgSrc}
                alt={customer.name}
                className="h-12 w-auto object-contain  transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
              <div className="text-xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
                {customer.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customer;
