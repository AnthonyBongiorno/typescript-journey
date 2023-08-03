# typescript-journey

This repository is dedicated to my learning journey with TypeScript. 

It includes basic exercises, examples and personal notes that I've developed while familiarizing myself with TypeScript's syntax, features and learning best practice.

## Installation

You can easily set up this project on your local environment. Firstly, you'll need to clone this repository to your machine. Once that's done, you can install the necessary dependencies.

Here's a `package.json` for this project:

```json
{
  "devDependencies": {
    "@types/jest": "^29.5.3",
    "jest": "^29.6.2",
    "ts-jest": "^29.1.1",
    "typescript": "^5.1.6"
  },
  "scripts": {
    "test": "jest"
  }
}
```
You can install these dependencies via either yarn or npm.

### Using npm

If you prefer npm, navigate to the project's root directory in your terminal and run:
```bash
npm install
```
### Using yarn

If you prefer yarn, navigate to the project's root directory in your terminal and run:
```bash
yarn install
```
Once the installation process is complete, you can now run your tests using Jest. Just execute the test command in the terminal:

```bash
npm test
```
Or, if you're using yarn:

```bash
yarn test
```
If you want to run tests for a specific file, you have to navigate to the `tests` folder. 

For example, if you want to test `calculateDistance.test.ts`, run one of the following commands in your terminal:

### Using npm

```bash
npm run jest calculateDistance.test.ts
```

### Using yarn

```bash
yarn jest calculateDistance.test.ts
```

Enjoy exploring the repository, and happy learning!