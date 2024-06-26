import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ChartFilter from "../../ui/DashBoard/ChartFilter";
import { formatPieChart } from "../../utils/billingDataHandling";
import useGetBillingData from "./useGetBillingData";

interface ChartData {
	series: number[];
	options: ApexOptions;
}

const PieChart = ({ type }: { type: "full" | "mini" }) => {
	const {BillingData} = useGetBillingData();
	const {servicesArray , pieChartData} = formatPieChart(BillingData) ;

	const [miniChartData] = useState<ChartData>({
		series: pieChartData,
		options: {
			chart: {
				type: "pie",
			},
			legend: {
				position: "bottom",
				width: 600,
				fontSize: "14px",
				fontWeight: "bold",
				labels: {
					colors: "gray",
				},
			},
			labels: servicesArray,
		},
	});


	if (type === "mini") {
		return (
			<div
				className="desktop:w-[485px] transtion-all flex h-[300px] w-[600px] cursor-pointer items-center justify-center bg-white shadow-xl duration-300 hover:bg-stone-50 mobile:w-[350px]"
			>
				<ReactApexChart
					options={miniChartData.options}
					series={miniChartData.series}
					type="pie"
					height={300}
					width={600}
				/>
			</div>
		);
	}

	const [region, setRegion] = useState<string>("");
	const [zones, setZones] = useState<string>("");
	const [pricing, setPricing] = useState<string>("");

	return (
		<div className="transtion-all flex  h-full w-[70%] flex-col items-center justify-between bg-white py-20 shadow-xl duration-300 mobile:w-full mobile:gap-8 tablet:w-full tablet:gap-8">
			<ChartFilter
				region={region}
				setRegion={setRegion}
				zones={zones}
				setZones={setZones}
				pricing={pricing}
				setPricing={setPricing}
			/>
			{/* <FilterDate/> */}

			<ReactApexChart
				options={miniChartData.options}
				series={miniChartData.series}
				type="pie"
				height={400}
				width={600}
			/>
		</div>
	);
};
export default PieChart;
