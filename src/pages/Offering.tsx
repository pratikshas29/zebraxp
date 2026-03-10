import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HiOutlineDocumentDuplicate, 
  HiOutlineCpuChip, 
  HiOutlineGlobeAlt, 
  HiOutlineGift, 
  HiOutlineChatBubbleLeftRight, 
  HiOutlineUserGroup, 
  HiOutlinePhone, 
  HiOutlineCommandLine, 
  HiOutlineShieldCheck, 
  HiOutlineMegaphone, 
  HiOutlinePresentationChartBar, 
  HiOutlineLink, 
  HiOutlineCircleStack, 
  HiOutlineTrophy, 
  HiOutlineChartBar,
  HiOutlineMagnifyingGlass
} from "react-icons/hi2";


import DigitizationAndAutomation from "../assets/Digitization-and-Automation.png";
import CustomerAdvocacy from "../assets/Customer-Advocacy.png";
import CustomerService from "../assets/Customer-Service.png";
import CampaignsAndPromotions from "../assets/Campaigns-and-Promotions.png";
const offerings = [
  {
    id: "digitization",
    menuTitle: "Digitization and Automation",
    title: "Digitization and Automation",
    description: "Explore workflow efficiency, paperless solutions, automation-driven transformation, and frictionless business operations.",
     image: DigitizationAndAutomation,
    feature1: {
      icon: HiOutlineDocumentDuplicate,
      title: "Digitize every transaction and make data actionable",
      list: ["Ease of doing business for employees and customers", "No more billing queues. No more paper, PDF bills."]
    },
    feature2: {
      icon: HiOutlineCpuChip,
      title: "Proprietary platform to automate your process, policies, and workflows",
      list: ["Reduce operational cost", "Al-based workflow builder to remove manual tasks"]
    },
    stats: [
      "Up to **30%-55%** reduction in billing, returns and exchange time.",
      "Reduction in queues and better store efficiency leading to higher **CSAT** and **ESAT**"
    ],
    impact: {
      icon: HiOutlineGlobeAlt,
      title: "Provide online experience for offline transactions.",
      list: ["Customers can now experience convenience of online sale and post-sale transactions for offline shopping."]
    }
  },
  {
    id: "advocacy",
    menuTitle: "Customer Advocacy",
    title: "Customer Advocacy",
    description: "Increase customer lifetime value by empowering advocacy, tracking referral growth, and leveraging loyal customer voices for business impact.",
    image: CustomerAdvocacy,
    feature1: {
      icon: HiOutlineGift,
      title: "Enable growth and higher NPS with referral reward automation.",
      list: ["Referring and gifting products is just a tap away.", "Track and incentivize your customers to increase your brand awareness."]
    },
    feature2: {
      icon: HiOutlineChatBubbleLeftRight,
      title: "Establish product credibility.",
      list: ["Convenience of feedback, rating now at finger tips.", "Provide for User Generated Stories enabling customer inclusivity."]
    },
    stats: [
      "Increase feedback propensity up to **80%**",
      "Authentic customer insights and testimonials, increasing product credibility by about **20% to 40%**"
    ],
    impact: {
      icon: HiOutlineUserGroup,
      title: "Measure advocacy impact.",
      list: ["AI driven real-time customer sentiment", "Convert negative NPS to positive NPS and track the transition.", "Identify promoters, nurture brand champions, and reward impactful referrals."]
    }
  },
  {
    id: "service",
    menuTitle: "Customer Service",
    title: "Customer Service",
    description1:"NxCx - an all-inclusive CX platform for the next-gen Al era.",
    description: "Enhance customer satisfaction and loyalty with efficient service management and seamless support solutions.",
     image: CustomerService,
    feature1: {
      icon: HiOutlinePhone,
      title: "Next gen CX integrated within the platform",
      list: ["Voice, chat, voice note, video all channels on one single interface.", "No more expensive individual stack for Customer Service"]
    },
    feature2: {
      icon: HiOutlineCommandLine,
      title: "Al first approach",
      list: ["Self-service, bots, agentic, with human in loop, and human to human.", "Higher CSAT and customer stickiness. Protect brand image."]
    },
    stats: [
      
      "Protect brand image. Channelize customer issues and provide prompt support",
     
     " Personalized and timely customer service to improve **CSAT** by **20% to 30%** and boosts retention by **5% to 10%** or more."
    ],
    impact: {
      icon: HiOutlineShieldCheck,
      title: "Customer service impact.",
      list: ["Enhanced customer satisfaction and loyalty.", "Reduction in customer complaints and returns."]
    }
  },
  {
    id: "campaigns",
    menuTitle: "Campaigns and Promotions",
    title: "Campaigns and Promotions",
    description1:"Protonect - Al driven campaign management for the digital ecosystem.",
    description: "Maximize ROI with targeted campaigns and effective promotion strategies.",
     image: CampaignsAndPromotions,
    feature1: {
      icon: HiOutlineMegaphone,
      title: "Al enabled campaigns",
      list: ["Al helps you create campaigns and lets you pick and edit if you wish to customize.", "Targeted and focused campaigns. No more generic broadcast of message."]
    },
    feature2: {
      icon: HiOutlinePresentationChartBar,
      title: "Measure campaign effectiveness",
      list: ["Track usage of your promotions and offers.", "Increase conversion rate. Allow customers to set reminders on offers to increase campaign effectiveness."]
    },
    stats: [
      "Build effective promotion strategies to grow business by **20% to 30%**",
      "Segmented and tailored promotional campaigns to potentially result in **20% to 30%** higher customer retention."
    ],
  
  },
  {
    id: "insights",
    menuTitle: "Business Insights",
    title: "Business Insights",
    description: "Make data-driven decisions with comprehensive business analytics.",
     image: "/ZXPsatellite.html",
    feature1: {
      icon: HiOutlineLink,
      title: "Growth levers are interconnected, interdependent and interrelated.",
      list: ["Know how each lever impacts others, derived empirically", "Al based projection to forecast business outcome"]
    },
    feature2: {
      icon: HiOutlineCircleStack,
      title: "Integrated data is not enough. You need natively interconnected data.",
      list: ["No more complex and expensive integrations between multiple systems", "Sale, campaigns, customer feedback, CX all as a single business platform"]
    },
    stats: [
      "Illustration portrays interconnectedness of business parameters. You can drag a parameter and it demonstrates how change in one business parameter has a cascading effect on others in varying degree.",
 
    ],
   
  },
  // {
  //   id: "market",
  //   menuTitle: "Competition and Market Insights",
  //   title: "Competition and Market Insights",
  //   description: "Gain competitive advantage through market and competitor analysis.",
  //   image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/MGmIjct2VW/dtkg6jhi_expires_30_days.png",
  //   feature1: {
  //     icon: HiOutlineTrophy,
  //     title: "Competitive analysis tools",
  //     list: ["Identify strengths and weaknesses."]
  //   },
  //   feature2: {
  //     icon: HiOutlineChartBar,
  //     title: "Market trend monitoring",
  //     list: ["Stay updated with industry changes"]
  //   },
  //   stats: [
  //     "Analyze competitor strategies and market trends.",
  //     "Benchmark performance against market leaders."
  //   ],
  
  // }
];

const Offering = () => {
  const [activeId, setActiveId] = useState(offerings[0].id); // Default to Customer Advocacy

  const activeOffering = offerings.find(o => o.id === activeId) || offerings[1];

  const renderText = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <span key={i} className="text-black font-bold">
            {part.slice(2, -2)}
          </span>
        );
      }
      return part;
    });
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div className="flex flex-col bg-white mt-24 lg:mt-36 mb-3" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="self-stretch bg-white">
        <div className="flex flex-col items-start relative ">
          <div className="flex flex-col self-stretch bg-white pb-6 gap-10">
            <motion.div 
              className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 md:px-6 gap-0 lg:gap-12 " 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {/* Mobile and Tablet Menu (Attractive horizontal tabs) */}
              <div className="flex lg:hidden flex-col w-full mb-8">
                <div className="flex overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 sticky top-0 bg-white z-20">
                  <div className="flex gap-3 min-w-max">
                    {offerings.map((offering) => {
                      const isActive = activeId === offering.id;
                      return (
                        <motion.div
                          key={offering.id}
                          className={`px-5 py-2 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                            isActive 
                              ? "border-brandPurple bg-brandPurple/5 text-brandPurple shadow-sm" 
                              : "border-grayText/10 bg-white text-grayText/40 hover:border-grayText/30"
                          }`}
                          onClick={() => setActiveId(offering.id)}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-sm font-bold whitespace-nowrap">
                            {offering.menuTitle}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile and Tablet Active Details Container */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeId + "-details"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col gap-3 px-0 md:px-6"
                  >
                    {activeOffering.description1 && (
                      <span className="text-brandPurple text-sm font-bold leading-relaxed">
                        {renderText(activeOffering.description1)}
                      </span>
                    )}
                    <span className="text-black text-sm font-medium leading-relaxed">
                      {renderText(activeOffering.description)}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Desktop Menu (Existing UI) */}
              <motion.div className="hidden lg:flex lg:flex-col items-start shrink-0 gap-6 w-full lg:w-72" variants={containerVariants}>
                {offerings.map((offering) => {
                  const isActive = activeId === offering.id;
                  return (
                    <motion.div 
                      key={offering.id} 
                      className="flex flex-col items-start gap-6 w-full cursor-pointer" 
                      onClick={() => setActiveId(offering.id)}
                      variants={itemVariants as any}
                      whileHover={{ x: isActive ? 0 : 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`flex flex-col items-start w-full ${isActive ? "gap-4" : "pb-px"}`}>
                        <span className={`block w-full transition-all duration-300 ${isActive ? "text-black text-2xl font-bold" : "text-grayText/50 text-lg"}`}>
                          {offering.menuTitle}
                        </span>
                        {isActive && offering.description1 && (
                          <motion.span 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="text-brandPurple text-base w-full overflow-hidden"
                          >
                            {renderText(offering.description1)}
                          </motion.span>
                        )}
                        {isActive && (
                          <motion.span 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="text-black text-base w-full overflow-hidden"
                          >
                            {renderText(offering.description)}
                          </motion.span>
                        )}
                      </div>
                      <div className={`border ${isActive ? "border-grayText" : "border-grayText/25"} w-full`}>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Combined Content Area (Row-wise structure) */}
              <div className="flex-1 w-full">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeId}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={contentVariants}
                    className="flex flex-col gap-10 w-full"
                  >
                    {/* Row 1: Boxes */}
                    <motion.div className="flex flex-col xl:flex-row gap-6 items-start w-full" variants={itemVariants as any}>
                      {/* Image Box */}
                   <div className="relative w-full xl:flex-1 aspect-[670/427] overflow-hidden">
  {activeOffering.image.toString().toLowerCase().endsWith(".html") ? (
    <iframe
      src={activeOffering.image}
      className="absolute inset-0 w-full h-full border-none"
      title={activeOffering.title}
      scrolling="no"
    />
  ) : (
    <div
      className="absolute inset-0 bg-center bg-contain xl:bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${activeOffering.image})` }}
    />
  )}
</div>
                      
                      {/* Stats Box */}
                      <div className="flex flex-col items-start bg-statsBg pt-7 pb-12 xl:pb-0 h-full xl:min-h-[383px] pl-6 pr-4 gap-6 rounded-[24px] w-full xl:w-72 shrink-0">
                        <ul className="list-disc pl-4 text-brandPurple text-base">
                          {activeOffering.stats.map((stat, i) => (
                            <motion.li 
                              key={i} 
                              className={`w-full font-medium ${i === 0 ? "mb-8" : ""}`}
                              variants={itemVariants as any}
                            >
                              {renderText(stat)}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Row 2: Details */}
                    <motion.div 
                      className={`grid grid-cols-1 ${activeOffering.impact ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-2"} gap-8 xl:gap-12 items-start w-full`}
                      variants={containerVariants}
                    >
                      {/* Feature 1 */}
                      <motion.div className="flex flex-col items-start gap-6" variants={itemVariants as any}>
                        <div className="flex items-start gap-3.5">
                          <activeOffering.feature1.icon className="w-8 h-8 text-brandPurple shrink-0" />
                          <span className="text-black font-medium text-base">
                            {renderText(activeOffering.feature1.title)}
                          </span>
                        </div>
                        <ul className="list-disc pl-5 text-grayText/60 text-base">
                          {activeOffering.feature1.list.map((item, i) => (
                            <li key={i} className="mb-4">{renderText(item)}</li>
                          ))}
                        </ul>
                      </motion.div>

                      {/* Feature 2 */}
                      <motion.div className="flex flex-col items-start gap-6" variants={itemVariants as any}>
                        <div className="flex items-center gap-3.5">
                          <activeOffering.feature2.icon className="w-8 h-8 text-brandPurple shrink-0" />
                          <span className="text-black font-medium text-base">
                            {renderText(activeOffering.feature2.title)}
                          </span>
                        </div>
                        <ul className="list-disc pl-5 text-grayText/60 text-base">
                          {activeOffering.feature2.list.map((item, i) => (
                            <li key={i} className="mb-4">{renderText(item)}</li>
                          ))}
                        </ul>
                      </motion.div>

                      {/* Impact Section */}
                      {activeOffering.impact && (
                        <motion.div className="flex flex-col items-start" variants={itemVariants as any}>
                          <div className="flex items-center mb-6 gap-3.5">
                            <activeOffering.impact.icon className="w-8 h-8 text-brandPurple shrink-0" />
                            <span className="text-black font-medium text-base">
                              {renderText(activeOffering.impact.title)}
                            </span>
                          </div>
                          <ul className="list-disc pl-5 text-grayText/60 text-base">
                            {activeOffering.impact.list.map((item, i) => (
                              <li key={i} className="mb-4">{renderText(item)}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </motion.div>
                    
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Offering;
