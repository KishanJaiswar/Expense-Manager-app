import React from 'react'
import './Graph.css'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip, TriangleBar, Cell, } from 'recharts';

export default function Graph({ data }) {
    console.log(data)
    return (
        <>
            {/* <div className='chart'>
            <BarChart className='barChart'
                width={350}
                height={200}
                data={data}
                barSize={5}
            >
                <XAxis className='xAxis' dataKey="title" scale="point" padding={{ left: 5, right: 50 }} />
                <YAxis className='yAxis' />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
        </div> */}
            <div>
                <BarChart width={150} height={70} data={[data]}>
                    <Bar dataKey="amount" fill="#8884d8" />
                </BarChart>
            </div>
        </>
    )
}
