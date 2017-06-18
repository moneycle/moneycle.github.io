---
layout: post
title: "Super-Simple Virtual-Buffer Withdrawal Strategy - Revisited"
date: 2017-06-17
image: /images/einstein.jpg
abstract: >
  While the concept of this withdrawal strategy is simple, the original
  presentation of it was overly complex.  In this rewriting, I attempt to
  show that it really is a simple strategy that anybody can implement.
---
I was recently re-reading the original article that presented the concept of
this simple withdrawal strategy and found the explanation to be overly complex
which seems wrong for something that's supposed to be simple.
So I ask you, dear reader, for another chance to describe the strategy in a way
that is more approachable (with less math) to the average reader.
In fact, the most complex thing about the strategy is the name[^1].

[^1]: I'm open to suggestions on better names for the strategy

## The Simplest Version

In it's simplest form, the strategy boils down to the following 2 equations:

<div markdown="1" class="highlight">
    initial_monthly_withdrawal = portfolio_value / 400
    next_monthly_withdrawal    =
         ⅔ * current_withdrawal + ⅓ * current_portfolio_value / 400
</div>

The first equation tells you how much you can withdrawal monthly from
your portfolio in the first year that you start taking withdrawals.
Dividing your portfolio value by 400 is equivalent to taking a 3% annual
withdrawal and gets the process started.  Conversely, if you multiply your monthly
expenses by 400, that can give you an approximation of how big your portfolio needs
to be in order to retire.

The second equation tells you how much you should adjust your withdrawal amount
each year.  This particular version of the equation assumes a buffer-size of 3
years and 3% withdrawal rate.  In case you haven't been reading other
articles on this site, the buffer is what provides ballast to the withdrawal
equation so that your withdrawal amounts aren't whipped around too much by a
volatile investment portfolio.

**That's it!**  If you're comfortable with the assumed withdrawal rate of 3%
and buffer of 3 years then you can stop reading and just follow the above
equations (which I use for my own situation).

## Example: $900,000 portfolio

Let's take a simple example, start with a portfolio worth $900k.  Dividing
a this by 400 gives the initial monthly withdrawal of,

    initial_monthly_withdrawal = $900000 / 400
                               = $2250/month

Piece of cake.  It's up to you if you actually save the full 3-years of that
withdrawal amount into a safe place.  I recommend you at least save 1 year's
worth, $27k in this example, in a safe account such as an interest-bearing savings.
Or maybe you'd feel better putting the entire 3-year buffer, $81k, in savings,
that's fine too.  It mostly depends on your risk tolerance.

Next, after one year, you re-evaluate the portfolio to decide whether to increase
or decrease your withdrawal amount.  Let's say portfolio has had a good year, and is
worth $990k at the end of the year.  Your next year's withdrawal rate
is computed as,

    next_monthly_withdrawal = ⅔ * 2250 + ⅓ * 990000 / 400
                            = 1500 + 825
                            = $2325/month

So even though the portfolio grew by 10%, you only increase the monthly withdrawal
amount by 3.33% (because of the buffering).  It works both way, if the market has
a particularly bad year, it won't kill your monthly withdrawal income.

In every year after the first year, you just use the 2nd equation to determine
the withdrawal amount for the following year.  Over
the long haul, with these equations, your withdrawal amount will hover around 3%
of your total portfolio value[^3].

[^3]: Technically if the market steadily increases over the long term your withdrawal amount would probably lag slightly below 3% on average, but who's counting?

## The General Version

If you prefer a little more control over the withdrawal rate and buffer size,
then here's the more general equations for this strategy:

<div markdown="1" class="highlight">
    initial_monthly_withdrawal =
         portfolio_value * withdrawal_rate / 12
    next_monthly_withdrawal    =
         (1-1/buffer_size) * current_withdrawal +
           (1/buffer_size) * portfolio_value * withdrawal_rate / 12
</div>

For example, if you prefer a more aggressive 4% withdrawal that is stabilized
by a larger 5-year buffer then the withdrawal equations would simplify to,

    initial_monthly_withdrawal = portfolio_value / 300
    next_monthly_withdrawal    =
         ⅘ * current_withdrawal + ⅕ * current_portfolio_value / 300

## Easy Peasy

That's all there is to implementing the Super-Simple Virtual-Buffer Withdrawal Strategy.
If you want to see the math behind the strategy, refer to the overly-complex
[original article](/super-simple-virtual-buffer-withdrawal-strategy/).
The main takeaway from this strategy is that you only need to know two data
points each year, (1) the current withdrawal amount and (2) the current
portfolio value.
With those two numbers, you can calculate the next year's withdrawal amount in
a way that is simple to compute but still buffers your retirement income against
wild fluctuations in the market.

### Related

* [Super-Simple Virtual-Buffer Withdrawal Strategy](/super-simple-virtual-buffer-withdrawal-strategy/)
* [Safe Withdrawal Rates for Vampires](/safe-withdrawal-rates-for-vampires/)
* [Buffer Withdrawals to Stabilize Income](/buffer-withdrawals-to-stabilize-income/)
* [The 30-30 Withdrawal Strategy](/the-30-30-withdrawal-strategy/)
