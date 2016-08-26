---
layout: post
title: "Radioactive Half-Life of Expenses"
date: 2016-08-25
tags: [investing, spending, other]
image: /images/radioactive.png
abstract: >
  Expenses eat away at your portfolio value over time, much like the decay of a
  radioactive isotope.
---

In the world of science, the term "half-life" is used to describe ["the time required
for a quantity to reduce to half its initial value"](https://en.wikipedia.org/wiki/Half-life).
One common application of this concept is for radioactive decay and the half-life
is a useful measure in science to characterize how quickly something will decay over
time.  Probably the most common application of this concept is used in [carbon dating](https://en.wikipedia.org/wiki/Radiocarbon_dating) which allows scientists
to fairly accurately estimate the age of objects containing radiocarbon.

It occurred to me that portfolio expenses can have a similar effect as radioactive
decay.  Namely, the higher the expense, the faster your portfolio will reduce to
half of the value it would have achieved without the expense.  Let's take a look
at the math of compounding returns to see how quickly a portfolio's value decays
with expenses.

## Lump-Sum Investment

Consider the case of investing a lump-sum amount.  The compounded return
of the investment with a rate of return `r`, after `N` years is

    final_value = initial_value * (1 + r)^N

So, without any expenses eating into the return, the ratio of the final_value to
the initial value represents how much your portfolio would grow without expenses

    growth_without_expenses = final_value / initial_value
                            = (1 + r)^N

Now consider a expense or expense of `e` being subtracted off of that return every year.

    final_value = initial_value * [(1 + r)(1 - e)]^N

Now the growth is smaller,

    growth_with_expenses = final_value / initial_value
                         = [(1 + r)(1 - e)]^N

And to compute the half-life of these expenses, we want to know when the the growth
with expenses is half of the growth without those expenses.

    growth_with_expenses / growth_without_expenses = 1/2

or,

    [(1 + r)(1 - e)]^N / (1 + r)^N = 0.5

Solving for `N` gives us the half-life as a function of expenses,

    N = log(0.5) / log(1-e)

That's it!  We now have an equation that directly computes how many years it takes
for a given expense to cut your total portfolio in half.  Notice that for a lump-sum
investment, it doesn't matter how big your return is, it only matters what
the expense is.

In the following plot I show the half-life as well as the 3/4-life and 7/8-life.
Losing half of your portfolio is terrible, but even losing a quarter or eighth
can be painful, especially when we're talking about a portfolio that might
need to grow to over $1 million to support a comfortable retirement.  Do you want
to pay $125,000 (1/8 of $1M) or more in expenses over the course of your investment life?

<div id="halfLife-graph" class="chart">
    <svg></svg>
</div>

<style>
  .chart {
    clear: both;
  }
  .chart, svg {
    height: 360px;
  }
</style>

<script>
  var expenseInc = 0.0005;
  var maxExpense = 0.03;
  var halfLifeXY = [];
  var quarterLifeXY = [];
  var eighthLifeXY = [];
  for(var w = expenseInc; w <= maxExpense; w += expenseInc) {
    w = Math.round(w*10000)/10000;
    halfLifeXY.push([w, Math.log(0.5)/Math.log(1-w)]);
    quarterLifeXY.push([w, Math.log(0.75)/Math.log(1-w)]);
    eighthLifeXY.push([w, Math.log(0.875)/Math.log(1-w)]);
  }

  var halfLifeData = [
  {
    name: 'Half-Life',
    xy: halfLifeXY,
    color: '#aa2020'
  },
  {
    name: '3/4-Life',
    xy: quarterLifeXY,
    color: '#2020aa'
  },
  {
    name: '7/8-Life',
    xy: eighthLifeXY,
    color: '#20aa20'
  },
  ];

  function newChart(data, selector, interactive) {

    var aChart = nv.models.lineChart()
                  .interactive(interactive)
                  .useInteractiveGuideline(interactive)
                  .showLegend(true)
                  .showYAxis(true)
                  .showXAxis(true);

    aChart.xAxis
        .axisLabel('Expense (%)')
        .tickFormat(d3.format('.3p'))
        .showMaxMin(false);

    aChart.yAxis     //Chart y-axis settings
        .axisLabel('Half-Life (years)')
        .tickFormat(d3.format('.1f'))
        .showMaxMin(false);

    aChart.xDomain([0.00, maxExpense]);
    aChart.yDomain([0, 105]);

    var chartData = chartifyData(data);

    d3.select(selector)
        .datum(chartData)
        .call(aChart);

    //Update the chart when window resizes.
    nv.utils.windowResize(function() {
      aChart.update();
    });

    return aChart;
  }

  function chartifyData(data) {
    //Line chart data should be sent as an array of series objects.
    return data.map(function(obj) {
      return {
        values: transformXY(obj.xy),
        key: obj.name,
        color: obj.color,
        disabled: obj.disabled ? true : false
      }
    });
  }

  function transformXY(data) {
    var result = [];
    for (i = 0; i < data.length; i++) {
      var point = data[i];
      result.push({x: point[0], y: point[1]});
    }
    return result;
  }

  nv.addGraph(newChart(halfLifeData, '#halfLife-graph svg', true));

</script>

Let me walk you through some key points from the graph above.

  * You want your half-life number to be very large which means you want to be as
  close to zero expenses as possible.
  * [According to Morningstar](http://www.forbes.com/sites/rickferri/2013/05/27/the-heavy-toll-of-investment-expenses/#3875f0443ebc), in 2013 the "typical" managed fund of stocks has a expense of 1.2%.  Such a expense would eat up
  half of your gains in 57 years which seems like a long time.  But you would lose
  an eighth of your portfolio value in just 11 years.
  * It gets even worse if you consider the "all-in" costs of actively managed funds.
  [John Bogle suggests](http://www.cfapubs.org/doi/sum/10.2469/faj.v70.n1.1) that there are
  many unaccounted costs in an actively managed fund that can increase the actual
  "all-in" expense to something more like 2.21%.  The main unaccounted for costs are
  "transaction costs, cash drag, and sales loads".  These extra costs are hard to
  quantify but they effectively can reduce your expected return beyond the published
  expenses.
  In any case, if you believe Bogle's hypothesis, then an actively managed fund with
  a 2.2% expense has a half-life of only 31 years and a 7/8-life of just 6 years!
  That means that you could be losing as much as an eighth of your portfolio every
  6 years if you invest in actively-managed funds.
  * Contrast this with a leading low-cost index fund from Vanguard like the [Total Stock Market Index](https://personal.vanguard.com/us/funds/snapshot?FundId=0585&FundIntExt=INT) fund (VTSAX)
  which has an expense ratio of 0.05%.  This expense would take 1385 years to lose half
  it's value or 267 years to lose an eighth.  To put it another way, after 40 years
  an expense of 0.05% would only take 2.0% off of your portfolio value which is less
  than some funds would cost in a single year.

By now, just about everybody knows that low-cost funds are a great way to invest and maximize
returns.
Putting these expenses in terms of how they eat away at your portfolio can be eye-opening.
