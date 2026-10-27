# Swyft Competitive Pricing Intelligence Dashboard

A static, responsive pricing intelligence dashboard built from the Mission 1 competitive research snapshot dated October 27, 2026. It supports competitor exploration, offer-level review, pricing visualizations, and a tentative monthly price position explorer.

## Run locally

Run `npm run build`, then serve the resulting `dist/` folder with a local static server (for example, `python -m http.server --directory dist 4173`). The app loads `data/research.json` with `fetch`, so opening the file directly with `file://` is not supported. No dependency install is required.

## Deploy

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the static project and publishes `dist/` to GitHub Pages. Relative assets and data paths work under the repository subpath; no runtime server is needed after deployment.

## Data and calculation notes

- `data/research.json` is the application’s research source. Mission 1’s workbook and report were cross-checked during implementation.
- The data contains 4 competitors and 28 offer observations, including two unavailable FitRoom web prices.
- The paid annual-entry cohort contains three offers: FitRoom $29.99, Style DNA $29.99, and Acloset $27.99. The median is $29.99; the arithmetic average is $29.32.
- The representative chart uses the selected annual offers converted to monthly equivalents, plus Whering’s free core. Annual monthly equivalents are arithmetic comparisons, not monthly billing offers.
- The all-recurring-offer distribution excludes one-time guides, credit bundles, and unavailable prices. It uses the source’s monthly normalization for weekly, quarterly, and annual offers.
- Listed prices are snapshots from October 27, 2026. Regular prices and promotions are not established unless the source explicitly supports them.
- The price explorer compares observed prices only. It does not forecast demand, conversion, revenue, costs, or profitability.

## Repository

https://github.com/Masonchow4/Pricing_Dashboard
