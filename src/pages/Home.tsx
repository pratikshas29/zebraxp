import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import bg from "../assets/bg-pettern.png";
import flash from "../assets/flash.png";
import shoppingCart from "../assets/shopping-cart.png";
import consumer from "../assets/consumer.png";
import handshake from "../assets/hand-shake.png";
import graph from "../assets/graph.png";
import expand from "../assets/expand.png"
import homeCard1Bg from "../assets/home-card1-bg.png"
import homeCard2Bg from "../assets/home-card2-bg.png"
import homeCard3Bg from "../assets/home-card3-bg.png"
import homeCard4Bg from "../assets/home-card4-bg.png"
import homeCard5Bg from "../assets/home-card5-bg.png"

const cards = [
  {
    id: 0,
    title: "Reimagine Customer Engagement.",
    color: "#A68BFF",
    pillBg: "#B099FF",

    image: homeCard1Bg,
    expandIcon: expand,
    pillText: "Build a brand. Not just make a sale.",
    list: ["POS and every customer touch point thereafter, covering entire customer journey.", "POS and every customer touch point thereafter, covering entire customer journey."]
  },
  {
    id: 1,
    title: "Digitization and Automation",
    color: "#74E9CF",
    pillBg: "#7AF7DD",
    image: homeCard2Bg,
    expandIcon: expand,
    pillText: "Digitized transactions. Actionable data. Paperless ecosystem.",
    list: ["Bill, warranty, policies - digitized.", "Returns, exchange, warranty and more - automated."]
  },
  {
    id: 2,
    title: "Ease of doing business",
    color: "#FFDA7F",
    pillBg: "#FFE4A2",
    image: homeCard3Bg,
    expandIcon: expand,
    pillText: "Seamlessly bridging Sales with Service.",
    list: ["Single interface for customer.", "One platform for the brand."]
  },
  {
    id: 3,
    title: "Customer engagement suite for the next gen AI era.",
    color: "#7AA7FF",
    pillBg: "#8EB5FF",
    image: homeCard4Bg,
    expandIcon: expand,
    pillText: "Interactions, Advocacy, Campaigns, Customer service.",
    list: ["NxCx - digital first CX.", "Protonect - campaign management -Personalized and targeted reach-outs."]
  },
  {
    id: 4,
    title: "Redefine Reporting and Insights.",
    color: "#FF7999",
    pillBg: "#FF8DA8",
    image: homeCard5Bg,
    expandIcon: expand,
    pillText: "Real-time, accurate, on-the-ground data to build your business strategies.",
    list: ["Everything real-time a way of working.", "No dependency on legacy, CRM or ERP.", "Business 360, Customer 360."]
  }
];

const Home = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setExpandedId(0);
    }
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      if (window.innerWidth >= 1024) return;
      const children = Array.from(el.children) as HTMLElement[];
      if (children.length === 0) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      let minDist = Number.POSITIVE_INFINITY;
      let idx = 0;
      for (let i = 0; i < children.length; i++) {
        const r = children[i].getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const d = Math.abs(cx - centerX);
        if (d < minDist) {
          minDist = d;
          idx = i;
        }
      }
      setCurrentIndex(idx);
      const card = cards[idx];
      if (card) setExpandedId(card.id);
    };
    el.addEventListener("scroll", onScroll, { passive: true } as any);
    onScroll();
    return () => el.removeEventListener("scroll", onScroll as any);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const floatVariants = (delay: number = 0) => ({
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
        delay: delay,
      },
    },
  });

  return (
    <motion.div
      className="flex flex-col min-h-[calc(100vh-80px)] pt-28 mb-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      {/* Hero Section */}

      <div
        className="relative w-full flex flex-col items-center justify-center text-center px-4  pb-10 overflow-hidden"
      >
        <motion.div
          className="max-w-5xl mx-auto flex flex-col items-center relative z-10"
          variants={containerVariants}
        >
          {/* Pill */}
          <motion.div 
            variants={itemVariants as any}
            className="flex items-center bg-white/90 backdrop-blur-sm border border-[#0D003526] rounded-full px-1 py-0.5 mb-5 shadow-sm"
          >
            <div className="w-6 h-6 bg-brandYellow rounded-full flex items-center justify-center mr-2">
              <img
                src={flash}
                className="w-4 h-4 object-contain"
                alt="logo"
              />
            </div>
            <span className="text-brandDark text-xs font-medium mr-5">
              <span className="font-bold">Zebra XP</span> - Unlock a 360° perspective
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants as any}
            className="text-black font-extrabold text-2xl md:text-4xl mb-6 leading-snug md:leading-[1.2]"
          >
            
            A complete Customer Engagement ecosystem for the entire customer journey.
            {/* <br className="hidden md:block" /> */}
         
          </motion.h1>

          {/* Subtext */}
          <motion.div 
            variants={itemVariants as any}
            className="flex flex-col gap-1 mb-6"
          >
            <p className="text-black text-sm max-w-3xl mx-auto">
              A Customer Success and Engagement Platform: revolutionizing the future of retail - ‘phygital’.
            </p>
            <p className="text-black text-sm max-w-3xl mx-auto">
              Convenience and benefits of online platforms now for your offline business.
            </p>
          </motion.div>

          {/* Button */}
          <motion.button
            variants={itemVariants as any}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brandPurple hover:bg-brandPurple/90 text-white font-bold text-lg py-3 px-6 md:px-12  rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            onClick={() => navigate("/contact")}
          >
            Request a Demo
          </motion.button>
        </motion.div>

        {/* Decorative Icons */}
        <motion.div
          className="hidden lg:block absolute left-[10%] lg:top-[55%]"
          variants={floatVariants(0)}
          animate="animate"
        >
          <div className="bg-white p-2 border border-borderLight/5 rounded-xl shadow-xl">
            <img src={shoppingCart} className="w-8 h-8" alt="" />
          </div>
        </motion.div>
        
        <motion.div
          className=" hidden lg:block  absolute right-[10%] top-[20%]"
          variants={floatVariants(0.5)}
          animate="animate"
        >
          <div className="bg-white p-2 border border-borderLight/5 rounded-xl shadow-xl">
            <img src={handshake} className="w-8 h-8" alt="" />
          </div>
        </motion.div>
<motion.div
  className=" hidden lg:block  absolute left-[8%] md:left-[28%] bottom-[5%]"
  variants={floatVariants(1)}
  animate="animate"
>
  <div className="bg-white p-2 border border-borderLight/5 rounded-xl shadow-xl">
    <img src={consumer} className="w-8 h-8" alt="" />
  </div>
</motion.div>

<motion.div
  className=" hidden lg:block  absolute right-[8%] md:right-[28%] md:bottom-[5%] bottom-[20%]"
  variants={floatVariants(1.5)}
  animate="animate"
>
  <div className="bg-white p-2 border border-borderLight/5 rounded-xl shadow-xl">
    <img src={graph} className="w-8 h-8" alt="" />
  </div>
</motion.div>
      </div>

      {/* Expandable Cards Row */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}

        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="w-full  px-4 md:px-10"
      >
        <div
          ref={scrollerRef}
          className="max-w-7xl mx-auto flex gap-4  p-4 min-h-[300px] overflow-x-auto no-scrollbar xl:overflow-visible snap-x snap-mandatory md:snap-none"
        >

      {cards.map((card) => {
      const isExpanded = expandedId === card.id;

      return (
        <motion.div
          key={card.id}
          layout
          onMouseEnter={() => setExpandedId(card.id)}
          onMouseLeave={() => setExpandedId(null)}
          onClick={() => setExpandedId(card.id)}
          variants={itemVariants as any}
          viewport={{ once: true, amount: 0.2 }}
          animate={{
            flex: isExpanded ? 2.5 : 1
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}

          className={`relative flex flex-col justify-between p-6 rounded-[32px] cursor-pointer shadow-lg overflow-hidden h-[320px] snap-start

          min-w-[320px] sm:min-w-[320px] md:min-w-[400px] hover:shadow-lg hover:shadow-gray-400

          ${
            isExpanded
              ? "basis-[320px] md:basis-[520px] lg:basis-[520px] xl:basis-auto"
              : "basis-[320px] md:basis-[380px] lg:basis-[380px] xl:basis-auto"
          }

          xl:min-w-0
          `}
          
          style={{
            backgroundColor: card.color,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05), rgba(255,255,255,0.05)), url(${card.image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Content Top */}
          <div className="flex flex-col gap-6 relative z-10">

            {isExpanded && card.pillText && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-black/30 backdrop-blur-md rounded-full py-2 px-6 text-center border border-white/20"
              >
                <span className="text-white text-xs md:text-sm italic font-regular">
                  {card.pillText}
                </span>
              </motion.div>
            )}

            <h3 className="text-black font-extrabold leading-[1.2] text-lg md:text-xl">
              {card.title}
            </h3>

            {isExpanded && card.list && (
              <motion.ul
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="list-disc pl-6 text-grayText space-y-2"
              >
                {card.list.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm md:text-base font-regular leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </motion.ul>
            )}

          </div>

          {/* Content Bottom */}
          <AnimatePresence>
            {!isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-auto -mx-6 -mb-6 p-2 relative z-10"
              >
                <div
                  className="flex items-center justify-between rounded-full p-1 transition-all duration-300"
                  // style={{
                  //   backgroundColor: card.pillBg,
                  //   boxShadow: "0px -2px 10px 0px #0000001A"
                  // }}
                >
                  <span className="text-black text-xs md:text-sm font-regular ml-6">
                    {/* Expand */}
                  </span>

                  {/* <div className="bg-white rounded-full w-11 h-11 flex items-center justify-center shadow-md">
                    <img
                      src={card.expandIcon}
                      className="w-4 h-4 object-contain"
                      alt="expand"
                    />
                  </div> */}
                     <div className=" w-11 h-11 flex items-center justify-center ">
                    <img
                      src={card.expandIcon}
                      className="w-4 h-4 object-contain"
                      alt="expand"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      );
    })}

  </div>
  <div className="mt-4 flex justify-center gap-2 lg:hidden">
    {cards.map((c, i) => (
      <button
        key={c.id}
        onClick={() => {
          const el = scrollerRef.current;
          if (!el) return;
          const child = el.children[i] as HTMLElement | undefined;
          if (child) {
            child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            setExpandedId(c.id);
            setCurrentIndex(i);
          }
        }}
        className={`w-2.5 h-2.5 rounded-full ${currentIndex === i ? "bg-brandDark" : "bg-gray-300"}`}
        aria-label={`Go to card ${i + 1}`}
      />
    ))}
  </div>
</motion.div>
    </motion.div>
  );
};

export default Home;
