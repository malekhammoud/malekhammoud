'use client'

import { useMemo, useState } from 'react'

/*
  Self-hosted vs hosted-API cost model.

  Deliberately simple and fully visible: this is arithmetic, not a forecast.
  Every assumption is an input the visitor can change, and the page says out
  loud what the model ignores — because a calculator that hides its assumptions
  is a sales tool, and this one is supposed to be useful even when the answer
  is "keep using the API".
*/

const DEFAULTS = {
  requestsPerDay: 2000,
  inputTokens: 900,
  outputTokens: 350,
  apiInputPrice: 0.5,
  apiOutputPrice: 1.5,
  hardwareCost: 1400,
  powerWatts: 45,
  electricityRate: 0.13,
  hoursPerDay: 24,
}

const FIELDS = [
  {
    group: 'Your workload',
    items: [
      { key: 'requestsPerDay', label: 'Requests per day', step: 100 },
      { key: 'inputTokens', label: 'Input tokens / request', step: 50 },
      { key: 'outputTokens', label: 'Output tokens / request', step: 50 },
    ],
  },
  {
    group: 'Hosted API pricing',
    items: [
      { key: 'apiInputPrice', label: 'Input $ / 1M tokens', step: 0.05 },
      { key: 'apiOutputPrice', label: 'Output $ / 1M tokens', step: 0.05 },
    ],
  },
  {
    group: 'Self-hosting',
    items: [
      { key: 'hardwareCost', label: 'Hardware cost ($, once)', step: 50 },
      { key: 'powerWatts', label: 'Average power draw (W)', step: 5 },
      { key: 'electricityRate', label: 'Electricity $ / kWh', step: 0.01 },
      { key: 'hoursPerDay', label: 'Hours powered / day', step: 1, max: 24 },
    ],
  },
]

const money = (value) =>
  value >= 1000
    ? `$${Math.round(value).toLocaleString('en-CA')}`
    : `$${value.toFixed(2)}`

const DAYS_PER_MONTH = 30.44

export function LlmCostCalculator() {
  const [values, setValues] = useState(DEFAULTS)

  const set = (key) => (event) => {
    const next = Number(event.target.value)
    setValues((current) => ({
      ...current,
      [key]: Number.isFinite(next) && next >= 0 ? next : 0,
    }))
  }

  const result = useMemo(() => {
    const requestsPerMonth = values.requestsPerDay * DAYS_PER_MONTH
    const inputMTokens = (requestsPerMonth * values.inputTokens) / 1_000_000
    const outputMTokens = (requestsPerMonth * values.outputTokens) / 1_000_000

    const apiMonthly =
      inputMTokens * values.apiInputPrice + outputMTokens * values.apiOutputPrice

    const kWhPerMonth =
      (values.powerWatts / 1000) * values.hoursPerDay * DAYS_PER_MONTH
    const selfMonthly = kWhPerMonth * values.electricityRate

    const monthlySaving = apiMonthly - selfMonthly
    const breakevenMonths =
      monthlySaving > 0 ? values.hardwareCost / monthlySaving : null

    const horizon = [12, 24, 36].map((months) => ({
      months,
      api: apiMonthly * months,
      self: values.hardwareCost + selfMonthly * months,
    }))

    return {
      requestsPerMonth,
      inputMTokens,
      outputMTokens,
      apiMonthly,
      selfMonthly,
      monthlySaving,
      breakevenMonths,
      horizon,
    }
  }, [values])

  const threeYear = result.horizon[2]
  const max = Math.max(threeYear.api, threeYear.self, 1)

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-10">
      <form
        className="space-y-8 lg:col-span-5"
        onSubmit={(event) => event.preventDefault()}
      >
        {FIELDS.map((section) => (
          <fieldset key={section.group}>
            <legend className="font-mono text-2xs uppercase text-mute">
              {section.group}
            </legend>
            <div className="mt-4 space-y-3">
              {section.items.map((field) => (
                <label
                  key={field.key}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-sm">{field.label}</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    max={field.max}
                    step={field.step}
                    value={values[field.key]}
                    onChange={set(field.key)}
                    className="w-28 border border-rule bg-paper px-2.5 py-1.5 text-right font-mono text-sm text-ink focus:border-signal focus:outline-none"
                  />
                </label>
              ))}
            </div>
          </fieldset>
        ))}

        <button
          type="button"
          onClick={() => setValues(DEFAULTS)}
          className="font-mono text-2xs uppercase text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
        >
          Reset to defaults
        </button>
      </form>

      <div className="mt-12 lg:col-span-7 lg:mt-0">
        <div className="border border-rule bg-panel/50 p-6">
          <p className="font-mono text-2xs uppercase text-mute">
            Monthly, at {Math.round(result.requestsPerMonth).toLocaleString('en-CA')} requests
          </p>

          <div className="mt-5 grid grid-cols-2 gap-6">
            <div>
              <p className="font-mono text-2xs uppercase text-mute">Hosted API</p>
              <p className="mt-1 font-display text-3xl font-bold">
                {money(result.apiMonthly)}
              </p>
            </div>
            <div>
              <p className="font-mono text-2xs uppercase text-mute">
                Self-hosted power
              </p>
              <p className="mt-1 font-display text-3xl font-bold text-signal">
                {money(result.selfMonthly)}
              </p>
            </div>
          </div>

          <p className="mt-6 border-t border-rule pt-5 text-base">
            {result.breakevenMonths === null ? (
              <>
                At this volume the API is cheaper per month than running the
                machine. <strong>Keep using the API</strong> — there is no
                payback period to reach.
              </>
            ) : result.breakevenMonths > 60 ? (
              <>
                Hardware pays for itself after{' '}
                <strong>{Math.ceil(result.breakevenMonths)} months</strong> —
                long enough that volume, not cost, should decide this.
              </>
            ) : (
              <>
                Hardware pays for itself after{' '}
                <strong>
                  {Math.ceil(result.breakevenMonths)}{' '}
                  {Math.ceil(result.breakevenMonths) === 1 ? 'month' : 'months'}
                </strong>
                , then costs {money(result.selfMonthly)}/month to keep running.
              </>
            )}
          </p>
        </div>

        <div className="mt-6 border border-rule p-6">
          <p className="font-mono text-2xs uppercase text-mute">
            Cumulative cost
          </p>
          <div className="mt-5 space-y-5">
            {result.horizon.map((row) => (
              <div key={row.months}>
                <div className="flex items-baseline justify-between font-mono text-2xs uppercase">
                  <span className="text-mute">{row.months} months</span>
                  <span>
                    <span className="text-mute">API {money(row.api)}</span>
                    <span className="mx-2 text-rule">·</span>
                    <span className="text-signal">
                      Self {money(row.self)}
                    </span>
                  </span>
                </div>
                <div className="mt-2 space-y-1">
                  <div
                    className="h-2.5 bg-ink"
                    style={{ width: `${Math.max((row.api / max) * 100, 0.5)}%` }}
                  />
                  <div
                    className="h-2.5 bg-signal"
                    style={{ width: `${Math.max((row.self / max) * 100, 0.5)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 border-t border-rule pt-4 font-mono text-2xs uppercase text-mute">
            <span className="mr-2 inline-block h-2 w-4 translate-y-px bg-ink" />
            Hosted API
            <span className="ml-5 mr-2 inline-block h-2 w-4 translate-y-px bg-signal" />
            Self-hosted
          </p>
        </div>

        <div className="mt-6 border-l-2 border-signal bg-panel/40 p-5">
          <p className="font-mono text-2xs uppercase text-mute">
            What this model ignores
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-mute">
            <li>
              Your time. Setup, and someone keeping it running afterwards.
            </li>
            <li>
              Quality. An open-weight model that fits your hardware may not
              match the hosted one you are comparing against.
            </li>
            <li>
              Throughput ceilings — one machine has a request rate above which
              you need a second one.
            </li>
            <li>
              Data constraints, which for a lot of teams decide this before cost
              is even discussed.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
