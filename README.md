# PureGlow Naturals demo storefront

The linked GitHub repository (`jashmon/pureglow`) was empty when checked, so it had no source commits to fork. This project initializes its `main` branch from the previously prepared PureGlow website copy in this workspace and keeps the linked repository as `origin`. This is a seed of the empty repository, not a GitHub fork from a populated upstream.

## Audit changes

- Replaced unsupported reach, review, efficacy, and sustainability claims with clear product information and demo disclosures.
- Removed unverified customer testimonials and product ratings, and removed rating-based sorting and review/product structured data.
- Replaced placeholder social and footer links with working site destinations or explicit demo notices.
- Disclosed that contact, newsletter, checkout, order, shipping, and returns are not connected or active.
- Corrected the homepage product image description and call to action.
- Converted product imagery to resized WebP assets, reducing the five image files from about 10.5 MB total to about 0.7 MB.
- Kept Google Ads tracking disabled until a real `AW-` ID is supplied.
- Fixed a stray comma in the product catalog JavaScript that prevented the module from parsing.

## Run locally

Serve this folder with any static HTTP server and open `index.html`. Product data, prices, inventory, policies, and product claims are demo content and must be verified by the brand owner before launch. No real order, message, subscription, or payment is processed.

## Source

The content was copied from the prior workspace artifact `PureGlow_Website_Copy`, whose README identifies `https://github.com/mark018233/pureglownaturals` as its upstream. It was not fetched from `jashmon/pureglow`, which was empty at clone time.
