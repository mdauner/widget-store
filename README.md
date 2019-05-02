# Widget Store

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Demo

https://emocha-widget-store.herokuapp.com/

### Installing

Clone repository

```
git clone https://github.com/mdauner/widget-store.git
cd widget-store
```

Install dependencies

```
yarn install
cd client && yarn install && cd ..
```

Set database url

```
export DATABASE_URL=...
```

Start server and client concurrently

```
yarn run start:dev
```

## Running the tests

```
yarn test
```
