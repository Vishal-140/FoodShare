# FoodShare
[https://foodshares.vercel.app](https://foodshares.vercel.app)

## Project Summary: FoodShare - Tackling Food Waste and Hunger

### Problem Statement:
Every day, a massive amount of food is wasted, especially by restaurants, while many individuals and communities face hunger. This growing issue requires an effective solution to bridge the gap between surplus food and those who need it the most.

### Approach:
To address this problem, we developed **FoodShare**, a web application that connects restaurants with local NGOs and individuals who need food. The platform facilitates seamless food donations and also offers features like tracking of donation points and inspiring community stories to encourage more participation.

### Technology Used:
- **React:** Used for building the frontend of the web application, ensuring a dynamic and responsive user experience.
- **Firebase:**
  - **Firebase Firestore:** Used for storing and managing data, including food donation details and tracking claimed donations in real-time.
- **Email.js:** Used to automatically send an email notification to the donor with the recipient’s details whenever a food donation is claimed.

### Solution:
FoodShare allows restaurant partners to easily donate surplus food. Recipients can find nearby donation points based on their convenience and claim the food. When a recipient claims a food donation, an email is automatically sent to the donor with the recipient’s details. This helps to reduce food waste by enabling restaurants to donate instead of throwing away excess food, while also connecting with those in need. The community stories feature and a leaderboard showcasing top donors further encourage participation and foster a supportive network.


## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd foodwastage
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

## Scripts

- `npm start`: Runs the app in development mode.
- `npm build`: Builds the app for production.
- `npm test`: Launches the test runner.
- `npm eject`: Ejects the app configuration.

## Dependencies

- React: ^19.0.0
- React DOM: ^19.0.0
- React Router DOM: ^7.1.3
- Firebase: ^11.2.0
- Lucide React: ^0.474.0