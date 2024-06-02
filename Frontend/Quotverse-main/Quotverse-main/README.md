# Quotverse

Quotverse is a web application designed to provide users with a visually appealing platform to discover and engage with famous quotes fetched from the quotable.io API. Inspired by the user experience of popular social media platforms, Quotverse presents quotes in a format resembling tweets or threads.

## Features

### 1. Quote Feed

- Display a feed of quotes fetched from the quotable.io API.
- Quotes are presented in a visually appealing format resembling tweets or threads.

### 2. Dynamic Page Change

- Implement dynamic page change as users navigate through the quote feed.
- Resolve duplicate values issue encountered with the quotable.io API by implementing a set to filter out duplicates when changing pages.

### Live Deployment

- The live deployment of Quotverse can be accessed https://quotversebyarijit.netlify.app/ 

## Problems with the API

- The quotable.io API sometimes returns duplicate values when changing pages.
- This issue has been addressed within the application by implementing a set to filter out duplicate quotes when changing pages.

## Technologies Used

- React.js
- SCSS (Sass)
- Redux
- quotable.io API

## Setup Instructions

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.

## Credits

- This project utilizes the quotable.io API for fetching quotes. ([quotable.io GitHub](https://github.com/lukePeavey/quotable))


