import React, {useState} from "react";
import { motion } from "framer-motion";
import attachment from "../assets/attachment.png";
import { db } from "../lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";
const Contact = () => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
	const [input5, onChangeInput5] = useState('');
	const [input6, onChangeInput6] = useState('');
	const [submitting, setSubmitting] = useState(false);
	

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
				type: "spring",
				stiffness: 100,
				damping: 12,
			},
		},
	};

	return (
		<motion.div 
			className="flex flex-col bg-white  pt-28  " 
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			<div className="self-stretch bg-white">
				<div className="grid grid-cols-1 lg:grid-cols-5 items-stretch max-w-7xl mx-auto px-4 md:px-6 gap-10 mb-14">
					<motion.div 
						className="flex flex-col items-start  lg:col-span-3 h-full justify-between"
						variants={containerVariants}
					>
						<div className="flex flex-col items-start mb-12 gap-6">
							<motion.span 
								variants={itemVariants as any}
								className="text-brandDark text-2xl font-bold w-full lg:mt-5 mt-0 md:w-96" 
							>
								Here’s what happens after you contact us
							</motion.span>
							<motion.ul 
								variants={containerVariants}
								className="flex flex-col items-start gap-2 list-disc pl-6 text-grayText text-base"
							>
								<motion.li variants={itemVariants as any}>We review your request and understand your business needs</motion.li>
								<motion.li variants={itemVariants as any}>Our team connects with you to discuss use cases and requirements</motion.li>
								<motion.li variants={itemVariants as any}>You’ll hear back from us within 24 hours</motion.li>
								<motion.li variants={itemVariants as any}>We guide you on the best way to use ZebraXP for your operations</motion.li>
							</motion.ul>
						</div>
						<motion.div 
							variants={itemVariants as any}
							className="w-full flex flex-col md:w-[25rem] sm:w-full items-start bg-brandPurple py-3.5 pl-6 pr-9 rounded-3xl mt-8" 
							style={{
								boxShadow:"0px 0px 17px 0px #FFFFFF80 inset"
							}}>
							<span className="text-white text-xl font-bold mt-3 mb-5" >
								Need a tailored discussion?
							</span>
							<span className="text-white font-regular text-base mb-5">
								Our team is happy to walk you through ZebraXP and answer your questions based on your business goals.
							</span>
							{/* <motion.button 
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="flex flex-col items-start bg-brandYellow text-left py-3 px-6 md:px-8 rounded-full border-0"
								onClick={()=>alert("Pressed!")}>
								<span className="text-brandDark text-lg" >
									Schedule a call
								</span>
							</motion.button> */}
						</motion.div>
					</motion.div>

					<motion.div 
						className="flex flex-col bg-panelBg items-start p-5 md:p-7 rounded-3xl lg:col-span-2 h-full"
						variants={containerVariants}
					>
						<motion.span 
							variants={itemVariants as any}
							className="text-brandDark text-2xl font-bold mb-4" 
						>
							Get in touch
						</motion.span>
						<motion.span 
							variants={itemVariants as any}
							className="text-grayText text-base mb-7" 
						>
							Fill in your details and let us know how we can help. Whether you’re exploring ZebraXP, need support, or want a demo, we’re here for you.
						</motion.span>
						<motion.div 
							variants={containerVariants}
							className="self-stretch w-full  "
						>
							<div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-6">
								<motion.input
									variants={itemVariants as any}
									placeholder="Enter your name"
									value={input1}
									onChange={(event)=>onChangeInput1(event.target.value)}
									type="text"
									className="w-full text-brandDark bg-white text-base py-3.5 px-7 rounded-full border border-solid border-borderLight"
								/>
								{/* <motion.input
									variants={itemVariants 	as any}
									placeholder="Enter your industry"	
									value={input2}
									onChange={(event)=>onChangeInput2(event.target.value)}
									type="text"
									className="w-full text-brandDark bg-white text-base py-3.5 px-7 rounded-full border border-solid border-borderLight"
								/> */}
								<motion.input
									variants={itemVariants as any}
									placeholder="Enter your email"
									value={input3}
									onChange={(event)=>onChangeInput3(event.target.value)}
									type="email"
									className="w-full text-brandDark bg-white text-base py-3.5 px-7 rounded-full border border-solid border-borderLight"
								/>
								<motion.input
									variants={itemVariants as any}
									placeholder="Enter your phone"
									value={input4}
									onChange={(event)=>onChangeInput4(event.target.value)}
									type="tel"
									maxLength={10}
									className="w-full text-brandDark bg-white text-base py-3.5 px-7 rounded-full border border-solid border-borderLight"
								/>
								{/* <motion.textarea
									variants={itemVariants as any}
									placeholder="Describe your business"
									value={input5}
									onChange={(event)=>onChangeInput5(event.target.value)}
									className="w-full md:col-span-2 text-brandDark bg-white text-base p-4 rounded-xl border border-solid border-borderLight min-h-[140px]"
								/> */}
							</div>
							{/* <motion.label 
								variants={itemVariants as any}
								className="flex items-center self-stretch bg-white60 mb-6 rounded-xl border border-dashed border-borderMedium cursor-pointer"
							>
								<img
									src={attachment}
									className="w-8 h-8 ml-6 mr-8 object-fill"
								/>
								<span className="flex-1 self-stretch text-brandDark bg-transparent text-base py-7 mr-1">
									{input6 || "Attach file"}
								</span>
								<input
									type="file"
									onChange={(event)=>onChangeInput6(event.target.files && event.target.files[0] ? event.target.files[0].name : '')}
									className="hidden"
								/>
							</motion.label> */}
							<motion.div 
								variants={itemVariants as any}
								className="flex flex-col items-end self-stretch gap-3"
							>
								<motion.button 
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="flex flex-col items-start bg-brandPurple text-left  py-3 px-6 md:px-8  rounded-full border-0 disabled:opacity-60"
									disabled={submitting}
									onClick={async ()=>{
										if(!input1 || !input3){
											toast.error('Please enter your name and email.', { duration: 4000 });
											return;
										}
										try{
											setSubmitting(true);
											await addDoc(collection(db, "contact_requests"),{
												name: input1,
												email: input3,
												phone: input4,
												createdAt: serverTimestamp()
											});
											toast.success('sent successfully.', { duration: 3000 });
											onChangeInput1('');
											onChangeInput3('');
											onChangeInput4('');
										}catch(err){
											toast.error('Failed to send request. Please try again.', { duration: 4000 });
										}finally{
											setSubmitting(false);
										}
									}}>
									<span className="text-white text-lg" >
										{submitting ? 'Sending…' : 'Send Request'}
									</span>
								</motion.button>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	)
}
export default Contact;
