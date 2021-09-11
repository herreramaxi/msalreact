import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { get } from "./Api";

export const ApexChart = (props) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        get("/getTemperatureSamples").then(r => {
            setData(r.data.map(x => [x.sampleDate, x.value]));
        });

    }, [setData])

    const options = {
        chart: {
            type: "area",
            stacked: false,
            height: 350,
            zoom: {
                type: "x",
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: "zoom"
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
        },
        title: {
            text: "Temperature",
            align: "left"
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return (val).toFixed(2);
                },
            },
            title: {
                text: "temperature"
            },
        },
        xaxis: {
            type: "datetime",
        },
        tooltip: {
            shared: false,
            y: {
                formatter: function (val) {
                    return (val).toFixed(2)
                }
            }
        }
    };

    var series = [{
        name: "Temperature",
        data: data
    }];

    return (<div id="chart">


        {data && <ReactApexChart options={options} series={[{
            name: "Temperature",
            data: data
        }]} type="area" height={350} />}

        {!data && <div>no data available</div>}
    </div>);

};