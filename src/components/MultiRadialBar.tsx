import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const MultiRadialBar = () => {
    const [series] = useState([44, 55, 67]);
    const [options] = useState({
        chart: {
            width: "100%",
            height: "100%",
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                value: {
                    show: false,
                },
                dataLabels: {
                    show: false
                },
                track: {
                    margin: 20,
                    background: "#F2F3F9",
                    dropShadow: {
                        enabled: true,
                        top: 12,
                        left: 0,
                        blur: 10,
                        opacity: 0.3,
                        color: "#F2F3F9"
                    }
                },
                hollow: {
                    size: "0"
                }
            }
        },

        stroke: {
            lineCap: 'round'
        },
        colors: ['#563BFF', '#FF7049', '#20C997'],
        responsive: [
            {
                breakpoint: 764, // Define the breakpoint for mobile devices
                options: {
                    plotOptions: {
                        radialBar: {
                            track: {
                                margin: 15,
                            }
                        }
                    }
                }
            }
        ]
    });

    return (
        <ReactApexChart className="mt-4 sm:mt-3" options={options} series={series} type="radialBar" height="100%" />
    );
};


export default MultiRadialBar;
