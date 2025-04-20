# AI Logo Generator – Setup & Development Guide

This project is a full-stack Expo (React Native) app with Firebase backend and local Cloud Functions for generating AI-powered logos.

## Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Firebase project](https://console.firebase.google.com/) with:
  - Firestore Database enabled
  - Authentication enabled (Anonymous sign-in must be allowed)

## 1. Clone the Repository

```sh
git clone https://github.com/berkekincioglu/frst-case.git
cd case-study
```

## 2. Set Up Environment Variables

1. Copy the example env file:
   ```sh
   cp .env.example .env
   ```
2. Fill in your Firebase credentials in `.env`:
   - `EXPO_PUBLIC_FIREBASE_API_KEY`
   - `EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `EXPO_PUBLIC_FIREBASE_PROJECT_ID`
   - `EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `EXPO_PUBLIC_FIREBASE_APP_ID`

> **Note:** These values can be found in your Firebase project settings (Project Overview > Project settings > General > Your apps).

## 3. Firebase Project Configuration

- **Authentication:**
  - Go to Firebase Console > Authentication > Sign-in method
  - Enable **Anonymous** sign-in
- **Firestore:**
  - Go to Firebase Console > Firestore Database
  - Create a database (in test mode is fine for development)

## 4. Install Dependencies

### For the Expo App

```sh
npm install
```

### For Cloud Functions

```sh
cd functions
npm install
```

## 5. Run Cloud Functions Locally

From the `functions` directory:

```sh
npm run dev
```

- This will build and start the Firebase Functions emulator locally.
- No need to deploy to Firebase for local development.

## 6. Start the Expo App

From the project root:

```sh
npm start
```

- This will launch the Expo development server.
- You can run the app on an emulator, simulator, or a real device using the Expo Go app.

## 7. Usage

- Enter a prompt and select a logo style.
- Click **Create** to generate a logo.
- The app will communicate with your local Cloud Functions and Firestore.

## Troubleshooting

- **Unauthenticated Error:**
  - Make sure Anonymous Auth is enabled in Firebase.
  - Ensure your `.env` file has the correct Firebase credentials.
- **Firestore Errors:**
  - Make sure Firestore is enabled and in test mode for development.

## Project Structure

- `app/` – Expo app source code
- `components/` – Reusable UI components
- `functions/` – Firebase Cloud Functions (TypeScript)
- `constants/` – Theme and config
- `assets/` – Images and fonts

---

For any issues, please check the code comments or open an issue in the repository.


# Recording
<img width="397" alt="Screenshot 2025-04-20 at 17 06 15" src="https://github.com/user-attachments/assets/c5391580-5f73-43ee-ba6d-94c28b8d868d" />


https://github.com/user-attachments/assets/a2fcad27-7f98-4353-b075-cdf011c5907d


