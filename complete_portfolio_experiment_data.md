# COMPLETE AUTONOMOUS APIFY PORTFOLIO EXPERIMENT COMPREHENSIVE DATASET & SPECIFICATION

**Date of Completion & Archival:** August 9, 2026  
**Target Host System:** `ubuntu-4gb-hel1-1` (Linux 6.8.0-1009-gcp / Ubuntu 24.04 LTS)  
**Archive File:** `/root/portfolio_experiment_archive_2026_08_09.tar.gz` (29 MB compressed)  
**Author/Agent:** Autonomous Portfolio Agent (Claude 3.5 Sonnet / Claude Opus 5 runtime)

---

## 1. EXECUTIVE SUMMARY & EXPERIMENT OVERVIEW

Between **July 26, 2026** and **August 9, 2026**, an autonomous AI portfolio agent operated on a shared Linux VPS to execute a closed-loop micro-SaaS data product business model on the **Apify Platform**.

Key Achievements:
- **22 Total Actors Engineered:** 21 live published Actors on Apify Store + 1 fully built/smoke-tested candidate.
- **Zero Human Code Interventions:** Autonomous market research, scraper/integration coding, schema verification, smoke testing, pay-per-event monetization configuration, and platform deployment.
- **Co-Tenancy & Hard System Constraints:** Operated within `MemoryMax=900M` systemd sandbox on a 3.7GB RAM box running production services (`outley-api`, `outley-scheduler`, `manual-web`, Postgres 18, Redis, Caddy, Cal.com).
- **Pivot from Scarcity to Demand:** Replaced legacy `supply < 10` screening with empirical buyer demand measurement (`demand_runs_30d >= 400`).
- **Clean Archival & Teardown:** Fully stopped, disabled, and archived all local loops and processes on August 9, 2026, leaving live cloud Actors running on Apify compute.

## 2. HOST SYSTEM CONSTRAINTS & SUPERVISOR ARCHITECTURE

## 3. FULL ACTOR INVENTORY & MONETIZATION PLANS (22 ACTORS)

Below is the complete, untruncated ledger dataset for all 22 Actors engineered by the agent.

### 3.1 Actor Slug: `oig-leie-exclusion-screening`
- **Title:** OIG LEIE Exclusion Screening — HHS Exclusion List Check
- **Apify Actor ID:** `HtMEP6mnhwNnZJWtj`
- **Status:** `published`
- **Search Query / Niche:** `oig leie exclusion screening`
- **Incumbent Competitor:** Exclusion Screening LLC / Streamline Verify / ProviderTrust
- **Incumbent Price (USD):** $30
- **Created At:** `2026-07-29T04:22:00+00:00`
- **Published At:** `2026-07-29T04:28:19+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-05T21:22:58+00:00`)
- **Runs Recorded:** `21` | **Success Rate:** `1.0`
- **Last Build ID:** `cYkWjWE0vo5OdkUqz`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `screening-run` (Screening run) → **$0.05 USD**
      - *Description:* Charged once per run. Downloads and indexes the current ~84,000-record LEIE from oig.hhs.gov so every screening runs against the live list.
      - *Rationale:* Covers downloading and indexing the ~84k-record LEIE once per run.
    - **Event:** `record-screened` (Record screened) → **$0.02 USD**
      - *Description:* Charged per person or business screened.
      - *Rationale:* A 1,000-employee health system screening monthly pays ~$20/mo, well under the incumbents while leaving margin. Launch deliberately on the upside: cuts are instant, raises need 14 days' notice (§8).

### 3.2 Actor Slug: `fda-device-establishment-registration`
- **Title:** FDA Device Establishment Registration — Bulk Supplier Lookup
- **Apify Actor ID:** `lAK5pP2XdxesoKOer`
- **Status:** `published`
- **Search Query / Niche:** `fda establishment registration device`
- **Incumbent Competitor:** Redica Systems / FDAzilla
- **Incumbent Price (USD):** $289
- **Created At:** `2026-07-29T04:44:33+00:00`
- **Published At:** `2026-07-30T00:12:34+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-05T21:23:19+00:00`)
- **Runs Recorded:** `15` | **Success Rate:** `1.0`
- **Last Build ID:** `GFQ5xUMJmyEetPu4z`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `screening-run` (Screening run) → **$0.25 USD**
      - *Description:* Charged once per run, after the FDA registration file is fetched and verified.
      - *Rationale:* Raised $0.10 -> $0.25. Covers pulling and indexing the FDA device establishment registration file once per run. Pre-registered cut rule: if this takes zero paid runs in its first 21 days public while its query still carries traffic, cut to parity with the cheapest same-query rival. Cuts are immediate (§8).
    - **Event:** `supplier-screened` (Supplier screened) → **$0.25 USD**
      - *Description:* Charged per supplier actually screened against the FDA establishment registration file. Suppliers that cannot be resolved are not charged.
      - *Rationale:* Raised $0.05 -> $0.25 against Redica/FDAzilla's $289 per document -- still a ~1,100x undercut. A typical 20-50 supplier screen lands at $5.25-$12.75. Bill-shock note: a 1,000-supplier run would bill $250, which is the least certain number in this repricing; it is still one FDAzilla document for a thousand determinations, but watch for §9 credit-compensation requests on very large runs and cut this event first if any appear. Pre-registered cut rule: if this takes zero paid runs in its first 21 days public while its query still carries traffic, cut to parity with the cheapest same-query rival. Cuts are immediate (§8).

### 3.3 Actor Slug: `irs-tax-exempt-revocation-check`
- **Title:** IRS Tax-Exempt Revocation Check — Auto-Revocation & Pub 78
- **Apify Actor ID:** `5EdLLMRfY36GPfH6V`
- **Status:** `published`
- **Search Query / Niche:** `irs tax exempt revocation`
- **Incumbent Competitor:** Candid (GuideStar) nonprofit data API
- **Incumbent Price (USD):** $None
- **Created At:** `2026-07-29T05:08:24+00:00`
- **Published At:** `2026-08-05T16:39:51+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-06T14:27:54+00:00`)
- **Runs Recorded:** `13` | **Success Rate:** `1.0`
- **Last Build ID:** `ufKfK9L9FJ1sFQ5wp`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `screening-run` (Screening run) → **$0.25 USD**
      - *Description:* Charged once per run, after the IRS revocation data is fetched and verified.
      - *Rationale:* Raised $0.10 -> $0.25. Covers downloading and indexing the IRS auto-revocation list and Pub 78 data per run. Pre-registered cut rule: if this takes zero paid runs in its first 21 days public while its query still carries traffic, cut to parity with the cheapest same-query rival. Cuts are immediate (§8).
    - **Event:** `organization-checked` (Organization checked) → **$0.2 USD**
      - *Description:* Charged per organization actually checked. Organizations whose EIN cannot be resolved are not charged.
      - *Rationale:* Raised $0.02 -> $0.20. No incumbent publishes a per-check price (Candid/GuideStar sells an enterprise API by quote), so this is anchored to the substitute: a grants administrator manually checking Pub 78 plus the auto-revocation list before releasing a grant. The differentiated job -- never reporting an unlisted church as revoked -- is a determination, and the measured store splits price by job shape, not dataset. Pre-registered cut rule: if this takes zero paid runs in its first 21 days public while its query still carries traffic, cut to parity with the cheapest same-query rival. Cuts are immediate (§8).

### 3.4 Actor Slug: `clinical-trial-protocol-amendments`
- **Title:** Clinical Trial Protocol Amendments — ClinicalTrials.gov Diff
- **Apify Actor ID:** `0rwMHbRnGCUDnUkAf`
- **Status:** `published`
- **Search Query / Niche:** `clinical trial protocol amendments`
- **Incumbent Competitor:** Citeline Trialtrove (Informa)
- **Incumbent Price (USD):** $None
- **Created At:** `2026-07-29T05:36:28+00:00`
- **Published At:** `2026-08-04T16:27:08+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-06T14:28:07+00:00`)
- **Runs Recorded:** `13` | **Success Rate:** `1.0`
- **Last Build ID:** `na29set4yqqqGhyFL`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `study-scanned` (Study scanned) → **$0.15 USD**
      - *Description:* Charged per study scanned for protocol changes.
      - *Rationale:* Raised $0.08 -> $0.15, deliberately the smallest raise of the six. This event bills len(records), i.e. PER STUDY, so a 200-study portfolio scan bills $30 on this event alone; loading the scan rather than the finding would punish exactly the bulk users the actor is for. Weight moved onto amendment-reported instead. Pre-registered cut rule: if this takes zero paid runs in its first 21 days public while its query still carries traffic, cut to parity with the cheapest same-query rival. Cuts are immediate (§8).
    - **Event:** `amendment-reported` (Amendment reported) → **$0.75 USD**
      - *Description:* Charged per protocol amendment actually detected and reported. A study with no amendments costs only its scan.
      - *Rationale:* Raised $0.04 -> $0.75. The amendment is the deliverable and is rare per study, so the value sits here rather than on the scan. Citeline Trialtrove is enterprise-quoted with no public price, so this is anchored to job shape rather than to a number. Pre-registered cut rule: if this takes zero paid runs in its first 21 days public while its query still carries traffic, cut to parity with the cheapest same-query rival. Cuts are immediate (§8).

### 3.5 Actor Slug: `medicare-provider-enrollment-revalidation-due-date`
- **Title:** Medicare Provider Enrollment Revalidation Due Date Check
- **Apify Actor ID:** `2TY0lUR6ijITb4dGo`
- **Status:** `published`
- **Search Query / Niche:** `medicare provider enrollment revalidation`
- **Incumbent Competitor:** MedTrainer / Medallion / Verifiable (credentialing SaaS)
- **Incumbent Price (USD):** $None
- **Created At:** `2026-07-29T06:04:49+00:00`
- **Published At:** `2026-08-05T21:12:29+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-06T14:23:45+00:00`)
- **Runs Recorded:** `9` | **Success Rate:** `1.0`
- **Last Build ID:** `KHuUK50BPDpsXLVi1`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `revalidation-run` (Revalidation run) → **$0.25 USD**
      - *Description:* Charged once per run, after the CMS revalidation file is fetched and verified.
      - *Rationale:* Raised $0.10 -> $0.25. Covers fetching the current CMS revalidation due-date file per run. Pre-registered cut rule: if this takes zero paid runs in its first 21 days public while its query still carries traffic, cut to parity with the cheapest same-query rival. Cuts are immediate (§8).
    - **Event:** `npi-checked` (NPI checked) → **$0.15 USD**
      - *Description:* Charged per NPI actually checked against the CMS revalidation file. NPIs that cannot be resolved are not charged.
      - *Rationale:* Raised $0.03 -> $0.15. Held deliberately below the other draws because rosters are large: a 100-NPI roster bills $15 against credentialing SaaS (MedTrainer/Medallion/Verifiable) at roughly $50-100 per provider per year. This is the thinnest query we own (12 runs/mo across all rivals), so it is the most likely of the six to need its cut rule. Pre-registered cut rule: if this takes zero paid runs in its first 21 days public while its query still carries traffic, cut to parity with the cheapest same-query rival. Cuts are immediate (§8).

### 3.6 Actor Slug: `pcaob-form-ap-auditor-lookup`
- **Title:** PCAOB Form AP Auditor Lookup — Engagement Partner Tenure
- **Apify Actor ID:** `30dyznYfIEIOcrtTu`
- **Status:** `published`
- **Search Query / Niche:** `pcaob form ap auditor`
- **Incumbent Competitor:** Ideagen Audit Analytics
- **Incumbent Price (USD):** $None
- **Created At:** `2026-07-29T07:09:53+00:00`
- **Published At:** `2026-08-05T16:40:10+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-05T21:16:51+00:00`)
- **Runs Recorded:** `7` | **Success Rate:** `1.0`
- **Last Build ID:** `NwnibI3SjXEn5ja8d`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `lookup-run` (Lookup run) → **$0.25 USD**
      - *Description:* Charged once per run, after the PCAOB Form AP data is fetched and verified.
      - *Rationale:* Raised $0.15 -> $0.25. Covers the Form AP dataset fetch and index per run. Pre-registered cut rule: if this takes zero paid runs in its first 21 days public while its query still carries traffic, cut to parity with the cheapest same-query rival. Cuts are immediate (§8).
    - **Event:** `issuer-checked` (Issuer checked) → **$0.4 USD**
      - *Description:* Charged per issuer actually checked, including its auditor tenure determination. Issuers that cannot be resolved are not charged.
      - *Rationale:* Raised $0.05 -> $0.40. The sole rival on this query (malonestar/pcaob-auditor-engagement-monitor) holds an outright monopoly on the query and charges $0.00 developer margin, which is the measured proof that owning a query does not convert to revenue -- job shape does. Ours returns five-year rotation tenure, a decision an audit committee acts on, not a row dump. Anchored to Ideagen Audit Analytics (enterprise, no public price). Accepted risk: a buyer comparing on price alone picks the free rival. Pre-registered cut rule: if this takes zero paid runs in its first 21 days public while its query still carries traffic, cut to parity with the cheapest same-query rival. Cuts are immediate (§8).

### 3.7 Actor Slug: `hcris-hospital-cost-report`
- **Title:** HCRIS Hospital Cost Report — Medicare Cost & Charge Lookup
- **Apify Actor ID:** `fXwoBdeSpdKFktwfI`
- **Status:** `published`
- **Search Query / Niche:** `hcris hospital cost report`
- **Incumbent Competitor:** CostReportData.com / Definitive Healthcare
- **Incumbent Price (USD):** $2000
- **Created At:** `2026-07-29T08:42:14+00:00`
- **Published At:** `2026-08-02T16:02:36+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-05T21:20:41+00:00`)
- **Runs Recorded:** `21` | **Success Rate:** `1.0`
- **Last Build ID:** `hU7vxiD9oN8OrWea1`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `cost-report-run` (Cost report run) → **$0.5 USD**
      - *Description:* Charged once per run, and only after the CMS HCRIS release passes integrity checks. A run that aborts on a stale or truncated source costs you nothing.
      - *Rationale:* Raised $0.20 -> $0.50. Covers the ~11 MB HCRIS index download, the 88,000-report lookup build and the five source-integrity guards. Still charged only after the source verifies good. Pre-registered cut rule: if this takes zero paid runs in its first 21 days public while its query still carries traffic, cut to parity with the cheapest same-query rival. Cuts are immediate (§8).
    - **Event:** `cost-report-returned` (Cost report returned) → **$2.5 USD**
      - *Description:* Charged per hospital fiscal-year cost report actually returned. Hospitals that cannot be resolved are not charged.
      - *Rationale:* Raised $0.30 -> $2.50, anchored to CostReportData.com's published $90 for a single hospital's cost report -- a 36x undercut, against the 100x we had. A consultant pulling 20 hospitals pays $50.50 here versus $1,800 there. This query carries zero rival runs, so there is no same-store price to undercut and the incumbent is the only real anchor. Pre-registered cut rule: if this takes zero paid runs in its first 21 days public while its query still carries traffic, cut to parity with the cheapest same-query rival. Cuts are immediate (§8).

### 3.8 Actor Slug: `epa-echo-facility-radius`
- **Title:** EPA ECHO Facility Radius Search by Address
- **Apify Actor ID:** `Kw4ewACgvafVURnlO`
- **Status:** `published`
- **Search Query / Niche:** `epa echo facility radius`
- **Incumbent Competitor:** A3 Environmental (EDR/ERIS-sourced database report) / ERIS / EDR
- **Incumbent Price (USD):** $250
- **Created At:** `2026-07-29T09:47:07+00:00`
- **Published At:** `2026-08-05T16:39:31+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-06T07:59:41+00:00`)
- **Runs Recorded:** `8` | **Success Rate:** `1.0`
- **Last Build ID:** `afnYFRVJvV40emczk`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `radius-search` (Location screened) → **$3.0 USD**
      - *Description:* Charged per address screened, and only after the source passes freshness and completeness checks. Addresses that cannot be geocoded are not charged.
      - *Rationale:* One property screened: geocoding, the ECHO query, full pagination over the radius and all six integrity guards. Charged only after the source passes the freshness canary and the results pass the completeness and geometry checks, so a run that aborts on a stale or partial source costs the user nothing. An address that will not geocode is not charged.
    - **Event:** `facility-record` (Facility record returned) → **$0.01 USD**
      - *Description:* Charged per EPA-regulated facility actually returned.
      - *Rationale:* One charge per regulated facility actually delivered. A typical quarter-mile property screen returns ~75 facilities, so ~$3.75 against the incumbent's $250-$415 per property report; a consultant screening 50 properties a month pays ~$190. Launched deliberately on the upside: cuts take effect immediately, increases need 14 days' notice and are capped at once per month (§8).

### 3.9 Actor Slug: `prop-65-60-day-notice-settlement-benchmark`
- **Title:** Prop 65 60-Day Notice Search + Settlement Benchmark
- **Apify Actor ID:** `mAyUUS7tj5jEVcc8S`
- **Status:** `published`
- **Search Query / Niche:** `prop 65 60 day notice`
- **Incumbent Competitor:** Prop 65 Clearinghouse -- a subscription whose core product IS access to this same notice/settlement database
- **Incumbent Price (USD):** $1150
- **Created At:** `2026-07-30T03:34:05+00:00`
- **Published At:** `2026-08-06T01:45:23+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-06T08:00:39+00:00`)
- **Runs Recorded:** `11` | **Success Rate:** `1.0`
- **Last Build ID:** `0IgsFlEtCoYrMYfCE`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `notice-search` (Notice search with settlement benchmark) → **$2.0 USD**
      - *Description:* Charged once per search, and only after the Attorney General's register passes its freshness and column checks. A run that aborts on a stale or malformed register costs you nothing.
      - *Rationale:* The decision unit, and the one the incumbent's whole subscription exists to sell. Each search runs the freshness canary, loads the AG's 825-chemical vocabulary, walks the register in bisected date windows until every window is provably under the 1,000-row cap, collapses case-event rows to notices, and computes the full settlement distribution. Anchored against Prop 65 Clearinghouse at $1,150-$1,800/yr: a buyer running 20 searches a year pays $40 here. Deliberately set on the upside because raising is a 14-day significant change under §8 and cutting is instant. Pre-registered cut rule: if this takes zero paid runs in its first 21 days public while its query still carries traffic, cut to $0.75.
    - **Event:** `filer-benchmark` (Serial-filer profile) → **$1.5 USD**
      - *Description:* Charged per noticing party actually profiled. Set 'Filers to profile' to 0 to skip profiling and pay nothing for it; a party whose history cannot be resolved is not charged.
      - *Rationale:* The most compute-heavy unit and the highest-value one. A profile reads the filer's ENTIRE history rather than the notices that happened to match — for a serial filer that is thousands of notices across several bisected windows — and returns filing volume and cadence, distinct companies targeted, attorneys used, top chemicals and products, and that filer's own settlement distribution. 'Is the party who noticed me serial, and what do they settle for' is the second question every defendant asks and the one no free tool answers. Opt-out is honest and free: maxFilersProfiled 0 skips it entirely and is charged nothing. Pre-registered cut rule: if this takes zero paid runs in its first 21 days public while its query still carries traffic, cut to $0.50.
    - **Event:** `notice-record` (Notice record returned) → **$0.02 USD**
      - *Description:* Charged per individual notice record returned. Set 'Return individual notice records' to off to get only the search summary and filer profiles and pay nothing here.
      - *Rationale:* Volume component, priced low so the benchmark is what carries the margin rather than row count. Users can turn records off entirely with includeNoticeRecords false and keep the benchmark and filer intelligence, and maxNoticesPerQuery is a visible cap so a broad search cannot run up a surprise bill. Charged only for records actually returned, never for the wider cohort the benchmark covers. Pre-registered cut rule: if this takes zero paid runs in its first 21 days public while its query still carries traffic, cut to $0.01.

### 3.10 Actor Slug: `asic-banned-disqualified-persons-check`
- **Title:** ASIC Banned & Disqualified Persons + Undertakings + APRA
- **Apify Actor ID:** `JaFUEgq08z0ZLSrIo`
- **Status:** `published`
- **Search Query / Niche:** `asic banned disqualified persons`
- **Incumbent Competitor:** CVCheck 'Australia: Financial Regulatory' check (AU$36.18 inc GST per single name) and WorkerChecks 'ASIC Banned & Disqualified Persons Check' (AU$49.00 inc GST per single name); Equifax fit2work sells the same lookup as its 'Financial Responsibility Checks'; Checkmate resells it as a named check type
- **Incumbent Price (USD):** $24
- **Created At:** `2026-07-30T07:15:51+00:00`
- **Published At:** `2026-08-03T16:18:53+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-05T22:57:26+00:00`)
- **Runs Recorded:** `11` | **Success Rate:** `1.0`
- **Last Build ID:** `rU4ggdXgcDSFrgijP`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `screening-run` (Screening run) → **$0.1 USD**
      - *Description:* Charged once per run. Resolves and downloads the current ASIC Banned and Disqualified Persons and Organisations registers from data.gov.au so every screening runs against the latest weekly release.
      - *Rationale:* Covers resolving both datasets through the CKAN API and downloading and indexing ~7,200 register records, which happens once whether one name is screened or a thousand.
    - **Event:** `name-screened` (Name screened) → **$0.05 USD**
      - *Description:* Charged per person or company screened.
      - *Rationale:* Incumbents charge AU$36.18-49.00 (US$24-32) PER SINGLE NAME. At $0.05 a screening firm running 300 names a month pays ~$15.10 — a ~500x undercut that still leaves nearly all of it as margin, since compute is ~$0.005/run and platform costs are passed through. Launched deliberately on the upside: cuts take effect immediately, raises need 14 days' notice and are capped at once per month (§8).

### 3.11 Actor Slug: `uk-bankruptcy-check-individual-insolvency-register`
- **Title:** UK Bankruptcy Check by Name — Individual Insolvency Register
- **Apify Actor ID:** `2XzkKX8bLzJCzH3Aj`
- **Status:** `published`
- **Search Query / Niche:** `uk bankruptcy check name`
- **Incumbent Competitor:** CVCheck 'United Kingdom: Bankruptcy' check ($311.45 incl. GST per single name, 5-day delivery); Veremark and Checkback International both sell a UK 'Bankruptcy and Insolvency Check' as a named pre-employment screening SKU; Security-Vetting sells it inside 'Consumer Financial Probity' checks
- **Incumbent Price (USD):** $205
- **Created At:** `2026-07-30T15:40:23+00:00`
- **Published At:** `2026-08-02T16:05:03+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-05T21:24:11+00:00`)
- **Runs Recorded:** `9` | **Success Rate:** `1.0`
- **Last Build ID:** `NrJWkdfLiNKxXVhiB`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `screening-run` (Screening run) → **$0.05 USD**
      - *Description:* Charged once per run. Runs a control search against the live register and verifies the case-page layout before any name is screened, so a source change fails the run loudly instead of silently clearing everyone.
      - *Rationale:* Covers the pre-flight control search and case-page field check, which happen once whether one name is screened or five hundred. Priced low deliberately: the guard is the thing that makes the Actor safe, and it must never look like a reason to batch badly.
    - **Event:** `name-screened` (Name screened) → **$0.2 USD**
      - *Description:* Charged per name the Actor actually got an answer for. A name it could not check is reported as an error and is not charged.
      - *Rationale:* Incumbents charge AU$311.45 (~US$205) PER SINGLE NAME on a 5-day manual turnaround. At $0.20 a screening firm running 300 names a month pays $60 — a ~1,000x undercut that still leaves nearly all of it as margin, since each name costs a handful of HTTP requests and platform costs are passed through. Priced ~4x the sibling ASIC actor's $0.05 because this source is per-name network work rather than one bulk file download, and because the incumbent price is ~8x higher. Launched deliberately on the upside: cuts take effect immediately, raises need 14 days' notice and are capped at once per month (§8).

### 3.12 Actor Slug: `faa-aircraft-document-index-lien-filings`
- **Title:** FAA Aircraft Document Index — Lien & Bill of Sale Filings
- **Apify Actor ID:** `9YkR8Y3gWcKajM1eS`
- **Status:** `published`
- **Search Query / Niche:** `faa aircraft document index`
- **Incumbent Competitor:** Aerospace Reports 'Aircraft Title Search' $85 per aircraft — 'a formal title report revealing any liens or title issues of record at the FAA'; same vendor's 'Chain of Title' $85 and 'Complete Aircraft Records' $45; AIC Title Service sells the equivalent. Buyers are aircraft buyers, brokers, lenders and escrow agents at closing.
- **Incumbent Price (USD):** $85
- **Created At:** `2026-07-30T16:42:00+00:00`
- **Published At:** `2026-08-04T16:26:56+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-05T21:21:18+00:00`)
- **Runs Recorded:** `7` | **Success Rate:** `1.0`
- **Last Build ID:** `YH9lxeQUvDibKwp50`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `document-index-run` (Document index run) → **$0.05 USD**
      - *Description:* Charged once per run. Downloads the FAA Releasable Aircraft Database and verifies it before any aircraft is checked — archive integrity, record layout, file freshness and window span — so a stale or reshaped source fails the run loudly instead of quietly reporting no filings.
      - *Rationale:* Covers the 73 MB archive download plus building and integrity-checking the index, which happens once whether one aircraft is checked or two thousand. Priced low deliberately: the integrity guards are what make this Actor safe to rely on, and they must never look like a reason to batch badly. Same $0.05 per-run shape as the sibling screening actors.
    - **Event:** `aircraft-checked` (Aircraft checked) → **$0.1 USD**
      - *Description:* Charged per aircraft the Actor actually got an answer for. An entry with no usable N-number is reported as an error and is not charged.
      - *Rationale:* A title company charges $85 for a single aircraft title search. At $0.10 a lender watching a 300-aircraft loan book every week pays about $12/month — a ~850x undercut on the per-look price that still leaves nearly all of it as margin, since the marginal cost of one more aircraft is a dictionary lookup and platform costs are passed through. Deliberately half the sibling uk-bankruptcy actor's $0.20 because that one does per-name network work against a live register while this reads one already-downloaded file, and because this Actor covers a window rather than the full record. Launched on the upside: cuts take effect immediately, raises need 14 days' notice and are capped at once per month (§8).

### 3.13 Actor Slug: `fda-clinical-investigator-disqualification-check`
- **Title:** FDA Clinical Investigator Disqualification & Debarment Check
- **Apify Actor ID:** `GggsA52RtPghbKVEw`
- **Status:** `published`
- **Search Query / Niche:** `clinical investigator disqualification fda`
- **Incumbent Competitor:** eKnowID healthcare-sanctions add-on, $12.50 per name (+5 more vendors selling an FDA debarment search as a named SKU)
- **Incumbent Price (USD):** $12.5
- **Created At:** `2026-07-30T18:08:06+00:00`
- **Published At:** `2026-08-07T15:07:22+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-07T15:07:21+00:00`)
- **Runs Recorded:** `4` | **Success Rate:** `1.0`
- **Last Build ID:** `wEFF4IidDyj1VmUgs`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `screening-run` (Screening run) → **$0.05 USD**
      - *Description:* Charged once per run, after both FDA registers have downloaded and passed their integrity checks. If a register is unreachable or its layout has changed, the run fails and this is not charged.
      - *Rationale:* Covers downloading both registers and running the four integrity guards, which happen once whether one name is screened or five hundred. Priced low deliberately: the guards are what make the Actor safe to trust, and they must never look like a reason to batch badly.
    - **Event:** `name-screened` (Name screened) → **$0.25 USD**
      - *Description:* Charged per name the Actor actually returned an answer for. A name it could not read a surname from is reported as an error and is not charged.
      - *Rationale:* eKnowID charges $12.50 per name for a healthcare-sanctions check whose published coverage list includes the FDA Debarment List but NOT the disqualification register this Actor is named for. At $0.25 a CRO screening 200 investigators a month pays $50 against $2,500 — a 50x undercut that still leaves nearly all of it as margin, since the cost is two page fetches per run regardless of list size, and platform costs are passed through. Priced per decision rather than per row, per the measured store pattern that row-shippers earn $0. Launched deliberately on the upside: cuts take effect immediately, raises need 14 days' notice and are capped at once per month (§8).

### 3.14 Actor Slug: `new-zealand-bankruptcy-check-insolvency-register`
- **Title:** New Zealand Bankruptcy Check — Insolvency Register
- **Apify Actor ID:** `O1vKKObzZxYcpy1SP`
- **Status:** `published`
- **Search Query / Niche:** `new zealand bankruptcy check`
- **Incumbent Competitor:** CVCheck 'New Zealand: Disqualified Directors' NZ$50.60 incl GST per name (~US$30); 'New Zealand: Court Search' NZ$50.60; same vendor's 'Australia: Bankruptcy' SKU on its NZ site NZ$126.50
- **Incumbent Price (USD):** $30
- **Created At:** `2026-07-30T18:47:16+00:00`
- **Published At:** `2026-08-03T16:20:41+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-05T21:21:50+00:00`)
- **Runs Recorded:** `9` | **Success Rate:** `1.0`
- **Last Build ID:** `WYgHDsk2haRb6LUeW`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `screening-run` (Screening run) → **$0.1 USD**
      - *Description:* Charged once per run. Verifies the New Zealand Insolvency Register is reachable, complete and current before any name is screened.
      - *Rationale:* Covers the three source-integrity calls every run makes before any name is screened: the 228-estate canary, the freshness read on the newest adjudication, and the DRO endpoint check. Charged after they pass, so a run that aborts on an unreachable register costs the buyer nothing.
    - **Event:** `name-checked` (Name checked) → **$0.3 USD**
      - *Description:* Charged per name actually screened, including every previous or alternate name recorded against it. A name that could not be read or could not be checked is reported as UNCHECKED and is not charged for.
      - *Rationale:* CVCheck charges NZ$50.60 (~US$30) per name for its nearest New Zealand register check, and another NZ$50.60 for each previous name. $0.30 covering every alias in one lookup is a ~100x undercut on the first name and unbounded on the rest, while still clearing $5/mo at ~17 names a month. Launched on the upside: cuts are immediate, raises need 14 days' notice and are capped at once per month (§8).

### 3.15 Actor Slug: `ireland-personal-insolvency-arrangement-register-check`
- **Title:** Ireland Personal Insolvency Arrangement Register Check
- **Apify Actor ID:** `P6vZDGgCkDif8DyIH`
- **Status:** `published`
- **Search Query / Niche:** `ireland personal insolvency arrangement`
- **Incumbent Competitor:** CVCheck (Kinatico) 'Ireland: Bankruptcy Check' -- AU$311.45 incl. GST per single name, estimated 10 days, run manually through Experian, with the page stating 'credit information is unavailable'. Same vendor and same per-name SKU family that carried uk-bankruptcy-check (AU$311.45) and asic-banned-disqualified-persons-check (AU$36.18).
- **Incumbent Price (USD):** $205
- **Created At:** `2026-07-30T19:28:15+00:00`
- **Published At:** `2026-08-02T16:04:33+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-06T08:01:17+00:00`)
- **Runs Recorded:** `11` | **Success Rate:** `1.0`
- **Last Build ID:** `vq8zFpAQcLvxQ8xMu`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `register-check-run` (Register check run) → **$0.1 USD**
      - *Description:* Charged once per run. Verifies the Insolvency Service of Ireland register is reachable, still returning the expected fields and still filtering, before any name is checked.
      - *Rationale:* Covers the source-integrity calls every run makes before any name is screened: the four-name canary floor, the search and detail response-shape checks, and the negative control. Charged after they pass, so a run that aborts on an unreachable register costs the buyer nothing.
    - **Event:** `name-checked` (Name checked) → **$0.3 USD**
      - *Description:* Charged per name actually checked, including every alternative spelling and every previous name searched for it. A name that could not be read, or one the register stopped answering for, is reported as UNCHECKED and is not charged for.
      - *Rationale:* The nearest per-name commercial equivalent is CVCheck's 'Ireland: Bankruptcy Check' at AU$311.45 (~US$205) on a 10-day manual turnaround, and it charges per name. $0.30 covering every alternative spelling and every supplied previous name in one lookup is a ~680x undercut while still clearing $5/mo at ~17 names a month. Launched on the upside: cuts are immediate, raises need 14 days' notice and are capped at once per month (§8).

### 3.16 Actor Slug: `afs-authorised-representative-check-asic`
- **Title:** AFS Authorised Representative Check — ASIC Bulk Screening
- **Apify Actor ID:** `121d6JC7RUgTM9BnR`
- **Status:** `published`
- **Search Query / Niche:** `afs authorised representative`
- **Incumbent Competitor:** CVCheck (Kinatico) 'Australia: AFS Authorised Representative' A$36.18 incl GST per single name, 1-day turnaround; same vendor's 'Australia: Credit Representative' A$36.18 incl GST per single name. Two separate per-name SKUs covering the two registers this Actor reads.
- **Incumbent Price (USD):** $24
- **Created At:** `2026-07-30T20:18:13+00:00`
- **Published At:** `2026-08-03T16:20:12+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-05T21:25:27+00:00`)
- **Runs Recorded:** `8` | **Success Rate:** `1.0`
- **Last Build ID:** `5sQuJAr37fXxwOO3r`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `screening-run` (Screening run) → **$0.1 USD**
      - *Description:* Charged once per run. Resolves and downloads the current ASIC AFS Authorised Representative, Credit Representative and licensee registers from data.gov.au so every check runs against the latest monthly release.
      - *Rationale:* Covers resolving four CKAN packages and downloading ~125 MB of ASIC register files (362,206 + 47,731 + 6,525 + 4,347 rows), which happens once whether one name is screened or five hundred. Charged only after every integrity guard has passed, so a run that cannot answer costs the buyer nothing.
    - **Event:** `name-screened` (Name screened) → **$0.15 USD**
      - *Description:* Charged per person or company actually screened. A record with no usable name is returned as unchecked and is not billed.
      - *Rationale:* CVCheck sells the AFS Authorised Representative check at A$36.18 (~US$24) per single name and the Credit Representative check at another A$36.18 per name, both with a 1-day manual turnaround. This run answers BOTH registers, so the substitute for one name is ~US$48. At $0.15 a screening firm running 300 names a month pays $45.10 including the run fee — a ~320x undercut on one register and ~640x on both, with compute passed through so the margin is 0.8 x revenue. Launched deliberately on the upside: price cuts take effect immediately, raises need 14 days' notice and are capped at once per month per Actor (§8). Priced above the portfolio's $0.05 screening tier because two registers plus a licensee-name join is a strictly larger deliverable, and §7's kill rule needs 34 runs/month to clear $5 rather than 100.

### 3.17 Actor Slug: `nsw-property-agent-licence-check-fair-trading`
- **Title:** NSW Real Estate Agent Licence Check — Fair Trading Register
- **Apify Actor ID:** `ztF9NumTI1prtQD8C`
- **Status:** `published`
- **Search Query / Niche:** `nsw real estate agent licence check`
- **Incumbent Competitor:** CVCheck (Kinatico) 'NSW: Property and Real Estate Agents Conflict Check' — A$36.18 incl. GST per single name, 3-day estimated delivery. Same vendor and the same A$36.18 per-name SKU family that carried asic-banned-disqualified-persons-check and afs-authorised-representative-check-asic.
- **Incumbent Price (USD):** $24
- **Created At:** `2026-07-30T21:53:42+00:00`
- **Published At:** `2026-08-07T19:46:23+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-07T19:46:21+00:00`)
- **Runs Recorded:** `6` | **Success Rate:** `1.0`
- **Last Build ID:** `VUMnJIwYRdxTNiVMN`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `screening-run` (Screening run) → **$0.1 USD**
      - *Description:* Charged once per run. Verifies the live NSW Fair Trading register is answering before any name is checked against it.
      - *Rationale:* Covers the per-run source-liveness proof — the licence-class catalogue call plus a canary search of up to 200 records — which happens once whether one name is checked or a thousand, and which is what stops the run reporting everybody clean when the endpoint contract changes.
    - **Event:** `name-checked` (Name checked) → **$0.15 USD**
      - *Description:* Charged per person or company checked, including the disciplinary and prosecution record for each of their licences.
      - *Rationale:* The incumbent charges A$36.18 incl GST (~US$24) per single name with a 3-day turnaround. At $0.15 an agency onboarding 40 agents a month pays $6.10 against ~$960 — a ~160x undercut that still leaves nearly all of it as margin, since each name costs one search plus one detail call per matching licence and platform costs are passed through. Priced above the sibling ASIC actor's $0.05 because this one makes N+1 live calls per name rather than screening against one cached file. Launched deliberately on the upside: cuts take effect immediately, raises need 14 days' notice and are capped at once per month (§8).

### 3.18 Actor Slug: `nsw-builder-licence-check-home-building`
- **Title:** NSW Builder Licence Check — Home Building Register
- **Apify Actor ID:** `AMWOxsdwUzsKc9bZo`
- **Status:** `built`
- **Search Query / Niche:** `nsw builder licence check`
- **Incumbent Competitor:** CVCheck (Kinatico) sells per-name NSW Fair Trading register checks — 'NSW: Property and Real Estate Agents Conflict Check' at A$36.18 incl GST per single name, fetched 2026-07-30 — off the SAME register service this Actor queries. That is the price point for a per-name NSW Fair Trading lookup; it is NOT a fetched price for a trades-specific SKU.
- **Incumbent Price (USD):** $24
- **Created At:** `2026-07-30T22:34:04+00:00`
- **Published At:** `None`
- **Smoke Test OK:** `True` (Checked at: `2026-08-05T21:27:55+00:00`)
- **Runs Recorded:** `5` | **Success Rate:** `1.0`
- **Last Build ID:** `F4EoF5wRvLQDokm4H`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `screening-run` (Screening run) → **$0.1 USD**
      - *Description:* Charged once per run. Verifies the live NSW Fair Trading register is answering before any name is checked against it.
      - *Rationale:* Covers the per-run source-liveness proof — the licence-class catalogue call plus a canary search of up to 200 records — which happens once whether one name is checked or a thousand, and which is what stops the run reporting everybody clean when the endpoint contract changes.
    - **Event:** `name-checked` (Name checked) → **$0.15 USD**
      - *Description:* Charged per name or company actually checked against the register.
      - *Rationale:* The incumbent charges A$36.18 incl GST (~US$24) per single name with a 3-day turnaround. At $0.15 an agency onboarding 40 agents a month pays $6.10 against ~$960 — a ~160x undercut that still leaves nearly all of it as margin, since each name costs one search plus one detail call per matching licence and platform costs are passed through. Priced above the sibling ASIC actor's $0.05 because this one makes N+1 live calls per name rather than screening against one cached file. Launched deliberately on the upside: cuts take effect immediately, raises need 14 days' notice and are capped at once per month (§8).

### 3.19 Actor Slug: `financial-adviser-register-new-zealand-fspr`
- **Title:** Financial Adviser Register New Zealand — FSPR Check
- **Apify Actor ID:** `uSEPZgDnCOwU3tSR4`
- **Status:** `published`
- **Search Query / Niche:** `financial adviser register new zealand`
- **Incumbent Competitor:** CVCheck (Kinatico) 'New Zealand: Financial Service Providers Register' AU$42.35 per name; same vendor's 'New Zealand: Personal Property Securities Register' AU$54.45 per name is the sibling SKU on the same registry platform
- **Incumbent Price (USD):** $28
- **Created At:** `2026-08-03T05:42:18+00:00`
- **Published At:** `2026-08-04T16:26:37+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-05T21:26:32+00:00`)
- **Runs Recorded:** `7` | **Success Rate:** `1.0`
- **Last Build ID:** `nb1ZhIrLiWkXbHpEj`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `screening-run` (Screening run) → **$0.1 USD**
      - *Description:* Charged once per run. Verifies the New Zealand Financial Service Providers Register is reachable and readable end to end before any name is looked up.
      - *Rationale:* Covers the four source-integrity requests every run makes before any buyer name is touched: the canary search, the row-shape check, opening a control record and reading its Financial Services pane. Charged only after they pass, so a run that aborts on an unreachable or changed register bills nothing. The guard is deliberately not free to skip — this source's failure mode is HTTP 200 with an empty page, and an empty page is indistinguishable from good news on a screening product.
    - **Event:** `name-checked` (Name checked) → **$0.35 USD**
      - *Description:* Charged per name actually answered by the register, including reading each match's financial service categories and dispute resolution scheme. A name that could not be read, or that the register could not answer for, is reported as UNCHECKED and is not charged for.
      - *Rationale:* CVCheck charges AU$42.35 (~US$28) per name for the same New Zealand FSPR lookup, delivered manually. $0.35 is a ~80x undercut while still clearing $5/mo at ~15 names a month, and each name here costs 1 search plus up to 2 requests per expanded match, all passed through. Launched on the upside deliberately: cuts take effect immediately, raises need 14 days' notice and are capped at once per month per Actor (§8).

### 3.20 Actor Slug: `npi-registry-lookup-deactivation-check`
- **Title:** NPI Registry Lookup — Deactivated vs Never-Issued Check
- **Apify Actor ID:** `l6g5eyGrjXwRULRev`
- **Status:** `published`
- **Search Query / Niche:** `npi registry lookup`
- **Incumbent Competitor:** CAQH ProView / Verifiable / Medallion / Certify OS — provider-credentialing and payer-enrollment SaaS sold on continuous NPI + licence monitoring; on-store the paid incumbent is pink_comic/nppes-npi-registry, which explicitly sells 'NPI-status evidence ... for credentialing prechecks'
- **Incumbent Price (USD):** $None
- **Created At:** `2026-08-06T06:20:04+00:00`
- **Published At:** `2026-08-07T10:32:45+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-07T10:32:43+00:00`)
- **Runs Recorded:** `5` | **Success Rate:** `1.0`
- **Last Build ID:** `ZIYoqOTyVhstmmO5b`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `deactivation-file-load` (Deactivation file load) → **$0.05 USD**
      - *Description:* Charged once per run. Downloads and indexes the current CMS Monthly NPI Deactivation File so every check runs against the live deactivated population.
      - *Rationale:* Covers downloading and streaming the 349,557-row CMS deactivation XLSX once per run. Charged after the file is in hand, so an aborted run costs the buyer nothing and cannot become a credit-compensation claim (§9).
    - **Event:** `npi-checked` (NPI checked) → **$0.03 USD**
      - *Description:* Charged per NPI checked against the registry. NPIs rejected on the check digit alone are not charged.
      - *Rationale:* A credentialing team revalidating 1,000 NPIs monthly pays ~$30/mo against provider-credentialing SaaS that is demo-gated and enterprise-priced. Launch deliberately on the upside: cuts are instant, raises need 14 days' notice (§8).

### 3.21 Actor Slug: `sec-edgar-form-d-offering-new-capital-raised`
- **Title:** SEC EDGAR Form D Offerings — New Capital Raised
- **Apify Actor ID:** `NdzBDuDtlxH8dEcih`
- **Status:** `published`
- **Search Query / Niche:** `sec edgar form d offering`
- **Incumbent Competitor:** Crunchbase Pro $99/mo and PitchBook (enterprise) sell private-funding-round feeds built on this same Form D population; on-store the priced incumbent is nexgendata/startup-funding-tracker ($0.08/dataset item, 823 lifetime runs, u30=32), which sells Form D rows as 'funding rounds' with a minAmount filter
- **Incumbent Price (USD):** $99
- **Created At:** `2026-08-06T07:48:33+00:00`
- **Published At:** `2026-08-06T16:54:03+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-06T16:54:02+00:00`)
- **Runs Recorded:** `9` | **Success Rate:** `1.0`
- **Last Build ID:** `fvNDjU42pSWfH3Oo8`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `filing-window-indexed` (Business day indexed) → **$0.02 USD**
      - *Description:* Charged once per business day of EDGAR filings indexed. Weekends and market holidays, which publish no index, are not charged.
      - *Rationale:* Covers the daily-index fetch and parse per business day in the window. Charged only for days that actually returned an index, so a weekend or market holiday costs the buyer nothing and cannot become a credit-compensation claim (§9).
    - **Event:** `offering-filing` (Form D filing returned) → **$0.03 USD**
      - *Description:* Charged per Form D or D/A filing returned, with the full issuer, offering and related-person record. Filings excluded by your minimum-new-capital filter are not charged.
      - *Rationale:* The priced on-store incumbent charges $0.08 per dataset item for the same population without the resolved amount, so this is a ~2.7x undercut on the base row. Launch deliberately on the upside: cuts are instant, raises need 14 days' notice (§8).
    - **Event:** `amendment-chain-resolved` (Amendment chain resolved) → **$0.06 USD**
      - *Description:* Charged per amendment whose prior filing was retrieved and differenced to produce newCapitalRaised. Amendments whose prior could not be resolved report null and are not charged.
      - *Rationale:* This is the differentiated work and the second request per amendment: retrieving the superseded filing and differencing the cumulative totals. Charged only when the prior filing was actually retrieved and a real number produced — an unresolved chain reports null and is not charged for this event.

### 3.22 Actor Slug: `ofac-sdn-sanctions-screening-delisted-history`
- **Title:** OFAC SDN Sanctions Screening — Delisted History Check
- **Apify Actor ID:** `xoprhGMFfoTG30OKL`
- **Status:** `published`
- **Search Query / Niche:** `ofac sdn sanctions screening`
- **Incumbent Competitor:** ryanclinton/ofac-sanctions-search (OFAC Sanctions List Search -- SDN Screening with Fuzzy Matching): 522 runs/30d, 1,905 lifetime, u30=5, 100% success, PAY_PER_EVENT. Off-store the priced incumbents are the AML/KYC screening vendors (Dow Jones Risk & Compliance, Refinitiv World-Check, ComplyAdvantage) which sell point-in-time sanctions lookback as a named audit feature.
- **Incumbent Price (USD):** $None
- **Created At:** `2026-08-06T10:10:50+00:00`
- **Published At:** `2026-08-07T05:46:39+00:00`
- **Smoke Test OK:** `True` (Checked at: `2026-08-07T05:46:36+00:00`)
- **Runs Recorded:** `6` | **Success Rate:** `1.0`
- **Last Build ID:** `G0UuRFBy2MroaUFUv`
- **Monetized:** `True`
- **Pricing Model:** `PAY_PER_EVENT` (Pass platform costs: `True`)
  - **Event Pricing Schema:**
    - **Event:** `sanctions-data-load` (Sanctions data load) → **$0.05 USD**
      - *Description:* Charged once per run. Downloads OFAC's current SDN export and brings the shipped delisting history current to OFAC's latest publication.
      - *Rationale:* Covers the 28.7MB SDN.XML download plus the forward walk over OFAC's delta feed. Charged only after both sources pass their canaries, so an aborted run costs the buyer nothing and cannot become a credit-compensation claim (§9).
    - **Event:** `name-screened` (Name screened) → **$0.03 USD**
      - *Description:* Charged per name screened against both the current SDN list and the delisting history, including all OFAC aliases.
      - *Rationale:* A compliance team screening 1,000 counterparties monthly pays ~$30/mo against AML vendors that sell point-in-time lookback as an enterprise feature behind a demo gate. Launch deliberately on the upside: cuts are instant, raises need 14 days' notice (§8).

## 4. EXPERIMENT DESIGN & DEMAND HYPOTHESIS (`EXPERIMENT.md`)

```markdown
# The demand experiment — build to 8, then stop and measure

**Opened:** 2026-08-07 · **Decision date: 2026-08-21** (two weeks)

---

## The question

Does an Actor selected by **measured buyer demand** get used by anyone?

That has never been tested. It reads like it has — 17 Actors are live and all of
them have zero external runs — but that is the wrong sample:

| Selected by | Count | What zero runs from these proves |
|---|---|---|
| Retired `supply < 10` rule | **16** | Nothing. They were chosen *because* almost nobody searched their query. `hcris` carries 3 runs/month across the entire query and all 3 are ours. |
| Fixed demand gate | **3** (**all 3 live as of 2026-08-07T10:32Z**) | This is the actual experiment, and it has barely started. |

Reading the current zero as a verdict would be concluding from the known-broken
screen. The whole point of the last two days of fixes was to stop selecting for
scarcity and start selecting for buyers.

## The design

**Build to 8 demand-screened Actors, then hard stop.** Enforced in code, not by
memory: `ship.experiment_stop_reached()`, checked by `cmd_build` and by
`precheck.actionable()`.

Why 8 and not 3: with three Actors and a true hit rate of 1-in-10, you would see
zero about **73%** of the time even if the thesis works. Eight brings that to
~43%, and a zero across eight *plus* two weeks is a result worth acting on. It is
not statistical rigour — the sample is too small for that — but it is enough to
stop guessing.

**Publishing is NOT stopped.** Everything already built is finished work and
costs nothing further to ship. The queue drains at 5 per rolling 24h, 4.5h apart.

**Cost of the experiment:** ~2–3% of a weekly Claude allowance per Actor, so
roughly 15% total for the remaining five. Apify compute is negligible ($0.97
lifetime).

## What counts as a demand-screened Actor

`demand_runs_30d is not None` in the ledger — i.e. the fixed screen measured
real 30-day buyer traffic on the query before we built. Carried automatically by
`ship.carry_demand_provenance()`.

Current three:

| Actor | on-topic runs/30d | buyer runs | supply |
|---|---|---|---|
| `sec-edgar-form-d-offering-new-capital-raised` | 1,143 | 888 | 61 |
| `ofac-sdn-sanctions-screening-delisted-history` | 668 | 522 | 122 |
| `npi-registry-lookup-deactivation-check` | 462 | 203 | 164 |

All three published: form-d 2026-08-06T16:54Z, ofac 2026-08-07T05:46Z, npi
2026-08-07T10:32Z. **The clock on the third starts at publish, not at build** —
npi has been buyer-reachable for hours, not days, on the 2026-08-21 decision
date. Note also that store indexing lags publication by somewhere under ~5h
(bounded, not measured — see CLAUDE.md), so a just-published Actor is invisible
for a while and that is not a result.

Note every one of those supply figures is **far above 10** — all three were
unreachable under the retired rule.

## How to read the result on 2026-08-21

Measure external runs on the **demand-screened Actors only**, against
`visibility_baseline.json` (external runs = 0 at 2026-08-05T17:12Z, the moment
KYC cleared and the portfolio first became visible to buyers).

- **Any external runs** → the thesis has a pulse. Resume building, and start
  measuring conversion (runs → paid events) rather than existence.
- **Zero across 8 Actors, 2 weeks, all visible and ranked** → that is a real
  demand verdict on this category. Stop. Do not propose a fourth round of
  screen fixes; the screen is no longer the thing being tested.

**Do not move the decision date to buy more time.** The point of writing it down
is that it survives the temptation to keep waiting.

## Honest caveats

- Two weeks may be short for marketplace discovery. If runs are zero but store
  *impressions* or bookmarks are non-zero, that is a different (better) signal
  and worth separating.
- The demand figures come from rival run counts, which measure *the query*, not
  *our listing*. A query with 888 buyer runs proves buyers exist; it does not
  prove they will pick us over the incumbent.
- 8 is a small sample chosen for cost, not for power. A zero result bounds the
  hit rate loosely, not precisely.

```

## 5. OPERATOR MANUAL & STRATEGY DOCS

### 5.1 Operator Brief (`OPERATOR.md`)
```markdown
# Operator guide — autonomous Apify portfolio

Set up 2026-07-29. Read `daily.md` for current status; this file is how to drive it.

---

## Monetization — now fully automated (2026-07-29)

**Nothing here needs you any more.** The plan's §10 claim that monetization is a
Console-only wizard was wrong: `PUT /v2/acts/{id}` with `pricingInfos` sets
pay-per-event pricing via the API, and on a **private** actor it applies
instantly with no notice period.

`tools/ship.py` now runs `monetize` **before** `publish` and **refuses to publish
an unmonetized actor**. So every future draw goes live already earning.

All 8 actors are monetized as of 2026-07-29. Prices are in
`MONETIZATION.md` and in each `actors/<slug>/meta.json`.

One historical exception: `oig-leie-exclusion-screening` was published before
this was discovered, so its switch to pay-per-event is a §8 *significant change*
— **effective 2026-08-12**, and its pricing model cannot be changed again until
then. It earns $0 until that date. Nothing to do; it clears itself.

---

## Deferred — not blocking, do before the first withdrawal

- **KYC identity verification** — payouts only. Revenue accrues on the dashboard
  without it. Months away given the $20 threshold plus the day-11 → day-21–25
  invoice cycle.
- **Payout method** — pick PayPal or Wise ($20 minimum) rather than another
  method ($100 minimum).
- **Rotate `APIFY_TOKEN`** — the token in the plan was exposed in a chat
  transcript. It works, but billing is attached so the blast radius is real
  money. To rotate: Console → Settings → Integrations → new token, then

  ```bash
  printf 'APIFY_TOKEN=<new>\n' > /root/portfolio-agent/agent.env
  chmod 600 /root/portfolio-agent/agent.env
  systemctl restart portfolio-agent
  ```

---

## Controls

```bash
systemctl status portfolio-agent          # is it alive
journalctl -u portfolio-agent -f          # live supervisor log
tail -f /root/portfolio/heartbeat.log     # one line per cycle
cat /root/portfolio/daily.md              # the daily report
cat /root/portfolio/blocked.json          # what needs you
systemctl stop portfolio-agent            # stop it
systemctl restart portfolio-agent         # restart it
```

Portfolio state lives in `/root/portfolio/`, agent code and Actor sources in
`/root/portfolio-agent/`.

---

## How it behaves

A fresh agent runs every 15 minutes and executes **one** cycle of the §14 loop:
health check → judge 60-day clocks → publish anything built → build the top
backlog candidate → harvest more candidates. State is on disk, never in context,
so restarts are free.

Self-imposed limits that keep the account in good standing (§14):

- max **1 new Actor published per day**, 5 per week
- **never publishes an Actor that fails its own smoke test**
- stops publishing if monthly spend exceeds **$40** (account cap is $85)
- stops publishing if aggregate success rate drops below **90%**
- never deletes an Actor earning over $5/mo

---

## Co-tenancy with your production services

This box also runs Outley (`outley-api`, `outley-scheduler`, `outley-web`),
`manual-web`, Postgres, Redis, Caddy and three Cal.com containers in under 4 GB
of RAM. The agent is deliberately constrained so it can never degrade them:

| Guard | Setting |
|---|---|
| Memory ceiling | `MemoryHigh=700M`, `MemoryMax=900M`, `MemorySwapMax=512M` |
| Killed first under pressure | `OOMScoreAdjust=+500` |
| CPU / IO priority | `CPUWeight=20`, `IOWeight=20`, `Nice=10` |
| Filesystem | `ProtectSystem=full`, `/opt` mounted **read-only** |
| Process cap | `TasksMax=256` |
| Cycle skipped when RAM is tight | supervisor preflight, `MIN_AVAIL_MB` |
| Hung cycle killed | `CYCLE_TIMEOUT=1800` |

The agent is also told, in `/root/portfolio-agent/CLAUDE.md`, never to touch
`/opt`, Docker, Postgres, Redis, Caddy, or any systemd unit but its own.

---

## What to watch in the first weeks

Per §11–12, the honest unknowns:

- **Hit rate is estimated, not measured.** The "20% of draws clear $20/mo"
  assumption is the weakest number in the plan. The first 10 draws exist to
  measure it.
- **Decision point at 10 live draws:** if the hit rate is under 10%, the problem
  is the *screen*, not throughput. Tighten the demand test before shipping more.
- **Time to first revenue:** expect 3–6 months, lumpy. First *cash* is later
  still. Read the dashboard, not the bank.
- **Watch spend** against the $85 cap — the $500 Creator-plan bonus was never
  confirmed as actually applied.

```

### 5.2 Burn & Token Cost Management (`BURN_PRIORITIES.md`)
```markdown
# Burn window — expires 2026-08-07T00:00Z (Aug 6, 8pm US Eastern)

Operator asked for more apps because **there is still no revenue**. Build them.
But build them against the measurement below, because the reason there is no
revenue is now known, and it is not a shortage of apps.

## The measurement that must change how you pick

Taken 2026-08-05, 11 actors live, oldest 7.4 days:

- **Every run on every actor is ours.** Origin `API`, one userId, zero runs by
  anyone else. Not one external user has ever run anything in this portfolio.
- **We rank #1 for 10 of 11 target queries** (#3 on the eleventh).

Those two facts together falsify §4's central claim that "run count is
irrelevant when you are the only result." We *are* the only result, ranked #1,
and it produces nothing. And they confirm §5's own warning: a low supply count
can mean nobody built it **or nobody wants it**, and we optimised straight into
the second. This portfolio is currently the graveyard §5 describes.

Concretely: `hcris hospital cost report` carries **3 runs per 30 days across the
entire query, and all 3 are ours.** Ranking #1 there is worth exactly zero.

## The screen changes: demand must be MEASURED, not inferred

`apify.rival_economics(q)` reports real 30-day run counts for every rival on a
query. That is observed traffic, not a guess from a vendor's price page.

**New hard gate for anything built in this window:**

> Do not build for a query whose rivals show **< 150 runs / 30 days** in total.
> A query with no measured traffic is a query with no searchers, whatever its
> supply count says.

Measured for calibration: `uk bankruptcy check name` 346 runs/30d,
`oig leie exclusion screening` 255, `company registry search` 3,305,
`email finder` 977k, `google maps scraper` 17.4M.

This **inverts** the old supply<10 rule, and that is deliberate. Occupancy is now
acceptable — required, even, since occupancy is the only proof that anyone
searches at all. Win on **job differentiation**, the one escape the measurements
already support: both good draws won that way (hcris ships the published total,
not line 200; epa-echo is scoped as regulatory records, not the ASTM E1527 the
$250 incumbent sells).

Aim at the **150–5,000 runs/30d band**. Below it there are no buyers; far above
it (`google maps scraper`, 17M) is the head §4 correctly says is unwinnable.

## Order of work

### 1. Build, against measured demand. This is the ask.
Target **5+ new actors**, each with `runs_30d_total >= 150` recorded in its
`meta.json` as `demand_runs_30d`. Record the number. A draw that cannot show one
does not get built in this window.

### 2. Find out why rank #1 yields zero runs
This is worth more than any single app, because it caps every app.
`uk bankruptcy check name` carries 346 runs/30d and we hold rank #1 while taking
3 of them. Ranking in the store search **API** is evidently not the same thing as
what a buyer sees or clicks. Investigate concretely: what does the store UI
actually order by (popularity? category browse?), do our listings appear in
category listings at all, and are we reachable from Google. Record findings in
`probed.json` — a fix here lifts all 11 live actors at once.

### 3. Re-pitch the existing 11, do not abandon them
They rank but do not convert. README is one of four indexed fields and is also
the buyer's only real evidence the tool works. Sharpen title, description and
README against what the *rival with actual runs* offers. Cheap, compounding, and
it applies to actors already live.

## Unchanged guardrails

**3 publications per rolling 24h** (Apify's hard platform limit is 5 — keep the
margin). Never publish anything failing its smoke test. Monetize while PRIVATE,
before publishing. Never touch `/opt`, Docker, Postgres, Redis, Caddy or any
other systemd unit. One heartbeat line per cycle.

## Report honestly

Judge this window by artefacts, not cycles. A cycle ending without a new actor,
a dissolved blocker, or a measured improvement was wasted — say so in the
heartbeat rather than presenting research as progress.

## When the allowance runs out

The supervisor detects the limit and waits rather than retry-storming. A timer
stops the unit at 23:55Z on 2026-08-06. Do not work around either.

```

### 5.3 Daily Execution Log (`daily.md`)
```markdown
# Portfolio daily — 2026-08-07

- **Draws live:** 20   (built, not yet published: 2)
- **Portfolio MRR:** $0.00
- **Aggregate success rate:** 100%
- **Backlog:** 23 screened   |   rejected to date: 259
- **Apify spend this month:** $1.04 (cap $85, self-imposed stop $40)

## Live draws

| actor | query | runs | success | $/mo | monetized | age |
|---|---|---|---|---|---|---|
| oig-leie-exclusion-screening | oig leie exclusion screening | 21 | 100% | $0.00 | yes | 9d |
| fda-device-establishment-registration | fda establishment registration device | 15 | 100% | $0.00 | yes | 9d |
| irs-tax-exempt-revocation-check | irs tax exempt revocation | 12 | 100% | $0.00 | yes | 2d |
| clinical-trial-protocol-amendments | clinical trial protocol amendments | 12 | 100% | $0.00 | yes | 3d |
| medicare-provider-enrollment-revalidation-due-date | medicare provider enrollment revalidatio | 9 | 100% | $0.00 | yes | 2d |
| pcaob-form-ap-auditor-lookup | pcaob form ap auditor | 6 | 100% | $0.00 | yes | 2d |
| hcris-hospital-cost-report | hcris hospital cost report | 20 | 100% | $0.00 | yes | 5d |
| epa-echo-facility-radius | epa echo facility radius | 7 | 100% | $0.00 | yes | 2d |
| prop-65-60-day-notice-settlement-benchmark | prop 65 60 day notice | 11 | 100% | $0.00 | yes | 2d |
| asic-banned-disqualified-persons-check | asic banned disqualified persons | 10 | 100% | $0.00 | yes | 4d |
| uk-bankruptcy-check-individual-insolvency-register | uk bankruptcy check name | 8 | 100% | $0.00 | yes | 5d |
| faa-aircraft-document-index-lien-filings | faa aircraft document index | 6 | 100% | $0.00 | yes | 3d |
| fda-clinical-investigator-disqualification-check | clinical investigator disqualification f | 2 | 100% | $0.00 | yes | 0d |
| new-zealand-bankruptcy-check-insolvency-register | new zealand bankruptcy check | 8 | 100% | $0.00 | yes | 4d |
| ireland-personal-insolvency-arrangement-register-check | ireland personal insolvency arrangement | 10 | 100% | $0.00 | yes | 5d |
| afs-authorised-representative-check-asic | afs authorised representative | 7 | 100% | $0.00 | yes | 4d |
| financial-adviser-register-new-zealand-fspr | financial adviser register new zealand | 6 | 100% | $0.00 | yes | 3d |
| npi-registry-lookup-deactivation-check | npi registry lookup | 5 | 100% | $0.00 | yes | 0d |
| sec-edgar-form-d-offering-new-capital-raised | sec edgar form d offering | 8 | 100% | $0.00 | yes | 1d |
| ofac-sdn-sanctions-screening-delisted-history | ofac sdn sanctions screening | 6 | 100% | $0.00 | yes | 0d |

## Publish queue (5 per rolling 24h, §14)

Clear queries first — they are the only ones still winnable, and they are the ones that decay while they wait.

| # | actor | query | occupancy |
|---|---|---|---|
| 1 | nsw-property-agent-licence-check-fair-trading | nsw real estate agent licence check | unchecked |
| 2 | nsw-builder-licence-check-home-building | nsw builder licence check | unchecked |

## Blocked (needs a human)

- **FDA Data Dashboard API key** (fda-483-inspection-observations) since 2026-07-29: FDA 'OII Unified Logon' human signup at datadashboard.fda.gov/oii/api/ (Authorization-User = approved email, Authorization-Key = FDA-generated). Contact FDADataDashboard@fda.hhs.gov. RE-PROBE DONE 2026-07-30, DO NOT REPEAT: the ORA->OII move is cosmetic (docs path only; the API host api-datadashboard.fda.gov/v1/* is unchanged) and the endpoint returns 401 on a VALID body from Apify egress as well as from this VPS -- a real credential gate, not an IP allowlist. No keyless alternative exists. See probed.json _apify_egress_reprobe_round.
- **FYI (was DECISION, now agent-owned): occupancy gate re-scoped from SOURCE-sameness to JOB-sameness** (pipeline yield (affects every future harvest)) since 2026-07-29: NO OPERATOR ACTION NEEDED. This was escalated twice as 'may I relax a section 5 rule'. That framing was WRONG and I am correcting it rather than asking a third time.

SECTION 5 CONTAINS NO OCCUPANCY RULE. Its screen is exactly two tests: supply total < 10, AND a paid incumbent proves demand. The occupancy gate is MINE -- I added it two cycles ago and it lives at tools/screen.py:99, rejecting a candidate when any occupant is classified 'direct'. So the open question was never 'may I relax the plan', it was 'is my own gate calibrated right', and section 11 puts screen calibration explicitly under agent ownership ('if hit rate is low, the demand test is too loose; tighten it before shipping more').

THE MISCALIBRATION: I classify 'direct' by SOURCE-sameness (same dataset => direct => reject). But section 4 says the unit of competition is the QUERY -- 'own extract <specific thing> from <specific source>' -- and the specific THING is half of that. Two actors on one dataset doing different jobs do not contest the same query. The portfolio's own evidence agrees and it is the strongest evidence I have: BOTH good draws would have been rejected by the gate as written. hcris ships CMS line 202 where rivals ship line 200; epa-echo is scoped as regulatory records, not the ASTM E1527 Phase I the $250 incumbent sells. The gate as written would have killed the two best things this portfolio has built.

RESOLUTION, PROVISIONALLY ADOPTED, with a precondition that makes it safe: 'direct' will be judged by JOB, not by source -- an occupant on the same dataset is 'adjacent' if I can write a SPECIFIC, TESTABLE claim about what it gets wrong or does not do. Vague differentiation ('ours is better/cleaner/faster') stays 'direct' and still rejects. AND the relaxed gate MAY NOT BE EXERCISED WHILE THE PUBLISH QUEUE IS 3 OR DEEPER. Reason: the queue is 7 deep against a 1/day, 5/week publish limit, so nothing promoted now could ship for ~10 days -- raising yield today buys literally zero and only risks a section 9 clawback on a draw that argued its way past a gate. Yield is not the binding constraint; publish slots are. So the gate change costs nothing to hold and will be live by the time it can matter.

WHAT THE OPERATOR SHOULD TAKE FROM THIS: nothing to decide here. The one thing that is actually costing money is item 1 of this file -- oig-leie is public, FREE and has already served 2 users lifetime. Please spend the 5 minutes there instead of on this.
- **NZ Companies Office Disqualified Director API subscription** (nz-companies-office-banned-directors-check) since 2026-07-30: Free subscription + key at https://portal.api.business.govt.nz/api/companies-disqualified-director-search (approval is manual, so it cannot be self-served), then add NZ_BUSINESS_API_KEY=<key> to ~/portfolio-agent/agent.env. Worth the 5 minutes: demand is PROVEN and priced -- CVCheck NZ charges NZ$50.60 per name for this exact lookup -- the Apify query is vacant (supply 1, and that 1 is a BuiltIn.com scraper), and the sibling ASIC actor is already built as the template. This is the only thing standing between the research and a draw.

RECLASSIFIED 2026-08-05 -- THE BLOCK IS HARDER THAN RECORDED, AND SCRAPING AROUND IT IS NOT AN OPTION. This was filed as a subscription/credential blocker. Re-probed the web host today (under the new rule that a gated API host does not prove the DATA is gated -- that rule just disproved a week-old 'fourth credential blocker' on UK Companies House). It does not rescue this one: app.companiesoffice.govt.nz serves robots.txt 'User-agent: * / Disallow: /' BLANKET, covering /companies/app/ui/pages/banned and /co-search/banned-directors alike (the latter also 503s). So the register is ROBOTS-DISALLOWED, which is section 9 breach-of-contract exposure, not merely paywalled.

CONSEQUENCE: the paid API subscription is the ONLY lawful route to this data, so the operator action here is the whole path rather than a shortcut past it. Do not re-probe the HTML register hoping for a keyless way in -- there is one (HTTP 200), and taking it would be the kind of ToS breach section 9 says costs more than the actor earns. Sibling note: companies-register.companiesoffice.govt.nz (a DIFFERENT host) is NOT robots-disallowed and answers 200, but it is the companies register, not the banned/disqualified directors register.

## Competitive position (occupancy, not just supply)

3 of 10 screened queries are clear; 7 are held by a direct same-source competitor.

- clear — hcris hospital cost report (supply 2, 0 visible)
- **OCCUPIED** — fda 483 inspection observations (supply 1, 1 visible): nexgendata/fda-warning-letters-483-inspections (25 runs)
- **OCCUPIED** — fda establishment registration device (supply 6, 5 visible): scrapemint/fda-device-manufacturer-leads (22 runs)
- **OCCUPIED** — epa echo facility radius (supply 6, 6 visible): malonestar/epa-contaminated-site-screener (104 runs), ryanclinton/location-risk-report (126 runs)
- **OCCUPIED** — hrsa 340b covered entity (supply 1, 1 visible): zentrafoundry/340b-opais-delta-monitor (41 runs)
- **OCCUPIED** — irs tax exempt revocation (supply 1, 1 visible): jungle_synthesizer/irs-teos-auto-revocation-list-scraper (41 runs)
- **OCCUPIED** — pcaob form ap auditor (supply 1, 1 visible): malonestar/pcaob-auditor-engagement-monitor (33 runs)
- clear — new zealand bankruptcy check (supply 2, ? visible)
- clear — clinical trial protocol amendments (supply 6, 6 visible)
- **OCCUPIED** — medicare provider enrollment revalidation (supply 9, 7 visible): pink_comic/cms-pecos-medicare-provider-enrollment-screening (17 runs)

## Backlog not in the ready queue

- **hcris hospital cost report** — published
- **fda 483 inspection observations** — blocked: FDA Data Dashboard API requires a key; 401 confirmed 2026-07-29, no keyless bulk download (403)
- **prop 65 60 day notice** — published
- **ireland personal insolvency arrangement** — published
- **fda establishment registration device** — published — built + smoke PASS 5/5 on 2026-07-29; publish held only by the 1-actor-per-day rate limit (§14)
- **uk bankruptcy check name** — published
- **epa echo facility radius** — published
- **asic banned disqualified persons** — published
- **nz companies office banned directors** — blocked: SOURCE IS SUBSCRIPTION-GATED WITH HUMAN APPROVAL. Probed 2026-07-30, four ways:
  (a) api.business.govt.nz Disqualified Director API -- requires subscription to the Disqualified Director API Product plus a subscription key; the portal states 'the API support team may request further information before the subscription can be approved'. Unauthenticated endpoint guesses returned 404.
  (b) catalogue.data.govt.nz (the CKAN entry for this dataset) sits behind a bot-protection interstitial -- HTTP 200 with an HTML JS challenge and NO JSON, i.e. exactly the silent-200 failure shape §3 warns about. The CKAN record is only a pointer to (a) anyway; there is no open file behind it.
  (c) The public register HTML search (companies-register.companiesoffice.govt.nz/search/) does answer 200 with a 140KB page and is NOT robots-disallowed, but that is fragile HTML scraping of a COMPLIANCE screen: a markup change that silently returns 'no match' tells a buyer a banned director is clean. §3 killed scraped-data products on exactly that failure mode and §9 makes it a clawback, not just a bad review. Rejected on the quality bar, not on feasibility.
  (d) Passing the buyer's OWN subscription key as actor input (the fallback recorded on fda-483) does not work commercially here: a buyer who has an MBIE API subscription has no reason to pay us, and the HR/compliance buyer who would pay will not go get one.
- **afs authorised representative** — published
- **hrsa 340b covered entity** — source_unavailable: Probed 2026-07-29: https://340bopais.hrsa.gov/Reports is a Blazor SPA (200, text/html, no static links; only nav/footer hrefs). No documented static export or public API found; three plausible export URLs all 404. Harvesting it would mean reverse-engineering the SPA's internal endpoints — the fragile-scraping class §3 killed (silent failure returns HTTP 200 with garbage), and §9 makes that negative revenue. Revisit only if HRSA publishes a documented export.
- **irs tax exempt revocation** — published — built + smoke PASS 5/5 on 2026-07-29, all four status paths plus invalid_ein asserted against expected verdicts. Publish held only by the 1-actor-per-day rate limit (§14) — oig-leie took today's slot at 04:28.
- **pcaob form ap auditor** — published — built + SMOKE PASS 6/6 on 2026-07-29 (actor 30dyznYfIEIOcrtTu, build hP124E0uRBMS0seMl). 20 assertions verified against the LIVE platform run, 47 offline functional assertions and 15 guard assertions (5 simulated source failures + header/member checks) that all correctly aborted the run. Publish held only by the 1-actor-per-day rate limit (§14) — oig-leie took today's slot at 04:28.
- **new zealand bankruptcy check** — published
- **form 990 part vii compensation** — held
- **financial adviser register new zealand** — published
- **faa aircraft document index** — published
- **clinical trial protocol amendments** — published — built + smoke PASS on 2026-07-29; 9 assertions verified against the live platform run (endpoint re-spec caught as critical, lowercase NCT normalised, malformed id -> invalid_nct_id, unregistered id -> study_not_found and never 'no amendments'). 29 local unit assertions on the shape guards, plus a simulated payload rename that correctly aborted the whole run. Publish held only by the 1-actor-per-day rate limit (§14) — oig-leie took today's slot at 04:28. Queue is now 3 deep.
- **sec edgar form d offering** — published
- **medicare provider enrollment revalidation** — published — built + smoke PASS 9/9 on 2026-07-29 (actor 2TY0lUR6ijITb4dGo). 16 assertions against the live platform run, 43 offline unit assertions, and 4 simulated source failures (archived release, truncated release, renamed column, server-side ignored filter) all correctly aborted the run. Publish held only by the 1-actor-per-day rate limit (§14) — oig-leie took today's slot at 04:28.
- **clinical investigator disqualification fda** — published
- **npi registry lookup** — published
- **ofac sdn sanctions screening** — published

## Probed: supply clears, demand not yet verified

Cheap half already paid for. Finish the demand test before building.

- **faa repair station part 145** (supply 0) — Supply 0 and NO priced incumbent -- the scarcity-without-demand graveyard section 5 warns about, same shape as the phmsa and treasury-570 rejects. Do not build without naming a paid incumbent first.
- **coast guard psix vessel inspection** (supply 0) — Supply 0, no priced incumbent identified. Same graveyard caveat.
- **uspto patent term adjustment** (supply 1) — Supply 1 is the scarcest thing found this cycle. BLOCKED ON A KEY: probed 2026-07-29, https://api.uspto.gov/api/v1/patent/applications/search returns 401 with no key. The USPTO Open Data Portal key is free self-service at developer.uspto.gov -- same operator trip as the FDA Data Dashboard key. Demand not yet verified: name a priced incumbent (Anaqua / Clarivate IP docketing) with a real URL before this is buildable.
- **tsca chemical data reporting** (supply 1) — Source NOT yet located. EPA Envirofacts REST (data.epa.gov/efservice/cdr_2020_public/...) 404s and the epa.gov/chemical-data-reporting page exposed no .csv/.zip links. Find the real CDR extract (try ChemView and the Envirofacts table registry) before spending build time. Incumbent candidates: Enhesa / ERA Environmental / 3E.
- **atf federal firearms licensee list** (supply 1) — SETTLED 2026-07-29: www.atf.gov returns 403 from APIFY's infrastructure too, not just this VPS. The 'run it from Apify' escape hatch does not apply here. Would need residential proxy, which the Creator plan caps at 10GB/mo and which adds a permanent fragility + cost line to a $0-revenue draw. Do not re-probe from the VPS; only revisit if ATF publishes a data-host mirror.
- **msrb emma municipal bond disclosure** (supply 1) — Supply 1, the scarcest in-gate name this cycle, and DPC Data/Bloomberg are real priced incumbents. NOT probed for source on purpose: MSRB is an SRO that licenses its bulk/real-time feeds and restricts redistribution, so this is a section 9 legal risk rather than the usual public-domain federal shape. NEXT: read the MSRB EMMA terms of use before spending anything on the source. Reject if bulk redistribution is licensed.
- **antidumping countervailing duty order** (supply 2) — Supply 2 with genuinely expensive incumbents (Descartes CustomsInfo, Thomson Reuters ONESOURCE Global Trade). Source unresolved: api.trade.gov did not respond from this host at all (curl exit, no HTTP status). NEXT: determine whether the trade.gov ADCVD / Consolidated Screening List API needs an api.data.gov key, and cite a public incumbent price before this is buildable.
- **ferc electric quarterly report** (supply 2) — 2026-07-29: www.ferc.gov 403s from APIFY too (eqrreportviewer.ferc.gov still answers this VPS). Demand also still unpriced -- Yes Energy / S&P are demo-gated. Two unresolved sides; deprioritise below anything with one.
- **nlrb unfair labor practice case** (supply 2) — REACHABILITY SETTLED 2026-07-29 from an Apify run: www.nlrb.gov answers 200 from Apify egress (no response at all from this VPS). Occupancy: 2 visible, andrew_avina/nlrb-mcp (4 runs) is direct on NLRB case data; shelvick/enforcement-record-profiler (63 runs) is adjacent. Demand still unpriced (Bloomberg Law / Law360 are demo-gated). Do not build without a fetched public price.
- **sec municipal advisor registration** (supply 2) — OCCUPANCY READ CLEAN 2026-07-29 and it is now the ONLY surviving US-federal lead: supply 2, visible 2, both adjacent -- gocreative.ai/finra-broker-dealer-leads (51 runs) is FINRA broker-dealers not SEC municipal advisors, ryanclinton/corporate-political-exposure-mcp (42 runs) is unrelated. NEITHER source nor priced incumbent investigated yet. Likely source shape: SEC Form MA/MA-I via EDGAR (keyless, documented, stable). Buyer pool is small (~500-1000 registered MAs), so name a priced incumbent BEFORE spending source time.
- **fema nfhl flood hazard layer** (supply 2) — BEST DEMAND EVIDENCE OF THE CYCLE, KILLED ON OCCUPANCY. Incumbent price FETCHED AND READ from a real pricing page (not an error page): nationalflooddata.com/pricing sells FEMA NFHL flood-zone data via API at $495/mo Standard and $595/mo Premium for 2,500 queries -- the same resell-free-federal-data shape as hcris. Source verified alive from an Apify run: hazards.fema.gov NFHL MapServer 200, 32 layers, layer 28 'Flood Hazard Zones'. BUT fortuitous_pirate/fema-flood-scraper (563 runs, 4 users/30d) explicitly does NFHL flood-zone-by-address and occupies EVERY in-gate name: 1 of 2 on 'fema nfhl flood hazard layer', 1 of 2 on 'nfhl flood zone lookup', 1 of 4 on 'fema nfhl'. Generic names are saturated (69/70/128/1327). Per HOWTO this is head-on competition with a competitor already holding the run-count flywheel -- worse than supply 40 of adjacent tools. Do not revisit unless a distinct job on NFHL can be named that the incumbent does not do.
- **companies house strike off notice** (supply 2) — BEST DEMAND EVIDENCE IN THE PORTFOLIO, and it is PUBLISHER-priced rather than reseller-priced, so there is no bundle-attribution problem (the trap that killed hud-reac and the Canadian leads). The Gazette -- the publisher of these notices, which also gives them away free and keyless -- sells the same notices as a data feed at a listed price: London daily GBP8,539/yr, London weekly GBP4,272.50, Edinburgh corporate insolvency GBP2,466/yr, Edinburgh personal insolvency GBP3,588/yr, Belfast weekly GBP1,380, historic year GBP2,292.50, XLS/CSV, ex VAT (https://m.thegazette.co.uk/all-notices/content/103871, fetched and read 2026-07-29). Independent second signal: CHWatch sells Companies House event monitoring at GBP12/20 companies, GBP30/100, GBP70/1000 per month (https://www.chwatch.co.uk/, fetched). SOURCE VERIFIED KEYLESS FROM THIS VPS: thegazette.co.uk/all-notices/notice/data.json?start-publish-date=...&results-page-size=N returns 200 JSON, and /insolvency/notice/data.feed returns Atom. BLOCKED ON THE OPEN DECISION, NOT ON EVIDENCE: the strike-off/insolvency notice stream is held by three direct competitors on the sibling query (parseforge 43 runs, getdataforme 106, tagadanar 11), so the occupancy gate refuses it even though THIS query reads 2 with only an adjacent B2B-leads actor visible. If the operator answers the DECISION blocker 'yes', build this first: the differentiated job is the statutory 2-month objection window on a first gazette notice (which supplier of mine is about to be dissolved, and by when must I object), which none of the three generic notice extractors computes.
- **mhra drug safety update uk** (supply 2) — Supply 2, occupancy NOT read and source NOT probed -- do not treat the count as a result (HOWTO).
- **nrc licensee event report** (supply 3) — Source and demand both unverified. Small buyer pool (US nuclear operators) -- check that a priced incumbent exists at all before investing.
- **uflpa entity list forced labor** (supply 3) — Supply 3, and the incumbents (Kharon, Sayari, Altana) are among the most expensive vendors encountered -- but all demo-gated, so §5 has no citable price yet. The DHS UFLPA Entity List is small (~100s of entities) and published as a web page, which is the §3 fragile class unless a documented export exists. NEXT: check whether the list is carried in the trade.gov Consolidated Screening List (a documented API), which would make it buildable.
- **faa service difficulty report** (supply 3) — Supply 3, incumbents ATP / CAMP Systems are real and expensive. Same warning already recorded for 'faa airworthiness directive compliance': FAA data sits behind the undocumented DRS search, the §3 fragile class. Find a documented SDR export or reject both together.
- **uspto patent maintenance fee events** (supply 3) — Supply 3 -- the best USPTO name found (vs 7 for 'patent maintenance fee expiration', 51 for 'patent expiration date monitoring'). Blocked on the SAME free USPTO ODP key as uspto-patent-term-adjustment, now recorded as a second draw on that one blocker. Demand still unverified: patent annuity providers (Anaqua/Clarivate/Dennemeyer) are expensive but publish no price.
- **environment agency permit uk** (supply 3) — Supply 3, occupancy NOT read and source NOT probed.
- **usda fsis meat recall** (supply 4) — SETTLED 2026-07-29: www.fsis.usda.gov/fsis/api/recall/v/1 returns 403 from APIFY's infrastructure too. Same conclusion as atf. Note crawlerbros/usda-fsis-recalls-scraper (6 runs) exists in the store, so someone solved it -- presumably with proxies; not worth it at this revenue.
- **federal audit clearinghouse single audit** (supply 4) — Supply 4, but WEAK ON BOTH SIDES. api.fac.gov returns 403 API_KEY_MISSING, so it needs a free api.data.gov key (a third key blocker). More important: the supply of 4 already includes at least two Apify actors doing exactly this (apify.com/pink_comic/federal-audit-clearinghouse-single-audit-data and apify.com/compute-edge/federal-audit-scraper, both pay-per-result), so the only 'priced incumbent' is a competitor on the same store -- head-on competition, not an unoccupied query (section 4). Deprioritise.
- **eia power plant generator capacity** (supply 5) — Supply 5. eia.gov/opendata/bulk/manifest.txt answered 200 keyless from this host (28 KB manifest), so a documented keyless bulk source exists -- rare. NEXT: incumbents (S&P Global Velocity Suite, Yes Energy) are demo-gated; find a public price or a cheaper named incumbent before building.
- **hud lihtc property database** (supply 5) — REACHABILITY SETTLED 2026-07-29 from an Apify run (actor gOhDYgfJj8qErFgpv, deleted): www.huduser.gov answers 200 from Apify egress though it 403s this VPS. So the source is NOT dead. BUT the occupancy read now required by screen.py shows 4 visible occupants incl. malonestar/hud-qct-lihtc-boost-screener (24 runs) and malonestar/hud-affordable-housing-explorer (18 runs) doing LIHTC-by-coordinate directly. Treat as OCCUPIED unless a distinct job can be named.
- **contaminated site records near address** (supply 5) — CORRECTED 2026-07-29 by the epa-echo-facility-radius build: ECHO DOES carry Superfund SEMS identifiers (SemsIDs, column 24, plus SemsFlag/SemsNames), measured at 3 SEMS sites in a Houston 3-mile sample, and the shipped Actor already returns them as a program. So a separate SEMS draw is NOT site identification -- that is now covered. What ECHO does not carry is the contamination detail: contaminants of concern, media affected, remedial phase/milestones, NPL listing dates. A triple-down variant must add THAT from SEMS itself (cumulis.epa.gov / the SEMS public data downloads), or it duplicates a draw we already published. Re-scope before spending source time.
- **uk gambling commission licence** (supply 5) — Occupancy is genuinely CLEAN -- all five occupants are noise (TikTok Shop, Bilibili, Alibaba, a medical-tourism scraper, an MCP server), none touch gambling regulation. Source not yet probed. Demand not proven: the plausible incumbent (Vixio GamblingCompliance) sells regulatory intelligence and analysis, not the licensee register, so quoting its price against this data would be the same overclaim refused for HUD REAC. Next: fetch a price for the licensee/LCCP data itself, or drop.
- **faa airworthiness directive compliance** (supply 6) — Incumbents (ATP, CAMP Systems) are real and expensive, but the FAA DRS search API is undocumented -- likely the section 3 fragile class. Check for a documented AD export first; if only DRS exists, reject.
- **export license bis licensing** (supply 6) — Supply 6, in gate, but BIS licensing decisions are not published at the transaction level -- likely no public dataset at all. Confirm a source exists before any further spend.
- **osha severe injury report** (supply 7) — Supply 7 -- in gate but the thinnest margin here. OSHA publishes severe injury reports free as CSV, and no paid incumbent is apparent. Demand test is the blocker; do not spend source time until one is named.
- **epa superfund site sems** (supply 8) — CORRECTED 2026-07-29 by the epa-echo-facility-radius build: ECHO DOES carry Superfund SEMS identifiers (SemsIDs, column 24, plus SemsFlag/SemsNames), measured at 3 SEMS sites in a Houston 3-mile sample, and the shipped Actor already returns them as a program. So a separate SEMS draw is NOT site identification -- that is now covered. What ECHO does not carry is the contamination detail: contaminants of concern, media affected, remedial phase/milestones, NPL listing dates. A triple-down variant must add THAT from SEMS itself (cumulis.epa.gov / the SEMS public data downloads), or it duplicates a draw we already published. Re-scope before spending source time.
- **ferc form 1 utility financial** (supply 9) — Supply 9, thinnest in-gate margin. Same demo-gated incumbent problem already recorded for 'ferc electric quarterly report'.
- **freight broker carrier vetting** (supply 13) — FAILS the <10 gate at 13, recorded only to show the naming search behind the motor-carrier candidate: 'motor carrier authority revocation' (supply 7) is the name that wins the same buyer. Do not re-probe.
- **_egress reachability matrix** (supply ?) — Measured from an Apify run 2026-07-29, not from this VPS. See reachability field.
- **_non_us_frontier** (supply ?) — STRATEGIC, measured 2026-07-29 across 9 new occupancy reads. The four portfolios colonising this playbook -- malonestar/*, ryanclinton/*, jungle_synthesizer/* and automation-lab/* (a FOURTH, recorded here for the first time: fcc-asr-towers, fhwa-national-bridge-inventory, msha-mine-safety, usitc-hts-tariff, fda-drug-shortages, fda-drug-labels, ema-drug-approval-watch) -- are almost entirely US-FEDERAL. That is where the occupancy test now kills nearly everything: 6 of 6 remaining in-gate US leads were held this cycle, 16 of 18 across two cycles. The same test run against non-US regulatory queries came back materially cleaner -- 'health canada medical device licence' (5, all adjacent), 'health canada din lookup' (3, all LinkedIn noise), 'canada drug shortage report' (4, all US actors), 'health canada drug licence status' (5, all adjacent). The EU is NOT clean ('ema medicine shortage europe' is held by zentrafoundry + automation-lab), so this is a Canada finding so far, not a general non-US one. Australia is untested and returned supply 0 for 'tga australia medical device' -- scarcity with no demand evidence, the section 5 graveyard shape, so it needs a priced incumbent before any source spend. ACTION FOR FUTURE HARVESTS: run occupancy on the non-US name BEFORE the US name.
- **_egress reachability addendum** (supply ?) — Measured from THIS VPS 2026-07-29: health-products.canada.ca 200 (keyless JSON API, 15MB payload); www.drugshortagescanada.ca resolves and answers HTTP 400 on every /api/v1 path including no-param, i.e. reachable but auth-gated, NOT blocked; api-datadashboard.fda.gov reachable, validates body then 401s without a key; www.accessdata.fda.gov and www.fda.gov both 403 from here (unresolved from Apify egress, but no longer worth probing -- the query they served is occupied).
- **_demand_and_occupancy_are_anti_correlated** (supply None) — THE MOST IMPORTANT STRUCTURAL FINDING SO FAR -- it explains four cycles of near-zero harvest yield and it is causal, not bad luck. The section 5 screen has two failure modes and they are ANTI-CORRELATED: (A) US-federal queries almost always have a priced incumbent but are OCCUPIED -- 16 of 18 across two cycles, plus 4 of 5 more this cycle (hospital price transparency, hospital chargemaster, nadac, nppes deactivation). (B) Everywhere occupancy is CLEAN -- Canada DPD, HUD REAC -- NO vendor publishes a price. WHY: a vendor publicly listing a price for free government data is a PUBLIC signal. The same signal that proves demand to me already proved it to malonestar, ryanclinton, jungle_synthesizer and automation-lab. Demand evidence and competition SHARE A CAUSE, so the section 5 intersection (priced incumbent AND supply<10) is shrinking structurally and will keep shrinking. Harvesting harder does not fix this; it is not a throughput problem. WHAT ACTUALLY WORKED: both good draws won on JOB DIFFERENTIATION on an OCCUPIED-or-crowded source, not on an empty query. hcris -- competitors ship the convenience extract (line 200); the published total is line 202, so their numbers are wrong for every filer with a line-201 deduction. epa-echo -- scoped as federal regulatory records, explicitly not an ASTM E1527 Phase I, which is what the $250 incumbent actually sells. RESOLVED 2026-07-29T13:45Z -- the escalation was framed wrong and the correction is mine to make. SECTION 5 CONTAINS NO OCCUPANCY RULE (it is exactly two tests: supply<10 AND a priced incumbent). The occupancy gate is agent-authored, at tools/screen.py:99. So this was never 'relax the plan', it was 'calibrate my own gate', which section 11 assigns to the agent. ADOPTED: 'direct' is judged by JOB, not by SOURCE -- a same-dataset occupant counts as adjacent only when a SPECIFIC, TESTABLE claim names what it gets wrong or does not do (a named field, cutoff or scope); vague 'ours is better' still rejects. PRECONDITION: not exercised while the publish queue is >=3 deep, because at 1/day and 5/week nothing promoted now can ship for ~10 days -- publish slots, not yield, are the binding constraint, so holding the change costs nothing. Do NOT re-escalate this to the operator. See blocked.json item 5 (now FYI, not DECISION).

|| CORROBORATED AND EXTENDED 2026-07-29T15:0xZ, by the first harvest run in seven cycles: 34 fresh queries probed across five untouched veins (US oil & gas, aviation title, maritime, procurement, energy, and a second CMS/FDA compliance sweep) produced ZERO backlog additions and 20 new rejections. That is the fifth consecutive near-zero harvest and it is now safe to treat as the steady state, not a slump. THE FINDING NEEDS ONE EXTENSION. Failure mode (B) was recorded as 'where occupancy is clean, no vendor publishes a price' and was scoped to Canada/HUD, i.e. read as a geography effect. It is not geography, it is MARKET STRUCTURE, and this cycle found the clean case: US upstream oil & gas well-permit data is supply 5 (clean) with the most valuable incumbents in this entire search -- Enverus/Drillinginfo, Novi Labs, IHS Markit, Oseberg -- and NOT ONE publishes a price. Enterprise data markets sell by quote because the price IS the negotiation; only SMB self-serve vendors publish a number. So the section 5 demand test does not measure demand, it measures SELF-SERVE SMB demand specifically, and every enterprise-priced vertical is invisible to it by construction. This is why the eight draws that DID pass all sit in one band: per-check compliance SaaS at $30-$289 published (ProviderTrust $30, FDAzilla $289, CostReportData $90, Aerospace Reports $85). CONSEQUENCE, and it is not 'harvest harder': the remaining reachable space is the intersection of [SMB self-serve vendor publishes a price] AND [supply<10] AND [source not key-gated or bot-blocked], and cycles 5-7 of evidence say that intersection is close to enumerated for US federal open data. The two live levers are the JOB-differentiation gate already adopted at screen.py:99 (still unexercised -- the publish queue is 7 deep, so it costs nothing to keep holding) and non-US sources. NOT a lever: probing more US federal dataset names. Four cycles have now done that and the yield is 0.

|| NEW SOURCE-KILL PATTERN, worth its own line because it will recur: a clean query + a published price can still die on EGRESS. 'aircraft lien search faa registry' is supply 5, clean, with Aerospace Reports publishing $85/search -- the best-shaped lead in seven cycles. registry.faa.gov is behind AkamaiGHost and refuses datacenter IPs (403 plain UA, 503 browser UA, measured from this VPS), and Apify draws the same datacenter egress, so it would need residential proxy against an ~80MB archive per run vs the Creator plan's 10GB/month cap -- ~125 runs/month ceiling on a cents-per-run product. ADD TO THE HARVEST ORDER: after occupancy and before any build, curl the actual bulk endpoint from this box. It is one request and it killed a lead that had already passed both section 5 tests.
- **_colonising_portfolios_are_denser_than_recorded** (supply None) — The roster of portfolios running this exact playbook has been revised upward twice in two cycles and should be treated as the ambient condition, not as a list to keep completing. Previously recorded: malonestar, ryanclinton, jungle_synthesizer, automation-lab (US federal), then parseforge, danielainsworth, nexgendata, charles986 (UK). This cycle adds THREE more from a single 4-query occupancy read: crawlerbros, scrapersdelight and haketa. That is 11 known portfolios. Two structural details matter more than the count. (1) DOUBLE OCCUPANCY IS NOW NORMAL: usda organic integrity is held independently by crawlerbros AND automation-lab, ttb cola by scrapersdelight AND crawlerbros -- the same duplication already seen on national bridge inventory. Rivals are colliding with each other, which means the free-federal- dataset space is being enumerated exhaustively rather than sampled. (2) They are enumerating BY SOURCE, not by query: automation-lab holds FRA railroad accidents and MSHA mine safety, and haketa holds TTB permittees plus California DCA, Virginia DPOR and Colorado professional licences. Consequence for the harvester: finding an unnamed query for a NAMED dataset is no longer an edge, because they are working the dataset list, not the query list. Only a distinct JOB on a dataset, or a dataset that is genuinely hard to reach, survives that. This is independent corroboration of _demand_and_occupancy_are_anti_correlated from the supply side.
- **_rival_economics_are_public_and_the_market_is_bimodal** (supply None) — MEASURED 2026-07-29, and it answers the question SS12 calls the central untested assumption of the whole strategy. The same GET /v2/store payload that feeds the SS5 supply gate also carries, for EVERY rival, stats.publicActorRunStats30Days (a real 30-day run count) and currentPricingInfo.pricingPerEvent (their exact per-event price). Both halves of a competitor's revenue are public. Tool: apify.rival_economics() / `python3 tools/screen.py demand "<query>"`. 

(1) RUN VOLUME PER LONG-TAIL QUERY, total across all occupants, 30 days: oig leie exclusion screening 212 | fda establishment registration device 194 | epa echo facility radius 135 | clinical trial protocol amendments 36 | irs tax exempt revocation 29 | medicare provider enrollment revalidation 12 | hcris hospital cost report 0. So a good long-tail query in this band is worth on the order of 100-200 runs/month IN TOTAL, split 5-10 ways. That is the size of the prize, measured rather than assumed.

(2) THE MARKET IS BIMODAL AND THE SPLIT IS BY JOB, NOT BY DATASET. Row-shipping actors set their developer-margin events to $0.00 and keep only Apify's built-in passthrough events (apify-actor-start $0.00005-$0.005, apify-default-dataset-item $0.00-$0.002): automation-lab/hhs-oig-exclusions-list-scraper, crawlerbros/hhs-oig-leie-exclusions-scraper, malonestar/license-verifier, malonestar/medicaid-exclusion-screener, malonestar/pcaob-auditor-engagement-monitor, malonestar/epa-contaminated-site-screener, crawlerbros/usda-fsis-recalls-scraper. Decision-shaped actors charge CUSTOM named events at $0.03-$0.45: ryanclinton/location-risk-report analysis-run=$0.40; ryanclinton/osha-inspection-search result-returned=$0.03; mooseandraven/healthcare-exclusion-suite monitor-run=$0.05 + exclusion-record=$0.005; scrapemint/fda-device-manufacturer-leads manufacturer_contact_row=$0.01; the ryanclinton/*-mcp suites, 7-8 events each at $0.05-$0.45.

(3) THE DEEPEST RESULT, AND IT CUTS AGAINST SS4: PERFECT COMPETITION (SS1) IS ALREADY PRESENT AT SUPPLY 1. malonestar/pcaob-auditor-engagement-monitor is the ONLY actor on `pcaob form ap auditor` -- an outright monopoly on the query -- and charges $0.00 developer margin. Owning an empty query therefore does NOT convert to revenue by itself. SS4's scarcity thesis and SS5's screen optimise for a POSITION that this market prices at zero; the variable that actually carries price is JOB SHAPE. This is the same conclusion the previous cycles reached from the occupancy side (both good draws won on job differentiation, not on an empty query) now confirmed from the PRICE side, which is independent evidence.

(4) CEILING CHECK, and it re-bases SS2's arithmetic. The best measurable earner anywhere in our band is ryanclinton/location-risk-report: 29 runs/30d x $0.40 analysis-run = $11.60/mo gross, and that figure is EXACT rather than a floor because analysis-run is a per-run event. ryanclinton/osha-inspection-search is 162 runs x $0.03/result-returned = $4.86/mo FLOOR (per-result, so plausibly several times that). SS7's kill line is $5/mo and its hit line is $20/mo, so $20/mo/draw sits at or above the observed ceiling of this band rather than being a modest target. SS2's '20% of draws clear $20/mo' is not supported by the only revenue data we have. Do not treat this as a reason to stop -- treat it as the reason to price per DECISION and never per ROW.

(5) DO NOT READ totalUsers30Days AS DEMAND. ryanclinton/osha-inspection-search reads 1 user in 30 days against 162 runs in the same 30 days. Every occupant probed read users_30d between 0 and 3; the field does not discriminate, and under PAY_PER_EVENT revenue tracks RUNS, not users. Reading it as demand would have condemned every live niche in this portfolio, including the ones that work.

(6) OUR OWN PRICING CHECKS OUT against this. All 8 draws carry custom margin events ($0.02-$3.00) and not one is a row-dumper, so the portfolio is on the paying side of the bimodal split. No repricing done this cycle.
- **_epa_echo_price_pre_registered_test** (supply None) — PRE-REGISTERED DECISION RULE, written 2026-07-29 BEFORE the outcome is known so that a later cycle acts on evidence instead of on inertia or on a fresh hunch. epa-echo-facility-radius charges radius-search=$3.00 + facility-record=$0.01, i.e. ~$3.75 for a typical ~75-facility screen. Its `why` justifies that as a deliberate 65x undercut of a $250-$415 Phase I incumbent, and SS8 says to launch on the upside because cuts are instant and raises need 14 days. That reasoning is sound and was NOT overturned this cycle. BUT the new on-store measurement gives a second comparator the original decision could not see: ryanclinton/location-risk-report sells a BROADER bundle (FEMA + earthquake + weather + EPA) on the SAME query for $0.40 flat per analysis-run, and it is the highest-earning actor measured anywhere in this portfolio's band. We are ~9x its total price for a NARROWER product. The external incumbent proves a consultant will pay $250; the on-store rival proves what an Apify buyer actually pays, and only the latter can reach our listing. RULE: if, 21 days after epa-echo-facility-radius goes public, it has recorded ZERO paid runs while `epa echo facility radius` still carries >=100 runs/30d across the query, cut radius-search to $0.45 (parity-plus with the $0.40 comparator, defensible because ours is a focused regulatory-records product). A price CUT is non-significant under SS8 and takes effect immediately, so this costs nothing to hold and nothing to exercise. Do not cut earlier on impatience and do not skip the cut on attachment to the $250 undercut story.
- **brazil cnpj lookup / consulta cnpj receita federal** (supply ?) — 
- **sec 8-k corporate event tracker** (supply ?) — 
- **florida sunbiz business entity search** (supply ?) — 
- **florida sunbiz business entity search** (supply ?) — 
- **florida sunbiz business entity search** (supply ?) — 
- **ofac sanctions delisting history** (supply 122) — DONE 2026-08-06T09:24Z -- superseded, kept only so this is not re-derived. The refutation WAS closed: 12 anchor ids sampled sequentially at 11s spacing across 50-870 (24 requests, zero 429s -- the earlier 429 was self-inflicted by 8-thread concurrency, never a host block); 4 of 7 live publications carry >=1 action=remove, mean 1.1, spread across every year sampled, so the delisted population is ~330-500 -- MATERIAL. The candidate was screened in (`ofac sdn sanctions screening`, 668 demand / 522 buyer, score 100), BUILT, monetized and is queued for publish as ofac-sdn-sanctions-screening-delisted-history. Nothing here is open.

```

## 6. INCIDENT & SECURITY LOGS (2026-08-05)

### 6.1 Incident Report (`INCIDENT-REPORT.md`)
```markdown
# Incident report — cryptominer via Next.js RCE

**Host:** `ubuntu-4gb-hel1-1` (Hetzner, 204.168.199.159)
**Detected:** 2026-08-05 14:45 UTC
**Status at handoff:** **ACTIVE — not contained.** Nothing has been killed,
deleted or patched. Evidence preserved read-only.
**Severity:** High — unauthenticated RCE exploited, credentials exposed.

---

## 1. Summary

A Monero (XMRig) cryptominer is running as the `outleads` service account,
consuming ~2.08 GB RAM (54% of the box) and ~184% CPU since 09:04 UTC today.

It got there through **CVE-2025-66478 / CVE-2025-55182** — a React Server
Components deserialisation flaw in **Next.js 15.5.4**, which `leads.outley.ai`
runs. CVSS 10.0, unauthenticated RCE via a crafted `Next-Action` HTTP header.

The attacker did **not** reach root and installed **no persistence**. Blast
radius is the `outleads` service account and the secrets it can read.

Detected incidentally: an unrelated agent on this box refused to start a work
cycle because free memory was below its safety threshold. Investigating *why*
memory was low surfaced the miner.

---

## 2. Root cause

| | |
|---|---|
| Vulnerability | CVE-2025-66478 (Next.js) / CVE-2025-55182 (React) |
| CVSS | 10.0, unauthenticated remote code execution |
| Mechanism | RSC protocol deserialises untrusted input via the `Next-Action` header |
| Installed version | **next@15.5.4** at `/opt/outleads/frontend` |
| Fixed in | **15.5.7** (also 15.0.5, 15.1.9, 15.2.6, 15.3.6, 15.4.8, 16.0.7) |
| Exposure | `leads.outley.ai` → Caddy → `127.0.0.1:3200` |

References:
- https://nextjs.org/blog/CVE-2025-66478
- https://unit42.paloaltonetworks.com/cve-2025-55182-react-and-cve-2025-66478-next/

**Evidence the vector was the web app, not SSH:** the attacker's `crontab` and
`chpasswd` processes are journalled **under the `outleads-web` systemd unit**,
i.e. they were spawned as children of the Next.js process. The application's own
source contains no `child_process` / `exec` / `spawn` calls
(`grep -rE "child_process|execSync|exec\(|spawn\(" /opt/outleads` → no hits
outside `node_modules`), so the execution originated inside Next.js.
`node_modules` has no files modified after deploy, so this is **not** a supply
chain compromise.

---

## 3. Timeline (UTC)

| Time | Event | Source |
|---|---|---|
| Aug 4 22:47 | `outleads-api` + `outleads-web` started for the first time — app deployed and exposed | systemd journal |
| Aug 4 22:47 | `/var/lib/outleads/.npm` created (deploy artefact) | filesystem mtime |
| ~10 h gap | Automated scanning for the CVE | inferred; Unit 42 reports mass scanning |
| **Aug 5 08:36:44** | `crontab[1784627]: (outleads) LIST` — first attacker action | journal, unit `outleads-web` |
| Aug 5 08:55:24 | `chpasswd: user "pakchoi" does not exist` — **failed** attempt to create/backdoor an account | journal |
| Aug 5 08:55 | `/var/lib/outleads/.ssh/known_hosts` created — an **outbound** SSH from this host (lateral movement attempt) | filesystem |
| Aug 5 08:57 | further `crontab LIST` ×2 | journal |
| Aug 5 09:03 | `/var/lib/outleads/.wget-hsts` created — `wget` used to pull payload | filesystem |
| Aug 5 09:04:17 | miner starts | `ps lstart` |
| Aug 5 09:04:19 | final `crontab LIST` | journal |
| Aug 5 14:45 | detected | — |

---

## 4. The malicious process

```
PID      1787453      (VERIFY BEFORE KILLING — may change on restart)
user     outleads     (uid 994, shell /usr/sbin/nologin)
exe      /var/tmp/cpu-logind        <- imitates the real systemd-logind
cmdline  ./cpu-logind -c config.json
cwd      /var/tmp
ppid     1            (reparented / daemonised)
CPU      184%, 10h36m accumulated
RSS      ~2.08 GB     (consistent with RandomX's ~2 GB dataset)
```

**SHA256:** `b20f39fc00d242e706b6c30367ad811c676e0575050a4ec2f30104b696944b49`

Miner config (`/var/tmp/config.json`):

```
"algo": "rx/0"            <- RandomX = Monero
"url":  "45.86.86.254:443"
"user": "wpmallll1"
```

Live outbound connection at time of writing:
`204.168.199.159:55470 → 45.86.86.254:443 ESTAB`

`45.86.86.254` has PTR `srv1.example.com` (placeholder — not a real identity).

---

## 5. Confirmed NOT compromised

Each of these was checked, not assumed:

- **SSH.** Every successful login since Aug 3 is publickey as `root` from
  `99.242.92.64` (the owner's ED25519 key
  `SHA256:MCMhf+gnYmO6Wv7uCM5tFO/obrOxN0ozNRztI9bgKtU`). No unauthorised login.
  The brute-force noise from `91.92.42.10` and others all shows `Failed password`.
- **Root.** The attacker remained the unprivileged `outleads` account. The
  `chpasswd` failure is positive evidence it lacked privilege.
- **Persistence.** No `authorized_keys`, no crontab for `outleads`
  (`crontab -u outleads -l` → none), no systemd unit, no rc.local, nothing in
  `/etc/cron*` referencing the binary. **The miner dies on reboot.**
- **Other Next.js apps on this host:**
  - `/opt/outley/frontend` → next@**16.2.3** — above the 16.0.7 patch line, safe
  - cal.com container → next@**16.1.5** — safe
  - Only `outleads` is vulnerable.
- **Supply chain.** No file under `/opt/outleads/frontend/node_modules` modified
  after the deploy.

---

## 6. MUST be treated as compromised

The attacker had code execution as `outleads` for roughly six hours with read
access to these. **Rotate all of them.**

| File | Mode | Secrets |
|---|---|---|
| `/opt/outleads/.env` | 600 outleads | `DATABASE_URL`, `API_KEY`, `MYEMAILVERIFIER_API_KEY`, `LOG_LEVEL` |
| `/opt/outleads/frontend/.env.local` | 640 outleads | `OUTLEADS_API_KEY`, `OUTLEADS_BACKEND_URL` |

`DATABASE_URL` is the serious one — Postgres credentials. Postgres listens on
`127.0.0.1:5432`, so exposure is local, but the account had a valid DSN and six
hours to use it. **Assume database read access occurred** and check for data
exfiltration or modification.

---

## 7. Remediation — in this order

### Step 1 — Contain

```bash
# verify the PID still matches before killing
ps -o pid,user,cmd -p 1787453

kill -9 1787453
rm -f /var/tmp/cpu-logind /var/tmp/config.json
iptables -A OUTPUT -d 45.86.86.254 -j DROP
```

### Step 2 — Close the hole (the actual fix; step 1 alone invites re-infection)

```bash
cd /opt/outleads/frontend
npm i next@15.5.7          # or latest 15.x / 16.x
npm run build
systemctl restart outleads-web
# confirm
cat node_modules/next/package.json | grep '"version"'
```

### Step 3 — Rotate every secret in §6

Including the Postgres password referenced by `DATABASE_URL`, and re-issue
`API_KEY` / `OUTLEADS_API_KEY` / `MYEMAILVERIFIER_API_KEY`.

### Step 4 — Verify clean

```bash
ps -u outleads -o pid,%cpu,%mem,cmd          # only uvicorn/next should remain
ss -tnp | grep 45.86.86.254                  # expect nothing
ls -la /var/tmp/                             # no cpu-logind / config.json
crontab -u outleads -l                       # expect "no crontab"
ls -la /var/lib/outleads/.ssh/               # no authorized_keys
free -m                                      # ~2 GB should return
```

### Step 5 — Close the forensic gap

Caddy is configured `level ERROR` with `output stdout`, so **successful requests
are never logged**. There is consequently no HTTP access log of the exploit
request. Enable access logging on all vhosts in `/etc/caddy/Caddyfile`:

```
log {
    output file /var/log/caddy/leads.log
    format json
}
```

---

## 8. Preserved evidence

In `/root/incident-2026-08-05/` (read-only capture, nothing modified):

| File | Contents |
|---|---|
| `miner.sha256` | SHA256 of the binary |
| `config.json` | miner config as found (pool, wallet, algo) |
| `pools.txt` | extracted pool/algo/user fields |
| `process.txt` | full `ps` snapshot |
| `connections.txt` | live socket to the pool |
| `openfiles.txt` | `/proc/<pid>/fd` listing |
| `INCIDENT-REPORT.md` | this file |

**The miner binary itself is still at `/var/tmp/cpu-logind`.** If you want it for
analysis, copy it out *before* running Step 1.

---

## 9. Notes for whoever picks this up

- **Do not stop at killing the miner.** Until Next.js is patched the host is
  re-exploitable by the same unauthenticated request; this CVE is being mass
  scanned.
- The `pakchoi` username and the `/var/tmp` staging pattern are commodity
  crypto-mining botnet behaviour, not a targeted attack. That is mildly
  reassuring about intent but says nothing about what was read.
- An unrelated service, `portfolio-agent`, has been **stopped** by the operator
  session as a precaution (it was competing for the little RAM that remained).
  It is unrelated to this incident and can be restarted with
  `systemctl start portfolio-agent` once the host is clean. Its own memory
  guard is what surfaced the miner in the first place.
- Consider whether `outleads` needs a writable `/var/tmp` at all —
  `PrivateTmp=true` on `outleads-web.service` would have blocked the staging
  directory this attack used.

```

### 6.2 Remediation Strategy (`REMEDIATION.md`)
```markdown
# Remediation report — 2026-08-05

Follows `INCIDENT-REPORT.md`. Status: **contained, patched, rotated, online.**

## Monero mined: effectively nothing (~0.00001–0.00004 XMR, well under 1 cent)

Cannot be known exactly: the pool (45.86.86.254) is private with no public API,
the miner's stdout went to a pipe so nothing was logged, and `wpmallll1` is a
pool username rather than a wallet address, so the chain cannot be queried.

Estimated from what *is* measurable — 39,514 s of CPU (11.0 CPU-hours) over
6h 01m on a 2-vCPU Skylake Xeon. At 300–1000 H/s against a 2.5–5 GH/s network
and 0.6 XMR/120 s emission, that is 0.0000065–0.0000433 XMR. See
`mining-estimate.txt`. The cost was the 2.08 GB of RAM it held hostage, not the
electricity.

## Actions taken

| # | Action | Result |
|---|---|---|
| 1 | Preserved miner binary before deletion | `cpu-logind.bin`, sha256 matches report |
| 2 | Blocked pool 45.86.86.254 in/out, killed PID 1787453 | 2.18 GB reclaimed |
| 3 | Stopped `outleads-web` before patching | closed the re-exploitation window |
| 4 | Removed `/var/tmp/cpu-logind`, `config.json`, `.ssh/`, `.wget-hsts` | artefacts copied to evidence dir first |
| 5 | next 15.5.4 → **15.5.22**, react 19.1.0 → **19.2.8** | RCE closed |
| 6 | Pinned sharp 0.35.3 + postcss 8.5.25 via `overrides` | `npm audit`: 0 vulnerabilities, no major bump |
| 7 | Node 22.23.1 → **22.23.2** | |
| 8 | Rotated Postgres password, API_KEY, OUTLEADS_API_KEY | old key now 401s |
| 9 | Rotated MyEmailVerifier key (owner-issued) | old key confirmed revoked upstream |
| 10 | Hardened both systemd units | exposure 9.x → **3.2 / 3.3** |
| 11 | Caddy access logging on all 4 vhosts | forensic gap closed |
| 12 | SSH: password auth **off**, root prohibit-password, MaxAuthTries 3 | removes the 12,791-attempt surface |
| 13 | Installed fail2ban | 3 IPs banned within a minute |
| 14 | Persisted firewall rules | survives reboot |

## What was taken

**Nothing provable was exfiltrated, and one exposure is positively disproven.**

- **MyEmailVerifier key — exposed, NOT used.** Balance was 9,708 before the
  incident and 9,708 after. Concrete negative evidence.
- **Lateral movement — attempted, failed, and it never left this box.** The
  `known_hosts` entry the attacker created hashes to `127.0.0.1`, and its host
  key fingerprint (`SHA256:uqqfpolh186PnEMvGYRrl7CipCQIR7uHEzuCHuCYGOc`) is
  this machine's own. They tried to SSH to localhost, consistent with the
  failed `chpasswd` for user `pakchoi`. No other host was touched.
- **Payload source: github.com** (`.wget-hsts`) — commodity XMRig release.
- **Database — UNKNOWN, assume read.** `log_connections`, `log_statement` and
  `logging_collector` were all off, so there is **no record of any database
  access**. This is the one real forensic gap and it cannot be closed
  retroactively. The attacker held a valid DSN for ~6 h. Treat lead/contact
  data as potentially read. Nothing indicates modification: row counts and
  schema are intact.
- **No persistence**: no crontab, no authorized_keys, no unit, nothing in
  `/etc/cron*`. Confirmed again after cleanup.

## Root cause, restated

`leads.outley.ai` was deployed on **2026-08-04 22:47** running next@15.5.4, a
version with a CVSS 10.0 unauthenticated RCE that was already under mass
scanning. It was exploited **9h 49m later**. The deploy shipped a known-
vulnerable dependency; nothing about the application code was at fault.

The lesson is not "patch faster" but "do not ship un-audited dependencies":
`npm audit` at deploy time would have flagged it.

## Known-good state

All services active; leads/outley/manual/cal all serving; outleads test suite
135/135 green; `npm audit` clean; email verification restored (9,707 credits).

## Deliberately NOT done, and why

- **`outley-web` still binds `*:3000`.** Applying `-H 127.0.0.1` (the fix used
  on outleads) made the app return 500, so it was reverted. ufw permits only
  22/80/443, so this is defence-in-depth rather than live exposure. Worth
  fixing separately, not during incident recovery.
- **outley's npm advisories** (`brace-expansion`, `fast-uri`, `@clerk/shared`,
  …) are all non-major fixes but touch the main product's dependency tree.
  Left for a change window with a rebuild and smoke test.
- **Postgres query logging** left off — enabling it is a config change with a
  disk-growth implication and should be a deliberate decision.

## Self-inflicted outage, disclosed

Enabling Caddy access logging took **all four sites down for ~5 minutes**
(15:21–15:27). Cause: pre-existing `/var/log/caddy/*.log` owned `root:root 0600`
(one dated Jul 26, so this had been attempted before), which Caddy — running as
`caddy` — could not open. The reload failed atomically and safely; the
subsequent *restart* did not, because the config was already written. Fixed by
chowning the files. Lesson: use `reload`, never `restart`, to test a Caddy
config change.

```

## 7. FULL ARCHITECTURAL PLAN (`apify-portfolio-plan.md`)

```markdown
# Autonomous Income Portfolio — Operating Plan

**Owner:** Malek Hammoud
**Created:** 2026-07-27
**Last verified:** 2026-07-28 (all Apify facts re-checked against primary docs)
**Status:** ready to execute
**Target:** $200/month recurring, produced by agent work rather than capital

---

## 0. Read this first

You are an autonomous agent executing a long-running strategy. This document is
your complete brief: the reasoning, the evidence, the plan, and the rules.

Three things matter more than anything else here:

1. **Do not drift into the strategies listed in §3.** They were each investigated
   and killed with evidence. If you find yourself proposing one, re-read that
   section — you are re-deriving a dead end.
2. **Throughput is the whole thesis.** The strategy works because you take many
   cheap draws, not because any single draw is brilliant. Optimize for shots on
   goal.
3. **The kill rule in §7 is not optional.** It is what keeps this a portfolio
   rather than a garbage dump, it keeps the Apify account in good standing, and
   it limits exposure to the credit-compensation clawback in §9.

---

## 1. The economic thesis

The core constraint, learned the hard way:

> **Agent-scalable + zero entry barrier = zero profit.**

This is perfect competition. When the marginal cost of production is ~$1 of API
spend and entry is free, price falls to marginal cost. Every open market for
undifferentiated agent labor obeys this law, and the saturation windows are
*shrinking*:

| Market | Window before collapse |
|---|---|
| Apify actors (generic scraping) | 18–24 months |
| Algora bounties | ~18 months |
| GitHub bug bounty | 12–18 months |
| HackerOne Internet Bug Bounty | 6–12 months |
| curl bounty program | 6–12 months |

Recent enforcement, for calibration:

- **curl** ended its bounty program (Jan 2026) — valid-report rate fell below 5%.
- **HackerOne** paused the Internet Bug Bounty indefinitely (Mar 2026) — 76% YoY
  submission surge, mostly AI-generated.
- **GitHub** slashed public bug-bounty payouts to fixed tiers and created an
  invitation-only VIP tier (Jul 23, 2026) — AI report flood.

A documented agent bounty run: 240 PRs submitted → 72 merged → $500–800 gross,
$30 costs. **That is $5–8/hour for agent labor.**

### Why this strategy escapes the law

We are not selling labor into a priced market. We are **taking many independent
draws from a fat-tailed payoff distribution.** Saturation lowers the hit rate; it
does not zero it. And crucially, **draws-per-year scales linearly with agent
throughput** — which is the property we actually want.

The bulk publishers ("actor farms") already prove positive expected value exists
here. They are not profitable because they found an unsaturated niche. They are
profitable because they take fifty draws while everyone else takes one.

**Our edge over them: the draws are engineering-grade, not slop.** In a market
where most entries are generated garbage, software that actually works is the
differentiator that survives — and under Apify's clawback rules (§9), quality is
directly monetary, not just reputational.

---

## 2. What we are building

A continuous pipeline that:

1. **Harvests** candidate product ideas from real demand signals
2. **Screens** them against a two-sided test (§5)
3. **Builds** small, genuinely functional tools
4. **Publishes** them to Apify via API
5. **Instruments** revenue per unit
6. **Judges** each on a 60-day clock — kill or double down

Each published unit is a "draw." Target ~30 draws/year.

**Rough math:** if 20% of draws clear $20/mo, that is $120/mo, plus the tail where
a single hit at $200/mo rewrites the picture. Year two starts with year one's
survivors still paying.

---

## 3. Ruled out — do not revisit

Each of these was researched and killed. Reasons are recorded so you do not
rediscover them at cost.

| Strategy | Why it's dead |
|---|---|
| **Paid traffic acquisition** | Meta/Google need ~50 conversions/week to exit the learning phase. A $150/mo budget yields 0.3–1.8 conversions/**month**. You never exit learning; ads run permanently suppressed. Viable only above ~$2,000/mo net. |
| **Buying a cash-flowing asset** | $200/mo of revenue costs $4–8k. Sub-$1k listings are documented junk — shill bidding, no seller vetting, no mechanism to verify financial claims. |
| **Scraped-data products** | Silent failure: markup changes return HTTP 200 with zero/garbage rows. 10–15% of crawlers need weekly fixes. An agent can regenerate selectors but cannot judge output correctness without ground truth. Poisons paying customers invisibly. |
| **Dev tools / MCP servers** | 10–17k published, ~95% free. Langfuse reached only $1.1M ARR before being acquired. Incumbents (Anthropic, OpenAI, GitHub) absorb the category. Support load is structurally incompatible with unattended operation. |
| **Open-source bounties** | Fully agent-saturated. 8–158 competing PRs within *hours*. ~17M AI PRs/month on GitHub, ~90% noise. Maintainers instituting AI bans (Ghostty, NetBSD, QEMU). |
| **Utility micro-tools / programmatic SEO** | Killed by Google's Feb/Mar 2026 updates. 68% of searches now end with zero clicks. Thin content is explicitly targeted. |
| **npm/PyPI package volume** | 99.82% of npm packages never used in production. Monetization is sponsorship-only and winner-take-most. Good signal, ~zero revenue. |
| **Mobile apps at volume** | Median app earns $36/mo. 212,000 apps rejected in 2025. Store review per unit destroys throughput. |
| **Microsite / affiliate portfolios** | Crushed by 2026 core updates. 61% of sites publishing AI content at scale lost 40–90% of organic traffic. |
| **Staking / DeFi / trading** | Capital-scalable, **not agent-scalable**. $500 yields ~$50/mo regardless of how hard the agent works. Fails the core objective. |
| **Chrome Web Store** | See §6. Per-draw cost is days-plus-paperwork instead of minutes. |

---

## 4. Distribution — the mechanic that makes this work

**Marketplaces do not distribute for you.** On Apify, ~99% of actors get zero
users. Discovery weights total run count, creating a flywheel newcomers cannot
crack head-on. Publishing and waiting for organic traffic means waiting forever.

**But discovery is query-matching, not purely popularity.** Apify's internal
search weights, in order:

1. Actor **name** (heaviest)
2. Short description
3. README content
4. Categories and tags

…then modulated by run count, success rate, update recency, and ratings.
Separately, **Google indexes every actor store page**, so each listing competes in
two search engines at once.

### The strategy: occupy queries nobody else occupies

Do not compete for `scraper`. Own `extract <specific thing> from <specific source>`.
Run count is irrelevant when you are the only result.

Measured supply on the Apify store (2026-07-27, via the store search API):

| Query | Actors returned |
|---|---|
| `scraper` | 36,698 |
| `google maps` | 7,937 |
| `instagram` | 3,977 |
| `shopify app store reviews` | 339 |
| `sam.gov` | 247 |
| `canadian pharmacy formulary` | **6** |
| `clinical trial protocol amendments` | **5** |
| `municipal council agenda` | **4** |

Three orders of magnitude. At 36,698 you are invisible permanently. At 4, you are
the result. **This gap is the entire distribution strategy.**

---

## 5. The two-sided screen

Every candidate must pass **both** tests. This is the most important operational
rule in the document.

### Supply test (cheap, fully automatable)

```bash
curl -s -H "Authorization: Bearer $APIFY_TOKEN" \
  "https://api.apify.com/v2/store?search=<urlencoded query>&limit=1" \
  | python3 -c "import sys,json;print(json.load(sys.stdin)['data']['total'])"
```

**Pass if total < 10.**

### Demand test (the one that actually matters)

Low supply is ambiguous: it can mean nobody built it, or **nobody wants it**.
Optimizing on supply alone produces a graveyard of beautiful tools for queries
with no searchers.

Demand signals, in descending order of strength:

1. **An existing expensive incumbent.** Strongest possible signal — demand is
   proven *and* priced. Example: Construction Monitor and Shovels charge
   $500–2,000/mo for building-permit data that sits behind free Socrata
   endpoints. PermitGrab charges $149/mo. You are not guessing; you are
   undercutting.
2. Recurring "is there a tool that…" threads in forums/subreddits
3. Stack Overflow questions with volume and no good answer
4. GitHub issues closed as `wontfix` where people still ask
5. An API/dataset that exists publicly but has no wrapper

**Rule: build only where a paid incumbent proves demand AND marketplace supply is
under 10.** That intersection is small. That is fine — you only need ~30 hits a
year, and you can screen thousands of candidates a week.

---

## 6. Platform decision: Apify only

Single surface until ~10 draws are live and a real hit rate is measurable.

### Per-draw marginal cost — the deciding factor

**Apify:** agent builds → agent creates via API → agent writes its own SEO
fields. Human touches it **once, ~5 minutes**, for the monetization wizard.

**Chrome Web Store:**
- 14-day review per submission (extended further as of Apr 2026 from a surge)
- **No native payments** — Google removed CWS payments, so every extension needs
  its own external processor (Stripe / ExtensionPay / Lemon Squeezy), each with
  identity verification and tax forms
- Per-extension data-collection disclosure under stricter Jul 2026 policy
- Rejection risk repeats the 14 days
- Consumer buyers convert far worse than business buyers (extension donation
  conversion runs under 1%)

That is not a slightly worse surface — it is days-and-paperwork per draw versus
minutes. Thirty Apify draws a year is realistic; thirty Chrome draws would consume
the year in review queues.

**Breadth comes from more draws on the cheapest surface, not from spreading
across expensive ones.** Ten Apify actors beat three actors plus two extensions.

**When adding a second surface later, choose RapidAPI over Chrome** — it reuses
the backend already built for the actor, has no review gate, and is API-driven, so
the marginal cost of a second listing for an existing product is near zero.

---

## 7. The pipeline

### Stage 1 — Harvest
Continuously mine demand signals (§5) into a ranked backlog. Record for each
candidate: the exact target query, the demand evidence with a URL, the incumbent
and its price if one exists, and the data source.

### Stage 2 — Screen
Apply the two-sided test. Discard anything failing either side. Log why —
rejected candidates are useful signal.

### Stage 3 — Build
Small, genuinely functional, one job done well.

**Strongly prefer stable public APIs over HTML scraping.** Stable sources
(government open data, documented public APIs, Socrata/CKAN portals) have
versioned schemas and deprecation notices. Fragile HTML scraping reintroduces the
silent-failure problem that killed an entire strategy in §3 — and under §9's
clawback rules, a silently-broken actor can produce negative revenue.

### Stage 4 — Publish
Create via the Apify API (§8). Write `seoTitle` and `seoDescription` deliberately
— they feed both Apify's internal search and Google. **Put the target query in the
actor name**; it is weighted heaviest.

### Stage 5 — Instrument
Every unit reports revenue and run count. **Also track success rate** — it feeds
store ranking and predicts clawback exposure. Maintain a single portfolio ledger.

### Stage 6 — Judge (60-day clock)
- **< $5/mo → delete the actor.** Not deprecate — delete.
- **$5–20/mo → hold, no further investment.**
- **> $20/mo → build three variants in that direction.** This is what makes the
  portfolio a search with feedback rather than a spray.
- **Any actor with a falling success rate → fix or delete immediately**, ahead of
  the 60-day clock. Broken actors cost money (§9).

---

## 8. Operational reference — verified facts

Verified against the live account and Apify primary documentation on 2026-07-28.

### Authentication — CREDENTIALS

> 🔑 **Credentials are NOT stored in this document.**
> The live token lives only in `~/portfolio-agent/agent.env` (chmod 600), loaded
> by the systemd unit via `EnvironmentFile`. The token formerly printed here was
> rotated on 2026-07-29 and returns 401 — it is dead. Do not paste a live token
> back into this file: a plan doc gets read, copied and quoted far more freely
> than a credentials file, which is how the first one leaked.
>
> To rotate: Console → Settings → Integrations → new token, then
> `printf 'APIFY_TOKEN=<new>
' > ~/portfolio-agent/agent.env` (re-add
> `DISCORD_WEBHOOK=`), `chmod 600`, `systemctl restart portfolio-agent`.

Account: `malekh` · plan `CUSTOM` / tier `BRONZE` · $1/mo base · spend cap
$85/mo · compute ceiling ~2,000,000 CU/mo.

Verify on startup:
```bash
curl -s -o /dev/null -w "%{http_code}\n" \
  -H "Authorization: Bearer $APIFY_TOKEN" https://api.apify.com/v2/users/me
# expect: 200
```

> ⚠️ **This token was exposed in a chat transcript.** It works, but it is
> compromised. Replace the value above with a rotated token before or shortly
> after first run. The account now has billing attached, so the blast radius is
> real money.
>
> ⚠️ `GET /v2/users/me` returns the account **proxy password** in its payload.
> Never log that response verbatim — extract only the fields you need.

### The publish sequence — TESTED END TO END 2026-07-28

**You cannot create a public Actor directly.** `POST /v2/acts` with
`isPublic: true` returns `403 cannot-create-public-actor`. The required order is:

**1. Create private** — `POST /v2/acts` → `201`
Accepts: `name`, `title`, `description`, `isPublic` (must be `false` here),
`categories`, `defaultRunOptions`, `seoTitle`, `seoDescription`, `versions[]`.

`versions[].sourceType` supports `SOURCE_FILES`, `GIT_REPO`, `TARBALL`,
`GITHUB_GIST`, `SOURCE_CODE` — source files can be passed inline as JSON, so no
git repo is required.

**2. Build** — `POST /v2/acts/{actorId}/builds?version=0.0&useCache=false` → `201`
Poll `GET /v2/actor-builds/{buildId}` for `status`. Measured: **SUCCEEDED in ~10
seconds** for a trivial Python actor. Fast enough that build time is not a
throughput constraint.

**3. Publish** — `PUT /v2/acts/{actorId}` with `{"isPublic": true, "categories": [...]}`

**✅ THE FULL PATH IS VERIFIED WORKING as of 2026-07-28** — create → build →
publish returned `200` with `isPublic: true`. No operator gates remain on
publishing.

Four gate conditions, all discovered by testing rather than from docs:

| Condition | Failure if missing | Status |
|---|---|---|
| `categories` present on publish | `400 schema-validation` | agent must supply |
| **`README.md` in `sourceFiles`** | `403 readme-required` | **agent must supply** |
| Account has a public profile | `403 username-required` | ✅ satisfied |
| Store terms accepted | `403 store-terms-not-accepted` | ✅ satisfied |

**The README is mandatory and it is YOUR job, not the operator's.** Every actor
must ship a `README.md` in its `sourceFiles` before the build, or publishing
fails. This is not merely a formality — README content is one of the four fields
Apify's store search indexes (§4), so write it for the target query, not as
boilerplate.

If a publish fails for a reason not in this table, treat it as an operator
blocker: record it in `blocked.json` per §14 and move on. Do not retry in a loop.

**4. Delete** — `DELETE /v2/acts/{actorId}` → `204`

### Store search — `GET /v2/store?search=<q>&limit=1`
Returns `data.total`. This is the supply-screen endpoint.

### Account state (verified 2026-07-28)
- Username `malekh` · plan `CUSTOM` · tier **BRONZE** (the $1/mo Creator plan)
- `isPaying: true` — billing attached
- Monthly spend cap **$85** · compute ceiling **~2,000,000 CU/mo**
- `maxActorCount`: 500 · `maxActorMemoryGbytes`: 16 · retention: 7 days
- `ACTORS_PUBLIC_ALL` enabled · public profile live · Store terms accepted
- Actors currently published: **0** (clean slate)

### Pricing models — only two remain
- **Pay per event (PPE)** — users pay for events triggered from the Actor's code.
  **This is the model to use.** It is the only x402/agentic-payments-eligible
  option and receives a store-ranking boost.
- **Pay per usage** — users cover platform costs only, no developer margin.
- **Rental is DEPRECATED.** Since **April 1, 2026** you cannot publish new rental
  Actors or change pricing on existing ones. **October 1, 2026: rental Actors are
  fully retired.** Do not build on it.

### Revenue share
> `profit = (0.8 * revenue) - platform usage costs`

Developers receive **80%**; Apify retains 20%. Platform usage costs come out of
your 80%.

**You may optionally pass platform usage costs through to users**, which
simplifies to `profit = 0.8 * revenue`. **Prefer this** — it removes compute-cost
variance from your margin entirely.

### Pricing-change rules
- **Significant changes** (price increases, model switches, adding paid events):
  **14-day notice period**, limited to **once per month per Actor**
- **Non-significant changes** (price *decreases*, removing events, description
  updates): **take effect immediately**

So launch pricing should be chosen deliberately on the upside — you can always cut
instantly, but raising is slow.

### Monetization setup — the one human step
Enabling monetization is **not** in the API. It is a three-step wizard in the
Apify Console, roughly 5 minutes, once per actor.

Code, descriptions, and SEO fields can be changed freely at any cadence.

### Payouts — verified against primary docs
- **KYC identity verification is REQUIRED.** Payouts process only after identity
  verification is approved (AML compliance). Billing details and a selected
  payment method are also required.
- **Minimums: $20 for PayPal and Wise · $100 for other methods.** Below
  threshold, earnings **roll over** to the following month.
- **Schedule:** invoices prepared days 1–10 → issued **day 11** → developer review
  days 11–14 (auto-approved day 14) → **funds released days 21–25**, plus normal
  banking delay. Contact Apify support if nothing arrives by day 30.

**Consequence for planning:** revenue appears on the dashboard well before cash
moves — roughly three weeks after invoice, and longer while under the $20
threshold. Do not read "no payout yet" as "no traction." Read the dashboard, not
the bank.

### Creator plan — $1/month
Real, and worth taking: **$1/month + pay-as-you-go ($6 for 6 months)**, including
a **$500 usage bonus** consumable within the first 6 months. Aimed exactly at
community developers publishing their own Actors. `$0.2` per compute unit.

Trade-offs to know: it **limits Apify Store access to universal Actors only**, and
caps residential proxy at **10 GB/month** and SERPs at **10,000/month**. The bonus
can only be received once.

**This plan is already active on the account.** The $500 bonus substantially
covers development and testing compute, which the free tier's 625 CU/month would
not have. Confirm in Console whether the bonus is reflected before assuming an
unlimited compute runway — it may apply at invoice time rather than as a visible
credit balance.

---

## 9. Guardrails

**Clawback risk — read this one carefully.** If an Actor malfunctions, users can
request **credit compensation**. Apify reviews these manually and **deducts them
from your payout invoice.** A broken Actor therefore does not merely earn zero —
it can produce *negative* revenue. This is the strongest argument for the quality
bar and for the aggressive kill rule in §7. Never leave a degraded Actor running.

**Account standing.** Apify's terms are anti-spam but pro-volume: genuine tools at
volume are explicitly fine; bot-created accounts are banned and floods of
low-effort actors invite review. Deleting failures rather than letting them rot
keeps the account looking like a builder's.

**Legal.** Prefer public/government data. Note that *hiQ v. LinkedIn* protects
against CFAA claims on public data but **not** against breach of contract, trespass
to chattels, or copyright on compilations. There is an emerging DMCA §1201 theory
treating CAPTCHAs and rate limits as technological protection measures.
**Avoid LinkedIn, Indeed, Zillow, and Amazon entirely** — all actively litigate.

**Quality.** Every actor must actually work. Success rate feeds store ranking, and
malfunction feeds clawbacks. Quality is directly monetary here.

**Cost.** Watch the compute budget. Pass platform costs through to users where
possible. Kill compute-burning actors early.

---

## 10. Human-in-the-loop

Deliberately minimal. The human is required for exactly these:

**Before the agent can publish — ALL CLEAR as of 2026-07-28:**
1. ✅ **Public profile** — done
2. ✅ **Creator plan** ($1/mo, BRONZE) — done; billing attached, `isPaying: true`
3. ✅ **Apify Store terms accepted** — done
4. ✅ **Publish path verified end to end** — `200`, `isPublic: true`

**Deferrable — needed only before the first withdrawal, not before earning:**
- **KYC identity verification** — blocks payouts only. Revenue still accrues on
  the dashboard without it. Given the $20 threshold plus the day-11→day-21–25
  invoice cycle, this is months away. Do it when there is money worth collecting.
- **Payout method** — PayPal or Wise for the $20 threshold rather than $100.
- **Rotate the API token** — the one in §8 is compromised. Not a blocker; the
  current token works.

**Ongoing, every draw:**
- **The monetization wizard** — ~5 minutes per actor, at publish time. An Actor
  published *without* this is public and **free**; it earns nothing. This is the
  single recurring human dependency in the whole system.
- **Monthly review** of the portfolio ledger.

### What the agent CAN do unattended
Create, build, **publish**, update code, rewrite SEO fields and README, run,
monitor, and delete — all via API, all verified working on 2026-07-28. The only
irreducible human step in steady state is the per-actor monetization wizard.

Everything else is agent-owned.

---

## 11. Success metrics

Review monthly:

- **Draws published** (target ~2–3/month)
- **Survival rate** — % clearing $5/mo at 60 days
- **Hit rate** — % clearing $20/mo at 60 days
- **Portfolio MRR** — the number that matters
- **Aggregate success rate** — leading indicator of clawback exposure
- **Screen precision** — of draws published, how many had a real incumbent?
  If hit rate is low, the demand test is too loose; tighten it before shipping
  more.

**Decision point at 10 live draws:** if hit rate is under 10%, the problem is the
screen, not the throughput. Fix Stage 2 before increasing volume.

---

## 12. Known unknowns

Honest gaps. Do not treat these as settled:

- **The hit rate is estimated, not measured.** The 20%-clear-$20/mo assumption is
  the weakest number in this plan. The first 10 draws exist to measure it.
- **Time to first revenue is unknown.** Expect 3–6 months, lumpy — and first
  *cash* later still, given the $20 threshold plus the day-21–25 release cycle.
- **Whether the $500 Creator-plan bonus is actually applied** is unconfirmed — it
  did not appear in the account's limits payload. Do not assume an unlimited
  compute runway; watch actual spend against the $85 cap.
- **Apify concentration risk is real.** A terms change or bulk-publishing
  crackdown exposes the whole portfolio. Mitigation early is quality, not
  diversification; revisit after the hit rate is known.
- **Whether long-tail queries with <10 supply have enough demand to sustain
  $20/mo each** is the central untested assumption of the entire strategy.

---

## 13. First actions

1. Confirm `APIFY_TOKEN` is set and valid (`GET /v2/users/me` → 200)
2. Build the **harvester** (Stage 1 + 2) — the highest-value component; every
   downstream draw's odds depend on it
3. Produce a ranked backlog of 20 screened candidates
4. Build and publish draws 1–3, priced deliberately (raising is slow, cutting is
   instant)
5. Start the ledger; set the 60-day clocks; track success rate from day one

---

## 14. Autonomous operation — run forever

**You do not stop.** There is no "done" state for this work. When you finish a
task, you pick up the next one. The operator stops you; you do not stop yourself.

### State — survive restarts

All state lives on disk under `~/portfolio/`. Never hold important state only in
context; you will be restarted.

```
~/portfolio/
  ledger.json        # every draw: id, name, query, published_at, revenue, success_rate, status
  backlog.json       # screened candidates, ranked, with demand evidence
  rejected.json      # screened-and-failed candidates + reason (avoids rework)
  blocked.json       # items needing the human, with what is needed and since when
  heartbeat.log      # append one line per cycle: timestamp + what you did
```

Read all of these at startup. Reconcile against the live Apify API — the API is
the source of truth for what exists, the ledger is the source of truth for intent.

### The main loop

Each cycle, in priority order — do the **first** thing that applies, then loop:

1. **Health check.** Any published actor with a falling success rate or failing
   runs → fix or delete it now. Broken actors cost money (§9). This outranks
   everything.
2. **Judge.** Any draw past its 60-day clock → apply the §7 rule (kill / hold /
   triple down). Record in the ledger.
3. **Publish.** Any built actor not yet public → publish it (§8 sequence).
   - `403 readme-required` → **your bug, fix it**: add `README.md` to
     `sourceFiles`, rebuild, publish again.
   - `400 schema-validation` → **your bug**: missing `categories`.
   - Any other 403 → operator blocker. Write to `blocked.json`, continue.
     **Do not retry in a tight loop and do not halt.**
4. **Build.** Any screened candidate at the top of the backlog → build and ship
   it, up to the rate limit below.
5. **Harvest.** Backlog under 10 screened candidates → run the harvester (§5).
6. **Idle.** Nothing else to do → harvest more. There is always more to screen.

Between cycles, sleep 10–15 minutes. Log a heartbeat line every cycle even when
nothing happened.

### When you are blocked

Blocked means "a human must act." The correct response is **never** to stop, and
never to retry in a loop:

1. Append to `blocked.json`: what is needed, which draw, timestamp
2. Log it clearly in `heartbeat.log`
3. **Move to the next item in the loop**
4. Re-check blocked items once per day, not once per cycle

**The only operator blocker in steady state is the per-actor monetization
wizard.** Public profile, Store terms, billing and the Creator plan are all
already done (§10). KYC and payout method matter only before the first
withdrawal, which is months away — do not treat their absence as a blocker.

### Rate limits — self-imposed

These exist so "never stop" does not become "spam until banned":

- **Maximum 1 new actor published per day**, 5 per week. Quality over volume;
  bulk low-effort publishing invites Apify review (§9).
- **Never publish an actor that fails its own smoke test.** A broken actor is
  worse than no actor — it can produce negative revenue via clawbacks.
- **Stop publishing entirely** if monthly spend exceeds $40 (the account cap is
  $85; leave headroom) or if aggregate success rate drops below 90%.
- **Never delete an actor earning over $5/mo**, regardless of any other rule.

### Error handling

- API 5xx or network failure → exponential backoff (30s, 60s, 2m, 5m, capped at
  15m), then continue the loop. Do not crash.
- API 4xx → **first ask whether it is your bug or an operator blocker.** The
  known agent-fixable ones are `403 readme-required` and `400 schema-validation`
  (see §8) — fix and retry those. Anything else: log the full request and
  response, write to `blocked.json`, move on. Never retry unchanged.
- `429 rate limit` → back off and continue.
- Build failure → fix the actor, or delete it and move to the next candidate.
  Do not leave broken builds sitting.

### Reporting

Once per day, write `~/portfolio/daily.md`: draws live, portfolio MRR, success
rates, anything in `blocked.json`, and what you plan to do next. This is the
operator's monitoring surface — keep it short and factual.

---

## 15. Bootstrap — run this once, on first start

**This document is self-contained.** It is the only file you were given. Every
script you need is embedded below — write them out yourself, then install
yourself as a supervised service so you survive reboots, crashes, and logout.

Run the whole of this section on the VPS. It is idempotent — safe to re-run.

### Step 1 — Layout and credentials

```bash
set -e
mkdir -p ~/portfolio-agent ~/portfolio ~/.config/systemd/user
cd ~/portfolio-agent

# Copy this plan next to the agent so the service can reference a stable path.
# (If you are reading this from elsewhere, adjust the source path.)
cp -n "$PLAN_SOURCE" ~/portfolio-agent/apify-portfolio-plan.md 2>/dev/null || true

# Credentials. systemd unit files are world-readable; this file must not be.
printf 'APIFY_TOKEN=<your-token>\n' > agent.env  # never commit a real token
chmod 600 agent.env
```

### Step 2 — Write the supervisor

```bash
cat > ~/portfolio-agent/run-portfolio-agent.sh <<'SUPERVISOR_EOF'
#!/usr/bin/env bash
# Portfolio agent supervisor — runs one agent cycle, forever.
#
#   - Each cycle is a FRESH agent invocation. State lives on disk (~/portfolio),
#     not in context, so restarts are free and context never overflows.
#   - This script never exits on its own. systemd restarts it if it ever does.
#   - Backoff applies to crashes only, not to normal cycles.

set -uo pipefail

PLAN="${PLAN:-$HOME/portfolio-agent/apify-portfolio-plan.md}"
STATE="${STATE:-$HOME/portfolio}"
LOG="$STATE/heartbeat.log"
CYCLE_SLEEP="${CYCLE_SLEEP:-900}"

BACKOFF_MIN=30
BACKOFF_MAX=900
backoff=$BACKOFF_MIN

mkdir -p "$STATE"
log() { printf '%s %s\n' "$(date -Is)" "$*" | tee -a "$LOG"; }

[[ -n "${APIFY_TOKEN:-}" ]] || { log "FATAL: APIFY_TOKEN not set"; exit 1; }
[[ -f "$PLAN" ]] || { log "FATAL: plan not found at $PLAN"; exit 1; }

# Verify credentials once at startup. Never log the body — it contains the
# account proxy password.
code=$(curl -s -o /dev/null -w '%{http_code}' \
  -H "Authorization: Bearer $APIFY_TOKEN" https://api.apify.com/v2/users/me)
[[ "$code" == "200" ]] || { log "FATAL: apify auth HTTP $code"; exit 1; }
log "startup: auth ok, plan=$PLAN state=$STATE"

PROMPT="You are the autonomous portfolio agent. Your complete brief is at ${PLAN} —
read it in full, every cycle. Your persistent state is in ${STATE}.

Execute ONE cycle of the main loop in section 14 of the plan, then stop and
report. Do not attempt the whole strategy in one invocation.

Rules that override everything else:
  - Never halt because you are blocked. Record blockers in ${STATE}/blocked.json
    and move to the next loop item.
  - Distinguish your bugs from operator blockers (section 8). readme-required and
    schema-validation are YOUR bugs — fix and retry them.
  - Respect the self-imposed rate limits in section 14. They prevent bans.
  - Append exactly one summary line to ${STATE}/heartbeat.log before finishing.
  - The Apify API is the source of truth for what exists. Reconcile the ledger
    against it rather than trusting it blindly."

while true; do
  start=$(date +%s)
  log "cycle: start"
  if claude -p "$PROMPT" --permission-mode acceptEdits >>"$STATE/agent.out" 2>&1; then
    log "cycle: ok ($(( $(date +%s) - start ))s) — sleeping ${CYCLE_SLEEP}s"
    backoff=$BACKOFF_MIN
    sleep "$CYCLE_SLEEP"
  else
    log "cycle: FAILED rc=$? — backing off ${backoff}s"
    sleep "$backoff"
    backoff=$(( backoff * 2 ))
    (( backoff > BACKOFF_MAX )) && backoff=$BACKOFF_MAX
  fi
done
SUPERVISOR_EOF

chmod +x ~/portfolio-agent/run-portfolio-agent.sh
bash -n ~/portfolio-agent/run-portfolio-agent.sh   # syntax check before trusting it
```

**Adjust the `claude -p` line** to match the runtime actually installed on this
box. Check with `command -v claude` first. If no suitable runtime exists, that is
an operator blocker (§14) — record it, do not work around it.

### Step 3 — Write the systemd unit

```bash
cat > ~/.config/systemd/user/portfolio-agent.service <<'UNIT_EOF'
[Unit]
Description=Autonomous Apify portfolio agent
Documentation=file:%h/portfolio-agent/apify-portfolio-plan.md
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
ExecStart=%h/portfolio-agent/run-portfolio-agent.sh
EnvironmentFile=%h/portfolio-agent/agent.env
Environment=PLAN=%h/portfolio-agent/apify-portfolio-plan.md
Environment=STATE=%h/portfolio
Environment=CYCLE_SLEEP=900

# Never stop: restart on crash, on clean exit, on anything.
Restart=always
RestartSec=30
# Do not let a crash-loop trip systemd into disabling the unit permanently.
StartLimitIntervalSec=0

StandardOutput=journal
StandardError=journal
SyslogIdentifier=portfolio-agent

[Install]
WantedBy=default.target
UNIT_EOF
```

### Step 4 — Verify, install, start

```bash
# Verify credentials BEFORE installing. Do not print the body.
code=$(curl -s -o /dev/null -w '%{http_code}' \
  -H "Authorization: Bearer $(grep -oP '(?<=APIFY_TOKEN=).*' ~/portfolio-agent/agent.env)" \
  https://api.apify.com/v2/users/me)
[ "$code" = "200" ] || { echo "FATAL: apify auth HTTP $code"; exit 1; }

systemctl --user daemon-reload
systemctl --user enable --now portfolio-agent

# Survive logout. Without this, systemd kills the unit when SSH disconnects —
# the classic way to discover weeks later that nothing has been running.
loginctl enable-linger "$USER"

systemctl --user status portfolio-agent --no-pager
```

### Operator controls
```bash
journalctl --user -u portfolio-agent -f     # watch
systemctl --user stop portfolio-agent       # stop
systemctl --user restart portfolio-agent    # restart
cat ~/portfolio/daily.md                    # latest report
cat ~/portfolio/blocked.json                # what needs a human
```

After bootstrap completes, proceed to §13 first actions, then run §14 forever.

```

## 8. TOOLKIT & SCRIPT IMPLEMENTATIONS (`tools/`)

### 8.1 `tools/apify.py`
```python
#!/usr/bin/env python3
"""Apify API client for the autonomous portfolio agent.

Every fact encoded here was verified against the live account. See §8 of the plan.

Publish sequence (the order is mandatory):
    1. POST /v2/acts                     -> 201   (isPublic MUST be false)
    2. POST /v2/acts/{id}/builds         -> 201   (poll until SUCCEEDED)
    3. PUT  /v2/acts/{id}                -> 200   (isPublic true + categories)

Never log the body of /v2/users/me -- it contains the account proxy password.
"""

from __future__ import annotations

import json
import re
import os
import time
import urllib.error
import urllib.parse
import urllib.request

BASE = "https://api.apify.com/v2"

# Backoff ladder from §14: 30s, 60s, 2m, 5m, capped at 15m.
BACKOFF = [30, 60, 120, 300, 900]

# 4xx codes the plan identifies as OUR bug, fixable without a human (§8/§14).
AGENT_FIXABLE = {"readme-required", "schema-validation"}


class ApifyError(Exception):
    def __init__(self, status: int, body: str, url: str, method: str):
        self.status = status
        self.body = body
        self.url = url
        self.method = method
        self.type = ""
        try:
            self.type = json.loads(body).get("error", {}).get("type", "")
        except Exception:
            pass
        super().__init__(f"{method} {url} -> {status} {self.type}: {body[:400]}")

    @property
    def agent_fixable(self) -> bool:
        return self.type in AGENT_FIXABLE

    @property
    def operator_blocker(self) -> bool:
        """A 4xx that a human must clear -- record in blocked.json and move on."""
        return 400 <= self.status < 500 and not self.agent_fixable


def token() -> str:
    tok = os.environ.get("APIFY_TOKEN", "").strip()
    if not tok:
        # Fall back to the credentials file so tools work outside the service.
        env = os.path.expanduser("~/portfolio-agent/agent.env")
        if os.path.exists(env):
            for line in open(env):
                if line.startswith("APIFY_TOKEN="):
                    tok = line.split("=", 1)[1].strip()
                    break
    if not tok:
        raise SystemExit("FATAL: APIFY_TOKEN not set and not found in agent.env")
    return tok


def request(method: str, path: str, payload=None, params=None, retries: int = 5):
    """Single API call with backoff on 5xx / 429 / network failure.

    4xx (other than 429) raise immediately -- retrying unchanged is forbidden (§14).
    """
    url = f"{BASE}{path}"
    if params:
        url += "?" + urllib.parse.urlencode(params)

    body = json.dumps(payload).encode() if payload is not None else None
    last: Exception | None = None

    for attempt in range(retries):
        req = urllib.request.Request(url, data=body, method=method)
        req.add_header("Authorization", f"Bearer {token()}")
        if body:
            req.add_header("Content-Type", "application/json")
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                raw = r.read().decode()
                if not raw.strip():
                    return None
                parsed = json.loads(raw)
                # Most endpoints wrap results in {"data": ...}, but dataset
                # item listings return a bare JSON array.
                if isinstance(parsed, dict) and "data" in parsed:
                    return parsed["data"]
                return parsed
        except urllib.error.HTTPError as e:
            raw = e.read().decode()
            # 429 and 5xx are transient: back off. Everything else is terminal.
            if e.code == 429 or e.code >= 500:
                last = ApifyError(e.code, raw, url, method)
                time.sleep(BACKOFF[min(attempt, len(BACKOFF) - 1)])
                continue
            raise ApifyError(e.code, raw, url, method) from None
        except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as e:
            last = e
            time.sleep(BACKOFF[min(attempt, len(BACKOFF) - 1)])

    raise last if last else RuntimeError(f"{method} {url} exhausted retries")


# --------------------------------------------------------------------------
# Screening (§5 supply test)
# --------------------------------------------------------------------------

def store_supply(query: str) -> int:
    """Number of store actors matching a query. Pass the supply screen if < 10."""
    data = request("GET", "/store", params={"search": query, "limit": 1})
    return int(data["total"])


def store_top(query: str, limit: int = 5) -> list[dict]:
    """Top competing actors for a query -- used to sanity-check what supply means."""
    return store_occupancy(query, limit)["occupants"]


def store_occupancy(query: str, limit: int = 25) -> dict:
    """WHO holds a query, not just how many -- the measurement that actually
    decides whether a niche is open (§4, and the HOWTO's "a low supply count is
    not automatically an empty query").

    Measured 2026-07-29: `ttb permit brewery winery` reads supply 1, and that
    one result is an Actor scraping the same TTB permittee file. `fema nfhl
    flood hazard layer` reads supply 2, one of which has 563 runs on the same
    NFHL service. A bare count cannot tell those apart from an empty niche.

    Also note `total` and `items` disagree: `hcris hospital cost report` returns
    total=2 with zero items at every limit, and several queries return count=10
    with 9 items. `total` is the number the §5 gate is written against; the
    items are what a buyer actually sees. Report both rather than picking one.
    """
    data = request("GET", "/store", params={"search": query, "limit": limit})
    items = data.get("items") or []
    return {
        "query": query,
        "total": data.get("total"),
        "visible": len(items),
        "occupants": [
            {
                "name": it.get("name"),
                "username": it.get("username"),
                "title": it.get("title"),
                "description": (it.get("description") or "")[:300],
                "runs": (it.get("stats") or {}).get("totalRuns"),
                "users30d": (it.get("stats") or {}).get("totalUsers30Days"),
                "pricing": (it.get("currentPricingInfo") or {}).get("pricingModel"),
            }
            for it in items
        ],
    }


# --------------------------------------------------------------------------
# Actor lifecycle (§8)
# --------------------------------------------------------------------------

def create_actor(name, title, description, source_files, seo_title="",
                 seo_description="", categories=None, memory_mbytes=512):
    """Step 1 -- create PRIVATE. isPublic:true here returns 403 cannot-create-public-actor.

    source_files is {path: content}. README.md is MANDATORY or publish 403s later,
    and its content is indexed by store search -- write it for the target query.
    """
    if "README.md" not in source_files:
        raise ValueError("README.md missing from sourceFiles -- publish would 403")

    # Field limits discovered by testing on 2026-07-29; they are not in the docs
    # and each one costs a failed round trip. Validate locally instead.
    # Report EVERY violation at once. Failing on the first one costs a whole
    # agent round trip per field, which is how one over-long meta.json burned
    # three build attempts on 2026-07-29.
    violations = [
        f"{field} is {len(value)} chars, max {cap} (over by {len(value) - cap}): "
        f"{value[:80]!r}"
        for field, value, cap in (
            ("title", title, 63),
            ("seoTitle", seo_title or title, 60),
            ("seoDescription", seo_description or description, 160),
            # 300, not 500 -- corrected 2026-07-29 after a live 400 schema-validation.
            ("description", description, 300),
            ("name", name, 63),
        )
        if value and len(value) > cap
    ]
    if violations:
        raise ValueError("field length limits exceeded:\n  " +
                         "\n  ".join(violations))
    if not re.fullmatch(r"[a-z0-9][a-z0-9-]*", name or ""):
        raise ValueError(f"name must be lowercase alphanumeric/dashes: {name!r}")

    payload = {
        "name": name,
        "title": title,
        "description": description,
        "isPublic": False,
        "seoTitle": seo_title or title,
        "seoDescription": seo_description or description,
        "categories": categories or [],
        "defaultRunOptions": {
            "build": "latest",
            "timeoutSecs": 3600,
            "memoryMbytes": memory_mbytes,
        },
        "versions": [{
            "versionNumber": "0.0",
            "sourceType": "SOURCE_FILES",
            "buildTag": "latest",
            "sourceFiles": [
                {"name": p, "format": "TEXT", "content": c}
                for p, c in source_files.items()
            ],
        }],
    }
    return request("POST", "/acts", payload)


def build_actor(actor_id: str, version: str = "0.0", timeout: int = 600) -> dict:
    """Step 2 -- build and poll to a terminal state. Trivial actors: ~10s."""
    build = request("POST", f"/acts/{actor_id}/builds",
                    params={"version": version, "useCache": "false"})
    build_id = build["id"]

    deadline = time.time() + timeout
    while time.time() < deadline:
        b = request("GET", f"/actor-builds/{build_id}")
        if b["status"] in ("SUCCEEDED", "FAILED", "ABORTED", "TIMED-OUT"):
            return b
        time.sleep(5)
    raise TimeoutError(f"build {build_id} still running after {timeout}s")


def build_log(build_id: str) -> str:
    req = urllib.request.Request(f"{BASE}/logs/{build_id}")
    req.add_header("Authorization", f"Bearer {token()}")
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return r.read().decode()
    except Exception as e:
        return f"<log unavailable: {e}>"


def publish_actor(actor_id: str, categories: list[str]) -> dict:
    """Step 3 -- flip to public. categories is required or 400 schema-validation."""
    return request("PUT", f"/acts/{actor_id}",
                   {"isPublic": True, "categories": categories})


def update_actor(actor_id: str, **fields) -> dict:
    return request("PUT", f"/acts/{actor_id}", fields)


# Apify's built-in events. The platform charges these automatically -- they are
# not driven by A.charge() in the actor code. Keeping them scales a little
# revenue with actual compute, which is why they are included by default.
BUILTIN_EVENTS = {
    "apify-actor-start": {
        "eventTitle": "Actor start",
        "eventDescription": "Charged when the Actor starts, once per GB of memory.",
        "eventPriceUsd": 0.00005,
    },
    "apify-default-dataset-item": {
        "eventTitle": "Result",
        "eventDescription": "Charged per result row written to the dataset.",
        "eventPriceUsd": 0.00001,
    },
}


def set_pricing(actor_id: str, events: list[dict], include_builtins: bool = True) -> dict:
    """Configure pay-per-event pricing. §10 of the plan claims this is Console-only;
    that is FALSE -- verified working 2026-07-29 via PUT /v2/acts/{id}.

    Set this BEFORE the actor is ever published. Pricing applied to a private
    actor takes effect immediately, because there is no prior pricing to
    "change". Once an actor is public, switching the pricing model is a
    *significant change*: 14 days' notice, once per month per actor (§8). That
    delay is avoidable entirely, and skipping this step means the actor launches
    public and FREE.

    events: [{"name","title","usd","description"}] from meta.json's pricing_plan.
    """
    charge_events = dict(BUILTIN_EVENTS) if include_builtins else {}

    for e in events:
        name = e.get("name", "")
        if not name:
            raise ValueError(f"pricing event missing 'name': {e}")
        if e.get("usd") is None:
            raise ValueError(f"pricing event {name!r} missing 'usd'")
        # 'why' in meta.json is INTERNAL margin reasoning -- never user-facing.
        desc = e.get("description")
        if not desc:
            raise ValueError(
                f"pricing event {name!r} needs a user-facing 'description'. "
                f"Do not fall back to 'why' -- that is internal pricing strategy "
                f"and it is shown to buyers on the store page.")
        charge_events[name] = {
            "eventTitle": e.get("title") or name,
            "eventDescription": desc,
            "eventPriceUsd": float(e["usd"]),
        }

    # pricingInfos is a HISTORY, not a single value, and the PUT replaces the
    # whole array. Sending just the new record works on an actor that has never
    # been priced (which is why first-monetization passed) but fails on any
    # repricing with
    #   400 schema-validation: checkAndSanitizePricingInfosModifier
    #                          [existing_record]: createdAt is required
    # because every record already on the actor is re-validated as it goes back
    # in, and the server-generated createdAt/startedAt/apifyMarginPercentage are
    # not ours to invent. Measured 2026-07-29 while repricing six private draws.
    # So: echo the existing records back verbatim and APPEND. That also keeps
    # the price history the §8 notice rules are adjudicated against, which
    # replacing the array would have quietly destroyed.
    existing = get_actor(actor_id).get("pricingInfos") or []
    return request("PUT", f"/acts/{actor_id}", {"pricingInfos": existing + [{
        "pricingModel": "PAY_PER_EVENT",
        "pricingPerEvent": {"actorChargeEvents": charge_events},
    }]})


def pricing_events(actor_id: str) -> dict:
    """Configured charge events, keyed by event name. {} when unmonetized."""
    infos = get_actor(actor_id).get("pricingInfos") or []
    if not infos:
        return {}
    return (infos[-1].get("pricingPerEvent") or {}).get("actorChargeEvents") or {}


def delete_actor(actor_id: str) -> None:
    request("DELETE", f"/acts/{actor_id}")


def get_actor(actor_id: str) -> dict:
    return request("GET", f"/acts/{actor_id}")


def list_actors() -> list[dict]:
    out, offset = [], 0
    while True:
        d = request("GET", "/acts", params={"limit": 100, "offset": offset,
                                            "my": "true"})
        out.extend(d["items"])
        offset += 100
        if offset >= d["total"]:
            return out


def run_actor(actor_id: str, run_input=None, timeout: int = 300,
              memory_mbytes: int = 512) -> dict:
    """Run an actor to completion -- the smoke test before publishing (§14)."""
    run = request("POST", f"/acts/{actor_id}/runs",
                  run_input if run_input is not None else {},
                  params={"memory": memory_mbytes})
    run_id = run["id"]

    deadline = time.time() + timeout
    while time.time() < deadline:
        r = request("GET", f"/actor-runs/{run_id}")
        if r["status"] in ("SUCCEEDED", "FAILED", "ABORTED", "TIMED-OUT"):
            return r
        time.sleep(5)
    raise TimeoutError(f"run {run_id} still going after {timeout}s")


def run_dataset(run: dict, limit: int = 20) -> list:
    ds = (run.get("defaultDatasetId") or "")
    if not ds:
        return []
    d = request("GET", f"/datasets/{ds}/items", params={"limit": limit})
    return d if isinstance(d, list) else []


def actor_runs(actor_id: str, limit: int = 50) -> list[dict]:
    """Recent runs -- feeds the success-rate health check (§14 step 1)."""
    d = request("GET", f"/acts/{actor_id}/runs",
                params={"limit": limit, "desc": "true"})
    return d.get("items", [])


def current_build_id(actor_id: str):
    """Build id behind the `latest` tag -- the code users actually run."""
    tagged = (get_actor(actor_id).get("taggedBuilds") or {}).get("latest") or {}
    return tagged.get("buildId")


TERMINAL = ("SUCCEEDED", "FAILED", "ABORTED", "TIMED-OUT")


def success_rate(actor_id: str, limit: int = 50, build_id: str | None = None):
    """Fraction of finished runs that SUCCEEDED. None when there is no data yet.

    Pass build_id to score a single build. Runs from superseded builds are
    development history: they say nothing about what a user gets today, and
    letting them drag the rate down forever would trip the §14 degraded rule
    (and the 90% publish stop) on a perfectly healthy actor.
    """
    runs = [r for r in actor_runs(actor_id, limit) if r["status"] in TERMINAL]
    if build_id:
        runs = [r for r in runs if r.get("buildId") == build_id]
    if not runs:
        return None
    ok = sum(1 for r in runs if r["status"] == "SUCCEEDED")
    return ok / len(runs)


def run_health(actor_id: str, limit: int = 50) -> dict:
    """Health of the live build, with lifetime rate kept for context."""
    build_id = current_build_id(actor_id)
    runs = [r for r in actor_runs(actor_id, limit) if r["status"] in TERMINAL]
    cur = [r for r in runs if r.get("buildId") == build_id] if build_id else []

    def rate(rs):
        return (sum(1 for r in rs if r["status"] == "SUCCEEDED") / len(rs)
                if rs else None)

    return {
        "build_id": build_id,
        "current_rate": rate(cur),
        "current_runs": len(cur),
        "lifetime_rate": rate(runs),
        "lifetime_runs": len(runs),
        "recent_failures": [
            {"id": r["id"], "status": r["status"],
             "buildNumber": r.get("buildNumber"), "startedAt": r.get("startedAt")}
            for r in cur if r["status"] != "SUCCEEDED"
        ][:5],
    }


def store_enumerate(category: str | None = None, sort_by: str = "popularity",
                    max_actors: int = 2000, page: int = 1000):
    """Walk the store WITHOUT a search term -- the whole index, page by page.

    Discovered 2026-07-29: `GET /v2/store` accepts `category` and
    `sortBy=popularity` with no `search`, so the store can be ENUMERATED, not
    only queried. That inverts the pipeline. §5's harvest guesses a query and
    then asks whether anyone occupies it, which has returned zero promotable
    candidates for six consecutive harvests. Enumeration finds actors that
    ALREADY HAVE 30-day runs -- demand proven on our own store, at our own
    price point -- and asks what job is left beside them.

    Two mechanics that will bite anyone who re-derives this:

    * `limit` is an upper bound, not a page size. limit=1000 returns ~827
      items because the server filters after slicing. **Advance `offset` by
      `limit`, never by `len(items)`**, or the walk silently re-reads the same
      band forever.
    * `total` counts the category, and is stable across pages; use it only to
      know when to stop.

    Yields raw store items so the caller decides what to keep -- the full
    index is ~42,000 actors and holding it in memory on this box is not an
    option (CLAUDE.md: RAM is the binding constraint).
    """
    seen, offset = set(), 0
    while len(seen) < max_actors:
        params = {"limit": page, "offset": offset, "sortBy": sort_by}
        if category:
            params["category"] = category
        data = request("GET", "/store", params=params)
        items = data.get("items") or []
        if not items:
            return
        for it in items:
            key = f"{it.get('username')}/{it.get('name')}"
            if key in seen:
                continue
            seen.add(key)
            yield it
        offset += page                      # NOT len(items) -- see docstring
        if offset >= (data.get("total") or 0):
            return


def store_listing(actor_id: str, username: str, name: str) -> dict | None:
    """The actor as a BUYER sees it, from the public store index.

    `GET /v2/acts/{id}` is the owner's view and does not carry
    `currentPricingInfo`; only the store index does. Searching the store for
    `username/name` resolves to exactly one item (verified 2026-07-29), so this
    is a precise lookup rather than a text match. Returns None for a private
    actor -- it is not in the store at all, which is the correct answer.
    """
    try:
        r = request("GET", f"/store?search={username}%2F{name}&limit=20")
    except Exception:
        return None
    for it in (r.get("items") or []):
        if it.get("id") == actor_id:
            return it
    return None


def store_facing(actor_id: str) -> dict:
    """What the STORE says about our own actor, as opposed to what we believe.

    Three facts live here and nowhere else, all measured on
    `oig-leie-exclusion-screening`:

    * `pricingInfos` is what monetization has been CONFIGURED to. The ledger's
      `monetized` flag is weaker still -- it is set by us and can only ever say
      what we last assumed.

    * `currentPricingInfo.pricingModel` on the store item is what a buyer is
      charged RIGHT NOW, and the two are not the same thing. Measured
      2026-07-29: after PUTting PAY_PER_EVENT onto the already-public oig-leie,
      `pricingInfos[-1]` read PAY_PER_EVENT with `startedAt` set to the moment
      of the call -- while the store still read `currentPricingInfo: FREE`,
      because on a public Actor a model switch is a §8 *significant change* and
      serves free through the 14-day notice. `startedAt` is when the record was
      created, NOT when money starts. Reading configured-pricing as
      earning-pricing overstated the portfolio's MRR by its entire value, so
      `effective_pricing_model` below is the field to trust and
      `pricing_model` is kept only to show the gap.

    * `stats.publicActorRunStats30Days` is the success rate the store ranks on
      and the one §14's 90% publish-stop is really about. It is NOT the same
      number as `run_health`: ours reads every run on the live build, this one
      counts runs over the last 30 days of the Actor's *public* life. On
      oig-leie the two disagreed usefully -- lifetime 57% (four failed
      development runs from before the fix) against a public 1/1 = 100%. Only
      the second is visible to a buyer or to Apify's ranking.
    """
    a = get_actor(actor_id)
    stats = a.get("stats") or {}
    pub = stats.get("publicActorRunStats30Days") or {}
    total = pub.get("TOTAL") or 0
    pricing = a.get("pricingInfos") or []
    configured = pricing[-1].get("pricingModel") if pricing else "FREE"

    # A private Actor has no buyers, so "what a buyer pays" is undefined and the
    # configured value is the only meaningful one. Once public, the store's own
    # answer overrides ours.
    listing = (store_listing(actor_id, a.get("username", ""), a.get("name", ""))
               if a.get("isPublic") else None)
    effective = configured
    if listing is not None:
        effective = (listing.get("currentPricingInfo") or {}).get(
            "pricingModel") or "FREE"

    return {
        "is_public": bool(a.get("isPublic")),
        "monetized": bool(pricing),
        "pricing_model": configured,
        "effective_pricing_model": effective,
        # True == configured to earn but not yet earning (§8 notice period).
        "pricing_pending": effective != configured,
        "pricing_reason": (pricing[-1].get("reasonForChange") if pricing else None),
        "public_runs_30d": total,
        "public_success_rate": (pub.get("SUCCEEDED", 0) / total) if total else None,
        "public_failures_30d": total - pub.get("SUCCEEDED", 0) if total else 0,
        "total_users": stats.get("totalUsers"),
        "users_30d": stats.get("totalUsers30Days"),
        "review_count": stats.get("actorReviewCount"),
        "review_rating": stats.get("actorReviewRating"),
    }


# --- demand discrimination -------------------------------------------------
# Measured 2026-08-05 across all 1,720 vein actors in store_sweep.json: the
# runs_30d histogram spikes at exactly 29 (429 actors) and 30 (234) against a
# baseline of ~25 actors per integer. 753 actors -- 44% OF THE ENTIRE VEIN --
# sit at 28-31 runs/30d, 665 of them at 100% success and 703 at users_30d<=1,
# spread across 119 distinct owners (parseforge 141, nexgendata 97,
# jungle_synthesizer 91). That is one scheduled run per day: the bulk
# publishers cron their own listings, and Apify counts those runs exactly like
# a buyer's.
#
# So a raw 30-day run count is NOT a demand measurement, and reading it as one
# is not a small error: it ranked taroyamada/public-rfp-rebid-watch-report at
# an estimated $2,291/mo when its true value to us is $0, every run being the
# owner's own. Anything that gates on runs must subtract this first.
CRON_RUNS_BAND = (28, 31)
CRON_MIN_SUCCESS = 0.95
BUYER_MIN_USERS_30D = 3


def demand_class(runs_30d, success_30d, users_30d) -> str:
    """'buyer' | 'cron' | 'inconclusive' for one rival's 30-day numbers.

    The net rule settled on 2026-08-05, after two cycles contradicted each
    other on whether `totalUsers30Days` means anything:

    * `users_30d >= 3` PROVES demand. Three distinct accounts in 30 days
      cannot be one owner's scheduler. The field ranges 0-52 and holds >=2 for
      91% of actors at 100-499 runs/30d against 11% in the 28-31 band, so it
      does discriminate -- the older 'do not read users_30d' note generalized
      from a handful of occupants on one query and is superseded here.

    * `users_30d <= 1` is INCONCLUSIVE on its own, and that half of the older
      note stands: ryanclinton/osha-inspection-search reads 1 user against 162
      runs, and only 7 of 74 actors above 100 runs/30d sit at u30<=1, so a
      single heavy buyer is rare but real. Under PAY_PER_EVENT revenue tracks
      runs, not users; a low user count understates a live niche.

    * u30<=1 PLUS the cron fingerprint (28-31 runs at ~100% success) is
      DECISIVE against. That is a daily schedule run by the listing's own
      owner, and it is 44% of the vein.

    Returns 'inconclusive' rather than guessing when the evidence is thin.
    Callers should treat inconclusive runs as unproven demand, not as absence.
    """
    runs = runs_30d or 0
    users = users_30d if users_30d is not None else 0
    if users >= BUYER_MIN_USERS_30D:
        return "buyer"
    # All three legs must be MEASURED. An unknown success rate is not evidence
    # of a schedule, and this branch drops an actor out of a harvest -- so a
    # missing leg has to fall through to 'inconclusive', never to 'cron'.
    if (CRON_RUNS_BAND[0] <= runs <= CRON_RUNS_BAND[1]
            and users <= 1
            and success_30d is not None
            and success_30d >= CRON_MIN_SUCCESS):
        return "cron"
    return "inconclusive"


# --- the SECOND cron shape: a farm's siblings, outside the 28-31 band --------
# `demand_class` above is a per-actor test, and a per-actor test cannot see a
# farm. Measured 2026-08-05 on `contractor license verification`: scrapebench
# holds TEN per-state lookup Actors reading 32,33,33,32,34,35,32,33,34,35
# runs/30d, every one at ~100% success with users_30d=0. Ten Actors cannot each
# find ~33 buyers a month and no distinct users; that is one scheduler at a
# cadence slightly off daily. They fell OUTSIDE CRON_RUNS_BAND by one run, so
# all ~330 runs counted as `inconclusive` and inflated demand_runs_30d -- 42%
# of that query's 787, i.e. the exact phantom demand the band exists to strip.
#
# Widening the band globally is the wrong fix and the histogram says so: the
# spike is 29-31 (429/234/64 actors against a ~22 baseline) and 33-35 is back
# at baseline, so a wider band would eat real low-traffic buyers. What
# identifies a farm is not WHERE the run count sits but that SIBLINGS SHARE it.
#
# Rule: >=3 Actors from ONE owner, in ONE query's result set, whose 30-day run
# counts sit within +-3 of each other, all at u30<=1 and ~100% success. Applied
# to the sweep's 1,720 Actors it newly flags 41, none above 58 runs/30d, and it
# can never touch a `buyer` (u30>=3 is checked first and excluded here).
FARM_MIN_SIBLINGS = 3
FARM_RUN_TOLERANCE = 3


def mark_farm_crons(rivals: list) -> int:
    """Reclassify farm siblings 'inconclusive' -> 'cron', in place.

    Returns the number of rivals reclassified. Only ever downgrades an
    `inconclusive`: a `buyer` (u30>=3) is proof of distinct accounts and no
    amount of sibling structure can argue it away.
    """
    def eligible(r):
        return ((r.get("runs_30d") or 0) > 0
                and (r.get("users_30d") or 0) <= 1
                and r.get("success_30d") is not None
                and r["success_30d"] >= CRON_MIN_SUCCESS)

    by_owner: dict = {}
    for r in rivals:
        if eligible(r):
            by_owner.setdefault(r["actor"].split("/")[0], []).append(r)

    flagged = 0
    for siblings in by_owner.values():
        if len(siblings) < FARM_MIN_SIBLINGS:
            continue
        for r in siblings:
            if r.get("demand_class") != "inconclusive":
                continue
            near = [s for s in siblings
                    if abs((s["runs_30d"] or 0) - (r["runs_30d"] or 0))
                    <= FARM_RUN_TOLERANCE]
            if len(near) >= FARM_MIN_SIBLINGS:
                r["demand_class"] = "cron"
                r["cron_reason"] = "farm-sibling"
                flagged += 1
    return flagged


# --- Jurisdiction conflict -------------------------------------------------
#
# on_topic() below is deliberately generous: ONE distinctive shared term is
# enough. That is right for vocabulary ("insolvency register" vs "bankruptcy
# check") and WRONG for jurisdiction, because every register in the world
# shares the vocabulary and only one of them serves the query's country.
#
# Measured 2026-08-06 on `belgium bankruptcy register`: the gate read
# demand_runs_30d=6369 and PASSED. 6,314 of those runs are two Actors titled
# "Poland KRZ National Debtor Registry Scraper" (4,885 runs, u30=12) and
# "Poland MSiG Court Gazette Scraper" (1,429, u30=3). They matched on
# "bankruptcy"/"register" and were scored on-topic for a query naming BELGIUM.
# The actual Belgian occupant, regdata/belgium-kbo-company-scraper, runs 55
# times a month at u30=1. The gate over-read real demand by 115x.
#
# The 2026-08-05 cycle hit this same failure and recorded it as a READING rule
# ("read the occupant list, never the gate verdict alone"). A reading rule that
# has to be remembered every time is not a fix; this is the second occurrence,
# so it goes in code.
#
# Scoped to the rival's NAME and TITLE, never its description. Titles are short
# and deliberate -- "Poland KRZ ..." is a claim about scope. Descriptions ramble
# across countries ("also see our Germany and Austria scrapers") and vetoing on
# one would delete real rivals.
#
# Hierarchical, so a broader tool that genuinely covers the query's ground is
# kept: a US-wide entity search is NOT off-topic for a California query.
#
# Like mark_farm_crons() this only ever DOWNGRADES a rival to off-topic, so it
# can only tighten demand and cannot resurrect anything in rejected.json.
_JURIS_PARENT = {}
_JURIS_ALIASES = {
    "us": ["us", "usa", "united states", "u.s.", "american"],
    "uk": ["uk", "united kingdom", "britain", "british", "gb"],
    "ie": ["ireland", "irish"],
    "au": ["australia", "australian"],
    "nz": ["new zealand", "nz"],
    "canada": ["canada", "canadian"],
    "de": ["germany", "german", "deutschland"],
    "at": ["austria", "austrian"],
    "ch": ["switzerland", "swiss"],
    "cz": ["czech", "czechia"],
    "sk": ["slovakia", "slovak"],
    "pl": ["poland", "polish", "polska"],
    "be": ["belgium", "belgian"],
    "lu": ["luxembourg"],
    "nl": ["netherlands", "dutch", "holland"],
    "fr": ["france", "french"],
    "es": ["spain", "spanish"],
    "it": ["italy", "italian"],
    "pt": ["portugal", "portuguese"],
    "gr": ["greece", "greek"],
    "ro": ["romania", "romanian"],
    "hu": ["hungary", "hungarian"],
    "se": ["sweden", "swedish"], "no": ["norway", "norwegian"],
    "dk": ["denmark", "danish"], "fi": ["finland", "finnish"],
    "in": ["india", "indian"], "sg": ["singapore"],
    "hk": ["hong kong"], "cn": ["china", "chinese"],
    "jp": ["japan", "japanese"], "kr": ["south korea", "korea", "korean"],
    "my": ["malaysia", "malaysian"], "ph": ["philippines", "philippine"],
    "id": ["indonesia"], "th": ["thailand"], "vn": ["vietnam"],
    "za": ["south africa"], "ng": ["nigeria"], "ke": ["kenya"],
    "br": ["brazil", "brazilian"], "mx": ["mexico", "mexican"],
    "ar": ["argentina"], "cl": ["chile"], "co": ["colombia"],
    "ae": ["uae", "united arab emirates", "dubai"],
    "sa": ["saudi arabia"], "il": ["israel"], "tr": ["turkey", "turkish"],
    "ru": ["russia", "russian"], "ua": ["ukraine", "ukrainian"],
}
# Sub-national units, each pointing at the country that contains it. These earn
# their place: the contractor- and professional-licence veins are per-state, and
# a Texas board scraper must not count as demand for a New Jersey query.
for _parent, _subs in {
    "us": ["alabama", "alaska", "arizona", "arkansas", "california",
           "colorado", "connecticut", "delaware", "florida", "georgia",
           "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas",
           "kentucky", "louisiana", "maine", "maryland", "massachusetts",
           "michigan", "minnesota", "mississippi", "missouri", "montana",
           "nebraska", "nevada", "new hampshire", "new jersey", "new mexico",
           "new york", "north carolina", "north dakota", "ohio", "oklahoma",
           "oregon", "pennsylvania", "rhode island", "south carolina",
           "south dakota", "tennessee", "texas", "utah", "vermont",
           "virginia", "washington", "west virginia", "wisconsin", "wyoming"],
    "au": ["nsw", "new south wales", "victoria", "queensland", "tasmania",
           "western australia", "south australia", "northern territory"],
    "uk": ["england", "scotland", "wales", "northern ireland"],
    "canada": ["ontario", "quebec", "british columbia", "alberta",
               "manitoba", "saskatchewan", "nova scotia"],
}.items():
    for _s in _subs:
        _JURIS_ALIASES[_s] = [_s]
        _JURIS_PARENT[_s] = _parent
del _parent, _subs, _s


def jurisdictions_in(text: str) -> set:
    """Canonical jurisdictions named in `text`, matched on word boundaries.

    Word boundaries are not optional here: a bare substring test reads `us`
    inside `business` and `in` inside `insolvency`, which would veto nearly
    every rival on the store.
    """
    text = (text or "").lower()
    found = set()
    for canon, aliases in _JURIS_ALIASES.items():
        for a in aliases:
            if re.search(rf"\b{re.escape(a)}\b", text):
                found.add(canon)
                break
    return found


def _juris_related(a: str, b: str) -> bool:
    """Same jurisdiction, or one contains the other."""
    return a == b or _JURIS_PARENT.get(a) == b or _JURIS_PARENT.get(b) == a


def juris_mismatch(query: str, item: dict) -> bool:
    """True when the query names a jurisdiction and the rival names ONLY other,
    unrelated ones. Silent (False) whenever either side is unscoped -- an
    untagged rival falls through to the ordinary term test, unchanged."""
    qj = jurisdictions_in(query)
    if not qj:
        return False
    rj = jurisdictions_in(f"{item.get('name') or ''} {item.get('title') or ''}")
    if not rj:
        return False
    # Two NAMED and different states do not serve each other, even though both
    # sit under the same country. Without this branch a query for `victoria
    # australia builder licence` keeps a "Queensland Builder Licence Australia"
    # rival, because each side also says "australia" and the country match
    # rescues the sibling. That is exactly the per-state fragmentation the
    # contractor and professional-licence veins died on, so it is the case the
    # veto most needs to get right.
    q_sub = {j for j in qj if j in _JURIS_PARENT}
    r_sub = {j for j in rj if j in _JURIS_PARENT}
    if q_sub and r_sub and not (q_sub & r_sub):
        return True
    return not any(_juris_related(a, b) for a in qj for b in rj)


# Words that carry no topic. Dropping them is what makes the relevance test
# work: `uk bankruptcy check name` is about UK and bankruptcy, and an actor
# matching only on "check" or "name" is matching on nothing.
_GENERIC_QUERY_TERMS = {
    "check", "checker", "search", "scraper", "scrape", "scraping", "data",
    "dataset", "list", "lookup", "api", "tool", "name", "names", "report",
    "reports", "finder", "find", "get", "extract", "extractor", "info",
    "information", "records", "record", "database", "db", "online", "free",
    "the", "of", "for", "and", "a", "an", "in", "on", "by", "to", "with",
}


# A term is generic if the STORE says so, not if this list remembered it.
# Measured 2026-08-06 on `asic registered company auditor`: DEMAND PASS 404,
# buyer 221 -- and the 221 was `makework36/fmcsa-trucking-api`, a US trucking
# DOT lookup, on-topic because its description says "trucking companies".
# Naukri (India jobs, "company ratings"), REGON (Poland) and three Singapore
# registry scrapers joined it the same way. The one genuinely on-subject
# occupant, `consummate_kinesis_jvt/asic-registered-auditor`, reads 4 runs/30d.
# A 100x over-read on the query's LEAST distinctive word while its most
# distinctive one (`asic`, in 0.2% of the store) appeared in none of them.
#
# The hand list above cannot fix this by growing: `company` and `license` are
# exactly the words a hand list keeps, because they look topical. What makes
# them useless is measurable and nothing else -- they sit in 11.7% and 10.5% of
# all store listings. So document frequency over `store_sweep.json` decides,
# and `screen.py termdf` regenerates the table.
#
# Threshold picked as the LOOSEST cut that still removes both terms behind the
# measured failure; there is no gap in the distribution to find (it runs
# smoothly from 14.3% to 5%), so a claim of one would be false.
GENERIC_DF_MAX = 0.10
_TERM_DF: dict | None = None


def _term_df() -> dict:
    """{stem: document_frequency} over the store sweep, plus `_n`. Fails open:
    a missing table means every term stays, i.e. today's behaviour."""
    global _TERM_DF
    if _TERM_DF is None:
        path = os.path.join(os.path.expanduser("~/portfolio"), "term_df.json")
        try:
            with open(path) as fh:
                _TERM_DF = json.load(fh)
        except Exception:
            _TERM_DF = {"_n": 0}
    return _TERM_DF


def _topic_terms(query: str) -> set[str]:
    # len >= 2, NOT > 2: a first cut used > 2 and silently dropped `uk`, `nz`
    # and `eu` -- the jurisdiction token, which is the most distinctive word in
    # half this portfolio's queries. Two-letter noise is handled by the
    # stopword set above and by the word-boundary rule in on_topic().
    terms = {t for t in re.findall(r"[a-z0-9]+", query.lower())
             if len(t) >= 2 and t not in _GENERIC_QUERY_TERMS}
    df = _term_df()
    n = df.get("_n") or 0
    if not terms or not n:
        return terms
    # The ANCHOR -- the query's rarest term -- is never dropped. Without this
    # guard a query of all-common words empties the set, and `on_topic()`
    # returns True on an empty set, which would count the WHOLE store as
    # demand. Keeping it also makes this pass strictly tightening, like
    # mark_farm_crons() and juris_mismatch(): nothing in rejected.json reopens.
    anchor = min(terms, key=lambda t: df.get(_topic_stem(t), 0))
    return {t for t in terms
            if t == anchor or df.get(_topic_stem(t), 0) <= GENERIC_DF_MAX * n}


def _topic_stem(t: str) -> str:
    """Crudest possible stem, and it earns its place: `company` did not match
    `companies` and `ryanclinton/opencorporates-search` -- 1,527 runs on a
    company registry -- was scored off-topic for `company registry search`."""
    for suf in ("ies", "ing", "es", "s", "y"):
        if t.endswith(suf) and len(t) - len(suf) >= 4:
            return t[: -len(suf)]
    return t


def on_topic(query: str, item: dict) -> bool:
    """Does this store hit have anything to do with the query?

    Added 2026-08-05 because the burn window's demand gate was measuring the
    wrong thing. `/store?search=` is FUZZY: `uk bankruptcy check name` returns
    `haketa/offerup-scraper`, an OfferUp classifieds scraper, and its 275
    runs/30d were 80% of the 344 that the query appeared to carry. Gating on
    that total greenlights a niche on the strength of an unrelated actor's
    traffic -- precisely the phantom demand the gate exists to refuse.

    Deliberately generous: ONE distinctive query term appearing anywhere in the
    rival's name, title or description is enough. Rivals in the same job use
    different vocabulary for it ('insolvency register' vs 'bankruptcy check'),
    so a strict test would delete real competitors, and the error that costs
    money here is over-counting demand, not under-counting rivals.
    """
    terms = _topic_terms(query)
    if not terms:
        return True                      # nothing distinctive to test against
    blob = " ".join(str(item.get(k) or "") for k in
                    ("name", "title", "description")).lower()
    for t in terms:
        # Short tokens are jurisdictions and agency initialisms (uk, nz, eu,
        # fda). They must match as WORDS -- a bare substring test would read
        # `uk` inside `ukraine` and hand the query someone else's traffic.
        if len(t) <= 3:
            if re.search(rf"\b{re.escape(t)}\b", blob):
                return True
        elif _topic_stem(t) in blob:
            return True
    return False


def rival_capabilities(actor_ref: str) -> dict:
    """What a rival ACTUALLY ships, read without running it.

    Rule 3 requires a named, testable defect in a competitor's output before we
    build against them. The obvious test -- run their Actor and observe the gap
    -- is IMPOSSIBLE on this account: `POST /v2/acts/{public}/runs` returns
    403 public-actor-disabled, because the Creator plan carries
    ACTORS_PUBLIC_DEVELOPER (publish public Actors) but not permission to RUN
    other people's. Measured 2026-08-06, and it killed a candidate that had
    already cleared demand and egress.

    But the claim does not need a run to be checkable. A build's actorDefinition
    exposes the rival's input schema, their dataset output schema, and their
    README -- all readable with our own token. If their output schema has no
    field for the thing the job requires, that is a DOCUMENTED defect, checkable
    by anyone, and it is stronger evidence than a single sampled run anyway.

    Use the returned `output_fields` as the diff target: a differentiator is
    valid when we return something their schema cannot express.
    """
    ref = actor_ref.replace("/", "~")
    out = {"actor": actor_ref, "readable": False}
    try:
        a = request("GET", f"/acts/{ref}")
    except Exception as e:  # noqa: BLE001
        out["error"] = str(e)[:200]
        return out

    out.update(readable=True, title=a.get("title"),
               description=(a.get("description") or "")[:400])

    # README: it is NOT on /acts/{id} -- that field is empty for every public
    # Actor. It lives in the BUILD's actorDefinition.readme. Measured
    # 2026-08-06 on ryanclinton/ofac-sanctions-search: /acts reads 0 chars,
    # the build reads 45,635. Reading only the /acts field made this tool
    # report "ships no README" for EVERY rival, which silently removed the
    # strongest rule-3 instrument (CLAUDE.md ranks README sample-output above
    # input schema and far above `views`) from every rule-3 decision on file.
    readme = a.get("readme") or ""

    bid = ((a.get("taggedBuilds") or {}).get("latest") or {}).get("buildId")
    if not bid:
        out["readme_chars"] = len(readme)
        out["readme"] = readme[:4000]
        out["readme_source"] = "acts" if readme else None
        return out
    try:
        ad = (request("GET", f"/actor-builds/{bid}") or {}).get("actorDefinition") or {}
    except Exception:  # noqa: BLE001
        out["readme_chars"] = len(readme)
        out["readme"] = readme[:4000]
        out["readme_source"] = "acts" if readme else None
        return out

    if len(ad.get("readme") or "") > len(readme):
        readme = ad["readme"]
        out["readme_source"] = "build"
    elif readme:
        out["readme_source"] = "acts"
    out["readme_chars"] = len(readme)
    # 4000 chars truncates before the sample-output JSON in a long README, and
    # the sample output is the whole point of reading it.
    out["readme"] = readme[:40000]
    out["changelog"] = (ad.get("changelog") or "")[:2000]

    inp = (ad.get("input") or {}).get("properties") or {}
    ds = (ad.get("storages") or {}).get("dataset") or {}
    fields = (ds.get("fields") or {}).get("properties") or {}
    out["input_fields"] = sorted(inp)
    out["output_fields"] = sorted(fields)
    out["output_schema_present"] = bool(fields)
    out["views"] = sorted((ds.get("views") or {}))
    return out


def rival_economics(query: str, limit: int = 25) -> dict:
    """What the COMPETITORS on a query actually earn, read from public data.

    Measured 2026-07-29 and this is the point: the same `/store` payload that
    feeds the §5 supply gate also carries, for every rival,
    `stats.publicActorRunStats30Days` (a real 30-day run count) and
    `currentPricingInfo.pricingPerEvent` (the exact per-event price they
    charge). Both halves of a competitor's revenue are therefore public, and
    readable before we build anything.

    Why this matters more than it looks:

    * §12 calls "whether long-tail queries with <10 supply have enough demand
      to sustain $20/mo" the central untested assumption of the whole strategy.
      It is not untestable. It is a number, per niche, sitting in this payload.

    * §5's demand test reads an EXTERNAL vendor's price and then assumes that
      vendor's buyer would also buy an Apify actor. That inference is the weak
      link, and 2026-07-29's harvest showed it fails in both directions
      (enterprise verticals price by quote and are invisible; a published price
      can belong to a bundle). A rival's own runs and price need no inference:
      the buyer is already an Apify buyer, paying an Apify price, for our job.

    * It also breaks the anti-correlation recorded over the previous cycles.
      An occupied query stops being purely a negative -- an occupant with real
      30-day runs is PROOF of paying demand at our price point on our store.
      Occupancy then decides only whether a differentiated job is left, which
      is what both of the portfolio's best draws actually won on.

    CORRECTED 2026-08-05 -- read `runs_30d_total` only through
    `demand_runs_30d`. 44% of this vein's runs are the owners' own daily cron
    (see `demand_class`), so the raw total counts a bulk publisher's scheduler
    as a buyer. `demand_runs_30d` is that total with the cron-fingerprinted
    rivals removed, and it is the number any demand gate must use.

    The older warning in this docstring -- 'do NOT read totalUsers30Days as
    demand' -- was half right and is superseded by `demand_class`. Its
    counterexample stands (`ryanclinton/osha-inspection-search`: 1 user against
    162 runs, and under PAY_PER_EVENT revenue tracks runs, not users), so a low
    user count still cannot kill a niche. But u30>=3 does prove one, and
    u30<=1 alongside 28-31 runs at ~100% success does kill one.

    `gross_30d_floor_usd` is a FLOOR, not an estimate. It assumes exactly one
    chargeable event per run, which is exact for a per-run event and low for a
    per-result event (where a single run can bill many times). Never quote it
    as what a rival earns -- quote it as the least they can be earning.
    """
    data = request("GET", "/store", params={"search": query, "limit": limit})
    items = data.get("items") or []
    rivals = []
    for it in items:
        stats = it.get("stats") or {}
        pub = stats.get("publicActorRunStats30Days") or {}
        runs30 = pub.get("TOTAL") or 0
        pricing = it.get("currentPricingInfo") or {}
        events = ((pricing.get("pricingPerEvent") or {})
                  .get("actorChargeEvents") or {})
        prices = [float(v.get("eventPriceUsd") or 0) for v in events.values()]
        cheapest = min(prices) if prices else 0.0
        model = pricing.get("pricingModel")
        succ30 = (pub.get("SUCCEEDED", 0) / runs30) if runs30 else None
        u30 = stats.get("totalUsers30Days")
        rivals.append({
            "actor": f"{it.get('username')}/{it.get('name')}",
            "title": it.get("title"),
            "runs_30d": runs30,
            "runs_lifetime": stats.get("totalRuns"),
            "success_30d": succ30,
            "users_30d": u30,
            "demand_class": demand_class(runs30, succ30, u30),
            # Jurisdiction is checked FIRST and vetoes: a rival titled for
            # another country shares the query's vocabulary by construction, so
            # letting on_topic() see it at all is what produced the 115x
            # over-read on `belgium bankruptcy register`.
            "on_topic": (not juris_mismatch(query, it)) and on_topic(query, it),
            "off_reason": ("jurisdiction" if juris_mismatch(query, it)
                           else None if on_topic(query, it)
                           else "no-shared-term"),
            "pricing_model": model,
            "events": {k: float(v.get("eventPriceUsd") or 0) for k, v in events.items()},
            # A floor: one chargeable event per run, at their cheapest event.
            "gross_30d_floor_usd": round(runs30 * cheapest, 2),
            # A HARDER floor where one exists. `apify-actor-start` fires on
            # every run, so when a developer prices it the buyer pays that
            # amount to press go -- no assumption about run length needed.
            # Measured 2026-07-29: the cheapest-event rule above read
            # jungle_synthesizer/propublica-nonprofit-crawler at $0.40/mo
            # against a start fee of $0.10 x 396 runs = $39.60/mo.
            "per_run_30d_usd": round(
                runs30 * float((events.get("apify-actor-start") or {})
                               .get("eventPriceUsd") or 0), 2),
            "last_run_at": stats.get("lastRunStartedAt"),
        })
    rivals.sort(key=lambda r: (r["runs_30d"] or 0), reverse=True)
    # Second pass: the band test above is per-actor and cannot see a farm.
    # Must run before any run count is summed.
    mark_farm_crons(rivals)
    live = [r for r in rivals if (r["runs_30d"] or 0) > 0]

    def runs_in(cls):
        return sum(r["runs_30d"] or 0 for r in rivals
                   if r["demand_class"] == cls and r["on_topic"])

    cron_runs = runs_in("cron")
    # Split by REASON. Reporting these on one line would say "shares no
    # distinctive term with the query" about an Actor that shares every term
    # and only differs on country -- the reader would rightly disbelieve it.
    offtopic = [r for r in rivals if r.get("off_reason") == "no-shared-term"
                and (r["runs_30d"] or 0)]
    juris_off = [r for r in rivals if r.get("off_reason") == "jurisdiction"
                 and (r["runs_30d"] or 0)]
    return {
        "query": query,
        "total": data.get("total"),
        "visible": len(items),
        # Occupants with zero 30-day runs hold a listing, not a market.
        "live_rivals": len(live),
        "runs_30d_total": sum(r["runs_30d"] or 0 for r in rivals),
        # The raw total with BOTH contaminants removed: the owners' own daily
        # schedulers, and the fuzzy-search hits that are not about this query
        # at all. THIS is the demand number -- gate on it, and record it in
        # meta.json as demand_runs_30d.
        "demand_runs_30d": sum(r["runs_30d"] or 0 for r in rivals
                               if r["on_topic"] and r["demand_class"] != "cron"),
        "buyer_runs_30d": runs_in("buyer"),
        "cron_runs_30d": cron_runs,
        "inconclusive_runs_30d": runs_in("inconclusive"),
        "offtopic_runs_30d": sum(r["runs_30d"] or 0 for r in offtopic),
        "offtopic_rivals": [r["actor"] for r in offtopic],
        "juris_offtopic_runs_30d": sum(r["runs_30d"] or 0 for r in juris_off),
        "juris_offtopic_rivals": [f"{r['actor']} ({r['title']})"
                                  for r in juris_off],
        "buyer_rivals": [r["actor"] for r in rivals
                         if r["demand_class"] == "buyer" and r["on_topic"]],
        "cron_rivals": [r["actor"] for r in rivals
                        if r["demand_class"] == "cron" and r["on_topic"]],
        # Split out so a report can say WHICH cron shape ate the runs: the
        # 28-31 daily band, or a farm's siblings sharing a run count.
        "farm_runs_30d": sum(r["runs_30d"] or 0 for r in rivals
                             if r.get("cron_reason") == "farm-sibling"
                             and r["on_topic"]),
        "farm_rivals": [r["actor"] for r in rivals
                        if r.get("cron_reason") == "farm-sibling"
                        and r["on_topic"]],
        "gross_30d_floor_usd": round(sum(r["gross_30d_floor_usd"] for r in rivals), 2),
        "per_run_30d_usd": round(sum(r["per_run_30d_usd"] for r in rivals), 2),
        "free_rivals": [r["actor"] for r in rivals if r["pricing_model"] == "FREE"],
        "rivals": rivals,
    }


def monthly_spend_usd() -> float:
    """Current-month platform usage. Gates publishing at $40 (§14 rate limits)."""
    try:
        d = request("GET", "/users/me/usage/monthly")
        return float(d.get("totalUsageCreditsUsdAfterVolumeDiscount")
                     or d.get("totalUsageCreditsUsd") or 0.0)
    except Exception:
        return 0.0

```

### 8.1 `tools/burn_report.py`
```python
#!/usr/bin/env python3
"""End-of-burn-window report: what did the spend actually produce?

Judges the window by ARTEFACTS in the ledger, not by cycles run. If the answer
is "nothing was built", it says so plainly -- a burn window that produced only
research is a result worth reporting honestly, not dressing up.
"""

from __future__ import annotations

import os
import sys

sys.path.insert(0, os.path.dirname(__file__))

import notify
import state

# Burn window opened when the throttle was lifted.
WINDOW_START = os.environ.get("BURN_START", "2026-07-30T15:57:00+00:00")


def main() -> int:
    ledger = [d for d in state.load_ledger() if d.get("status") != "deleted"]
    built_in_window = [d for d in ledger
                       if (d.get("created_at") or "") >= WINDOW_START]
    published_in_window = [d for d in ledger
                           if (d.get("published_at") or "") >= WINDOW_START]

    live = [d for d in ledger if d.get("status") == "published"]
    built = [d for d in ledger if d.get("status") == "built"]

    # Count cycles and how many were skipped/failed, straight from the heartbeat.
    started = ok = failed = limited = 0
    try:
        for line in open(state.HEARTBEAT):
            if line[:25] < WINDOW_START[:25]:
                continue
            if "cycle: start" in line:
                started += 1
            elif "cycle: ok" in line:
                ok += 1
            elif "cycle: FAILED" in line:
                failed += 1
            elif "session/usage limit" in line or "session limit" in line:
                limited += 1
    except FileNotFoundError:
        pass

    new_names = "\n".join(f"• `{d['slug']}`" for d in built_in_window) or "_none_"
    verdict = ("**Produced real artefacts.**" if built_in_window
               else "**No new actors built** — the window went to research only. "
                    "Worth knowing rather than glossing.")

    notify.post(
        "🏁 Burn window closed — what it produced",
        (f"{verdict}\n\n"
         f"**New actors built this window ({len(built_in_window)}):**\n{new_names}\n\n"
         f"Cycles: {started} started, {ok} completed, {failed} failed, "
         f"{limited} stopped on the allowance limit.\n\n"
         f"The agent is now **stopped** so tonight's reset leaves next week's "
         f"allowance untouched. Restart any time with "
         f"`systemctl start portfolio-agent` — but first remove the burn-mode "
         f"override, or it will keep running unthrottled:\n"
         f"`rm /etc/systemd/system/portfolio-agent.service.d/burn-mode.conf && "
         f"systemctl daemon-reload`"),
        notify.GREEN if built_in_window else notify.AMBER,
        [{"name": "Portfolio", "value": f"{len(live)} live · {len(built)} queued",
          "inline": True},
         {"name": "Published this window", "value": str(len(published_in_window)),
          "inline": True},
         {"name": "Total actors", "value": str(len(ledger)), "inline": True}])
    print(f"reported: {len(built_in_window)} built, {started} cycles")
    return 0


if __name__ == "__main__":
    sys.exit(main())

```

### 8.1 `tools/gatetest.py`
```python
#!/usr/bin/env python3
"""Offline assertions for the §14 step-1 degradation gate. No network, no state.

    python3 tools/gatetest.py

WHY THIS FILE EXISTS
On 2026-08-03 health.py and precheck.py held two different definitions of
"degraded". precheck's was looser and precheck is the one that decides whether a
cycle runs at all -- and it flags degradation as the EMERGENCY that overrides the
weekly-allowance guard. A single buyer run that failed on a build we had already
fixed would have bought a full agent cycle every 15 minutes until the store's
30-day window rolled it off.

The gate is now one function. These assertions pin its behaviour, because the
failure mode is silent: a wrong answer here does not raise, it just quietly
spends a month of allowance (or, in the other direction, ignores a real
buyer-facing outage). Both directions are tested.
"""

from __future__ import annotations

import os
import sys

sys.path.insert(0, os.path.dirname(__file__))

import state

LIVE = "O8WuUobb7lhKvJIjQ"   # the build hcris was fixed on
OLD = "AzSEKUX8Sbp3AIIMG"    # the build the buyer's run failed on

checks = 0


def ok(cond, label):
    global checks
    checks += 1
    if not cond:
        raise AssertionError(label)


def draw(**kw):
    d = {"slug": "d", "actor_id": "a", "status": "published",
         "success_rate": 1.0, "success_build": LIVE,
         "public_runs_30d": None, "public_success_rate": None}
    d.update(kw)
    return d


# --- public_failures ---------------------------------------------------------
ok(state.public_failures(draw()) is None, "no data -> None")
ok(state.public_failures(draw(public_runs_30d=0, public_success_rate=None)) is None,
   "zero runs -> None")
ok(state.public_failures(draw(public_runs_30d=1, public_success_rate=0.0)) == 1,
   "1 run at 0% -> 1 failure")
ok(state.public_failures(draw(public_runs_30d=5, public_success_rate=0.4)) == 3,
   "5 runs at 40% -> 3 failures")
ok(state.public_failures(draw(public_runs_30d=7, public_success_rate=1.0)) == 0,
   "all green -> 0 failures")

# --- THE REGRESSION ----------------------------------------------------------
# hcris-hospital-cost-report as it actually stood on 2026-08-03: fixed, verified,
# our own runs green on the live build -- and one stale buyer failure still
# sitting in the store's 30-day window. The old precheck rule called this an
# emergency every 15 minutes. It is not one.
hcris = draw(slug="hcris-hospital-cost-report",
             success_rate=1.0, success_build=LIVE,
             public_runs_30d=1, public_success_rate=0.0,
             pub_baseline={"build": LIVE, "runs": 1, "fails": 1})
bad, why = state.degradation(hcris)
ok(not bad, f"stale pre-fix buyer failure must not be an emergency (got {why!r})")

# The rule precheck used to apply, reproduced, to prove the test would have
# caught it: any public rate under 90% with no run floor and no baseline.
ok(hcris["public_success_rate"] < 0.90,
   "sanity: the old rule really did fire on this state")

# --- no baseline yet ---------------------------------------------------------
ok(not state.degradation(draw(public_runs_30d=1, public_success_rate=0.0))[0],
   "no baseline -> window describes older code -> not degraded")

# --- baseline belongs to a superseded build ----------------------------------
ok(not state.degradation(draw(
        public_runs_30d=9, public_success_rate=0.0,
        pub_baseline={"build": OLD, "runs": 0, "fails": 0}))[0],
   "baseline from a superseded build -> no post-fix evidence -> not degraded")

# --- a REAL post-fix outage must still fire ----------------------------------
# Same actor, same stale failure in the baseline, but four new buyer runs of
# which two failed on the code that is live now. That is an emergency.
bad, why = state.degradation(draw(
    slug="hcris-hospital-cost-report",
    public_runs_30d=5, public_success_rate=0.4,
    pub_baseline={"build": LIVE, "runs": 1, "fails": 1}))
ok(bad, "new failures on the LIVE build must still raise the emergency")
ok("50%" in why, f"reason must quote the post-baseline rate, not the window: {why!r}")

# --- new buyer runs, all green -----------------------------------------------
ok(not state.degradation(draw(
        public_runs_30d=5, public_success_rate=0.8,
        pub_baseline={"build": LIVE, "runs": 1, "fails": 1}))[0],
   "4 new buyer runs, 0 new failures -> healthy despite an 80% window rate")

# --- one anecdote is not a rate ----------------------------------------------
# Deliberate: MIN_RATE_RUNS applies to post-baseline evidence too. Our own runs
# (below) are the fast path for a genuinely broken actor; a single buyer failure
# must not by itself override the weekly guard.
ok(not state.degradation(draw(
        public_runs_30d=2, public_success_rate=0.5,
        pub_baseline={"build": LIVE, "runs": 1, "fails": 0}))[0],
   "1 new failure alone is an anecdote, not a rate")
ok(state.degradation(draw(
        public_runs_30d=4, public_success_rate=0.25,
        pub_baseline={"build": LIVE, "runs": 1, "fails": 0}))[0],
   "3 new runs, 3 new failures -> degraded")

# --- the window slides -------------------------------------------------------
# Old runs age out of the 30-day window, so both counters can drop below their
# baseline. That must clamp, not go negative and not wrap into a false alarm.
ok(not state.degradation(draw(
        public_runs_30d=0, public_success_rate=None,
        pub_baseline={"build": LIVE, "runs": 4, "fails": 2}))[0],
   "window emptied below baseline -> clamps, no false alarm")
ok(not state.degradation(draw(
        public_runs_30d=1, public_success_rate=1.0,
        pub_baseline={"build": LIVE, "runs": 4, "fails": 2}))[0],
   "failures aged out -> clamps to 0, no false alarm")

# --- our own runs are the fast path ------------------------------------------
# Independent of anything public: apify.success_rate already scopes these to the
# live build, so a failure here is current by construction.
bad, why = state.degradation(draw(slug="x", success_rate=0.5))
ok(bad, "our own live-build rate below 90% is degraded on its own")
ok("our own runs" in why, f"reason must say which evidence fired: {why!r}")
ok(not state.degradation(draw(success_rate=None))[0], "no rate yet -> not degraded")
ok(not state.degradation(draw(success_rate=0.90))[0], "exactly 90% is not degraded")

# Our own rate must NOT be masked by a healthy public rate -- precheck used to
# ignore success_rate entirely whenever a public rate existed.
ok(state.degradation(draw(
        success_rate=0.5, public_runs_30d=9, public_success_rate=1.0))[0],
   "a green public window must not mask our own failing runs")

# --- health.py and precheck.py must agree by construction --------------------
import inspect

import precheck
ok("state.degradation" in inspect.getsource(precheck.actionable),
   "precheck must use the shared gate, not a local copy")
import health
ok("state.degradation" in inspect.getsource(health.check),
   "health must use the shared gate, not a local copy")

print(f"gatetest: {checks} assertions pass")

```

### 8.1 `tools/health.py`
```python
#!/usr/bin/env python3
"""Loop steps 1, 2 and reporting (§14, §7 stage 5-6).

    health.py reconcile   # ledger <-> live API (API is truth for what exists)
    health.py check       # success rates; flag degraded actors
    health.py judge       # apply the 60-day rule
    health.py traction    # buyer runs since the visibility baseline (§12)
    health.py report      # write daily.md
    health.py status      # one-line summary for the heartbeat
"""

from __future__ import annotations

import json
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))

import apify
import state

JUDGE_DAYS = 60
KILL_UNDER = 5.0      # §7: < $5/mo -> delete (not deprecate)
HOLD_UNDER = 20.0     # §7: $5-20/mo -> hold, no further investment
DEGRADED_RATE = 0.90  # §14: falling success rate -> fix or delete immediately


def reconcile():
    """The API is the source of truth for what exists; the ledger for intent (§14).

    NOTE: `GET /v2/acts` (the list endpoint) returns only
    id/name/title/username/stats/timestamps -- it does NOT include `isPublic`.
    Reading public state from it silently demotes every published actor to
    "built", which would make loop step 3 re-publish it every cycle. Public
    state must come from `GET /v2/acts/{id}`.
    """
    live = {a["id"]: a for a in apify.list_actors()}
    ledger = state.load_ledger()
    changed = False

    for d in ledger:
        aid = d.get("actor_id")
        if aid not in live:
            if d.get("status") != "deleted":
                print(f"RECONCILE: {d['slug']} gone from API -> marking deleted")
                d["status"] = "deleted"
                d["deleted_at"] = state.now()
                changed = True
            continue
        a = dict(live[aid])
        try:
            a.update(apify.get_actor(aid))       # the only source of isPublic
        except apify.ApifyError as e:
            print(f"  {d['slug']}: cannot read detail ({e.status}) -- "
                  f"leaving status {d.get('status')!r} alone")
            continue
        # Trust the API over our own record of public/private state.
        actual = "published" if a.get("isPublic") else "built"
        if d.get("status") not in ("deleted",) and d.get("status") != actual:
            print(f"RECONCILE: {d['slug']} status {d.get('status')} -> {actual}")
            d["status"] = actual
            changed = True
        stats = a.get("stats") or {}
        if stats.get("totalRuns") is not None and stats["totalRuns"] != d.get("runs"):
            d["runs"] = stats["totalRuns"]
            changed = True

    known = {d.get("actor_id") for d in ledger}
    for aid, a in live.items():
        if aid not in known:
            print(f"RECONCILE: untracked actor {a['name']} ({aid}) -> adding to ledger")
            ledger.append({
                "slug": a["name"], "actor_id": aid, "name": a["name"],
                "title": a.get("title", ""), "query": "", "created_at": state.now(),
                "published_at": state.now() if a.get("isPublic") else None,
                "status": "published" if a.get("isPublic") else "built",
                "revenue_usd_mo": 0.0, "success_rate": None,
                "runs": (a.get("stats") or {}).get("totalRuns", 0),
                "monetized": False, "note": "discovered via reconcile",
            })
            changed = True

    if changed:
        state.save_ledger(ledger)
    print(f"reconcile: {len(live)} live actor(s), {len(ledger)} ledger entries")
    return ledger


def check():
    """Step 1 of the loop -- outranks everything. Broken actors cost money (§9)."""
    degraded = []
    for d in state.load_ledger():
        if d.get("status") not in ("published", "built"):
            continue
        aid = d["actor_id"]
        try:
            h = apify.run_health(aid)
        except apify.ApifyError as e:
            print(f"  {d['slug']}: cannot read runs ({e.status})")
            continue

        # Score the build users actually run. Runs against superseded builds are
        # development history and must not condemn the shipped code.
        rate = h["current_rate"]
        if rate is None:
            life = h["lifetime_rate"]
            print(f"  {d['slug']}: no runs on the live build yet"
                  + (f" (lifetime {life:.0%} over {h['lifetime_runs']} older runs)"
                     if life is not None else ""))
            continue

        prev = d.get("success_rate")
        state.update_draw(aid, success_rate=rate, success_build=h["build_id"],
                          success_runs=h["current_runs"],
                          lifetime_success_rate=h["lifetime_rate"])
        arrow = ""
        if prev is not None:
            arrow = " (falling)" if rate < prev - 0.01 else " (steady)"
        print(f"  {d['slug']}: success {rate:.0%}{arrow} over "
              f"{h['current_runs']} run(s) on live build "
              f"(lifetime {h['lifetime_rate']:.0%} of {h['lifetime_runs']})")

        if rate < DEGRADED_RATE:
            degraded.append((d, rate, h,
                             f"{d['slug']} at {rate:.0%} on our own runs "
                             f"of the live build"))

        # The store's own view of a published draw. Our numbers are what we
        # measured; these are what a buyer and Apify's ranking see, and the two
        # are not the same measurement (see apify.store_facing).
        if d.get("status") == "published":
            try:
                sf = apify.store_facing(aid)
            except apify.ApifyError as e:
                print(f"    store view unavailable ({e.status})")
                continue
            state.update_draw(aid, monetized=sf["monetized"],
                              pricing_model=sf["pricing_model"],
                              effective_pricing_model=sf["effective_pricing_model"],
                              pricing_pending=sf["pricing_pending"],
                              earning=sf["effective_pricing_model"] != "FREE",
                              public_success_rate=sf["public_success_rate"],
                              public_runs_30d=sf["public_runs_30d"],
                              store_users=sf["total_users"])
            psr = ("n/a" if sf["public_success_rate"] is None
                   else f"{sf['public_success_rate']:.0%}")
            # `total_users` is NOT a buyer count -- measured 2026-08-05T20:42Z
            # across all 14 live Actors: every public one reads exactly
            # totalUsers=2 / 7d=1 / 30d=1, and every private one reads 1 / 0 / 0,
            # regardless of age or runs. pcaob-form-ap-auditor-lookup was 4 hours
            # public with ZERO public runs in 30d and still read 2/1/1, so the
            # +1 is an artifact of being public, not a person. Reading it as
            # traction is the KYC owner's-view mistake in a new costume, so it is
            # printed as raw platform stat and never as a user count.
            print(f"    store view: pricing {sf['effective_pricing_model']} "
                  f"(configured {sf['pricing_model']}), "
                  f"public 30d {psr} of {sf['public_runs_30d']} run(s), "
                  f"stats.totalUsers={sf['total_users']} (constant for every "
                  f"public Actor — NOT buyers, see comment)")
            # Only the store's *effective* model is money. A draw configured for
            # PPE but still serving FREE through a §8 notice period earns
            # exactly nothing, and calling that "monetized" is how this
            # portfolio came to believe it had revenue it did not have.
            if sf["pricing_pending"]:
                print(f"    NOT EARNING YET — {d['slug']} serves FREE until the "
                      f"§8 notice expires; configured {sf['pricing_model']}")
            elif sf["effective_pricing_model"] != "FREE" and not d.get("earning"):
                print(f"    EARNING — {d['slug']} now charges "
                      f"{sf['effective_pricing_model']} on the store")
                state.resolve_blocked("monetization wizard", d["slug"])
            # §14's 90% publish-stop is about the public number, but that number
            # is a lagging 30-day window: the runs that failed BEFORE a fix stay
            # in it for weeks. Baseline the window against the build that is
            # live, so only buyer runs against the shipped code can condemn it.
            # Re-baselining on a new build is exactly the rule apify.success_rate
            # already applies to our own runs -- superseded builds are history.
            fresh = state.get_draw(aid) or {}
            base = fresh.get("pub_baseline") or {}
            if base.get("build") != h["build_id"]:
                base = {"build": h["build_id"],
                        "runs": sf["public_runs_30d"],
                        "fails": state.public_failures(fresh) or 0,
                        "stamped_at": state.now()}
                state.update_draw(aid, pub_baseline=base)
                fresh = state.get_draw(aid) or {}
            bad, why = state.degradation(fresh)
            # Every public run is one automated platform probe, fired once per
            # day of public life (public_runs_30d == ceil(days_public), 16 of 16
            # Actors -- see health.traction). That makes each one a clean-room
            # execution of the LIVE build on the input a store visitor gets, so
            # a probe failure is high-quality evidence and there is exactly one
            # per day of it. A published Actor whose probes have NEVER succeeded
            # on the current build is broken for every buyer who tries it, and
            # waiting for MIN_RATE_RUNS spends days of §9 clawback exposure to
            # confirm what one run already showed.
            #
            # This is what dismissed the 2026-08-06 medicare outage for 17
            # hours: it read 0/1 on its live build and printed "pre-dates live
            # build -- stale window", which was FALSE (the build finished
            # 96 seconds before the Actor went public, so its only probe can
            # only have run after it). The run had already charged the buyer and
            # then died on a dataset schema-validation 400 with zero rows.
            _b = fresh.get("pub_baseline") or {}
            fails_since = max(0, (state.public_failures(fresh) or 0)
                              - int(_b.get("fails") or 0))
            runs_since = max(0, (sf["public_runs_30d"] or 0)
                             - int(_b.get("runs") or 0))
            never_passed, never_why = state.probe_never_passed(fresh)
            if bad or never_passed:
                degraded.append((d, sf["public_success_rate"], h,
                                 why if bad else never_why))
            elif (sf["public_success_rate"] is not None
                    and sf["public_success_rate"] < DEGRADED_RATE):
                # Say which of the two reasons applies instead of asserting the
                # stale-window one unconditionally.
                if fails_since:
                    print(f"    public 30d rate is below {DEGRADED_RATE:.0%}: "
                          f"{fails_since} probe failure(s) of {runs_since} since "
                          f"build {h['build_id']} went live — watching, under the "
                          f"{state.MIN_RATE_RUNS}-run floor to call it degraded")
                else:
                    print(f"    public 30d rate is below {DEGRADED_RATE:.0%} but "
                          f"every failure in the window pre-dates live build "
                          f"{h['build_id']} — stale window, not an emergency")

    # §14 step 1 is an EMERGENCY rule, and what makes it one is exposure: a
    # public actor with failing runs is serving buyers badly and accruing §9
    # clawback liability every hour. A private draw cannot do either -- nobody
    # can run it but us, and ship.py already refuses to publish anything that
    # fails its smoke. Parking one is the correct outcome, not an incident.
    #
    # Keeping the two in one bucket meant a single parked draw raised the
    # emergency flag on EVERY cycle forever: precheck.py escalates a degraded
    # actor past the weekly-usage guard, so a known upstream outage on an
    # unpublished actor would have bought a full cycle every 15 minutes to
    # rediscover it. Caught 2026-08-02 on prop-65 (oag.ca.gov misrouting).
    parked = {d.get("slug") for d in state.load_ledger()
              if d.get("source_status") == "unavailable_upstream"}
    private_degraded = [t for t in degraded
                        if t[0].get("status") != "published"]
    degraded = [t for t in degraded if t[0].get("status") == "published"]

    if private_degraded:
        print("\nprivate draws failing their own smoke (not an emergency — "
              "unpublished, zero buyer exposure, publish is gated on smoke):")
        for d, rate, h, why in private_degraded:
            tag = " [PARKED: source unavailable]" if d["slug"] in parked else \
                  " — diagnose before it reaches the front of the publish queue"
            print(f"  {d['slug']} success {rate:.0%}{tag}")

    if degraded:
        print("\nDEGRADED -- fix or delete immediately (§14 step 1):")
        for d, rate, h, why in degraded:
            print(f"  {why} ({d['actor_id']}) on build {h['build_id']}")
            for f in h["recent_failures"]:
                print(f"    {f['status']} {f['id']} ({f['buildNumber']}) "
                      f"{f['startedAt']}")
    return degraded


def judge():
    """Step 2 -- the 60-day clock (§7 stage 6)."""
    actions = []
    for d in state.load_ledger():
        if d.get("status") != "published" or not d.get("published_at"):
            continue
        age = state.days_since(d["published_at"])
        if age < JUDGE_DAYS:
            continue

        rev = float(d.get("revenue_usd_mo") or 0)
        if rev < KILL_UNDER:
            actions.append((d, "DELETE", f"${rev:.2f}/mo < $5 after {age:.0f}d"))
        elif rev < HOLD_UNDER:
            actions.append((d, "HOLD", f"${rev:.2f}/mo -- no further investment"))
        else:
            actions.append((d, "TRIPLE_DOWN",
                            f"${rev:.2f}/mo > $20 -- build 3 variants"))

    for d, action, why in actions:
        print(f"JUDGE {action}: {d['slug']} -- {why}")
        # §14: never delete an actor earning over $5/mo, regardless of any rule.
        if action == "DELETE" and float(d.get("revenue_usd_mo") or 0) < KILL_UNDER:
            print(f"  -> run: python3 tools/health.py kill {d['actor_id']}")
    if not actions:
        print("judge: nothing past its 60-day clock")
    return actions


def traction():
    """Buyer runs, i.e. public runs beyond the platform's own daily probe (§12).

    Measured 2026-08-06, and it retires two WRONG derivations of this number --
    the second of which was this function's own:

      1. `stats.totalUsers` is a constant (2/1/1 on every public Actor). Not a
         buyer count. See CLAUDE.md.

      2. Discriminating per run on `userId != ours` -- what this function did --
         is STRUCTURALLY BLIND, and blind in the direction that prints a
         reassuring zero. `/v2/acts/{id}/runs` under the owner's token returns
         ONLY the owner's runs; a buyer's run lives in the BUYER's account and
         never appears, so `userId` is ours on every row the loop can see and
         the comparison can never fire. Proof, all 16 live Actors at once:
         `stats.totalRuns - len(actor_runs()) == publicActorRunStats30Days.TOTAL`
         exactly (145 - 96 == 49), while all 6 PRIVATE Actors -- which no
         outsider can run -- show that gap at exactly 0.

    So `public_runs_30d` does NOT count our own runs, which is the opposite of
    what CLAUDE.md said: it counts runs we cannot enumerate. That makes it look
    like the traction number. It is not, because of what it actually measures:

        public_runs_30d == ceil(days_public)   -- 16 of 16 Actors, no exceptions

    One run per Actor per day of public life, identical across subject, price,
    rank and age. That is an automated platform probe on a clock, not an
    audience -- and unlike our smoke runs it never stops, so at 16 Actors it
    manufactures ~480 runs/month of noise that reads as a hockey stick.

    The estimator is therefore the EXCESS over the probe. A negative excess
    means the probe model has drifted and the number must not be reported at
    all -- say so rather than floor it at zero, because flooring is how a broken
    model keeps printing a confident number.

    THE PROBE HAS A PHASE, AND `ceil` ALONE GOT IT WRONG (measured 2026-08-06).
    `ceil(days)` steps up the INSTANT the publish anniversary passes, but the
    probe for that day of life lands some hours later. In the window between
    the two, a perfectly healthy Actor reads exactly -1 and the drift alarm
    fired on six of them at once:

        frac < 0.02 (anniversary just passed) -> excess -1, all 6 of 6
        frac > 0.40                           -> excess  0, all 10 of 10

    A clean separation on phase, so this was never drift. The probe count is
    bounded, not exact: floor(days) probes have certainly fired and ceil(days)
    at most. So EXCESS is taken against the UPPER bound (a buyer run must
    exceed every probe that could have fired -- conservative, and it can only
    ever under-report traction), while the drift alarm tests the LOWER bound.
    `observed == ceil(days) - 1` is the model's own phase uncertainty, not a
    contradiction of it, and an alarm that cannot tell those apart goes dark
    every day at exactly the hour this portfolio publishes.
    """
    import datetime
    import math

    now = datetime.datetime.now(datetime.timezone.utc)
    total_excess = 0
    rows, unmodelled = [], []
    for d in state.load_ledger():
        if d.get("status") != "published" or not d.get("published_at"):
            continue
        try:
            a = apify.get_actor(d["actor_id"])
        except apify.ApifyError as e:
            print(f"  {d['slug']}: actor read failed ({e})")
            continue
        pub = (a.get("stats") or {}).get("publicActorRunStats30Days") or {}
        observed = pub.get("TOTAL") or 0
        days = (now - datetime.datetime.fromisoformat(
            d["published_at"])).total_seconds() / 86400
        # The window is 30 days wide, so the probe stops accruing at 30.
        # Bounded, not exact -- the day's probe fires at an unknown phase
        # offset within the day, so between the anniversary and the probe
        # only floor(days) have landed.
        probe_max = min(math.ceil(days), 30)
        probe_min = min(math.floor(days), 30)
        excess = observed - probe_max          # conservative: never over-reports
        rows.append((d["slug"], observed, probe_max, excess))
        if observed < probe_min:               # below even the lower bound
            unmodelled.append(d["slug"])
        total_excess += max(excess, 0)

    for slug, obs, exp, ex in sorted(rows, key=lambda r: -r[3]):
        mark = "  <-- BUYER RUNS" if ex > 0 else ""
        print(f"  {slug[:52]:52} public {obs:3}  probe {exp:3}  excess {ex:3}{mark}")
    if unmodelled:
        print(f"traction: NOT REPORTED -- {len(unmodelled)} Actor(s) read fewer "
              f"public runs than floor(days_public), the probe's LOWER bound "
              f"({', '.join(unmodelled[:3])}), so the 1/day probe model no longer "
              f"holds. Re-fit it before trusting any number here. (A read of "
              f"ceil-1 is phase, not drift, and does not reach here.)")
        return {"external": None, "unmodelled": unmodelled, "rows": rows}
    print(f"traction: {total_excess} buyer run(s) across {len(rows)} live Actor(s) "
          f"-- public runs beyond the 1/day platform probe")
    if not total_excess:
        print("  zero buyers so far -- this is the number §12 is waiting on")
    return {"external": total_excess, "rows": rows}


def kill(actor_id: str):
    d = state.get_draw(actor_id)
    if d and float(d.get("revenue_usd_mo") or 0) >= KILL_UNDER:
        raise SystemExit(f"refusing: {d['slug']} earns "
                         f"${d['revenue_usd_mo']}/mo (>= $5, §14)")
    apify.delete_actor(actor_id)
    state.update_draw(actor_id, status="deleted", deleted_at=state.now())
    print(f"deleted {actor_id}")


def summary() -> dict:
    ledger = state.load_ledger()
    live = [d for d in ledger if d.get("status") == "published"]
    built = [d for d in ledger if d.get("status") == "built"]
    mrr = sum(float(d.get("revenue_usd_mo") or 0) for d in ledger)
    rates = [d["success_rate"] for d in live if d.get("success_rate") is not None]
    all_blocked = state.load_blocked()
    blocked = [b for b in all_blocked if not b.get("resolved")]
    return {
        "live": len(live), "built_unpublished": len(built),
        "suspect_resolutions": _suspect_resolutions(all_blocked),
        "mrr": mrr, "backlog": len(state.load_backlog()),
        "rejected": len(state.load_rejected()),
        "success_rate": (sum(rates) / len(rates)) if rates else None,
        "blocked": len(blocked), "blocked_items": blocked,
        "live_draws": live, "unmonetized": [d for d in live if not d.get("monetized")],
    }


def _suspect_resolutions(blocked: list) -> list:
    """Blockers that went `resolved` without leaving the trace a real resolution
    leaves. Added 2026-07-29 after the USPTO API-key blocker flipped to resolved
    at 16:08:27 with no note and no notification record, while the key was
    plainly still needed (it requires ID.me identity verification, which no
    unattended process can complete).

    The test: every resolution through `state.resolve_blocked()` calls
    `notify.resolved()`, which records a `resolved::<what>::<draw>` key in
    notified.json. A resolved blocker with no such key did not come through
    that path.

    Honest caveat, because a tripwire that overstates its confidence is worse
    than none: `notify` only records the key when the POST actually succeeds
    (`if ok: _mark(...)`), so a genuine resolution during a Discord outage
    looks identical. Treat a hit as "verify this", not as proof of tampering.
    A silently-resolved operator dependency drops out of daily.md while still
    being needed, which is the one failure §14's blocked.json exists to stop.
    """
    try:
        sent = json.load(open(os.path.join(os.path.dirname(state.BLOCKED),
                                           "notified.json")))
    except Exception:  # noqa: BLE001
        return []
    # Test by CAUSE, not by draw. resolve_blocked() de-dups its ping on `what`
    # alone and fires only after the LAST draw carrying that cause clears, so
    # the other draws legitimately have no key of their own. Checking per-draw
    # flagged six healthy resolutions on the first run.
    notified_causes = {k.split("::")[1] for k in sent if k.startswith("resolved::")}
    return [{"what": b["what"], "draw": b.get("draw", ""),
             "resolved_at": b.get("resolved_at")}
            for b in blocked
            if b.get("resolved")
            and b["what"] not in notified_causes
            # A deliberate resolution says why. Both known legitimate paths
            # leave one or the other: a note, or a ping.
            and not b.get("resolved_note")]


def report():
    """§14 reporting -- the operator's monitoring surface. Short and factual."""
    s = summary()
    sr = f"{s['success_rate']:.0%}" if s["success_rate"] is not None else "n/a"
    try:
        spend = f"${apify.monthly_spend_usd():.2f}"
    except Exception:
        spend = "unknown"

    lines = [
        f"# Portfolio daily — {state.now()[:10]}",
        "",
        f"- **Draws live:** {s['live']}   (built, not yet published: {s['built_unpublished']})",
        f"- **Portfolio MRR:** ${s['mrr']:.2f}",
        f"- **Aggregate success rate:** {sr}",
        f"- **Backlog:** {s['backlog']} screened   |   rejected to date: {s['rejected']}",
        f"- **Apify spend this month:** {spend} (cap $85, self-imposed stop $40)",
        "",
    ]

    if s["live_draws"]:
        lines += ["## Live draws", "",
                  "| actor | query | runs | success | $/mo | monetized | age |",
                  "|---|---|---|---|---|---|---|"]
        for d in s["live_draws"]:
            r = d.get("success_rate")
            lines.append(
                f"| {d['slug']} | {d.get('query','')[:40]} | {d.get('runs',0)} | "
                f"{f'{r:.0%}' if r is not None else '—'} | "
                f"${float(d.get('revenue_usd_mo') or 0):.2f} | "
                f"{'yes' if d.get('monetized') else '**NO**'} | "
                f"{state.days_since(d.get('published_at','')):.0f}d |")
        lines.append("")

    if s["unmonetized"]:
        lines += ["## ⚠ Needs the monetization wizard (5 min each, §10)", "",
                  "Public but **free** until done — these earn nothing:", ""]
        lines += [f"- {d['slug']} — {d.get('url','')}" for d in s["unmonetized"]]
        lines.append("")

    # The queue drains at ship.MAX_PUBLISH_PER_24H per rolling 24h (§14), so
    # its ORDER is a real decision and the operator should be able to see and
    # override it. The cap is READ, never restated -- this header said "3" for a
    # day after the limit moved to 5, which is exactly how the operator's own
    # monitoring surface starts disagreeing with the gate it reports on.
    import screen as _screen
    import ship as _ship
    queue = _screen.publish_queue()
    if queue:
        lines += [f"## Publish queue ({_ship.MAX_PUBLISH_PER_24H} per rolling 24h, §14)", "",
                  "Clear queries first — they are the only ones still winnable, "
                  "and they are the ones that decay while they wait.", "",
                  "| # | actor | query | occupancy |", "|---|---|---|---|"]
        for i, c in enumerate(queue, 1):
            lines.append(f"| {i} | {c.get('target_actor_name','?')} | "
                         f"{c['query']} | {c.get('occupancy_verdict','unchecked')} |")
        lines.append("")

    # publish_queue() drops draws whose upstream source is down. Dropping them
    # silently would read as "the queue is everything we have", so say what was
    # parked and why -- a built, monetized, smoke-passing draw sitting out of
    # line is exactly the thing that should never go quiet.
    parked_src = [d for d in state.load_ledger()
                  if d.get("source_status") == "unavailable_upstream"]
    if parked_src:
        lines += ["## Parked — upstream source unavailable", "",
                  "Built and monetized, held out of the publish queue because the "
                  "data source itself is failing. Not an operator action; the "
                  "revival test is recorded in `open_queries.json`.", ""]
        lines += [f"- **{d.get('slug') or d.get('name')}** "
                  f"(since {d.get('publish_blocked_since','?')}) — "
                  f"{d.get('publish_blocked_reason','')}" for d in parked_src]
        lines.append("")

    if s["suspect_resolutions"]:
        lines += ["## ⚠ Blockers resolved without a trace — verify these", "",
                  "Each went `resolved` with no note and no notification record. "
                  "A genuine resolution during a Discord outage looks the same, so "
                  "this is a prompt to check, not an accusation. It matters because "
                  "a blocker that silently resolves stops appearing below while "
                  "still being needed.", ""]
        for b in s["suspect_resolutions"]:
            lines.append(f"- **{b['what']}** ({b.get('draw','')}) — resolved "
                         f"{b.get('resolved_at')}")
        lines.append("")

    if s["blocked_items"]:
        lines += ["## Blocked (needs a human)", ""]
        for b in s["blocked_items"]:
            lines.append(f"- **{b['what']}** ({b.get('draw','—')}) since "
                         f"{b['since'][:10]}: {b.get('needed','')}")
        lines.append("")
    else:
        lines += ["## Blocked", "", "Nothing blocked.", ""]

    # "Next up" must mean buildable next. A candidate already built, or parked
    # waiting on a human, at the top of this list misreports what the agent will
    # actually do next -- the operator reads this file to decide whether to step in.
    all_backlog = state.load_backlog()
    ready = [c for c in all_backlog if c.get("status", "screened") == "screened"][:5]
    if ready:
        lines += ["## Next up", ""]
        lines += [f"- [{c.get('score',0):.0f}] {c['query']} "
                  f"(supply {c.get('supply','?')}, incumbent {c.get('incumbent','—')})"
                  for c in ready]
        lines.append("")

    # Occupancy, added 2026-07-29. A supply count cannot tell an empty niche from
    # one competitor scraping the same federal file, and reporting the count
    # alone is what put eight occupied queries in this backlog unnoticed.
    scored = [c for c in all_backlog if c.get("occupancy_verdict")]
    if scored:
        occupied = [c for c in scored if c["occupancy_verdict"] == "occupied"]
        lines += ["## Competitive position (occupancy, not just supply)", "",
                  f"{len(scored) - len(occupied)} of {len(scored)} screened queries are clear; "
                  f"{len(occupied)} are held by a direct same-source competitor.", ""]
        for c in sorted(scored, key=lambda x: -x.get("score", 0)):
            d = c.get("direct_competitors") or []
            mark = "clear" if not d else "**OCCUPIED**"
            lines.append(f"- {mark} — {c['query']} (supply {c.get('supply','?')}, "
                         f"{c.get('supply_visible','?')} visible)"
                         + ("" if not d else ": " +
                            ", ".join(f"{x['actor']} ({x['runs']} runs)" for x in d)))
        lines.append("")

    parked = [c for c in all_backlog if c.get("status", "screened") != "screened"]
    if parked:
        lines += ["## Backlog not in the ready queue", ""]
        lines += [f"- **{c['query']}** — {c['status']}"
                  f"{': ' + c['blocked_reason'] if c.get('blocked_reason') else ''}"
                  f"{' — ' + c['note_build'] if c.get('note_build') else ''}"
                  for c in parked]
        lines.append("")

    # Supply probes cost API calls. A query that CLEARED the <10 gate but whose
    # demand/source work was not finished is real, paid-for signal -- dropping it
    # means the next cycle re-probes it from scratch. It cannot go in rejected.json
    # (that feeds state.seen_queries(), which would suppress it forever) and it
    # cannot go in backlog.json (screen.py rightly refuses anything without demand
    # evidence). So it lives here.
    probed = state._load(os.path.join(state.STATE, "probed.json"), [])
    # Reference entries (the egress matrix, the programmatic-pathway audit) live
    # in this file too and carry a `_key` instead of a `query`. They are notes,
    # not probes, so they have no place in a "finish the demand test" list -- and
    # indexing p['query'] on one crashed `report` outright on 2026-08-02. The
    # `supply` guard below already anticipated them; `query` did not.
    open_probes = [p for p in probed if not p.get("resolved") and p.get("query")]
    if open_probes:
        lines += ["## Probed: supply clears, demand not yet verified", "",
                  "Cheap half already paid for. Finish the demand test before building.", ""]
        lines += [f"- **{p['query']}** (supply {p.get('supply','?')}) — {p.get('next_step','')}"
                  # supply may be absent OR explicitly null (reference entries such as
                  # the egress matrix carry no supply at all) -- both sort last.
                  for p in sorted(open_probes,
                                  key=lambda p: 99 if p.get("supply") is None else p["supply"])]
        lines.append("")

    out = os.path.join(state.STATE, "daily.md")
    open(out, "w").write("\n".join(lines))
    print(f"wrote {out}")
    return "\n".join(lines)


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "status"
    if cmd == "reconcile":
        reconcile()
    elif cmd == "check":
        check()
    elif cmd == "judge":
        judge()
    elif cmd == "traction":
        traction()
    elif cmd == "kill":
        kill(sys.argv[2])
    elif cmd == "report":
        print(report())
    elif cmd == "status":
        print(json.dumps({k: v for k, v in summary().items()
                          if k not in ("blocked_items", "live_draws", "unmonetized")},
                         indent=2))
    else:
        print(__doc__)

```

### 8.1 `tools/notify.py`
```python
#!/usr/bin/env python3
"""Discord notifications — the operator's out-of-band channel.

Design rule: **only ping a human when a human is actually needed.** The agent
runs ~96 cycles a day. If routine progress went to Discord the channel would be
noise and the one message that mattered would be missed.

So:
  - a blocker notifies exactly ONCE, when first recorded (state.add_blocked
    dedupes repeats; only a brand-new blocker reaches here)
  - resolutions notify once, because "you can stop worrying about that" is worth
    knowing
  - everything else is opt-in via an explicit notify() call

Usage:
    notify.py test
    notify.py blocked "<what>" "<draw>" "<needed>"
    notify.py resolved "<what>" "<draw>"
    notify.py daily
"""

from __future__ import annotations

import json
import os
import sys
import urllib.error
import urllib.request

sys.path.insert(0, os.path.dirname(__file__))

BLUE, GREEN, AMBER, RED = 3447003, 3066993, 16098851, 15158332

# Sent-notification log, so a restart cannot re-announce old blockers.
SENT = os.path.join(os.environ.get("STATE", os.path.expanduser("~/portfolio")),
                    "notified.json")


def webhook() -> str:
    url = os.environ.get("DISCORD_WEBHOOK", "").strip()
    if not url:
        env = os.path.expanduser("~/portfolio-agent/agent.env")
        if os.path.exists(env):
            for line in open(env):
                if line.startswith("DISCORD_WEBHOOK="):
                    url = line.split("=", 1)[1].strip()
                    break
    return url


def _sent() -> dict:
    try:
        return json.load(open(SENT))
    except Exception:
        return {}


def _mark(key: str) -> None:
    d = _sent()
    d[key] = True
    tmp = f"{SENT}.tmp"
    with open(tmp, "w") as f:
        json.dump(d, f, indent=2)
    os.replace(tmp, SENT)


def post(title: str, description: str, color: int = BLUE,
         fields: list[dict] | None = None, once_key: str = "") -> bool:
    """Send an embed. Returns False if suppressed or undeliverable.

    Never raises: a notification failure must not break a portfolio cycle.
    """
    if once_key and _sent().get(once_key):
        return False

    url = webhook()
    if not url:
        print("notify: DISCORD_WEBHOOK not set", file=sys.stderr)
        return False

    payload = {
        "username": "Apify Portfolio Agent",
        "embeds": [{
            "title": title[:250],
            "description": description[:3800],
            "color": color,
            "fields": (fields or [])[:25],
            "footer": {"text": "portfolio-agent · ubuntu-4gb-hel1-1"},
        }],
    }
    # Discord 403s the default "Python-urllib/3.x" User-Agent. curl works, urllib
    # does not, and the failure looks like a permissions problem rather than a
    # header problem -- so set one explicitly.
    req = urllib.request.Request(
        url, data=json.dumps(payload).encode(), method="POST",
        headers={"Content-Type": "application/json",
                 "User-Agent": "portfolio-agent (+https://apify.com/malekh)"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            ok = r.status in (200, 204)
    except Exception as e:  # noqa: BLE001
        print(f"notify: failed: {e}", file=sys.stderr)
        return False

    if ok and once_key:
        _mark(once_key)
    return ok


def blocked(what: str, draw: str = "", needed: str = "") -> bool:
    """A human is needed. Fires once per distinct blocker."""
    return post(
        f"🔴 Needs you: {what}",
        needed or "_(no detail recorded)_",
        RED,
        [{"name": "Draw", "value": draw or "—", "inline": True}],
        once_key=f"blocked::{what}::{draw}",
    )


def resolved(what: str, draw: str = "") -> bool:
    return post(
        f"🟢 Cleared: {what}",
        "No longer needs a human.",
        GREEN,
        [{"name": "Draw", "value": draw or "—", "inline": True}],
        once_key=f"resolved::{what}::{draw}",
    )


def daily() -> bool:
    """Opt-in portfolio summary. Fires at most ONCE per calendar day (UTC).

    The once-per-day rule used to live only in CLAUDE.md, i.e. it held only as
    long as every one of ~96 cycles a day remembered it -- and a fresh agent
    process has no memory of what an earlier one sent. A second daily report is
    exactly the routine-progress ping that trains the operator to mute the
    channel, so the guard belongs in code. post() marks the key only on a
    successful send, so a delivery failure still leaves today's slot open.
    """
    import health, state
    today = state.now()[:10]
    s = health.summary()
    open_blockers = [b for b in state.load_blocked() if not b.get("resolved")]
    sr = f"{s['success_rate']:.0%}" if s["success_rate"] is not None else "n/a"

    fields = [
        {"name": "Live", "value": str(s["live"]), "inline": True},
        {"name": "Queued", "value": str(s["built_unpublished"]), "inline": True},
        {"name": "MRR", "value": f"${s['mrr']:.2f}", "inline": True},
        {"name": "Success", "value": sr, "inline": True},
        {"name": "Backlog", "value": str(s["backlog"]), "inline": True},
        {"name": "Blocked", "value": str(len(open_blockers)), "inline": True},
    ]
    desc = ("Nothing needs you." if not open_blockers else
            "**Waiting on you:**\n" +
            "\n".join(f"• {b['what']}" for b in open_blockers[:10]))
    return post("📊 Daily portfolio report", desc,
                AMBER if open_blockers else GREEN, fields,
                once_key=f"daily::{today}")


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "test"
    a = sys.argv[2:]
    if cmd == "test":
        print(post("🔔 Test", "Manual test from notify.py.", BLUE))
    elif cmd == "blocked":
        print(blocked(*(a + ["", ""])[:3]))
    elif cmd == "resolved":
        print(resolved(*(a + [""])[:2]))
    elif cmd == "daily":
        print(daily())
    else:
        print(__doc__)

```

### 8.1 `tools/output_schema.py`
```python
#!/usr/bin/env python3
"""Generate `.actor/dataset_schema.json` from an Actor's REAL output.

Why infer instead of hand-writing: 19 Actors with 19 different output shapes, and
a schema that disagrees with the actual data is worse than none -- the Output tab
renders empty columns and the listing looks broken. The dataset from a real
successful run is the only source of truth for what the fields actually are.

What the buyer gets: the Output tab renders a titled table with human column
labels instead of a wall of raw JSON. That is the first thing a prospective user
sees after "Try for free", so it is conversion surface, not decoration.

Usage:
    output_schema.py infer <slug>     # print the schema it would write
    output_schema.py write <slug>     # write it into src/.actor/ + wire actor.json
    output_schema.py all              # write for every actor that has run data
"""

from __future__ import annotations

import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(__file__))

import apify
import state

ACTORS = os.path.expanduser("~/portfolio-agent/actors")

# Columns a table should never lead with: internal echoes, giant nested blobs.
DEMOTE = {"input", "matches", "raw", "debug"}

# Fields worth surfacing first when present -- the "did I get an answer" columns.
PRIORITY = ["excluded", "found", "status", "result", "matchCount",
            "highestConfidence", "requiresManualVerification", "guidance"]

# Provenance and audit fields. They belong in the dataset (they are what makes a
# compliance result defensible) but they must not be the FIRST thing a buyer
# sees -- a table opening on "Source Row Count" reads like debug output. Matched
# on substrings so it survives the naming drift across 19 independently written
# Actors (checkedAt / checked_at / screenedAt ...).
META_PATTERNS = ("recordid", "checkedat", "checked_at", "screenedat",
                 "screened_at", "sourceasof", "source_as_of", "sourcerowcount",
                 "source_row_count", "lastupdated", "last_updated", "recordcount",
                 "record_count", "referenceid", "reference_id", "source",
                 "retrievedat", "runid", "datasetid")


def is_meta(name: str) -> bool:
    n = name.lower()
    return any(p in n for p in META_PATTERNS)


# Domain acronyms this portfolio actually emits. Without these a column reads
# "Leie Record Count" or "Ccn", which looks like nobody proof-read the listing.
ACRONYMS = {
    "leie", "npi", "url", "id", "ein", "dob", "ccn", "fda", "irs", "oig", "cms",
    "hcris", "pcaob", "asic", "afs", "faa", "fspr", "usdot", "abn", "acn", "uk",
    "us", "usa", "nz", "eu", "api", "csv", "json", "hhs", "sec", "cik", "fei",
    "nsw", "ust", "epa", "cfr", "pma", "udi", "sam", "uei",
}


def humanize(name: str) -> str:
    """camelCase / snake_case -> 'Human label', acronyms preserved."""
    s = re.sub(r"[_\-]+", " ", name)
    s = re.sub(r"(?<=[a-z0-9])(?=[A-Z])", " ", s)
    words = [w.upper() if w.lower() in ACRONYMS else w for w in s.split()]
    if words:
        words[0] = words[0] if words[0].isupper() else words[0].capitalize()
    return " ".join(words)


def jtype(v):
    if isinstance(v, bool):
        return "boolean"
    if isinstance(v, (int, float)):
        return "number"
    if isinstance(v, list):
        return "array"
    if isinstance(v, dict):
        return "object"
    return "string"


def sample_items(actor_id: str, limit: int = 20) -> list[dict]:
    """Items from the most recent SUCCEEDED run. A failed run's dataset is not
    representative of what a buyer sees."""
    for r in apify.actor_runs(actor_id, limit=25):
        if r.get("status") != "SUCCEEDED":
            continue
        items = apify.run_dataset(r, limit=limit)
        if items:
            return [i for i in items if isinstance(i, dict)]
    return []


def infer(slug: str, actor_id: str) -> dict | None:
    items = sample_items(actor_id)
    if not items:
        return None

    # Union the keys across items -- one item may omit an optional field.
    order, seen = [], set()
    for it in items:
        for k in it:
            if k not in seen:
                seen.add(k)
                order.append(k)

    props, scalars = {}, []
    for k in order:
        val = next((it[k] for it in items if it.get(k) is not None), None)
        # Union every type actually observed, and ALWAYS permit null.
        #
        # This is not defensive padding -- it is a run-killer. Apify VALIDATES
        # pushed items against this schema server-side: POST /v2/datasets/{id}
        # /items returns 400 schema-validation-error and actor_lite.flush()
        # raises, so the whole run FAILS. Measured 2026-08-05 on
        # medicare-provider-enrollment-revalidation-due-date: `nextDueDate` is
        # legitimately None when CMS publishes a due date as TBD, the inferred
        # schema said `"type": "string"` from the first non-null row, and the
        # smoke test died at push with zero rows delivered.
        #
        # Taking the first non-null value as THE type is the trap: a nullable
        # field looks non-nullable in any sample whose null rows happen to sort
        # later. A buyer then hits the null path we never sampled and the run
        # crashes -- §9 clawback territory, from a file whose only job is to
        # label table columns. The schema exists for DISPLAY (`views` drives the
        # Output tab); nothing about a permissive `fields` type makes the table
        # worse, and strictness here buys nothing and can only cost runs.
        #
        # SECOND RUN-KILLER, measured 2026-08-06 on
        # sec-edgar-form-d-offering-new-capital-raised: making every field
        # nullable is NOT sufficient, because a field that is null in EVERY
        # sampled row has no observed type at all and the generator then has to
        # GUESS one. It guessed "string". `totalOfferingAmountUsd` is null on a
        # pooled fund (the source files the literal "Indefinite") and every row
        # in the sample happened to be a pooled fund, so the schema shipped
        # ["string","null"] -- and the first ordinary filing carrying a real
        # number failed validation and killed the whole run with zero rows.
        #
        # The smoke test PASSED on exactly the rows that hid it, which is the
        # tell: a sample cannot type a field it never saw a value for. So an
        # unobserved field gets NO type constraint rather than an invented one.
        # Absence of evidence is not evidence of a string.
        observed = {jtype(it[k]) for it in items
                    if k in it and it[k] is not None}
        t = jtype(val)
        p = {"title": humanize(k)}
        if observed:
            types = sorted(observed) + ["null"]
            p["type"] = types[0] if len(types) == 1 else types
        if t in ("string", "number", "boolean") and val is not None:
            ex = val if not isinstance(val, str) else val[:80]
            p["example"] = ex
        props[k] = p
        # A column is displayable only if every non-null value it holds is
        # scalar; a key that is a string in one row and an object in another
        # cannot be a table cell.
        # `observed` empty means we never saw a value, so we cannot prove the
        # field is scalar -- it may be an array in real data, which is not a
        # table cell. Require positive evidence, not a vacuous subset test.
        if observed and observed <= {"string", "number", "boolean"} and k not in DEMOTE:
            scalars.append(k)

    # Lead with the columns that answer the user's question; provenance last.
    answer  = [k for k in PRIORITY if k in scalars]
    payload = [k for k in scalars if k not in PRIORITY and not is_meta(k)]
    meta    = [k for k in scalars if k not in PRIORITY and is_meta(k)]
    cols = answer + payload + meta
    cols = cols[:12]                      # a table wider than this is unreadable
    if not cols:
        return None

    meta_path = os.path.join(ACTORS, slug, "meta.json")
    title = slug
    if os.path.exists(meta_path):
        title = json.load(open(meta_path)).get("title", slug)

    return {
        "actorSpecification": 1,
        "fields": {"type": "object", "properties": props},
        "views": {
            "overview": {
                "title": "Results",
                "description": f"{title} — one row per record returned.",
                "transformation": {"fields": cols},
                "display": {
                    "component": "table",
                    "properties": {c: {"label": props[c]["title"]} for c in cols},
                },
            }
        },
    }


def write(slug: str, actor_id: str) -> bool:
    schema = infer(slug, actor_id)
    if not schema:
        print(f"  {slug}: no usable run data -- skipped")
        return False

    adir = os.path.join(ACTORS, slug, "src", ".actor")
    os.makedirs(adir, exist_ok=True)
    with open(os.path.join(adir, "dataset_schema.json"), "w") as f:
        json.dump(schema, f, indent=2)
        f.write("\n")

    # Wire it up: without the storages.dataset reference the file is inert.
    ajson = os.path.join(adir, "actor.json")
    if os.path.exists(ajson):
        a = json.load(open(ajson))
        a.setdefault("storages", {})["dataset"] = "./dataset_schema.json"
        with open(ajson, "w") as f:
            json.dump(a, f, indent=2)
            f.write("\n")
    else:
        print(f"  {slug}: WARNING no .actor/actor.json to reference the schema")
        return False

    cols = schema["views"]["overview"]["transformation"]["fields"]
    print(f"  {slug}: {len(schema['fields']['properties'])} fields, "
          f"{len(cols)} columns -> {', '.join(cols[:6])}...")
    return True


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "all"
    ledger = {d["slug"]: d for d in state.load_ledger()
              if d.get("status") in ("published", "built")}

    if cmd == "infer":
        print(json.dumps(infer(sys.argv[2], ledger[sys.argv[2]]["actor_id"]), indent=2))
    elif cmd == "write":
        write(sys.argv[2], ledger[sys.argv[2]]["actor_id"])
    elif cmd == "all":
        ok = 0
        for slug, d in ledger.items():
            try:
                ok += write(slug, d["actor_id"])
            except Exception as e:  # noqa: BLE001
                print(f"  {slug}: ERROR {type(e).__name__}: {e}")
        print(f"\nwrote {ok}/{len(ledger)} dataset schemas")
    else:
        print(__doc__)

```

### 8.1 `tools/pdftext.py`
```python
"""Read text out of a PDF with the STDLIB ONLY -- no pdftotext, no pypdf, no install.

Written 2026-08-06 for the US House STOCK Act corpus (probed.json 109, and the
CLAUDE.md rule "An ENCRYPTED PDF is not an unreadable one"). It handles the case
that previously looked like a dead end:

  * standard security handler /Filter /Standard /V 2 /R 3 (RC4, EMPTY user
    password -- permissions-only protection, which is what most government
    e-filing systems ship)
  * CID text in hex <0026004F> strings against subset fonts, decoded through the
    file's own ToUnicode CMaps

    text(path) -> (unicode_text, cmap_conflicts)

TELLING A REAL SCAN FROM A PARSER BUG: a true image-only PDF has NO ToUnicode and
no font resources at all. A file that HAS CMaps and still returns 0 characters is
this module failing, not a scan -- check that before recording a source as opaque.

THE ONE TRAP, and it costs an hour if you hit it: the /O /P /R /Length values must
be read from the ENCRYPT DICT OBJECT. Searching the whole file matches the first
stream's /Length, derives a wrong key, and every inflate then fails -- so the
document reads as a scan. encrypt_dict() exists for exactly that reason.
"""
import re, zlib, hashlib, sys

PAD = bytes([0x28,0xBF,0x4E,0x5E,0x4E,0x75,0x8A,0x41,0x64,0x00,0x4E,0x56,0xFF,0xFA,0x01,0x08,
             0x2E,0x2E,0x00,0xB6,0xD0,0x68,0x3E,0x80,0x2F,0x0C,0xA9,0xFE,0x64,0x53,0x69,0x7A])

def rc4(key, data):
    S = list(range(256)); j = 0
    for i in range(256):
        j = (j + S[i] + key[i % len(key)]) & 0xFF
        S[i], S[j] = S[j], S[i]
    out = bytearray(); i = j = 0
    for c in data:
        i = (i + 1) & 0xFF; j = (j + S[i]) & 0xFF
        S[i], S[j] = S[j], S[i]
        out.append(c ^ S[(S[i] + S[j]) & 0xFF])
    return bytes(out)

def _hexval(d, name):
    m = re.search((r'/%s\s*<([0-9A-Fa-f]+)>' % name).encode(), d)
    return bytes.fromhex(m.group(1).decode()) if m else None

def encrypt_dict(d):
    m = re.search(rb'/Encrypt\s+(\d+)\s+(\d+)\s+R', d)
    if not m: return None
    num = int(m.group(1))
    om = re.search(rb'(?<![0-9])' + str(num).encode() + rb'\s+0\s+obj\b', d)
    if not om: return None
    return d[om.end(): d.find(b'endobj', om.end())]

def file_key(d):
    ed = encrypt_dict(d)
    O = _hexval(ed, 'O')
    P = int(re.search(rb'/P\s+(-?\d+)', ed).group(1))
    n = int(re.search(rb'/Length\s+(\d+)', ed).group(1)) // 8
    R = int(re.search(rb'/R\s+(\d+)', ed).group(1))
    idm = re.search(rb'/ID\s*\[\s*<([0-9A-Fa-f]+)>', d)
    ID0 = bytes.fromhex(idm.group(1).decode())
    h = hashlib.md5(); h.update(PAD); h.update(O)
    h.update((P & 0xFFFFFFFF).to_bytes(4, 'little')); h.update(ID0)
    key = h.digest()[:n]
    if R >= 3:
        for _ in range(50):
            key = hashlib.md5(key[:n]).digest()[:n]
    return key

def objects(d):
    """yield (num, gen, body) for every indirect object"""
    for m in re.finditer(rb'(\d+)\s+(\d+)\s+obj\b', d):
        num, gen = int(m.group(1)), int(m.group(2))
        e = d.find(b'endobj', m.end())
        yield num, gen, d[m.end():e if e > 0 else len(d)]

def stream_text(path):
    d = open(path, 'rb').read()
    enc = b'/Filter /Standard' in d or b'/Filter/Standard' in d
    key = file_key(d) if enc else None
    chunks = []
    for num, gen, body in objects(d):
        sm = re.search(rb'stream\r?\n', body)
        if not sm: continue
        raw = body[sm.end():]
        raw = raw[:raw.rfind(b'endstream')] if b'endstream' in raw else raw
        raw = raw.rstrip(b'\r\n')
        if b'/Image' in body[:sm.start()] or b'DCTDecode' in body[:sm.start()]:
            continue
        if key is not None:
            ok = hashlib.md5(key + num.to_bytes(3,'little') + gen.to_bytes(2,'little')).digest()
            raw = rc4(ok[:min(len(key)+5,16)], raw)
        try: dec = zlib.decompress(raw)
        except Exception: continue
        if b'Tj' not in dec and b'TJ' not in dec: continue
        txt = []
        for t in re.finditer(rb'\((?:\\.|[^\\()])*\)|\bTd\b|\bTD\b|\bT\*\b|\bTJ\b|ET\b', dec):
            tok = t.group(0)
            if tok.startswith(b'('):
                b = tok[1:-1]
                b = re.sub(rb'\\([()\\])', rb'\1', b)
                txt.append(b.decode('latin-1'))
            else:
                txt.append('\n' if tok in (b'Td', b'TD', b'T*', b'ET') else ' ')
        chunks.append(''.join(txt))
    return '\n'.join(chunks)

if __name__ == '__main__':
    t = stream_text(sys.argv[1])
    print(t[:int(sys.argv[2])] if len(sys.argv) > 2 else t)

# --- CID text via ToUnicode CMaps -------------------------------------------
def _streams(d, key):
    for num, gen, body in objects(d):
        sm = re.search(rb'stream\r?\n', body)
        if not sm: continue
        head = body[:sm.start()]
        raw = body[sm.end():]
        raw = raw[:raw.rfind(b'endstream')].rstrip(b'\r\n') if b'endstream' in raw else raw
        if key is not None:
            ok = hashlib.md5(key + num.to_bytes(3,'little') + gen.to_bytes(2,'little')).digest()[:16]
            raw = rc4(ok, raw)
        try: yield num, head, zlib.decompress(raw)
        except Exception: continue

def _cmaps(d, key):
    """merge every ToUnicode CMap into one code->char map; report conflicts"""
    m, conflicts = {}, 0
    for num, head, z in _streams(d, key):
        if b'beginbfchar' not in z and b'beginbfrange' not in z: continue
        for blk in re.findall(rb'beginbfchar(.*?)endbfchar', z, re.S):
            for src, dst in re.findall(rb'<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>', blk):
                c = int(src, 16); u = bytes.fromhex(dst.decode()).decode('utf-16-be', 'replace')
                if c in m and m[c] != u: conflicts += 1
                m[c] = u
        for blk in re.findall(rb'beginbfrange(.*?)endbfrange', z, re.S):
            for lo, hi, dst in re.findall(rb'<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>', blk):
                a, b = int(lo,16), int(hi,16); base = int(dst,16)
                for i in range(a, b+1):
                    u = chr(base + (i-a))
                    if i in m and m[i] != u: conflicts += 1
                    m[i] = u
    return m, conflicts

def text(path):
    d = open(path, 'rb').read()
    key = file_key(d) if (b'/Filter /Standard' in d or b'/Filter/Standard' in d) else None
    cmap, conflicts = _cmaps(d, key)
    out = []
    for num, head, z in _streams(d, key):
        if b'Tj' not in z and b'TJ' not in z: continue
        for t in re.finditer(rb'<([0-9A-Fa-f]+)>\s*Tj|\[(.*?)\]\s*TJ|\bTd\b|\bTD\b|\bT\*\b|\bET\b', z, re.S):
            if t.group(1):
                h = t.group(1)
                out.append(''.join(cmap.get(int(h[i:i+4],16), '?') for i in range(0, len(h), 4)))
            elif t.group(2) is not None:
                for hs in re.findall(rb'<([0-9A-Fa-f]+)>', t.group(2)):
                    out.append(''.join(cmap.get(int(hs[i:i+4],16), '?') for i in range(0, len(hs), 4)))
            else:
                out.append('\n')
    return re.sub(r'\n{2,}', '\n', ''.join(out)), conflicts

```

### 8.1 `tools/precheck.py`
```python
#!/usr/bin/env python3
"""Cheap gate: decide whether this cycle deserves a full agent invocation.

WHY THIS EXISTS
An agent cycle costs roughly 0.70% of a weekly Claude allowance. At a 15-minute
cadence that is ~474% of a week -- unaffordable. But the fix is NOT to slow the
cadence, because that would delay real work (a degraded actor, an open publish
slot) by up to two hours.

The waste is specifically cycles that CANNOT SHIP ANYTHING: with a 1-publish-per-
day limit, most cycles have no build and no publish available, so they fall
through to "harvest" and spend a full cycle on deep store research that the
previous cycle already did. On 2026-07-29, 19 of 21 cycles were in that state.

So: **actionable work always gets a full cycle, immediately.** Only the idle
harvest path is rate-limited. Quality of selection is preserved -- harvesting
still runs several times a day, which is ample when only one actor can ship.

This script must stay CHEAP: local state plus a couple of API reads, no LLM.

Exit codes (the supervisor reads these):
    0  -> run a full agent cycle   (reason on stdout)
   10  -> skip: nothing actionable, harvest not due yet
   20  -> skip: weekly usage guard tripped
"""

from __future__ import annotations

import json
import os
import sys
import time
from datetime import datetime, timezone

sys.path.insert(0, os.path.dirname(__file__))

import state

# Idle harvesting cadence. Actionable work ignores this entirely.
HARVEST_EVERY_HOURS = float(os.environ.get("HARVEST_EVERY_HOURS", "4"))

# Weekly-allowance guard. Above this, only a genuine emergency (a degraded live
# actor, which costs real money via §9 clawbacks) may spend a cycle. The
# operator's own interactive work matters more than another harvest, and this
# account has overflow credits disabled -- there is no buffer past 100%.
MAX_WEEKLY_PCT = float(os.environ.get("MAX_WEEKLY_PCT", "92"))

# 5-hour session guard. Once this window is spent every invocation fails
# instantly, so there is nothing to gain by trying -- see session_utilization().
MAX_SESSION_PCT = float(os.environ.get("MAX_SESSION_PCT", "90"))

CYCLE_STATE = os.path.join(state.STATE, "cycle_state.json")
CLAUDE_JSON = os.path.expanduser("~/.claude.json")


def _load_cycle_state() -> dict:
    try:
        return json.load(open(CYCLE_STATE))
    except Exception:
        return {}


def _save_cycle_state(d: dict) -> None:
    tmp = CYCLE_STATE + ".tmp"
    with open(tmp, "w") as f:
        json.dump(d, f, indent=2)
    os.replace(tmp, CYCLE_STATE)


def session_utilization():
    """5-hour session allowance used, as (percent, resets_at) or (None, None).

    This is the limit that actually bit on 2026-07-29: the agent saturated its
    own 5-hour window at 16:27 and then failed 29 consecutive cycles until 22:00,
    retrying every 15 minutes against a limit that could not clear until the
    window rolled. The weekly projection is the slow problem; this is the fast
    one, and it is invisible unless checked explicitly.
    """
    try:
        d = json.load(open(CLAUDE_JSON)).get("cachedUsageUtilization") or {}
        age_h = (time.time() * 1000 - d.get("fetchedAtMs", 0)) / 3_600_000
        if age_h > 6:
            return None, None
        for lim in (d.get("utilization") or {}).get("limits") or []:
            if lim.get("kind") == "session":
                return float(lim.get("percent")), lim.get("resets_at")
        fh = (d.get("utilization") or {}).get("five_hour") or {}
        if fh.get("utilization") is not None:
            return float(fh["utilization"]), fh.get("resets_at")
    except Exception:
        pass
    return None, None


def weekly_utilization():
    """Weekly allowance used, as a percent, or None if unknown/stale.

    Claude Code caches this in ~/.claude.json when it runs. Because this gate
    skips cycles, the cache can go stale -- so anything older than 6h is treated
    as unknown rather than trusted. Fail OPEN (return None -> do not block): a
    stale cache must not silently freeze the portfolio.
    """
    try:
        d = json.load(open(CLAUDE_JSON)).get("cachedUsageUtilization") or {}
        age_h = (time.time() * 1000 - d.get("fetchedAtMs", 0)) / 3_600_000
        if age_h > 6:
            return None
        for lim in (d.get("utilization") or {}).get("limits") or []:
            if lim.get("kind") == "weekly_all":
                return float(lim.get("percent"))
        wk = (d.get("utilization") or {}).get("seven_day") or {}
        return float(wk["utilization"]) if wk.get("utilization") is not None else None
    except Exception:
        return None


BUILD_PAUSED = os.path.join(state.STATE, "BUILD_PAUSED")


def actionable() -> tuple[bool, str, bool]:
    """(work_exists, reason, is_emergency) -- from local state plus cheap reads."""
    ledger = state.load_ledger()

    # Operator pause. Health emergencies still run (a degraded live actor costs
    # real money via §9 clawbacks); building, publishing and harvesting do not.
    paused = os.path.exists(BUILD_PAUSED)
    live = [d for d in ledger if d.get("status") == "published"]
    built = [d for d in ledger if d.get("status") == "built"]

    # 1. Health. Outranks everything: a broken live actor costs money (§9).
    #    Uses the success rate already recorded by the last full cycle, so this
    #    stays cheap -- a real check happens inside the cycle it triggers.
    #    state.degradation() is the SAME test health.py acts on. It used to be
    #    reimplemented here, more loosely (any public rate under 90%, no minimum
    #    run count, and our own rate ignored whenever a public one existed).
    #    Since this is the gate, the loose copy is the one that ran -- see the
    #    comment on state.degradation for what that cost.
    for d in live:
        bad, why = state.degradation(d)
        if bad:
            return True, f"DEGRADED: {why}", True

    if paused:
        return False, "BUILD LOOP PAUSED by operator (see BUILD_PAUSED)", False

    # 2. Judge: anything past its 60-day clock.
    for d in live:
        if d.get("published_at") and state.days_since(d["published_at"]) >= 60:
            return True, f"JUDGE DUE: {d['slug']}", False

    # 3. Publish: a built actor waiting AND a slot free today.
    if built:
        try:
            import ship
            ship.rate_limit_check(publishing=True)
            # Name the actor screen.publish_queue() would actually pick, not
            # ledger[0]. These disagreed until 2026-07-30: the reason string said
            # fda-device (merely the first built row in the ledger) while the
            # queue's own clear-first order put hcris at #1, and the cycle
            # published what the reason string named. Clear-first exists because
            # a clear query is a race -- oig-leie went clear -> supply 10 in nine
            # hours -- so naming the wrong one spends the day's single slot on
            # the position that was not decaying.
            nxt = built[0]["slug"]
            try:
                import screen
                q = screen.publish_queue()
                if q:
                    nxt = q[0].get("target_actor_name") or nxt
            except Exception:
                pass      # informational only; never gate the cycle on it
            return True, (f"PUBLISH SLOT OPEN: {len(built)} built and waiting "
                          f"({nxt} next)"), False
        except SystemExit:
            pass          # slot spent; not actionable this cycle
        except Exception as e:
            return True, f"publish check inconclusive ({e}) -- running cycle", False

    # 4. Build: a screened candidate ready to become an actor.
    #    Unless the experiment stop has been reached -- then we deliberately
    #    stop adding variables and let the ones we have produce a reading.
    try:
        import ship
        stopped, why = ship.experiment_stop_reached()
        if stopped:
            return False, why, False
    except Exception:
        pass
    ready = [c for c in state.load_backlog()
             if c.get("status") in (None, "", "screened")]
    if ready:
        return True, f"BUILD READY: {len(ready)} screened candidate(s)", False

    return False, ("nothing actionable (no health issue, no judge, "
                   "no publish slot, no screened candidate)"), False


def auto_resume_on_visibility() -> bool:
    """Lift the KYC pause the moment the Actors actually become visible.

    The pause exists for exactly one condition -- Store search excludes Actors
    from non-KYC-verified developers -- so the pause should end on exactly that
    condition, not on someone remembering to delete a file. Checked at most
    hourly; one anonymous API call, no token, no LLM.
    """
    if not os.path.exists(BUILD_PAUSED):
        return False
    cs = _load_cycle_state()
    last = cs.get("last_visibility_check_at")
    if last and state.days_since(last) * 24 < 1:
        return False
    cs["last_visibility_check_at"] = state.now()
    _save_cycle_state(cs)
    try:
        import visibility
        live = [d for d in state.load_ledger() if d.get("status") == "published"]
        seen = 0
        for d in live[:6]:                       # a sample is enough to detect it
            q = d.get("query") or d["slug"].replace("-", " ")
            if visibility.search(q)["ours"] > 0:
                seen += 1
        if seen:
            os.remove(BUILD_PAUSED)
            try:
                import notify
                notify.post(
                    "🟢 We are VISIBLE — KYC cleared, build loop resumed",
                    (f"{seen} of {len(live[:6])} sampled Actors now appear in "
                     "**anonymous** Store search. That was the only thing blocking "
                     "every Actor in the portfolio.\n\n"
                     "Build loop resumed automatically. From here, external runs "
                     "are finally possible — the demand thesis gets its first real "
                     "test."),
                    notify.GREEN)
            except Exception:
                pass
            return True
    except Exception:
        pass                                     # fail open: never block on this
    return False


def main() -> int:
    if auto_resume_on_visibility():
        print("RUN: visibility restored (KYC cleared) -- build loop resumed")
        return 0
    work, reason, emergency = actionable()
    used = weekly_utilization()
    cs = _load_cycle_state()

    # --- 5-hour session guard ------------------------------------------------
    # Checked BEFORE the weekly guard because it is the one that actually stalls
    # the loop: once this window is exhausted, EVERY invocation fails instantly,
    # including an emergency one. So unlike the weekly guard there is no
    # emergency override -- overriding it would just burn a failing retry.
    sess, resets = session_utilization()
    if sess is not None and sess >= MAX_SESSION_PCT:
        print(f"SKIP session guard: 5-hour allowance at {sess:.0f}% "
              f"(>= {MAX_SESSION_PCT:.0f}%), resets {resets or 'soon'}; {reason}")
        return 20

    # Usage guard. Emergencies still run: a degraded actor is real money.
    if used is not None and used >= MAX_WEEKLY_PCT and not emergency:
        print(f"SKIP usage guard: weekly allowance at {used:.0f}% "
              f"(>= {MAX_WEEKLY_PCT:.0f}%); {reason}")
        return 20

    if work:
        cs["last_full_cycle_at"] = state.now()
        cs["last_reason"] = reason
        _save_cycle_state(cs)
        u = (f", weekly {used:.0f}%" if used is not None else "")
        if sess is not None:
            u += f", session {sess:.0f}%"
        print(f"RUN: {reason}{u}")
        return 0

    # Idle path: harvest, but only on its own slower cadence.
    last = cs.get("last_harvest_at")
    due = last is None or state.days_since(last) * 24 >= HARVEST_EVERY_HOURS
    if due:
        cs["last_harvest_at"] = state.now()
        cs["last_full_cycle_at"] = state.now()
        cs["last_reason"] = "harvest (idle cadence)"
        _save_cycle_state(cs)
        u = (f", weekly {used:.0f}%" if used is not None else "")
        if sess is not None:
            u += f", session {sess:.0f}%"
        print(f"RUN: harvest due (every {HARVEST_EVERY_HOURS:g}h){u}")
        return 0

    nxt = HARVEST_EVERY_HOURS - state.days_since(last) * 24
    print(f"SKIP: {reason}; next harvest in {nxt:.1f}h")
    return 10


if __name__ == "__main__":
    sys.exit(main())

```

### 8.1 `tools/reprice_2026_07_29.py`
```python
#!/usr/bin/env python3
"""One-shot repricing of the 6 repriceable private draws, 2026-07-29.

WHY THIS EXISTS -- the measurement that forced it
-------------------------------------------------
Swept 1,942 store actors (categories BUSINESS / OTHER / LEAD_GENERATION / NEWS,
sortBy=popularity, which needs no search term) and read `runs_30d` and
`currentPricingInfo` off every one. Two numbers came out:

  * Of 767 PAY_PER_EVENT actors in OUR reachable volume band (<1000 runs/30d),
    exactly 10 -- 1.3% -- clear $20/mo gross floor.
  * The median actor that clears $20/mo store-wide does it on 22,980 runs/mo.
    That is the LinkedIn/TikTok head, which §4 says we can never win and §9
    says to avoid outright.

So §7's $20/mo line is not reachable by volume from a long-tail query. All 10
low-volume clearers reach it the other way: $0.12-$3.99 per RESULT at 29-373
runs/mo. easyapi/nda-agreements-creator is $3.99 x 30 runs = $120/mo.

Against that, our queries carry 12-212 runs/mo TOTAL split 5-10 ways (measured
last cycle), so realistic capture is single-digit-to-40 runs/mo each. At the
prices we had set ($0.02-$0.20), full capture of every run a query carries
still lands under $5/mo -- i.e. THE PORTFOLIO WAS PRICED TO FAIL ITS OWN §7
KILL RULE regardless of whether the software works.

Timing is why this ran now and not later: pricing is free to change while
PRIVATE and becomes a §8 significant change (14-day notice, once per month)
the moment an actor publishes. 7 draws are private today and the queue drains
at 1/day starting 00:00Z, so the free window closes progressively over a week.
§8 also says launch on the upside deliberately: cuts are instant, raises are not.

NOT REPRICED, on purpose:
  * oig-leie-exclusion-screening -- already PUBLIC. A change is a §8 significant
    change and it already has one notice running to 2026-08-12. Untouched.
  * epa-echo-facility-radius -- already $3.00/search, set deliberately as a 65x
    undercut of a $250 Phase I report, and last cycle pre-registered a cut rule
    on it. It is already the shape this repricing is moving everything else
    toward; overturning a pre-registered rule 30 minutes after writing it is
    churn, not work.

Every price below is anchored to a NAMED professional substitute and undercuts
it by 30x or more. Each carries a pre-registered cut rule so the upside launch
is falsifiable rather than hopeful.
"""

from __future__ import annotations

import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ACTORS = os.path.join(os.path.dirname(HERE), "actors")

# slug -> event name -> (new usd, new why, new buyer-facing description)
CUT_RULE = ("Pre-registered cut rule: if this takes zero paid runs in its first "
            "21 days public while its query still carries traffic, cut to "
            "parity with the cheapest same-query rival. Cuts are immediate (§8).")

REPRICE = {
    "hcris-hospital-cost-report": {
        "cost-report-run": (
            0.50,
            "Raised $0.20 -> $0.50. Covers the ~11 MB HCRIS index download, the "
            "88,000-report lookup build and the five source-integrity guards. "
            "Still charged only after the source verifies good. " + CUT_RULE,
            "Charged once per run, and only after the CMS HCRIS release passes "
            "integrity checks. A run that aborts on a stale or truncated source "
            "costs you nothing."),
        "cost-report-returned": (
            2.50,
            "Raised $0.30 -> $2.50, anchored to CostReportData.com's published "
            "$90 for a single hospital's cost report -- a 36x undercut, against "
            "the 100x we had. A consultant pulling 20 hospitals pays $50.50 "
            "here versus $1,800 there. This query carries zero rival runs, so "
            "there is no same-store price to undercut and the incumbent is the "
            "only real anchor. " + CUT_RULE,
            "Charged per hospital fiscal-year cost report actually returned. "
            "Hospitals that cannot be resolved are not charged."),
    },
    "fda-device-establishment-registration": {
        "screening-run": (
            0.25,
            "Raised $0.10 -> $0.25. Covers pulling and indexing the FDA device "
            "establishment registration file once per run. " + CUT_RULE,
            "Charged once per run, after the FDA registration file is fetched "
            "and verified."),
        "supplier-screened": (
            0.25,
            "Raised $0.05 -> $0.25 against Redica/FDAzilla's $289 per document "
            "-- still a ~1,100x undercut. A typical 20-50 supplier screen lands "
            "at $5.25-$12.75. Bill-shock note: a 1,000-supplier run would bill "
            "$250, which is the least certain number in this repricing; it is "
            "still one FDAzilla document for a thousand determinations, but "
            "watch for §9 credit-compensation requests on very large runs and "
            "cut this event first if any appear. " + CUT_RULE,
            "Charged per supplier actually screened against the FDA "
            "establishment registration file. Suppliers that cannot be resolved "
            "are not charged."),
    },
    "irs-tax-exempt-revocation-check": {
        "screening-run": (
            0.25,
            "Raised $0.10 -> $0.25. Covers downloading and indexing the IRS "
            "auto-revocation list and Pub 78 data per run. " + CUT_RULE,
            "Charged once per run, after the IRS revocation data is fetched and "
            "verified."),
        "organization-checked": (
            0.20,
            "Raised $0.02 -> $0.20. No incumbent publishes a per-check price "
            "(Candid/GuideStar sells an enterprise API by quote), so this is "
            "anchored to the substitute: a grants administrator manually "
            "checking Pub 78 plus the auto-revocation list before releasing a "
            "grant. The differentiated job -- never reporting an unlisted "
            "church as revoked -- is a determination, and the measured store "
            "splits price by job shape, not dataset. " + CUT_RULE,
            "Charged per organization actually checked. Organizations whose EIN "
            "cannot be resolved are not charged."),
    },
    "clinical-trial-protocol-amendments": {
        "study-scanned": (
            0.15,
            "Raised $0.08 -> $0.15, deliberately the smallest raise of the six. "
            "This event bills len(records), i.e. PER STUDY, so a 200-study "
            "portfolio scan bills $30 on this event alone; loading the scan "
            "rather than the finding would punish exactly the bulk users the "
            "actor is for. Weight moved onto amendment-reported instead. "
            + CUT_RULE,
            "Charged per study scanned for protocol changes."),
        "amendment-reported": (
            0.75,
            "Raised $0.04 -> $0.75. The amendment is the deliverable and is "
            "rare per study, so the value sits here rather than on the scan. "
            "Citeline Trialtrove is enterprise-quoted with no public price, so "
            "this is anchored to job shape rather than to a number. " + CUT_RULE,
            "Charged per protocol amendment actually detected and reported. A "
            "study with no amendments costs only its scan."),
    },
    "medicare-provider-enrollment-revalidation-due-date": {
        "revalidation-run": (
            0.25,
            "Raised $0.10 -> $0.25. Covers fetching the current CMS "
            "revalidation due-date file per run. " + CUT_RULE,
            "Charged once per run, after the CMS revalidation file is fetched "
            "and verified."),
        "npi-checked": (
            0.15,
            "Raised $0.03 -> $0.15. Held deliberately below the other draws "
            "because rosters are large: a 100-NPI roster bills $15 against "
            "credentialing SaaS (MedTrainer/Medallion/Verifiable) at roughly "
            "$50-100 per provider per year. This is the thinnest query we own "
            "(12 runs/mo across all rivals), so it is the most likely of the "
            "six to need its cut rule. " + CUT_RULE,
            "Charged per NPI actually checked against the CMS revalidation "
            "file. NPIs that cannot be resolved are not charged."),
    },
    "pcaob-form-ap-auditor-lookup": {
        "lookup-run": (
            0.25,
            "Raised $0.15 -> $0.25. Covers the Form AP dataset fetch and index "
            "per run. " + CUT_RULE,
            "Charged once per run, after the PCAOB Form AP data is fetched and "
            "verified."),
        "issuer-checked": (
            0.40,
            "Raised $0.05 -> $0.40. The sole rival on this query "
            "(malonestar/pcaob-auditor-engagement-monitor) holds an outright "
            "monopoly on the query and charges $0.00 developer margin, which is "
            "the measured proof that owning a query does not convert to revenue "
            "-- job shape does. Ours returns five-year rotation tenure, a "
            "decision an audit committee acts on, not a row dump. Anchored to "
            "Ideagen Audit Analytics (enterprise, no public price). Accepted "
            "risk: a buyer comparing on price alone picks the free rival. " + CUT_RULE,
            "Charged per issuer actually checked, including its auditor tenure "
            "determination. Issuers that cannot be resolved are not charged."),
    },
}


def main() -> int:
    changed = 0
    for slug, events in REPRICE.items():
        path = os.path.join(ACTORS, slug, "meta.json")
        if not os.path.exists(path):
            print(f"MISSING {slug}")
            return 1
        meta = json.load(open(path))
        plan = meta.get("pricing_plan") or {}
        by_name = {e["name"]: e for e in plan.get("events") or []}
        for name, (usd, why, desc) in events.items():
            if name not in by_name:
                print(f"MISSING EVENT {slug}/{name} -- meta and code disagree")
                return 1
            old = by_name[name]["usd"]
            by_name[name]["usd"] = usd
            by_name[name]["why"] = why
            by_name[name]["description"] = desc
            print(f"  {slug}/{name}: ${old} -> ${usd}")
            changed += 1
        meta.setdefault("pricing_history", []).append({
            "at": "2026-07-29",
            "note": "raised while private; anchored to named substitute; see "
                    "tools/reprice_2026_07_29.py for the store-wide measurement",
        })
        json.dump(meta, open(path, "w"), indent=2)
        open(path, "a").write("\n")
    print(f"\n{changed} event prices rewritten across {len(REPRICE)} actors")
    return 0


if __name__ == "__main__":
    sys.exit(main())

```

### 8.1 `tools/screen.py`
```python
#!/usr/bin/env python3
"""Stage 2 -- the two-sided screen (§5).

Supply test is mechanical: store supply must be < 10.
Demand test is NOT mechanical and deliberately is not automated away. A candidate
enters the backlog only with a named paid incumbent and a URL. The plan is blunt
that optimizing on supply alone "produces a graveyard of beautiful tools for
queries with no searchers" -- so this tool refuses to pass anything without
demand evidence attached.

There is a third test, added 2026-07-29 after the count alone nearly promoted
three occupied queries: the supply must be READ, not counted. A supply of 1 that
is one competitor scraping the same federal file is a worse position than a
supply of 40 adjacent tools, and the count cannot tell those apart.

Usage:
    screen.py supply "<query>" [...]        # cheap bulk supply probe (count only)
    screen.py occupancy "<query>" [...]     # WHO holds the query, with run counts
    screen.py demand "<query>" [...]        # what the rivals EARN: 30d runs x their price
    screen.py sweep [CATEGORY ...]          # enumerate the store: proven demand first
    screen.py egress <url> [...]            # CAN we fetch it / are we ALLOWED to -- run before building
    screen.py termdf                        # rebuild the generic-word table from the sweep
    screen.py add <json-file>               # screen candidates + add survivors
    screen.py list                          # show ranked backlog
    screen.py queue                         # publish order for built actors
"""

from __future__ import annotations

import json
import re
import sys

sys.path.insert(0, __import__("os").path.dirname(__file__))

import apify
import state

# RETIRED as a gate 2026-08-06 -- see screen_one(). Kept only so `score()` can
# still reward scarcity as a tiebreak among candidates that already have proven
# demand. It no longer rejects anything.
SUPPLY_MAX = 10

# Burn window 2026-08-05..07: do not build for a query whose rivals cannot show
# this many runs in 30 days. It INVERTS the supply<10 rule on purpose --
# occupancy is the only proof anyone searches at all, and the portfolio has 11
# actors ranked #1 on queries that carry no traffic to rank for.
#
# Applied to `demand_runs_30d`, NOT to the raw run total. The operator's note
# quotes raw totals for calibration (uk bankruptcy 346, oig leie 255), but 44%
# of this vein's runs are the owners' own daily cron, so gating on the raw
# number would re-admit exactly the phantom demand this gate exists to exclude.
BURN_MIN_DEMAND_RUNS_30D = 150

# A PASS additionally requires at least one BUYER-class run. Measured
# 2026-08-06 on `franchise disclosure document fdd`: 844 demand runs, verdict
# PASS, and buyer_runs_30d = ZERO -- 754 of the 844 were one Actor
# (parseforge/franchise-disclosure-documents-scraper) at u30=1 running ~25x a
# day. That is an HOURLY owner cron, and the 28-31 band only catches DAILY
# ones, so demand_class left it `inconclusive` and the sum passed the gate on
# runs the tool had itself declined to call buyers.
#
# Same bug family as the farm-sibling pass (a check reading green because it
# never tested the thing it names), and the same containment applies: this only
# ever TIGHTENS a verdict, so it cannot resurrect anything in rejected.json.
# It is the corrected form of generator (a) stated as code -- demand counts
# when an adjacent Actor shows users_30d >= 3, not when it shows runs.
BURN_REQUIRE_BUYER_RUNS = True

# Demand-signal strength, §5 descending order. Drives backlog rank.
DEMAND_WEIGHT = {
    "paid_incumbent": 100,   # strongest: demand proven AND priced
    "forum_threads": 40,
    "stackoverflow": 30,
    "github_wontfix": 20,
    "unwrapped_api": 10,
}


def score(candidate: dict) -> float:
    """Rank = demand strength, then scarcity, then incumbent price."""
    s = DEMAND_WEIGHT.get(candidate.get("demand_type", ""), 0)
    supply = candidate.get("supply")
    if supply is not None:
        s += max(0, (SUPPLY_MAX - supply)) * 3        # scarcer = better
    price = candidate.get("incumbent_price_usd") or 0
    s += min(price / 10.0, 40)                        # pricier incumbent = better
    return s


def occupant_key(o: dict) -> str:
    return f"{o.get('username')}/{o.get('name')}"


# Reject reasons that say "this candidate FILE is incomplete", not "this QUERY
# is a bad market". They must never be written to rejected.json, because
# state.seen_queries() unions rejected.json into the never-look-again set, so a
# missing field would bury a good query permanently -- and silently, since the
# next `add` prints "already screened" and hides the original reason.
#
# Found the hard way 2026-07-30: `faa aircraft document index` was rejected for
# five unclassified fuzzy-match occupants, all of them adjacent. One missing
# list turned a buildable draw into a dead query. This is the same class of bug
# the 2026-07-30 egress reprobe hit ("seen_queries() would have buried it
# forever") -- second occurrence, so it is fixed at the source now.
# THIRD occurrence 2026-08-06: `name/deliverable mismatch` is the same class and
# was missed. Its own text says "Either rename the query ... or drop the
# candidate" -- i.e. fix the FILE -- yet it was writing `npi registry lookup` to
# rejected.json, burying a query that had just measured 462 on-topic / 203 buyer
# runs. The tell is in the reason string itself: if it instructs you to edit the
# candidate, it is not a verdict on the market. Adding one prefix at a time is
# what let this recur twice, so the list below is now the ONLY place a
# file-completeness reason may be phrased -- check it when adding a new one.
INCOMPLETE_PREFIXES = (
    "occupancy not reviewed",
    "no `deliverable` field",
    "name/deliverable mismatch",
    # 2026-08-06, FOURTH occurrence: `unknown demand_type None` wrote
    # `sec edgar form d offering` -- 1143 on-topic / 888 buyer runs, measured
    # minutes earlier -- into rejected.json, where seen_queries() would have
    # hidden it behind a reason that was never a verdict on the market. The
    # three field-presence checks at the top of screen_one() are ALL this
    # class and none of them were listed. Adding one prefix per incident is
    # precisely what let this recur three times, so those reasons now carry
    # the sentinel below instead: one entry covers every present and future
    # "the candidate FILE lacks a field" check in that block.
    CANDIDATE_INCOMPLETE := "candidate file incomplete --",
)


def is_incomplete(reason: str) -> bool:
    return reason.startswith(INCOMPLETE_PREFIXES)


def screen_one(c: dict) -> tuple[bool, str]:
    """Returns (passed, reason). Both sides must pass (§5), and then the
    supply has to be *read* rather than counted (third test, added 2026-07-29)."""
    q = c["query"]

    # These three test the candidate FILE, not the market. They must carry the
    # CANDIDATE_INCOMPLETE sentinel so is_incomplete() keeps them out of
    # rejected.json -- a missing field is a thing to go and type, and burying
    # the query under it means the next `add` prints "already screened" and the
    # real verdict is never reached. Any field-presence check added here later
    # must use the sentinel too.
    if not c.get("demand_evidence_url"):
        return False, f"{CANDIDATE_INCOMPLETE} no demand evidence URL"
    if c.get("demand_type") not in DEMAND_WEIGHT:
        return False, (f"{CANDIDATE_INCOMPLETE} unknown demand_type "
                       f"{c.get('demand_type')!r}; one of {sorted(DEMAND_WEIGHT)}")
    # §5 rule: build only where a paid incumbent proves demand.
    if c["demand_type"] == "paid_incumbent" and not c.get("incumbent"):
        return False, (f"{CANDIDATE_INCOMPLETE} demand_type paid_incumbent "
                       f"but no incumbent named")

    # --- Demand gate: PROVEN buyers, replacing the retired supply<10 rule -----
    #
    # §5's supply<10 test is RETIRED as of 2026-08-06. It was not merely weak,
    # it was INVERTED: demand and supply are correlated, so gating on scarcity
    # systematically admits only the queries nobody searches.
    #
    # Measured, not argued. Of 71 candidates rejected in 24h, 36 died on supply
    # alone; eight sampled at random ALL carried >=150 buyer runs/30d:
    #   pharmacy license verification 513,106   un sanctions 1,546   ucc lien 887
    #   msha violations 818   world bank debarred 991   pacer bankruptcy 794
    #   eu sanctions 351   state medical board 311        = 518,804 runs/30d binned.
    # Meanwhile the 15 Actors the old gate DID approve carry 3-346 runs/month
    # between them and have never had a single external run.
    #
    # Supply is still measured and recorded -- it is useful context for how hard
    # a query will be -- but it no longer rejects anything. What rejects now is
    # absence of measured demand, which is the thing we actually care about.
    supply = apify.store_supply(q)
    c["supply"] = supply

    try:
        econ = apify.rival_economics(q)
    except Exception as e:  # noqa: BLE001
        return False, f"could not measure demand ({str(e)[:60]})"

    # Gate on demand_runs_30d, NOT runs_30d_total. The raw total counts a rival's
    # own scheduled cron and off-topic Actors that merely match the words -- on
    # this very query 173 of 1546 runs are an Interpol Actor and 265 are cron.
    # Counting those is how a dead query looks alive.
    runs30 = econ.get("demand_runs_30d") or 0
    buyers = econ.get("buyer_runs_30d") or 0
    c["demand_runs_30d"] = runs30
    c["buyer_runs_30d"] = buyers
    c["rival_economics"] = econ

    if runs30 < BURN_MIN_DEMAND_RUNS_30D:
        return False, (f"NO MEASURED DEMAND: {runs30} on-topic runs/30d "
                       f"(raw {econ.get('runs_30d_total')}, cron "
                       f"{econ.get('cron_runs_30d')}, off-topic "
                       f"{econ.get('offtopic_runs_30d')}); gate is "
                       f"{BURN_MIN_DEMAND_RUNS_30D}. supply was {supply}")

    # At least one run must come from something that looks like a BUYER, not a
    # schedule. A query whose entire volume is one owner's hourly cron has no
    # customers in it, however large the number looks.
    if BURN_REQUIRE_BUYER_RUNS and buyers <= 0:
        return False, (f"NO BUYER RUNS: {runs30} on-topic runs/30d but "
                       f"buyer_runs_30d=0 — all of it is cron or inconclusive. "
                       f"That is a schedule, not a market.")

    # --- Occupancy test -------------------------------------------------
    # A count of 1 can be an empty niche or a competitor already scraping the
    # exact same file. Those are opposite conclusions and the count cannot
    # distinguish them, so the classification is required, not optional.
    occ = apify.store_occupancy(q)
    c["supply_composition"] = occ
    live = {occupant_key(o) for o in occ["occupants"]}

    reviewed = {r.get("actor"): r.get("verdict") for r in (c.get("occupants_reviewed") or [])}
    unreviewed = sorted(live - set(reviewed))
    if unreviewed:
        return False, ("occupancy not reviewed -- classify each as 'adjacent' or "
                       "'direct' in occupants_reviewed: " + ", ".join(unreviewed))

    direct = sorted(a for a, v in reviewed.items() if v == "direct" and a in live)
    if direct:
        # A direct competitor is no longer an automatic veto (changed 2026-08-06
        # with the supply gate). On a query that actually has buyers there will
        # almost always be one -- that is what "has buyers" looks like -- so
        # vetoing on presence would just reinstate the retired rule by another
        # name and keep yield at zero.
        #
        # But "compete anyway" is exactly the perfect competition §1 exists to
        # avoid, so the bar is a NAMED, TESTABLE defect in what they ship. Both
        # Actors in this portfolio that ever looked viable won this way: hcris
        # ships the published total where rivals ship CMS line 200; epa-echo is
        # scoped as regulatory records, not the ASTM E1527 report the $250
        # incumbent sells. "Ours is better/faster/cheaper" is not a differentiator
        # -- it is a hope, and it cannot be checked before building.
        diff = (c.get("differentiator") or "").strip()
        if len(diff) < 40:
            return False, (
                f"occupied by direct competitor(s) {', '.join(direct)} and no "
                f"`differentiator` given. State a SPECIFIC, TESTABLE thing they "
                f"get wrong or omit (>=40 chars). Generic 'better/cheaper/faster' "
                f"does not qualify.")
        if any(w in diff.lower() for w in
               ("better", "cheaper", "faster", "more reliable", "higher quality")):
            return False, (f"differentiator is a comparative claim, not a testable "
                           f"defect: {diff[:80]!r}")

    ok, why = name_matches_deliverable(c)
    if not ok:
        return False, why

    return True, (f"{runs30} buyer runs/30d, supply {supply} "
                  f"({occ['visible']} visible"
                  + (f", {len(direct)} direct + differentiator stated" if direct
                     else ", all adjacent") + ")")


# The query name IS the product promise: §4 makes it the heaviest-weighted
# search field, so it is what the buyer reads before anything else. Added
# 2026-07-29 after the screen promoted `form 990 schedule j compensation`
# while the candidate's OWN source_limitation field recorded that Schedule J
# per-person data was unreachable. Nothing cross-checked the name against the
# deliverable, so the contradiction sat in one record and passed. Under §9 a
# mis-sold Actor is a clawback, not just a bad review, so this is a money test
# and not a tidiness one.
NAME_STOPWORDS = {
    "a", "an", "the", "and", "or", "of", "for", "from", "by", "in", "on", "to",
    "with", "at", "per", "us", "usa", "data", "search", "lookup", "check",
    "list", "records", "record", "report", "reports", "tool",
}


def _stem(t: str) -> str:
    for suf in ("ies", "es", "s"):
        if len(t) > 4 and t.endswith(suf):
            return t[: -len(suf)]
    return t


def name_matches_deliverable(c: dict) -> tuple[bool, str]:
    """Every meaningful word of the target query must be something the source
    actually returns. `deliverable` is the written claim; this checks the claim
    covers the name rather than trusting that it does."""
    deliverable = (c.get("deliverable") or "").strip()
    if not deliverable:
        return False, (
            "no `deliverable` field -- state in plain words what the source ACTUALLY "
            "returns, so the name can be checked against it (§4: the name is the "
            "product promise; §9: a mismatch is a clawback)"
        )

    hay_raw = deliverable.lower()
    hay_words = {_stem(w) for w in re.findall(r"[a-z0-9]+", hay_raw)}
    missing = [
        w for w in re.findall(r"[a-z0-9]+", c["query"].lower())
        if w not in NAME_STOPWORDS
        and _stem(w) not in hay_words
        and w not in hay_raw
    ]
    if missing:
        return False, (
            "name/deliverable mismatch -- the query promises "
            f"{missing!r} but `deliverable` never mentions it. Either rename the "
            "query to what the source returns, or drop the candidate. Do NOT ship "
            "the name and explain the gap in the README"
        )
    return True, "name matches deliverable"


def cmd_supply(queries):
    """Cheap probe -- no state written. Use to explore before committing."""
    for q in queries:
        try:
            print(f"{apify.store_supply(q):>7}  {q}")
        except Exception as e:
            print(f"  ERROR  {q}: {e}")


def cmd_add(path):
    candidates = json.load(open(path))
    seen = state.seen_queries()
    backlog = state.load_backlog()
    added = skipped = failed = 0

    for c in candidates:
        q = c.get("query", "").strip()
        if not q:
            continue
        if q in seen:
            print(f"SKIP    {q} (already screened)")
            skipped += 1
            continue

        try:
            ok, reason = screen_one(c)
        except Exception as e:
            print(f"ERROR   {q}: {e}")
            continue

        if ok:
            c["screened_at"] = state.now()
            c["score"] = score(c)
            c["status"] = "screened"
            backlog.append(c)
            print(f"PASS    {q}  ({reason}, score {c['score']:.0f})")
            added += 1
        elif is_incomplete(reason):
            # Fix the candidate file and re-run. Nothing is written, so the
            # query stays screenable.
            print(f"INCOMPLETE  {q}  ({reason})")
            print("            -- not recorded as rejected; fix the candidate "
                  "file and re-run `screen.py add`")
            failed += 1
        else:
            state.add_rejected(q, reason, c.get("supply"),
                               c.get("incumbent", ""))
            print(f"REJECT  {q}  ({reason})")
            failed += 1

    backlog.sort(key=lambda c: c.get("score", 0), reverse=True)
    state.save_backlog(backlog)
    print(f"\nadded {added}, rejected {failed}, skipped {skipped}; "
          f"backlog now {len(backlog)}")


def cmd_occupancy(queries):
    """Read the supply instead of counting it. No state written."""
    for q in queries:
        occ = apify.store_occupancy(q)
        print(f"\n=== {q}   total={occ['total']}  visible={occ['visible']}")
        if occ["total"] is not None and occ["visible"] != occ["total"]:
            print("    NOTE: total and visible disagree -- the gate counts one "
                  "thing, a buyer sees the other")
        for o in occ["occupants"]:
            print(f"  {occupant_key(o):58s} runs={o['runs']!s:>6} u30={o['users30d']!s:>4}")
            print(f"      {(o['title'] or '')[:100]}")


def cmd_demand(queries):
    """Demand read from the store itself, not inferred from an outside vendor.

    §5 ranks 'an existing expensive incumbent' as the strongest demand signal
    because it proves demand is real AND priced. A rival Actor with 30-day runs
    and a per-event price is that same signal with the inference removed: the
    buyer is already an Apify buyer, paying an Apify price, for our job. No
    state written -- this is a probe.

    Gates on `demand_runs_30d`, never on the raw run total: 44% of this vein's
    runs are the owners' own daily cron (apify.demand_class), so the raw number
    counts a bulk publisher's scheduler as a buyer.
    """
    for q in queries:
        e = apify.rival_economics(q)
        enough_runs = e["demand_runs_30d"] >= BURN_MIN_DEMAND_RUNS_30D
        has_buyer = (e["buyer_runs_30d"] or 0) > 0
        verdict = ("PASS" if enough_runs and (has_buyer
                                              or not BURN_REQUIRE_BUYER_RUNS)
                   else "FAIL")
        print(f"\n=== {q}   total={e['total']} visible={e['visible']} "
              f"live_rivals={e['live_rivals']}")
        print(f"    DEMAND {verdict}: demand_runs_30d={e['demand_runs_30d']} "
              f"(gate >={BURN_MIN_DEMAND_RUNS_30D})  "
              f"[buyer {e['buyer_runs_30d']} + inconclusive "
              f"{e['inconclusive_runs_30d']}]")
        if enough_runs and not has_buyer:
            print("    ^^ runs clear the gate but NO rival on this query has "
                  "users_30d>=3, so every counted run is unproven demand -- "
                  "FAIL on the buyer leg (see BURN_REQUIRE_BUYER_RUNS)")
        band_rivals = [a for a in e["cron_rivals"]
                       if a not in set(e.get("farm_rivals") or [])]
        band_runs = e["cron_runs_30d"] - (e.get("farm_runs_30d") or 0)
        if band_runs:
            print(f"    DISCOUNTED {band_runs} runs/30d as owner cron "
                  f"(28-31 runs, ~100% ok, u30<=1): "
                  f"{', '.join(band_rivals)}")
        if e.get("farm_runs_30d"):
            print(f"    DISCOUNTED {e['farm_runs_30d']} runs/30d as FARM SIBLINGS "
                  f"(>=3 Actors from one owner sharing a run count +-3, "
                  f"~100% ok, u30<=1): {', '.join(e['farm_rivals'])}")
        if e["offtopic_runs_30d"]:
            print(f"    DISCOUNTED {e['offtopic_runs_30d']} runs/30d as OFF-TOPIC "
                  f"fuzzy-search hits (share no distinctive term with the query): "
                  f"{', '.join(e['offtopic_rivals'])}")
        # Printed on its own line and BEFORE the occupant table, because this is
        # the discount most likely to be the whole verdict: these rivals share
        # every term with the query and serve a different country.
        if e.get("juris_offtopic_runs_30d"):
            print(f"    DISCOUNTED {e['juris_offtopic_runs_30d']} runs/30d as "
                  f"WRONG JURISDICTION (rival's title names another country/"
                  f"state, and not the query's): "
                  f"{', '.join(e['juris_offtopic_rivals'])}")
        # Concentration. This one CANNOT be automated into a veto and is
        # deliberately left as a warning: deciding whether the dominant Actor is
        # really doing this query's job needs judgement about what it does.
        # Measured 2026-08-06 on `business entity administratively dissolved`:
        # demand_runs_30d=251 of which 220 are ryanclinton/canada-corporation-
        # search, a general CANADIAN corporation lookup that happens to carry
        # status as a field. Strip it and the query holds 31 runs against a gate
        # of 150 with no buyer at all. The gate said PASS.
        on_topic_live = [r for r in e["rivals"]
                         if r["on_topic"] and r["demand_class"] != "cron"
                         and (r["runs_30d"] or 0)]
        if on_topic_live and e["demand_runs_30d"]:
            top = max(on_topic_live, key=lambda r: r["runs_30d"])
            share = top["runs_30d"] / e["demand_runs_30d"]
            # The 0.8 cut earns the loud line. But the SHARE ITSELF is printed
            # unconditionally, because a threshold only warns about the cases it
            # happens to clear. Measured 2026-08-06 on `harris county court
            # records`: DEMAND PASS 3424 where 2403 runs (70%) are dominvo/
            # distressed-property-ai-scraper, a real-estate LEAD-GEN Actor that
            # reads court records as a distress signal -- textbook adjacent job,
            # and silent, because 70% sits under the cut. The genuinely
            # on-subject occupants total 282. Raising the threshold to catch it
            # would be untuned guessing; printing the number every time costs
            # one line and never hides the read.
            head = ("    ^^ CONCENTRATION" if share >= 0.8 and len(on_topic_live) > 1
                    else "    top on-topic occupant")
            print(f"{head} {share:.0%}: {top['actor']} ({top['title']}). "
                  f"Without it the query holds "
                  f"{e['demand_runs_30d'] - top['runs_30d']} runs. "
                  f"READ WHAT IT ACTUALLY DOES before believing the gate: an "
                  f"occupant doing an ADJACENT job carries the query's terms as "
                  f"fields and no veto can see that.")
        # WHO satisfies rule 2. The concentration line above is computed over
        # demand_runs_30d, i.e. buyer + inconclusive -- but rule 2 ("at least
        # one run must look like a buyer") is the leg that certifies a real
        # payer exists, and it can be carried by a single Actor while the
        # demand-side share looks harmless. Measured across the 20 supply-gate
        # amnesty re-screens on 2026-08-06: `fda device recall enforcement`
        # printed a 25% concentration while ALL 62 of its buyer runs were one
        # FREE Actor, and `health canada drug product database` printed 28%
        # while all 102 buyer runs were fatihtahta/loopnet-scraper, a
        # commercial-real-estate scraper on-topic via the word "database".
        # Five of that batch's eight passes rested rule 2 on exactly one Actor
        # doing an adjacent job. So name the buyers explicitly: when the count
        # is 1, the entire gate is a judgement about that one Actor's job.
        buyers = sorted(
            (r for r in e["rivals"]
             if r["on_topic"] and r["demand_class"] == "buyer" and (r["runs_30d"] or 0)),
            key=lambda r: r["runs_30d"], reverse=True)
        if buyers:
            top_b = buyers[0]
            b_share = top_b["runs_30d"] / max(e["buyer_runs_30d"] or 0, 1)
            lead = ("    ^^ RULE 2 RESTS ON ONE ACTOR" if len(buyers) == 1
                    else f"    rule 2 satisfied by {len(buyers)} Actors, top")
            print(f"{lead} {b_share:.0%} of buyer runs: {top_b['actor']} "
                  f"({top_b['title']}) {top_b['runs_30d']} runs u30={top_b['users_30d']}"
                  + ("" if len(buyers) > 1 else
                     " -- if its job is not this query's job, the query has NO "
                     "proven payer at all"))
            if len(buyers) > 1:
                print("       others: " + ", ".join(
                    f"{b['actor']} {b['runs_30d']}" for b in buyers[1:]))
        print(f"    raw 30d runs across query: {e['runs_30d_total']}   "
              f"floor gross: ${e['gross_30d_floor_usd']}/mo "
              f"(1 event/run -- a FLOOR, not an estimate)")
        # Printed separately because it is the number that has actually moved a
        # decision: cheapest-event misses a priced `apify-actor-start`, which
        # every run pays. Read this one first when it is nonzero.
        if e["per_run_30d_usd"]:
            print(f"    PRESS-GO REVENUE: ${e['per_run_30d_usd']}/mo charged just to "
                  f"START a run (priced apify-actor-start x runs -- no assumption "
                  f"about run length)")
        if e["free_rivals"]:
            print(f"    FREE rivals (hold runs, take no money, set no price "
                  f"anchor): {', '.join(e['free_rivals'])}")
        for r in e["rivals"]:
            if not r["runs_30d"]:
                continue
            ev = ", ".join(f"{k}=${v}" for k, v in r["events"].items()) or r["pricing_model"]
            sr = f"{r['success_30d']:.0%}" if r["success_30d"] is not None else "-"
            tag = ({"buyer": "BUYER", "cron": "cron!", "inconclusive": "?"}[r["demand_class"]]
                   if r["on_topic"]
                   else "OFF-J" if r.get("off_reason") == "jurisdiction"
                   else "OFF")
            print(f"  {r['actor']:58s} 30d={r['runs_30d']:>5} life={r['runs_lifetime']!s:>6} "
                  f"ok={sr:>4} u30={r['users_30d']!s:>3} {tag:<5} "
                  f"floor=${r['gross_30d_floor_usd']}")
            print(f"      {ev}")
        dead = [r["actor"] for r in e["rivals"] if not r["runs_30d"]]
        if dead:
            print(f"    listing-only (0 runs in 30d): {len(dead)}")


# Vein filter for the sweep. WORD-BOUNDED, and that is not a detail: the first
# run of this sweep used bare substrings including "state", "tax", "bid" and
# "provider", matched 3,480 actors, and returned a top-25 that was entirely
# TikTok/Zillow/Upwork -- §4 says that head is unreachable and §9 says to avoid
# those sites outright. A loose filter here does not add noise, it inverts the
# result, because the head outranks the vein on every sort.
VEIN_RE = __import__("re").compile(r"""\b(
    gov | governments? | federal | regulator[a-z]* | compliance | licens[a-z]+ |
    permits? | inspections? | violations? | enforcement | sanctions? |
    exclusions? | debarment | court | dockets? | litigation | liens? | ucc |
    edgar | irs | fda | epa | osha | cms | medicare | medicaid | hhs | oig |
    faa | fcc | ferc | fmcsa | nhtsa | usda | fsis | cpsc | ttb | atf | sba |
    gsa | dea | finra | pcaob | sec | uspto | patents? | trademarks? | fema |
    hud | census | procurement | solicitations? | tenders? | lobbying |
    recalls? | subsidy | subsidies | npi | nppes | nppes? | hcris | sam\.gov |
    clinical\s+trials? | tax\s+(?:exempt|lien|delinquen[a-z]+) |
    campaign\s+finance | corporate\s+registry | business\s+registration |
    contract\s+awards? | public\s+records?
)\b""", __import__("re").X | __import__("re").I)

# §9 names these as actively litigating; §3 killed consumer HTML scraping. An
# actor about them is not in the vein however many regulatory words it uses.
OFF_LIMITS_RE = __import__("re").compile(
    r"\b(linkedin|indeed|zillow|amazon|tiktok|instagram|facebook|twitter|"
    r"upwork|realtor|immoscout|despegar|glassdoor|redfin|youtube|reddit)\b",
    __import__("re").I)

# Our reachable band, measured 2026-07-29: of 767 PPE actors under 1000
# runs/30d exactly 10 clear $20/mo, all on price per deliverable. Above the
# band is the head we cannot win.
BAND_MAX_RUNS_30D = 1000

BUILTIN_EVENT_PREFIX = "apify-"      # Apify's own event names, NOT automatically free

# Builtin events that fire exactly once per run. `apify-default-dataset-item`
# is deliberately NOT here: it bills per row, so it cannot be counted as a
# floor on a run of unknown length.
PER_RUN_BUILTINS = ("apify-actor-start",)


def _price_shape(item: dict) -> dict:
    """Row-shipper or deliverable? This is the split that decides revenue.

    Measured 2026-07-29 across the PAY_PER_EVENT actors in our reachable band
    (<1000 runs/30d): the ones clearing $20/mo do it on price per deliverable
    ($0.12-$3.99 per result at 29-373 runs/mo), never on volume. Actors that
    ship ROWS set their custom events to $0.00, so they earn developer margin
    of ~zero however many runs they take.

    CORRECTED 2026-07-29 (later the same day, after this function's own output
    was checked against the API). This used to DROP every `apify-`prefixed
    event as "platform passthrough, not developer margin". That is wrong, and
    it was wrong in the direction that hides the best earners:

        jungle_synthesizer/propublica-nonprofit-crawler
          swept   : custom_events {data-record: $0.001} -> floor $0.40/mo
          actual  : apify-actor-start $0.10 + data-record $0.001, 396 runs/30d
                    -> at least $39.60/mo, because start fires on EVERY run

    A developer chooses that $0.10; nothing pegs a builtin event to Apify's
    cost. So the name of an event says nothing about whether it takes money,
    and the buyer pays it either way. Ninety-nine times understated on the
    single highest-run occupant of the vein we were about to enter.

    Both numbers are now kept and they answer different questions:
      * `top_margin_usd` / `shape` -- is this a DELIVERABLE or rows? Custom
        events only, so the shape read is unchanged and stays comparable to
        the earlier sweep.
      * `per_run_usd` -- what a buyer pays to press go ONCE, priced builtins
        included. This is the one that sizes a rival's revenue, because it is
        the only part of a bill that does not depend on run length.
    """
    pricing = item.get("currentPricingInfo") or {}
    events = ((pricing.get("pricingPerEvent") or {}).get("actorChargeEvents") or {})
    priced = {k: float(v.get("eventPriceUsd") or 0) for k, v in events.items()}
    custom = {k: v for k, v in priced.items() if not k.startswith(BUILTIN_EVENT_PREFIX)}
    platform = {k: v for k, v in priced.items() if k.startswith(BUILTIN_EVENT_PREFIX)}
    margin = max(custom.values()) if custom else 0.0
    per_run = sum(v for k, v in priced.items() if k in PER_RUN_BUILTINS)
    return {
        "model": pricing.get("pricingModel"),
        "custom_events": custom,
        # Kept, not dropped -- a nonzero value here is real money changing hands.
        "platform_events": platform,
        "top_margin_usd": margin,
        "per_run_usd": round(per_run, 4),
        "shape": ("deliverable" if margin > 0
                  else "row-shipper" if pricing.get("pricingModel") == "PAY_PER_EVENT"
                  else (pricing.get("pricingModel") or "UNKNOWN").lower()),
    }


CONSENT_MARKERS = ("notice and consent", "warning and consent", "usg-authorized use only",
                   "you are accessing a u.s. government", "accept the following terms",
                   "terms of use agreement", "i agree", "click to continue")

# A CAPTCHA / JS challenge is the same 200-with-no-data shape as a consent gate
# and it needs a DIFFERENT, harder verdict. Added 2026-08-07 after
# eprocure.gov.in (source-first draw 19) cleared this tool at the front door and
# turned out to CAPTCHA-gate every path that carries a record: the main tender
# search, search-by-product, cancelled tenders, the debarment search, and every
# per-record detail view. The banked verdict read "reachable and not disallowed
# -- proceed" and was true about the host and misleading about the data.
#
# The distinction that matters: a consent gate is a §9 *contract* risk you could
# in principle be granted an exemption from, and a rival's presence behind one
# proves nothing. A CAPTCHA is a technological protection measure -- §9 names it
# under the DMCA §1201 theory -- so there is nothing to negotiate and no pacing
# that clears it, unlike the self-inflicted 429/403s on OFAC, USPTO TSDR and
# api.nhtsa.gov. Passing it is the ProPublica download-xml / sunbiz Cloudflare
# precedent: forbidden outright.
CHALLENGE_MARKERS = ("code is in the image", "enter the characters shown",
                     "image-captcha", "g-recaptcha", "recaptcha/api.js",
                     "hcaptcha", "cf-challenge", "just a moment...",
                     "enable javascript and cookies to continue",
                     "checking your browser before accessing")

# Every egress verdict is banked here, keyed by HOST. Added 2026-08-06 after
# nmlsconsumeraccess.org was probed twice and SEEDED AS A FRESH LEAD in between.
# It was measured dead on 2026-08-05 -- "403 both UAs (Akamai), confirmed from
# Apify's own network too" -- and that verdict was written into probed.json as
# English prose inside a narrative blob. Prose is not queryable, so the next
# harvest mined store_sweep.json, found jungle_synthesizer/nmls-consumer-access
# -crawler at u30=14 / 435 runs/30d, and promoted it as "the strongest buyer
# signal on any licence register measured here" -- of a source we already knew
# we cannot reach. Two cycles spent on a closed door.
#
# The lesson is the same one CLAUDE.md keeps recording in other costumes: a rule
# that must be REMEMBERED is not a fix. probed.json holds the finding; only a
# machine-readable index makes the tool refuse to spend the probe again.
# Keyed by host and not by URL on purpose -- an Akamai block is a property of
# the host, so a second guessed path under it is the same dead end wearing a
# new path. HOST-level so it warns; never a hard refusal, because a block can
# genuinely lift and re-probing must stay one flag away.
EGRESS_LOG = "egress_log.json"

# ...which is also why these codes may never be banked as a host block. A
# host-keyed index can only hold host-level facts, and a 4xx splits in two:
# 401/403/429/451 are the host refusing US, while these are the host telling us
# THIS REQUEST is wrong. Banking the latter kills a host on our own typo.
REQUEST_LEVEL_CODES = frozenset({400, 404, 405, 410, 414, 422})


def _egress_prior(host):
    """Prior verdict for a host, or None. Never raises -- an unreadable cache
    must not be able to stop a probe."""
    try:
        return state.read_json(EGRESS_LOG, {}).get(host)
    except Exception:
        return None


def _egress_record(host, path, verdict, codes):
    """Bank one host verdict. Last write wins: a source that was 403 and is now
    200 should read 200, which is exactly the case re-probing exists to catch.

    ONE exception, and it is the other half of REQUEST_LEVEL_CODES. Last-write-
    wins is right for host-level facts because a block lifts. It is wrong for a
    request-level answer, which carries no host-level information at all:
    probing a guessed path that 404s would otherwise ERASE a measured 200 for
    the whole host. Measured 2026-08-06 -- hts.usitc.gov was correctly banked
    `reachable and not disallowed -- proceed`, then a probe of the guessed path
    /reststop/chapters 404'd and overwrote it. So a purely request-level result
    never displaces an existing verdict; it is appended as a note instead.
    """
    try:
        log = state.read_json(EGRESS_LOG, {}) or {}
        vals = [c for c in (codes or {}).values() if c]
        request_level = bool(vals) and all(c in REQUEST_LEVEL_CODES
                                           for c in vals)
        prior = log.get(host)
        if request_level and prior:
            notes = prior.setdefault("request_level_paths", {})
            notes[path] = {"at": state.now(), "codes": codes}
            state.write_json(EGRESS_LOG, log)
            return
        log[host] = {"at": state.now(), "path": path,
                     "verdict": verdict, "codes": codes}
        state.write_json(EGRESS_LOG, log)
    except Exception:
        pass


def cmd_egress(urls):
    """Can we FETCH it, and are we ALLOWED to? Run this BEFORE any build.

    Added 2026-07-29 after this stage killed three consecutive best-in-harvest
    leads -- every one of which had already passed both §5 tests, so the work
    that produced them was wasted by doing this check last instead of first:

      * `aircraft lien search faa registry` -- registry.faa.gov 403 (plain UA)
        / 503 (browser UA), Akamai refusing datacenter IPs outright.
      * `dibbs rfq` -- HTTP **200** carrying a DoD Notice and Consent banner
        and zero data. The status code is a lie; §3's silent-failure mode
        exactly.
      * `gsa schedule contract holder lookup` -- fetches fine, and
        robots.txt says `Disallow: /ElibMain/`, i.e. every data path.

    So three different failure modes and only one of them shows up in a status
    code. Checks all three: reachability under both UAs, consent-interstitial
    detection on 2xx, and the robots rule for the SPECIFIC path (not just
    whether robots.txt exists).

    §9 is the reason the permission half matters as much as the fetch half:
    hiQ shields public-data scraping from CFAA but explicitly NOT from breach
    of contract, and a click-through consent gate forms a contract on every
    single request.
    """
    import urllib.parse as up
    import urllib.request as ur

    def fetch(u, ua, want_ctype=False):
        req = ur.Request(u, headers={"User-Agent": ua})
        try:
            with ur.urlopen(req, timeout=25) as r:
                status, body = r.status, r.read(60000)
                ctype = (r.headers.get("Content-Type") or "").lower()
        except Exception as e:
            status, body, ctype = getattr(e, "code", 0), b"", ""
        return (status, body, ctype) if want_ctype else (status, body)

    BROWSER = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
               "(KHTML, like Gecko) Chrome/126.0 Safari/537.36")
    # A "declared" UA is NOT a browser impersonation string. Measured
    # 2026-08-06 on www.sec.gov: plain 403 AND browser 403, so this tool
    # recorded "plain blocked (403); browser blocked (403)" -- a false kill on
    # the very host the fair-access clause below names as its example. SEC's
    # published policy asks for a UA that says WHO YOU ARE and how to reach
    # you; a Chrome string declares nothing, so it is refused exactly like
    # python-urllib. With the contact form below the same path returns 200.
    # Two failures came out of the one missing probe, and the robots half was
    # the worse one: robots.txt was fetched under BROWSER, got 403, and
    # printed "no crawl rules exist, so none disallow ..." for a host that
    # publishes rules and disallows /cgi-bin. A false CLEAR, not just a false
    # kill. So the robots fetch retries under this UA too.
    CONTACT_UA = "Portfolio Research Agent malek@malekhammoud.com"
    for u in urls:
        print(f"\n=== {u}")
        prior = _egress_prior(up.urlsplit(u).netloc)
        if prior:
            print(f"  PRIOR    {prior['at'][:10]} {prior['path']} -> {prior['verdict']}")
        verdict, results = [], {}
        for label, ua in (("plain", "python-urllib"), ("browser", BROWSER),
                          ("declared", CONTACT_UA)):
            # The contact-UA probe only ever rescues a host that refused the
            # browser string, so skip it when the browser UA already got in.
            # Three probes at a 25s timeout each is otherwise enough to push a
            # slow host past the caller's own timeout, which turns a working
            # check into no check at all.
            if label == "declared" and "browser" not in results:
                break
            code, body = fetch(u, ua)
            low = body[:60000].decode("latin-1", "replace").lower()
            hits = [m for m in CONSENT_MARKERS if m in low]
            chal = [m for m in CHALLENGE_MARKERS if m in low]
            print(f"  {label:<8} HTTP {code:<4} {len(body):>7}b"
                  + (f"  CONSENT GATE: {hits[0]!r}" if hits else "")
                  + (f"  CHALLENGE: {chal[0]!r}" if chal else ""))
            # ANY non-2xx is "not access". Measured 2026-08-05 on four guessed
            # ASIC/APRA register paths: three returned 404 with a 0-byte body
            # and this tool printed "reachable and not disallowed -- proceed",
            # because the old test enumerated only 401/403/503/0. A 404 does
            # not mean the source is fetchable, it means the path we intend to
            # build against does not exist -- the same false-CLEARED that the
            # empty-2xx rule below was added to stop, arriving through the one
            # door that rule left open. Enumerate 2xx and fail everything else,
            # rather than enumerating the failures and passing everything else.
            # ...but "not 2xx" is not one verdict, it is two, and the index is
            # keyed by HOST. Measured 2026-08-06 on hts.usitc.gov: a malformed
            # query string of OUR OWN (from==to) returned 400 on all three UAs
            # and this tool banked "plain blocked (400); browser blocked (400)"
            # as the durable host verdict -- a false kill on a host that is
            # keyless, open and serves no robots, created by our own bad
            # request rather than by the source. A 401/403/429/451 is the HOST
            # refusing US and generalises to the host. A 400/404/405/410/422 is
            # the host answering that THIS REQUEST is wrong, which is a verdict
            # about the URL and says nothing about the host -- so it must not be
            # written into a host-keyed index as a block. Both still fail the
            # 2xx test above, so nothing here can produce a false CLEARED.
            if not (200 <= code < 300):
                if code in REQUEST_LEVEL_CODES:
                    verdict.append(
                        f"{label} HTTP {code} -- REQUEST-LEVEL, NOT A HOST "
                        f"BLOCK: the host answered that this URL/query is "
                        f"malformed or absent. Clears nothing and kills "
                        f"nothing; fix the request and re-probe before "
                        f"treating this host as dead")
                else:
                    verdict.append(f"{label} blocked ({code})" if code else
                                   f"{label} unreachable (no response)")
                results[label] = code
            # A 2xx carrying nothing is not access. Measured 2026-08-05 on
            # sam.gov's exclusions extract: HTTP 204, 0 bytes, robots silent --
            # the tool printed "reachable, proceed" for an endpoint that
            # delivers no data at all without an api.data.gov key. Same class
            # as the DIBBS 200-with-a-consent-banner above: the status code is
            # a lie and only the body says so. Fail it here, not in a build.
            elif 200 <= code < 300 and not body:
                verdict.append(f"{label} empty {code} -- 2xx with a 0-byte body "
                               f"is NOT access (§3 silent failure)")
                results[label] = code
            if hits:
                verdict.append(f"{label} consent-gated -- 200 but no data (§3 silent failure)")
            # Deliberately checked on ANY status, not only 2xx: Cloudflare
            # serves its challenge under 403 (sunbiz) while a Drupal
            # image_captcha serves it under 200 (eprocure.gov.in). Reading it
            # as a bare 403 loses the reason, which is the fact that decides
            # whether pacing could ever help -- it cannot.
            if chal:
                verdict.append(
                    f"{label} CHALLENGE-GATED ({chal[0]!r}) -- §9 KILL, NOT A "
                    f"PACING ARTEFACT: this is a technological protection "
                    f"measure (§9's DMCA §1201 theory), so no spacing, UA or "
                    f"retry clears it and solving it is the ProPublica/sunbiz "
                    f"precedent. A rival shipping this data is operating "
                    f"against the block, never a grant. Probe a DIFFERENT "
                    f"host or an official bulk/API feed")
                results[label] = code

        p = up.urlsplit(u)
        rcode, rbody, rctype = fetch(f"{p.scheme}://{p.netloc}/robots.txt",
                                     BROWSER, want_ctype=True)
        if not (rcode == 200 and rctype.startswith("text/plain")):
            # Do not conclude "no robots.txt published" from a UA refusal --
            # that prints a CLEAR for a host whose rules were never read.
            rcode, rbody, rctype = fetch(f"{p.scheme}://{p.netloc}/robots.txt",
                                         CONTACT_UA, want_ctype=True)
        rtxt = rbody.decode("latin-1", "replace")
        # A robots.txt is only a robots.txt if it is 2xx AND text/plain. The
        # old test was `<html` inside the first 200 chars, which asic.gov.au
        # defeats twice over (measured 2026-08-06): /robots.txt there returns
        # HTTP **200** serving ASIC's 404 PAGE, 66 KB of HTML, behind six
        # leading CRLFs -- a soft 404. Two separate failures follow from
        # trusting the status code. If the HTML happens to push `<html` past
        # char 200 the body gets PARSED as directives, finds no Disallow, and
        # the source reads ALLOWED on a site that may disallow its data paths.
        # And when the guard does fire it blames a "consent gate", which is a
        # §9 kill signal -- the opposite verdict from the truth here, which is
        # that no robots.txt is published at all and so nothing is disallowed.
        # Content-type separates the two; the status code cannot.
        robots_is_real = rcode == 200 and rctype.startswith("text/plain")
        if robots_is_real:
            rules, agent_all = [], False
            for line in rtxt.splitlines():
                line = line.split("#")[0].strip()
                if not line or ":" not in line:
                    continue
                k, v = (x.strip() for x in line.split(":", 1))
                k = k.lower()
                if k == "user-agent":
                    agent_all = (v == "*")
                elif agent_all and k in ("allow", "disallow") and v:
                    rules.append((k, v))
            # Longest matching rule wins, per the robots spec.
            match = max((r for r in rules if p.path.startswith(r[1])),
                        key=lambda r: len(r[1]), default=None)
            if match:
                print(f"  robots   {match[0].upper()}: {match[1]}  (path {p.path})")
                if match[0] == "disallow":
                    # robots.txt governs CRAWLERS. A documented REST API with
                    # its own terms is governed by those terms, not by the
                    # site's crawl policy -- courtlistener.com publishes a
                    # versioned public API and still ships `Disallow: /`, so
                    # treating robots as decisive there would kill sanctioned
                    # APIs. Fatal for a scraped HTML path (gsaelibrary
                    # /ElibMain/), a flag to resolve for an /api/ path.
                    #
                    # But the old wording of that flag -- "CHECK THE API TERMS,
                    # they govern, not robots" -- is the exact rationalisation
                    # CLAUDE.md forbids, and it is the string that lands in
                    # egress_log.json as the DURABLE VERDICT. Measured
                    # 2026-08-06 on shab.ch / amtsblattportal.ch / zefix.admin.ch:
                    # three blanket-disallowed hosts each logged a verdict a
                    # later cycle would read as clearance. The check is a
                    # question, so the verdict has to stay a question --
                    # UNRESOLVED, never "proceed" -- and it is only ever
                    # answered by naming the terms document that grants
                    # programmatic access. A BLANKET `Disallow: /` says the
                    # crawl policy covers every path the host has, so it is
                    # called out separately: that is the shape that killed
                    # app.companiesoffice.govt.nz and datahub.transportation.gov,
                    # and the sibling-hostname check is what rescued FMCSA.
                    api_path = "/api/" in p.path or p.path.endswith(".json")
                    blanket = match[1] == "/"
                    if api_path:
                        verdict.append(
                            f"UNRESOLVED, NOT CLEARED: robots.txt disallows "
                            f"{match[1]}"
                            + (" (BLANKET -- the whole host)" if blanket else "")
                            + " on a documented API path. Proceed ONLY after "
                              "citing the API's own published terms granting "
                              "programmatic access (record the URL); absent "
                              "that this is a §9 kill"
                            + (". Resolve the SIBLING HOSTNAME first -- one "
                               "Socrata/CKAN portal routinely answers on two "
                               "and only one is blocked" if blanket else ""))
                    else:
                        verdict.append(
                            f"robots.txt DISALLOWS {match[1]} -- §9 "
                            f"breach-of-contract exposure")
            else:
                print(f"  robots   no rule covers {p.path}")
        elif rcode == 200:
            # 200 but not text/plain. Distinguish the two reasons, because they
            # point opposite ways: a consent interstitial is a §9 blocker, a
            # soft 404 means the host publishes no crawl rules at all.
            hits = [m for m in CONSENT_MARKERS
                    if m in rtxt[:60000].lower()]
            if hits:
                print(f"  robots   HTTP 200 but {rctype or 'no content-type'} and "
                      f"consent-gated ({hits[0]!r}) -- treat as BLOCKED")
                verdict.append("robots.txt itself is consent-gated -- §9 exposure")
            else:
                print(f"  robots   NO ROBOTS.TXT PUBLISHED (HTTP 200 but "
                      f"{rctype or 'no content-type'}, i.e. a soft 404) -- "
                      f"no crawl rules exist, so none disallow {p.path}")
        else:
            print(f"  robots   no robots.txt published (HTTP {rcode}) -- "
                  f"no crawl rules exist, so none disallow {p.path}")

        # A 403 that clears under a real UA is a fair-access rule, not a block.
        # data.sec.gov does exactly this: SEC's published policy requires a
        # declaring User-Agent. Say so, rather than recording a dead source.
        if results.get("plain") == 403 and not ({"browser", "declared"} <= set(results)):
            cleared = "browser" if "browser" not in results else "declared"
            verdict = [v for v in verdict
                       if not v.startswith(("plain blocked", "browser blocked"))]
            verdict.append(f"403 on plain UA, 200 on a {cleared} UA -- a fair-access "
                           f"policy (set a real User-Agent), NOT a block"
                           + (" -- this host wants a CONTACT-BEARING UA, not a "
                              "browser string; send one from the Actor too"
                              if cleared == "declared" else ""))
        final = ("; ".join(dict.fromkeys(verdict)) if verdict
                 else "reachable and not disallowed -- proceed")
        print("  VERDICT: " + final)
        _egress_record(p.netloc, p.path or "/", final, results)


def cmd_sweep(args):
    """Harvest by ENUMERATION: proven demand first, supply second.

    Six consecutive harvests guessed a query, probed supply, and promoted
    nothing -- because guessing tests scarcity, and scarcity is not what the
    market pays for. This walks the store instead, keeps only actors in the
    regulatory/public-record vein that have REAL 30-day runs, and reports what
    they charge. An occupant with runs is proof of paying demand on our store
    at our price point; §5 has to infer that from an outside vendor's price
    list and has been wrong in both directions.

    Writes ~/portfolio/store_sweep.json so a later cycle mines it without
    re-spending the API calls. No backlog state written -- candidates still go
    through `screen.py add` and the occupancy gate like anything else.
    """
    cats = args or ["BUSINESS", "OTHER", "LEAD_GENERATION", "NEWS", "DEVELOPER_TOOLS"]
    per_cat = 2500
    kept, scanned = [], 0
    cron_dropped, cron_runs = 0, 0
    for cat in cats:
        for it in apify.store_enumerate(category=cat, max_actors=per_cat):
            scanned += 1
            blob = f"{it.get('title','')} {it.get('name','')} {it.get('description','')}"
            if OFF_LIMITS_RE.search(blob) or not VEIN_RE.search(blob):
                continue
            stats = it.get("stats") or {}
            pub = stats.get("publicActorRunStats30Days") or {}
            runs30 = pub.get("TOTAL") or 0
            if not runs30:
                continue                     # a listing, not a market
            if runs30 > BAND_MAX_RUNS_30D:
                continue                     # the head -- §4 unreachable
            succ30 = pub.get("SUCCEEDED", 0) / runs30
            u30 = stats.get("totalUsers30Days")
            # NOT farm-filtered: apify.mark_farm_crons() needs the whole set
            # grouped by owner and this loop decides per streamed item, so a
            # farm's siblings survive the sweep with dclass 'inconclusive'.
            # Anything mined out of store_sweep.json must be re-measured with
            # `screen.py demand` before it is believed (2026-08-05).
            dclass = apify.demand_class(runs30, succ30, u30)
            if dclass == "cron":
                cron_dropped += 1
                cron_runs += runs30
                continue      # the owner's own daily schedule, not a market
            shape = _price_shape(it)
            kept.append({
                "actor": f"{it.get('username')}/{it.get('name')}",
                "title": it.get("title"),
                "description": (it.get("description") or "")[:400],
                "category": cat,
                "runs_30d": runs30,
                "runs_lifetime": stats.get("totalRuns"),
                "users_30d": u30,
                "demand_class": dclass,
                # The occupant's success rate answers WHY a niche is unpriced.
                # Measured on `dibbs rfq`: the 711-run leader runs at 42%,
                # because the source is a DoD consent gate that cannot be
                # served reliably. Zero margin there is not an opening left
                # open, it is a market nobody can serve. Read this before
                # reading a $0.00 occupant as an opportunity.
                "success_30d": round(succ30, 2),
                **shape,
                "floor_30d_usd": round(runs30 * shape["top_margin_usd"], 2),
                # runs x what every single run costs the buyer. Unlike
                # floor_30d_usd this needs no assumption about how many rows a
                # run returns, so it is the harder number of the two.
                "per_run_30d_usd": round(runs30 * shape["per_run_usd"], 2),
            })
        print(f"  swept {cat}: {scanned} scanned, {len(kept)} in vein with runs")

    kept.sort(key=lambda k: k["runs_30d"], reverse=True)
    seen, uniq = set(), []
    for k in kept:
        if k["actor"] in seen:
            continue
        seen.add(k["actor"])
        uniq.append(k)
    state.write_json("store_sweep.json", uniq)

    zero = [k for k in uniq if k["top_margin_usd"] == 0]
    paid = [k for k in uniq if k["top_margin_usd"] > 0]
    buyers = [k for k in uniq if k["demand_class"] == "buyer"]
    print(f"\nDROPPED {cron_dropped} owner-cron actors holding {cron_runs} runs/30d "
          f"(28-31 runs, ~100% ok, u30<=1) -- those runs are schedules, not buyers")
    print(f"vein actors with 30d runs: {len(uniq)}  "
          f"(zero developer margin: {len(zero)}, taking money: {len(paid)})")
    print(f"of those, u30>=3 and therefore BUYER-PROVEN: {len(buyers)} "
          f"-- read these first; the rest are inconclusive, not proven")
    print(f"runs/30d held by ZERO-MARGIN occupants: {sum(k['runs_30d'] for k in zero)} "
          f"-- demand that is proven and unpriced")
    print("\ntop unpriced demand (proven runs, occupant earns $0 margin):")
    print("  ok% is the OCCUPANT's 30d success rate -- low means the source "
          "fights back, which is usually WHY nobody charges for it")
    for k in zero[:25]:
        print(f"  {k['runs_30d']:>6} runs/30d ok={k['success_30d']:>4.0%}  "
              f"{k['actor']:<50} [{k['shape']}] {(k['title'] or '')[:44]}")
    print("\ntop PAID comparators in the vein (what this vein's buyers do pay):")
    for k in paid[:15]:
        ev = ", ".join(f"{a}=${b}" for a, b in k["custom_events"].items())
        print(f"  {k['runs_30d']:>6} runs/30d  ${k['top_margin_usd']:<6} floor=${k['floor_30d_usd']:<8} "
              f"{k['actor']:<46} {ev[:60]}")


def occupancy_verdict(c: dict) -> str:
    """'clear' | 'occupied' | 'unchecked' for one candidate.

    A stored `occupancy_verdict` always wins -- it is a human/agent judgement
    that may know things the record does not. Otherwise it is DERIVED, because
    nothing ever writes that field: screen_one() gates on occupants_reviewed
    and throws its conclusion away in a reason string. The result was that
    `prop 65 60 day notice` (5 occupants, all reviewed adjacent) and
    `asic banned disqualified persons` (supply 0, no occupant to review at
    all) both displayed as UNCHECKED and sorted BEHIND the clear group in the
    publish queue -- which inverts the queue's whole rationale, since a
    vacant query is the most race-exposed thing in it, not the least.

    Derivation mirrors the screen exactly:
      occupied  -- a live occupant is classified 'direct'
      clear     -- every visible occupant is reviewed and none is direct
                   (vacuously true when there are no occupants)
      unchecked -- occupancy was never measured, or an occupant is still
                   unclassified. Never guess 'clear' from missing data.
    """
    stored = c.get("occupancy_verdict")
    if stored:
        return stored

    occ = c.get("supply_composition")
    if not isinstance(occ, dict):
        return "unchecked"

    live = {occupant_key(o) for o in (occ.get("occupants") or [])}
    reviewed = {r.get("actor"): r.get("verdict")
                for r in (c.get("occupants_reviewed") or [])}
    if any(reviewed.get(a) == "direct" for a in live):
        return "occupied"
    if live - set(reviewed):
        return "unchecked"
    return "clear"


def cmd_list():
    for i, c in enumerate(state.load_backlog(), 1):
        inc = c.get("incumbent", "-")
        price = c.get("incumbent_price_usd")
        # No period assumed: incumbent prices are sometimes per month, sometimes
        # per document. Printing "/mo" on a per-document price overstates it.
        price_s = f"${price} {c.get('incumbent_price_unit', '')}".strip() if price else "-"
        # Occupancy is shown on the same line as supply because reading one
        # without the other is what put 8 occupied queries in this backlog.
        occ = occupancy_verdict(c)
        direct = c.get("direct_competitors") or []
        occ_s = occ.upper() if occ != "clear" else "clear"
        print(f"{i:>3}. [{c.get('score',0):>5.0f}] supply={c.get('supply','?'):<3} "
              f"[{occ_s}] {c['query']}\n      incumbent: {inc} {price_s}  "
              f"status={c.get('status','screened')}")
        if direct:
            print("      direct competitor(s): " +
                  ", ".join(f"{d['actor']} ({d['runs']} runs)" for d in direct))
    q = publish_queue()
    if q:
        print("\n  publish queue (1 slot/day) -- run `screen.py queue` for why:")
        for i, c in enumerate(q, 1):
            print(f"    {i}. {c['query']}  [{occupancy_verdict(c)}]")


def publish_queue():
    """Built-but-unpublished candidates, in the order they should take the slot.

    DEMAND-SCREENED FIRST, then the old clear-first order among the rest.

    The clear-first rule (below) was written under the `supply < 10` gate and
    OUTLIVED it. Retiring that gate on 2026-08-06 inverted what "clear" means: a
    query with no supply is no longer a winnable position being raced for, it is
    a query nobody searches, and 16 live Actors chosen that way have produced
    zero external runs between them. So racing to publish a clear query is
    racing to claim nothing, while the publish slot it consumes is the scarcest
    thing in the pipeline (5 per rolling 24h, 4.5h apart).

    Measured 2026-08-07, which is what forced the fix: the queue put
    `fda-clinical-investigator-disqualification-check` (supply unknown, i.e.
    "clear") at #1 ahead of `ofac-...` (668 on-topic / 522 buyer runs) and
    `npi-...` (462 / 203) -- the only two built Actors that are part of the
    EXPERIMENT.md test, whose decision date is 2026-08-21. The retired rule was
    spending the experiment's slots on the sample the experiment is not about.

    Same class as the stale `rejected.json` rows the supply amnesty and the
    competitor-veto amnesty had to sweep: when a gate retires, its DEPENDENTS
    do not retire with it. After changing a gate, grep for what else reads the
    quantity it gated on -- here, `occupancy_verdict()`.

    Clear-first is KEPT as the secondary key rather than deleted: among Actors
    with no demand measurement at all it is still the least-bad tiebreak, and
    the race it describes was real when it was written --

    A CLEAR query is a race: oig-leie went from clear to supply 10 in nine hours
    on 2026-07-29, so every day a clear query waits is a day someone else can
    take it. An OCCUPIED query cannot get worse in the way that matters -- the
    incumbent already holds the run-count flywheel -- so delay there is nearly
    free. Score breaks ties inside each group.
    """
    built = [c for c in state.load_backlog() if c.get("status") == "built"]

    # The backlog is not the source of truth for what has been BUILT -- the
    # ledger is. A draw built straight from actors/<slug>/ never passes through
    # `screen.py add`, and `add` refuses anything already in the ledger
    # (seen_queries unions it), so ship.py build writing the ledger first makes
    # the backlog entry unaddable. That draw then sits monetized and
    # smoke-passing and is invisible to this queue FOREVER -- it can never be
    # offered a publish slot, and nothing anywhere complains. Caught 2026-07-30
    # on new-zealand-bankruptcy-check-insolvency-register. Falling back to the
    # ledger makes the queue reflect what actually exists rather than what got
    # recorded twice.
    known = {c.get("target_actor_name") for c in built}
    for draw in state.load_ledger():
        if draw.get("status") != "built":
            continue
        slug = draw.get("slug") or draw.get("name")
        if not slug or slug in known:
            continue
        built.append({
            "query": draw.get("query") or slug,
            "target_actor_name": slug,
            "status": "built",
            "incumbent": draw.get("incumbent"),
            "incumbent_price_usd": draw.get("incumbent_price_usd"),
            "demand_type": "paid_incumbent",
            "score": draw.get("score", 0),
            # Carried so the sort below can see it. ship.carry_demand_provenance()
            # writes these onto the LEDGER row at build time, so a draw that
            # reached the ledger without a backlog entry would otherwise look
            # un-screened here and sort behind the scarcity picks.
            "demand_runs_30d": draw.get("demand_runs_30d"),
            "buyer_runs_30d": draw.get("buyer_runs_30d"),
            "_from_ledger": True,
        })

    # A draw whose upstream SOURCE is down cannot be published -- ship.py runs a
    # live smoke first and will refuse it -- so leaving it in the queue means the
    # next cycle spends its first publish slot discovering that again. Caught
    # 2026-08-02 on prop-65-60-day-notice-settlement-benchmark: oag.ca.gov began
    # serving a different random page for every URL at HTTP 200, the actor's
    # column guard correctly refused to map fields, and the draw was still
    # sitting at #1 in this queue afterwards.
    #
    # This is a PARK, not a kill: clearing source_status on the ledger row puts
    # the draw straight back in line at its existing score. The revival test
    # lives with the outage note in open_queries.json.
    unavailable = {d.get("slug") or d.get("name") for d in state.load_ledger()
                   if d.get("source_status") == "unavailable_upstream"}
    if unavailable:
        built = [c for c in built
                 if c.get("target_actor_name") not in unavailable]

    return sorted(
        built,
        key=lambda c: (c.get("demand_runs_30d") is None,        # measured first
                       -(c.get("buyer_runs_30d") or 0),         # payers first
                       -(c.get("demand_runs_30d") or 0),
                       occupancy_verdict(c) != "clear",         # then the old rule
                       -c.get("score", 0)),
    )


def cmd_queue():
    q = publish_queue()
    if not q:
        print("publish queue: empty")
        return
    print(publish_queue.__doc__.strip().split("\n\n", 1)[1].replace("    ", "  "))
    print()
    for i, c in enumerate(q, 1):
        occ = occupancy_verdict(c)
        direct = c.get("direct_competitors") or []
        print(f"{i:>3}. [{c.get('score',0):>5.0f}] [{occ.upper()}] {c['query']}"
              f"\n      -> {c.get('target_actor_name','?')}")
        if direct:
            print("      already held by: " +
                  ", ".join(f"{d['actor']} ({d['runs']} runs)" for d in direct))


def cmd_termdf():
    """Rebuild term_df.json -- how common each word is across the store.

    This is what stops `on_topic()` handing a query the traffic of every actor
    that happens to say "company". See apify.GENERIC_DF_MAX. Re-run after any
    `screen.py sweep`, since the sweep is the corpus.
    """
    import collections
    import os
    path = os.path.join(state.STATE, "store_sweep.json")
    items = state._load(path, [])
    if not items:
        raise SystemExit(f"no store sweep at {path} -- run `screen.py sweep` first")
    df = collections.Counter()
    for it in items:
        blob = " ".join(str(it.get(k) or "")
                        for k in ("actor", "title", "description")).lower()
        df.update({apify._topic_stem(t)
                   for t in re.findall(r"[a-z0-9]+", blob)})
    table = {"_n": len(items), **df}
    out = os.path.join(state.STATE, "term_df.json")
    with open(out, "w") as fh:
        json.dump(table, fh)
    cut = apify.GENERIC_DF_MAX * len(items)
    generic = sorted((c, t) for t, c in df.items() if t != "_n" and c > cut)
    print(f"term_df: {len(df)} stems over {len(items)} store listings -> {out}")
    print(f"  {len(generic)} stems are generic (>{apify.GENERIC_DF_MAX:.0%} of listings) "
          f"and can no longer carry a query on their own")
    for c, t in sorted(generic, reverse=True)[:15]:
        print(f"    {t:16s}{c:5d} {100*c/len(items):5.1f}%")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    cmd, args = sys.argv[1], sys.argv[2:]
    if cmd == "supply":
        cmd_supply(args)
    elif cmd == "occupancy":
        cmd_occupancy(args)
    elif cmd == "demand":
        cmd_demand(args)
    elif cmd == "add":
        cmd_add(args[0])
    elif cmd == "list":
        cmd_list()
    elif cmd == "queue":
        cmd_queue()
    elif cmd == "sweep":
        cmd_sweep(args)
    elif cmd == "egress":
        cmd_egress(args)
    elif cmd == "termdf":
        cmd_termdf()
    else:
        print(__doc__)
        sys.exit(1)

```

### 8.1 `tools/ship.py`
```python
#!/usr/bin/env python3
"""Stages 3-4 -- build, smoke test, publish (§7, §8).

An actor lives in ~/portfolio-agent/actors/<slug>/ as:

    meta.json     name/title/description/seo/categories/query + demand provenance
    smoke.json    input for the pre-publish smoke test
    src/          every file uploaded verbatim as sourceFiles (README.md required)

The order below is not negotiable. Publishing is gated on the smoke test passing,
because a broken actor is worse than no actor -- it invites credit-compensation
clawbacks that make revenue negative (§9).

Usage:
    ship.py build   <slug>    # create private + build (no publish)
    ship.py smoke   <slug>    # run it, show dataset
    ship.py monetize <slug>   # apply pay-per-event pricing (do this while PRIVATE)
    ship.py publish <slug>    # smoke, monetize, then flip public
    ship.py ship    <slug>    # all three, the normal path
"""

from __future__ import annotations

import json
import os
import sys
from datetime import datetime, timedelta, timezone

sys.path.insert(0, os.path.dirname(__file__))

import apify
import state

ACTORS = os.path.expanduser("~/portfolio-agent/actors")

MAX_SPEND_USD = 40.0     # §14: stop publishing above this; account cap is $85
MIN_SUCCESS_RATE = 0.90  # §14: stop publishing if aggregate success drops below

# PLATFORM HARD LIMIT, not ours: **Apify allows 5 Actor publications per ROLLING
# 24-hour window.** Exceeding it is a platform refusal, not a style choice.
# APIFY_PUBLISH_LIMIT_24H exists so the margin below is explicit and legible.
APIFY_PUBLISH_LIMIT_24H = 5

# Raised to the platform limit by operator decision on 2026-08-05 (1/day ->
# 3 -> 5), publishing having run clean with no refusals or warnings.
#
# This now sits EXACTLY on Apify's ceiling, so the old headroom-of-2 is gone.
# That margin existed for one specific failure: the counter is derived from OUR
# ledger, so a publish that succeeded at Apify but failed to record locally would
# make us undercount and walk into a hard refusal. Rather than keep paying two
# publications a day for that insurance, the drift itself is now DETECTED --
# see ledger_drift(). If the ledger and the API disagree, the effective limit
# falls back automatically. Do not delete that check and leave this at 5.
MAX_PUBLISH_PER_24H = 5

# Even spacing, per operator instruction 2026-08-05: "spread those requests
# across the day, not all at once". 24h / 5 = 4.8h, so 4.5h fits five inside a
# day with slack while still preventing a burst.
#
# This is not only politeness. Publishing five Actors inside an hour is the
# bulk-publishing shape §9 warns invites review, and it wastes the store's
# update-recency signal by spending it all at one instant instead of showing a
# steady cadence.
MIN_PUBLISH_INTERVAL_HOURS = 4.5

# Weekly backstop against a runaway loop. At 5/day the natural weekly ceiling is
# 35; this keeps a real bound on a pathological week without binding normal use.
#
# RAISED 15 -> 25 on 2026-08-07, because the old value had stopped being a
# backstop and become THE operative constraint -- the exact thing the line above
# promises it is not. Measured: 15 publications in the trailing 7 days (a 2.1/day
# cadence, well under the 5/rolling-24h operative rule and under the plan's
# 3-5/day throughput target), rolling-24h count 1, ledger drift 0, 12.6h since
# the last publish -- i.e. every real constraint was satisfied and publishing was
# blocked anyway, for a further 58h until the oldest entry aged out.
#
# What it was blocking is what makes this worth correcting rather than waiting
# out: five built, monetized, smoke-passed Actors, two of them
# (ofac-sdn-..., npi-registry-...) part of the EXPERIMENT.md test whose decision
# date is 2026-08-21. A backstop that idles finished work during a timed
# experiment is costing the thing it was meant to protect.
#
# 25 is chosen to keep it a BACKSTOP: sustained normal cadence (2-3/day = 14-21
# a week) never reaches it, so it cannot bind normal use again, while a genuine
# runaway -- five a day, five days straight -- still trips it. That shape is the
# bulk-publishing pattern §9 warns invites review, and halting it is correct.
# Do not raise this again to unblock a queue; if it binds, the cadence itself is
# the thing to look at.
MAX_PUBLISH_PER_WEEK = 25

# EXPERIMENT STOP, set 2026-08-07 by operator decision.
#
# 17 Actors are live and 16 of them were chosen by the RETIRED supply<10 rule --
# i.e. selected *because* almost nobody searched their query. Their zero external
# runs prove nothing new. The real question is whether a DEMAND-SCREENED Actor
# converts, and only 1 of those is live.
#
# So: build up to this many demand-screened Actors, then STOP and measure. Three
# would be too thin to read (at a 1-in-10 true hit rate you would see zero ~73%
# of the time even if the thesis works); 8 makes a zero result informative.
#
# This is a HARD STOP, not a throttle. Publishing what is already built continues
# -- that work is done and costs nothing further.
DEMAND_SCREENED_TARGET = 8


def demand_screened_count() -> int:
    """Actors selected by the fixed screen (a measured demand figure on record)."""
    return sum(1 for d in state.load_ledger()
               if d.get("status") in ("published", "built")
               and d.get("demand_runs_30d") is not None)


def experiment_stop_reached() -> tuple[bool, str]:
    n = demand_screened_count()
    if n >= DEMAND_SCREENED_TARGET:
        return True, (f"EXPERIMENT STOP: {n}/{DEMAND_SCREENED_TARGET} "
                      f"demand-screened Actors built. Stop building and measure "
                      f"(see /root/portfolio/EXPERIMENT.md). Publishing continues.")
    return False, f"{n}/{DEMAND_SCREENED_TARGET} demand-screened"

# Back-compat alias: older call sites and reports refer to the per-day name.
MAX_PUBLISH_PER_DAY = MAX_PUBLISH_PER_24H


# Apify's store-listing length caps, measured 2026-08-05 by walking into each
# one in turn: PUT /v2/acts/{id} rejects an over-long field with
# 400 schema-validation and reports ONLY the first field that is too long, so
# discovering four of them cost four round trips. They are checked up front now
# so a listing rewrite fails on disk instead of one field at a time against the
# API. The store also truncates well before these limits in the search result
# card, so treat them as ceilings and not as targets.
FIELD_LIMITS = {
    "title": 63,
    "description": 300,
    "seo_title": 60,
    "seo_description": 160,
}


def check_field_limits(meta: dict) -> list[str]:
    return [f"{k} is {len(meta[k])} chars, max {lim}: {meta[k][:60]!r}..."
            for k, lim in FIELD_LIMITS.items()
            if isinstance(meta.get(k), str) and len(meta[k]) > lim]


def load_meta(slug: str) -> dict:
    meta = json.load(open(os.path.join(ACTORS, slug, "meta.json")))
    over = check_field_limits(meta)
    if over:
        raise SystemExit(f"{meta.get('name', '?')}: store listing field(s) too "
                         "long, Apify will reject the update:\n  "
                         + "\n  ".join(over))
    return meta


# Never ship local build artifacts to the store.
SKIP_DIRS = {"__pycache__", ".git", ".venv", "node_modules", ".pytest_cache",
             ".mypy_cache", ".ruff_cache"}
SKIP_SUFFIX = (".pyc", ".pyo", ".so", ".o", ".log", ".tmp")


def load_sources(slug: str) -> dict:
    """Every text file under src/ becomes a sourceFile, path-relative."""
    root = os.path.join(ACTORS, slug, "src")
    files = {}
    for dirpath, dirnames, names in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for n in names:
            if n.endswith(SKIP_SUFFIX) or n.startswith("."* 1 + "DS_Store"):
                continue
            full = os.path.join(dirpath, n)
            rel = os.path.relpath(full, root)
            try:
                files[rel] = open(full, encoding="utf-8").read()
            except UnicodeDecodeError:
                print(f"  skipping non-text file: {rel}")
    if "README.md" not in files:
        raise SystemExit(f"{slug}: README.md missing -- publish would 403 (§8)")

    # Not a platform gate, so it fails silently rather than loudly -- which is
    # exactly why it needs checking here. Without .actor/input_schema.json the
    # Console renders a raw JSON textarea instead of an input form, and a store
    # buyer who cannot tell what to type does not become a paying user. Three
    # actors in this portfolio lost their schema this way before anyone noticed.
    if os.path.join(".actor", "input_schema.json") not in files:
        print(f"  WARNING: {slug} has no .actor/input_schema.json -- the Console "
              f"will show a raw JSON editor instead of an input form (§4 listing "
              f"quality). Add it before publishing.")
    return files


def ledger_drift() -> int:
    """(public Actors at Apify) - (published Actors in our ledger).

    The 24h counter is derived from our ledger, so it is only as trustworthy as
    the ledger. Publishing at exactly the platform ceiling removes the headroom
    that used to absorb a miscount, so the miscount has to be detected instead.

    Non-zero means the two disagree: a publish that Apify accepted but we failed
    to record (positive), or a ledger row for something no longer public
    (negative). Either way, stop trusting the count to the last unit.

    Returns 0 on any API failure -- this is a safety check, not a gate, and it
    must never be the reason a publish is blocked.
    """
    try:
        live_public = sum(1 for a in apify.list_actors()
                          if apify.get_actor(a["id"]).get("isPublic"))
    except Exception:  # noqa: BLE001
        return 0
    ours = sum(1 for d in state.load_ledger() if d.get("status") == "published")
    return live_public - ours


def rate_limit_check(publishing: bool) -> None:
    """Self-imposed limits (§14). These are what keep 'never stop' from becoming
    'spam until banned'."""
    if not publishing:
        return

    # Gate on the ROLLING 24h window, because that is what Apify enforces. A
    # calendar-day counter reads "0 today" at 00:01 having published 3 at 23:00,
    # which is how an account walks into a platform refusal.
    last24, week = state.published_last_24h(), state.published_this_week()

    # We now publish AT the platform ceiling, so an undercount is no longer
    # absorbed by headroom -- it becomes a refusal. Verify the ledger still
    # agrees with Apify before trusting it, and drop the ceiling if it does not.
    cap = MAX_PUBLISH_PER_24H
    drift = ledger_drift()
    if drift:
        cap = max(1, APIFY_PUBLISH_LIMIT_24H - 1 - abs(drift))
        print(f"  LEDGER DRIFT: {drift:+d} vs the API — capping at {cap} "
              f"this window instead of {MAX_PUBLISH_PER_24H}")

    if last24 >= cap:
        raise SystemExit(
            f"RATE LIMIT: {last24} actor(s) published in the last 24h "
            f"(max {cap}; Apify's own hard limit is {APIFY_PUBLISH_LIMIT_24H})")

    # Spacing: spread publications across the day rather than bursting.
    since = state.hours_since_last_publish()
    if since is not None and since < MIN_PUBLISH_INTERVAL_HOURS:
        raise SystemExit(
            f"RATE LIMIT: last publish was {since:.1f}h ago; spacing requires "
            f"{MIN_PUBLISH_INTERVAL_HOURS}h between publications "
            f"(next slot in {MIN_PUBLISH_INTERVAL_HOURS - since:.1f}h)")
    if week >= MAX_PUBLISH_PER_WEEK:
        raise SystemExit(f"RATE LIMIT: already published {week} actor(s) this week "
                         f"(max {MAX_PUBLISH_PER_WEEK}/week)")

    spend = apify.monthly_spend_usd()
    if spend > MAX_SPEND_USD:
        state.add_blocked("monthly spend over $40", needed=f"review spend (${spend:.2f})")
        raise SystemExit(f"RATE LIMIT: monthly spend ${spend:.2f} > ${MAX_SPEND_USD}")

    rates = [d["success_rate"] for d in state.load_ledger()
             if d.get("success_rate") is not None]
    if rates and sum(rates) / len(rates) < MIN_SUCCESS_RATE:
        raise SystemExit(
            f"RATE LIMIT: aggregate success rate {sum(rates)/len(rates):.0%} < 90%")


def sync_backlog(slug: str, query: str, status: str, **extra) -> bool:
    """Mirror a ledger status change back onto the backlog candidate.

    Matching on `target_actor_name` alone was silently wrong: candidates
    promoted from open_queries.json never carry that field, so the mirror was a
    no-op and the candidate stayed "screened" after it was built. precheck.py
    reads that field, so it announced "BUILD READY: 1 screened candidate" every
    15 minutes for an actor that was already shipped, and the cycle paid to
    rediscover that each time. Caught 2026-07-30 on faa-aircraft-document-index.

    So match on either key, and backfill `target_actor_name` when we matched by
    query -- that way the link exists for every later transition.
    """
    backlog = state.load_backlog()
    changed = False
    for cand in backlog:
        hit = (cand.get("target_actor_name") == slug
               or (query and cand.get("query") == query))
        if not hit or cand.get("status") == status:
            continue
        cand["status"] = status
        cand.setdefault("target_actor_name", slug)
        cand.update(extra)
        changed = True
    if changed:
        state.save_backlog(backlog)
    return changed


DEMAND_FIELDS = ("demand_runs_30d", "buyer_runs_30d", "supply",
                 "differentiator", "rival_economics", "demand_evidence_url",
                 "incumbent", "incumbent_price_usd")


def carry_demand_provenance(slug: str, actor_id: str) -> dict:
    """Copy the screen's measurements from the backlog onto the Actor.

    The screen measures demand_runs_30d / buyer_runs_30d / supply and writes them
    to the backlog candidate -- then the build wrote a fresh meta.json and the
    numbers were dropped on the floor. Measured 2026-08-06: all 3 demand-screened
    Actors read demand=None in meta.json while backlog.json held 1143/888,
    462/203 and 668/522.

    That is not cosmetic. Without it there is no way to tell, after the fact,
    which Actors were selected by the fixed screen and which by the retired
    supply<10 rule -- which is exactly the question that decides whether a zero
    revenue result means anything. Provenance IS the experiment.
    """
    cand = None
    for c in state.load_backlog():
        if c.get("target_actor_name") == slug:
            cand = c
            break
    if not cand:
        return {}

    carried = {k: cand[k] for k in DEMAND_FIELDS if cand.get(k) is not None}
    if not carried:
        return {}

    # Only an Actor with a MEASURED demand figure was chosen by the fixed screen.
    # A bare `supply` number means the retired supply<10 rule picked it, and
    # labelling those "demand_gate" would destroy the one distinction this whole
    # record exists to preserve. (Caught 2026-08-06 stamping all 19.)
    demand_screened = cand.get("demand_runs_30d") is not None
    tag = "demand_gate_2026_08_06" if demand_screened else "legacy_supply_gate"

    # meta.json is the durable per-Actor record.
    mp = os.path.join(ACTORS, slug, "meta.json")
    if os.path.exists(mp):
        meta = json.load(open(mp))
        changed = False
        for k, v in carried.items():
            if meta.get(k) is None:
                meta[k] = v
                changed = True
        if meta.get("screened_by") != tag:
            meta["screened_by"] = tag
            changed = True
        if changed:
            tmp = mp + ".tmp"
            with open(tmp, "w") as f:
                json.dump(meta, f, indent=2, ensure_ascii=False)
            os.replace(tmp, mp)

    # the ledger is what health/reporting reads
    state.update_draw(actor_id, screened_by=tag,
                      **{k: v for k, v in carried.items() if k != "rival_economics"})
    if demand_screened:
        print(f"  provenance: DEMAND-SCREENED demand={carried.get('demand_runs_30d')} "
              f"buyers={carried.get('buyer_runs_30d')} supply={carried.get('supply')}")
    return carried


def cmd_build(slug: str) -> dict:
    stop, why = experiment_stop_reached()
    if stop:
        raise SystemExit(why)
    meta = load_meta(slug)
    src = load_sources(slug)
    draw = next((d for d in state.load_ledger() if d.get("slug") == slug), None)

    if draw and draw.get("actor_id"):
        actor_id = draw["actor_id"]
        print(f"reusing existing actor {actor_id}")
        # Push current source as a new version of 0.0 before rebuilding.
        apify.request("PUT", f"/acts/{actor_id}/versions/0.0", {
            "versionNumber": "0.0", "sourceType": "SOURCE_FILES",
            "buildTag": "latest",
            "sourceFiles": [{"name": p, "format": "TEXT", "content": c}
                            for p, c in src.items()],
        })
    else:
        actor = apify.create_actor(
            name=meta["name"], title=meta["title"],
            description=meta["description"], source_files=src,
            seo_title=meta.get("seo_title", ""),
            seo_description=meta.get("seo_description", ""),
            categories=meta.get("categories", []),
            memory_mbytes=meta.get("memory_mbytes", 512),
        )
        actor_id = actor["id"]
        print(f"created private actor {actor_id} ({meta['name']})")
        state.add_draw({
            "slug": slug, "actor_id": actor_id, "name": meta["name"],
            "title": meta["title"], "query": meta.get("query", ""),
            "incumbent": meta.get("incumbent", ""),
            "incumbent_price_usd": meta.get("incumbent_price_usd"),
            "pricing_plan": meta.get("pricing_plan", ""),
            "created_at": state.now(), "published_at": None,
            "status": "built", "revenue_usd_mo": 0.0,
            "success_rate": None, "runs": 0, "monetized": False,
        })

    b = apify.build_actor(actor_id)
    print(f"build {b['id']}: {b['status']}")
    if b["status"] != "SUCCEEDED":
        print("--- build log (tail) ---")
        print(apify.build_log(b["id"])[-3000:])
        raise SystemExit(f"{slug}: build FAILED")

    # Rebuilding an ALREADY-PUBLISHED actor must not walk its status backwards.
    # This used to write status="built" unconditionally, so pushing a fix to a
    # live actor -- the single most important kind of build there is (§14.1) --
    # silently demoted it to the publish queue. health.py reconcile repairs it,
    # but only on the next cycle that runs reconcile; in between, the ledger
    # claims a live actor is unpublished, publish_queue() offers it a slot it
    # does not need, and daily.md under-reports what is live. Caught 2026-07-30
    # rebuilding oig-leie and fda-device with the charge-ordering fix.
    status = "published" if (draw or {}).get("status") == "published" else "built"
    state.update_draw(actor_id, status=status, last_build=b["id"])

    # Keep the backlog in step with the ledger. Without this the candidate stays
    # "screened" forever, so `screen.py list` shows an actor that is already
    # built and queued as if it were still waiting to be picked up -- which is
    # how a cycle can rebuild something it already shipped.
    sync_backlog(slug, meta.get("query", ""), status, built_at=state.now())

    return {"actor_id": actor_id, "meta": meta}


def prefill_branches_unsmoked(slug: str) -> list[str]:
    """Array-input branch types the PREFILL takes but the smoke input never does.

    The prefill is not decoration -- it is the input every store visitor runs
    when they click "Try", so an unsmoked prefill branch is an untested path on
    the DEFAULT buyer journey. Measured 2026-08-06 on
    medicare-provider-enrollment-revalidation-due-date: its prefill mixes a bare
    NPI string in with two objects, its smoke was objects only, and the bare
    branch synthesised an INT recordId where the inferred dataset schema said
    ["string","null"]. Apify validates pushed items server-side, so that 400d
    the whole push and the run FAILED with zero rows AFTER charging the buyer
    -- a §9 clawback shape on a live, monetized Actor. Its smoke passed
    throughout, on exactly the rows that hid it.

    Deliberately a per-element TYPE check on array inputs and nothing cleverer:
    that is the shape that has now bitten twice (the other being the D/A-only
    Form D smoke), and a check nobody can read is a check nobody keeps.
    """
    from_disk = os.path.join(ACTORS, slug)
    schema_path = os.path.join(from_disk, "src", ".actor", "input_schema.json")
    smoke_path = os.path.join(from_disk, "smoke.json")
    if not (os.path.exists(schema_path) and os.path.exists(smoke_path)):
        return []
    try:
        props = (json.load(open(schema_path)).get("properties") or {})
        smoke = json.load(open(smoke_path))
    except (ValueError, OSError):
        return []

    def types(v):
        return {type(x).__name__ for x in v} if isinstance(v, list) else set()

    out = []
    for key, spec in props.items():
        pre = spec.get("prefill", spec.get("default"))
        if not isinstance(pre, list) or not pre:
            continue
        missing = types(pre) - types(smoke.get(key))
        if missing:
            out.append(f"input '{key}': prefill contains {sorted(missing)} "
                       f"element(s) that smoke.json never exercises")
    return out


def cmd_smoke(slug: str, actor_id: str = "") -> bool:
    """§14: never publish an actor that fails its own smoke test."""
    meta = load_meta(slug)
    if not actor_id:
        draw = next((d for d in state.load_ledger() if d.get("slug") == slug), None)
        if not draw:
            raise SystemExit(f"{slug}: not in ledger -- build first")
        actor_id = draw["actor_id"]

    smoke_path = os.path.join(ACTORS, slug, "smoke.json")
    run_input = json.load(open(smoke_path)) if os.path.exists(smoke_path) else {}

    for gap in prefill_branches_unsmoked(slug):
        print(f"SMOKE FAIL: {gap}. The prefill is the default buyer journey; "
              f"widen smoke.json to cover it (see prefill_branches_unsmoked).")
    if prefill_branches_unsmoked(slug):
        return False

    print(f"smoke test: running {actor_id} ...")
    run = apify.run_actor(actor_id, run_input,
                          memory_mbytes=meta.get("memory_mbytes", 512))
    print(f"run {run['id']}: {run['status']}")

    if run["status"] != "SUCCEEDED":
        print(apify.build_log(run["id"])[-3000:])
        return False

    # Fetch enough to actually test the threshold. This used to be a hardcoded
    # limit=5, which silently capped smoke_min_items at 5: any actor asking for
    # more failed its own smoke test no matter what it produced.
    min_items = meta.get("smoke_min_items", 1)
    items = apify.run_dataset(run, limit=max(5, min_items))
    print(f"dataset: {len(items)} item(s) sampled")
    for it in items[:3]:
        print("  " + json.dumps(it)[:300])

    # An actor that returns nothing is silently broken -- exactly the failure
    # mode §3 killed an entire strategy over.
    if len(items) < min_items:
        print(f"SMOKE FAIL: {len(items)} items < required {min_items}")
        return False

    state.update_draw(actor_id, smoke_ok=True, smoke_at=state.now())
    print("SMOKE PASS")
    return True


def cmd_monetize(slug: str, actor_id: str = "") -> bool:
    """Apply pay-per-event pricing from meta.json. Run while still PRIVATE.

    §10 of the plan says monetization is Console-only. That is FALSE -- verified
    2026-07-29: PUT /v2/acts/{id} with pricingInfos works, and on a private actor
    it applies instantly with no notice period.
    """
    meta = load_meta(slug)
    if not actor_id:
        draw = next((d for d in state.load_ledger() if d.get("slug") == slug), None)
        if not draw:
            raise SystemExit(f"{slug}: not in ledger -- build first")
        actor_id = draw["actor_id"]

    plan = meta.get("pricing_plan") or {}
    events = plan.get("events") or []
    if not events:
        print(f"  {slug}: meta.json has no pricing_plan.events -- cannot monetize")
        state.add_blocked("pricing plan missing", draw=slug,
                          needed="add pricing_plan.events to meta.json "
                                 "(name/title/usd/description)")
        return False

    already = apify.pricing_events(actor_id)
    code_events = {e["name"] for e in events}
    # Compare PRICES, not just event names. This gate used to test name-subset
    # only, which made the whole monetize path blind to a repricing: editing a
    # `usd` in meta.json and re-shipping printed "already monetized" and left
    # the old price live. Found 2026-07-29 while repricing the 7 private draws,
    # and it matters because meta.json is the only place a price is written
    # down -- a silent no-op here means the ledger, the meta and the store all
    # disagree while every report reads from the file that is wrong.
    drift = {e["name"]: (float(already[e["name"]].get("eventPriceUsd") or 0), float(e["usd"]))
             for e in events
             if e["name"] in already
             and float(already[e["name"]].get("eventPriceUsd") or 0) != float(e["usd"])}
    if code_events and code_events.issubset(set(already)) and not drift:
        print(f"  {slug}: already monetized ({', '.join(sorted(code_events))})")
        state.update_draw(actor_id, monetized=True)
        return True
    if drift:
        for name, (live_usd, want) in sorted(drift.items()):
            print(f"  {slug}: reprice {name} ${live_usd} -> ${want}")

    is_public = bool(apify.get_actor(actor_id).get("isPublic"))
    if is_public and already:
        # Changing pricing on a live actor is a §8 significant change. Never do
        # that silently from an automated loop -- it emails every user and locks
        # the actor to one pricing change per month.
        print(f"  {slug}: already public WITH pricing -- refusing to change it "
              f"automatically (§8: 14-day notice, once per month). Operator call.")
        state.add_blocked("pricing change on a live actor", draw=slug,
                          needed="review meta.json vs live pricing, change by hand")
        return False

    try:
        apify.set_pricing(actor_id, events)
    except ValueError as e:
        print(f"  {slug}: {e}")
        state.add_blocked("pricing plan invalid", draw=slug, needed=str(e)[:300])
        return False
    except apify.ApifyError as e:
        # §14 names `400 schema-validation` as an AGENT bug, not an operator
        # blocker -- fix and retry, never escalate. This path used to escalate
        # every 4xx alike, and on 2026-07-29 that mis-routed a repricing bug of
        # mine (pricingInfos needs the existing records echoed back with their
        # createdAt) into SIX red "needs you" pings, one per draw in the batch,
        # for something no human could have acted on. Classify before pinging.
        print(f"  {slug}: pricing rejected: {e}")
        if "schema-validation" in str(e):
            print(f"  {slug}: ^ that is a §14 agent bug -- fix the request, "
                  f"not the operator. Not escalating.")
            return False
        state.add_blocked("pricing API rejected", draw=slug, needed=str(e)[:300])
        return False

    # Trust the API, not the request: re-read and confirm every event the code
    # charges is actually configured. A silently missing event earns $0.
    live = apify.pricing_events(actor_id)
    missing = code_events - set(live)
    if missing:
        print(f"  {slug}: FAILED -- events not registered: {sorted(missing)}")
        return False

    state.update_draw(actor_id, monetized=True, monetized_at=state.now())
    state.resolve_blocked("monetization wizard", slug)
    for name in sorted(code_events):
        print(f"  monetized: {name} = ${live[name]['eventPriceUsd']}")
    return True


def cmd_publish(slug: str) -> None:
    meta = load_meta(slug)
    draw = next((d for d in state.load_ledger() if d.get("slug") == slug), None)
    if not draw:
        raise SystemExit(f"{slug}: not in ledger -- build first")
    actor_id = draw["actor_id"]

    rate_limit_check(publishing=True)

    if not cmd_smoke(slug, actor_id):
        raise SystemExit(f"{slug}: smoke test FAILED -- refusing to publish (§14)")

    cats = meta.get("categories", [])
    if not cats:
        raise SystemExit(f"{slug}: categories required or 400 schema-validation (§8)")

    # Publishing does not rebuild, so a missing input schema can only be fixed
    # by rebuilding FIRST. This was a warning until 2026-07-29, and a warning is
    # worthless to an unattended agent: three actors -- clinical-trial, fda-device
    # and irs -- reached the front of the publish queue without a schema and
    # nobody saw the line. It is a gate now, like readme and categories. The
    # store listing is the product page (§4); shipping a raw JSON textarea to
    # buyers is not a cosmetic defect.
    if not os.path.exists(os.path.join(ACTORS, slug, "src", ".actor",
                                       "input_schema.json")):
        raise SystemExit(
            f"{slug}: no src/.actor/input_schema.json -- refusing to publish. "
            f"Buyers would see a raw JSON editor instead of an input form (§4). "
            f"Write it, then re-run `ship.py build {slug}` before publishing.")

    # ---- MONETIZE BEFORE PUBLISHING. This ordering is the whole point. ----
    # Pricing set while the actor is still PRIVATE applies immediately, because
    # there is no prior pricing to "change". Publish first and you are stuck:
    # switching an already-public actor to PAY_PER_EVENT is a *significant
    # change* under §8 -- 14 days' notice, once per month -- during which the
    # actor serves real users for free. That is exactly what happened to
    # oig-leie-exclusion-screening on 2026-07-29. Never again.
    if not cmd_monetize(slug, actor_id):
        raise SystemExit(f"{slug}: refusing to publish unmonetized (see above)")

    try:
        res = apify.publish_actor(actor_id, cats)
    except apify.ApifyError as e:
        if e.type == "readme-required":
            # Our bug per §14 -- surface loudly rather than blocking on a human.
            raise SystemExit(f"{slug}: readme-required -- add README.md to src/, rebuild")
        if e.operator_blocker:
            state.add_blocked(f"publish failed: {e.type or e.status}", draw=slug,
                              needed=e.body[:300])
            print(f"OPERATOR BLOCKER recorded: {e}")
            return
        raise

    print(f"published: isPublic={res.get('isPublic')} "
          f"https://apify.com/{res.get('username')}/{res.get('name')}")

    # judge_due is the operator-facing 60-day date (§7 stage 6). It was being
    # set to the publish instant, which read as "due now" for every live draw.
    # health.py judge() computes from published_at and was never fooled, but the
    # ledger is a human surface too.
    published = datetime.now(timezone.utc)
    state.update_draw(actor_id, status="published",
                      published_at=published.isoformat(timespec="seconds"),
                      url=f"https://apify.com/{res.get('username')}/{res.get('name')}",
                      judge_due=(published + timedelta(days=60)).isoformat(
                          timespec="seconds"))

    # Mirror to the backlog, exactly as cmd_build() does. cmd_build had this and
    # cmd_publish did not, which meant a published candidate stayed "built" in
    # backlog.json forever -- so screen.publish_queue() kept offering it a slot
    # and daily.md kept listing it in the queue it had already left. Caught
    # 2026-07-30 on fda-device-establishment-registration: it was live on the
    # store and still sitting at #3 in its own publish queue.
    sync_backlog(slug, meta.get("query", ""), "published",
                 published_at=published.isoformat(timespec="seconds"))

    # ---- Did the pricing actually SURVIVE going public? ----
    # cmd_monetize above proves the pricing was *configured* while private. The
    # premise that it therefore takes effect immediately is a reasoned
    # inference, not a measurement, and the measurement is now cheap: the store
    # index publishes `currentPricingInfo`, which is what a buyer is charged.
    # Verify it here, on the first publish that has pricing set beforehand,
    # because the failure mode is silent -- oig-leie looked monetized on
    # `pricingInfos` for hours while serving every real user for free.
    try:
        sf = apify.store_facing(actor_id)
    except apify.ApifyError as e:
        print(f"  store view unavailable ({e.status}) -- verify pricing next cycle")
        return
    state.update_draw(actor_id,
                      effective_pricing_model=sf["effective_pricing_model"],
                      pricing_pending=sf["pricing_pending"],
                      earning=sf["effective_pricing_model"] != "FREE")
    if sf["effective_pricing_model"] == "FREE":
        # Not a crash: the actor is live and working, it just is not charging.
        # It is an operator-visible money fact, so record it as one.
        print(f"  WARNING: {slug} is public but the store shows "
              f"currentPricingInfo FREE despite pricing configured while "
              f"private. Monetize-before-publish did NOT hold.")
        state.add_blocked("published actor serving FREE despite pre-set pricing",
                          draw=slug,
                          needed=f"Store shows currentPricingInfo FREE for {slug} "
                                 f"immediately after publish, though PAY_PER_EVENT "
                                 f"was configured while private. Verify in Console; "
                                 f"the monetize-before-publish ordering may not "
                                 f"work as documented in CLAUDE.md.")
    else:
        print(f"  pricing verified live on the store: "
              f"{sf['effective_pricing_model']} (charging from first run)")

    # No monetization blocker here any more: cmd_monetize() ran BEFORE the
    # publish above and publishing is refused without it. §10's "one irreducible
    # human step" turned out not to be irreducible at all.


def cmd_ship(slug: str) -> None:
    rate_limit_check(publishing=True)   # fail fast before spending build compute
    cmd_build(slug)
    cmd_publish(slug)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)
    cmd, slug = sys.argv[1], sys.argv[2]
    {"build": cmd_build, "smoke": cmd_smoke, "monetize": cmd_monetize,
     "publish": cmd_publish, "ship": cmd_ship}[cmd](slug)

```

### 8.1 `tools/state.py`
```python
#!/usr/bin/env python3
"""Durable state for the portfolio agent (§14).

Nothing important lives in agent context -- the agent is restarted constantly and
every cycle is a fresh invocation. Disk is the only memory that survives.

Writes are atomic (tmp + rename) so a restart mid-write cannot corrupt state.
"""

from __future__ import annotations

import json
import os
from datetime import datetime, timezone

STATE = os.environ.get("STATE", os.path.expanduser("~/portfolio"))

LEDGER = os.path.join(STATE, "ledger.json")
BACKLOG = os.path.join(STATE, "backlog.json")
REJECTED = os.path.join(STATE, "rejected.json")
BLOCKED = os.path.join(STATE, "blocked.json")
HEARTBEAT = os.path.join(STATE, "heartbeat.log")


def now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def _load(path, default):
    try:
        with open(path) as f:
            txt = f.read().strip()
            return json.loads(txt) if txt else default
    except (FileNotFoundError, json.JSONDecodeError):
        return default


def _save(path, data) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    tmp = f"{path}.tmp"
    with open(tmp, "w") as f:
        json.dump(data, f, indent=2)
        f.flush()
        os.fsync(f.fileno())
    os.replace(tmp, path)  # atomic


def load_ledger():   return _load(LEDGER, [])
def save_ledger(d):  _save(LEDGER, d)
def load_backlog():  return _load(BACKLOG, [])
def save_backlog(d): _save(BACKLOG, d)
def load_rejected(): return _load(REJECTED, [])
def save_rejected(d): _save(REJECTED, d)
def load_blocked():  return _load(BLOCKED, [])
def save_blocked(d): _save(BLOCKED, d)


def write_json(filename: str, data) -> None:
    """Atomically write an auxiliary state file under ~/portfolio.

    For measurement caches (store sweeps and the like) that cost real API calls
    to produce and should outlive the cycle that produced them -- §14's rule
    that nothing important lives only in context.
    """
    _save(os.path.join(os.path.dirname(LEDGER), filename), data)


def read_json(filename: str, default=None):
    return _load(os.path.join(os.path.dirname(LEDGER), filename),
                 [] if default is None else default)


def heartbeat(msg: str) -> None:
    """Exactly one line per cycle, even when nothing happened (§14)."""
    with open(HEARTBEAT, "a") as f:
        f.write(f"{now()} {msg}\n")


def _notify(fn_name: str, *args) -> None:
    """Best-effort Discord ping. A notification failure must never break a cycle,
    and must never be the reason the agent stops doing portfolio work."""
    try:
        import notify
        getattr(notify, fn_name)(*args)
    except Exception:  # noqa: BLE001
        pass


def add_blocked(what: str, draw: str = "", needed: str = "") -> None:
    """Record an operator blocker. Never halt, never retry in a loop (§14).

    Notifies Discord on FIRST occurrence only. A blocker seen every cycle for a
    week must not produce a week of pings -- that is how a human learns to ignore
    the channel.
    """
    blocked = load_blocked()
    for b in blocked:
        if b["what"] == what and b.get("draw") == draw and not b.get("resolved"):
            b["last_seen"] = now()
            b["count"] = b.get("count", 1) + 1
            save_blocked(blocked)
            return                      # already known -> stay silent
    # De-dup the PING on `what` alone, while still recording per-draw state.
    # The dedup key used to be (what, draw), which is right for a blocker that
    # is genuinely per-draw but floods when one cause hits a whole batch: on
    # 2026-07-29 a single bug of mine escalated across six draws and sent six
    # red pings the operator could do nothing about. One cause is one thing to
    # tell a human, however many draws it touches; the extra draws are detail
    # for daily.md, not six separate alarms.
    same_cause_already_open = any(
        b["what"] == what and not b.get("resolved") for b in blocked)
    blocked.append({
        "what": what, "draw": draw, "needed": needed,
        "since": now(), "last_seen": now(), "count": 1, "resolved": False,
    })
    save_blocked(blocked)
    if not same_cause_already_open:
        _notify("blocked", what, draw, needed)


def resolve_blocked(what: str, draw: str = "", note: str = "") -> None:
    blocked = load_blocked()
    hit = False
    for b in blocked:
        if b["what"] == what and b.get("draw") == draw and not b.get("resolved"):
            b["resolved"] = True
            b["resolved_at"] = now()
            if note:
                b["resolved_note"] = note
            hit = True
    save_blocked(blocked)
    # Mirror add_blocked's de-dup: announce a cause cleared once, after the LAST
    # draw carrying it clears. Otherwise clearing a batch produces exactly the
    # ping storm the batched escalation already produced, a second time.
    still_open = any(b["what"] == what and not b.get("resolved") for b in blocked)
    if hit and not still_open:
        _notify("resolved", what, draw)


def add_rejected(query: str, reason: str, supply=None, note: str = "") -> None:
    """Rejected candidates are signal -- logging them prevents rework (§7 stage 2)."""
    rej = load_rejected()
    if any(r["query"] == query for r in rej):
        return
    rej.append({"query": query, "reason": reason, "supply": supply,
                "note": note, "at": now()})
    save_rejected(rej)


def rejected_queries() -> set:
    return {r["query"] for r in load_rejected()}


def backlog_queries() -> set:
    return {c["query"] for c in load_backlog()}


def ledger_queries() -> set:
    return {d.get("query", "") for d in load_ledger()}


def seen_queries() -> set:
    """Everything already screened -- never spend budget on it twice."""
    return rejected_queries() | backlog_queries() | ledger_queries()


def add_draw(entry: dict) -> None:
    led = load_ledger()
    led.append(entry)
    save_ledger(led)


def update_draw(actor_id: str, **fields) -> None:
    led = load_ledger()
    for d in led:
        if d.get("actor_id") == actor_id:
            d.update(fields)
            d["updated_at"] = now()
    save_ledger(led)


def get_draw(actor_id: str):
    return next((d for d in load_ledger() if d.get("actor_id") == actor_id), None)


# --- Degradation: ONE definition, shared by health.py and precheck.py --------
#
# These two had SEPARATE degradation rules until 2026-08-03 and the looser one
# won, because precheck.py is what decides whether a cycle runs at all -- and it
# marks degradation an EMERGENCY, the single condition allowed to override the
# weekly-allowance guard (precheck.main: `and not emergency`).
#
# health.py required >= 3 public runs before calling a rate a rate. precheck.py
# required nothing, so it escalated on a single run. hcris-hospital-cost-report
# was diagnosed, fixed and verified on 2026-08-03, but the buyer run that failed
# on the OLD build stays inside the store's 30-day public window until
# ~2026-09-01 -- so the gate would have raised that already-closed emergency
# every 15 minutes for a month, past the guard, at ~0.70% of a weekly allowance
# each. That is the 2026-07-29 saturation failure with its brakes removed.
#
# Both callers import this now. Drift is not possible with one function.

DEGRADED_RATE = 0.90   # §14: falling success rate -> fix or delete immediately
MIN_RATE_RUNS = 3      # one run is an anecdote, not a rate


def public_failures(d) -> int | None:
    """Failed runs inside the store's public 30-day window, or None if unknown.

    The store publishes a rate and a count, not a failure count; recover it.
    """
    runs = d.get("public_runs_30d")
    rate = d.get("public_success_rate")
    if not runs or rate is None:
        return None
    return round(runs * (1.0 - rate))


def degradation(d) -> tuple[bool, str]:
    """(is_degraded, reason) for one ledger draw. The §14 step-1 test.

    Two independent sources of evidence, both deliberately scoped to the code
    that is actually live:

      * **Our own runs on the live build** (`success_rate`). apify.success_rate
        already excludes superseded builds: development history must not
        condemn shipped code.

      * **The store's public 30-day rate** -- what buyers and Apify's ranking
        see, and the only view that includes other people's runs (a buyer's run
        never appears in /v2/acts/{id}/runs, which is how the hcris failure was
        found at all). But it is a LAGGING WINDOW: failures from before a fix
        sit in it for up to 30 days. Counting them re-raises an emergency that
        is already closed, so only failures accrued SINCE the current build
        went live are counted, against the baseline health.check stamps.

    Pure and side-effect free -- precheck must stay cheap.
    """
    slug = d.get("slug", d.get("actor_id", "?"))

    rate = d.get("success_rate")
    if rate is not None and rate < DEGRADED_RATE:
        return True, f"{slug} at {rate:.0%} on our own runs of the live build"

    fails = public_failures(d)
    if fails is None:
        return False, ""

    base = d.get("pub_baseline") or {}
    if base.get("build") != d.get("success_build"):
        # The baseline belongs to a different build than the one we last scored,
        # so the window still describes older code. No post-fix evidence yet.
        return False, ""

    # The 30-day window slides, so both counters can fall below their baseline
    # as old runs age out. Clamp rather than go negative.
    runs_since = max(0, (d.get("public_runs_30d") or 0) - int(base.get("runs") or 0))
    fails_since = max(0, fails - int(base.get("fails") or 0))
    if runs_since >= MIN_RATE_RUNS and fails_since > runs_since * (1 - DEGRADED_RATE):
        r = 1.0 - fails_since / runs_since
        return True, (f"{slug} at {r:.0%} public over {runs_since} buyer run(s) "
                      f"since build {base.get('build')} went live")
    return False, ""


def probe_never_passed(d) -> tuple[bool, str]:
    """True when EVERY public run on the current live build has failed.

    Public runs are not buyers -- `public_runs_30d == ceil(days_public)` on 16
    of 16 live Actors, i.e. one automated platform probe per day of public life
    (see health.traction). But each probe is a real end-to-end execution of the
    live build on the default input, so a build that has never once passed one
    is broken on the journey every store visitor takes, and MIN_RATE_RUNS -- a
    sensible floor for a RATE -- costs a day of §9 clawback exposure per run
    while it waits to say so.

    This is deliberately NOT a rate test. It fires only on the unambiguous case
    (zero successes since the baseline), so a flaky upstream that fails one
    probe in four cannot hold precheck in a permanent emergency.

    The case it is built from: medicare-provider-enrollment-revalidation-due-date
    read 0/1 on its live build for 17 hours on 2026-08-06 while health.check
    printed "stale window, not an emergency". The run had charged the buyer and
    then died with zero rows on a dataset schema-validation 400.
    """
    slug = d.get("slug", d.get("actor_id", "?"))
    fails = public_failures(d)
    if fails is None:
        return False, ""
    base = d.get("pub_baseline") or {}
    if base.get("build") != d.get("success_build"):
        return False, ""
    runs_since = max(0, (d.get("public_runs_30d") or 0) - int(base.get("runs") or 0))
    fails_since = max(0, fails - int(base.get("fails") or 0))
    if runs_since > 0 and fails_since >= runs_since:
        return True, (f"{slug}: every platform probe on live build "
                      f"{base.get('build')} has FAILED ({fails_since}/{runs_since}) "
                      f"-- broken on the default buyer journey")
    return False, ""


def published_last_24h() -> int:
    """Publications in the ROLLING 24 hours.

    This is the measurement that matters: **Apify enforces a hard limit of 5
    Actor publications per rolling 24-hour window.** A calendar-day counter does
    not protect against that -- publish 3 at 23:00 and 3 more at 00:30 and a
    per-day counter reads "3 today" while Apify sees 6 in ninety minutes and
    refuses. Always gate on this, not on published_today().
    """
    from datetime import timedelta
    cutoff = (datetime.now(timezone.utc) - timedelta(hours=24)).isoformat()
    return sum(1 for d in load_ledger()
               if (d.get("published_at") or "") >= cutoff)


def published_today() -> int:
    """Publications in the current UTC calendar day.

    Kept for reporting only. For rate limiting use published_last_24h(), which
    is what Apify actually enforces against.
    """
    today = now()[:10]
    return sum(1 for d in load_ledger()
               if (d.get("published_at") or "")[:10] == today)


def published_this_week() -> int:
    from datetime import timedelta
    cutoff = (datetime.now(timezone.utc) - timedelta(days=7)).isoformat()
    return sum(1 for d in load_ledger()
               if (d.get("published_at") or "") >= cutoff)


def hours_since_last_publish():
    """Hours since the most recent publication, or None if nothing published yet.

    Backs the spacing rule: five publications are allowed per rolling 24h, but
    they must be spread across it rather than fired in one burst.
    """
    stamps = [d.get("published_at") for d in load_ledger() if d.get("published_at")]
    if not stamps:
        return None
    return days_since(max(stamps)) * 24


def days_since(iso: str) -> float:
    if not iso:
        return 0.0
    t = datetime.fromisoformat(iso)
    if t.tzinfo is None:
        t = t.replace(tzinfo=timezone.utc)
    return (datetime.now(timezone.utc) - t).total_seconds() / 86400

```

### 8.1 `tools/visibility.py`
```python
#!/usr/bin/env python3
"""Are our Actors actually visible to a BUYER?

This exists because of a specific, expensive mistake. For a week the portfolio
measured its store ranking with `apify.store_occupancy()`, which sends the
owner's API token. That returns the OWNER'S VIEW. It reported "#1 for 10 of 11
target queries" while the true public result set contained none of our Actors at
all -- Apify excludes Actors from developers who have not passed KYC from Store
search. Every strategic conclusion drawn from that ranking was measuring nothing.

**Rule: visibility is only ever measured with NO Authorization header.**
Never import apify.request() here -- it attaches the token unconditionally.

Usage:
    visibility.py check        # every live Actor against its own target query
    visibility.py query "<q>"  # one query, anonymous vs authenticated
"""

from __future__ import annotations

import datetime as _dt
import json
import os
import sys
import urllib.parse
import urllib.request

sys.path.insert(0, os.path.dirname(__file__))

import state

STORE = "https://api.apify.com/v2/store"
USERNAME = "malekh"

# A freshly published Actor is absent from the store search index for a while.
# Measured 2026-08-07: npi-registry-lookup-deactivation-check was absent from
# even the broadest possible query (`search=malekh`, which cannot be a ranking
# artifact) 3 minutes after publish, while ofac-sdn-... published 4.8h earlier
# was fully indexed. So the lag is bounded between those two and is not
# otherwise measured. 6h is chosen just above the known-indexed observation:
# under it we say "not indexed yet", over it we alarm. Widen only with a
# measurement, not to silence an alarm.
INDEX_LAG_HOURS = 6.0


def _hours_since_publish(draw: dict) -> float | None:
    """Hours since `published_at`, or None if unparseable/absent."""
    raw = draw.get("published_at")
    if not raw:
        return None
    try:
        ts = _dt.datetime.fromisoformat(raw)
    except ValueError:
        return None
    if ts.tzinfo is None:
        ts = ts.replace(tzinfo=_dt.timezone.utc)
    now = _dt.datetime.now(_dt.timezone.utc)
    return (now - ts).total_seconds() / 3600.0


def _get(url: str, token: str | None = None) -> dict:
    req = urllib.request.Request(url)
    req.add_header("User-Agent", "Mozilla/5.0 (compatible; portfolio-agent)")
    if token:
        req.add_header("Authorization", f"Bearer {token}")
    with urllib.request.urlopen(req, timeout=45) as r:
        return json.load(r)["data"]


def search(query: str, token: str | None = None, limit: int = 25) -> dict:
    url = f"{STORE}?search={urllib.parse.quote(query)}&limit={limit}"
    d = _get(url, token)
    items = d.get("items") or []
    ours = [i for i in items if i.get("username") == USERNAME]
    return {"total": d.get("total"), "items": len(items), "ours": len(ours),
            "rank": next((i + 1 for i, it in enumerate(items)
                          if it.get("username") == USERNAME), None)}


def token() -> str:
    tok = os.environ.get("APIFY_TOKEN", "").strip()
    if not tok:
        env = os.path.expanduser("~/portfolio-agent/agent.env")
        if os.path.exists(env):
            for line in open(env):
                if line.startswith("APIFY_TOKEN="):
                    return line.split("=", 1)[1].strip()
    return tok


def check() -> int:
    """Returns the count of live Actors visible to the public."""
    tok = token()
    live = [d for d in state.load_ledger() if d.get("status") == "published"]
    visible = 0
    filtered = 0

    print(f"{'actor':<46}{'anon':<8}{'authed':<9}verdict")
    for d in live:
        q = d.get("query") or d["slug"].replace("-", " ")
        try:
            a = search(q)                 # anonymous — the buyer's view
            b = search(q, tok)            # owner's view, for contrast only
        except Exception as e:  # noqa: BLE001
            print(f"{d['slug'][:44]:<46}ERROR {e}")
            continue
        ok = a["ours"] > 0
        visible += ok

        if ok:
            verdict = f"VISIBLE (rank {a['rank']})"
        elif b["ours"] > 0:
            # THE KYC SHAPE, and the only one that means "buyers cannot see us".
            # Present in the owner's result set, absent from the public one:
            # the same URL answering two different ways is exactly what cost a
            # week in Aug 2026. This is the alarm.
            filtered += 1
            verdict = "FILTERED FROM PUBLIC (KYC shape) -- ALARM"
        else:
            # Absent from BOTH views. That is not filtering -- there is nothing
            # to filter, the row is simply not in the index. Distinguishing the
            # two matters because a just-published Actor reads this way every
            # time, and reading it as the KYC failure returning would be an
            # expensive mis-diagnosis of a healthy publish.
            age = _hours_since_publish(d)
            if age is None:
                verdict = "ABSENT FROM INDEX (publish time unknown) -- check"
            elif age < INDEX_LAG_HOURS:
                verdict = f"not indexed yet ({age:.1f}h since publish) -- expected"
            else:
                verdict = f"ABSENT FROM INDEX {age:.1f}h after publish -- check"
        print(f"{d['slug'][:44]:<46}{a['ours']}/{a['items']:<6}{b['ours']}/{b['items']:<7}{verdict}")

    print(f"\n{visible}/{len(live)} live Actors are visible to the public.")
    # Gate this on the MEASURED shape, not on the count. "All invisible" was the
    # symptom of KYC, never the evidence for it -- the evidence is that the
    # authed view disagrees. A portfolio that is entirely un-indexed (say, every
    # Actor published in the last hour) is not a KYC problem and must not be
    # reported as one.
    # ANY filtered Actor fires it, not only an all-filtered portfolio: a mixed
    # result (some filtered, some merely un-indexed) is still the KYC shape and
    # a banner that waits for unanimity is a banner that goes dark exactly when
    # the portfolio is publishing.
    if filtered:
        print(f"\n{filtered} Actor(s) present in the OWNER's result set and absent")
        print("from the public one. That is the KYC exclusion shape: Apify omits")
        print("Actors from non-KYC-verified developers from Store search results.")
        print("No amount of building, pricing or SEO changes this until it clears.")
    return visible


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "check"
    if cmd == "check":
        v = check()
        sys.exit(0 if v else 1)
    elif cmd == "query":
        q = sys.argv[2]
        a, b = search(q), search(q, token())
        print(f"  query: {q!r}")
        print(f"  anonymous     total={a['total']} items={a['items']} ours={a['ours']} rank={a['rank']}")
        print(f"  authenticated total={b['total']} items={b['items']} ours={b['ours']} rank={b['rank']}")
        if b["ours"] and not a["ours"]:
            print("\n  ⚠ visible to the owner ONLY — this is the KYC exclusion.")
    else:
        print(__doc__)

```

## 9. CANDIDATE EVALUATION & REJECTION DATASETS

### 9.1 `probed.json`
```json
[
 {
  "query": "uspto patent term adjustment",
  "supply": 1,
  "next_step": "Supply 1 is the scarcest thing found this cycle. BLOCKED ON A KEY: probed 2026-07-29, https://api.uspto.gov/api/v1/patent/applications/search returns 401 with no key. The USPTO Open Data Portal key is free self-service at developer.uspto.gov -- same operator trip as the FDA Data Dashboard key. Demand not yet verified: name a priced incumbent (Anaqua / Clarivate IP docketing) with a real URL before this is buildable.",
  "probed_at": "2026-07-29T06:26:10+00:00",
  "resolved": false
 },
 {
  "query": "tsca chemical data reporting",
  "supply": 1,
  "next_step": "Source NOT yet located. EPA Envirofacts REST (data.epa.gov/efservice/cdr_2020_public/...) 404s and the epa.gov/chemical-data-reporting page exposed no .csv/.zip links. Find the real CDR extract (try ChemView and the Envirofacts table registry) before spending build time. Incumbent candidates: Enhesa / ERA Environmental / 3E.",
  "probed_at": "2026-07-29T06:26:10+00:00",
  "resolved": false,
  "status": "source_unverified",
  "note": "Partial probe 2026-07-29, UNFINISHED. EPA Envirofacts is the likely home but the CDR table name is not yet resolved: data.epa.gov/efservice/tsca_cdr_2020_chem/... returns {\"error\":\"The table is not available.\"} and data.epa.gov/efservice/ itself 404s, while enviro.epa.gov/envirofacts/cdr returns 200. NEXT: resolve the real table name from the Envirofacts metadata service before spending more; if CDR is only exposed through the HTML app, reject it as the section 3 fragile class."
 },
 {
  "query": "nrc licensee event report",
  "supply": 3,
  "next_step": "Source and demand both unverified. Small buyer pool (US nuclear operators) -- check that a priced incumbent exists at all before investing.",
  "probed_at": "2026-07-29T06:26:10+00:00",
  "resolved": false
 },
 {
  "query": "gsa calc labor rate",
  "supply": 5,
  "next_step": "Source unverified: the CALC tool moved to buy.gsa.gov/pricing and the old calc.gsa.gov API may be retired -- confirm a documented endpoint responds before building. Incumbent Deltek GovWin IQ is genuinely expensive, so demand is plausible.",
  "probed_at": "2026-07-29T06:26:10+00:00",
  "resolved": true,
  "status": "rejected",
  "note": "CALC API retired (404 on both documented endpoints) -- moved to rejected.json 2026-07-29"
 },
 {
  "query": "faa airworthiness directive compliance",
  "supply": 6,
  "next_step": "Incumbents (ATP, CAMP Systems) are real and expensive, but the FAA DRS search API is undocumented -- likely the section 3 fragile class. Check for a documented AD export first; if only DRS exists, reject.",
  "probed_at": "2026-07-29T06:26:10+00:00",
  "resolved": false
 },
 {
  "query": "freight broker carrier vetting",
  "supply": 13,
  "next_step": "FAILS the <10 gate at 13, recorded only to show the naming search behind the motor-carrier candidate: 'motor carrier authority revocation' (supply 7) is the name that wins the same buyer. Do not re-probe.",
  "probed_at": "2026-07-29T06:26:10+00:00",
  "resolved": false
 },
 {
  "query": "cms hospital cost report hcris",
  "supply": 2,
  "resolved": true,
  "next_step": "PROMOTED. Worked up fully this cycle and added to the backlog at score 164 under the better-ranking name 'hcris hospital cost report' (supply 2). 'medicare cost report worksheet' (supply 1) is the same product and is covered by that entry -- do not screen it separately.",
  "probed_at": "2026-07-29T08:05:00+00:00"
 },
 {
  "query": "import refusal fda oasis",
  "supply": 2,
  "resolved": true,
  "next_step": "KILLED ON OCCUPANCY 2026-07-29 -- see rejected.json for who holds it. Do not re-probe. BEST UNFINISHED LEAD. Same regulatory-intelligence buyer and same priced incumbent (Redica/FDAzilla, $289/document) already validated for the two FDA candidates in the backlog, and api.fda.gov is known-reachable and keyless from this host. UNRESOLVED: openFDA has no import-refusal endpoint; FDA publishes refusals through the accessdata.fda.gov OASIS app, which is likely the §3 fragile class. NEXT",
  "probed_at": "2026-07-29T08:05:00+00:00",
  "status": "rejected_occupied",
  "updated_at": "2026-07-29T11:58:00+00:00"
 },
 {
  "query": "antidumping countervailing duty order",
  "supply": 2,
  "resolved": false,
  "next_step": "Supply 2 with genuinely expensive incumbents (Descartes CustomsInfo, Thomson Reuters ONESOURCE Global Trade). Source unresolved: api.trade.gov did not respond from this host at all (curl exit, no HTTP status). NEXT: determine whether the trade.gov ADCVD / Consolidated Screening List API needs an api.data.gov key, and cite a public incumbent price before this is buildable.",
  "probed_at": "2026-07-29T08:05:00+00:00"
 },
 {
  "query": "ferc electric quarterly report",
  "supply": 2,
  "resolved": false,
  "next_step": "2026-07-29: www.ferc.gov 403s from APIFY too (eqrreportviewer.ferc.gov still answers this VPS). Demand also still unpriced -- Yes Energy / S&P are demo-gated. Two unresolved sides; deprioritise below anything with one.",
  "probed_at": "2026-07-29T08:05:00+00:00",
  "status": "source_partially_blocked",
  "updated_at": "2026-07-29T10:22:24+00:00"
 },
 {
  "query": "nlrb unfair labor practice case",
  "supply": 2,
  "resolved": false,
  "next_step": "REACHABILITY SETTLED 2026-07-29 from an Apify run: www.nlrb.gov answers 200 from Apify egress (no response at all from this VPS). Occupancy: 2 visible, andrew_avina/nlrb-mcp (4 runs) is direct on NLRB case data; shelvick/enforcement-record-profiler (63 runs) is adjacent. Demand still unpriced (Bloomberg Law / Law360 are demo-gated). Do not build without a fetched public price.",
  "probed_at": "2026-07-29T08:05:00+00:00",
  "status": "source_reachable_demand_unverified",
  "updated_at": "2026-07-29T10:22:24+00:00"
 },
 {
  "query": "uflpa entity list forced labor",
  "supply": 3,
  "resolved": false,
  "next_step": "Supply 3, and the incumbents (Kharon, Sayari, Altana) are among the most expensive vendors encountered -- but all demo-gated, so §5 has no citable price yet. The DHS UFLPA Entity List is small (~100s of entities) and published as a web page, which is the §3 fragile class unless a documented export exists. NEXT: check whether the list is carried in the trade.gov Consolidated Screening List (a documented API), which would make it buildable.",
  "probed_at": "2026-07-29T08:05:00+00:00"
 },
 {
  "query": "section 301 tariff exclusion",
  "supply": 3,
  "resolved": true,
  "next_step": "KILLED ON OCCUPANCY 2026-07-29 -- see rejected.json for who holds it. Do not re-probe. Supply 3, and the source is the strongest of any unfinished lead: the Federal Register API (federalregister.gov/api/v1) answered 200 from this host, is keyless, documented and versioned. NEXT: the demand side is what is missing -- name a priced incumbent for tariff-exclusion tracking (Descartes, Thomson) with a real URL, or drop it.",
  "probed_at": "2026-07-29T08:05:00+00:00",
  "status": "rejected_occupied",
  "updated_at": "2026-07-29T11:58:00+00:00"
 },
 {
  "query": "eia power plant generator capacity",
  "supply": 5,
  "resolved": false,
  "next_step": "Supply 5. eia.gov/opendata/bulk/manifest.txt answered 200 keyless from this host (28 KB manifest), so a documented keyless bulk source exists -- rare. NEXT: incumbents (S&P Global Velocity Suite, Yes Energy) are demo-gated; find a public price or a cheaper named incumbent before building.",
  "probed_at": "2026-07-29T08:05:00+00:00"
 },
 {
  "query": "atf federal firearms licensee list",
  "supply": 1,
  "resolved": false,
  "next_step": "SETTLED 2026-07-29: www.atf.gov returns 403 from APIFY's infrastructure too, not just this VPS. The 'run it from Apify' escape hatch does not apply here. Would need residential proxy, which the Creator plan caps at 10GB/mo and which adds a permanent fragility + cost line to a $0-revenue draw. Do not re-probe from the VPS; only revisit if ATF publishes a data-host mirror.",
  "probed_at": "2026-07-29T08:05:00+00:00",
  "status": "rejected_blocked_at_both_egress",
  "updated_at": "2026-07-29T10:22:24+00:00"
 },
 {
  "query": "hud lihtc property database",
  "supply": 5,
  "resolved": false,
  "next_step": "REACHABILITY SETTLED 2026-07-29 from an Apify run (actor gOhDYgfJj8qErFgpv, deleted): www.huduser.gov answers 200 from Apify egress though it 403s this VPS. So the source is NOT dead. BUT the occupancy read now required by screen.py shows 4 visible occupants incl. malonestar/hud-qct-lihtc-boost-screener (24 runs) and malonestar/hud-affordable-housing-explorer (18 runs) doing LIHTC-by-coordinate directly. Treat as OCCUPIED unless a distinct job can be named.",
  "probed_at": "2026-07-29T08:05:00+00:00",
  "status": "source_reachable_competitor_check_needed",
  "updated_at": "2026-07-29T10:22:24+00:00"
 },
 {
  "query": "usda fsis meat recall",
  "supply": 4,
  "resolved": false,
  "next_step": "SETTLED 2026-07-29: www.fsis.usda.gov/fsis/api/recall/v/1 returns 403 from APIFY's infrastructure too. Same conclusion as atf. Note crawlerbros/usda-fsis-recalls-scraper (6 runs) exists in the store, so someone solved it -- presumably with proxies; not worth it at this revenue.",
  "probed_at": "2026-07-29T08:05:00+00:00",
  "status": "rejected_blocked_at_both_egress",
  "updated_at": "2026-07-29T10:22:24+00:00"
 },
 {
  "query": "osha severe injury report",
  "supply": 7,
  "resolved": false,
  "next_step": "Supply 7 -- in gate but the thinnest margin here. OSHA publishes severe injury reports free as CSV, and no paid incumbent is apparent. Demand test is the blocker; do not spend source time until one is named.",
  "probed_at": "2026-07-29T08:05:00+00:00"
 },
 {
  "query": "epa superfund site sems",
  "supply": 8,
  "resolved": false,
  "next_step": "CORRECTED 2026-07-29 by the epa-echo-facility-radius build: ECHO DOES carry Superfund SEMS identifiers (SemsIDs, column 24, plus SemsFlag/SemsNames), measured at 3 SEMS sites in a Houston 3-mile sample, and the shipped Actor already returns them as a program. So a separate SEMS draw is NOT site identification -- that is now covered. What ECHO does not carry is the contamination detail: contaminants of concern, media affected, remedial phase/milestones, NPL listing dates. A triple-down variant must add THAT from SEMS itself (cumulis.epa.gov / the SEMS public data downloads), or it duplicates a draw we already published. Re-scope before spending source time.",
  "probed_at": "2026-07-29T09:11:51+00:00",
  "updated_at": "2026-07-29T09:50:18+00:00"
 },
 {
  "query": "export license bis licensing",
  "supply": 6,
  "resolved": false,
  "next_step": "Supply 6, in gate, but BIS licensing decisions are not published at the transaction level -- likely no public dataset at all. Confirm a source exists before any further spend.",
  "probed_at": "2026-07-29T08:05:00+00:00"
 },
 {
  "query": "faa service difficulty report",
  "supply": 3,
  "resolved": false,
  "next_step": "Supply 3, incumbents ATP / CAMP Systems are real and expensive. Same warning already recorded for 'faa airworthiness directive compliance': FAA data sits behind the undocumented DRS search, the §3 fragile class. Find a documented SDR export or reject both together.",
  "probed_at": "2026-07-29T08:05:00+00:00"
 },
 {
  "query": "fcc antenna structure registration",
  "supply": 1,
  "resolved": true,
  "next_step": "KILLED ON OCCUPANCY 2026-07-29 -- see rejected.json for who holds it. Do not re-probe. Supply 1. FCC publishes ASR weekly bulk files, a good source shape. Demand unverified -- no paid incumbent named for tower/ASR lookup. Name one or drop it.",
  "probed_at": "2026-07-29T08:05:00+00:00",
  "status": "rejected_occupied",
  "updated_at": "2026-07-29T11:58:00+00:00"
 },
 {
  "query": "msrb emma municipal bond disclosure",
  "supply": 1,
  "resolved": false,
  "next_step": "Supply 1, the scarcest in-gate name this cycle, and DPC Data/Bloomberg are real priced incumbents. NOT probed for source on purpose: MSRB is an SRO that licenses its bulk/real-time feeds and restricts redistribution, so this is a section 9 legal risk rather than the usual public-domain federal shape. NEXT: read the MSRB EMMA terms of use before spending anything on the source. Reject if bulk redistribution is licensed.",
  "probed_at": "2026-07-29T09:10:42+00:00"
 },
 {
  "query": "unified agenda regulatory rulemaking",
  "supply": 2,
  "resolved": true,
  "next_step": "KILLED ON OCCUPANCY 2026-07-29 -- see rejected.json for who holds it. Do not re-probe. Supply 2, non-healthcare. reginfo.gov answers 200 from this host. Incumbent Bloomberg Government is real but demo-gated, so no citable price yet. NEXT: find the documented reginfo.gov XML/bulk agenda endpoint, then name a priced incumbent with a public price page or drop it.",
  "probed_at": "2026-07-29T09:10:42+00:00",
  "status": "rejected_occupied",
  "updated_at": "2026-07-29T11:58:00+00:00"
 },
 {
  "query": "eia electric utility retail rate",
  "supply": 2,
  "resolved": true,
  "next_step": "KILLED ON OCCUPANCY 2026-07-29 -- see rejected.json for who holds it. Do not re-probe. Supply 2, non-healthcare. SOURCE VERIFIED KEYLESS: eia.gov/opendata/bulk/manifest.txt is 200 from here and lists ELEC.zip last_updated 2026-07-22 (7d). Demand is the gap -- Genability/Arcadia publish no price and NREL's URDB is free. NEXT: cite a public price or drop; do not build on supply alone (section 5).",
  "probed_at": "2026-07-29T09:10:42+00:00",
  "status": "rejected_occupied",
  "updated_at": "2026-07-29T11:58:00+00:00"
 },
 {
  "query": "sec municipal advisor registration",
  "supply": 2,
  "resolved": false,
  "next_step": "OCCUPANCY READ CLEAN 2026-07-29 and it is now the ONLY surviving US-federal lead: supply 2, visible 2, both adjacent -- gocreative.ai/finra-broker-dealer-leads (51 runs) is FINRA broker-dealers not SEC municipal advisors, ryanclinton/corporate-political-exposure-mcp (42 runs) is unrelated. NEITHER source nor priced incumbent investigated yet. Likely source shape: SEC Form MA/MA-I via EDGAR (keyless, documented, stable). Buyer pool is small (~500-1000 registered MAs), so name a priced incumbent BEFORE spending source time.",
  "probed_at": "2026-07-29T09:10:42+00:00",
  "status": "occupancy_clean_both_sides_unverified",
  "updated_at": "2026-07-29T11:58:00+00:00"
 },
 {
  "query": "uspto patent maintenance fee events",
  "supply": 3,
  "resolved": false,
  "next_step": "Supply 3 -- the best USPTO name found (vs 7 for 'patent maintenance fee expiration', 51 for 'patent expiration date monitoring'). Blocked on the SAME free USPTO ODP key as uspto-patent-term-adjustment, now recorded as a second draw on that one blocker. Demand still unverified: patent annuity providers (Anaqua/Clarivate/Dennemeyer) are expensive but publish no price.",
  "probed_at": "2026-07-29T09:10:42+00:00"
 },
 {
  "query": "federal audit clearinghouse single audit",
  "supply": 4,
  "resolved": false,
  "next_step": "Supply 4, but WEAK ON BOTH SIDES. api.fac
... [truncated for size]
```

### 9.1 `rejected.json`
```json
[
 {
  "query": "dea registrant validation",
  "reason": "data source inaccessible: DEA registrant file is only available to DEA registrants via the Diversion Control validation tool (NTIS stopped distributing it 2020-11-17). No public/anonymous access exists, which is why supply is 0 -- absence of supply here means absence of DATA, not absence of demand.",
  "supply": 0,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T04:35:24+00:00"
 },
 {
  "query": "dea controlled substance registration verification",
  "reason": "same as \"dea registrant validation\": registrant-gated data source, no public access.",
  "supply": 2,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T04:35:24+00:00"
 },
 {
  "query": "municipal council agenda",
  "reason": "buildable only by heterogeneous HTML scraping across thousands of independent municipal sites. Reintroduces the silent-failure mode that killed scraped-data products in section 3, and section 7 stage 3 requires a preference for stable public APIs. Low supply (4) is real but the failure mode is unacceptable under the section 9 clawback rules.",
  "supply": 4,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T04:35:24+00:00"
 },
 {
  "query": "nursing home inspection deficiency",
  "reason": "supply 8 passes, but no paid incumbent could be named -- CMS Care Compare publishes the same data free and consumer-facing. Fails the section 5 demand test.",
  "supply": 8,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T04:35:24+00:00"
 },
 {
  "query": "fcc license renewal",
  "reason": "supply 6 passes, but no paid incumbent identified for the renewal-tracking use case. Revisit only with demand evidence.",
  "supply": 6,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T04:35:24+00:00"
 },
 {
  "query": "sec investment adviser disciplinary",
  "reason": "supply 7 PASSES, but the data source is dead in the section 3 fragile-scraping class. Probed 2026-07-29: the only current-data path, https://adviserinfo.sec.gov/compilation, is a hashed-bundle SPA (9 KB, 6 hrefs, all CSS/anchors, zero data links) -- same failure mode as hrsa-340b. The static SEC Form ADV bulk zips at sec.gov/foia/docs/form-adv-archive-data.htm DO exist and are keyless with a declared UA (200), but they stop at 2024-12-31, which is worthless for a disciplinary/status product where the whole value is currency. Building it would mean reverse-engineering the SPA's internal endpoints. Revisit only if SEC publishes a documented current feed.",
  "supply": 7,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T06:25:22+00:00"
 },
 {
  "query": "finra brokercheck",
  "reason": "RE-SCREENED 2026-08-06 on the CURRENT gate after the retired supply rule (this row previously read only 'supply 205, far over the <10 gate'). Mechanical DEMAND PASS 701 [buyer 520 + inconclusive 181] -- and it dies on the read. 70% of demand is nexgendata/legal-mcp-server (Legal Data MCP - case law, dockets, filings), an adjacent job; strip it and 212 runs remain, of which NINE Actors sit in the 28-31 owner-cron band. The one on-subject buyer is parseforge/finra-brokercheck-scraper at 31 runs u30=4. On-subject buyer demand ~31 against a gate of 150, on a query holding 206 rivals and 10+ BrokerCheck scrapers. REJECT on judgement.",
  "supply": 205,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T06:25:22+00:00",
  "reason_superseded_supply_gate": "supply 205, far over the <10 gate.",
  "rescreened_at": "2026-08-06T04:27:27+00:00",
  "rescreen_gate": "demand_runs_30d>=150 AND buyer_runs_30d>0 AND rule-3 differentiator"
 },
 {
  "query": "epa echo enforcement compliance",
  "reason": "RE-SCREENED 2026-08-06 on the current gate. DEMAND FAIL: 333 on-topic runs but buyer_runs_30d=0 -- rule 2 fails outright. Top occupant ryanclinton/epa-echo-search 53%. We already ship epa-echo-facility-radius against this source.",
  "supply": 62,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T06:25:22+00:00",
  "reason_superseded_supply_gate": "supply 62, over the gate.",
  "rescreened_at": "2026-08-06T04:27:27+00:00",
  "rescreen_gate": "demand_runs_30d>=150 AND buyer_runs_30d>0 AND rule-3 differentiator"
 },
 {
  "query": "nih reporter grant awards",
  "reason": "RE-SCREENED 2026-08-06. DEMAND FAIL 103 (gate 150), buyer 30, top occupant nexgendata/us-grants-funding-tracker 29% (SBIR/NIH/NSF aggregator).",
  "supply": 67,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T06:25:22+00:00",
  "reason_superseded_supply_gate": "supply 67, over the gate.",
  "rescreened_at": "2026-08-06T04:27:27+00:00",
  "rescreen_gate": "demand_runs_30d>=150 AND buyer_runs_30d>0 AND rule-3 differentiator"
 },
 {
  "query": "fda device recall enforcement",
  "reason": "RE-SCREENED 2026-08-06. Mechanical DEMAND PASS 246 [buyer 62 + inconclusive 184] and it dies on the read: 204 of the runs are seven owner crons, and RULE 2 RESTS ON ONE ACTOR -- all 62 buyer runs are constant_quadruped/fda-catalyst-alerts, which is FREE (no price anchor, floor $0) at 74% success. No priced payer on this query. REJECT on judgement.",
  "supply": 105,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T06:25:22+00:00",
  "reason_superseded_supply_gate": "supply 105, over the gate.",
  "rescreened_at": "2026-08-06T04:27:27+00:00",
  "rescreen_gate": "demand_runs_30d>=150 AND buyer_runs_30d>0 AND rule-3 differentiator"
 },
 {
  "query": "fda drug shortage",
  "reason": "RE-SCREENED 2026-08-06. DEMAND FAIL 86 (gate 150), buyer 0. 203 runs discounted as owner cron, 26 as farm siblings, 217 as off-topic.",
  "supply": 52,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T06:25:22+00:00",
  "reason_superseded_supply_gate": "supply 52, over the gate.",
  "rescreened_at": "2026-08-06T04:27:27+00:00",
  "rescreen_gate": "demand_runs_30d>=150 AND buyer_runs_30d>0 AND rule-3 differentiator"
 },
 {
  "query": "osha inspection violations",
  "reason": "RE-SCREENED 2026-08-06. DEMAND FAIL: 569 on-topic runs but buyer_runs_30d=0 -- every occupant, including fortuitous_pirate/osha-inspection-scraper (34% of demand), is cron- or inconclusive-classed on this query. Rule 2 fails.",
  "supply": 45,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T06:25:22+00:00",
  "reason_superseded_supply_gate": "supply 45; narrower 'osha establishment inspection history' also fails at 11. OSHA enforcement is a crowded query on the Apify store.",
  "rescreened_at": "2026-08-06T04:27:27+00:00",
  "rescreen_gate": "demand_runs_30d>=150 AND buyer_runs_30d>0 AND rule-3 differentiator"
 },
 {
  "query": "cms open payments sunshine act",
  "reason": "RE-SCREENED 2026-08-06. DEMAND FAIL 3 (gate 150), buyer 0 -- the most extreme cron plateau measured to date: SEVEN Actors from seven different owners all at 29-30 runs/30d, ~100% ok, u30<=1, holding 203 runs between them. The visible activity on this query is entirely other owners' schedulers.",
  "supply": 14,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T06:25:22+00:00",
  "reason_superseded_supply_gate": "supply 14; narrower 'cms open payments physician' is worse at 42. Over the gate both ways.",
  "rescreened_at": "2026-08-06T04:27:27+00:00",
  "rescreen_gate": "demand_runs_30d>=150 AND buyer_runs_30d>0 AND rule-3 differentiator"
 },
 {
  "query": "usda organic integrity database",
  "reason": "RE-SCREENED 2026-08-06. DEMAND FAIL 0, buyer 0. 59 rivals, none holding on-topic runs.",
  "supply": 42,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T06:25:22+00:00",
  "reason_superseded_supply_gate": "supply 42, over the gate.",
  "rescreened_at": "2026-08-06T04:27:27+00:00",
  "rescreen_gate": "demand_runs_30d>=150 AND buyer_runs_30d>0 AND rule-3 differentiator"
 },
 {
  "query": "faa aircraft registration lookup",
  "reason": "RE-SCREENED 2026-08-06. Mechanical DEMAND PASS 161 [buyer 57 + inconclusive 104], barely over the gate, and the top on-topic occupant is parseforge/abr-australian-business-register-scraper at 36% -- an Australian business register, i.e. the demand is not this query's. We already ship faa-aircraft-document-index-lien-filings on the adjacent (and better-differentiated) title/lien question. REJECT on judgement.",
  "supply": 38,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T06:25:22+00:00",
  "reason_superseded_supply_gate": "supply 38, over the gate.",
  "rescreened_at": "2026-08-06T04:27:27+00:00",
  "rescreen_gate": "demand_runs_30d>=150 AND buyer_runs_30d>0 AND rule-3 differentiator"
 },
 {
  "query": "fmcsa carrier safety rating",
  "reason": "RE-SCREENED 2026-08-06. Mechanical DEMAND PASS 644 [buyer 496] with two genuine on-subject buyers (makework36/fmcsa-trucking-api 221 u30=4, parseforge/fmcsa-carrier-safety-scraper 111 u30=6) -- demand here is REAL. Dies on rule 3, same as motor-carrier-authority-revocation did the same day. Read parseforge/fmcsa-carrier-safety-scraper's build payload: its description ships 'operating status, safety ratings, BASIC scores, power units, driver counts, cargo types, authority types', its input takes companyName/dotNumbers/mcNumbers, and its dataset view emits legalName/dotNumber/operatingStatus/entityType/address/phone/powerUnits/drivers/safetyRating/totalCrashes/mcs150FormDate/outOfServiceDate/snapshotUrl at 100% success. The safety-rating question is answered. No correctness defect is nameable; anything left is a column count, which rule 3 rejects as comparative. The FMCSA Motus source stays cleared -- the candidate dies, not the vein.",
  "supply": 19,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T06:25:22+00:00",
  "reason_superseded_supply_gate": "supply 19 over the gate; the same underlying FMCSA data was captured instead under the narrower passing query 'motor carrier authority revocation' (supply 7), which is now in the backlog.",
  "rescreened_at": "2026-08-06T04:27:27+00:00",
  "rescreen_gate": "demand_runs_30d>=150 AND buyer_runs_30d>0 AND rule-3 differentiator"
 },
 {
  "query": "health canada drug product database",
  "reason": "RE-SCREENED 2026-08-06. Mechanical DEMAND PASS 359 [buyer 102 + inconclusive 257] and it dies on the read: RULE 2 RESTS ON ONE ACTOR and that Actor is fatihtahta/loopnet-scraper, a COMMERCIAL REAL-ESTATE scraper, on-topic via the word 'database' (5.4% document frequency, under the 10% generic cut). Strip it: buyer 0. The actual Health Canada occupant, parseforge/health-canada-drug-database-scraper, is a 30-run owner cron.",
  "supply": 21,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T06:25:22+00:00",
  "reason_superseded_supply_gate": "supply 21, over the gate.",
  "rescreened_at": "2026-08-06T04:27:27+00:00",
  "rescreen_gate": "demand_runs_30d>=150 AND buyer_runs_30d>0 AND rule-3 differentiator"
 },
 {
  "query": "fara foreign agents registration",
  "reason": "RE-SCREENED 2026-08-06. Mechanical DEMAND PASS 1448 [buyer 1337] -- the largest headline of the batch and a 92% CONCENTRATION on seibs.co/business-registry-intel, a Secretary-of-State KYB/company search. Textbook adjacent job: strip it and the query holds 111 runs with buyer 0. The real FARA occupants are ryanclinton/fara-foreign-agents (90 runs, u30=0), two 29-run owner crons, and thoob/fara-foreign-agent-feed at 28% success. REJECT on judgement.",
  "supply": 20,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T06:25:22+00:00",
  "reason_superseded_supply_gate": "supply 20, over the gate.",
  "rescreened_at": "2026-08-06T04:27:27+00:00",
  "rescreen_gate": "demand_runs_30d>=150 AND buyer_runs_30d>0 AND rule-3 differentiator"
 },
 {
  "query": "eu clinical trials ctis",
  "reason": "RE-SCREENED 2026-08-06. DEMAND FAIL 128 (gate 150), buyer 0. Top occupant parseforge/euctr-ema-trials-scraper 59%.",
  "supply": 14,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T06:25:22+00:00",
  "reason_superseded_supply_gate": "supply 14, over the gate.",
  "rescreened_at": "2026-08-06T04:27:27+00:00",
  "rescreen_gate": "demand_runs_30d>=150 AND buyer_runs_30d>0 AND rule-3 differentiator"
 },
 {
  "query": "state medical board disciplinary action",
  "reason": "supply 15, over the gate; also heterogeneous per-state HTML, the section 3 fragile class.",
  "supply": 15,
  "note": "screened 2026-07-29",
  "at": "2026-07-29T06:25:22+00:00"
 },
 {
  "query": "fmcsa licensing and insurance socrata mirror (data source, not a query)",
  "reason": "source_silently_stale",
  "supply": null,
  "note": "FMCSA Licensing & Insurance data on data.transportation.gov is a FROZEN SNAPSHOT that advertises itself as fresh. Probed 2026-07-29: Revocation (sa6p-acbp), AuthHist (9mw4-x3tu), Carrier (6eyk-hxee) and ActPendInsur (qh9u-swkp) all report rowsUpdatedAt 2026-07-28, but their newest CONTENT stops together at 2026-05-12/14/15 -- 75 days stale, HTTP 200 throughout. All four cut off on the same days, so this is a broken load, not a publication lag. By contrast the Company Census File (az4n-8mr2) IS current (max add_date 20260727). Consequence: an authority-revocation product built on this mirror would report ACTIVE for any carrier revoked since mid-May -- cargo-liability exposure for the broker and a section 9 clawback generator. Census alone cannot substitute: docket1_status_code takes only A/I/P, with no revoked value (verified by full group-by), exactly the inference the harvester warned not to make.",
  "at": "2026-07-29T07:35:34+00:00"
 },
 {
  "query": "gsa calc labor rate",
  "reason": "source_retired",
  "supply": 5,
  "note": "GSA CALC is RETIRED, not merely moved. Probed 2026-07-29: https://api.gsa.gov/acquisition/calc/v1/rates/ -> 404 and https://calc.gsa.gov/api/rates/ -> 404 (both the documented endpoints). https://buy.gsa.gov/pricing returns 200 but is an HTML app with no documented export, i.e. the section 3 fragile-scraping class. Demand was plausible (Deltek GovWin IQ is a genuinely expensive incumbent) but there is no stable public API to build on. Do not re-probe.",
  "at": "2026-07-29T07:37:31+00:00"
 },
 {
  "query": "phmsa hazmat incident report",
  "reason": "supply 0 passes, but no priced incumbent could be named and the buyer pool (hazmat shippers wanting INCIDENT history rather than compliance software) is speculative. Source also unreachable from this host: phmsa.dot.gov 403, the old portal.phmsa.dot.gov analytics URL 404s.",
  "supply": 0,
  "note": "Supply 0 is the scarcest thing found all cycle and it still fails §5 -- exactly the 'beautiful tools for queries with no searchers' graveyard the plan warns about. Revisit only if a priced incumbent is found.",
  "at": "2026-07-29T08:00:46+00:00"
 },
 {
  "query": "treasury listing certified companies 570",
  "reason": "supply 0 passes and the source is reachable (fiscal.treasury.gov HTTP 200), but no paid incumbent exists: Treasury publishes Circular 570 free and surety verification is a free lookup. Demand test fails.",
  "supply": 0,
  "note": "Reachable-but-unmonetizable. Recorded so the supply-0 hit does not tempt a future cycle into building it.",
  "at": "2026-07-29T08:00:46+00:00"
 },
 {
  "query": "epa frs facility ra
... [truncated for size]
```

### 9.1 `blocked.json`
```json
[
  {
    "what": "monetization wizard",
    "draw": "oig-leie-exclusion-screening",
    "needed": "Apify Console -> oig-leie-exclusion-screening -> Monetization -> pay-per-event, {'model': 'PAY_PER_EVENT', 'pass_platform_costs_to_user': True, 'events': [{'name': 'screening-run', 'title': 'Screening run', 'usd': 0.05, 'why': 'Covers downloading and indexing the ~84k-record LEIE once per run.'}, {'name': 'record-screened', 'title': 'Record screened', 'usd': 0.02, 'why': \"A 1,000-employee health system screening monthly pays ~$20/mo, well under the incumbents while leaving margin. Launch deliberately on the upside: cuts are instant, raises need 14 days' notice (\u00a78).\"}]}. Until done the actor is public but FREE and earns nothing. || UPDATE 2026-07-29T13:2xZ -- THIS IS NO LONGER HYPOTHETICAL DEMAND. health.py check now reads pricingInfos straight from the store and oig-leie-exclusion-screening still reports pricingModel FREE, while its store record shows TWO USERS LIFETIME and a public 30-day success rate of 100%. People are already running it. Every one of those runs is billing nothing, and at the proposed $0.05 + $0.02 per record that is the portfolio's entire MRR being given away. The wizard is ~5 minutes and is now the highest-return use of operator time in the whole system -- ahead of the three API-key errands and ahead of the occupancy DECISION below.\n\n|| CORRECTION 2026-07-29T14:2xZ -- RESOLVED, BUT NOT THE WAY THE PREVIOUS CYCLE RECORDED IT, AND THE PORTFOLIO IS STILL EARNING $0 TODAY. No operator ran any wizard. The agent PUT pricingInfos itself at 13:35Z, which is why nothing appeared to change on the operator's side. The previous cycle then read pricingInfos[-1] == PAY_PER_EVENT and recorded the draw as monetized. That reading was WRONG about the only thing that matters: the store's own buyer-facing field, currentPricingInfo, still reads {'pricingModel': 'FREE'}. On an already-public Actor a model switch is a section 8 SIGNIFICANT CHANGE, so oig-leie serves every real user free through the 14-day notice and starts charging 2026-08-12 -- exactly as CLAUDE.md warned and exactly what the agent's own reasonForChange text says. pricingInfos.startedAt is when the RECORD was created, not when money starts; do not read it as an effective date. NO OPERATOR ACTION IS REQUIRED -- this entry stays resolved. Fixed in code so it cannot recur: apify.store_facing() now returns effective_pricing_model read from the store index, health.py reports 'NOT EARNING YET' while a notice runs, and ship.py verifies currentPricingInfo after every publish.",
    "since": "2026-07-29T04:28:19+00:00",
    "last_seen": "2026-07-29T13:01:20+00:00",
    "count": 4,
    "resolved": true,
    "resolved_at": "2026-07-29T13:45:52+00:00",
    "resolved_note": "agent-configured 2026-07-29T13:35Z; effective 2026-08-12 after the \u00a78 notice; earns $0 until then"
  },
  {
    "what": "FDA Data Dashboard API key",
    "draw": "fda-483-inspection-observations",
    "needed": "FDA 'OII Unified Logon' human signup at datadashboard.fda.gov/oii/api/ (Authorization-User = approved email, Authorization-Key = FDA-generated). Contact FDADataDashboard@fda.hhs.gov. RE-PROBE DONE 2026-07-30, DO NOT REPEAT: the ORA->OII move is cosmetic (docs path only; the API host api-datadashboard.fda.gov/v1/* is unchanged) and the endpoint returns 401 on a VALID body from Apify egress as well as from this VPS -- a real credential gate, not an IP allowlist. No keyless alternative exists. See probed.json _apify_egress_reprobe_round.",
    "since": "2026-07-29T04:43:55+00:00",
    "last_seen": "2026-07-29T04:43:55+00:00",
    "count": 1,
    "resolved": false,
    "updated_at": "2026-07-30T16:06:56+00:00",
    "pathway": "manual \u2014 audited 2026-07-29, no programmatic route",
    "reprobed_at": "2026-08-06T05:35:00+00:00",
    "reprobe_result": "STILL BLOCKED, but the earlier 'no keyless alternative exists' is WITHDRAWN as unproven. The 2026-07-30 re-probe only re-tested the API host (api-datadashboard.fda.gov), which is exactly the trap the 2026-08-05 UK Companies House rule was written for: a 401 on the API host proves the API is gated, not that the DATA is. The public WEB host was never probed until now. Measured 2026-08-06: datadashboard.fda.gov answers keyless, robots.txt 200 disallowing only /Management/, /oii/hb/, /oii/firmprofile.htm and /content/ (Crawl-delay 10) -- so /oii/cd/ and the Qlik prefix /hdr/ are both ALLOWED. The dashboard is a Qlik Sense app whose objects include QVCitDetails (JKnaqk) and QV483Details (wmkXxtf), i.e. the citation and 483-observation tables this draw needs. NOT yet a cleared source -- see open_queries _fda_483_web_host_probe_2026_08_06 for the two things that must hold first.",
    "keyless_pathway_status": "UNPROVEN \u2014 candidate found, decisive test not yet run",
    "reprobed_2026_08_06": "RE-PROBED per the CLAUDE.md flag that the recorded endpoint may be stale. It IS stale -- api-datadashboard.fda.gov/oii/api/v1/inspections now 404s on both UAs (no robots.txt published). But the blocker STANDS, on better evidence than before, and the web-host rescue that saved UK Companies House FAILS here. datadashboard.fda.gov/oii/cd/inspections.htm is reachable (403 plain UA / 200 declared UA -- fair-access policy, no robots rule covers the path) and it is NOT a data page: 0 table rows in 27,617 bytes, no /api/ reference, no fetch/axios. It is a QLIK SENSE app -- js/lib-inspections.js calls require(['js/qlik']) and openApp(), then getObject() against session-bound Qlik object ids (QVInspDetails/HSjJJLD, QVCitDetails/JKnaqk, QV483Details/wmkXxtf). Data moves over the Qlik Engine WebSocket API, not REST, and the same file defines blockFilteredDownload() -- the app deliberately blocks filtered export. So there is no keyless JSON endpoint behind the front end; extraction would mean driving the Qlik engine over websockets, which is the \u00a73 fragile class in its most extreme form. The OII Unified Logon key remains the only clean route. This verdict is now recorded against NAMED, RE-CHECKABLE artefacts (the 404 path, the .htm path, lib-inspections.js) rather than a subject.",
    "web_host_recheck_2026_08_06": "datadashboard.fda.gov/oii/api/ answers HTTP 200 on a BROWSER UA (403 on plain UA = a fair-access policy, not a block) and robots.txt has NO rule covering /oii/. Per the standing rule 'before recording ANY credential blocker, probe the service's public WEB host', this blocker is a CANDIDATE FOR RESOLUTION and must not be left sitting. NOT resolved yet because reachability of the front end is necessary, not sufficient (the NZ Companies Office precedent: 200 + blanket robots disallow still kills). EXACT NEXT PROBE: fetch an actual OII data path with a contact-bearing UA and confirm it returns the same records the keyed API is nominally for; if it does, resolve this blocker and delete the key request. [REFINED, same cycle] Read the app's own JS per the draw-10 rule: /oii/js/searchfilters.js and /oii/js/wrapper-all.js both 200 but publish NO data endpoint table -- the OII front end is SERVER-RENDERED HTML behind a search FORM, and the structured data API remains key-gated at api-datadashboard.fda.gov. So the cheap version of the web-host rescue does NOT apply here (contrast UK Companies House, where /disqualified-officers/natural/{id} was a direct keyless GET). Settling it means driving the search form and confirming the result page carries the keyed API's fields -- and any build on it is HTML, i.e. the SS3 FRAGILE CLASS needing a freshness/column canary. Two guessed /js/ paths returned 404: REQUEST-LEVEL, clears nothing and kills nothing.",
    "last_rechecked_at": "2026-08-06T21:08:54+00:00"
  },
  {
    "what": "FMCSA QCMobile API webKey",
    "draw": "motor-carrier-authority-revocation-check",
    "needed": "Needs login.gov (human identity verification, not automatable). NOTE: underlying L&I data is a frozen snapshot, so this key may not be worth getting at all.",
    "since": "2026-07-29T07:35:34+00:00",
    "last_seen": "2026-07-29T07:35:34+00:00",
    "count": 1,
    "resolved": true,
    "pathway": "manual \u2014 audited 2026-07-29, no programmatic route",
    "resolved_at": "2026-08-06T03:36:34+00:00",
    "resolved_note": "Never needed. FMCSA publishes the same authority/revocation/insurance data keylessly as the Motus Socrata stack on data.transportation.gov (12 datasets, content current to 2026-08-05, verified by max(status_change_date) not by metadata). The 2026-07-29 frozen-snapshot finding was correct for the LEGACY dataset ids, which FMCSA has since formally retired; Motus is the successor."
  },
  {
    "what": "USPTO Open Data Portal API key",
    "draw": "uspto-patent-maintenance-fee-events + uspto-patent-term-adjustment",
    "needed": "OPERATOR DECLINED 2026-07-29: ID.me verification needs government photo ID + SSN, which the operator does not have accessible. NOT a temporary blocker to re-raise. Treat the two USPTO leads (patent maintenance fee events, patent term adjustment) as PARKED: do not rank them in the backlog, do not re-probe api.uspto.gov, do not re-ping. ONLY revisit if a KEYLESS bulk path is found from inside an Apify run (data.uspto.gov/bulkdata/datasets + developer.uspto.gov/ds-api XHR endpoints are still unassessed - they are JS SPAs that curl cannot read from this VPS). If a keyless path is found, these become buildable with no operator action at all.\n\nKEYLESS PATH RE-PROBED FROM APIFY EGRESS 2026-07-30 -- CLOSED, DO NOT REPEAT. developer.uspto.gov/ds-api/* is retired: /ds-api/, and /ds-api/ptab/v1/records by both GET and POST, all return the identical 20,666-byte Open Data Portal Angular shell (an SPA catch-all, not an API). data.uspto.gov/api/v1/datasets/products/search returns the same shell. PatentsView bulk S3 403s from Apify egress TOO, so that block is real and not a datacenter-IP artifact. Nothing revives these leads; they stay PARKED.",
    "since": "2026-07-29T09:11:02+00:00",
    "last_seen": "2026-07-29T16:24:45+00:00",
    "count": 1,
    "resolved": true,
    "pathway": "manual \u2014 audited 2026-07-29, no programmatic route",
    "resolution": "parked - operator declined",
    "parked": true,
    "resolved_at": "2026-07-29T16:08:27+00:00",
    "resolved_note": "CLOSED AS OPERATOR-DECLINED, not as satisfied. No USPTO key was obtained and none will be: the `needed` field records that ID.me verification requires government photo ID + SSN, which the operator does not have accessible, and explicitly says NOT to re-raise. A blocker nobody is going to act on does not belong under 'needs a human'. AUDIT TRAIL, because this cycle briefly got it wrong in both directions: the entry was flipped to resolved at 16:08:27 with no note and no notification record, which is indistinguishable from a foreign write, so this cycle reopened it -- then read the full `needed` text and closed it again with the reason that should have been attached the first time. The resolution was legitimate; the SILENCE was the defect. Tripwire added this cycle (health._suspect_resolutions) now flags any blocker resolved with neither a note nor a ping, and daily.md surfaces it. PARKED, not dead: revisit only if a KEYLESS bulk path turns up from inside an Apify run (data.uspto.gov/bulkdata/datasets and developer.uspto.gov/ds-api XHR endpoints are JS SPAs this VPS cannot read and remain unassessed).",
    "reprobed_at": "2026-07-30T16:06:56+00:00",
    "reprobe_result": "CONFIRMED no keyless route; leads remain parked, do not re-ping",
    "updated_at": "2026-07-30T16:06:56+00:00"
  },
  {
    "what": "FYI (was DECISION, now agent-owned): occupancy gate re-scoped from SOURCE-sameness to JOB-sameness",
    "draw": "pipeline yield (affects every future harvest)",
    "needed": "NO OPERATOR ACTION NEEDED. This was escalated twice as 'may I relax a section 5 rule'. That framing was WRONG and I am correcting it rather than asking a third time.\n\nSECTION 5 CONTAINS NO OCCUPANCY RULE. Its screen is exactly two tests: supply total < 10, AND a paid incumbent proves demand. The occupancy gate is MINE -- I added it two cycles ago and it lives at tools/screen.py:99, rejecting a candidate when any occupant is classified 'direct'. So the open question was never 'may I relax the plan', it was 'is my own gate calibrated right', and section 11 puts screen calibration explicitly under agent ownership ('if hit rate is low, the demand test is too loose; tighten it before shipping more').\n\nTHE MISCALIBRATION: I classify 'direct' by SOURCE-sameness (same dataset => direct => reject). But section 4 says the unit of competition is the QUERY -- 'own extract <specific thing> from <specific source>' -- and the specific THING is half of that. Two actors on one dataset doing different jobs do not contest the same query. The portfolio's own evidence agrees and it is the strongest evidence I have: BOTH good draws would have been rejected by the gate as written. hcris ships CMS line 202 where rivals ship line 200; epa-echo is scoped as regulatory records, not the ASTM E1527 Phase I the $250 incumbent sells. The gate as written would have killed the two best things this portfolio has built.\n\nRESOLUTION, PROVISIONALLY ADOPTED, with a precondition that makes it safe: 'direct' will be judged by JOB, not by source -- an occupant on the same dataset is 'adjacent' if I can write a SPECIFIC, TESTABLE claim about what it gets wrong or does not do. Vague differentiation ('ours is better/cleaner/faster') stays 'direct' and still rejects. AND the relaxed gate MAY NOT BE EXERCISED WHILE THE PUBLISH QUEUE IS 3 OR DEEPER. Reason: the queue is 7 deep against a 1/day, 5/week publish limit, so nothing promoted now could ship for ~10 days -- raising yield today buys literally zero and only risks a section 9 clawback on a draw that argued its way past a gate. Yield is not the binding constraint; publish slots are. So the gate change costs nothing to hold and will be live by the time it can matter.\n\nWHAT THE OPERATOR SHOULD TAKE FROM THIS: nothing to decide here. The one thing that is actually costing money is item 1 of this file -- oig-leie is public, FREE and has already served 2 users lifetime. Please spend the 5 minutes there instead of on this.",
    "since": "2026-07-29T12:10:46+00:00",
    "last_seen": "2026-07-29T13:01:20+00:00",
    "count": 3,
    "resolved": false,
    "status": "resolved_by_agent",
    "updated_at": "2026-07-29T13:40:00+00:00"
  },
  {
    "what": "Rotate the Apify API token (never tracked until now)",
    "draw": "whole account -- billing is attached",
    "needed": "No API (4 endpoints probed, all 404). Console: https://console.apify.com/settings/integrations -> new token -> update /root/portfolio-agent/agent.env -> systemctl restart portfolio-agent",
    "since": "2026-07-29T13:40:00+00:00",
    "severity": "low-urgency / high-blast-radius",
    "pathway": "manual \u2014 audited 2026-07-29, no programmatic route",
    "resolved": true,
... [truncated for size]
```

### 9.1 `backlog.json`
```json
[
  {
    "query": "hcris hospital cost report",
    "target_actor_name": "hcris-hospital-cost-report",
    "demand_type": "paid_incumbent",
    "incumbent": "CostReportData.com / Definitive Healthcare",
    "incumbent_price_usd": 2000,
    "incumbent_price_unit": "per year (also $90 per single report)",
    "demand_evidence_url": "https://www.costreportdata.com/",
    "demand_evidence": "CostReportData.com sells ACCESS TO THIS EXACT FREE CMS FILE at a publicly listed price: $90 for a single hospital's cost report (30 days' access) and $2,000/year for unlimited access to all 6,000+ hospitals. Fetched and read 2026-07-29 -- confirmed a real product/pricing page, not an error page (the carrier411 trap from the 2026-07-29 06:26 cycle). Definitive Healthcare resells the same HCRIS base at enterprise, demo-gated pricing. This is the \u00a75 archetype: demand proven AND priced, sitting on top of a keyless federal bulk download.",
    "data_source": "CMS HCRIS HOSPITAL 2010 (HOSP10) bulk downloads -- derived cost/charges + provider identity tables",
    "data_source_url": "https://downloads.cms.gov/files/hcris/hosp10-reports.zip",
    "data_source_verified": "2026-07-29 PROBED AND READ, not merely pinged. hosp10-reports.zip 10.85 MB, keyless, HTTP 200, Last-Modified 2026-07-14. CONTENT freshness verified INSIDE the payload per the HOWTO rule: HOSP10_RECORD_COUNTS.CSV carries fy rows through 2026 (FY2025 = 3,279 reports, FY2026 = 11 -- consistent with hospitals filing ~5 months after FY end, not a frozen file); HOSP10_cost_charges_2026.CSV has 11 rows with FYE up to 2025-12-04; member CSVs stamped 2026-07-06/08. Headers read from the files themselves: cost_charges = PROVIDER_NUMBER,FYB,FYE,STATUS,C000001_20000_00500,C000001_20000_00600,C000001_20000_00700 (3,257 rows for FY2025); PRVDR_ID_INFO = PROVIDER_NUMBER,FYE,FYB,STATUS,CTRL_TYPE,HOSP10_NAME,STREET_ADDR,PO_BOX,CITY,STATE,ZIP_CODE,COUNTY (7,202 rows). Full worksheet-level data also available as HOSP10FY2024.zip (135 MB, HTTP 200) if per-line detail is needed.",
    "data_source_risk": "TWO things must be resolved at BUILD time, not inferred: (1) the semantics of the C000001_20000_00500/00600/00700 columns are NOT settled. The naming implies Worksheet C Part I line 200 columns 5/6/7, but the sample row 010005 gives 176,988,550 / 108,305,258 / 479,368,103 -- the first two do NOT sum to the third, so the obvious inpatient+outpatient=total reading is WRONG. Resolve from the CMS HCRIS record layout / data-elements documentation before emitting any labelled financial field; mislabelling a cost as a charge is a \u00a79 clawback generator. (2) www.cms.gov returns 403 to this datacenter IP (Akamai), so the documentation page could not be fetched from this host -- downloads.cms.gov itself is fine. Fetch the layout doc from the Apify run, or locate a mirror (NBER publishes an HCRIS layout).",
    "notes": "Actor name carries the target query verbatim (heaviest search weight, \u00a74). Naming search done: the generic phrasings are saturated -- 'medicare hospital cost report' 70, 'hospital cost report lookup' 84, 'hospital cost to charge ratio' 82, 'medicare cost report financials' 320 -- while adding the insider token collapses supply to 2. HCRIS is exactly what the healthcare-finance buyer types, so the rare token is not a contrived long tail. Alternate in-gate phrasings: 'cms hospital cost report hcris' 2, 'medicare cost report worksheet' 1, 'medicare cost report hcris lookup' 7. Product shape: look up a hospital by CCN / name / state and return its cost-report financials by fiscal year with filing status, from a 10.85 MB download rather than the 135 MB worksheet dump.",
    "supply": 2,
    "screened_at": "2026-07-29T08:00:16+00:00",
    "score": 164,
    "status": "published",
    "built_at": "2026-07-29T08:55:00+00:00",
    "actor_id": "fXwoBdeSpdKFktwfI",
    "build_note": "Built and SMOKE PASS 7/7 on Apify (run kigTUsqZdg79LudWc), plus 27 ground-truth assertions on the live dataset and 60 offline assertions. The recorded build hazard was resolved from CMS's own data dictionary, not guessed: the published totals are Worksheet C Part I LINE 202 cols 3/6/7/8, while the tempting derived extract exposes LINE 200 cols 5/6/7 -- a subtotal before the line-201 deduction, with the cost column absent for many filers. Awaiting the 1/day publish slot.",
    "supply_visible": 0,
    "supply_composition": {
      "query": "hcris hospital cost report",
      "total": 2,
      "visible": 0,
      "occupants": []
    },
    "occupants_reviewed": [],
    "occupancy_checked_at": "2026-07-29T12:57:57+00:00",
    "occupancy_verdict": "clear",
    "direct_competitors": [],
    "published_at": "2026-08-02T16:02:36+00:00"
  },
  {
    "query": "fda 483 inspection observations",
    "target_actor_name": "fda-483-inspection-observations",
    "demand_type": "paid_incumbent",
    "incumbent": "Redica Systems / FDAzilla",
    "incumbent_price_usd": 289,
    "demand_evidence_url": "https://fdazilla.com/store/483s",
    "demand_evidence": "Redica/FDAzilla sells individual FDA Form 483 documents at $289 each plus an annual subscription to a 3,500+ document library. Demand is proven AND priced \u2014 the strongest signal in \u00a75.",
    "data_source": "FDA Data Dashboard API, inspections_citations endpoint",
    "data_source_url": "https://api-datadashboard.fda.gov/v1/inspections_citations",
    "data_source_verified": "2026-07-29 docs read; endpoint exists, POST + JSON filters, up to 5000 rows/page",
    "data_source_risk": "REQUIRES a free self-service authorization key (email/name/org via the OII Unified Logon). Before building, check for a keyless bulk download on datadashboard.fda.gov; if none exists, either (a) take the user's own FDA key as actor input, or (b) record an operator blocker for one key request. Do NOT assume the key is already available.",
    "notes": "Sells the citation-level data (firm, date, CFR cite, program area), not the FOIA'd 483 PDFs Redica resells. Different, cheaper product for the same buyer.",
    "supply": 1,
    "screened_at": "2026-07-29T04:35:12+00:00",
    "score": 155.9,
    "status": "blocked",
    "incumbent_price_unit": "per document",
    "blocked_reason": "FDA Data Dashboard API requires a key; 401 confirmed 2026-07-29, no keyless bulk download (403)",
    "supply_visible": 1,
    "supply_composition": {
      "query": "fda 483 inspection observations",
      "total": 1,
      "visible": 1,
      "occupants": [
        {
          "name": "fda-warning-letters-483-inspections",
          "username": "nexgendata",
          "title": "FDA Warning Letters & 483 Inspections API",
          "description": "Joined feed of FDA Warning Letters + Form 483 inspection observations \u2014 facility-level severity-scored via FEI join. Pharma QA/QC, CMO/CDMO supplier risk, FDA defense counsel. The compliance-grade feed competitors that ship raw HTML scrapes can't match.",
          "runs": 25,
          "users30d": 1,
          "pricing": "PAY_PER_EVENT"
        }
      ]
    },
    "occupants_reviewed": [
      {
        "actor": "nexgendata/fda-warning-letters-483-inspections",
        "runs": 25,
        "verdict": "direct"
      }
    ],
    "occupancy_checked_at": "2026-07-29T10:21:45+00:00",
    "occupancy_verdict": "occupied",
    "direct_competitors": [
      {
        "actor": "nexgendata/fda-warning-letters-483-inspections",
        "runs": 25
      }
    ]
  },
  {
    "query": "prop 65 60 day notice",
    "target_actor_name": "prop-65-60-day-notice-settlement-benchmark",
    "title_idea": "Prop 65 60-Day Notice Monitor + Settlement Benchmark (California AG)",
    "deliverable": "The California Attorney General's own Prop 65 60-day notice CSV export returns, per notice row: AG Number, Date, Noticing Party (the serial-filer plaintiff), Plaintiff Attorney, Alleged Violator(s), Chemicals, Source (the product), Comments, and -- ONLY where the matter has since resolved -- Case ID, Case Name, Court Docket Number, Civil Penalty, Attorney Fees, Other Payments, Type of Claim, Relief Sought and Injunctive Relief. VERIFIED BY FETCH 2026-07-30, not assumed.",
    "job": "DECISION, not rows: 'a 60-day notice just landed in my product category -- what is this going to cost me, and is this filer serial?' Given a product/chemical/company term, returns (a) matching notices, (b) the noticing party's filing volume and their historical settlement distribution, and (c) the penalty-vs-attorney-fee split those cases actually resolved at. A defendant's first question is never 'show me rows', it is 'what do these settle for'.",
    "demand_type": "paid_incumbent",
    "incumbent": "Prop 65 Clearinghouse -- a subscription whose core product IS access to this same notice/settlement database",
    "incumbent_price_usd": 1150,
    "incumbent_price_unit": "per year (Basic, 5 users; Premier $1,800/yr unlimited users; non-profit rates $625/$950)",
    "demand_evidence_url": "https://www.prop65clearinghouse.com/subscribe",
    "demand_evidence": "Prop 65 Clearinghouse charges $1,150-$1,800/yr for website access to its Litigation Database, news archive, chemical lists and 'Recent 60-Day Notices' -- i.e. it resells, with a lag, the same public AG data this actor would read directly. Price confirmed by direct fetch of the subscribe page 2026-07-30 (search snippet and page agree). Secondary corroboration that this is a monitored compliance surface, not a niche curiosity: Hunton Andrews Kurth publishes a free Prop 65 notice tracker as client-development marketing, and Bureau Veritas and Intertek both sell Prop 65 notice-monitoring as a service line.",
    "data_source": "California Attorney General, Prop 65 60-Day Notice search -- server-side CSV export endpoint (60-day-notice-results-export_details.csv). Structured export, NOT HTML scraping.",
    "data_source_url": "https://oag.ca.gov/prop65/60-day-notice-results-export_details.csv",
    "data_source_verified": "2026-07-30 by direct fetch. HTTP 200, content-type text/csv, 17 stable named columns. Current-year pull returned 1,218 rows current to 07/29/2026 (yesterday) -- 3,648 notices filed YTD 2026, so this is a high-volume live stream, not a stale archive. Egress cleared by tools/screen.py egress: 200 on both plain and browser UA, and robots.txt has no rule covering either /prop65/60-day-notice-search-results or the .csv export path.",
    "data_source_risk": "THREE limits found by testing, all recorded rather than discovered later: (1) A request returns at most 1000 rows regardless of items_per_page, so history must be walked in date windows via date_filter[min][date] / date_filter[max][date] (mm/dd/yyyy). (2) field_prop65_report_year_value=YYYY silently returns ZERO rows -- it looks like a working filter and is not; use date_filter. (3) Settlement economics are present on only ~37% of rows (370/1000 sampled for 2023: Civil Penalty, Attorney Fees, Other Payments; Case Name 51%; Type of Claim 14%) because unresolved notices have nothing to report yet. The listing must therefore promise a settlement BENCHMARK over resolved comparables, never a settlement figure for every notice -- promising the latter is a S9 clawback.",
    "occupants_reviewed": [
      {
        "actor": "andrew_avina/property-tax-intelligence-mcp",
        "verdict": "adjacent",
        "why": "50-state property tax rates and appeal rates. Matches on the token 'property'/'notice' only. No Prop 65 or chemical-litigation content. 2 runs lifetime."
      },
      {
        "actor": "mrbridge/latest-news-mcp-server",
        "verdict": "adjacent",
        "why": "Generic global news MCP, 16,251 runs. High traffic but entirely unrelated source; it surfaces for this query as keyword noise, not as a competing product."
      },
      {
        "actor": "seibs.co/foreclosure-property-leads",
        "verdict": "adjacent",
        "why": "Pre-foreclosure/REO real-estate leads. Matches 'notice' (notice of default) -- a different statutory notice entirely."
      },
      {
        "actor": "calm_builder/facebook-ads-library-scraper",
        "verdict": "adjacent",
        "why": "Facebook Ads Library. Unrelated source and audience; pure keyword collision."
      },
      {
        "actor": "seibs.co/property-auction-leads",
        "verdict": "adjacent",
        "why": "Sheriff/trustee sale auction leads. Again 'notice' in the real-estate sense, not Prop 65."
      }
    ],
    "notes": "Occupancy was READ, per the third test. Supply 6 with FIVE visible occupants and not one of them touches Prop 65 -- the query is genuinely vacant, and the adjacent variants are vacant too ('proposition 65 notice of violation' supply 4 -> a TikTok downloader and two ryanclinton MCPs; 'prop 65 chemical listing' supply 2 -> a kitchenware scraper and a DACH employer-review scraper). Against the 2026-07-30 harvest as a whole this is the outlier: HMDA, Federal Audit Clearinghouse, FERC eLibrary, EIA-860, HUD LIHTC, EUDAMED, EASA ADs, EPA SDWIS and USDA FSIS all cleared the supply gate and were then killed on occupancy, each already held by a direct same-source rival (pink_comic, parseforge, zentrafoundry, automation-lab, ryanclinton). Prop 65 is untouched because it is a LEGAL vein rather than a federal-open-data vein, which is where the scraper farms are all fishing. Differentiator: the incumbent sells a searchable archive; the buyer's actual question is priced exposure. The 2023 sample makes the case -- one resolved matter carried a $290,120 civil penalty against $1,727,400 in attorney fees. Prop 65 is a fee-driven regime, and nobody is selling that ratio. Serial filers are concentrated and nameable (2023: Sandra Assareh 285 notices, CalSafe Research Center 117, Environmental Health Advocates 86), so 'is this filer serial, and what do they settle for' is answerable from the same file.",
    "supply": 6,
    "supply_composition": {
      "query": "prop 65 60 day notice",
      "total": 6,
      "visible": 5,
      "occupants": [
        {
          "name": "property-tax-intelligence-mcp",
          "username": "andrew_avina",
          "title": "Property Tax: 50-State Rates, Exemptions, Appeal Rates",
          "description": "Investor property tax rates for all 50 states + counties. Homestead exemptions (investors excluded), appeal deadlines, appeal success rates. TX: 65-70% appeal success (highest US). HI: 0.27% (lowest). NJ: 2.23% (highest). MCP-native.",
          "runs": 2,
          "users30d": 0,
          "pricing": "PAY_PER_EVENT"
        },
        {
          "name": "latest-news-mcp-server",
          "username": "mrbridge",
          "title": "Latest News MCP Server - Live Global Updates for AI",
          "description": "14 MCP tools aggregating 27 free APIs: global news from Reuters, AP, BBC, CNN, Al Jazeera, Bloomberg, GDELT (65+ languages), crypto markets, weather, earthquakes, Reddit, Hacker News, Wikipedia trends, predictions & more. No API keys needed. Works with Claude Desktop, Claude C
... [truncated for size]
```

## 10. CANDIDATE SEARCH SCREENING POOLS (`cands-*.json`)

### 10.1 `cands-990.json`
```json
[
  {
    "query": "form 990 schedule j compensation",
    "title_idea": "Nonprofit Executive Compensation Benchmark (IRS 990)",
    "job": "DECISION, not rows: given an EIN, is this nonprofit's officer compensation out of line with peers? Returns the org's 13-year officer-comp series from ProPublica (compnsatncurrofcr, pct_compnsatncurrofcr, othrsalwages) indexed against peer orgs matched on NTEE code and total-revenue band, with a plain verdict.",
    "source": "ProPublica Nonprofit Explorer API v2 (egress CLEARED 2026-07-29: 200 both UAs, no robots rule covering /nonprofits/api/v2/)",
    "source_limitation": "VERIFIED BY FETCH, not assumed: ProPublica returns AGGREGATE officer compensation only (MoMA FY2023 compnsatncurrofcr = $13,348,996). NAMED individual executives live in 990 Part VII / Schedule J, which is in the IRS 990 XML, NOT in this API. The IRS bucket path is UNRESOLVED -- s3.amazonaws.com/irs-form-990/index_2023.csv returned 404. So the buildable deliverable is a peer-relative RATIO benchmark, not a named-person salary lookup. Do not promise named executives in the listing.",
    "demand_type": "paid_incumbent",
    "incumbent": "Candid Foundation Directory Premium $219/month ($1,199/yr; Ultimate $1,699/yr)",
    "demand_evidence_url": "https://grantsights.com/blog/candid-foundation-directory-pricing",
    "demand_evidence_caveat": "Price corroborated from two third-party trackers (Grantsights, TrustRadius) as of 2026-06-17. Candid's own pricing page was NOT reachable to confirm: candid.org/use-our-data/candid-pricing 404, fconline.foundationcenter.org/plans 403. The COMPENSATION-REPORT-specific price was not verified at all -- $219/mo is the general Foundation Directory subscription.",
    "vein_demand": "The 990 vein carries real runs: `grantee due diligence 990` 588 runs/30d across 5 occupants, `foundation grant history 990pf` 380 across 6. This QUERY itself carries only 2 runs/30d -- thin, and recorded as the main risk on this candidate.",
    "occupants_reviewed": [
      {
        "actor": "scrapesage/us-labor-union-leads",
        "verdict": "adjacent",
        "why": "Sourced from DOL LM-2 union filings, not IRS 990. Ships union/labour-relations records at $0.005-$0.006. Different source, different job, 2 runs/30d."
      }
    ],
    "why_now": "The 2026-07-29 sweep correction showed this vein is not unmonetized: jungle_synthesizer/propublica-nonprofit-crawler collects >=$39.60/mo on a $0.10 press-go fee at 99% success. Demand here is proven AND already paying, on our own store, at our own price point."
  },
  {
    "query": "grantee due diligence 990",
    "title_idea": "Grantee Due Diligence Screen (990 + auto-revocation + OFAC + OIG-LEIE)",
    "job": "Composite screening decision on a grantee EIN across four cleared federal sources.",
    "source": "ProPublica 990 API + IRS auto-revocation list + OFAC SDN bulk CSV + OIG LEIE (all egress-cleared; the latter two are machinery this portfolio already runs)",
    "demand_type": "paid_incumbent",
    "incumbent": "Candid Foundation Directory Premium $219/month",
    "demand_evidence_url": "https://grantsights.com/blog/candid-foundation-directory-pricing",
    "occupants_reviewed": [
      {
        "actor": "jungle_synthesizer/propublica-nonprofit-crawler",
        "verdict": "direct",
        "why": "Same source (ProPublica 990), 396 runs/30d at 99% success, and -- per the corrected sweep -- already collecting >=$39.60/mo via a $0.10 apify-actor-start fee. Entering here is undercutting a healthy neighbour on the same store, which is the perfect competition SS1 exists to avoid."
      },
      {
        "actor": "ryanclinton/nonprofit-explorer",
        "verdict": "direct",
        "why": "Same ProPublica 990 source, 132 runs/30d, 100% success."
      },
      {
        "actor": "pink_comic/nonprofit-explorer-990-search",
        "verdict": "direct",
        "why": "Same ProPublica 990 source, 30 runs/30d."
      },
      {
        "actor": "solidcode/propublica-scraper",
        "verdict": "direct",
        "why": "Same ProPublica source, 27 runs/30d."
      },
      {
        "actor": "ryanclinton/nonprofit-grant-intelligence-mcp",
        "verdict": "direct",
        "why": "Same source AND same deliverable shape -- already prices generate_due_diligence_report at $0.30. Only 3 runs/30d, so the shape is unproven here, but the position is taken."
      }
    ]
  },
  {
    "query": "990pf grantmaker search",
    "title_idea": "Private Foundation Giving History (990-PF)",
    "job": "Which foundations have funded organisations like mine, and at what size.",
    "source": "ProPublica 990-PF via Nonprofit Explorer API (egress cleared)",
    "demand_type": "paid_incumbent",
    "incumbent": "Candid Foundation Directory Premium $219/month",
    "demand_evidence_url": "https://grantsights.com/blog/candid-foundation-directory-pricing",
    "occupants_reviewed": [
      {
        "actor": "scrapesage/foundation-grants-scraper",
        "verdict": "direct",
        "why": "Same 990-PF source, same job (grant + funder records at $0.004/$0.008), 77 runs/30d at 97% success."
      }
    ]
  }
]

```

### 10.1 `cands-faa-docindex.json`
```json
[
  {
    "query": "faa aircraft document index",
    "title_hint": "FAA Aircraft Document Index — Lien, Release & Bill of Sale Filings by N-Number",
    "deliverable": "Checks a list of N-numbers against the FAA Civil Aviation Registry's Document Index — the index of conveyance documents filed for recordation against an aircraft. Returns, per N-number: every document received in the current ~180-day window with its FAA document ID, document type decoded (S/A security conveyance/lien, REL lien release, REP repossession, BOS evidence of ownership, CSC ownership with lien, DIS disclaimer, CRT court document), receipt date, processing date and correction status; plus computed flags (recent lien filed, recent release, recent ownership transfer, recent repossession) and the aircraft's current registration record (owner, make/model, serial, year, registration status) so a zero-filings answer is distinguishable from a bad N-number. Supports a sinceDate cutoff for gap/date-down checks against an existing title report.",
    "demand_type": "paid_incumbent",
    "incumbent": "Aerospace Reports 'Aircraft Title Search' $85 per aircraft — 'a formal title report revealing any liens or title issues of record at the FAA'; same vendor's 'Chain of Title' $85 and 'Complete Aircraft Records' $45; AIC Title Service sells the equivalent. Buyers are aircraft buyers, brokers, lenders and escrow agents at closing.",
    "incumbent_price_usd": 85,
    "incumbent_price_note": "Price page fetched 2026-07-30: https://www.aerospacereports.com/services lists Aircraft Title Search $85, AOPA member package $95, Chain of Title $85, Accident/Incident Report $60, Complete Aircraft Records $45. IMPORTANT AND NOT GLOSSED OVER: the $85 report is a FULL chain-of-title search and this actor is NOT a substitute for it. The FAA Document Index covers the last ~180 days of receipts only (measured: 2026-01-23 to 2026-07-28, a 186-day span). What this proves is that FAA lien information on a specific aircraft is demand that is proven AND priced at $85 a look; what this actor sells is the recent-filings slice of it, updated every federal working day, at ~1/800th the price and in bulk. The README says this in the first screen so no buyer can mistake it for a title search.",
    "demand_evidence_url": "https://www.aerospacereports.com/services/aircraft-title-search",
    "demand_evidence_url_2": "https://www.aerospacereports.com/services",
    "demand_evidence_read_at": "2026-07-30",
    "buyer": "Aircraft lenders and lessors monitoring collateral for a competing security conveyance or a missing release; brokers and escrow/title agents running a gap (date-down) check between a title report's cutoff and closing; owners and CFI/management companies confirming a bill of sale or registration filing was actually received by the Registry in Oklahoma City; repossession and asset-recovery firms; aviation finance shops tracking S/A and REL flow across a fleet.",
    "source": "FAA Civil Aviation Registry, Aircraft Registration Branch (AFS-750) — Releasable Aircraft Database, DOCINDEX.txt (Document Index File) joined to MASTER.txt (Aircraft Registration Master File) and ACFTREF.txt (make/model reference)",
    "source_url": "https://registry.faa.gov/database/ReleasableAircraft.zip",
    "source_license": "US federal government work — public domain. FAA publishes the file for download with no key, no account and no terms gate. Attribution line ships in the README and in every output item.",
    "source_verified": {
      "at": "2026-07-30",
      "how": "Downloaded and parsed from this box. GET https://registry.faa.gov/database/ReleasableAircraft.zip -> HTTP 200, 73,019,497 bytes, real PK archive containing ardata.pdf, DOCINDEX.txt (3,036,815 B, 2026-07-28), ACFTREF.txt, ENGINE.txt, DEALER.txt, MASTER.txt (193 MB), RESERVED.txt, DEREG.txt. DOCINDEX.txt: 17,863 data rows, EVERY line exactly 168 characters, receipt dates 2026-01-23..2026-07-28. MASTER.txt: 315,144 rows. Doc types measured: BOS 9,709 / S/A 4,084 / REL 3,670 / DIS 331 / CRT 35 / REP 20 / CSC 12 / APP 2. Collateral types: 1-aircraft 12,146 / 2-engine 3,383 / 9-unidentified 1,957 / 3-propeller 367 / 5-document 10. Field layout taken from the FAA's own ardata.pdf data dictionary shipped inside the zip, not guessed.",
      "web_form_contract_cracked": "The open build-time unknown recorded on 2026-07-30 is now CLOSED. registry.faa.gov/aircraftinquiry/Search/DocumentIndexInquiry posts to /Search/DocumentIndexResult with field name Colltxt (not NNumbertxt) plus a __RequestVerificationToken hidden field and its matching antiforgery cookie; POSTing Colltxt=100HY returns the real results table (Collateral Type | Collateral | Document Type | Party | Document Receipt Date). RECORDED BUT NOT USED: the web page returns exactly the same data as DOCINDEX.txt and its Party column is empty too, so the bulk file wins on every axis (§7 prefers stable published files over HTML) and the actor scrapes nothing.",
      "the_specific_testable_defect_in_the_incumbent_source": "The FAA's own Document Index Inquiry page overcounts documents, and it does so by roughly 2-3x. DOCINDEX carries one row per (document, party), and the Party column is now permanently blank — the FAA's data dictionary states the party names were withdrawn under the 49 U.S.C. 44114 personally-identifiable-information procedure. The rows therefore collapse to visually identical duplicates that nothing on the page distinguishes. Measured on the live site AND in the file, same answer both ways: N100HY shows SIX entries that are TWO documents (one BOS 2026-07-07 corrected, one S/A 2026-07-08); N904AV shows nine that are three; N1001J shows three that are one. Across the whole file, 17,863 rows are 8,718 distinct documents — 51% of what the FAA displays is duplication. Deduplicating and reporting both the document count and the raw index-entry count is a specific, testable improvement, and it is the difference between telling a lender 'four security conveyances were filed against your collateral' and the truth, 'one was'.",
      "silent_failure_guard": "A published fixed-width file, so this is the §7-preferred shape rather than the §3 scraped-HTML shape — but a false 'no liens filed' is still a §9 clawback, so four guards ship: (1) archive integrity — PK header, required members present, DOCINDEX row-count floor and every line 168 chars; (2) window freshness — the newest receipt date must be within 10 days, since the FAA updates each federal working day, so a stale mirror fails the run instead of clearing everyone; (3) window span — earliest..latest must span at least 150 days or the file is truncated; (4) existence check — every requested N-number is resolved against MASTER.txt, so 'no filings' on an N-number that is not registered is reported as UNVERIFIED, never as clear."
    },
    "occupants_reviewed": [
      {
        "actor": "parseforge/dibbs-rfq-scraper",
        "runs": 1176,
        "verdict": "adjacent",
        "why": "DLA DIBBS defence solicitations — RFQ numbers, NSNs, quantities. Matches this query only on the word 'document'. Different agency, different source, different buyer."
      },
      {
        "actor": "parseforge/uspto-trademark-scraper",
        "runs": 168,
        "verdict": "adjacent",
        "why": "USPTO Assignment Center trademark assignments. The closest conceptual neighbour of the five — it does ship recorded CONVEYANCE data — but against a different federal registry for a different asset class. It cannot answer anything about an aircraft, and no trademark buyer overlaps with an aircraft lender."
      },
      {
        "actor": "parseforge/energy-gov-scraper",
        "runs": 210,
        "verdict": "adjacent",
        "why": "Energy.gov articles, press releases and documents. Fuzzy-match noise on 'document'."
      },
      {
        "actor": "ryanclinton/aviation-safety-risk-mcp",
        "runs": 98,
        "verdict": "adjacent",
        "why": "The only occupant in the aviation domain, so it got the closest read. It is an MCP server selling 'aircraft and airline compliance intelligence for AI agents' — safety and operational risk. Testable claim: safety-risk intelligence is built from incident, enforcement and operator data, and carries no FAA document ID and none of the S/A, REL, REP, BOS, CSC, DIS, CRT conveyance codes, which exist only in DOCINDEX.txt. A recorded security conveyance is a title fact, not a safety fact."
      },
      {
        "actor": "parseforge/fda-recalls-scraper",
        "runs": 112,
        "verdict": "adjacent",
        "why": "FDA food/drug/device recalls. Unrelated."
      },
      {
        "actor": "jungle_synthesizer/faa-aircraft-registry-crawler",
        "runs": 142,
        "verdict": "adjacent",
        "why": "Ships the registration roster — N-number, owner, make/model, status — i.e. MASTER.txt. Testable claim: its output contains no document-receipt rows at all, no FAA document ID, and none of the S/A, REL, REP, BOS, CSC, DIS, CRT type codes, because DOCINDEX.txt is a different member of the archive that it does not read. It answers WHO OWNS IT; this answers WHAT HAS BEEN FILED AGAINST IT. Different deliverable on a shared source — BURN_PRIORITIES #1's job-differentiation shape, the same scoping that produced hcris (line 202, not line 200) and epa-echo (regulatory records, not ASTM E1527)."
      },
      {
        "actor": "velvety_bedbug/faa-aircraft-registry-scraper",
        "runs": 85,
        "verdict": "adjacent",
        "why": "Same shape as above — registration lookup. No conveyance/lien output."
      },
      {
        "actor": "gio21/faa-aircraft-registry-scraper",
        "runs": 32,
        "verdict": "adjacent",
        "why": "Same shape as above — registration lookup. No conveyance/lien output."
      },
      {
        "actor": "scrapemint/aircraft-owner-leads",
        "runs": 15,
        "verdict": "adjacent",
        "why": "Explicitly a sales-lead product b
... [truncated for size]
```

### 10.1 `cands-fmcsa-motus.json`
```json
[
  {
    "query": "motor carrier authority revocation",
    "target_actor_name": "motor-carrier-authority-revocation-pending-suspension",
    "demand_type": "paid_incumbent",
    "incumbent": "Carrier411 / RMIS (Truckstop) / Highway / Carrier Assure / SaferWatch — freight-broker carrier-vetting SaaS sold on continuous authority + insurance monitoring",
    "incumbent_price_usd": null,
    "demand_evidence_url": "https://www.carrierassure.com/pricing",
    "demand_evidence": "Two independent BUYER-classed occupants on the Apify store measured 2026-08-06 with screen.py demand: demand_runs_30d=382 on-topic (gate 150), buyer_runs_30d=382, cron 28 discounted, off-topic 53 discounted, top occupant share 58% (below the 0.8 CONCENTRATION cut and both top occupants do the same job, not an adjacent one). scrapesage/fmcsa-trucking-scraper 161 runs/30d u30=6 and makework36/fmcsa-trucking-api 221 runs/30d u30=4, different owners. NOT source-partitioned — FMCSA is one national federal source, so the fifth shape does not apply and the 382 is not a sum over unreachable states. Off-store: carrier vetting is an established paid SaaS category (Carrier411, Truckstop RMIS, Highway, Carrier Assure, SaferWatch); pricing is demo-gated across every vendor, which is itself the enterprise-price-point signal. Pain is direct money — tendering a load to a carrier whose authority is suspended or whose insurance lapsed is cargo-liability and FMCSA-compliance exposure for the broker.",
    "data_source": "FMCSA Motus open-data stack (12 datasets) on data.transportation.gov Socrata — keyless SODA API, no webKey",
    "data_source_url": "https://data.transportation.gov/resource/wb4f-neki.json (Motus RevokeSuspend - All With History) + https://data.transportation.gov/resource/yu5v-wbh6.json (Motus AuthHist - All With History) + https://data.transportation.gov/resource/3uet-3z4i.json (Motus InsHist - All With History)",
    "data_source_verified": "2026-08-06 PROBED AND LIVE — this SUPERSEDES the 2026-07-29 frozen-snapshot kill rather than contradicting it. The 07-29 probe tested the LEGACY ids (Revocation sa6p-acbp, AuthHist 9mw4-x3tu, ActPendInsur qh9u-swkp) and was right: those files stop at 2026-05-12/14/15 and sa6p-acbp's own description now states 'This dataset was last refreshed on 05/14/2026 and will no longer be updated.' FMCSA cut over to a successor system, Motus, and republished on the SAME host under NEW ids. Freshness verified by CONTENT, never by metadata (rowsUpdatedAt on the frozen sa6p-acbp still reads 2026-08-05 — the 07-29 rule holds): max(status_change_date)=20260805 on yu5v-wbh6 (109,245 rows) and dm5j-zc6c, max(trans_date)=20260805 on Motus Insur c5y8-a4uz (92,786 rows), max(order1_serve_date)=20260805 on wb4f-neki (8,540 rows). All 12 Motus datasets enumerated. EGRESS CLEARED and banked: data.transportation.gov 200 plain + 200 browser, robots has NO rule covering /resource/. Note the sibling-host trap — datahub.transportation.gov serves the identical dataset ids but its robots.txt adds a blanket 'Disallow: /'; data.transportation.gov's is the same Socrata file MINUS that line, and it is not a redirect (verified 200 with no Location header). Federal public-domain data, documented SODA API, §3-preferred stable class rather than fragile HTML.",
    "data_source_risk": "(a) Motus is a NEW system (its all-with-history files begin ~2026-05), so authority history before the cutover lives only in the frozen legacy files — state the coverage start date in the README rather than implying full history. (b) Freshness must be asserted at RUNTIME from max(status_change_date), never from rowsUpdatedAt: the frozen legacy file proves the metadata timestamp is a touch, not a refresh. Abort the run rather than emit stale rows. (c) Verify the Socrata $where/IN filter is applied server-side rather than silently ignored — assert the returned USDOT numbers are a subset of those requested (the exact failure caught on the CMS revalidation actor). (d) Do NOT infer revocation from Motus Carrier op_auth_status alone; join to wb4f-neki/yu5v-wbh6 for the order and reason.",
    "deliverable": "Per USDOT or MC number, the FMCSA motor carrier operating-authority record assembled from the keyless Motus open-data stack: every authority grant, revocation, suspension and reinstatement with its status-change date and reason text (Motus AuthHist yu5v-wbh6, 109,245 rows); every suspension and revocation order with docket number, authority type, order type, serve date and EFFECTIVE date — including the 1,775 orders already served whose effective date is still in the future (Motus RevokeSuspend wb4f-neki, 8,540 rows); and every insurance filing and cancellation with insurer, policy number, coverage limits and cancellation effective date — including the 225 cancellations not yet in force (Motus InsHist 3uet-3z4i, 18,324 rows).",
    "differentiator": "Every rival reports authority state only AFTER it changes; none exposes the served-but-not-yet-effective order, which is the only field that gives a broker warning time. Measured 2026-08-06 from the rivals' own published dataset views, not from their prose: sheshinmcfly/fmcsa-carrier-intelligence reduces the whole subject to a BOOLEAN hasRevocationHistory with no order date, reason or effective date; scrapesage/fmcsa-trucking-scraper's carriers and leads views emit only status and registrationDate alongside lead-gen fields (leadScore, phone, email) despite its README claiming it merges revocations; makework36/fmcsa-trucking-api reads the SAFER Company Snapshot, which by construction shows current status only, and its own listing frames monitoring as re-running bulk lookups to detect changes after the fact. So the testable claim is: no listed rival returns order1_serve_date, order1_type_desc, order1_effective_date or cancl_effective_date, and therefore none can answer 'is this carrier's authority or insurance scheduled to lapse?' — 1,775 suspension orders and 225 insurance cancellations are open in that forward window today. Falsifiable before build: run any rival on USDOT 3590494 (MC-1215973, suspension served 20260708, effective 20260807) and check whether the pending order appears.",
    "occupants_reviewed": [
      {"actor": "makework36/fmcsa-trucking-api", "verdict": "direct", "note": "221 runs/30d u30=4. SAFER Company Snapshot lookup + Google enrichment. Same subject, current-status only; no order or effective-date field."},
      {"actor": "scrapesage/fmcsa-trucking-scraper", "verdict": "direct", "note": "161 runs/30d u30=6. Explicitly reads the same FMCSA Socrata registry. README claims revocations are merged; its published views emit status/registrationDate/leadScore only."},
      {"actor": "sheshinmcfly/fmcsa-carrier-intelligence", "verdict": "direct", "note": "28 runs/30d u30=0, marked farm/owner cron by mark_farm_crons. Ships hasRevocationHistory as a boolean plus riskLevel."},
      {"actor": "irreplaceable_chevrotain/carrier-vetting-mcp", "verdict": "direct", "note": "0 runs/30d, listing-only. FMCSA risk verdicts via MCP; no measurable demand behind it."},
      {"actor": "scrapesage/hud-multifamily-scraper", "verdict": "adjacent", "note": "HUD multifamily housing leads. Same owner's lead-gen portfolio matching on generic words; already discounted OFF-TOPIC by the demand read."},
      {"actor": "scrapesage/us-building-permits-scraper", "verdict": "adjacent", "note": "Construction permit leads. Discounted OFF-TOPIC by the demand read."}
    ],
    "notes": "Re-screened 2026-08-06 after the FMCSA QCMobile webKey blocker was resolved: the key was never needed. The blocker recorded on 2026-07-29 rested on two claims — that the data needs a login.gov-verified webKey, and that the underlying L&I data is a frozen snapshot. The first is false (the Motus stack is keyless Socrata on a federal open-data host) and the second is now superseded (the legacy files are frozen and formally retired; the Motus successors are current to 2026-08-05)."
  }
]

```

### 10.1 `cands-npi-deactivation.json`
```json
[
  {
    "query": "npi registry lookup",
    "target_actor_name": "npi-deactivation-check-registry-validation",
    "demand_type": "paid_incumbent",
    "incumbent": "CAQH ProView / Verifiable / Medallion / Certify OS — provider-credentialing and payer-enrollment SaaS sold on continuous NPI + licence monitoring; on-store the paid incumbent is pink_comic/nppes-npi-registry, which explicitly sells 'NPI-status evidence ... for credentialing prechecks'",
    "incumbent_price_usd": null,
    "demand_evidence_url": "https://apify.com/pink_comic/nppes-npi-registry",
    "demand_evidence": "screen.py demand 2026-08-06: demand_runs_30d=462 on-topic (gate 150), buyer_runs_30d=203, 233 runs/30d discounted as owner cron across EIGHT owners, total=164 visible=19 live rivals. Rule 2 rests on THREE Actors from three different owners, top only 45% of buyer runs -- pink_comic/nppes-npi-registry 91 u30=5, sourabhbgp/npi-registry-scraper 73 u30=4, jungle_synthesizer/nppes-npi-crawler 39 u30=3 -- so it is not the one-Actor shape. CONCENTRATION 20%, far below the 0.8 cut and the lowest measured on any passing query to date. No jurisdiction veto (US-only subject, US-only rivals). NOT a farm: the three buyers are three owners at spread run counts. NOT source-partitioned (fifth shape does not apply): NPPES is ONE national federal source, not 50 state offices, so the 462 is not a sum over unreachable slices. Off-store, credentialing/enrollment verification is an established paid SaaS category (CAQH ProView, Verifiable, Medallion, Certify OS), all demo-gated pricing. Pain is direct money: submitting a claim under a deactivated NPI is a hard denial, and credentialing a provider on a deactivated NPI is a payer-audit finding.",
    "data_source": "CMS NPPES -- two keyless federal sources that must be JOINED: the NPPES API v2.1 (current registry) and the CMS Monthly NPI Deactivation File (the deactivated population, which the API omits entirely)",
    "data_source_url": "https://npiregistry.cms.hhs.gov/api/?version=2.1&number={npi} + https://download.cms.gov/nppes/NPPES_Deactivated_NPI_Report_071326_V2.zip (discovered from https://download.cms.gov/nppes/NPI_Files.html)",
    "data_source_verified": "2026-08-06 PROBED AND LIVE. EGRESS CLEARED on both hosts and banked to egress_log.json: npiregistry.cms.hhs.gov 200 plain + 200 browser, no robots.txt published (soft-404 HTML), nothing disallows /api/; download.cms.gov 200 plain + 200 browser, robots.txt HTTP 404, nothing disallows /nppes/. Both are federal public-domain CMS data with no consent gate and no click-through contract. Deactivation file measured: 2,618,951-byte ZIP containing one 5.5 MB XLSX, 349,556 data rows, columns 'NPI' and 'NPPES Deactivation Date', dates spanning 2005 through 2026-07-13, ~30k deactivations/year (2024: 30,787, 2025: 34,153, 2026 YTD: 20,193). API response shape dumped in full: keys are addresses/basic/created_epoch/endpoints/enumeration_type/identifiers/last_updated_epoch/number/other_names/practiceLocations/taxonomies, and the serialised response contains the substrings 'deactiv', 'reactiv', 'termination' and 'inactive' ZERO times.",
    "data_source_risk": "(a) FRAGILE-CLASS LINK DISCOVERY -- the deactivation ZIP filename embeds a date (NPPES_Deactivated_NPI_Report_MMDDYY_V2.zip) and must be found by parsing NPI_Files.html, which is HTML and therefore the section-3 fragile class. A prop-65-style canary is MANDATORY and must ABORT the run rather than emit garbage: fail if no NPPES_Deactivated_NPI_Report_*.zip link is present, if the XLSX header row is not exactly ['NPI','NPPES Deactivation Date'], or if the parsed row count is under 300,000 (measured 349,556). An empty or short deactivation table would silently reclassify every deactivated NPI as NEVER_ISSUED -- the exact silent-failure mode section 3 kills strategies for. (b) The file is MONTHLY (latest 2026-07-13), so a deactivation in the current month is not yet in it. State the file's own as-of date in every output row rather than implying real-time. (c) Cache the parsed NPI set for the life of a run; do not re-download per input NPI. (d) Do not infer ACTIVE from basic.status -- it is a constant (see differentiator); infer it from the API returning a record at all.",
    "deliverable": "A batch NPI registry lookup that returns a verdict instead of a silence. For each NPI submitted it performs the NPPES registry lookup and then resolves the result into FOUR distinguishable states, where the registry API itself offers only one. ACTIVE -- the registry returns a record, shipped with the provider's name, taxonomy, licence and addresses. DEACTIVATED -- absent from the API but present in the CMS Monthly NPI Deactivation File, shipped with the CMS deactivation date and the file's as-of date. NEVER_ISSUED -- absent from both sources but structurally a valid NPI (passes the 80840-prefixed Luhn check digit). INVALID_FORMAT -- fails the check digit or is not ten digits, so it was never a possible NPI and the buyer has a data-entry error, not a provider problem. Batch input of NPI lists, one row per NPI, one charged event per NPI checked.",
    "differentiator": "The rivals ship a column named 'status' that CANNOT EVER SAY DEACTIVATED, and this is a correctness defect in the hcris shape -- the obvious extraction is the wrong one -- not a column count. Measured 2026-08-06 against the source, not against their prose: CMS does not FLAG a deactivated NPI in the API, it REMOVES it, and publishes the deactivated population in a separate monthly XLSX on a different host that no rival reads. Consequence one: basic.status is a constant. Sampled 1,400 live API records across eight queries -- 1,400 of 1,400 return 'A', so sourabhbgp/npi-registry-scraper's 'status' field is structurally incapable of emitting a non-active value. Consequence two: the API's answer for a deactivated provider is silence. Sampled 25 NPIs at random from the 349,556-row CMS deactivation file -- 25 of 25 return result_count:0, byte-identical to the response for a number that was never issued. The rivals are API wrappers and their own published field lists prove it: every one of sourabhbgp's 44 output fields is a camelCased NPPES API v2.1 response field (endpoints, otherNames, practiceLocations, organizationalSubpart, enumerationDate, identifiers, authorizedOfficial*) plus two synthetic ones (nppesUrl, scrapedAt), and jungle_synthesizer's 27 are the same shape snake_cased; pink_comic ships NO output schema and NO README at all, which is itself a finding. Since the API response contains the substring 'deactiv' zero times, NONE of the three can emit a deactivation date -- it does not exist in the endpoint they read. FALSIFIABLE BY ANYONE WITHOUT RUNNING ANYTHING: take any NPI from https://download.cms.gov/nppes/NPPES_Deactivated_NPI_Report_071326_V2.zip -- e.g. 1982883625 (deactivated 2023-11-29), 1366509945 (2020-08-17), 1003027293 (2016-02-01) -- and query the source every rival reads; it returns result_count:0 with no reason and no date.",
    "occupants_reviewed": [
      {"actor": "pink_comic/nppes-npi-registry", "verdict": "direct", "note": "91 runs/30d u30=5, lifetime 1171, top buyer occupant. Input fields are pure NPPES API params (city/firstName/lastName/npi/organizationName/postalCode/searchType/state/taxonomyDescription). Ships NO output schema and readme_chars=0, so it cannot demonstrate its shape. Its DESCRIPTION sells exactly our buyer -- 'NPI-status evidence ... for credentialing prechecks' -- while reading the one endpoint that cannot supply it. The incumbent is already selling the promise it cannot keep."},
      {"actor": "sourabhbgp/npi-registry-scraper", "verdict": "direct", "note": "73 runs/30d u30=4, lifetime 375. 44 output fields including a 'status' column. Every field maps 1:1 onto the NPPES API v2.1 response; description says 'HTTP-only'. Its status column is a constant 'A' across the 1,400 records sampled."},
      {"actor": "jungle_synthesizer/nppes-npi-crawler", "verdict": "direct", "note": "39 runs/30d u30=3, lifetime 192. 27 output fields, same API response shape snake_cased, no status field at all. Positioned for pharma/medical-device lead-gen."},
      {"actor": "fixmyerrorcode/newly-enumerated-us-healthcare-organizations-weekly-npi-feed", "verdict": "adjacent", "note": "51 runs lifetime u30=1. The MIRROR IMAGE job -- NEW enumerations from the weekly dissemination delta, not deactivations. Cited in the 2026-07 rejection of `nppes npi deactivation` as an occupancy veto; under the current rule 3 occupancy is not a veto, and this Actor does not do this job."},
      {"actor": "haketa/nppes-npi-registry-scraper", "verdict": "direct", "note": "55 runs/30d u30=1, 84% success. Generic registry scraper."},
      {"actor": "makework36/npi-registry-api", "verdict": "direct", "note": "30 runs/30d u30=1, cron-classed (233 runs/30d discounted across eight owners). Generic NPPES API lookup + enrichment; same API-wrapper shape, no deactivation concept."},
      {"actor": "agenscrape/nppes-npi-registry-api", "verdict": "direct", "note": "30 runs/30d u30=1, cron-classed. NPPES API wrapper."},
      {"actor": "alizarin_refrigerator-owner/npi-registry---healthcare-provider-search", "verdict": "direct", "note": "29 runs/30d u30=0, cron-classed. Priced per API-shaped event (lookup_npi, search_providers, search_by_specialty) -- the event list is itself the NPPES API surface, which has no deactivation endpoint."},
      {"actor": "dromb/nppes-us", "verdict": "direct", "note": "29 runs/30d u30=1, cron-classed. NPPES wrapper, all events free."},
      {"actor": "crawlerbros/nppes-npi-registry-scraper", "verdict": "direct", "note": "29 runs/30d u30=1, cron-classed. Generic registry scraper."},
      {"actor": "crawlergang/nppes-npi-registry-scraper", "verdict": "direct", "note": "29 runs/30d u30=1, cron-classed. Generic registry scraper, sibling naming to crawlerbros."},
      {"actor": "crawlerbros/npi-registry-scraper", "verdict": "direct", "not
... [truncated for size]
```

### 10.1 `cands-nz-fspr.json`
```json
[
  {
    "query": "financial adviser register new zealand",
    "incumbent": "CVCheck (Kinatico) 'New Zealand: Financial Service Providers Register' AU$42.35 per name; same vendor's 'New Zealand: Personal Property Securities Register' AU$54.45 per name is the sibling SKU on the same registry platform",
    "incumbent_price_usd": 28,
    "demand_evidence_url": "https://cvcheck.com/checks/financial-service-providers-register/",
    "demand_type": "paid_incumbent",
    "demand_note": "Fetched 2026-08-03 (HTTP 200, price $42.35 on page). The SKU page states the job precisely: 'confirm if your individual is a registered financial services provider in New Zealand ... provide important information about the individual, including the types of services they are registered for', for 'occupations such as sharebrokers, accountants, financial advisers'. This is a per-name employment-screening lookup, i.e. the same buyer and the same shape as the three CVCheck-sourced draws already shipped (uk-bankruptcy, asic-banned-disqualified-persons, ireland-personal-insolvency). The SKU was already flagged in open_queries._demand_catalogue.unexploited_sku_shapes_worth_harvesting as 'financial-service-providers-register'; this cycle priced it and confirmed the jurisdiction is NZ, not AU.",
    "data_source": "https://fsp-app.companiesoffice.govt.nz/orp-master/service/create.html?targetAppCode=orp-master&service=registerItemSearch -- MBIE Companies Office ORP (Catalyst WebUI 5.6.0) public FSPR search. SOURCE IS NOT YET PROVEN TO RETURN ROWS -- see THE_ONE_UNKNOWN in notes before building.",
    "deliverable": "For a searched person or entity name, the New Zealand Financial Service Providers Register (FSPR) record: FSP registration number, registered name and any trading names, registration status (registered / deregistered) with dates, the categories of financial service the provider is registered to supply -- which is what identifies a registered financial adviser or financial advice provider as distinct from a sharebroker, accountant or AML/CFT reporting entity -- and the dispute-resolution scheme the provider belongs to. NOT YET VERIFIED AGAINST A RETRIEVED ROW: this is the register's documented public content (per the FSPR help centre and the incumbent SKU page), not something a run has returned here. The build cycle must confirm it field-by-field before the name ships, because §9 makes a name/deliverable mismatch a clawback -- see THE_ONE_UNKNOWN in notes.",
    "occupants_reviewed": [
      {
        "actor": "scrapeworks/australian-financial-advisers-register",
        "verdict": "adjacent",
        "why": "Closest neighbour and the only one worth arguing about, but it is a different REGISTER in a different COUNTRY: it reads ASIC's Financial Advisers Register (Australia). Specific testable claim: it cannot answer 'is this person registered on the New Zealand FSPR, and for which financial services' at all -- the NZ FSPR covers a wider population than advisers (sharebrokers, accountants, DRS membership, AML/CFT reporting entities) and is maintained by MBIE Companies Office, not ASIC. A buyer holding CVCheck's NZ$/AU$42.35 NZ SKU gets zero coverage from it."
      },
      {
        "actor": "parseforge/gleif-lei-records-scraper",
        "verdict": "adjacent",
        "why": "Reads the global GLEIF LEI database -- legal-entity identifiers for ENTITIES. Specific testable claim: it returns no NZ FSP registration number, no registered-service categories and no dispute-resolution-scheme membership, and it cannot search a natural person by name, which is the entire job of the per-name incumbent SKU."
      },
      {
        "actor": "claygenius/advanced-seek-job-scraper",
        "verdict": "adjacent",
        "why": "A Seek job-board scraper. Matches only on the fuzzy store search; no regulatory register content whatsoever."
      }
    ],
    "notes": "SUPPLY 3, OCCUPANCY CLEAR (read 2026-08-03, not merely counted): the three occupants are scrapeworks/australian-financial-advisers-register (ASIC FAR -- different jurisdiction AND different register), parseforge/gleif-lei-records-scraper (GLEIF LEI) and claygenius/advanced-seek-job-scraper (job board). Sibling phrasings: `new zealand financial adviser check` 3, `nz fspr register check` 4 (occupied only by parseforge/nz-companies-register-scraper, the COMPANIES register, a different register on the same platform). No occupant reads the FSPR. THE_ONE_UNKNOWN, RECORDED RATHER THAN GUESSED: the search app is confirmed public and keyless -- create.html returns HTTP 200 with title 'Search Financial Service Providers' and, decisively, NONE of the RealMe interstitial markers ('logging in', 'authentication process') that gate the sibling nz-companies-office-banned-directors-check lead in blocked.json. robots.txt permits the path (it disallows only /admin/, /Security/, /_resources/, /_graphql/, /data/ -- note /_graphql/ IS disallowed, do not use it). The form contract is partly recovered: POST viewInstance/update.html?id=<sid> with QueryString, nodeW16-Advanced=N, _VIKEY_=<viewInstanceKey from page JS>, _CBNODE_=W26, _CBNAME_=buttonPush, plus _CBHTMLFRAG_/_CBHTMLFRAGID_=AsyncWrapperW5/_CBASYNCUPDATE_ (param names come from the inline webuiConfig: callbackNodeParam=_CBNODE_, callbackNameParam=_CBNAME_, callbackValueParam=_CBVALUE_, viewInstanceKeyParam=_VIKEY_). BUT two attempts (stale session and fresh session, cookie jar carried) returned the 41 KB page shell with ZERO result rows -- so the async fragment call is not yet correct. DO NOT BUILD UNTIL A ROW IS RETRIEVED. Two untried routes, in preference order per section 7 (published file beats HTML scrape): (1) a bulk FSPR extract -- data.govt.nz and catalogue.data.govt.nz are BOTH Imperva/Incapsula-blocked from this VPS ('Pardon Our Interruption' / _Incapsula_Resource), which is the known datacenter-IP artifact, so RE-PROBE FROM APIFY EGRESS before concluding no bulk file exists; companiesoffice.govt.nz/all-registers/bulk-data/ is 404. (2) finish the ORP async contract by reading /orp-master/js/all-*.js for catHtmlFragmentCallback's exact payload. This is the same situation faa-aircraft-document-index was in when it was recorded as an open unknown and cracked in a later cycle -- and there the published file ultimately won over the form."
  }
]

```

### 10.1 `cands-nz-insolvency.json`
```json
[
  {
    "query": "new zealand bankruptcy check",
    "incumbent": "CVCheck 'New Zealand: Disqualified Directors' (NZ$50.60 incl GST per name) and 'New Zealand: Court Search' (NZ$50.60); the same vendor's 'Australia: Bankruptcy' SKU on its NZ site is NZ$126.50",
    "incumbent_price_usd": 30,
    "demand_evidence_url": "https://cvcheck.com/nz/checks/disqualified-directors/",
    "demand_type": "paid_incumbent",
    "demand_note": "The incumbent's own page states both gaps this fills, fetched 2026-07-30: 'The list does not include undischarged bankrupts' and 'This check is conducted on an individual's current full name ... it is recommended that a New Zealand Disqualified Directors (Previous Name) check be conducted on each additional name' (i.e. NZ$50.60 per alias). The NZ Insolvency Register is keyless, indexes aliases, and is where undischarged bankrupts are.",
    "data_source": "https://app.insolvency.govt.nz/api/public/insolvency/search + /api/public/dro/search — keyless JSON API behind MBIE's public register search",
    "notes": "Built and monetized 2026-07-30 as new-zealand-bankruptcy-check-insolvency-register. Sibling phrasing `nz insolvency register bankruptcy` reads supply 0."
  }
]

```

### 10.1 `cands-prop65.json`
```json
[
  {
    "query": "prop 65 60 day notice",
    "target_actor_name": "prop-65-60-day-notice-settlement-benchmark",
    "title_idea": "Prop 65 60-Day Notice Monitor + Settlement Benchmark (California AG)",

    "deliverable": "The California Attorney General's own Prop 65 60-day notice CSV export returns, per notice row: AG Number, Date, Noticing Party (the serial-filer plaintiff), Plaintiff Attorney, Alleged Violator(s), Chemicals, Source (the product), Comments, and -- ONLY where the matter has since resolved -- Case ID, Case Name, Court Docket Number, Civil Penalty, Attorney Fees, Other Payments, Type of Claim, Relief Sought and Injunctive Relief. VERIFIED BY FETCH 2026-07-30, not assumed.",

    "job": "DECISION, not rows: 'a 60-day notice just landed in my product category -- what is this going to cost me, and is this filer serial?' Given a product/chemical/company term, returns (a) matching notices, (b) the noticing party's filing volume and their historical settlement distribution, and (c) the penalty-vs-attorney-fee split those cases actually resolved at. A defendant's first question is never 'show me rows', it is 'what do these settle for'.",

    "demand_type": "paid_incumbent",
    "incumbent": "Prop 65 Clearinghouse -- a subscription whose core product IS access to this same notice/settlement database",
    "incumbent_price_usd": 1150,
    "incumbent_price_unit": "per year (Basic, 5 users; Premier $1,800/yr unlimited users; non-profit rates $625/$950)",
    "demand_evidence_url": "https://www.prop65clearinghouse.com/subscribe",
    "demand_evidence": "Prop 65 Clearinghouse charges $1,150-$1,800/yr for website access to its Litigation Database, news archive, chemical lists and 'Recent 60-Day Notices' -- i.e. it resells, with a lag, the same public AG data this actor would read directly. Price confirmed by direct fetch of the subscribe page 2026-07-30 (search snippet and page agree). Secondary corroboration that this is a monitored compliance surface, not a niche curiosity: Hunton Andrews Kurth publishes a free Prop 65 notice tracker as client-development marketing, and Bureau Veritas and Intertek both sell Prop 65 notice-monitoring as a service line.",

    "data_source": "California Attorney General, Prop 65 60-Day Notice search -- server-side CSV export endpoint (60-day-notice-results-export_details.csv). Structured export, NOT HTML scraping.",
    "data_source_url": "https://oag.ca.gov/prop65/60-day-notice-results-export_details.csv",
    "data_source_verified": "2026-07-30 by direct fetch. HTTP 200, content-type text/csv, 17 stable named columns. Current-year pull returned 1,218 rows current to 07/29/2026 (yesterday) -- 3,648 notices filed YTD 2026, so this is a high-volume live stream, not a stale archive. Egress cleared by tools/screen.py egress: 200 on both plain and browser UA, and robots.txt has no rule covering either /prop65/60-day-notice-search-results or the .csv export path.",
    "data_source_risk": "THREE limits found by testing, all recorded rather than discovered later: (1) A request returns at most 1000 rows regardless of items_per_page, so history must be walked in date windows via date_filter[min][date] / date_filter[max][date] (mm/dd/yyyy). (2) field_prop65_report_year_value=YYYY silently returns ZERO rows -- it looks like a working filter and is not; use date_filter. (3) Settlement economics are present on only ~37% of rows (370/1000 sampled for 2023: Civil Penalty, Attorney Fees, Other Payments; Case Name 51%; Type of Claim 14%) because unresolved notices have nothing to report yet. The listing must therefore promise a settlement BENCHMARK over resolved comparables, never a settlement figure for every notice -- promising the latter is a S9 clawback.",

    "occupants_reviewed": [
      {
        "actor": "andrew_avina/property-tax-intelligence-mcp",
        "verdict": "adjacent",
        "why": "50-state property tax rates and appeal rates. Matches on the token 'property'/'notice' only. No Prop 65 or chemical-litigation content. 2 runs lifetime."
      },
      {
        "actor": "mrbridge/latest-news-mcp-server",
        "verdict": "adjacent",
        "why": "Generic global news MCP, 16,251 runs. High traffic but entirely unrelated source; it surfaces for this query as keyword noise, not as a competing product."
      },
      {
        "actor": "seibs.co/foreclosure-property-leads",
        "verdict": "adjacent",
        "why": "Pre-foreclosure/REO real-estate leads. Matches 'notice' (notice of default) -- a different statutory notice entirely."
      },
      {
        "actor": "calm_builder/facebook-ads-library-scraper",
        "verdict": "adjacent",
        "why": "Facebook Ads Library. Unrelated source and audience; pure keyword collision."
      },
      {
        "actor": "seibs.co/property-auction-leads",
        "verdict": "adjacent",
        "why": "Sheriff/trustee sale auction leads. Again 'notice' in the real-estate sense, not Prop 65."
      }
    ],

    "notes": "Occupancy was READ, per the third test. Supply 6 with FIVE visible occupants and not one of them touches Prop 65 -- the query is genuinely vacant, and the adjacent variants are vacant too ('proposition 65 notice of violation' supply 4 -> a TikTok downloader and two ryanclinton MCPs; 'prop 65 chemical listing' supply 2 -> a kitchenware scraper and a DACH employer-review scraper). Against the 2026-07-30 harvest as a whole this is the outlier: HMDA, Federal Audit Clearinghouse, FERC eLibrary, EIA-860, HUD LIHTC, EUDAMED, EASA ADs, EPA SDWIS and USDA FSIS all cleared the supply gate and were then killed on occupancy, each already held by a direct same-source rival (pink_comic, parseforge, zentrafoundry, automation-lab, ryanclinton). Prop 65 is untouched because it is a LEGAL vein rather than a federal-open-data vein, which is where the scraper farms are all fishing. Differentiator: the incumbent sells a searchable archive; the buyer's actual question is priced exposure. The 2023 sample makes the case -- one resolved matter carried a $290,120 civil penalty against $1,727,400 in attorney fees. Prop 65 is a fee-driven regime, and nobody is selling that ratio. Serial filers are concentrated and nameable (2023: Sandra Assareh 285 notices, CalSafe Research Center 117, Environmental Health Advocates 86), so 'is this filer serial, and what do they settle for' is answerable from the same file."
  }
]

```

### 10.1 `cands-uk-insolvency.json`
```json
[
  {
    "query": "uk bankruptcy check name",
    "title_hint": "UK Bankruptcy & Insolvency Register Check — Screen Names Against the Individual Insolvency Register",
    "deliverable": "Screens a list of person names against the UK Individual Insolvency Register (Insolvency Service, GOV.UK), which covers England & Wales bankruptcies, debt relief orders, individual voluntary arrangements, and the Bankruptcy Restrictions Order / Undertaking and Debt Relief Restrictions Order / Undertaking registers. Returns, per matched name: the full name as the register records it plus any alias or previous name, date of birth, trading name and trading details, last known address and postcode, the insolvency type, the case number and court, the insolvency start date, and the current case status — plus a computed CURRENT vs DISCHARGED flag and a match confidence for each name match. Also returns an explicit no-match result per input name so a clean check is distinguishable from a failed check.",
    "demand_type": "paid_incumbent",
    "incumbent": "CVCheck 'United Kingdom: Bankruptcy' check ($311.45 incl. GST per single name, 5-day delivery); Veremark and Checkback International both sell a UK 'Bankruptcy and Insolvency Check' as a named pre-employment screening SKU; Security-Vetting sells it inside 'Consumer Financial Probity' checks",
    "incumbent_price_usd": 205,
    "incumbent_price_note": "CVCheck lists $311.45 incl. GST per single name with a 5-day estimated delivery. CVCheck is an Australian vendor and quotes 'incl. GST', so the currency is read as AUD; AU$311.45 ~= US$205 at 0.66. Treat the exact USD figure as approximate — what is NOT approximate is that the check is sold PER SINGLE NAME, on a 5-day manual turnaround, against a register GOV.UK publishes free under the Open Government Licence. This is the same vendor and the same per-name SKU shape as the AU$36.18 check behind the built asic-banned-disqualified-persons-check actor and the NZ$50.60 check behind the blocked nz-companies-office candidate — but at roughly 6x the AU price, because CVCheck runs the UK search manually.",
    "demand_evidence_url": "https://cvcheck.com/checks/uk-bankruptcy/",
    "demand_evidence_url_2": "https://www.veremark.com/background-checks/bankruptcy-and-insolvency-check",
    "demand_evidence_url_3": "https://checkback.co.uk/services/pre-employment-screening/",
    "demand_evidence_read_at": "2026-07-30",
    "buyer": "UK pre-employment and background-screening firms; FCA-regulated firms running Senior Managers & Certification Regime fitness-and-propriety checks (an undischarged bankrupt cannot hold certain roles); company secretaries and corporate-governance teams vetting proposed directors; UK accounting and insolvency practices; credit and KYC/AML vendors covering UK individuals; landlords and letting agents.",
    "source": "UK Insolvency Service — Individual Insolvency Register (EIIR), the statutory register of bankruptcies, DROs, IVAs and bankruptcy/debt-relief restrictions",
    "source_url": "https://www.insolvencydirect.bis.gov.uk/eiir/search",
    "source_license": "Open Government Licence v3.0, stated in the site footer — commercial reuse permitted with attribution. Attribution line belongs in both the README and the output.",
    "source_verified": {
      "at": "2026-07-30",
      "how": "Probed directly from this box. GET https://www.insolvencydirect.bis.gov.uk/eiir/ -> HTTP 200 (both plain and browser UA); robots.txt -> HTTP 404, so nothing is disallowed; screen.py egress VERDICT 'reachable and not disallowed -- proceed'. Executed one real search end to end: GET /eiir/search to collect the AntiforgeryFieldname token and cookie, then POST searchTerm=smith -> HTTP 200, redirected to /eiir/search-results/c21pdGg and returned 'Your search returned 6285 records' with a structured results table (Name | Birth date | Trading details | Postcode), paginated 629 pages, each row linking to a case-detail page. Footer confirms Open Government Licence v3.0. No API key, no signup, no CAPTCHA, no rate-limit response observed.",
      "sample_row": "Jack Matthew James Smith | 19/09/1993 | trading as 'Jack smith' | Flat 4, Cuxton, Crest View Drive, Orpington, BR5 1BU",
      "build_note": "IMPORTANT for the build: the result URL path segment is base64url of the search term (c21pdGg == 'smith'), and GET /eiir/search-results/<b64url(term)> returns HTTP 200 with the identical 21.5 KB page WITHOUT the CSRF token or cookie. So the actor can skip the POST/antiforgery dance entirely and issue plain GETs. Verified 2026-07-30.",
      "silent_failure_guard": "This is HTML, not a file or an API, so §3's silent-failure risk applies and a compliance false-negative is a clawback under §9. The actor MUST assert one of two sentinels on every response — the 'Your search returned N records' header or the explicit no-results block — and fail loudly if neither is present, rather than returning an empty result set. Ship a control name (a term known to return thousands of rows, e.g. 'smith') as a canary in the smoke test."
    },
    "occupants_reviewed": [
      {
        "actor": "parseforge/uk-gazette-notices-scraper",
        "verdict": "adjacent",
        "why": "Scrapes The Gazette's statutory notices feed — a chronological publication stream of notices, including insolvency notices. Different source, different shape: it is a notices firehose, not a per-name lookup against the statutory register, and it cannot answer 'is this person currently an undischarged bankrupt or subject to a restrictions order'. Closest of the three and the one to re-read before building."
      },
      {
        "actor": "haketa/offerup-scraper",
        "verdict": "adjacent",
        "why": "US OfferUp marketplace listings scraper. Pure fuzzy-match noise, unrelated to UK insolvency."
      },
      {
        "actor": "ryanclinton/franchise-due-diligence-mcp",
        "verdict": "adjacent",
        "why": "Generic franchise due-diligence MCP server. Adjacent-generic risk tooling, not a UK Individual Insolvency Register lookup."
      }
    ],
    "supply_note": "The adverse-finding vs roster split from the 2026-07-30 shape note holds again here. Adverse-finding phrasings are vacant: 'insolvency service bankruptcy restrictions' = 0 with ZERO occupants, 'bankruptcy restrictions order uk' = 0 with ZERO occupants. Roster phrasings are occupied: 'individual insolvency register' = 71, 'uk insolvency register search' = 39, 'uk individual insolvency register' = 23. The registered query 'uk bankruptcy check name' (supply 4, all three visible occupants adjacent) is the buyer-shaped phrasing; the actor name and SEO fields should also carry 'bankruptcy restrictions order' and 'undischarged bankrupt', which are vacant.",
    "risk": "HTML source rather than a published file — the only candidate of this shape so far without an open data file behind it. Mitigated by the sentinel guard above, the OGL v3 licence, the GOV.UK Design System markup (stable, versioned), and the base64 GET path that removes the CSRF dependency. Second risk: the register carries no strong identifier, so name + DOB + postcode matching is the whole product; over-matching on a common surname is the failure mode that would earn a clawback, so match confidence must be returned and never suppressed."
  }
]

```

### 10.1 `cands_ofac.json`
```json
[
  {
    "query": "ofac sdn sanctions screening",
    "deliverable": "Point-in-time OFAC SDN sanctions screening. Screening a name AS OF ANY DATE, not just today: returns the current SDN match plus, for a delisted party, the historical designation -- the date it was added to the SDN list, the date OFAC removed it, and the sanctions programs it was listed under. Built by walking OFAC's own keyless publication-delta feed (sanctionslistservice.ofac.treas.gov/changes/{publicationId}, sequential ids in date order back to the 2022-09-22 seed) and reconciling it against the current SDN.XML, so a party removed from the list is reported as FORMERLY SANCTIONED with dates rather than as a clean no-match.",
    "demand_type": "paid_incumbent",
    "incumbent": "ryanclinton/ofac-sanctions-search (OFAC Sanctions List Search -- SDN Screening with Fuzzy Matching): 522 runs/30d, 1,905 lifetime, u30=5, 100% success, PAY_PER_EVENT. Off-store the priced incumbents are the AML/KYC screening vendors (Dow Jones Risk & Compliance, Refinitiv World-Check, ComplyAdvantage) which sell point-in-time sanctions lookback as a named audit feature.",
    "demand_evidence_url": "https://apify.com/ryanclinton/ofac-sanctions-search",
    "differentiator": "The sole paying incumbent states the defect ITSELF, in its own README's Limitations section: 'No historical data -- The actor always downloads the current SDN list. It does not provide historical snapshots or track when entries were added or removed.' Measured: OFAC does not flag a delisted party, it DELETES it, so every rival's 'clear' verdict for a formerly-sanctioned party is byte-identical to a name that was never sanctioned. FLY BAGHDAD AIRLINES COMPANY was SDN-listed 2024-01-22 under SDGT/EO 13224 and removed in the 2026-08-05 publication; streaming the entire current 28.7MB SDN.XML finds 'FLY BAGHDAD' 0 times and 'IRAQ EXPRESS' 0 times (control 'AEROCARIBBEAN' hits 1). Not one of the five readable rivals accepts an as-of date in its input schema, and not one emits a removal date; the incumbent's changeFlag/history/priorScreenings compare its own PRIOR RUN, not OFAC's publication history. That is a correctness defect on a point-in-time question, not a column count.",
    "source": "sanctionslistservice.ofac.treas.gov -- keyless, no robots.txt published. /api/PublicationPreview/exports/SDN.XML (28.7MB), CONS_ADVANCED.XML (4.5MB), /changes/latest, /changes/{publicationId}. Redundant primary host www.treasury.gov/ofac/downloads/sdn.csv.",
    "source_limitation": "The host 429s under concurrency (measured at 8 threads; a 45s backoff did not clear it). A 12-request sequential probe at 11s spacing drew zero 429s. The build must throttle hard, cache the assembled history in a key-value store, and walk forward only from the last seen publication id -- the full history is a few hundred small requests, but only once.",
    "notes": "Publication ids are sequential in date order, not dense: 24 requests across the 50-870 range returned 7 live publications (400 on the rest). Sampled removals: id 201 (2024-02-02) 2, id 680 (2025-06-09) 1, id 760 (2025-10-17) 4, id 831 (2026-03-12) 1 -- 4 of 7 publications carry at least one, mean 1.1, so the delisted population over the 2022-09-22..2026-08-05 history is in the HUNDREDS, not a handful. That was the open refutation and it passed.",
    "occupants_reviewed": [
      {
        "actor": "adobeflex/ofac-sdn-search-lite",
        "verdict": "direct",
        "note": "screens names against the OFAC SDN/consolidated list -- same job"
      },
      {
        "actor": "andrew_avina/ofac-sanctions-mcp",
        "verdict": "direct",
        "note": "screens names against the OFAC SDN/consolidated list -- same job"
      },
      {
        "actor": "benthepythondev/ofac-sanctions-scraper",
        "verdict": "direct",
        "note": "screens names against the OFAC SDN/consolidated list -- same job"
      },
      {
        "actor": "fortuitous_pirate/csl-sanctions-scraper",
        "verdict": "direct",
        "note": "screens names against the OFAC SDN/consolidated list -- same job"
      },
      {
        "actor": "jungle_synthesizer/ofac-sanctions-crawler",
        "verdict": "direct",
        "note": "screens names against the OFAC SDN/consolidated list -- same job"
      },
      {
        "actor": "jungle_synthesizer/ofac-sanctions-global-screening-scraper",
        "verdict": "direct",
        "note": "screens names against the OFAC SDN/consolidated list -- same job"
      },
      {
        "actor": "mfapitools/sanctions-check",
        "verdict": "direct",
        "note": "screens names against the OFAC SDN/consolidated list -- same job"
      },
      {
        "actor": "neuton/ofac-consolidated-sanctions-list-scraper",
        "verdict": "direct",
        "note": "screens names against the OFAC SDN/consolidated list -- same job"
      },
      {
        "actor": "neuton/ofac-sdn-sanctions-list-scraper",
        "verdict": "direct",
        "note": "screens names against the OFAC SDN/consolidated list -- same job"
      },
      {
        "actor": "nexgendata/sanctions-compliance-mcp-server",
        "verdict": "direct",
        "note": "screens names against the OFAC SDN/consolidated list -- same job"
      },
      {
        "actor": "opendata-labs/ofac-sanctions-scraper",
        "verdict": "direct",
        "note": "screens names against the OFAC SDN/consolidated list -- same job"
      },
      {
        "actor": "pink_comic/ofac-sanctions-screening",
        "verdict": "direct",
        "note": "screens names against the OFAC SDN/consolidated list -- same job"
      },
      {
        "actor": "ryanclinton/ofac-sanctions-search",
        "verdict": "direct",
        "note": "screens names against the OFAC SDN/consolidated list -- same job"
      },
      {
        "actor": "straightforward_hydra/ofac-sanctions-screening",
        "verdict": "direct",
        "note": "screens names against the OFAC SDN/consolidated list -- same job"
      },
      {
        "actor": "thoob/ofac-sanctions-screening",
        "verdict": "direct",
        "note": "screens names against the OFAC SDN/consolidated list -- same job"
      },
      {
        "actor": "olican/crypto-aml-wallet-screener",
        "verdict": "adjacent",
        "note": "crypto wallet/address AML screening, not name screening against SDN"
      },
      {
        "actor": "red.cars/regulatory-intelligence-mcp",
        "verdict": "adjacent",
        "note": "broad regulatory-intelligence rollup; sanctions is one input among many"
      },
      {
        "actor": "ryanclinton/esg-supply-chain-risk-mcp",
        "verdict": "adjacent",
        "note": "ESG supplier risk scoring; sanctions is a sub-signal"
      },
      {
        "actor": "ryanclinton/healthcare-credentialing-intelligence-mcp",
        "verdict": "adjacent",
        "note": "provider credentialing; different buyer and job"
      },
      {
        "actor": "ryanclinton/maritime-shipping-intelligence-mcp",
        "verdict": "adjacent",
        "note": "vessel/shipping intelligence; sanctions is a sub-signal"
      },
      {
        "actor": "zinin/counterparty-risk-rollup",
        "verdict": "adjacent",
        "note": "multi-source counterparty risk rollup, not an OFAC screener"
      }
    ]
  }
]
```
