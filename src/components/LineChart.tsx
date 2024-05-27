import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
    const series = [{
        name: 'Users',
        data: [39, 75, 46, 77, 50, 76, 37, 76, 37],
    }];

    const options = {
        chart: {
            type: 'area',
            toolbar: {
                show: false,
            },
            dropShadow: {
                enabled: true,
                color: '#563BFF',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#563BFF"],
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0,
                opacityTo: 0,
            },
        },
        stroke: {
            curve: 'smooth',
            dropShadow: {
                top: 12,
                left: 2,
                blur: 14,
                opacity: 0.5,
                color: 'red'
            }
        },
        grid: {
            show: false
        },
        yaxis: {
            show: false,
            min: 0,
            max: 100,
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: true,
                style: {
                    fontFamily: "Poppins,Verdana",
                    fontWeight: "bold",
                    fontSize: "12px",
                    color: "#A3ABBD"
                }
            },
        },
        tooltip: {
            enabled: true
        },
    };

    return (
        <ReactApexChart options={options} series={series} className="pl-2 md:px-5" type="area" height="90%" />
    );
};

export default LineChart;
