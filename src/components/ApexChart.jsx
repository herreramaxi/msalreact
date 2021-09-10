import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export class ApexChart extends React.Component {

    constructor(props) {
        super(props);

        let ts2 = 1484418600000;
        let dates = [];
        const max = 40;
        const min = -10;
        for (let i = 0; i < 120; i++) {
            ts2 = ts2 + 86400000;

            dates.push([ts2, Math.random() * (max - min) + min]);
        }

        this.state = {

            series: [{
                name: "Temperature",
                data: dates
            }],
            options: {
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
                        text: "Price"
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
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
            </div>)
    };
}