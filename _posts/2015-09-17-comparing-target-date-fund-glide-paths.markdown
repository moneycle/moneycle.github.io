---
layout: post
title: "Comparing Target-Date Fund Glide Paths"
date: 2015-09-17
tags: [investing]
image: /images/flying-machine-548x357.jpeg
abstract: >
  While all target-date funds implement the concept of a glide path for asset
  allocation, they all have differing ideas on what the ideal path should be.
  In this article we will compare glide paths for some of the biggest
  and least expensive target-date funds.
---

## Fund Glide Paths

Here's what a typical glide path looks like.

<div id="example">
    <svg></svg>
</div>

Here are the glide paths for a few mutual funds.

<div id="chart">
    <svg></svg>
</div>

<style>
  #example {
    clear: both;
  }
  #example, svg {
    height: 360px;
  }

  #chart {
    clear: both;
  }
  #chart, svg {
    height: 360px;
  }
</style>

<script>
  var exampleData = [
    {
      name: 'Accumulation',
      glide: [[-50,90], [-25,90]],
      color: '#a02020'
    },
    {
      name: 'Glide Path',
      glide: [[-25,90], [0,40]],
      color: '#2020aa'
    },
    {
      name: 'Preservation',
      glide: [[0,40], [5,30], [20,30]],
      color: '#20a020'
    }
  ];

  var allData = [
    //Fund               ,T-50,T-45,T-40,T-35,T-30,T-25,T-20,T-15,T-10,T-5, T0, T5,T10,T15,T20,expense,market,color, website
    {
      name: 'Fidelity Freedom K',
      glide: [90, 90, 90, 90, 90, 80, 65, 59, 52, 43, 34, 24, 24, 24, 24],
      expense: 0.61,
      marketCap: 12.8,
      color: '#dd6633',
      url: 'https://www.fidelity.com/mutual-funds/asset-allocation-funds/freedom-funds/overview'
    },
    {
      name: 'Fidelity Freedom Index',
      glide: [90, 90, 90, 90, 90, 80, 65, 58, 52, 43, 33, 24, 24, 24, 24],
      expense: 0.16,
      marketCap: 1.7,
      color: '#408800',
      url: 'https://www.fidelity.com/mutual-funds/asset-allocation-funds/freedom-funds/overview'
    },
    {
      name: 'T. Rowe Price Retirement',
      glide: [90, 90, 90, 90, 85, 78, 71, 64, 54, 45, 40, 35, 31, 27, 20],
      expense: 0.78,
      marketCap: 17.3,
      color: '#40a9f0',
      url: 'http://individual.troweprice.com/public/Retail/Mutual-Funds/Target-Date-Funds'
    },
    {
      name: 'TIAA-CREF Lifecycle Index',
      glide: [90, 90, 90, 90, 81, 73, 65, 57, 50, 44, 40, 40, 40, 40, 40],
      expense: 0.21,
      marketCap: 0.5,
      color: '#0b7599',
      url: 'https://www.tiaa-cref.org/public/products-services/mutual-funds/lifecycle/index.html'
    },
    {
      name: 'Vanguard Target Retirement',
      glide: [90, 90, 90, 90, 90, 90, 81, 75, 67, 59, 50, 37, [7,30], 30, 30, 30],
      expense: 0.17,
      marketCap: 27.3,
      color: '#96151d',
      url: 'https://investor.vanguard.com/mutual-funds/target-retirement/'
    },
    {
      name: 'BlackRock LifePath Index',
      glide: [85, 85, 84, 82, 75, 67, 59, 50, 39, 39, 39, 39, 39, 39, 39],
      expense: 0.23,
      marketCap: 1.0,
      color: '#000000',
      url: 'http://www.blackrock.com/investing/financial-professionals/defined-contribution/investment-strategies/lifepath-index-portfolios'
    }
  ];

  function newChart(data, selector, interactive) {

    var aChart = nv.models.lineChart()
                  .interactive(interactive)
                  .useInteractiveGuideline(interactive)
                  .showLegend(true)
                  .showYAxis(true)
                  .showXAxis(true);

    aChart.xAxis
        .axisLabel('Years from Target Date')
        .tickFormat(d3.format('r'));

    aChart.yAxis     //Chart y-axis settings
        .axisLabel('Stock Percentage')
        .tickFormat(d3.format('.2p'));

    aChart.yDomain([0, 1]);

    var chartData = fundData(data);

    d3.select(selector)
        .datum(chartData)
        .call(aChart);

    //Update the chart when window resizes.
    nv.utils.windowResize(function() {
      aChart.update();
    });

    return aChart;
  }

  function fundData(data) {
    //Line chart data should be sent as an array of series objects.
    return data.map(function(obj) {
      return {
        values: transformXY(obj.glide),
        key: obj.name,
        color: obj.color
      }
    });
  }

  function transformXY(data) {
    var result = [];
    var year = -50;
    while (data.length > 0) {
      var percent = data.shift();
      if (Array.isArray(percent)) {
        result.push({x: percent[0], y: percent[1]*.01})
      } else {
        result.push({x: year, y: percent*.01})
        year += 5;
      }
    }
    return result;
  }


  nv.addGraph(newChart(exampleData, '#example svg', false));

  nv.addGraph(newChart(allData.sort(function(a, b) {
    return d3.descending(a.expense, b.expense); }), '#chart svg', true));

</script>

test text
