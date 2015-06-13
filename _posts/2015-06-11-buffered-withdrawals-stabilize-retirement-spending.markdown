---
layout: post
title: "Buffered Withdrawals Stabilize Retirement Spending"
date: 2015-06-11T10:21:10-06:00
tags: [investing, spending, other]
image: /images/testing.jpg
abstract: >
  Withdrawing money from your portfolio using a fixed percentage
  can guarantee that you'll never run out of money but it also ties the
  the volatility of your income the returns of your portfolio.
  Buffering the withdrawals can reduce that volatility to a more tolerable level.
---

In a [previous article](/safe-withdrawal-rates-for-vampires/), the concept of buffered
withdrawals was introduced, but some details were omitted.
This article will explore that idea with a little more depth
and describe how such a strategy could be implemented in practice.

Before moving on, I would like to give credit for the idea of this strategy.
I first encountered the idea of buffered withdrawals on the [bogleheads.org site's
wiki page for withdrawal methods](http://www.bogleheads.org/wiki/Withdrawal_methods#Combination).
This page alludes to the Galeno Strategy but doesn't describe what it is.
Intrigued, I set out to find
[The](http://boards.fool.com/galenos-mechanical-retirement-strategy-11114923.aspx)
[Galeno](http://www.early-retirement.org/forums/f26/hi-im-galeno-13957.html)
[Strategy](http://socialize.morningstar.com/NewSocialize/asp/FullConv.asp?forumId=F100000001&convId=31854)
and discovered that it is just a way to buffer the withdrawals.
In Galeno's case, he uses a 5-year buffer with the buffer invested in safe money-market
funds and the rest of his portfolio invested in stocks.

I wanted to take this a step further and look at different size buffers and
different stock allocation strategies to see how this affected the math.

## The Basics

The basic idea of the spending buffer is to split your portfolio (`P`) into the
investments (`V`) and withdrawal buffer (`U`).

```
P = V + U
```

Each year, you take a percentage of your portfolio (your withdrawal rate) and add
it to your buffer.  Then you divide that buffer by the size (in years) and withdraw
that amount as your income for the coming year.  If your buffer size is `k` years,
this means that normally you will have `k-1` years worth of spending sitting in the buffer.
Your buffer will only temporarily have `k` years of spending between the short time
between when you add funds to the buffer and withdraw the funds from the buffer.

Why do this?  The main reason to do this is to buffer the ups and downs of the
stock market.  The bigger your buffer is, the smaller the variation will be
on your withdrawal income.  Statistically, if you sample data that has a
standard deviation of `σ`, then taking `N` samples of that data will have
a standard deviation of `σ/sqrt(N)`[^1].  Applying that principal to a
withdrawal buffer, if we sample a portfolio that has a 20% standard deviation
per year, a 4-year buffer of that data would have a 10% standard deviation.
In short, a withdrawal buffer reduces the volatility of your income compared to
directly withdrawing a fixed percentage from your portfolio.

## Some Math

So if we define a single years' worth of the buffer to be `W`, then

```
P = V + (k-1)W
```

Typically the invesment piece (`V`) would be made up of some combination of stocks (`S`)
and bonds (`B`).

```
V = S + B
```

And the withdrawal buffer would be invested conservatively in cash-equivalents
since that is the money will support your living expenses in the near future.

The Galeno Strategy invests everything in stocks which means that the percentage
of the overall portfolio in stocks fluctuates.
I would prefer to keep the stock percentage at some fixed value so I will
diverge from the Galeno Strategy on this point.
If the stock percentage is `s`,

```
  S = sP
```

The reason I like to keep the stock percentage fixed is to that it enables you to
take gains when the market is up and move more money back into stocks when the market
is down, simply by rebalancing to that fixed percentage.  This is in keeping with the
asset allocation strategies that we all know and love.

If we define the withdrawal rate (`w`) as a percentage of the overall portfolio,

```
W = wP
```

The portfolio equation now looks like this,

```
P = sP + B + (k-1)wP
```

The bond piece is the part of the portfolio that fluctuates to accommodate swings
in the stock market and can be written as,
```
B = (1-s)P - (k-1)wP
```

## Keeping Up with Inflation

If you want your portfolio to keep pace with inflation, then you could require
that the portfolio that is left over after a withdrawal must increase enough
to cover the money lost to the withdrawal as well as covering the effects of
inflation,

```
(P - kW)(1 + r) + (k-1)W > P(1 + i)
```

Substituting `W=wP` and solving for `w`,

```
w < (r - i) / (1 + kr)
```

Interestingly, even in the degenerate case where we don't have a buffer (`k=1`),
then the maximum withdrawal rate that keeps up with inflation is not simply `r-i`
but is reduced by `1/(1+r)`.  For example, if your portfolio returns 7% and inflation
is 3%, then the maximum withdrawal would not be 4% but rather it would be,

```
w < (.07-.03)/(1.07) = 3.74%
```

This is because your portfolio remaining after the withdrawal has to overcome
both inflation **and** the effects of withdrawing part of the portfolio.

Also notice that your withdrawal rate decreases with bigger buffer sizes.
This is because it is assumed that the buffer has zero gains.  You could mitigate
this by investing a part of your buffer in bonds but you will be increasing your
income volatility slightly if you do so.

## Initial Buffer Size with Inflation

If you don't consider inflation when you create your initial buffer, you might
not actually keep up with inflation for the first few years.  Consider a hypothetical
portfolio that exactly keeps with inflation.  Thus your withdrawal amount keeps up
with inflation.  This all sounds great until you realize that you will be dividing
your buffer by `k` so your initial withdrawal would only capture `1/k` of the gains.

This may not be a big deal for you if you want to be conservative at the beginning
of retirement.  You may be able to tighten your belt a little initially and wait
for the effects of inflation to catch up to your buffer.  But you can also make
an adjustment to your inital buffer by considering the current inflation rate
when making the current buffer.

So, instead of making your initial buffer with `kwP` dollars, the idea is to
figure out an initial value for `k`, call it `k'`, such that your next withdrawal
will keep up with today's rate of inflation.  In equation form,

```
starting_buffer - expenses + next_withdrawal = startin_buffer*(1+i)
```

In terms of the variables we have already defined and assuming the next withdrawal
also keeps up with inflation,

```
U-U/k + W(1+i) = U(1+i)
```

Now replace the buffer size `U` with `k'W`,

```
k'W - k'W/k + (1+i)W = k'W(1+i)
```

Solving for `k'`

```
k' = α k
```

```
α = (1+i) / (1 + ki)
```

The multiplier `α` represents how much to adjust `k` by for the initial
buffer size if you want next year's income to adjust by inflation.  If inflation
is zero, then no adjustment is needed because `α` will be 1.


For example, if you have a 6-year buffer and inflation is currently 2% then,

```
k' = 6 * (1 + 0.02) / (1+6*0.02) = 5.46
```

Furthermore, if you are taking a 3% withdrawal, then your initial buffer
would be `5.46*3.5%` or 16.4% and you would effectively withdrawal 16.4%/6
or 2.73% in that first year even though you are moving 3% into your buffer
each year.

## Roth Ladder

The buffering concept plays really well with a [Roth conversion ladder](http://jlcollinsnh.com/2013/12/05/stocks-part-xx-early-retirement-withdrawal-strategies-and-roth-conversion-ladders-from-a-mad-fientist/).
A Roth conversion ladder is a way to convert traditional IRA funds to Roth IRA funds in
an attempt to avoid early withdrawal penalties.  The IRS allows you to
convert a traditional IRA to a Roth IRA and may use the converted funds without
penalty after a 5-year waiting period.

So if you pair a buffered withdrawal strategy using a buffer of 6 years, with a
Roth ladder, your buffer could be entirely made up of Roth IRA funds that are
converted annually from traditional IRA funds.  Then you simply withdraw 1/6th
of that buffer each year for living expenses.

The reason for choosing a 6-year buffer instead of a 5-year buffer is to avoid
the possibility of withdrawing slightly more than 1/5 of your buffer due to
market fluctuations.  But a 6-year buffer is a pretty large amount to not be invested
so it makes sense to invest 1-3 years of that buffer in something relatively
conservative like bonds.  One safe way to do that would be to simply buy bonds
with a 3-5 year maturity using the withdrawn funds.

## Implementing the Buffered Strategy

Here are the basic steps for using a buffered withdrawal.  In these
steps, by way of example, let's assume a buffer size of 6 years and a withdrawal
rate of 3% and a current inflation rate of 2%.

  1. Determine your initial buffer size.  If you want to keep it simple,
  multiply your buffer size by your withdrawal rate (3%*6 = 18%).  If you
  want to consider inflation, your initial buffer size is `w*k (1+i) / (1 + ki)`,
  for 2% inflation, 3%*5.46 = 16.4%.

  2. Set aside your initial buffer size somewhere in an account with safe funds.
  For example, if your portfolio is $1,000,000 then set aside 18% or $180k
  as your spending buffer.

  3. Divide your buffer by the buffer size (in years) to get this year's spending.
  For example, if your buffer has $180k and you have a 6-year buffer,
  remove $30k of spending for this year.  There is now $150k left in your
  buffer that you will not touch until next year.

  4. Set aside your stock allocation.  For example, if you like a 60/40 allocation,
  rebalance your portfolio so that you have your target allocation (e.g. 60% of $970k = $582k)
  in stocks.

  5. Invest the remainder in bonds (e.g. 970-582-150=$240k).

  6. Enjoy life for 1 year.

  7. After 1 year, recompute the size of your portfolio, including the buffer.
  For example, if your stocks went up to $640k, and your bonds went up to
  $250k and your buffer is $150k, then your total portfolio now has
  $1,040,000.

  8. Multiply your new portfolio value by your withdrawal rate to get your
  withdrawal amount.  For example, $1,040,000*3% = $31,200.

  9. Add that withdrawal amount to your existing buffer.

  10. Go back to step 3 and repeat.



[^1]: See [standard error of the mean](http://en.wikipedia.org/wiki/Standard_error#Standard_error_of_the_mean).
