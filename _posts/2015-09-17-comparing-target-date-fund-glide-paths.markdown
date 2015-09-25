---
layout: post
title: "Comparing Target-Date Fund Glide Paths"
date: 2015-09-25
tags: [investing]
image: /images/flying-machine-548x357.jpeg
abstract: >
  While all target-date funds implement the concept of a glide path for asset
  allocation, they all have differing ideas on what the ideal path should be.
  In this article we will compare glide paths for some of the biggest
  and least expensive target-date funds.
---

Target-date funds are relative newcomers in the investment world.  Most of today's
target-date funds were created in the last 10 years or so.  Their popularity has
grown largely since the passage in 2006 of the [Pension Protection Act](https://en.wikipedia.org/wiki/Pension_Protection_Act_of_2006).

The Pension Protection Act stipulates that employers provide what are called
"Qualified Default Investment Alternatives" which is a fancy way of saying that
they need to provide default investment alternatives that don't suck.
And target-date funds are generally considered to not suck.

## Typical Target-Date Fund

The general idea of the target-date fund is to invest for growth when the investor
is young and gradually decrease the amount of risky investments as the investor
approaches retirement age.  Typically the risky investment takes the form of
stocks and the safer investment is in bonds.

The transition from the early growth period to the later safe period is called
the "glide-path".  In visual form, here's what a typical glide path looks like.

<div id="example">
    <svg></svg>
</div>

This plot shows the glide-path continuing to decrease a little past the retirement
age. This is fairly common and is often referred to as a "glide-through" fund
versus a fund that stops chaning right at the target-date which is called a "glide-to"
fund.  It's good to understand these differences so that you aren't surprised to
find that your fund is still changing allocation after the target-date.

For the purposes of this article, I was focused on some of the
more popular target-date funds.  Defining popularity is tricky so I chose to just
consider the biggest and cheapest funds.  "Biggest" funds are defined by their
assets under management, and "cheapest" funds are defined by their expense ratios.
The data for this article came mostly from a comprehensive article published by
Morningstar titled ["2015 Target-Date Fund Landscape"](http://corporate1.morningstar.com/ResearchArticle.aspx?documentId=705998), and was verified by looking
at the individual mutual-fund companies' websites.

## Biggest Target-Date Funds

The following table lists the 4 biggest target-date funds in terms of total market share:

<table id="funds-by-share">
  <thead>
    <tr><th>Fund Family</th><th>2014 Market Share (%)</th><th>Expense Ratio (%)</th></tr>
  </thead>
  <tbody/>
</table>

These four funds make up wholly two thirds of all target-date funds so they are the gorillas.
Vanguard is the clear market share leader with over a quarter of the entire target-date fund market.
But Fidelity has a couple of entries that add up to over 20% of the market.  From what I've been
able to glean, Fidelity's "K" series of funds is similar to the non-K series except
that it is only available to 401k plans run by Fidelity.

## Cheapest Target-Date Funds

And here are the 4 funds with the smallest expense ratios:

<table id="funds-by-expense">
  <thead>
    <tr><th>Fund Family</th><th>2014 Market Share (%)</th><th>Expense Ratio (%)</th></tr>
  </thead>
  <tbody/>
</table>

Not surprisingly, the low-cost leader Vanguard is also on this list.
But the "Fidelity Freedom Index" fund has a slight edge on expense.
Note that the "Fidelity Freedom Index" is yet another target-date fund
from Fidelity.  The "Index" variant from Fidelity appears to be their low-cost variant
composed of only low-cost Fidelity index funds.  The "Index" variant is also only
available via certain employer-sponsored plans which is why you can't easily
find information about them on their public website.

## Glide Paths

Here are the glide paths for all of the funds mentioned above[^1].  The zero point
on the time axis represents the relative target date.  For example, the point
-10 for a 2040 fund maps to the year 2030.

<div id="chart">
    <svg></svg>
</div>

Of these 7 funds, only BlackRock is the only "glide-to" fund that stops changing its
allocation right at the target date.  BlackRock is also unique in that its equity
percentage contains a fair amount of real-estate (REIT) investments (15% early on,
dwindling to near 0% at the end of the glide path).
I decided to lump the REIT into the "equity" bucket for this graph
but some would argue that you should put a portion of it into the "bond" bucket.

All funds except BlackRock start at 90% equities.  If I had allocated 1/3 of the REIT
to equities then BlackRock would also have close to a 90% equity position at the
beginning too so consider that when looking at the graph.

Most funds have finished there glide paths within 7 years but T. Rowe Price continues
the glide down for 30 years.

## General Thoughts

Plotting the different glide paths is an interesting exercise and tool for comparing
funds to see which one most closely aligns with your goals.  But you don't have to
pick the fund that matches your exact retirement date.  For example, if you want
the glide path to stop right at your retirement date and you like Vanguard,
then you might want to pick the Vanguard fund that is your retirement date minus
7 years to line that up with your goals.

I think that most of these funds end at a very "safe" level of equities, perhaps too
safe for my tastes, but maybe just right for you.  I suspect that the fund companies
err on the side of being too conservative to avoid controversy.
As such, my preference would be to use a target date fund mostly during your
accumulation years then switch to a balanced fund (or set of funds) that match
your long-term risk tolerance when you are near your target.

One thing, a big thing, that these funds can't account for is how much money
you have in a pension or social security.  For example, if your social security
will cover 50% of your future spending, do you really need the rest of your
portfolio to glide to a 30% equity level?  You may conclude that you can take
more risk in your portfolio when social security has your back.
In the end, it comes down to your personal situation and your comfort level with risk.

[^1]: click on a fund name to remove it or double click to remove all others

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
      glide: [[-40,90], [-25,90]],
      color: '#a02020'
    },
    {
      name: 'Glide Path',
      glide: [[-25,90], [0,40]],
      color: '#2020aa'
    },
    {
      name: 'Preservation',
      glide: [[0,40], [5,30], [30,30]],
      color: '#20a020'
    }
  ];

  var allData = [
    {
      name: 'Fidelity Freedom',
      glide: [90, 90, 90, 90, 90, 80, 65, 59, 52, 43, 34, 24, 24, 24, 24],
      expense: 0.71,
      share: 9.3,
      color: '#887722',
      url: 'https://www.fidelity.com/mutual-funds/asset-allocation-funds/freedom-funds/overview'
    },
    {
      name: 'Fidelity Freedom K',
      glide: [90, 90, 90, 90, 90, 80, 65, 59, 52, 43, 34, 24, 24, 24, 24],
      expense: 0.61,
      share: 12.8,
      color: '#dd6633',
      url: 'https://www.fidelity.com/mutual-funds/asset-allocation-funds/freedom-funds/overview'
    },
    {
      name: 'Fidelity Freedom Index',
      glide: [90, 90, 90, 90, 90, 80, 65, 58, 52, 43, 33, 24, 24, 24, 24],
      expense: 0.16,
      share: 1.7,
      color: '#408800',
      url: 'https://www.fidelity.com/mutual-funds/asset-allocation-funds/freedom-funds/overview'
    },
    {
      name: 'T. Rowe Price Retirement',
      glide: [90, 90, 90, 90, 85, 78, 71, 64, 54, 45, 40, 35, 31, 27, 20],
      expense: 0.78,
      share: 17.3,
      color: '#40a9f0',
      url: 'http://individual.troweprice.com/public/Retail/Mutual-Funds/Target-Date-Funds'
    },
    {
      name: 'TIAA-CREF Lifecycle Index',
      glide: [90, 90, 90, 90, 81, 73, 65, 57, 50, 44, [9,40], 40, 40, 40, 40, 40],
      expense: 0.21,
      share: 0.5,
      color: '#0b7599',
      url: 'https://www.tiaa-cref.org/public/products-services/mutual-funds/lifecycle/index.html'
    },
    {
      name: 'Vanguard Target Retirement',
      glide: [90, 90, 90, 90, 81, 75, 67, 59, 50, 37, [7,30], 30, 30, 30, 30, 30],
      expense: 0.17,
      share: 27.3,
      color: '#96151d',
      url: 'https://investor.vanguard.com/mutual-funds/target-retirement/'
    },
    {
      name: 'BlackRock LifePath Index',
      glide: [98, 98, 93, 90, 85, 75, 64, 59, 40, 40, 40, 40, 40, 40, 40],
      expense: 0.23,
      share: '0.6',
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
        .axisLabel('Equity Percentage')
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
    var year = -40;
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

  allData.sort(function(a,b) { return b.share - a.share; }).slice(0,4).forEach(function(fund) {
    tr = d3.select('#funds-by-share tbody').append('tr')
    tr.append('td').html('<a href="' + fund.url + '">' + fund.name + '</a>');
    tr.append('td').attr("style", "text-align: center").html(fund.share);
    tr.append('td').attr("style", "text-align: center").html(fund.expense);
  });

  allData.sort(function(a,b) { return a.expense - b.expense; }).slice(0,4).forEach(function(fund) {
    tr = d3.select('#funds-by-expense tbody').append('tr')
    tr.append('td').html('<a href="' + fund.url + '">' + fund.name + '</a>');
    tr.append('td').attr("style", "text-align: center").html(fund.share);
    tr.append('td').attr("style", "text-align: center").html(fund.expense);
  });

  nv.addGraph(newChart(allData.sort(function(a, b) {
    return d3.descending(a.expense, b.expense); }), '#chart svg', true));

</script>
