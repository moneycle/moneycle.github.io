---
layout: post
title: "To Roth or Not to Roth? - Part 1, The Ideal World"
date: 2016-10-19
tags: [investing, spending, other]
image: /images/shakespeare.png
abstract: >
  In the financial blog world there are conflicting opinions
  on whether to use a Roth over Traditional option in for qualified investments.  
  This post explores a simple way on how to think about
  whether you should use the Roth option in your 401k/403b/IRA investments and
  gives some insights on how much to allocate to each.
---

Most often when you see an article discussing whether to choose a Roth
over a Traditional option (401k/403b/IRA), the decision is stated as a comparison
between current and future tax rates.  While that's mostly correct advice,
it fails to recognize that future withdrawals tend to occur across *multiple*
tax brackets while current contributions tend to be in a single tax bracket.
I first became aware of the concept of filling in lower tax brackets from an
[excellent piece written by The Finance Buff](https://thefinancebuff.com/case-against-roth-401k.html).

In this first of two articles, I take a look at an ideal-world example that
explores the concept of how much should go towards a Roth versus a Traditional
option.  In the second article, I will take a look at some more real-world
cases that should give more concrete advice on how to determine how much to
contribute to each option.

## Basics of Roth vs Traditional

First, let's discuss the basic differences between the Roth and Traditional
options.  The most important difference between the two options is **when** you are taxed.
Roth options are taxed now in that you fund them with after-tax dollars and you are not
taxed again when you withdrawal the funds.  Traditional options
are taxed later, so you deduct your contributions from your taxes now and pay
income taxes later when you make withdrawals.

If you want to maximize how much money you keep, the basic tradeoff becomes
one of shifting the taxes to the point in time when you have the lower tax rate.

When the tax rates are equal now and in the future, then mathematically the amount
you end up with is identical after the taxes are accounted for.  However, in this
case I recommend using the Roth option primarily because the Roth has fewer
requirements on the distribution of funds.

## The Tradeoff

When deciding how much money to allocate to a Roth, the basic goal is to allocate
funds to the Roth that will be taxed at the same rate or higher in
the future.  Conversely, all funds that will fall into lower tax brackets in the
future should be allocated to the Traditional option now.
This last part is where most people fail to consider the whole picture.
Just because you may be in the same or even higher tax brackets
in the future does NOT mean that some of the funds won't be taxed at a lower rate.

## Filling Up The Tax Brackets

When you make a contribution to a Traditional IRA/401k/403b today,
in most cases all of that contribution will be in your current income tax bracket.
Sometimes you might also cross over to the next lower tax-bracket when making a
contribution if you are near a tax boundary when you begin your contributions.

But in the future, when you start making withdrawals from your Traditional IRA,
your withdrawals start filling in the tax brackets from the bottom up.
I like to visualize this as pouring money into the income "funnel" as depicted below:

<style>
  .center {
    text-align: center;
  }
  .funnel {
    float: left;
    margin: 0.4em 1.5em 0.8em 0em;
  }
</style>


<div markdown="1" class="center">
![Money Funnel](/images/roth_or_not-funnel.png)
</div>

In 2016, for a married couple filing jointly, the personal exemption plus standard
deduction is $20,700 so that amount is taxed at 0% (which I think of as the 0% tax
bracket).  Then the 10% bracket swallows up the next $18,550 of income, and the
15% bracket gets the next $56,750, and so on.  I have made the tax brackets to
appear as funnel-shaped because the brackets get bigger as income increases.

Of course, most people will have other sources of income filling in the lower
tax brackets, and we will consider that case too.
But the key point is that future withdrawals fill in tax
brackets from the bottom up before reaching today's marginal tax bracket.

So the goal of an investor should be to **plan for today's Traditional
contributions to fill up tomorrow's lower tax brackets**, then
**invest the remainder in the Roth option**.
That sounds easy on the surface, but the hard part is figuring out how
to translate that statement into actionable numbers.

## Saving within a Single Tax Bracket

<div markdown="1" class="funnel">
![Earn 120, Save 16](/images/roth_or_not-120-16.png)
</div>

Let's start by looking at a typical example where somebody has all of their
savings occur within a single marginal tax bracket.
Consider a married couple named Jon & Sally that makes a total income of $120,000
and saves a total of $16,000 to their retirement plans.  If that money
is saved in a Traditional retirement plan then they would have a
gross income (AGI) of $104,000.
With the standard deduction, the low-end of the 25% tax bracket occurs at $96,000
of gross income so the $104,000 puts them $8,000 above the lower threshold of
the 25% tax bracket.

Let's further assume that they are saving all they can afford to and that the
$104,000 of income represents their current AND future day-to-day expenses.  This is
a bit of a stretch, but I would argue that most people's spending habits don't
change all that much when they transition into retirement.  You will probably be
spending more in some areas in less in others but basically your spending
profile won't change by a drastic amount in retirement.
Mostly I'm just trying to get a baseline equation, so stick with me for now.
If that $104,000 of income represents what they need in the future (albeit in
today's dollars),
that suggests that in the future their "livable income" would be roughly $8000
into the 25% tax bracket.  In the extreme case where this couple has no other sources of
retirement income, that would mean they would need about 96k/104k (92%) of their
withdrawals to occur in tax brackets below 25% and the remaining 8k/104k (8%)
would come out in the 25% tax bracket.

If you knew that your future funds would come out in the same tax bracket, then
those funds might as well go into a Roth account today.  So in this example,
the couple could contribute 8% to their Roth.  Mathematically,

    percent_to_roth = (livable_income - tax_threshold) / livable_income

Assigning variables,

    L = livable_income = current_income - max_savings
    T = tax_threshold

then,

    percent_to_roth = (L - T) / L

## Other Income sources

The one assumption that is hard to ignore is that the couple has no other
income sources in retirement.  But almost everybody has at least one other
source of income such as Social Security or pensions, and many people will
have multiple sources of income.  So let's adjust the math to account for that.

<div markdown="1" class="funnel">
![Earn 120, Save 16, Base 36](/images/roth_or_not-120-16-36.png)
</div>

If Jon & Sally expect to receive other income in the form of social security
that will total $36,000/year in today's dollars, then their savings don't have
to provide the full $104,000 of income.  Their savings only have to fill the
funnel up between $36,000 and $104,000, which is a difference of $68,000.
So when they convert their nest egg to future
income, 8k/68k or about 12% of that future income is in the same tax bracket
they are saving in today.  That suggests that they
could save 12% today in a Roth because it would likely be in the same tax
bracket if deferred to the future.

Modifying the first equation,

    percent_to_roth = (L - T) / (L - B)

where,

    B = base income from "other" sources (in today's dollars)

Knowing what your future base income from "other" sources can be a difficult
thing to figure out.  But if you're only expecting Social Security, I suggest
you start off with about 40% of your current income.  This is a **very rough**
estimate based on the idea that, on average, people receive around 40% of their
income back in social security.  But you really should take a look at your
actual social security (or equivalent) statements to get an idea of how much
you'll really get.

At what point does 100% of your total savings go towards a Roth?  Mathematically,
if `(L-T) > (L-B)` the equation goes above 100%.  This simplifies to the
comparison of `B > T`.  So you should contribute everything to Roth when your
"base income" sources equal or exceed
your current lower tax threshold.  That makes sense because it means that
if you know that you will be at or above the current tax rate in the future
you might as well contribute everything to Roth today.

Let's just modify the equation slightly to account for this scenario,

    percent_to_roth = min((L - T) / (L - B), 100%)

## Saving Across Multiple Tax Brackets

<div markdown="1" class="funnel">
![Earn 120, Save 30, Base 36](/images/roth_or_not-120-30-36.png)
</div>

Now let's consider the case where Jon & Sally, are able to save enough to cross
over into a lower tax bracket if the entire savings were deductible.  So consider
with the same $120,000 of income and a savings rate of $30,000 per year.
This suggests that they are able to live comfortably off of the remaining $90,000
of income.

With the bottom of the 25% tax bracket is at $96,000, Jon & Sally would then
be descending into the 15% marginal tax bracket.  Since we're assuming that
the $90,000 of income represents their future income needs and $90,000 of income
would be marginally taxed at 15%, everything they save in the 25% tax bracket
should simply go to the Traditional savings option.  Then they would apply the
equation from earlier but only to the portion in the 15% tax bracket.

So the first $24,000 of savings goes into Traditional.  The remaining $6000 of
savings would follow the previous equation, `(90000-39250)/(90000-36000)` or
94% of $6000, that goes to Roth.  Notice that I'm using $39,250 as the low end
of the tax bracket because that's where the 15% tax bracket bottoms out (for a
married couple using standard deductions).  Finishing the
math for this example, 94% of $6000 is `0.94*6000/30000` or about 19% of the
overall savings that goes to Roth.

Mathematically, we can express the overall equation
for the dual-tax bracket case like this:

    percent_to_roth = everything in lowest tax bracket * previous equation
                    = min((T1-L) / S, 100%) * min((L - T0) / (L - B), 100%)

where,

    S = total amount saved
    L = livable_income
    T0 = tax bracket threshold below L
    T1 = tax bracket threshold above L
    B = future base income

Here's a plot of what Roth percentage looks like versus income levels
for a married couple[^1] in 2016 with a savings rate of
<span class="savings-rate">12%</span> and a future
base income equal to <span class="base-percent">40%</span> of their current income
(move sliders below the graph to change percentages).

[^1]: For the plot, I capped the qualified contribution at $48,000 because each person in a couple over 50 can contribute a max of $24,000 to qualified accounts.

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

## Insights

Looking at the plot of Roth percent versus income and playing with the sliders gives
a few of insights.

  * The Roth savings rate drops off rapidly right above each tax bracket.  This is due
  to the fact that your savings at those income levels can quickly push
  you into a lower tax bracket.   So if you save enough to cross over into
  a lower tax bracket, all of the savings in the
  higher tax brackets would tend to go towards the Traditional option, while
  most of the savings that cross-over into lower tax brackets would go towards
  the Roth option.
  * The Roth savings rates tend to peak just below the tax bracket boundaries.
  That's because you are as far away as you can be from the lower edge of the
  tax bracket which means that a higher percentage of your retirement income
  is likely to be in the same tax bracket (or higher) as you are in now.
  * Increases to future income pushes the entire curve up.  This means that the more
  you expect to earn from other sources such as social security and pensions,
  the closer your retirement tax bracket will be to your current tax bracket
  so you would tend to want to save more to a Roth.

## When You Assume, You Make Me Read Part 2

While this analysis is interesting and moving the sliders around is fun, there
are many assumptions that make it not particularly useful.  Here are some of
the more egregious assumptions:

  * The model assumes that the investor will retire exactly when they have enough
  to retire without considering the probability that most people will either have
  too little or too much at the time of retirement.  Assuming you work a little
  past the point of being financially independent, then you would probably want to
  allocate a little more to the Roth option because the extra savings in the
  Traditional option would fill up the lower tax brackets in the future.
  * Returns on the invested funds and inflation were both ignored.  If your
  investments beat inflation then the amount you have at retirement
  to fill in lower tax brackets would be larger.
  This also suggests allocating more funds to Roths.
  * Employer matches were completely ignored.  Since those matching funds would
  normally be in before-tax dollars, this would tend to suggest higher allocations
  towards the Roth option than shown in this analysis.

In Part 2 I'm going to change the perspective of the analysis from mostly theoretical
to be a bit more practical.  Also, instead of focusing how much to put
in a **Roth**, I will change the perspective slightly to examine how much total
money you should save in your **Traditional** savings option.
