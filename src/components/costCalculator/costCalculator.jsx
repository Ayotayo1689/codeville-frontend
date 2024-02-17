import React from "react";
import CalculatorStepper from "./calculatorstepper";
import ContactUs from "../contactUs";

function CostCalculator({ service }) {
	return (
		<>
			<CalculatorStepper service={service}></CalculatorStepper>
			<ContactUs subtitle="We’re here to support"></ContactUs>
		</>
	);
}

export default CostCalculator;
