![CI](https://github.com/eddeee888/topic-prisma-testing/workflows/CI/badge.svg)

# topic-prisma-testing

This repo has examples of how to do Prisma unit and functional testing with NodeJS and Typescript.

## Requirements

- Docker
- Docker compose
- Node 12.x
- yarn or npm

## How it works

We run the dev app and test in 2 different containers, managed by `docker-compose.yml` and `docker-compose.test.yml` respectively.

To run tests, we build the test container and database. Run this in your terminal:

```bash
$ yarn docker:test:build
# Alternatively, you can run the following command directly on your host terminal:
# docker-compose -f docker-compose.test.yml build --no-cache
```

Then, run the following command to drop the database ( if exists ) and run migrations on the test database:

```bash
$ yarn docker:test:prepare
# Alternatively, you can run the following commands directly on your host terminal:
# docker-compose -f docker-compose.test.yml run --rm server ./scripts/wait-for-it.sh database:3306 -- yarn ts-node src/prisma/reset.ts
# docker-compose -f docker-compose.test.yml run --rm server yarn prisma:up
```

Now, run the following to run unit tests and functional tests:

```bash
$ yarn docker:test:run
# Alternatively, you can run the following commands directly on your host terminal:
# docker-compose -f docker-compose.test.yml run --rm server ./scripts/wait-for-it.sh database:3306 -- yarn test
# yarn docker:test:prepare
```

Made with ❤️ by Eddy Nguyen
https://eddy.works

Need coding mentorship? Request a session here: https://jooclass.com/classes/2
