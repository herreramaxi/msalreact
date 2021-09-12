import React, { Fragment, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { get } from "./Api";
import { TemperatureTable } from "./TemperatureTable";
import useInterval from 'react-useinterval';
import Moment from 'moment';

export const ApexChart = (props) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        getFromApi();
    }, []);

    const getFromApi = () => {
        get("/getTemperatureSamples").then(r => {
            if (!r?.data) return;
            setData(r.data.map(x => [x.sampleDate, x.value]));
        });
    }

    useInterval(getFromApi, 5000);


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
            // text: "Temperature",            
            // align: "left"
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
            // labels: {
            //     formatter: function (val) {
            //         return Moment(val).format("ddd-MM hh:mm")
            //     },
            // },
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

    return (<Fragment>
        {data &&
            <>
                <h3>Time series chart</h3>
                <ReactApexChart options={options} series={[{
                    name: "Temperature",
                    data: data
                }]} type="area" height={350} />
                <TemperatureTable samples={data}></TemperatureTable>
            </>
        }

        {/* {data && <TemperatureTable samples={data}></TemperatureTable>} */}

        {!data && <p>no data available</p>}
    </Fragment>);

};