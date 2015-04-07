---
layout: post
title: "How to Take Early IRA Withdrawals Without Penalty"
date: 2015-03-27T18:55:50-06:00
tags: [spending]
image: /images/oscilloscope-periodic.jpeg
abstract: >
  The Substantially Equal Periodic Payments (SEPP) rule, also known as Internal
  Revenue Code section 72(t), is one way to legally withdraw your traditional
  IRA funds without incurring the early-withdrawal penalty.
  This article describes how to calculate your SEPP payments and how to determine
  the size of the account from which you will be taking your payments.
---

If you are like many early retirees, when you are ready to retire you may find most
of your savings will end up in you [tax-deferred accounts](http://www.investopedia.com/terms/d/deferredaccount.asp)
like a traditional 401k or IRA.  If you are younger than 59.5 years old,
 then how do you withdraw your funds without penalty?

Here are three possible choices for withdrawing your money without penalty:

  * Roth Ladder - a Roth ladder is where you convert your traditional IRA
  funds to Roth then withdraw them 5 years later.
  * Annuities - traditional IRA funds can be used to purchase a single premium
  immediate annuity
  * Substantially Equal Period Payments (SEPP) - also referred to as 72(t) which
  is the section of the tax code that allows this withdrawal.


## Why SEPP?

While I prefer the Roth Ladder approach for withdrawing fund, it may not be enough
to meet your spending needs if you don't have enough in your Roth to begin with.
Annuities have their place in retirement too, but for early retirees they are
less attractive (rates go up as you get older).  The SEPP withdrawal can help
fill the spending gap until you are 59.5 at which point you will have other
options to avoid penalties.

## SEPP Rules

There are a couple of things you need to be aware of when setting up a SEPP
withdrawal.

  * The account you from which you do you SEPP withdrawals needs to be a stand-alone
  account.
  * You cannot trade in or out of the SEPP account after the payments have begun.
  Doing so will result in stiff penalties, so don't do it.
  * You must continue withdrawals for at least 5 years and until you are age
  59.5 or greater.
  * You must calculate your withdrawal using one of three methods:
    - amortization
    - annuitization
    - required-minimum distributions (RMD)
  * If you ever get audited you may need to show the calculation, so document
  the calculation and save it somewhere you can find later.

While there are 3 approved methods for withdrawing your money, I suggest you stick
with amortization.  The RMD method will give the smallest amount of money, especially
for younger retirees, since it is just your account value divided by your remaining
life expectancy. Amortization and annuitization tend to result in similar payouts
that are both larger than RMD.  And a larger payout is good because it means you can
use a smaller portion of your retirement funds for the SEPP withdrawals and retain some
flexibility with your remaining funds.  Between amortization and annuitization
I prefer the amortization method because it is a easier to calculate and
therefore less prone to error.

## Setup the SEPP Account

When you have decided to setup a SEPP withdrawal, the first thing you should do
is create a separate account inside of your existing brokerage account.  For example,
if you have funds at Vanguard, you can break your accounts into separate sub-accounts
that each have their own set of funds in them.

The amount you put into your SEPP account depends largely on the calculation
you'll be doing below.  I recommend that you first determine how much **income** you
will need from the SEPP withdrawal and then reverse the calculation to determine how much
money to put into your newly created account.

## Doublecheck the Calculation

Below are three ways to do this calculation: spreadsheet formula, web calculators
and good old mathematics. All 3 methods should give you the same number so it's
a good idea to try at least 2 of these methods to sanity check that you're doing
it right.

For all of these methods, you will need the following 3 numbers:

  1. `rate` = 120% of the Applicable Federal Rate.  Don't worry, you're not alone,
  nobody else has heard of this number either.  It's a number that the IRS
  publishes monthly and can be
  [found here](http://apps.irs.gov/app/picklist/list/federalRates.html).
  You are allowed to choose one of the past 2 months when you do the calculation
  but to be safe I would just choose the rate from the most recent month.
  1. `expectancy` = your remaining life expectancy in years.  This is also published
  by the IRS and can be [found here](http://www.irs.gov/pub/irs-pdf/p590b.pdf).
  Look in Appendix B for the life expectancy tables using the age you will be on
  your birthday this year.
  1. `principal` = the size of the account you will be taking distributions from.

### Spreadsheet Formula

The spreadsheet formula that I have tested using Google Spreadsheet is simply:

```
=-pmt(rate, expectancy, principal)
```

This will give you the amount you can withdraw annually so divide by 12 if you
are going to make monthly withdrawals.

### SEPP Calculators

There are several calculators that will help you figure out the SEPP withdrawals.
I recommend the following:

  * [72t.net Calculator](http://72t.net/72t/Calculator/Distributions)
  * [Dinkytown Calculator](http://www.dinkytown.net/java/Retire72T.html)

I prefer the 72t.net calculator since it gives results to the nearest penny.
But go ahead and verify that you get the same number to the nearest dollar from
both calculators.

### Math Equation

For the mathematically inclined, you can also plug your numbers into
[the annuity formula](https://en.wikipedia.org/wiki/Amortization_calculator#The_formula).

```
income = principal * rate / (1 - (1+rate)^-expectancy)
```

## Account Size Needed for a Desired Income

If you are thinking about using SEPP withdrawals, there's a good chance that you
already know how much income you need and just want to figure out how much principal
you need to put aside to generate that income.

One approach would be to calculate how much income you get from $100,000 then
use that to figure out how much you need for your desired income level.

For example, let's say you want an annual income of $12,000,
the current mid-term rate is 2.04%, and your remaining life expectancy is 36 years.
Plugging in those numbers for $100,000 of principal gives you an income of $3,948.53.
To get to your desired income of $12,000 you then divide $12,000 by $3,948.53 and
multiply by $100,000 to arrive at a principal of $303,910.

The more direct approach, is to invert the 'math equation' above and calculate
your payment directly with this formula:

```
principal = income * (1 - (1+rate)^-expectancy) / rate
```

In any case, once you arrive at what you think the correct principal amount is,
double check it by any of the above methods to make sure it gives you the desired
income.  Then set aside that amount in an account that you won't touch except to
do the SEPP withdrawals.

## Summary

SEPP withdrawals aren't for everyone.  But if you find yourself in a situation
where you need to use them, this article should help you figure out how to do the
calculations needed. Regardless of what happens in the market you should
continue withdrawing the exact same amount, so have your brokerage do
an automatic withdrawal so that you aren't tempted to mess with it.
Also, don't forget that you will need to pay income taxes on your withdrawals
since this is just income that you deferred from the past.
