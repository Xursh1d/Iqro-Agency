import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const MultiRadialBar = () => {
    const [series] = useState([44, 55, 67]);
    const [options] = useState<ApexCharts.ApexOptions>({
        chart: {
            type: 'radialBar',
            height: '100%',
            width: '100%',
        },
        plotOptions: {
            radialBar: {
                offsetX: 0,
                offsetY: 18,
                dataLabels: {
                    show: false,
                },
                track: {
                    strokeWidth: "80%",
                    startAngle: undefined,
                    endAngle: undefined,
                    margin: 15,
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
                },
            }
        },
        stroke: {
            lineCap: 'round'
        },
        colors: ['#563BFF', '#FF7049', '#20C997'],
    });

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="radialBar"
            height="100%"
            width="100%"
        />
    );
};

export default MultiRadialBar;
