---
layout: post
title: "Estimating Your Social Security Benefit for an Early Retirement"
date: 2015-08-20
tags: [investing, spending, other]
image: /images/chimp-typing.jpeg
abstract: >
  How much will your Social Security benefit be if you retire before your full
  retirement age?
---

As demonstrated in the [Social Security bridge](./building-a-bridge-to-social-security) article,
knowing how much your benefit will be could have a large bearing on when you will be able to retire.
Unfortunately, the benefits statement that the Social Security Administration (SSA) provides
only estimates your benefit amount in terms of your continued employment until
your full retirement age.  But you may want to know how much your benefit would
be if you retired before your full retirement age.

## Prerequisite

Before you can estimate your benefit at all, you need to suck it up and get
your last Social Security statement.  If you've never logged into the SSA website
then you may have already received a statement.  By default the SSA sends these
statements every 5 years starting at age 25.  But if you want the most up-to-date statement then
you'll need to [log in to the SSA website](http://www.ssa.gov/signin) to see it.

## Quick Estimate

If you just want a quick back-of-the-envelope estimate of your benefits then you
can project the estimated benefit that the SSA provides to the number of years
you hope to work.  Near the top of the Social Security statement is a section titled
"Your Estimated Benefits".  Because delaying benefits to age 70 is usually the smartest
choice, get the number on the line that says "if you continue working until age 70".
This number represents what your benefit might be at age 70 if you continued working at your
current level of income.

The way social security works is that they use your top 35 earning years, adjusted for inflation,
in a formula to calculate your benefits.  And because the estimate on your statement assumes
you will work until age 70 which is likely more than 35 years, the estimate assumes
you will not retire early.  For a quick estimate, in the case where you will work less
than 35 years, you can estimate your benefit as:

```
  estimated_benefit = ssa_estimate * years_worked / 35
```

Let's demonstrate this with an example.  If the SSA says your estimated benefit is
$2800/month but you want to quit working after 25 years of employment, then your
early-retirement estimate would be about `2800 * 25 / 35` or $2000/month.

You can see that each additional year, up until your 35th working year increases
your benefit by about `1/N` percent.  So working 26 years instead of 25 years means you
would get about 26/25 or 4% more than if you stopped working after 25 years.  But
working 11 instead of 10 years could increase that future benefit by 10%.

Also, working more than 35 years likely will have little effect on your
benefit except that it might replace one of your lower-earning years in the calculation.

Keep in mind that you don't qualify for Social Security benefits until you have worked
40 quarters (10 years).  So if you're a super saver and are tempted to retire after
9.9 years, you might want to see if it's worth working another month or two to qualify
for the benefits.

## Better Estimate

There are quite a few Social Security calculators out there but most of them are
more geared towards what the best strategy is for taking social security.  The
best calculator I've found for estimating your social security benefits is [the
"Online Calculator" on the SSA website](http://www.ssa.gov/planners/retire/AnypiaApplet.html).
Let's go through how to utilize this calculator for estimating early retirement
benefits.

After setting your birthday, the first entry to change on the calculator is the "Age at Retirement".
Change that from the default value of 66 to 70 because delaying benefits until age 70
is usually the best thing to do.

![age at retirement = 70](/images/ss_estimate_age_at_retirement_70.png)

Filling in the earnings section on the calculator is somewhat tedious.
There's no easy way to do it, just type all your earnings into the calculator.
It's important that they are entered on the correct years because the calculator will apply
different adjustments for inflation depending on the year.

Once you have all the numbers entered, it's time to sanity check your numbers.
Take the number in the last year of the table (2014 as of this writing), and
put that same number in the "Earnings for 2015" and "Earnings for 2016 and later"
fields then click "Calculate Benefit."  For example, if you earned $60,000 in 2014,
enter that for 2015, 2016 and beyond.

![verify amounts](/images/ss_estimate_verify.png)

Now calculate your benefits by pressing the "Calculate Benefit" button and vieiwing
the estimates in the "Benefit estimates" section of the calculator.
If you entered all of your data correctly into the calculator then the field labeled
"Your monthly retirement benefit" on the calculator should exactly match the amount
labeled "if you continue working until age 70" on your Social Security statement.

![estimate results](/images/ss_estimate_result.png)

Now it's time to play with the numbers.  What if you want to retire at the beginning
of next year.  You can enter your estimated earnings for the current year and
enter zero for "Earnings in 2016 and later".

![retire next year](/images/ss_estimate_retire_next_year.png)

Unfortunately, this tool isn't great for what-if scenarios a few years into the
future.  But you can trick it into giving an answer that might be close to your
scenario.

For example, what if you have worked 20 years and want to retire 5 years from now.
The tool doesn't let you enter 5 future years of income followed by zeroes.
So instead, you could take that 5 years of earnings and spread it over the remainder
of the 35 year timespan and enter that number as your future earnings.  Mathematically,
the number to enter for future earnings is,

```
fake_future_earnings = actual_earnings * years_until_retirement / (35 - years_worked)
```

By way of example, if you have worked 20 years and expect to earn $60,000 for the next
5 years, that's $300,000 total.  Spreading that $300,000 over 35-20 = 15 years means
that you would enter $20,000 for your future earnings.

![retire in 5 years](/images/ss_estimate_retire_5_years.png)

Now it's time for a disclaimer.  Estimating future benefits based on several years
of fake earnings is probably not going to be terribly accurate because you won't
actually be working those future years until you hit 35 years of employment and future
inflation could wreak havoc with such an estimate.  So take this part with a grain of salt.
But it should be at least as accurate as the "quick estimate" above.

## Summary

Knowing your future Social Security benefits can be important when determining when you will be able
to retire.  For example, if you want to [build a Social Security bridge](/building-a-bridge-to-social-security/)
you need to know how much money to dedicate to the bridge.

This article gives you both a quick-and-dirty method and a more accurate method using the calculator
provided by the Social Security Administration.  So dust off your monocle and figure out how much your
benefit will be.

### Related

* [Building a Bridge to Social Security](/building-a-bridge-to-social-security/)
