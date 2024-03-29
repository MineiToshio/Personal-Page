<p align="center">
  <img alt="Logo" src="public/img/favicon/favicon512.png" width="100" />
  <a href="https://toshiominei.com">
	<h1 align="center">Sergio Toshio Minei</h1>
  </a>
<p>

<p align="center">
  Personal website and blog 
  built with <a href="https://nextjs.org" target="_blank">Next.js</a> and <a href="https://firebase.google.com" target="_blank">Firebase</a>
</p>

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-2.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://toshiominei.com" target="_blank">
    <img alt="Website" src="https://img.shields.io/website?down_message=offline&label=site&up_message=online&url=http%3A%2F%2Fadarshaacharya.com.np" />
  </a>
  <a href="https://github.com/MineiToshio/Personal-Page/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/MineiToshio/Personal-Page" />
  </a>
</p>

## 🔥 Features

- Landing page to show your main info, portfolio and contact details.
- Blog section with admin to maintain posts.
- Social media friendly.
- I18n.
- Offline access with PWA.
- Integration with Disqus to comment blog posts.
- Integration with Google Analytics & Fullstory.

Dev features:

- `Typescript` enabled.
- Maintained code format with `Prettier` & `Eslint`.
- Precommit hooks with `Lint Staged` and `Husky`.
- `Commitlint` enabled to standardize commit comments.
- CI with `Github actions`.
- Ready to deploy in `Vercel`.

## 🛠 Installation & Set Up

1. Install dependencies:

```sh
npm install
```

2. Set up env variables.

```
# .env
FIREBASE_PUBLIC_API_KEY=**********************
FIREBASE_AUTH_DOMAIN=**********************
FIREBASE_DATABASE_URL=**********************
FIREBASE_PROJECT_ID=**********************
FIREBASE_STORAGE_BUCKET=**********************
FIREBASE_MESSAGEING_SENDER_ID=**********************
FIREBASE_APP_ID=**********************
MEASUREMENT_ID=**********************
FIREBASE_CLIENT_EMAIL=**********************
FIREBASE_PRIVATE_KEY=**********************
GOOGLE_ANALYTICS_TRAKING_ID=**********************
FULLSTORY_ORG=**********************
FACEBOOK_APP_ID=**********************
DISQUS_SHORTNAME=**********************
```

3. Start dev server:

```sh
npm run dev
```

4. Customization

You can modify the following files to customize the website info:

- Texts: `i18n/strings`
- Favicon: `public/img/favicon`
- Projects: `public/projects.json`
- Social Profiles: `public/social.json`
- Technologies you know: `public/technologies.json`

5. Admin

To use the admin just go to `/admin`. You'll need to enable `Firebase` authentication and give your user admin claims for the login to work.

## 🖨️ Using This Project

If you want to use this project as your own portfolio, you can go ahead. Please give me credit by adding me in your footer or referencing this repo in your README.

## 👤 Author

This project was developed by Sergio Toshio Minei. You can find me here:

- Website: https://toshiominei.com
- Facebook: [@MineiToshio](https://facebook.com/MineiToshio)
- Instagram: [@MineiToshio](https://instagram.com/MineiToshio)
- Twitter: [@MineiToshio](https://twitter.com/MineiToshio)
- Github: [@MineiToshio](https://github.com/MineiToshio)
- LinkedIn: [@MineiToshio](https://linkedin.com/in/MineiToshio)

## 🤝 Contributing

All contributions are welcome. If you see a bug or want to implement a new feature, feel free to make a PR.

## 👏🏻 Show your support

Give a ⭐️ if you like the project!

## 📝 License

Copyright © 2021 [Sergio Toshio Minei](https://toshiominei.com).<br />
This project is [MIT](https://github.com/MineiToshio/Personal-Page/blob/master/LICENSE) licensed.
