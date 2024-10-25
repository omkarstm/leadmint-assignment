import React from "react";
import { Chart } from "react-charts";

const LineChart = () => {
   // Define the data
   const data = React.useMemo(
      () => [
         {
            label: "Series 1",
            data: [
               { primary: new Date("2023-01-01"), secondary: 30 },
               { primary: new Date("2023-02-01"), secondary: 40 },
               { primary: new Date("2023-03-01"), secondary: 35 },
               { primary: new Date("2023-04-01"), secondary: 50 },
            ],
         },
         {
            label: "Series 2",
            data: [
               { primary: new Date("2023-01-01"), secondary: 20 },
               { primary: new Date("2023-02-01"), secondary: 30 },
               { primary: new Date("2023-03-01"), secondary: 25 },
               { primary: new Date("2023-04-01"), secondary: 45 },
            ],
         },
      ],
      []
   );

   // Define the axes
   const primaryAxis = React.useMemo(
      () => ({
         getValue: (datum) => datum.primary,
         scaleType: "time",
      }),
      []
   );

   const secondaryAxis = React.useMemo(
      () => ({
         getValue: (datum) => datum.secondary,
         scaleType: "linear",
      }),
      []
   );

   return (
      <div style={{ width: "600px", height: "400px" }}>
         <Chart
            options={{
               data,
               primaryAxis,
               secondaryAxis,
               tooltip: true,
            }}
         />
      </div>
   );
};

export default LineChart;
