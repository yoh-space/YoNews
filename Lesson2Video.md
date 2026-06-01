# Lesson 2 Video Walkthrough

## Topic
Building the first coded version of the YoNews app after the UI/UX design stage.

## Lesson Goal
By the end of this lesson, students will understand how to turn a finished design into a working React Native app screen structure using pure JavaScript, Expo Router, and Zustand.

This lesson focuses on the first real coding step after the design video. Students will learn how to:

- organize the project structure
- use Zustand for global theme state
- build a reusable theme system
- create the first app screens with Expo Router
- use mock UI data and reusable components
- prepare the app for future backend integration

## What Was Covered in This Video

### 1. Project structure
We introduced the folders used in the app and explained why clean structure matters:

- `src/app` for screens and routes
- `src/components` for reusable UI pieces
- `src/store` for Zustand state
- `src/utils` for shared values like spacing
- `src/data` for mock data
- `src/hooks` and `src/contexts` for future expansion

### 2. Zustand setup
We installed and used Zustand to manage global app state.

Students learned that the theme state lives in one store so every screen can access:

- `themeMode`
- `colors`
- `fSize`
- `spacing`
- `toggleTheme`

This makes the app easier to maintain because screens do not need separate theme logic.

### 3. Theme system
We used the theme store to switch between light and dark mode.

The lesson explains how the app can read colors from the store instead of hardcoding them in every file.

### 4. Tabs layout
We updated the tab navigator so the app can show the main sections:

- Home
- Category
- Favorites
- Profile

This helps students understand how Expo Router works in a real mobile app.

### 5. Profile screen
We started using the theme store inside the profile screen so students can see how global state works in practice.

The screen also uses shared typography and spacing values from the store.

### 6. Home screen and UI components
We prepared reusable UI pieces for the app, including:

- chip
- card
- tag
- icon button
- search input
- article detail structure

These components are the foundation for building the rest of the app.

## Teaching Focus

This lesson is meant to show students that real app development starts with structure, state management, and reusable components before backend work begins.

The main idea is:

**design first, mock data second, state management third, backend later**

