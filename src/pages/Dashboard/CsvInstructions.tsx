import Wave from "../../assets/introWave.png";
import semiCircle from "../../assets/circleLeft.png";
import holloCircle from "../../assets/hollowCircle.png";
import { BsArrowLeftCircle } from "react-icons/bs";

const CsvInstructions = () => {
	return (
		<div className="relative">
			<img
				src={Wave}
				alt="wave"
				draggable="false"
				className="absolute right-0 top--2 w-1/3"
			/>
			<img
				src={semiCircle}
				draggable="false"
				className="absolute left-0 top-36  w-1/6"
			/>

			<img
				src={holloCircle}
				draggable="false"
				className="absolute right-0 top-[600px]  w-1/6"
			/>

			<div className="flex flex-col items-center space-y-24 pb-[150px] pt-[150px] text-xl mobile:pb-4 mobile:pt-44 tablet:pb-44 tablet:pt-48">
				<div className=" w-[850px] space-y-14 pr-[20px] mobile:w-[300px] mobile:text-lg tablet:w-[550px]">
					<button
						data-testid="arrowLeftTest"
						onClick={() => history.back()}
						className="z-2 text-4xl text-linearBlue-1"
					>
						<BsArrowLeftCircle />
					</button>
					<p className="text-3xl font-bold mobile:text-xl">
						Step 1: Access Cost Explorer{" "}
					</p>
					<p>
						1.Sign in to the AWS Management Console.
						<br />
						2.Open the AWS Cost Management console at {" "}
						<a
							href="https://console.aws.amazon.com/cost-management/home."
							className=" font-medium text-blue-800 underline"
						> AWS Console Management</a>

						<br />
						3.From the navigation pane, choose Cost Explorer.
					</p>
				</div>
				<div className=" w-[850px] space-y-16 pr-[20px] mobile:w-[300px] mobile:text-lg tablet:w-[550px]">
					<p className="text-3xl font-bold mobile:text-xl">
						Step 2: Set Up Your Query
					</p>
					<p>
						1.Inside Cost Explorer, set up the view or report you want.
						You can customize the data by various dimensions such as
						service, linked accounts, tags, etc.
						<br />
						2.Choose the time period for the data you are interested in.{" "}
					</p>
				</div>
				<div className=" w-[850px] space-y-16 pr-[20px] mobile:w-[300px] mobile:text-lg tablet:w-[550px]">
					<p className="text-3xl font-bold mobile:text-xl">
						Step 3: Download the Report
					</p>
					<p>
						1.After setting up your query, click on Apply filters to
						view the data on the screen.
						<br />
						2.Above the graph and data table, you should see a Download
						option.
						<br />
						3.Click on Download, and you will typically have an option
						to download the data as a CSV file.
					</p>
				</div>
			</div>
			<div className="relative h-48">
				<img
					src={semiCircle}
					draggable="false"
					className="absolute bottom-[-300px] right-44 w-[18%] -rotate-90 mobile:bottom-[-100px] mobile:right-6
					 mobile:w-[28%] tablet:right-20 tablet:w-[28%]"
				/>
				<img
					src={Wave}
					draggable="false"
					className=" absolute bottom-0 left-0 w-1/3 rotate-180"
				/>
			</div>
		</div>
	);
};

export default CsvInstructions;
