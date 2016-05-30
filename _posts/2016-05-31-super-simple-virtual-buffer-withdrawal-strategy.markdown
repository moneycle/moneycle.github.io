---
layout: post
title: "Super-Simple Virtual-Buffer Withdrawal Strategy"
date: 2016-05-31
tags: [investing, spending, other]
image: /images/einstein.jpg
abstract: >
  While the 30-30 Withdrawal Strategy is a pretty simple way to withdraw your
  money from your portfolio at a rate of 3.33%, it does require a little bit
  of bookkeeping and is limited to a single withdrawal rate.  In this article,
  I look at simplifying that withdrawal strategy even further.
---
While the [30-30 Withdrawal Strategy](/the-30-30-withdrawal-strategy/) is a
nice clean method for withdrawing money from your portfolio,
it does require you to keep track of a buffer which
drives the calculation for your withdrawal amount every year.
I felt like there should be a way to calculate the withdrawal in terms of only
your current withdrawal amount and your current portfolio value thus alleviating
the need to keep track of a separate spending buffer.
After playing with the math, it turns out there is a pretty simple formula
that achieves this goal.

## A Bit of Math

The amount that is initially spent from your portfolio is determined directly
by multiplying your withdrawal rate by your portfolio value.  Using the same
variables as the [Safe Withdrawal Rates for Vampires](/safe-withdrawal-rates-for-vampires/)
article,

    W = Pw

where,

    W = annual withdrawal amount
    w = annual withdrawal rate
    P = portfolio value
    k = buffer size in years

And if we have a buffer of `k` years, then the total buffer size initially
is,

    initial buffer size = kW

After a year of spending from the buffer, it is reduced by the withdrawal amount,
`W`.  So we are left with,

     buffer after 1 year of spending = kW-W = W(k-1)

At this point, we add back an amount equal to the new portfolio value times the
withdrawal rate to arrive at the new buffer size,

     updated buffer value after 1 year = W(k-1) + Pw

And to compute the new withdrawal amount, we just divide this amount
by the size of the buffer in years (`k`),

    new annual withdrawal amount = W(k-1)/k + Pw/k

Because I prefer to think of my withdrawals as monthly, let's rewrite this
in terms of monthly withdrawals,

    new monthly withdrawal amount = (W/12)(k-1)/k + Pw/12k

Given that `k` and `w` are constant values, we now have a formula for computing
our new withdrawal amount from the current monthly withdrawal (`W/12`),
and the current portfolio value (`P`).

## Example Using 30-30 Numbers

Let's put some numbers to this to make it less abstract.  Start with a
portfolio of `P = $720,000` and go with the 30-30 Withdrawal Strategy numbers
for buffer size (`k = 2.5 years`), and withdrawal rate (`w = 3.33%`).
For these values, the initial monthly withdrawal is simply,

    Pw/12 = $720000*0.0333/12 = $2000/month

If you want, you can set aside your buffer of 2.5 years ($60,000) in a safe place.
But the beauty of this strategy is that you don't have to do so.  You can also
just assume that your buffer is fully invested within the bond portion of your
portfolio; it's up to you.  This is why I call it a "virtual" buffer because
you get the advantages the buffer gives you without having to keep track of it.

Now, let's assume a year has passed and it has been a good year and the portfolio
has gone up to $765,000.  Now your monthly withdrawal amount is computed as,

    (W/12)(k-1)/k + Pw/12k = $2000(1.5/2.5) + $765000*.03333/(12*2.5))
                           = $2000 * 0.6 + $765000/900
                           = $1200 + $850
                           = $2050

So even though the portfolio increased by 6.25% (`765000/720000`), the monthly
spending only went up 2.5% (`2050/2000`) due to the virtual 2.5-year buffering.

Also, look how simple the calculation is every year.  In this example, multiplying
your current income by 0.6, divide your portfolio by 900, and add those 2 numbers
together.  Pretty simple right?

## Making it Even Simpler

As easy as this calculation is, I couldn't help but noticing that dividing by
900 is a little awkward.  What if we changed the buffer size so that we ended
up dividing by 1000.  If we can divide by 1000 then the calculation can almost
be done in your head.  To state this mathematically, we want,

    12k/w = 1000

If the annual withdrawal rate is fixed, then we solve for the buffer size to get,

    k = 1000w/12

Substituting this back into our withdrawal equation,

    new monthly withdrawal amount = (W/12)(1-0.012/w) + P/1000

Revisiting the first example with a portfolio of $720,000 and a withdrawal
rate of 3.333%, the first year withdrawal is still $2000/monthly because the
withdrawal rate is the same.  After the first year with a new portfolio value
of $765,000, the new monthly withdrawal now becomes,

    (W/12)(1-0.012/w) + P/1000 = $2000(1-0.012/0.03333) + $765000/1000
                               = $2000 * 0.64 + $765000/1000
                               = $1280 + $765
                               = $2045

So, you can see that the slightly modified equation only decreased the income by
$5/month.  This decrease is due to a slightly larger buffer (2.778 years vs 2.5 years)
which means that the market gyrations are smoothed a little more than before.

## The Super-Simple Virtual-Buffer Withdrawal Formula

To summarize all the above math, in the first year of withdrawals, you withdrawal
from your portfolio by simply multiplying your portfolio value by your withdrawal
rate.

<div markdown="1" class="highlight">
    initial monthly withdrawal = Pw/12
</div>

Then, after each year you compute your new withdrawal amount with this
super-simple formula.

<div markdown="1" class="highlight">
    new monthly withdrawal = M * beta + P/1000
</div>

where,

    M = previous monthly withdrawal
    beta = monthly withdrawal multiplier = 1 - 1.2%/w
    w = annual withdrawal rate
    P = current portfolio value

The graph below shows the monthly withdrawal multiplier as a function of
annual withdrawal rate.  If you hover over the chart you will see other
information including a "Sample Allocation" which shows how you might need
to allocate more to stocks as your withdrawal rate goes up.

<div id="beta-graph" class="chart">
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
  var betaXY = [];
  for(var w = 0.012; w < 0.0451; w += 0.0001) {
    w = Math.round(w*10000)/10000;
    betaXY.push([w, 1-0.012/w]);
  }

  var betaData = [
    {
      name: 'Monthly Withdrawal Multiplier',
      xy: betaXY,
      color: '#2020aa'
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
        .axisLabel('Annual Withdrawal Rate')
        .tickFormat(d3.format('.3p'))
        .showMaxMin(false);

    aChart.yAxis     //Chart y-axis settings
        .axisLabel('Monthly Withdrawal Multiplier')
        .tickFormat(d3.format('.3f'))
        .showMaxMin(false);

    aChart.xDomain([0.012, 0.045]);
    aChart.yDomain([0, 0.8]);

    var inflation = 0.02;
    var stockRet = 0.08;
    var bondRet = 0.03;
    aChart.interactiveLayer.tooltip.contentGenerator(function (d) {
      var w = d.value;
      var beta = d.series[0].value;
      var k = 1000*w/12;
      var totalRet = (w + inflation)/(1-w*k);
      var stockPercent = Math.round(100*Math.min(1.0, (totalRet + bondRet*((k-1)*w-1))/(stockRet - bondRet)))/100;
      var bufferPercent = Math.round(100*Math.min(1-stockPercent, 2*w))/100;
      var bondPercent = Math.max(0, 1.0 - stockPercent - bufferPercent);

      var html = "Annual Withdrawal Rate: <b>" + d3.format(".3p")(w) + "</b><br/>";
      html += "Monthly Withdrawal Multiplier: <b>" + d3.format(".3f")(beta) + "</b><br/>";
      html += "Virtual Buffer Size: <b>" + d3.format(".2f")(k) + " years</b><br/>";

      html += "Sample Allocation:<br/>";
      html += "&nbsp;&nbsp;stocks: <b>" + d3.format("%")(stockPercent) + "</b><br/>";
      html += "&nbsp;&nbsp;bonds: <b>" + d3.format("%")(bondPercent) + "</b><br/>";
      html += "&nbsp;&nbsp;buffer: <b>" + d3.format("%")(bufferPercent) + "</b><br/>";
      return html;
    });

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
      result.push({x: point[0], y: point[1], stock: 0.99});
    }
    return result;
  }

  nv.addGraph(newChart(betaData, '#beta-graph svg', true));

</script>


## Sample Portfolios

Here are a few possible portfolio types you could choose from depending on your
risk tolerance.  The Step-By-Step section that follows walks through a simple example
using the "moderate" strategy numbers.

|-|-|-|-|
| | annual withdrawal rate | monthly withdrawal multiplier | virtual buffer size |
|-|:-:|:-:|:-:|
| conservative | 2.40% | 0.5 | 2.00 yrs |
| moderate | 3.00% | 0.6 | 2.50 yrs |
| moderately&nbsp;aggressive | 3.33% | 0.64 | 2.78 yrs |
| aggressive | 4.00% | 0.7 | 3.33 yrs |

## Step-By-Step

Implementing the Super-Simple Virtual-Buffer Withdrawal strategy is as follows:

1. Compute your initial monthly withdrawal from the equation `Pw/12`.
For example, with a $400,000 portfolio (`P`) and a 3% withdrawal rate (`w`),
your monthly withdrawal is,

    `$400,000*0.03/12 = $1000`

2. Withdrawal from the portfolio for a full year using the last computed value.

3. At the end of each year, compute your new monthly withdrawal rate using
the equation `M * beta + P/1000`.  For example,
with a 3% withdrawal rate (`w`), your beta multiplier is `1 - 1.2%/3% = 0.6`.
If your portfolio (`P`) has increased to $420,000 after the first year,
then your new withdrawal is,

    `$1000*0.6 + $420000/1000 = $600 + $420 = $1020`

3. Go back to step 2 and repeat.

## Nerd Alert

Some readers may have noticed that the formula for this withdrawal strategy
looks an awful lot like an [exponential smoothed average](https://en.wikipedia.org/wiki/Exponential_smoothing).
If we rewrite the withdrawal formula like this,

    M(t) = (1-alpha) * M(t-1) + alpha * Pw/12

where

    alpha = 1.2%/w

then you can see that it is indeed an exponential moving average of the
term `Pw/12`.  That term represents the annual withdrawal rate projected down
to the monthly level.

For exponential smoothed averages, a smaller `alpha` represents an average that has
a larger smoothing effect.  In the case of this withdrawal strategy,
the smaller `alpha` corresponds to larger withdrawal rates which means that larger
withdrawal rates will have larger smoothing effects.

## Parting Thoughts

Albert Einstein is quoted as saying that "Everything should be made as
simple as possible, but not simpler".  The super-simple virtual-buffer withdrawal
strategy is simple and requires no bookkeeping other than checking your portfolio
value once a year.  Is there a simpler strategy?  Yes, you could simply
take a constant value out without checking your portfolio balance.
But such a strategy would be risky since it ignores a declining portfolio balance.

The super-simple strategy also has flexibility which comes from the fact that
the buffer is "virtual".  Whether or not you keep an actual buffer is up to you.
Generally it's a good idea to keep a couple years or so of spending outside
of your investments so that you know it will be there when you need it.  But this
strategy doesn't require you do so, it's up to you.
