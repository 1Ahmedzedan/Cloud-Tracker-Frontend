import { useRef } from "react";
import aboutVector from "../../assets/aboutVector.png";
import aboutWave from "../../assets/aboutWave.png";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.3 1"],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
	const opacityProgress = useTransform(scaleProgress, [0, 1], [0, 1]);

	return (
		<div className="relative z-40 mt-[200px] py-28 pl-10 pr-32  mobile:px-6 mobile:py-16 tablet:px-24">
			<img
				src={aboutWave}
				alt="banner"
				draggable="false"
				className="absolute left-[-1px] top-0 w-[600px] mobile:w-[300px] tablet:w-[450px]"
			/>
			<div className="flex items-center justify-between mobile:flex-col mobile:gap-24 tablet:flex-col tablet:gap-24">
				<img
					className="z-40 w-[500px] mobile:w-[250px] mobile:self-start tablet:w-[350px] tablet:self-start"
					src={aboutVector}
					alt=""
					draggable="false"
				/>
				<motion.div
					ref={ref}
					style={{
						scale: scaleProgress,
						opacity: opacityProgress,
					}}
					className="z-40 flex w-[45%] flex-col items-center justify-between gap-10 mobile:w-full tablet:w-full"
				>
					<div className="space-y-4">
						<p className="z-40 text-4xl font-semibold leading-[50px] tracking-widest mobile:text-center mobile:text-2xl  tablet:text-center tablet:text-3xl">
							What is{" "}
							<span className="text-linearOrange-200 ">
								{" "}
								Cloud Tracker{" "}
							</span>
							?
						</p>
						<p className=" text-lg text-stone-500 mobile:text-sm">
							is a software solution designed to assist
							users of cloud services, such as AWS. It actively
							monitors and tracks payment details, offering tailored
							recommendations to minimize costs. With user-friendly
							dashboards, Cloud Tracker provides real-time insights
							into consumption patterns, allowing users to efficiently
							manage their resource usage, pinpointing when and where
							their cloud resources are utilized.
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
