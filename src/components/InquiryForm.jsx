'use client'

import { useState } from 'react'

import { Button } from '@/components/Button'
import { siteConfig } from '@/lib/site'

/*
  Five fields. Every extra one costs conversions, so budget, timeline and
  "what are you building" are the only qualifiers here — everything else can be
  asked on the call.
*/

const fieldClass =
  'mt-1.5 block w-full border border-rule bg-paper px-3 py-2.5 font-body text-base text-ink placeholder:text-mute/70 focus:border-signal focus:outline-none focus-visible:outline-none'

const labelClass = 'block font-mono text-2xs uppercase text-mute'

const TIMELINES = ['Exploring', 'Next month', 'This quarter', 'Urgent']
const BUDGETS = ['Not sure yet', 'Under $5k', '$5k – $20k', '$20k+']

function Field({ label, children, hint }) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      {children}
      {hint ? <span className="mt-1 block text-xs text-mute">{hint}</span> : null}
    </label>
  )
}

export function InquiryForm() {
  const [state, setState] = useState('idle') // idle | sending | sent | error

  async function onSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    // Honeypot: bots fill every field they find.
    if (data.company_website) return

    setState('sending')

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error(String(response.status))
      setState('sent')
      form.reset()
    } catch {
      // Never lose an inquiry to a misconfigured backend: hand it to the user's
      // mail client with everything already filled in.
      setState('error')
      const body = [
        `Name: ${data.name || ''}`,
        `Company: ${data.company || ''}`,
        `Timeline: ${data.timeline || ''}`,
        `Budget: ${data.budget || ''}`,
        '',
        data.project || '',
      ].join('\n')
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        `Project enquiry — ${data.name || 'website'}`,
      )}&body=${encodeURIComponent(body)}`
    }
  }

  if (state === 'sent') {
    return (
      <div role="status" className="py-4">
        <p className="font-mono text-2xs uppercase text-signal">Sent</p>
        <p className="mt-3 text-base">
          Thanks — I’ve got it. You’ll hear back from me within a working day.
        </p>
        <p className="mt-3 text-sm text-mute">
          If it’s time-sensitive, book a slot on the left instead of waiting.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Name">
        <input name="name" type="text" required autoComplete="name" className={fieldClass} />
      </Field>

      <Field label="Company">
        <input
          name="company"
          type="text"
          autoComplete="organization"
          className={fieldClass}
        />
      </Field>

      <Field label="Email">
        <input name="email" type="email" required autoComplete="email" className={fieldClass} />
      </Field>

      <Field label="What are you trying to build?">
        <textarea
          name="project"
          rows={4}
          required
          className={fieldClass}
          placeholder="A sentence or two is plenty."
        />
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Timeline">
          <select name="timeline" className={fieldClass} defaultValue={TIMELINES[0]}>
            {TIMELINES.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field label="Budget">
          <select name="budget" className={fieldClass} defaultValue={BUDGETS[0]}>
            {BUDGETS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label>
          Company website
          <input name="company_website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex items-center gap-4 pt-1">
        <Button type="submit" disabled={state === 'sending'} track="inquiry_form">
          {state === 'sending' ? 'Sending…' : 'Send'}
        </Button>
        {state === 'error' && (
          <p role="alert" className="text-xs text-mute">
            Opening your mail client instead.
          </p>
        )}
      </div>
    </form>
  )
}
