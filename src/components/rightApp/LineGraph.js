import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function LineGraph({ data, country }) {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    axios.get(`https://covid19.mathdro.id/api/daily`)
      .then((response) => {
        const modifiedData = response.data.map((ele) => {
          return {
            confirmed: ele.confirmed.total,
            deaths: ele.deaths.total,
            date: ele.reportDate,
          }
        })
        setDailyData(modifiedData)
      })
      .catch(err => alert(err.message))
  }, []);

  const lineChart = dailyData.length > 0 ? (
    <Line 
      data={{
        labels: dailyData.map(ele => ele.date),
        datasets: [
          {
            data: dailyData.map(ele => ele.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: "true",
          },
          {
            data: dailyData.map(ele => ele.deaths),
            label: "Deaths",
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: "true",
          },
        ],
      }}
    />
  ) : null;

  const barChart = data.cases ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [data.cases, data.recovered, data.deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null;

  return (
    <div className="app_graph" >
      {country.country ? barChart : lineChart}
    </div>
  );
}

export default LineGraph;