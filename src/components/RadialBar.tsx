import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface IRadialBarProps {
    label: string
    hollowColor: string
    basicColor: string
    value: number
}
const RadialBar = ({ label, hollowColor, value, basicColor }: IRadialBarProps) => {
    const [series] = useState([value]);
    const [options] = useState({
        chart: {
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: `${hollowColor}`,
                    position: 'front',
                    dropShadow: {
                        enabled: true,
                        top: 0,
                        left: 0,
                        blur: 0,
                        opacity: 0.2,
                    },
                },
                track: {
                    background: '#F7F8FB',
                    strokeWidth: '100%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: 12,
                        left: 0,
                        blur: 10,
                        opacity: 0.3,
                        color: `${basicColor}`
                    }
                },
                dataLabels: {
                    show: true,
                    name: {
                        offsetY: 5,
                        show: true,
                        color: `${basicColor}`,
                        fontSize: '12px',
                        fontFamily: "Roboto"
                    },
                    value: {
                        show: false,
                    }
                }
            }
        },
        fill: {
            type: 'solid',
            colors: [basicColor]
        },
        stroke: {
            lineCap: 'round'
        },
        labels: [`${label}`],
    });

    return (
        <ReactApexChart className="mt-5" options={options} series={series} type="radialBar" height="100%" width="100%" />
    );
};

export default RadialBar;
