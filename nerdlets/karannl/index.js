

import React from 'react';
import {LineChart, SparklineChart, PieChart} from "nr1";
// import NRQL from "./NRQL"

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class KaranNerdlet extends React.Component {
  render() {
    return <>
    <p style={{color: "red", padding:"10px", alignitem:"center", background:"yellow", fontSize:"20px", textAlign:"center"}}>This is LineChart</p>
    <LineChart style={{width:"90%", height:"95%"}}
    accountId = {3931810}
    query = "SELECT average(host.loadAverageOneMinute) as '1 minute', average(host.loadAverageFiveMinute) AS '5 minutes', average(host.loadAverageFifteenMinute) AS '15 minutes' FROM Metric WHERE `entityGuid` = 'MzkzMTgxMHxJTkZSQXxOQXwxNDAzMDcyNDMwNjIyNjc2OTE' TIMESERIES auto"
    fullWidth
    fullHeight
    />
    
    <p style={{color: "red", padding:"10px" , alignitem:"center", background:"yellow", fontSize:"20px", textAlign:"center"}}>This is Pie-Chart</p>
    <PieChart
    accountId = {3931810}
    query = "SELECT average(host.loadAverageOneMinute) as '1 minute', average(host.loadAverageFiveMinute) AS '5 minutes', average(host.loadAverageFifteenMinute) AS '15 minutes' FROM Metric WHERE `entityGuid` = 'MzkzMTgxMHxJTkZSQXxOQXwxNDAzMDcyNDMwNjIyNjc2OTE' TIMESERIES auto"
    fullWidth
    fullHeight
    />
    {/* <NRQL/> */}
    </>;
  }
}
