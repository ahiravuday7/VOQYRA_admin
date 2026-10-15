function App() {
  return (
    <main className="min-h-screen bg-admin-bg text-ink">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <header className="mb-10 flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
              VOQYRA Admin
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Commerce operations
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate">
              Manage catalog, inventory, orders, returns, replacements, and payment operations from
              one workspace.
            </p>
          </div>

          <button
            type="button"
            className="self-start rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 ease-brand hover:-translate-y-0.5"
          >
            View storefront
          </button>
        </header>

        <section aria-labelledby="overview-heading">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Overview
              </p>

              <h2 id="overview-heading" className="mt-1 text-xl font-semibold">
                Today&apos;s operations
              </h2>
            </div>

            <span className="text-sm text-slate">Design system preview</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-lg border border-border bg-admin-surface p-5 shadow-soft">
              <p className="text-sm text-slate">Orders</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight">128</p>
              <p className="mt-2 text-sm text-success">+12 today</p>
            </article>

            <article className="rounded-lg border border-border bg-admin-surface p-5 shadow-soft">
              <p className="text-sm text-slate">Products</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight">342</p>
              <p className="mt-2 text-sm text-slate">18 low stock</p>
            </article>

            <article className="rounded-lg border border-border bg-admin-surface p-5 shadow-soft">
              <p className="text-sm text-slate">Returns</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight">14</p>
              <p className="mt-2 text-sm text-warning">6 awaiting review</p>
            </article>

            <article className="rounded-lg bg-ink p-5 text-white shadow-card">
              <p className="text-sm text-white/60">Payment health</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight">99.8%</p>
              <p className="mt-2 text-sm text-mint">Operational</p>
            </article>
          </div>
        </section>

        <section
          aria-labelledby="workspace-heading"
          className="mt-10 grid gap-5 lg:grid-cols-[1.4fr_1fr]"
        >
          <article className="rounded-lg border border-border bg-admin-surface shadow-soft">
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Workspace
                </p>

                <h2 id="workspace-heading" className="mt-1 text-lg font-semibold">
                  Operational queues
                </h2>
              </div>

              <button
                type="button"
                className="rounded-md border border-border-strong px-4 py-2 text-sm font-semibold transition-colors duration-300 ease-brand hover:bg-admin-soft"
              >
                View all
              </button>
            </div>

            <div className="divide-y divide-border">
              <div className="flex items-center justify-between gap-4 px-6 py-5">
                <div>
                  <p className="font-medium">Low inventory</p>
                  <p className="mt-1 text-sm text-slate">Products requiring stock review</p>
                </div>

                <span className="rounded-full bg-warning/10 px-3 py-1 text-sm font-semibold text-warning">
                  18
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 px-6 py-5">
                <div>
                  <p className="font-medium">Return requests</p>
                  <p className="mt-1 text-sm text-slate">Customer requests awaiting action</p>
                </div>

                <span className="rounded-full bg-coral/10 px-3 py-1 text-sm font-semibold text-danger">
                  6
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 px-6 py-5">
                <div>
                  <p className="font-medium">Payment reconciliation</p>
                  <p className="mt-1 text-sm text-slate">Transactions requiring verification</p>
                </div>

                <span className="rounded-full bg-info/10 px-3 py-1 text-sm font-semibold text-info">
                  3
                </span>
              </div>
            </div>
          </article>

          <article className="rounded-lg bg-mint p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
              Design direction
            </p>

            <h2 className="mt-8 text-2xl font-semibold tracking-tight">
              Clear data.
              <br />
              Fast decisions.
            </h2>

            <p className="mt-4 leading-7 text-ink/70">
              The admin experience stays compact, neutral, and operational while preserving
              VOQYRA&apos;s brand identity.
            </p>

            <div className="mt-10 flex gap-2">
              <span className="h-4 w-4 rounded-full bg-ink" aria-label="Deep Ink"></span>
              <span className="h-4 w-4 rounded-full bg-coral" aria-label="Electric Coral"></span>
              <span
                className="h-4 w-4 rounded-full bg-mint ring-1 ring-ink/15"
                aria-label="Ice Mint"
              ></span>
            </div>
          </article>
        </section>

        <footer className="mt-12 border-t border-border pt-6 text-sm text-slate">
          VOQYRA — Admin design foundation
        </footer>
      </div>
    </main>
  );
}

export default App;
