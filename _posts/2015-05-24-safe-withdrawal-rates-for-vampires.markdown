---
layout: post
title: "Safe Withdrawal Rates for Vampires"
date: 2015-05-24
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
This article explores the idea of withdrawing funds from a portfolio indefinitely
to try to gain some insights into long-term safe withdrawal rates.

## The Vampire Strategy

One way Vlad can ensure that he never runs out of money is to just withdraw a fixed
percentage from the portfolio every year.  But Vlad doesn't want his spending power
to decrease each year, so he needs to be careful with how much he spends.  In other
words, he wants his portfolio on average to grow by the rate of inflation while at
the same time withdrawing some amount of money to live on.  In equation form:

```
(portfolio-withdrawal)*(1+appreciation) - withdrawal >= portfolio(1+inflation)
```

This equation says that the portfolio in a given year will increase by at least the rate
of inflation after taking into account the appreciation of the portfolio that is
left over from the previous year after taking a withdrawal.
Let's use shorter variable names to help make it more readable

```
(P-W)*(1+r) >= P(1+i)
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
(1-w)(1+r) >= (1+i)
```

And now it's fairly simple to solve the `withdrawal rate` as:

```
w <= (r-i) / (1+r)
```

### Stocks Only

Let's see what happens if we assume Vlad invested everything in stocks.

Moneychimp has an[excellent tool](http://www.moneychimp.com/features/market_cagr.htm)
for getting historical stock returns.
With this tool you can see that for the past 100 years (1915-2014) stocks have
returned a compounded averaged of 10.31%.
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

Historical bond rates are harder to come by[^11] but over period of 1926-2014
bonds have returned approximately 5.4% with a standard deviation of 5.6%.
So if Vlad invests his bond portfolio in Vanguard Total Bond Market ETF (BND)
with an expense ratio of 0.07%, let's assume he gets a return of 5.3% on the bonds.

The following table shows the maximum withdrawal rates for different portfolio
allocations:

| Stocks/Bonds =                     | 20/80 | 40/60 | 50/50 | 60/40 | 80/20 |
|----------------                    | :----:| :---: | :---: | :---: | :---: |
| Historical Portfolio Return[^1]    | 6.6%  | 7.3%  | 7.7%  | 8.2%  | 9.2%  |
| Spending Standard Deviation[^5]    | 5%    | 8%    | 10%   | 11%   | 15%   |
| Maximum Withdrawal Rate            | 2.9%  | 3.8%  | 4.2%  | 4.7%  | 5.5% |
| Expense Multiplier                 | 35    | 27    | 24    | 22    | 18    |

The "Expense Multiplier" value represents the amount of money that Vlad needs
to save before he begins his retirement in terms of his annual expenses.
So for a moderate 60/40 portfolio, Vlad would need to save at least 22 times his
annual expenses before he could retire from his night job.

## Buffer the Vampire Strategy[^22]

Even with the moderate 60/40 portfolio, Vlad has a decent chance that his portfolio
could drop by 20% in any given year.  
One way he could reduce the volatility of his expenses is to allocate a portion
of his portfolio to a spending buffer.

> Illustrative Pie Chart with 50% stocks, 30% bonds, 20% spending

To describe how a spending buffer works, consider a 6-year spending buffer
as an example.  With a 6-year buffer, Vlad would carve out 6 times his annual
expenses as part of his portfolio.  Since this represents the next 6 years of
his spending, it would be invested conservatively in short-term bond and cash
equivalents.  At the end of each year, Vlad applies his withdrawal rate to his
entire portfolio then moves that amount into his spending buffer.  Then he
withdraws 1/6th of the spending buffer for spending in the following year.

Having a 6-year buffer for his spending means that Vlad's spending will only be
impacted by 1/6th of the fluctuations in the market.  The standard deviation of
Vlad's spending will be reduced by[^2] `1/sqrt(6)`.  
In our example with a 60/40 split, the standard deviation goes from 11% down to 4.5%.
Vampires get grumpy with big swings in spending so this helps to prevent Vlad
from biting people.

One possible downside of the buffering is that the returns from Vlad's portfolio
could be reduced.  Assuming that the buffer is allocated to the bond side of the
portfolio, then the bond returns would be reduced.

Re-working the original equations with a spending buffer:

```
(P-6W)(1+r) + 6W - W >= P(1+i)
```

Which reduces to a withdrawal rate of,

```
w <= (r - i) / (1 + 6r)
```

Furthermore, if Vlad wants to keep the stock portion of the portfolio fixed
at some percentage while bonds and the buffer make up the remainder,
the equation could be rewritten as,

```
x (1 + r_s) + (1 - x - 6w) (1 + r_b) + 5w <= (1 + i)
x + xr + (1-x-6w)(1+r) + 5w =
x + xr + 1 + r - x - xr - 6w -6wr + 5w =
1+r - w(1+6r)
```

Where

  * `x = percentage of portfolio in stocks`
  * `r_s = rate of return of stocks`
  * `r_b = rate of return of bonds`

then the more general equation for rate of withdrawal equation becomes,

```
w <= (x*r_s + (1-x)*r_b - i) / (1 + 6 r_b)
```

All this math probably is putting you to sleep so let's look at some portfolios.

| Stocks/Bonds[^3]/Buffer[^3] =   | 20/66/14 | 40/41/19 | 50/30/20 | 60/17/23 | 74/0/26 |
|----------------                 | :-------:| :---:    | :---:    | :---:    | :---:   |
| Historical Portfolio Return[^1] | 5.5%     | 6.3%     | 6.7%     | 7.0%     | 7.5%    |
| Spending Standard Deviation[^6] | 2%       | 3%       | 4%       | 4.5%     | 6%      |
| Maximum Withdrawal Rate         | 2.3%     | 3.1%     | 3.4%     | 3.8%     | 4.3%    |
| Expense Multiplier              | 43       | 32       | 29       | 26       | 23      |

THIS SEEMS WEIRD... portfolio return is about 3.2% above withdrawal rate... should be bigger
diff to account for withdrawal??????????????????????????

Maybe it's S/B-5W/5W instead of S/B-6W/6W since it's the portion after withdrawal that
needs to grow by inflation???

So, if our friend Vlad has a portfolio with 60% in stocks and transfers 3.8%
of his portfolio to his spending buffer every year, his portfolio should roughly
keep pace with inflation.  Also, the annual change in his income would be 2 standard
deviations around the portfolio adjusted after the withdrawal or

```
(1-w)(1+r) +/- 2*sigma = (1-.038)*(1+.07) +/- .09
```

or between -6% and +12%.

Notice that the rate of return is less than before because the buffer is assumed
to not be invested. But a 6-year buffer is a long time so it might be okay to invest
a portion of that into bonds or something similar to boost the returns a little.

## Caveats

While this article explores the safe withdrawal rates for a portfolio that follows
historical returns, this is known to not be a good strategy for determining actual
safe withdrawal rates.  This is really more of a thought experiment to think about
long-term withdrawals combined with the spending buffer concept in order to reduce
income volatility.

Probably a better way to complete this analysis would be to use a monte-carlo simulation
with an appropriate success criterion.  For example, most studies of 30-year withdrawal
rates consider how a withdrawal performs relative to how often the portfolio drops to
zero during the 30-year period.  For a vampire, the measure of success would probably
be whether the portfolio has kept pace with inflation over 50 years (or more).

## Insights

In spite of it's weaknesses, this analysis does shed some light on very-long-term
withdrawals.

For a modestly allocated, 60% stock, portfolio, the withdrawal rate of 3.85% could keep
up with inflation if historical returns continue into the future. This rate isn't too
far off from the widely discussed 4% rates you see in the financial press.  But just a 20%
reduction in stocks drops the withdrawal rate to 3.08%.  This highlights the need to
stay invested in higher-performing assets in order to keep up with inflation.

A buffered withdrawal strategy could be employed to cushion the ups and down of the
markets.  The expense of a buffered strategy is that it will reduce overall returns
but retired vampires are probably more interested in stability than returns.  
The 6-year buffer suggested here has a good chance of spanning at least 1 or 2 good
years even over the course of a bear market.  Over all 5-year periods stocks have been
[positive about 87% of the time](http://awealthofcommonsense.com/u-s-stock-investors-doomed-high-returns/).
So for a 6-year window that's probably true about 90% of the time.

Another reason to choose a 6-year buffer is that it plays well with a Roth ladder
strategy in which a vampire can convert his traditional IRA to a Roth IRA but must
wait 5 years before he can withdraw the money without penalty[^4].

## Next Steps

If there's any interest, the next logical step for this analysis would be to
take it to the domain of monte-carlo simulations to see how the estimated rates
do over very long periods with the given portfolios.

Another interesting variation of this analysis would be to include the effects
of social security on withdrawal rates.


[^1]: Portfolio return for mixed portfolios are crude approximations for illustrative purposes only.
[^2]: [Standard error of the mean](http://en.wikipedia.org/wiki/Standard_error#Standard_error_of_the_mean).
[^22]: No relation to [Buffy the Vampire Slayer](https://en.wikipedia.org/wiki/Buffy_the_Vampire_Slayer).
[^3]: Bonds and buffer percentages are initial values, buffer size varies slightly after the first year.
[^4]: I'm pretty sure vampires are not subject to the rules concerning age of 59.5 and withdrawals.
[^5]: Standard deviations for different allocations estimated from graph on [this page](http://www.forbes.com/sites/rickferri/2015/02/06/the-center-of-gravity-for-retirees/2/)
[^6]: Based on portfolio deviation divided by sqrt(6) for the buffering effect.

[^10]: Stock Performance - 1915-2014: 10.31%, std dev = 19.9%
[^11]: Bond Performance - 1926-2014: 5.4%, std dev = 5.6%, comes from a combination of [Vanguard data](https://personal.vanguard.com/us/insights/saving-investing/model-portfolio-allocations) and the [comparable intermediate govt bond](http://www.jvlassociates.com/files/Performance%20Probabilities%20(Bell%20Curve%20)%20%201926%20-%202014.pdf).

[^12]: Inflation numbers - 1915-2014: 3.2% from [moneychimp inflation calculator](http://www.moneychimp.com/articles/econ/inflation_calculator.htm).
