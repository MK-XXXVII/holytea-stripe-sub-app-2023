import type { PlanLimit, Price } from '@prisma/client'

/**
 * Defines our plans IDs.
 */
export const enum PlanId {
  SMALL = '3x50gr',
  BIG = '3x100gr',
  PREMIUM = '5x100gr',
}

/**
 * Defines our plan pricing intervals.
 */
export const enum Interval {
  MONTH = 'month',
  YEAR = 'year',
}

/**
 * Defines our plan pricing currencies.
 */
export const enum Currency {
  DEFAULT_CURRENCY = 'eur',
  USD = 'usd',
  EUR = 'eur',
}

/**
 * Defines our plans structure.
 */
export const PRICING_PLANS = {
  [PlanId.SMALL]: {
    id: PlanId.SMALL,
    name: '3 x 50 Grams',
    description: 'Here is an change that i test',
    features: ['1206 Star per Minute', 'Limited to 9 Stars'],
    limits: { maxItems: 9 },
    prices: {
      [Interval.MONTH]: {
        [Currency.USD]: 2097,
        [Currency.EUR]: 2097,
      },
      [Interval.YEAR]: {
        [Currency.USD]: 21389,
        [Currency.EUR]: 21389,
      },
    },
  },
  [PlanId.BIG]: {
    id: PlanId.BIG,
    name: '3 x 100 Grams',
    description: 'Starter Plan Description',
    features: ['4 Stars per Minute', 'Limited to 99 Stars'],
    limits: { maxItems: 99 },
    prices: {
      [Interval.MONTH]: {
        [Currency.USD]: 3397,
        [Currency.EUR]: 3397,
      },
      [Interval.YEAR]: {
        [Currency.USD]: 34649,
        [Currency.EUR]: 34649,
      },
    },
  },
  [PlanId.PREMIUM]: {
    id: PlanId.PREMIUM,
    name: '5 x 100 Grams',
    description: 'Pro Plan Description',
    features: ['8 Stars per Minute', 'Limited to 999 Stars'],
    limits: { maxItems: 999 },
    prices: {
      [Interval.MONTH]: {
        [Currency.USD]: 4497,
        [Currency.EUR]: 4497,
      },
      [Interval.YEAR]: {
        [Currency.USD]: 45869,
        [Currency.EUR]: 45869,
      },
    },
  },
} satisfies PricingPlan

/**
 * A helper type that defines our price by interval.
 */
export type PriceInterval<
  I extends Interval = Interval,
  C extends Currency = Currency,
> = {
  [interval in I]: {
    [currency in C]: Price['amount']
  }
}

/**
 * A helper type that defines our pricing plans structure by Interval.
 */
export type PricingPlan<T extends PlanId = PlanId> = {
  [key in T]: {
    id: string
    name: string
    description: string
    features: string[]
    limits: Pick<PlanLimit, 'maxItems'>
    prices: PriceInterval
  }
}
