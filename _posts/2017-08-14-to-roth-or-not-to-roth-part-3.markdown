---
layout: post
title: "To Roth or Not to Roth - Part 3, Retiring at Age 70"
date: 2017-08-14
image: /images/shakespeare.png
abstract: >
  In this article, we continue to analyze how much money should
  be allocated to Roth vs non-Roth contributions in a retirement account.
  Specifically we look at the case of delaying taking distributions until age
  70 which corresponds to the age when distributions are required.
---


## Retiring at 70

Age 70 is the focal point of this article because it's the age (technically 70.5)
where you must begin taking distributions from your Traditional accounts in the
form of required minimum distributions (RMDs).  It's also the latest age (and
possibly the optimal age) to which you can delay taking social security.

In order to figure out the maximum Traditional portfolio value at age 70,
we need to figure out what portfolio value will generate the amount of income
that fills in the lowest tax brackets during retirement.
Combining that future income level with
the minimum withdrawal rate will allow us to calculate what the portfolio size
needs to be at age 70.

![age-70 bands](/images/roth_or_not_3-3_bands.png)

## Starting Simple

To keep things simple, let's start with the idea of just filling in the 0%
tax brackets in the future.  Just about everybody would benefit from deferring
taxes into a future time when the funds are taxed at 0% (untaxed) so this
simple case applies to most people.

Technically there isn't a 0% tax bracket but rather income that is exempted
from taxes via the deductions and personal exemptions.
This is further complicated by the [effects of taxes on social security](/how-social-security-messes-with-your-tax-brackets/)
so, for now, let's just assume that the first $20k of income for a married couple
($10k for singles) is not taxed.
If that's the case, then the goal would be make sure your
Traditional IRA/401k/403b generates no more than $20k of income ($10k single)
at age 70 and beyond.

Furthermore, the government requires that you start taking distributions from
your tax-deferred accounts in the year you hit age 70.5. In that first year,
you are required to distribute at least 3.65% (`portfolio_value/27.4`)
of your tax-deferred portfolio as income.[^1]
As such, the amount that must be taken in that first year dictates how big your
portfolio could be before you must start taking income that creeps into higher
tax brackets.

[^1]: Technically, if your birthday is between July and December then you can begin RMDs in the year in which you turn 71 which has a divisor of 26.5 instead of 27.4.  For simplicity, this article only uses the 27.4 number but you may want to substitute 26.5 for your own calculations if you were born in the 2nd half of the year.

## Simple example

Let's use some real numbers to get an idea of what we're talking about.
If you want to make sure your future portfolio (age 70.5) generates no more
than $20k of income, then the upper limit on your portfolio value at that age
is determined by

    portfolio_income = portfolio_at_70 / 27.4 < $20k

So it's a simple case to solve for the portfolio value

    portfolio_at_70 < $20k * 27.4 = $548k.

So finally we have a number, $548k for a married couple ($274k for a single).
It's a number with lots of assumptions and what-ifs
but it's gives you an idea of about how much to put into your
tax-deferred accounts under those simple assumptions.

The more general version of this equation is to use the income level, in
the future, that is taxed at or below your current tax rate.  Determining
that income threshold is more of an art than a science since future tax
brackets are somewhat unknowable.

<div markdown="1" class="highlight">
    portfolio_at_70 < income_threshold * 27.4
</div>

If you were born in the 2nd half of the year, replace 27.4 with 26.5 in the above
equation.

## Back to the Future

Having a future number or goal is nice, but in order to be useful, you need
to take into account your current situation in order to determine how much you
should contribute each year going forward in order for your non-Roth accounts
to stay at or below that number.
For example, if you are now aged 45 and expect to work until age 70,
then you have 25 years of appreciation in your portfolio that you want to keep
at or below $548k.  How does that translate to this-year's contribution amount?

Let's break this down.  First, while the target amount is in today's dollars,
you should expect some amount of appreciation in your portfolio after
inflation.  For example, if you expect your portfolio to earn 6% and inflation
to be 2% over the next 25 years, we could calculate what portfolio value today
would grow to $548k as,

<div markdown="1" class="highlight">
    portfolio_target = portfolio_70 / (1 + net_return)^(70-age)
</div>

where,

    net_return = portfolio_return - inflation

So for that 45-year old in the example,

    portfolio_today = $548k / (1.04)^25
                    = $205k

What does this mean?  If that 45-year old has already managed to save $205k
in tax-deferred accounts which return 4% after inflation, then they may want to
consider going all Roth contributions from here on out.
Remember that this assumes they work until age 70 and only want to generate
$20k of income (in today's dollars) from the 401k/IRA portfolio.

## Today's Contributions

But what if our 45-year-old hasn't saved anything yet or only saved a smaller
amount?  Let's determine the upper limit on their tax-deferred contributions
going forward.

Since we are representing the portfolio in today's dollars, let's
calculate the contributions needed in terms of the portfolio's actual
value in today's dollars.

<div markdown="1" class="highlight">
    portfolio_shortfall = (portfolio_target - portfolio_today)
</div>

Simply put, we need an annual contribution going forward that is big enough to
fill that shortfall, so using the present-value calculation,

    contribution = PV(net_return,
                      70-current_age,
                      portfolio_shortfall)


The [present value calculation](https://en.wikipedia.org/wiki/Present_value)
represents what level of regular contribution
that are needed to produce the present value of `portfolio_shortfall`.

<div markdown="1" class="highlight">
    contribution = portfolio_shortfall * net_return ÷
                    (1 - (1+net_return)^(age-70))
</div>                    

Using our 45-year-old example, and assuming they have already saved $105k,
then the shortfall is $100k.  With a 4% return after inflation
they could contribute up to,

    contribution = $100k * 0.04 / (1 - 1.04^-25)
                 = $6401

So a contribution of $6401/year would get this theoretical person's portfolio
to the level that would produce $20k of income (in today's dollars) at age 70
using RMDs.
Any contributions above $6401 could go to a Roth account.

Likewise, if they are starting with zero savings, then the shortfall in today's
dollars is $205k which means they could contribute up to $13,122 to their
Traditional account every year to produce that same income in the future.

## Another Fun Interactive Plot

We now have a set of equations (highlighted) that help you determine the
contributions you should make until age 70.  But they are very sensitive to
the assumed rate of return.  Below is a plot the needed contribution amounts
as a function of the assumed rate of return.  Move the sliders around for
your age, inflation rate and future tax-deferred income target
to see how it looks for your situation.
For help on setting the future tax-deferred income target
take a look at the article about [how social security messes with your tax
brackets](/how-social-security-messes-with-your-tax-brackets/) and choose
a value that will be taxed below your current marginal tax rate (defaults to
$20k as a *crude* approximation of the 0% tax bracket for a married couple).

<div id="puppy" markdown="1">
  *If you are seeing a puppy image below, then you are missing out on the
  amazingly excellent interactive content on the site.
  Click on the puppy to open the article in a browser
  and see what you are missing.*

  [![puppy](http://www.randomdoggiegenerator.com/randomdoggie.php)](.)
</div>

<div id="percentRoth-graph" class="chart">
    <svg></svg>
</div>

Current Age (<span class="current-age"/>):

<div id="age-slider" class="slider" align="center">
</div>

Inflation Rate (<span class="inflation-rate"/>):

<div id="inflation-slider" class="slider" align="center">
</div>

Future Tax-Deferred Income Target in Today's Dollars (<span class="income-threshold"/>):

<div id="threshold-slider" class="slider" align="center">
</div>


<style>
  .chart {
    clear: both;
  }
  .chart, svg {
    height: 360px;
  }
  .slider {
    width: 90%;
  }
</style>

<script>
  d3.select('#puppy').remove();

  var age = 45;
  var portfolio = 100000;
  var threshold = 20000;
  var inflationRate = 0.025;

  var returnInc = 0.001;
  var maxReturn = 0.121;
  var maxContribution = threshold;
  var portfolioIncr = 10000;
  var maxThreshold = 100000;
  var thresholdIncr = 1000;
  var maxPortfolio = 540000;
  var minPortfolio = 100000;

  function contributionAmount(rate) {
    maxPortfolio = portfolioIncr * Math.ceil(threshold * 27.4 / portfolioIncr);
    maxPortfolio = Math.max(maxPortfolio, minPortfolio);
    var contributions = [];
    var portfolioAt70 = threshold * 27.4;
    var portfolioTicks = Array.from({length: 1+maxPortfolio/portfolioIncr}, (e, k) => k*portfolioIncr);
    contributions = portfolioTicks.map(
      function(portfolio) {
        var netReturn = rate - inflationRate;
        var yearsLeft = 70 - age;
        var appreciation = Math.pow(1+netReturn, yearsLeft);
        var portfolioTarget = portfolioAt70 / appreciation;
        var shortfall = portfolioTarget - portfolio;
        var contribution = (appreciation != 1) ?
          shortfall * netReturn * appreciation / (appreciation-1) :
          shortfall / yearsLeft;
        contribution = Math.max(contribution, 0);
        return [portfolio, contribution];
      });
    maxContribution = Math.max(maxContribution, 1000*Math.ceil(contributions[0][1]/1000));
    return contributions;
  }

  function updateData() {
    maxContribution = 0;
    var data = [
    {
      name: '4% return',
      xy: contributionAmount(0.04),
      color: '#aaaa20'
    },
    {
      name: '6% return',
      xy: contributionAmount(0.06),
      color: '#aa2020'
    },
    {
      name: '8% return',
      xy: contributionAmount(0.08),
      color: '#20aa20'
    },
    {
      name: '10% return',
      xy: contributionAmount(0.10),
      color: '#2020aa'
    },
    ];
    if (typeof theChart !== 'undefined') {
      theChart.xDomain([0.00, maxPortfolio]);
      theChart.yDomain([0, maxContribution]);
    }

    d3.selectAll(".current-age").text('' + age);
    d3.selectAll(".inflation-rate").text('' + Math.round(inflationRate*1000)/10 + '%');
    d3.selectAll(".portfolio-value").text(d3.format('$,f')(portfolio));
    d3.selectAll(".income-threshold").text('$' + threshold);

    return d3.select('#percentRoth-graph svg').datum(chartifyData(data));
  }
  var theData = updateData();

  function newChart(chartData, interactive) {

    var aChart = nv.models.lineChart()
                  .interactive(interactive)
                  .useInteractiveGuideline(interactive)
                  .showLegend(true)
                  .showYAxis(true)
                  .showXAxis(true);

    aChart.xAxis
        .axisLabel('Current Tax-Deferred Portfolio Value')
        .tickFormat(d3.format('$,f'))
        .showMaxMin(false);

    aChart.yAxis     //Chart y-axis settings
        .axisLabel('Annual Tax-Deferred Contribution')
        .tickFormat(d3.format('$,f'))
        .showMaxMin(false);

    aChart.xDomain([0.00, maxPortfolio]);
    aChart.yDomain([0, maxContribution]);

    chartData.call(aChart);

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

  theChart = newChart(theData, true);
  nv.addGraph(theChart);

  d3.select('#inflation-slider').call(d3.slider().axis(d3.svg.axis().ticks(6)).min(0).max(5).step(0.1).value(inflationRate*100).on("slide", function(evt, rate) {
    inflationRate = rate / 100;
    updateData().call(theChart);
  }));
  d3.select('#age-slider').call(d3.slider().axis(d3.svg.axis().ticks(11)).min(19).max(69).step(1).value(age).on("slide", function(evt, newAge) {
    age = newAge;
    updateData().call(theChart);
  }));
  d3.select('#threshold-slider').call(d3.slider().axis(d3.svg.axis().ticks(11)).min(thresholdIncr).max(maxThreshold).step(thresholdIncr).value(threshold).on("slide", function(evt, newValue) {
    threshold = newValue;
    updateData().call(theChart);
  }));


</script>

## When You Assume

Beware of the assumptions made in this article.  First and foremost, figuring
out what future tax brackets will look like is anybody's guess.  So determining
your how much income to generate in the future is a guessing game.
I suggest erring on the conservative side and using the current 0% tax bracket
(deductions and exemptions) as a starting point.

The assumed rate of return is also tricky.  If you use this article to set
your contribution amount, then do so knowing that things will change every year.
So make sure you revisit your assumptions every year with updated portfolio
values.

There are many ways you could generate income in the future.
Taking RMDs as suggested in this article is just one method for taking income
from your portfolio.
Another possibility is buying a single premium income annuity (SPIA) which
guarantees lifetime income.
An annuity would likely return a rate much higher than 3.65% (over 5%) so if
you convert your Traditional account to an annuity at ge 70, you could have
higher income that you would with RMDs.  That could suggest lower contributions
than calculated by this article.

Finally, this article is meant to provide a framework for calculating the limit
on Traditional (tax-deferred) contributions if you work until age 70.  
That doesn't mean you shouldn't save more.
On the contrary, save as much as you can but put extra contributions
into a Roth account if possible.
And if you don't want to work until age 70, forthcoming articles in this series
will discuss how to calculate your contributions when retiring before age 70.
