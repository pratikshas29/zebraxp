import React from "react";
import { motion } from "framer-motion";

import about1 from "../assets/about-us-1.jpg";
import about2 from "../assets/about-us-2.jpg";
import about3 from "../assets/about-us-3.jpg";
import about4 from "../assets/about-us-4.jpg";

const AboutUs = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
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

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.div
			className="flex flex-col bg-white pt-28 mb-12"
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			<div className="flex flex-col self-stretch bg-white">

				{/* Section 1 */}
				<motion.div
					className="grid grid-cols-1 lg:grid-cols-12 items-start max-w-7xl mb-10  mx-auto px-5 gap-3 lg:gap-12"
					variants={containerVariants}
				>
					<motion.span
						className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold w-full lg:col-span-4 leading-8 lg:leading-[50px]"
						variants={itemVariants as any}
					>
						So how did <span className="text-brandYellow">ZebraXP</span> take shape?

					</motion.span>

					<motion.div
						className="lg:col-span-8"
						variants={itemVariants as any}
					>
						<div className="text-brandDark font-bold mt-2 text-base sm:text-lg">
							We call it the Zebra eXPerience. Why so?
						</div>
						<div className="text-grayText text-sm sm:text-base mt-4">
							It matches with the principles we work with:
						</div>
						<ol className="list-decimal pl-4 space-y-0.5 text-brandDark text-sm sm:text-base mt-3 marker:font-bold marker:text-brandDark">
							<li ><span className="font-bold">Transparency</span> - the black and white stripes represent transparency.</li>
							<li><span className="font-bold">Uniqueness</span> - every stripe pattern is unique similar to human fingerprints.</li>
							<li><span className="font-bold">Consistency</span> - even while unique, the pattern of black and white is consistent.</li>
						</ol>
					</motion.div>
				</motion.div>

				{/* Banner Image */}
				<motion.div
					className="max-w-7xl mx-auto px-5 w-full mb-10 "
					variants={imageVariants as any}
				>
					<img
						src={about1}
						className="w-full h-48 sm:h-64 lg:h-72 object-cover rounded-2xl shadow-lg"
						alt="About ZebraXP"
					/>
				</motion.div>

				{/* Section 2 */}
				<motion.div
					className="flex flex-col lg:flex-row items-start lg:items-center max-w-7xl mb-10  mx-auto px-5 gap-8 lg:gap-16"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={containerVariants}
				>
					<motion.span
						className="flex-1 text-brandDark text-sm sm:text-base leading-8 lg:leading-[30px]"
						variants={itemVariants as any}
					>
						ZebraXP is a customer success and engagement platform built to help businesses bridge the gap between digital tools and real-world operations. As businesses grow, managing offline interactions, customer engagement, and internal workflows often becomes fragmented and manual. ZebraXP was created to simplify these challenges by bringing digitization, automation, and engagement into one connected platform that supports both online and offline experiences.
					</motion.span>

					<div className="flex gap-4 w-full lg:w-auto">
						<motion.img
							src={about2}
							className="w-1/2 lg:w-64 h-40 sm:h-44 lg:h-56 object-cover rounded-xl shadow-md"
							variants={imageVariants as any}
						/>

						<motion.img
							src={about3}
							className="w-1/2 lg:w-64 h-40 sm:h-44 lg:h-56 object-cover rounded-xl shadow-md"
							variants={imageVariants as any}
						/>
					</div>
				</motion.div>

				{/* Section 3 */}
				<motion.div
					className="flex flex-col lg:flex-row items-start lg:items-center max-w-7xl mx-auto px-5 gap-8 lg:gap-16"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={containerVariants}
				>
					<motion.img
						src={about4}
						className="w-full lg:flex-1 h-56 sm:h-64 lg:h-72 object-cover rounded-2xl shadow-lg"
						variants={imageVariants as any}
					/>

					<div className="flex flex-1 flex-col items-start gap-7">
						<motion.span
							className="text-brandDark text-sm sm:text-base leading-8 lg:leading-[30px]"
							variants={itemVariants as any}
						>
							Designed for growing teams, ZebraXP focuses on clarity, flexibility, and ease of use. The platform helps businesses respond faster, work smarter, and build stronger customer relationships.
						</motion.span>

						<motion.span
							className="text-brandDark text-sm sm:text-base leading-8 lg:leading-[30px]"
							variants={itemVariants as any}
						>
							As businesses grow, managing customer interactions and operational workflows becomes increasingly complex. ZebraXP brings structure through digitization and automation, reducing manual effort and improving efficiency.
						</motion.span>
					</div>
				</motion.div>

			</div>
		</motion.div>
	);
};

export default AboutUs;
