---
layout: post
title: "Affordable Care Act May Increase Your Marginal Tax Rate"
date: 2016-05-07
tags: [investing, spending, other]
image: /images/laurel_hardy_hospital.jpg
abstract: >
  While doing my taxes this year and playing with possible income changes
  in the tax software, I noticed a curious phenomenon.  Instead of my taxes
  changing by my marginal tax rate for any change in income, it was
  changing by almost 10% more than I expected.  After doing a little research,
  I narrowed down this unexpected increase of my marginal tax rate to the
  Affordable Care Act insurance premium credits and how these credits are
  phased out with increased income.
---

If you retire before you are eligible for Medicare at age 65, then you
may find yourself buying health insurance through one of the Affordable Care Act
health exchanges.
Furthermore, if your taxable income falls below 4 times the
Federal Poverty Level (FPL), then you will qualify for a subsidy which
could pay for a nice chunk of your health insurance premium.
For 2016 the FPL is set at $11,770 for singles and $15,930 for couples, so
you could be eligible for a tax credit for incomes below $47,080 (single) or
$63,720 (couples).

What does this have to do with marginal tax rates?  It turns out that the
subsidy is a tax credit which gradually decreases as your taxable income increases.
For example, if your [modified adjusted gross income](http://www.investopedia.com/terms/m/magi.asp)
(MAGI) is between 3 and 4
times the FPL ($47,790 to $63,720 for couples), then your tax credit decreases
by 9.56% for every extra dollar earned.  And even though it's a credit and not
a tax, the effect of a decreasing credit is mathematically equivalent to a
tax because the end result is that you will have 9.56% less money in your
pocket for every dollar of increased income.  Adding that to the
marginal tax rate means that your **effective** marginal tax rate is higher
if you're in the income range where you receive a health care premium subsidy.

It's certainly not bad to receive the tax credit because that's free money.
But it's good to understand how this affects your tax rate so that you
can plan on how and when to take income from your portfolio.

## Marginal Tax Rates

If you pay your taxes, then you're probably already well aware of the tax brackets,
from 10% all the way up to 39.6% for the highest earners.  This article is
focused on the 10% and 15% brackets because that's where the ACA
credits occur.

To keep things simple, I'm just going to consider the simple case of a married
couple using the standard deduction ($12,600 in 2016) and the the personal
exemptions ($4,050 in 2016) which means that the first $20,700 of adjusted
gross income is tax free.  The same issue applies to single filers, just at
a lower income level.  Here's a graph of the marginal tax rates versus income
for joint filers in 2016.

<div id="brackets" class="chart">
    <svg></svg>
</div>

If you itemize deductions, this graph will shift to the right by the amount
that your deductions exceed the standard deduction ($12,600).

## Marginal Effects of Tax Credit Decreases

The IRS publishes a table that is used to calculate how much to reduce your
ACA subsidy by comparing your income to the Federal Povery Level (FPL).
This table can be found in Table 2 of the [instructions for Form 8962](https://www.irs.gov/pub/irs-pdf/i8962.pdf)
which lists incomes levels from 100% through 400%.  For a married couple,
the FPL is $15,930, so 100% to 400% of FPL corresponds to incomes between
$15,930 and $63,720.

Since the IRS table publishes different values for each FPL percentage point,
I have computed the marginal tax effect for every 1%  of FPL ($159) between 100%
and 400% FPL to come up with the following graph.

<div id="acacredits" class="chart">
    <svg></svg>
</div>

Let's break down this chart by income ranges:

 * **$15,930 - 21,187 (100-133% FPL)** - in the lower range the premium subsidy is
 reduced by the smallest amount, 2.01%.  But many people in this range would be eligible
 for Medicaid and may choose to not buy insurance and thus may not be affected at all.
 * **$21,187 (133% FPL)** - there is a spike at this income level because there's
 a jump in the subsidy reduction from 2.01% to 3.02%.  So as your income increases
 from 132% to 133% of FPL, your subsidy goes down by `133*.0302-132*.0201` =
 136% ($217 more taxes for $159 increase in income).
 * **$21,187 - 47,790 (133-300% FPL)** - in this range the IRS table publishes an
 ever increasing subsidy reduction rate which translates to a gradually
 increasing marginal tax rate.  The jaggedness is due the rounding of the values
 in the IRS table.  The average effect on marginal tax rate across this range is
 `(300*.0956-133*.0302)/(300-133)` = 14.8%.
 At it's peak it approaches 18.5% for incomes right below 300% of FPL.
 * **$47,740 - 63,720 (300-400% FPL)** - this is the top range in which a subsidy
 is available and the reduction is a constant 9.56% across the entire range.
 * **$63,720 (400% FPL)** - technically there could be a huge spike (cliff) at this
 income level because when you make $63,720, you lose all remaining premium
 credits.  There could also be no spike if you choose the cheapest health care
 plan, in which case your premium subsidy may have already been exhausted
 at this income level.  I chose not to show it on the graph because it's not a
 constant percentage for all situations but it's important to be aware of this
 premium cliff.

To summarize, you will see an increase anywhere from 9.56% to as much as 18.5% in
your effective marginal tax rate due to the reduction of the premium tax credit.
The average increase across the whole range (133-400%) is 12.8%.  Since this
occurs in the 10-15% income tax ranges, this is a big jump in marginal tax rates.

## Effective Marginal Tax Rate

The next graph simply combines the marginal tax rates with the effects of the
reduction in premium subsidies to come up with the **effective** marginal tax rate.
It's somewhat startling to see that the effective marginal tax rates can be higher
than those for people earning over $96,000 (603% FPL).

<div id="effective" class="chart">
    <svg></svg>
</div>

What we normally think of as the 10% tax bracket is now approximately a 25% tax
bracket.  The lower end of the 15% tax bracket (below $48,000) has become a 32%
tax bracket.  And between $48,000 and $64,000 the marginal tax rate is nearly 25%.
We finally return to the 15% tax rate above $64,000 but lose the premium subsidy.

## Capital Gains

Long-term capital gains are are similarly affected.  Instead of having zero
marginal tax rates up to the 25% bracket, there are now significant marginal
effects in the 133-400% FPL range.  And in the 250-300% FPL range you would be
at a higher marginal rate (> 15%) than people with much higher incomes.

<div id="capgains" class="chart">
    <svg></svg>
</div>

## Strategies

The discovery of this increase in marginal tax rate has colored my views on
how and when to take income from my portfolio.  It mostly boils down to the
concept of delaying my taxable income until age 65 when Medicare
kicks in and I no longer am eligible for ACA credits.  Alternatively, either
Mrs. Moneycle or I could get a job with health benefits, but that requires
working.

Here are some things you can do to push income forward.

  * Deplete taxable and Roth assets before touching IRA/401k funds
  * Perform tax-loss harvesting to capture losses now (taking gains after 65)
  * Defer IRA to Roth conversions which produce taxable income
  * Move dividend-producing assets like bonds into IRAs
  * Delay taking pensions and social security until after age 65
  * When buying annuities, add a cost-of-living adjustment (COLA)
  which gives you less income in the early years and more income later.
  * Use delayed income annuities which start at age 65 or beyond

If most of your investable assets are in tax-qualified accounts (IRA/401k),
then you may not be able to defer your taxable income as much.  In this case
I would recommend spreading your Roth and taxable asset withdrawals from now
until age 65 so that you can get a little benefit each year.  But you might
want to consider lumping those same assets over just a few years if it allows
you to push your income below 400% FPL and get a tax subsidy for a few years.

Keep in mind, if you are able to push income forward until age 65, you probably
want to take as much income as you can between ages 65 and 70 while staying
in the 15% tax bracket.  This is because at age 70, you will most likely begin
taking social security and also be required (at age 70.5) to take required minimum
distributions from your IRAs which all adds up to more taxable income.  

So the overall strategy is,
(1) take as little taxable income as possible while receiving ACA subsidies,
(2) take as much taxable income as possible while not receiving ACA subsidies, and
(3) make it to age 70 and thank your younger self for planning ahead.

<style>
  .chart {
    clear: both;
  }
  .chart, svg {
    height: 360px;
  }
</style>

<script>
  var fpl = 15930;
  var deduct = 20700;
  var income10 = deduct;
  var income15 = deduct + 18550;
  var income25 = deduct + 75300;
  var incomeMax = 100000;
  var irsData = [
    [99, 0],
    [100, 0.0201],
    [101, 0.0201],
    [100*(income10-50)/fpl, 0.0201],
    [100*(income10)/fpl, 0.0201],
    [131, 0.0201],
    [132, 0.0201],
    [133, 0.0302],
    [134, 0.0308],
    [135, 0.0314],
    [136, 0.0320],
    [137, 0.0326],
    [138, 0.0331],
    [139, 0.0337],
    [140, 0.0343],
    [141, 0.0349],
    [142, 0.0355],
    [143, 0.0361],
    [144, 0.0367],
    [145, 0.0373],
    [146, 0.0378],
    [147, 0.0384],
    [148, 0.0390],
    [149, 0.0396],
    [150, 0.0402],
    [151, 0.0407],
    [152, 0.0411],
    [153, 0.0416],
    [154, 0.0421],
    [155, 0.0425],
    [156, 0.0430],
    [157, 0.0434],
    [158, 0.0439],
    [159, 0.0444],
    [160, 0.0448],
    [161, 0.0453],
    [162, 0.0458],
    [163, 0.0462],
    [164, 0.0467],
    [165, 0.0472],
    [166, 0.0476],
    [167, 0.0481],
    [168, 0.0486],
    [169, 0.0490],
    [170, 0.0495],
    [171, 0.0499],
    [172, 0.0504],
    [173, 0.0509],
    [174, 0.0513],
    [175, 0.0518],
    [176, 0.0523],
    [177, 0.0527],
    [178, 0.0532],
    [179, 0.0537],
    [180, 0.0541],
    [181, 0.0546],
    [182, 0.0550],
    [183, 0.0555],
    [184, 0.0560],
    [185, 0.0564],
    [186, 0.0569],
    [187, 0.0574],
    [188, 0.0578],
    [189, 0.0583],
    [190, 0.0588],
    [191, 0.0592],
    [192, 0.0597],
    [193, 0.0602],
    [194, 0.0606],
    [195, 0.0611],
    [196, 0.0615],
    [197, 0.0620],
    [198, 0.0625],
    [199, 0.0629],
    [200, 0.0634],
    [201, 0.0638],
    [202, 0.0641],
    [203, 0.0645],
    [204, 0.0648],
    [205, 0.0652],
    [206, 0.0655],
    [207, 0.0659],
    [208, 0.0662],
    [209, 0.0666],
    [210, 0.0669],
    [211, 0.0673],
    [212, 0.0676],
    [213, 0.0680],
    [214, 0.0683],
    [215, 0.0687],
    [216, 0.0690],
    [217, 0.0694],
    [218, 0.0697],
    [219, 0.0701],
    [220, 0.0704],
    [221, 0.0708],
    [222, 0.0711],
    [223, 0.0715],
    [224, 0.0718],
    [225, 0.0722],
    [226, 0.0726],
    [227, 0.0729],
    [228, 0.0733],
    [229, 0.0736],
    [230, 0.0740],
    [231, 0.0743],
    [232, 0.0747],
    [233, 0.0750],
    [234, 0.0754],
    [235, 0.0757],
    [236, 0.0761],
    [237, 0.0764],
    [238, 0.0768],
    [239, 0.0771],
    [240, 0.0775],
    [241, 0.0778],
    [242, 0.0782],
    [243, 0.0785],
    [244, 0.0789],
    [245, 0.0792],
    [246, 0.0796],
    [247, 0.0799],
    [248, 0.0803],
    [249, 0.0806],
    [250, 0.0810],
    [251, 0.0813],
    [252, 0.0816],
    [253, 0.0819],
    [254, 0.0822],
    [255, 0.0825],
    [256, 0.0828],
    [257, 0.0830],
    [258, 0.0833],
    [259, 0.0836],
    [260, 0.0839],
    [261, 0.0842],
    [262, 0.0845],
    [263, 0.0848],
    [264, 0.0851],
    [265, 0.0854],
    [266, 0.0857],
    [267, 0.0860],
    [268, 0.0863],
    [269, 0.0865],
    [270, 0.0868],
    [271, 0.0871],
    [272, 0.0874],
    [273, 0.0877],
    [274, 0.0880],
    [275, 0.0883],
    [276, 0.0886],
    [277, 0.0889],
    [278, 0.0892],
    [279, 0.0895],
    [280, 0.0898],
    [281, 0.0901],
    [282, 0.0903],
    [283, 0.0906],
    [284, 0.0909],
    [285, 0.0912],
    [286, 0.0915],
    [287, 0.0918],
    [288, 0.0921],
    [289, 0.0924],
    [290, 0.0927],
    [291, 0.0930],
    [292, 0.0933],
    [293, 0.0936],
    [294, 0.0938],
    [295, 0.0941],
    [296, 0.0944],
    [297, 0.0947],
    [298, 0.0950],
    [299, 0.0953],
    [300, 0.0956],
    [301, 0.0956],
    [399, 0.0956],
    [400, 0.0956],
  ];

  var prevX = 0, prevY = 0;
  var acaTax = irsData.map(function(x) {
    var tax = x[0] <= 100 ? 0 : (x[0]*x[1] - prevX*prevY)/(x[0] - prevX);
    var income = Math.round(prevX*fpl/100)
    prevX = x[0]; prevY = x[1];
    return [income, tax];
  });

  var bracketData = [
    {
      name: 'Marginal Tax Rate',
      xy: [[0,0], [income10 - 50, 0], [income10, 0.10], [income15 - 50, 0.10], [income15, 0.15], [income25 - 50, 0.15], [income25, 0.25], [incomeMax, 0.25]],
      color: '#2020aa'
    },
  ];

  var acaData = [
    {
      name: 'ACA Tax Credit Reduction',
      xy: acaTax.concat([[4*fpl+1, 0], [incomeMax, 0]]),
      color: '#20a020'
    },
  ];

  var combinedData = [
    {
      name: 'Effective Marginal Tax Rate',
      xy: acaTax.map(function(x) {
        income = x[0];
        tax = x[1] + ((income < income10) ? 0 : ((income < income15) ? 0.1 : (income < income25 ? 0.15 : 0.25)));
        return [income, tax];
      }).concat([[4*fpl+1, 0.15], [income25 - 50, 0.15], [income25, 0.25], [incomeMax, 0.25]]),
      color: '#a02020'
    },
    {
      name: bracketData[0].name,
      xy: bracketData[0].xy,
      color: bracketData[0].color,
      disabled: true
    },
    {
      name: acaData[0].name,
      xy: acaData[0].xy,
      color: acaData[0].color,
      disabled: true
    },
  ];

  var capGainsData = [
    {
      name: 'Effective Capital Gains Rate',
      xy: acaTax.concat([[4*fpl+1, 0], [income25-50, 0], [income25, 0.15], [incomeMax, 0.15]]),
      color: '#a02020'
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
        .axisLabel('Income (AGI)')
        .tickFormat(d3.format('$,r'))
        .showMaxMin(false);

    aChart.yAxis     //Chart y-axis settings
        .axisLabel('Marginal Tax Rate')
        .tickFormat(d3.format('.3p'))
        .showMaxMin(false);

    aChart.xDomain([0, incomeMax*1.01]);
    aChart.yDomain([0, 0.355]);

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

  nv.addGraph(newChart(bracketData, '#brackets svg', true));
  nv.addGraph(newChart(acaData, '#acacredits svg', true));
  nv.addGraph(newChart(combinedData, '#effective svg', true));
  nv.addGraph(newChart(capGainsData, '#capgains svg', true));

</script>
