# spsietest

Intended as a proof of concept design for EFL students at the University of Reading to practise rhetorical organsiation patterns.
Students physically move different sections of the text around until they are in the correct places. They are also able to
input their own text for specific sections and test themselves.

## The Rewrite

I came back to this after about 8 years away and realized that I don't remember how to actually build/deploy a ruby-based website, so I rewrote it in React, since it's just a demo and we don't need a backend for it anyway.

Live at: https://spsie.netlify.app

- Local dev

```
npm i && npm start
```

## The Old Code

The original code is preserved for posterity on the `legacy` branch, though it definitely does not work out of the box, since it has a dependency on a Postgres database, and honestly I don't even remember how I had it working in Heroku.
