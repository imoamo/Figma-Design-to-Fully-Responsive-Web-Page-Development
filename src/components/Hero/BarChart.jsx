import React from 'react';
import style from './Hero.module.css'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Revenue',
                data: [800, 400, 1200, 1500, 900, 1000, 700, 1500, 1000, 400, 300, 500],
                backgroundColor: 'rgba(153, 102, 255, 0.6)', // Match the light purple color
                borderColor: 'rgba(153, 102, 255, 0)', // Remove border color for cleaner look
                borderWidth: 0,
                borderRadius: 8, // Rounded corners for bars
                barPercentage: 0.6, // Adjust bar width
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Remove legend
            },
            title: {
                display: false, // Remove title
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // Remove vertical grid lines
                },
            },
            y: {
                grid: {
                    display: false, // Remove horizontal grid lines
                },
                ticks: {
                    stepSize: 500, // Adjust the step size for y-axis labels (0, 500, 1000, 1500)
                    callback: function (value) {
                        return `$${value}`; // Add $ symbol to y-axis labels
                    },
                },
                min: 0, // Set the minimum value of y-axis
                max: 1500, // Set the maximum value of y-axis
            },
        },
    };

    return (
        <div className={style.barchat}>

            <div className={style.bar_child_1}>
                <div className={style.bar_text_1}>Overview</div>

                <div className={style.bar_child_2}>
                    <div className={style.bar_text_img}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.899994 15.3H17.1V17.1H0.899994V15.3ZM9.89999 10.0548L15.3639 4.59L16.6365 5.8626L8.99999 13.5L1.36349 5.8635L2.63609 4.59L8.09999 10.053V0H9.89999V10.0548Z" fill="#AD8EDD" />
                        </svg>

                    </div>

                    <div className={style.bar_text_2}>Download Report</div>
                </div>
            </div>


            <div className={style.bar_child_3}>
                <div className={style.bar_text_3}>Monthly</div>
                <div className={style.bar_text_4}>Yearly</div>
            </div>

            <div></div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
