---
layout: post
title: "Safe Withdrawal Rates for Vampires"
date: 2015-05-29
tags: [investing, spending, other]
image: /images/nosferatu-max-shreck.jpeg
abstract: >
  If you're going to live forever, will a 4% withdrawal rate sustain you?
  This article explores the withdrawal rate that will help you keep up with
  inflation for the really long term.
---

If you search the web for retirement withdrawal strategies,
you can find countless articles about how to withdraw your fund within the
construct of a 30-year retirement.  The most commonly cited strategy is the 4%
withdrawal strategy which starts withdrawing 4% of the initial portfolio value
and increases spending each year by the rate of inflation.
Using monte carlo analysis techniques, such a portfolio
may be found to have some small probability of exhausting the portfolio before
30 years have passed.

But if you're a Vampire named Vlad and want your assets to last forever, you can't
afford to have your portfolio run dry in 30 years or even 100 years.
Or maybe you aren't not a vampire but are retiring early and want your funds to last
50 years, which seems like forever.
Let's explore the idea of withdrawing funds from a portfolio indefinitely
to try to gain some insights into long-term safe withdrawal rates.

## The Vampire Strategy

One way Vlad can ensure that he never runs out of money is to just withdraw a fixed
percentage from the portfolio every year.  But Vlad doesn't want his spending power
to decrease each year, so he needs to be careful with how much he spends.  In other
words, he wants his portfolio on average to grow by the rate of inflation while at
the same time withdrawing some amount of money to live on.  In equation form:

```
(portfolio-withdrawal)(1+appreciation) >= portfolio(1+inflation)
```

This equation says that the portfolio in a given year will appreciate by at
least the rate of inflation after subtracting the withdrawal amount.
Let's use shorter variable names to help make it more readable

```
(P - W)(1 + r) >= P(1 + i)
```

where

  * `P = portfolio value`
  * `W = withdrawal amount`
  * `w = withdrawal rate = W/P`
  * `r = porfolio appreciation`
  * `i = inflation rate`

Replacing withdrawal amount with `W = Pw`,

Then we can divide both sides of the equation by the `P` we get:

```
(1 - w)(1 + r) >= (1 + i)
```

And now it's fairly simple to solve the `withdrawal rate` as:

```
w <= (r - i) / (1 + r)
```

Notice that the numerator is the difference between Vlad's portfolio return
and long-term inflation.  So if his portfolio appreciates at a rate less than
inflation, he'll have to work forever.

### Stocks Only

Let's see what happens if we assume Vlad invests everything in stocks.

Moneychimp has an [excellent tool](http://www.moneychimp.com/features/market_cagr.htm)
for getting historical stock returns.
With this tool you can see that for the past 100 years (1915-2014) stocks have
returned a compounded average rate of 10.31%.
If Vlad could invest in Vanguard Total Stock Market ETF (VTI),
he would incur a fee of 0.05% for a total return of 10.26%.  To be a little
conservative, let's round that down to 10.2%.
Moneychimp also has an [inflation calculator](http://www.moneychimp.com/articles/econ/inflation_calculator.htm)
which shows a historical inflation rate of 3.2% over the same time period.

Plugging those numbers into the above equations gives:

```
withdrawal rate <= 6.35%
```

So, with average stock returns and average inflation values, a withdrawal of 6.35%
or less could allow Vlad to keep up with inflation.  Keep in mind that average
returns are not realistic.  In fact, those average returns have a standard deviation
of 19.9% so if Vlad just used a 100% stock portfolio, he would have about a 95%
chance that his portfolio would return between -30% and +50%.  A 30% loss would
be a big hit to his annual income so Vlad probably wants to consider ways to smooth
out the market swings.

### Stocks and Bonds

One way to reduced volatility to a portfolio is by adding bonds.

Historical bond rates are harder to come by but over period of 1926-2014
bonds have returned approximately 5.4% with a standard deviation of 5.6%[^11].
So if Vlad invests his bond portfolio in Vanguard Total Bond Market ETF (BND)
with an expense ratio of 0.07%, let's assume he gets a return of 5.3% on the bonds.

The following table shows the maximum withdrawal rates for different portfolio
allocations based on the returns estimated for each allocation:

| Stocks/Bonds =                     | 20/80 | 40/60 | 60/40 | 80/20 |
|----------------                    | :----:| :---: | :---: | :---: |
| Historical Portfolio Return[^1]    | 6.6%  | 7.3%  | 8.2%  | 9.2%  |
| Spending Standard Deviation[^5]    | 5%    | 8%    | 11%   | 15%   |
| Maximum Withdrawal Rate            | 2.9%  | 3.8%  | 4.7%  | 5.5% |
| Expense Multiplier                 | 35    | 27    | 22    | 18    |

The "Expense Multiplier" value represents the amount of money that Vlad needs
to save before he begins his retirement in terms of his annual expenses.
So for a moderate 60/40 portfolio, Vlad would need to save at least 22 times his
annual expenses before he could retire from his night job, and he could withdraw
up to 4.7% to keep up with inflation.

## Buffer the Vampire Strategy[^22]

Even with the moderate 60/40 portfolio, Vlad has a decent chance that his portfolio
(and spending) could drop by 14%[^7] in any given year.  
One way he could reduce the volatility of his expenses even further is to allocate
a portion of his portfolio to a spending buffer.

To describe how a spending buffer works, consider a 5-year spending buffer
as an example.  With a 5-year buffer, Vlad would carve out 4 times his annual
expenses as part of his portfolio.  Since this represents the next 4 years of
his spending, it would be invested conservatively in short-term bond and cash
equivalents.  At the end of each year, Vlad applies his withdrawal rate to his
entire portfolio then moves that amount into his spending buffer (now the buffer
has 5 years worth of spending).  He then withdraws 1/5th of the spending buffer
for spending in the following year.

{% include pie-buffer.html %}

Having a 5-year buffer for his spending means that Vlad's spending will only be
impacted by 1/5th of the fluctuations in the market.  The standard deviation of
Vlad's spending will be reduced[^2] by approximately `1/sqrt(5)`.
In our example with a 60/40 split, the standard deviation goes from 11% down to 5%.
Vampires get grumpy with big swings in spending so this helps to prevent Vlad
from biting people.

One possible downside of the buffering is that the returns from Vlad's portfolio
would be slightly reduced.  Assuming that the buffer piece is allocated to the
bond side of the portfolio, then the bond returns would be reduced if the buffer
is allocated to cash or cash equivalents.

Re-working the original equations with a spending buffer:

```
(P - kW)(1 + r) + kW - W >= P(1 + i)
```

where `k = spending buffer size in years`.  In this equation `P-kW` represents
the piece of the portfolio that is invested and `kW-W` represents the buffer after
1 year's worth of spending has been withdrawn.  In short, we want the appreciation
from the invested part of the portfolio to be enough so that the **entire**
portfolio keeps up with inflation.

Solving this equation for withdrawal rate,

```
w <= (r - i) / (1 + kr)
```

Taking this a little further, if Vlad wants to keep the stock portion of the
portfolio fixed at some percentage while bonds and the buffer make up the remainder,
then the rate of return could be written in terms of this percentage,

```
r = s*r_s + (1 - s)*r_b - (k - 1)*w*r_b
```

Where

  * `s = percentage of portfolio in stocks`
  * `r_s = rate of return on stocks`
  * `r_b = rate of return on bonds`

The first 2 terms of this equation represent the return we would have had without
buffering and the last term represents the amount of potential returns lost to
the buffering (assuming it would have been invested in bonds).

Substituting `r` from the last equation into the equation before that gives us
a quadratic equation to solve for withdrawal rate (I may expand this
in another article but will leave this detail out for now).

All this math probably is putting you to sleep so let's look at some portfolios.

| Stocks/Bonds[^3]/Buffer[^3] =   | 20/72/8  | 40/50/10 | 60/27/13 | 80/5/15 |
|----------------                 | :-------:| :---:    | :---:    | :---:   |
| Historical Portfolio Return[^1] | 5.9%     | 6.7%     | 7.6%     | 8.4%    |
| Spending Standard Deviation[^6] | 2%       | 3.5%     | 5%       | 7%      |
| Maximum Withdrawal Rate         | 2.0%     | 2.6%     | 3.2%     | 3.7%    |
| Expense Multiplier              | 50       | 38       | 31       | 27      |

So, if our friend Vlad has a portfolio with 60% in stocks and transfers 3.2%
of his portfolio to his 5-year spending buffer every year, his portfolio should roughly
keep pace with inflation.  The buffer needed for this withdrawal would account for
about 13% of his overall portfolio initially and would fluctuate with the market.
And the reduced variations in his income due to the buffering should help Vlad
sleep during the day.

## Caveats

While this article explores the safe withdrawal rates for a portfolio that follows
historical returns, this is known to not be a good strategy for determining actual
safe withdrawal rates.  This is really more of a thought experiment to think about
long-term withdrawals combined with the spending buffer concept in order to reduce
income volatility.

Probably a better way to complete this analysis would be to do a monte-carlo simulation
with an appropriate success criterion.  For example, most studies of 30-year withdrawal
rates consider how a withdrawal performs relative to how often the portfolio drops to
zero during the 30-year period.  For a vampire, the measure of success would probably
be whether the portfolio has kept pace with inflation over 50 years (or more).

## Insights

In spite of it's weaknesses, this analysis does shed some light on very-long-term
withdrawals.

For an aggressively allocated (80% stock) 5-year buffered portfolio, the
withdrawal rate of 3.7% could keep up with inflation. This rate isn't too
far off from the widely discussed 4% rates you see in the financial press but it
is for a pretty aggressive allocation.  Reducing stock allocation quickly reduces the "safe"
withdrawal rate.  A much safer 40% allocation requires reducing the withdrawal rate all
the way down to 2.6%.  This highlights the need to
stay invested in higher-performing assets in order to keep up with long-term inflation.

The buffered withdrawal strategy could be employed to cushion the ups and down of the
markets.  One cost of a buffered strategy is that it will reduce overall returns
by about 0.6% for moderate allocations.
But that lost return could be recouped by increasing the stock allocation by about 10%.
The 5-year buffer suggested here has a good chance of spanning at least 1 or 2 good
years even over the course of a bear market.  Over all 5-year periods stock returns
have been [positive about 87% of the time](http://awealthofcommonsense.com/u-s-stock-investors-doomed-high-returns/).
This suggests that 87% of the time the 5-year buffered income would continue to increase.

Another cost of buffering is that it reduces the withdrawal rate that can keep
up with inflation.  So the ultimate balance is between stability and income.
If you want more income, you **could** reduce the buffer size and take a higher
amount of income with full understanding that you should see larger swings in the market.
You could also do away with buffering and reduce the volatility by choosing a less
risky allocation.  Over the very long term it seems like Vlad would do better by
keeping his portfolio as heavily invested as is bearable and using buffering to
reduce the volatility.

If you are a vampire who wants to implement a Roth ladder strategy, you might
want to consider a 6-year buffer. This would allow you convert your traditional IRA
to a Roth IRA and wait the required 5 years before withdrawing the money without
penalty[^4].  But 6-years is a long time to not keep money invested so with such
a large buffer it might make sense to invest 1 or 2 years of a bigger buffer into
a bond fund.

## Next Steps

If there's any interest, the next logical step for this analysis would be to
take it to the domain of monte-carlo simulations to see how the estimated rates
do over very long periods with the given portfolios.

Another interesting variation of this analysis would be to include the effects
of social security on withdrawal rates.  Future social security or
pension earnings will probably allow for increased withdrawals until that income
stream kicks in.  It would be interesting to see how much of an effect that is.

### Related

* [Buffer Withdrawals to Stabilize Income](/buffer-withdrawals-to-stabilize-income/)
* [The 30-30 Withdrawal Strategy](/the-30-30-withdrawal-strategy/)
* [Super-Simple Virtual-Buffer Withdrawal Strategy](/super-simple-virtual-buffer-withdrawal-strategy/)


[^1]: Portfolio return for mixed portfolios are crude approximations for illustrative purposes only.
[^2]: See [standard error of the mean](http://en.wikipedia.org/wiki/Standard_error#Standard_error_of_the_mean).
[^22]: No relation to [Buffy the Vampire Slayer](https://en.wikipedia.org/wiki/Buffy_the_Vampire_Slayer).
[^3]: Bonds and buffer percentages are initial values, buffer size varies slightly after the first year.
[^4]: I'm pretty sure vampires are not subject to the rules concerning age of 59.5 and withdrawals.
[^5]: Standard deviations for different allocations estimated from graph on [this page](http://www.forbes.com/sites/rickferri/2015/02/06/the-center-of-gravity-for-retirees/2/)
[^6]: Based on portfolio deviation divided by sqrt(5) for the buffering effect.
[^7]: 14% drop is 2 standard deviations, or 22%, below average return of 8.2%

[^10]: Stock Performance - 1915-2014: 10.31%, std dev = 19.9%
[^11]: Bond Performance - 1926-2014: 5.4%, std dev = 5.6%, comes from a combination of [Vanguard data](https://personal.vanguard.com/us/insights/saving-investing/model-portfolio-allocations) and the [comparable intermediate govt bond](http://www.jvlassociates.com/files/Performance%20Probabilities%20(Bell%20Curve%20)%20%201926%20-%202014.pdf).

[^12]: Inflation numbers - 1915-2014: 3.2% from [moneychimp inflation calculator](http://www.moneychimp.com/articles/econ/inflation_calculator.htm).
