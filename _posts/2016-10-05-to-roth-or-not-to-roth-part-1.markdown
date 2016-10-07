---
layout: post
title: "To Roth or Not to Roth?  - Part 1"
date: 2016-10-05T14:44:54-06:00
tags: [investing, spending, other]
image: /images/testing.jpg
abstract: >
  There is much conflicting advice on whether to use Roth over Traditional in an
  investment portfolio.  This post explores a simple way on how to think about
  whether you should use the Roth option in your 401k/IRA/403b investments and
  gives some coarse guidelines on how much to allocate to each.
---
Most often when you see an article discussing whether to choose a Roth
over a Traditional option (401k/IRA/403b), the decision is stated as a comparison
between current and future tax rates.  While that's mostly correct advice,
it fails to recognize that future withdrawals tend to occur across *multiple*
tax brackets while current contributions tend to be in a single tax bracket.
I first became aware of the concept of filling in lower tax brackets from an
[excellent piece written by The Finance Buff](https://thefinancebuff.com/case-against-roth-401k.html).

## Basics of Roth vs Traditional

Before going on, let's discuss the basic differences between the Roth and Traditional
options.  The most important difference between the 2 options is when you are taxed.
Roth options are taxed now in that you fund them with after-tax dollars and you are not
taxed again when you withdrawal the funds.  Traditional options
are taxed later, so you deduct your contributions from your taxes now and pay
income taxes later when you make withdrawals.

If you want to maximize how much money you keep, the basic tradeoff becomes
one of shifting the taxes to the point in time when you have the lower tax rate.

When the tax rates are equal, then I lean towards using the Roth option primarily
because Roth provide a more flexibility since they don't require you
to withdraw funds at a certain age.  Roths also have favorable treatment in
estate planning because heirs won't be required to pay taxes on them.

## The Tradeoff

When deciding how much money to allocate to Roth, the basic rule is to allocate
funds to Roth that will be taxed at the same rate or higher in
the future.  Conversely, all funds that will fall into lower tax brackets in the
future should be allocated to Traditional option now.  
This last part is what most people forget to consider.
Just because you may be in the same or even higher tax brackets
in the future does NOT mean that some of the funds won't be taxed at a lower rate.

## Filling Up The Tax Brackets

Remember, when you make a contribution to a Traditional IRA/401k/403b today,
in most cases all of that contribution will be in your current tax bracket.
Sometimes you might cross over to the next lower tax-bracket when making a
contribution.  For example, if you are just barely in the
25% tax then the first part of your deduction would be in the 25% bracket and
the remainder would be in the 15% bracket.

But in the future, when you start making withdrawals from your Traditional IRA,
your withdrawals start filling in the tax brackets from the bottom up.
And, if you have no other sources of income, the first part of your withdrawal
may not be taxed at all because of the standard deduction and personal exemption.

<picture of filling up tax brackets?>

In 2016, for a married couple filing jointly, the personal exemption plus standard
deduction is $20,700 so that amount is taxed at 0%.  Then the 10% bracket swallows up
the next $18,550 of income, and the 15% bracket gets the next $56,750, and so on.

Of course, most people will have other sources of income, and we will consider that
case too.  But the key point is that future withdrawals fill in tax
brackets from the bottom up before reaching today's marginal tax bracket.

So the goal of an investor should be to **plan for today's Traditional contributions
to fill up tomorrow's lower tax brackets, then the invest the remainder in the Roth
option**.  That sounds easy on the surface, but the hard part is figuring out how
to translate that statement to real-life numbers.

## Saving within a Single Tax Bracket

Let's start by looking at a typical example where somebody has all of their
savings occur within a single marginal tax bracket.
Consider a married couple that makes a steady income of $120,000 and saves
$16,000 to their retirement plans.  If that money is saved in a Traditional
retirement plan then they would have a gross taxable income (AGI) of $104,000.
With the standard deduction, the low-end the 25% tax bracket is at $96,000
so the $104,000 puts them $8,000 above the threshold of the 25% tax bracket.

<picture with 120-16, and 25% tax bracket>

Let's further assume that they are saving all they can afford to and that the
$104,000 of income covers their current AND future day-to-day expenses.  This is
a bit of a stretch, but I would argue that most people's spending habits don't
change all that much when they transition into retirement.  You will probably spending
more in some areas in less in others but basically your spending profile won'- [ ]
change by a drastic amount.
Mostly I'm just trying to get a baseline equation so stick with me for now.
If that $104,000 of income represents what they need in the future (albeit in
today's dollars),
that suggests that in the future they would be roughly $8000 into the 25%
tax bracket.  In the extreme case where this couple has no other sources of
retirement income, that would mean they would need about 96/104 (92%) of their
withdrawals would occur in tax brackets below 25% and the remaining 8/104 (8%)
would come out in the 25% tax bracket.

If you knew that your future funds would come out in the same tax bracket, then
those funds might as well go into a Roth account today.  So in this example,
the couple could contribute up to 8% to their roth.  Mathematically,

    percent_to_roth = (livable_income - tax_threshold) / livable_income

Assigning variables,

    L = livable_income = current_income - max_savings
    T = tax_threshold

    percent_to_roth = (L - T) / L

## Other Income sources

The one assumption that is hard to ignore above is that the couple has no other
income sources in retirement.  Almost everybody has at least 1 other source of
income such as Social Security or pensions, and many people will have multiple
sources of income.  So let's adjust the math to account for that.

If the same couple expects to receive other income in the form of social security
that will provide $36,000/year, then their savings don't have to provide the full
$104,000 of income.  Their savings only have to fill in the gap between $36,000
and $104,000 which is $68,000.  So when they convert their nest egg to future
income, 8k/68k or about 12% of that savings is in the same tax bracket today when
they save it as in the future when they withdrawal it.  That suggests that they
could increase the amount they put into a Roth to 12%.

Modifying the first equation,

    percent_to_roth = (L - T) / (L - B)

where,

    B = base income from "other" sources

Knowing what your "other" sources of income in the future are can be a daunting
thing to figure out.  But if you're only expecting Social Security, I suggest
you start off with about 40 of your current income.  This is a **very crude**
estimate based on the idea that, on average, people receive around 40% of their
income back in social security.  But you really should take a look at your
social security (or equivalent) statement to get an idea of how much you'll
actually get.

At what point does all of your money go into a Roth?  Mathematically,
if `(I-T) > (I-B)` the equation goes above 100%.  This simplifies to the
case where `B > T` or where you "other" income sources equal or exceed
your current lower tax threshold.  Let's just modify the equation slightly
to account for this,

    percent_to_roth = min((I - T) / (I - B), 100%)

## Saving Across Multiple Tax Brackets

Income $120k
S = Save $30k
livable_income = $90k
T0 livable Bracket = 39,250
T1 livable Bracket = $96k
Base = $36k

    percent_to_roth = everything below tax Bracket * above_eq
                    = min((T1-I) / S, 100%) * min((I - T0) / (I - B), 100%)
      (96-90)/30 * (90-39.25)/(90-36) = 19%
      (90-39.25) / (90-40) = 91%


### Combined equation

    percent_to_roth =

Here's a plot of what the Roth percentage looks like versus income levels
for a given savings rate.

<div id="percentRoth-graph" class="chart">
    <svg></svg>
</div>

Savings Rate as Percentage of Income:

<div id="savings-slider" style="width: 300px;" align="center">
</div>

Base Income as Percentage of Current Income:

<div id="base-slider" style="width: 300px;" align="center">
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
  var salaryInc = 1000;
  var maxsalary = 500000;
  var deduction = 20700;
  var basePercent = 0.4;
  var savingsPercent = 0.12;

  var taxLevels = [0, deduction, 18550+deduction, 75300+deduction,
    151900+deduction, 231450 + deduction, 413350+deduction, 466950 + deduction, maxsalary*2]

  var percentRoth6XY = [];
  var percentRoth12XY = [];
  var percentRoth24XY = [];

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
        Math.min((x - taxLevels[tax0]) / (x - base), 1.0);

      // max allowed with catchup
      if (savings > 24000) {
        percent = percent*savings / 24000;
        percent = Math.min(percent, 1.0);
      }

      percentRoth.push([salary, percent]);
    }
    return percentRoth;
  }
  function updateData() {
    percentRoth6XY = rothPercent(savePercent);
    percentRoth12XY = rothPercent(0.12);
    percentRoth24XY = rothPercent(0.24);
    var data = [
    {
      name: '6% Savings Rate',
      xy: percentRoth6XY,
      color: '#aa2020'
    },
    {
      name: '12% Savings Rate',
      xy: percentRoth12XY,
      color: '#2020aa'
    },
    {
      name: '24% Savings Rate',
      xy: percentRoth24XY,
      color: '#20aa20'
    },
    ];
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

  d3.select('#savings-slider').call(d3.slider().axis(true).min(0).max(100).step(10).value(savePercent*100).on("slideend", function(evt, percent) {
    savePercent = percent / 100;
    updateData().call(rothChart);
  }));


  d3.select('#base-slider').call(d3.slider().axis(true).min(0).max(100).step(10).value(basePercent*100).on("slideend", function(evt, percent) {
    basePercent = percent / 100;
    updateData().call(rothChart);
  }));
</script>
