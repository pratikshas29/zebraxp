import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import tenetsImage from "../assets/tenets-1.jpg";
import tenetsImage2 from "../assets/tenets-2.jpg";
import tenetsImage3 from "../assets/tenets-3.jpg";
import tenetsImage4 from "../assets/tenets-4.jpg";
import { HiLockClosed, HiShieldCheck, HiSquares2X2 } from "react-icons/hi2";

const cards = [
  {
    id: 1,
    title: "Modular",
    image: tenetsImage3,
    icon: HiSquares2X2,
    desc: "Every business is different - ZebraXP adapts to yours. Use only the modules you need today and expand anytime, without rebuilding or replacing your existing system. Scalability is built into the core.",
    list: [
      "Fast onboarding.",
      "Use what is applicable. All features configurable and customized to your need.",
      "Plug latest technologies into the platform instead of changing solutions. Framework that enables latest technology upgrade seamlessly.",
    ],
  },
  {
    id: 2,
    title: "Secured",
    image: tenetsImage,
    icon: HiLockClosed,
    desc: "Your data stays protected at every layer from user access to infrastructure. ZebraXP ensures confidential information is encrypted, isolated, and monitored.",
    list: ["Encrypted data.", "PII protection.", "Secured instance.", "Access controls."],
  },
  {
    id: 3,
    title: "Reliable & Compliant",
    image: tenetsImage2,
    icon: HiShieldCheck,
    desc: "ZebraXP is engineered for uninterrupted business performance. With enterprise-grade uptime and built-in compliance, it keeps your operations running smoothly while meeting global security and regulatory standards.",
    list: ["High availability.", "Failover mechanism.", "Data backup.", "GDPR, HIPPA."],
  },
];

const Tenets: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(1);
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [startIndex, setStartIndex] = useState<number>(0);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const isSmall = width < 1280;

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const visibleCount = width >= 1280 ? 3 : width >= 768 ? 2 : 1;

  const visibleCards = Array.from(
    { length: visibleCount },
    (_, i) => cards[(startIndex + i) % cards.length]
  );

  useEffect(() => {
    if (!isSmall) return;

    const id = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % cards.length);
    }, 15000);

    return () => clearInterval(id);
  }, [isSmall]);

  useEffect(() => {
    const visibleIds = visibleCards.map((c) => c.id);
    if (!visibleIds.includes(activeCard)) {
      setActiveCard(visibleCards[0].id);
    }
  }, [startIndex, width]);

  /* Swipe Logic */

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      setStartIndex((prev) => (prev + 1) % cards.length);
    }

    if (distance < -minSwipeDistance) {
      setStartIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    }
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto pt-28 mb-6 px-5 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col md:flex-row gap-4 md:gap-6 h-[580px] md:h-[500px] overflow-x-auto no-scrollbar snap-x snap-mandatory"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {visibleCards.map((card) => {
          const isActive = activeCard === card.id;

          return (
            <motion.div
              key={card.id}
              whileHover={
                !isActive
                  ? {
                      boxShadow:
                        "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                    }
                  : {}
              }
              onClick={() => setActiveCard(card.id)}
              className={`cursor-pointer transition-all duration-500 overflow-hidden
              ${isActive ? "flex-[2.8] bg-white border border-borderMedium" : "flex-1 shadow-sm"}
              rounded-[30px]`}
            >
              {isActive ? (
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <img
                    src={card.image}
                    className="w-full md:w-72 h-48 sm:h-60 md:h-[500px] object-cover rounded-t-[30px] md:rounded-l-[30px] md:rounded-tr-none"
                    alt=""
                  />

                  <div className="flex flex-col md:mt-10 sm:mt-0 px-4 md:px-0 md:pr-6">
                    <div className="flex items-center mb-5 gap-4">
                      <div className="bg-brandPurple p-2 rounded-lg">
                        <card.icon className="w-8 h-8 text-white" />
                      </div>

                      <span className="text-brandDark text-xl sm:text-2xl font-bold">
                        {card.title}
                      </span>
                    </div>

                    <p className="text-grayText text-sm sm:text-base mb-6 max-w-md leading-2 sm:leading-8 md:max-h-[220px]">
                      {card.desc}
                    </p>

                    <ul className="flex flex-col gap-2 mb-4 sm:mb-0 list-disc pl-5 text-brandPurple text-sm sm:text-base md:max-h-[120px] pr-1">
                      {card.list.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div
                  className="h-48 sm:h-60 md:h-[480px] lg:h-[500px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Dots */}
      <div className="flex justify-center mt-10 gap-3">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => {
              const idx = cards.findIndex((c) => c.id === card.id);
              if (idx >= 0) setStartIndex(idx);
              setActiveCard(card.id);
            }}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300
            ${
              activeCard === card.id
                ? "bg-brandDark"
                : "bg-white border border-brandDark"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Tenets;