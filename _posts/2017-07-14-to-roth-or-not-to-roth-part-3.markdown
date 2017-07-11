---
layout: post
title: "To Roth or Not to Roth - Part 3, Retiring at Age 70"
date: 2017-07-14
image: /images/shakespeare.png
abstract: >
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

![picture of age-70 tax brackets]()

## Starting Simple

To keep things simple, let's start with the idea of just filling in the 0%
tax brackets in the future.  Just about everybody would benefit from deferring
taxes into a future time when the funds are taxed at 0% (untaxed) so this
simple case applies to almost everybody.

Technically there isn't a 0% tax bracket but rather income that is exempted
from taxes via the deductions and personal exemptions.
This is further complicated by the [effects of taxes on social security](/how-social-security-messes-with-your-tax-brackets/)
so, for now, let's just assume that the first $20k of income for a married couple
($10k for singles) is not taxed.
If that's the case, then the goal would be make sure your
Traditional IRA/401k/403b generates no more than $20k of income ($10k single)
at age 70 and beyond.

Furthermore, the government requires that you start taking distributions from
your tax-deferred accounts at age 70.5. In that first year, you are required
to distribute at least 3.65% (`portfolio_value/27.4`) of your tax-deferred
portfolio as income.
As such, the amount that must be taken in that first year dictates big your
portfolio could be before you must start taking income that creeps into higher
tax brackets.

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
brackets are unknowable.

<div markdown="1" class="highlight">
    portfolio_at_70 < income_threshold * 27.4
</div>

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
    portfolio_today = portfolio_70 / (1 + net_return)^(70-age)
</div>

where,

    net_return = portfolio_return - inflation

So for that 45-year old in the example,

    portfolio_today = $548k / (1.04)^25
                    = $205k

What does this mean?  If that 45-year old has already managed to save $205k
in tax-deferred accounts which return 4% after inflation, then they may want to
consider going all Roth contributions from here on out.
Be reminded that this assumes they work until age 70 and only want to generate
$20k of income (in today's dollars).

## Today's Contributions

But what if our 45-year-old hasn't saved anything yet or only saved a smaller
amount?  Let's determine the upper limit on their tax-deferred contributions
going forward.

Since we are representing the portfolio in today's dollars, let's
calculate the contributions needed in terms of the portfolio's actual
value in today's dollars.

<div markdown="1" class="highlight">
    portfolio_shortfall = (portfolio_70 - portfolio_current)
</div>

Simply put, we need an annual contribution that is big enough to fill
that shortfall, so using the present-value calculation,

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
to the level that would produce $20k of income (in today's dollars) at age 70.
Any contributions above $6401 could go to a Roth account.

If they are starting with zero savings, then the shortfall in today's dollars
is $205k which means they could contribute up to $13,122 to their
Traditional account every year to produce that same income in the future.

## Another Fun Interactive Plot

We now have a set of equations (highlighted) that help you determine the
contributions you should make until age 70.  But they are very sensitive to
the assumed rate of return.  Below is a plot the needed contribution amounts
as a function of the assumed rate of return.  Move the sliders around for
current your portfolio value, age, inflation rate and income threshold to
see how it looks for your situation.  For help on setting your income threshold
take a look at the article about [how social security messes with your tax
brackets](/how-social-security-messes-with-your-tax-brackets/).

<div id="puppy" markdown="1">
  *If you are seeing a puppy image below, then you are missing out on the
  amazingly excellent interactive content on the site.
  Click on the puppy to go to the website post in a browser
  to see what you are missing.*

  [![puppy](http://www.randomdoggiegenerator.com/randomdoggie.php)](.)
</div>

<div id="percentRoth-graph" class="chart">
    <svg></svg>
</div>

Savings Rate as Percentage of Income (<span class="savings-rate"/>):

<div id="savings-slider" class="slider" align="center">
</div>

Base Income as Percentage of Income (<span class="base-percent"/>):

<div id="base-slider" class="slider" align="center">
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

  var salaryInc = 1000;
  var maxsalary = 500000;
  var deduction = 20700;
  var basePercent = 0.4;
  var savePercent = 0.12;

  var taxLevels = [0, deduction, 18550+deduction, 75300+deduction,
    151900+deduction, 231450 + deduction, 413350+deduction, 466950 + deduction, maxsalary*2]
  var taxBrackets = [0, 0.1, 0.15, 0.25, 0.28, 0.33, 0.35, 0.396]

  function taxBracket(income) {
    var i = 1;
    while (income >= taxLevels[i]) {
      i++
    }
    return taxBrackets[i-1];
  }

  function rothPercent(savePercent) {
    var percentRoth = [];
    tax0 = 0;
    tax1 = 1;
    for(var salary = salaryInc; salary <= maxsalary; salary += salaryInc) {
      var savings = salary*savePercent;
      var x = salary - savings;
      var base = salary*basePercent;
      var savings = salary*savePercent;
      if (x > taxLevels[tax1]) {
        tax0++;
        tax1++;
      }
      percent = Math.min((taxLevels[tax1]-x) / savings, 1.0) *
        (base < x ? Math.min((x - taxLevels[tax0]) / (x - base), 1.0) : 1.0);

      // max allowed with catchup
      if (savings > 48000) {
        percent = Math.min(percent*savings / 48000, 1.0);
      }

      percentRoth.push([salary, percent]);
    }
    return percentRoth;
  }

  function updateData() {
    var percentRothXY = rothPercent(savePercent);
    var data = [
    {
      name: 'Percent to Roth',
      xy: percentRothXY,
      color: '#aa2020'
    },
    ];
    d3.selectAll(".savings-rate").text('' + Math.round(savePercent*100) + '%')
    d3.selectAll(".base-percent").text('' + Math.round(basePercent*100) + '%')
    return d3.select('#percentRoth-graph svg').datum(chartifyData(data));
  }
  var percentRothData = updateData();

  function newChart(chartData, interactive) {

    var aChart = nv.models.lineChart()
                  .interactive(interactive)
                  .useInteractiveGuideline(interactive)
                  .showLegend(true)
                  .showYAxis(true)
                  .showXAxis(true);

    aChart.xAxis
        .axisLabel('Total Income ($)')
        .tickFormat(d3.format('$f'))
        .showMaxMin(false);
    aChart.xAxis.scale(d3.scale.log());

    aChart.yAxis     //Chart y-axis settings
        .axisLabel('Percent of Qualified Savings to Roth')
        .tickFormat(d3.format('.0%'))
        .showMaxMin(false);

    aChart.xDomain([0.00, maxsalary]);
    aChart.yDomain([0, 1]);

    chartData.call(aChart);

    //Update the chart when window resizes.
    nv.utils.windowResize(function() {
      aChart.update();
    });

    aChart.interactiveLayer.tooltip.contentGenerator(function (d) {
      var income = d.value;
      var percentToRoth = d.series[0].value;
      var savings = income*savePercent;
      var maxQual = Math.min(48000, savings);

      var html = "Current Income: <b>" + d3.format("$f")(income) + "</b><br/>";
      html += "Tax Bracket: <b>" + d3.format(".3p")(taxBracket(income)) + "</b><br/>";
      html += "Future Base Income: <b>" + d3.format("$f")(income*basePercent) + "</b><br/>";
      html += "Savings Rate: <b>" + d3.format(".2p")(savePercent) + "</b><br/>";
      html += "Savings Amount: <b>" + d3.format("$f")(savings) + "</b><br/>";
      html += "Qualified Savings: <b>" + d3.format("$f")(maxQual) + "</b><br/>";
      html += "Percent to Roth: <b>" + d3.format(".2p")(percentToRoth) + "</b><br/>";
      html += "Amount to Roth: <b>" + d3.format("$f")(maxQual * percentToRoth) + "</b><br/>";

      return html;
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

  rothChart = newChart(percentRothData, true);
  nv.addGraph(rothChart);

  d3.select('#savings-slider').call(d3.slider().axis(d3.svg.axis().ticks(11)).min(1).max(99).step(1).value(savePercent*100).on("slide", function(evt, percent) {
    salaryInc = 3000;
    savePercent = percent / 100;
    updateData().call(rothChart);
  }).on("slideend", function(evt, percent) {
    salaryInc = 1000;
    savePercent = percent / 100;
    updateData().call(rothChart);
  }));


  d3.select('#base-slider').call(d3.slider().axis(d3.svg.axis().ticks(11)).min(0).max(100).step(1).value(basePercent*100).on("slide", function(evt, percent) {
    salaryInc = 3000;
    basePercent = percent / 100;
    updateData().call(rothChart);
  }).on("slideend", function(evt, percent) {
    salaryInc = 1000;
    basePercent = percent / 100;
    updateData().call(rothChart);
  }));
</script>

## When You Assume

Beware of the assumptions made in this article.  First and foremost, figuring
out what future tax brackets will look like is anybody's guess.  So determining
your how much income to generate in the future is a guessing game.  Personally
I suggest erring on the conservative side and using the 0% tax bracket as a
starting point.

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

## ----------------rewrite this stuff??-------------------

For example, the picture above depicts the case of filling in the tax brackets
below 15%, which would be the goal if your Traditional IRA contributions were
deducted from earnings in the 15% tax bracket.

There are multiple ways to generate income from a portfolio.  But if you
chose to do withdrawals, the IRS dictates what the required minimum distribution
(RMD) that must be taken so let's use that because it will put a lower limit
on the income (and an upper limit on portfolio size).  
The RMD for age 70 is 27.4 which corresponds to a withdrawal rate of 3.65%.

Using the numbers from the picture, if you want to keep your income below $39k,
then multiply that income by 27.4 to determine the target portfolio value for
age 70.  That means that you want your Traditional IRA portfolio to be less
than or equal to $1,069k when you hit age 70.  That million dollar goal seems
like a lot (and it is!) but it's very much within reach over a long-term
investing horizon.

So, if you currently are 50 years old, you want to project your
investment 20 years so that you hit that portfolio target at age 70,
in today's dollars, when you are 70 years old.
Doing the calculations in today's dollars is
a little easier so use an inflation-adjusted estimate of your portfolio returns
to project how much you will need in today's dollar.  For example, if you project
a return of 7% and inflation of 3% over the next 20 years, then the inflation-adjusted
return is 4%.  That means that in today's dollars the portfolio value would be,

    portfolio_today = $1069k / (1.04)^20 = $488k

In other words, $488k today could grow to $1069k in today's dollars over
the next 20 years.  So if you are 50 and already have $488k in your portfolio now,
then it would generate around $39k (in today's dollars) when you are 70 years
old.

More generally, the equation to figure out how much money you need in today's
dollars to reach a particular income stream at age 70 is,

    portfolio_needed_today = income_70 * 27.4 / (1+return-inflation)^(70-current_age)

## Contributions until age 70

The above equation is a conservative estimate of how big your portfolio needs
to be to generate a particular income when you're 70 years old.  But the more
interesting question to ask is "how much do you need to contribute to your
current portfolio to achieve that income level?".  The answer to that question
may also inform the decision of how much you should be putting into your
Traditional IRA going forward.

Since we are translating the portfolio values to today's dollars, let's
calculate the contributions needed in terms of the portfolio's actual current
value.

    portfolio_shortfall = (portfolio_needed - portfolio_current)

Simply put, we need an annual contribution that is big enough to fill
that shortfall,

    contribution_needed = PV(return-inflation,
                             70-current_age,
                             portfolio_shortfall)

The equation for this present value calculation represents what level of
regular contribution is needed to equal the present value of `portfolio_shortfall`.

    contribution_needed =
      portfolio_shortfall * net_return / (1 - (1+net_return)^(current_age-70))

where,

    net_return = rate-inflation

## Currently 50-years old

Let's go back to the previous example.  Let's say you are 50 years old and
calculate that you will need $488k in today's dollars.  If you have nothing
saved, then your shortfall is the total amount of $488k.  Using an estimated
return of 7% with inflation at 3%,

    contribution_needed = $488k * .04 / (1-1.04^-20)
                        = $35.9k

Or almost $36k/year, into your Traditional 401k/IRA.  But if you have already
saved $244k (half of the needed amount), then you should contribute up to
$18k/year to your Traditional account, and contributions *above* $18k should
go to your Roth accounts in this hypothetical example.

## Currently 25-years old, no savings

What about somebody who is just starting to save at age 25?  
How much should they save?
The big variable in this question will be what their future tax brackets will
look like which could change a lot in 45 years.  Just so that we can compare to
the 50-year old who starts saving later in life, let's assuming the same target
of $39k/year in today's dollars.  That would suggest a 'shortfall' of,

    $39k * 27.4 / (1.04)^45 = $183k

Which would suggest contributions of

    contribution_needed = $183k * .04 / (1-1.04^-45)
                        = $8,832

This shows the value of starting early.  Saving about $9k/year from age 25 until age 70
generates about the same future income as saving about $36k/year starting at age 50.

But it also suggests that when you start saving from a younger age, then you
might want to switch over from Traditional to Roth contributions at a lower cutoff.

## Plot Maximum Traditional Contribution vs. X?

What are the variables...
 * current portfolio
 * current age
 * retirement Age
 * other income sources
