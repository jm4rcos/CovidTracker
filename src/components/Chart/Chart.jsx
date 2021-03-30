import React, { useState, useEffect } from 'react'
import { fetchDaily } from '../../api/api'
import { Line, Bar, Bubble } from 'react-chartjs-2'

import styles from './Chart.module.css'

export default function Chart({ data: {confirmed, recovered, deaths}, country}) {

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDaily())
        }
        
        fetchAPI()
    }, [])

    const lineChart = (
        confirmed ?
        (
            <Line 
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: 'blue',
                    backgroundColor: 'rgba(0,0,255,0.4)',
                    fill: true,
                    
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'crismon',
                    backgroundColor: 'rgba(255,0,0,0.4)',
                    borderColor: '#fff',
                    fill: true
                }],
            }}
        />
        ): 
        null
    )

    const barChart = (
        confirmed ? (
            <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)'
                    ],
                    data: [confirmed.value, recovered.value, deaths.value]
                }],
                
            }}
            options={{
                legend: { display:  false },
                title: { display: true, text: `Current state in ${country}`},
            }}
        />
        ):
        null
    )

    return (<div className={styles.chart}>
        

        {country ? barChart : lineChart}

    </div>)
}