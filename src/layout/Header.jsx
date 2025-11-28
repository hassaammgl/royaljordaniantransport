import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import { links } from "@/constants";

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };



  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 ">
      <div className="max-w-5xl mx-auto px-4 py-4  ">
        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-2">
            <a href="/" className="flex items-center cursor-pointer">
              <div className="flex items-center gap-1">
                <span className="text-3xl font-bold text-gray-800">RJT</span>
                <img src={logo} className="size-10" />
              </div>
            </a>

            <div className="flex items-center gap-6 justify-start">
              <div className="text-left">
                <p className="text-xs text-gray-600">Call Us 24/7/365</p>
                <a
                  href="tel:+1313-258-5571"
                  className="text-base font-bold text-cyan-500 hover:text-cyan-600"
                >
                  +1313-258-5571
                </a>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex  items-center gap-6">
            {links.map((data) => (
              <button
                key={data._id}
                onClick={() => scrollToSection(data.link)}
                className="text-sm font-medium text-foreground hover:text-primary cursor-pointer"
              >
                {data.title}
              </button>
            ))}
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden text-primary">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-full p-0">
              <nav className="flex flex-col items-center justify-center h-full gap-8">
                {links.map((data) => (
                  <button
                    key={data._id}
                    onClick={() => scrollToSection(data.link)}
                    className="text-2xl font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {data.title}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import { useState } from "react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu, Search } from "lucide-react";
// import logo from "@/assets/logo.png";

// const Header = () => {
//   const [open, setOpen] = useState(false);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setOpen(false);
//   };

//   const links = [
//     {
//       _id: crypto.randomUUID(),
//       link: "about",
//       title: "About Us",
//     },
//     {
//       _id: crypto.randomUUID(),
//       link: "services",
//       title: "Our Sevices",
//     },
//     {
//       _id: crypto.randomUUID(),
//       link: "customer",
//       title: "Our Customers",
//     },
//     {
//       _id: crypto.randomUUID(),
//       link: "fleet",
//       title: "Our Fleet",
//     },
//     {
//       _id: crypto.randomUUID(),
//       link: "contact",
//       title: "CONTACT US",
//     },
//   ];

//   return (
//     <header className="bg-white border-b br-test px-70  border-gray-200 sticky top-0 z-50 shadow-sm ">
//       <div className="container mx-auto px-6 br-test">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex flex-row">
//             <a href="/" className="flex items-center cursor-pointer">
//               <div className="flex items-center gap-1">
//                 <span className="text-3xl font-bold text-gray-800">RJT</span>
//                 <img src={logo} className="size-10" />
//               </div>
//             </a>

//             <div className="hidden lg:flex items-center gap-6 justify-start">
//               <div className="text-right">
//                 <p className="text-xs text-gray-600">Call Us 24/7/365</p>
//                 <a
//                   href="tel:+1313-258-5571"
//                   className="text-base font-bold text-cyan-500 hover:text-cyan-600"
//                 >
//                   +1313-258-5571
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-6 flex-1 justify-end">
//             {links.map((data) => (
//               <button
//                 key={data._id}
//                 onClick={() => scrollToSection(data.link)}
//                 className="text-xs font-semibold text-gray-700 hover:text-cyan-500 transition-colors cursor-pointer tracking-wide"
//               >
//                 {data.title}
//               </button>
//             ))}
//           </nav>

//           {/* Right Section */}

//           {/* Mobile Menu */}

//           <Sheet open={open} onOpenChange={setOpen}>
//             <SheetTrigger asChild>
//               <button className="md:hidden text-primary">
//                 <Menu className="w-6 h-6" />
//               </button>
//             </SheetTrigger>
//             <SheetContent side="top" className="w-full h-full p-0">
//               <nav className="flex flex-col items-center justify-center h-full gap-8">
//                 {links.map((data) => (
//                   <button
//                     key={data._id}
//                     onClick={() => scrollToSection(data.link)}
//                     className="text-2xl font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
//                   >
//                     {data.title}
//                   </button>
//                 ))}
//                 <button
//                   onClick={() => scrollToSection("contact")}
//                   variant="default"
//                   size="lg"
//                   className="mt-4 cursor-pointer"
//                 >
//                   Contact
//                 </button>
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
