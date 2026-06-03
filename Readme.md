# YoNews — Modern Tech News, Beautifully Delivered

> An editorial-style mobile news app built with React Native + Expo. Curated tech stories, real-time updates, and a reading experience designed for people who care about both *what* they read and *how* it looks.

<p align="center">
  <strong>Built for: Mentorship Program · 2026</strong>
</p>

---

## ✨ Overview

**YoNews** is a mobile-first tech news application that delivers a premium, distraction-free reading experience. Inspired by the editorial design language of publications like The Verge and Wired, paired with the snappiness of modern apps like Linear and Arc, YoNews focuses on:

- 🎯 **Curated content** — quality over quantity
- 📱 **Native feel** — built with Expo for true iOS + Android parity
- 🌗 **Light & dark themes** — pixel-perfect in both modes
- ⚡ **Real-time sync** — articles, saves, and reads sync instantly across devices
- 🎨 **Editorial typography** — Syne for headlines, DM Sans for body

---

## 📸 Screens

The app ships with six core screens, each delivered in both light and dark variants:

| Screen | Purpose |
|---|---|
| **Onboarding** | 3-slide intro highlighting curation, saved articles, and breaking-news alerts |
| **Home** | Hero card, category chips, and the latest stories feed |
| **Category** | Grid of all topics (AI, Gadgets, Startups, Crypto, Gaming, Science, Security, Apps) |
| **Favorites** | Saved articles with filtering and quick-remove |
| **Profile** | User stats (read count, saved, streak), settings, theme toggle |
| **Article Detail** | Full-bleed hero image, author card, tags, like/share |

---

## 🛠️ Tech Stack

| Layer | Technology | Why |
|---|---|---|
| **Framework** | Expo SDK 54 + Expo Router | File-based routing, fast iteration, OTA updates |
| **Language** | Pure JavaScript (JSX) | Lower barrier for students learning React Native |
| **Styling** | React Native `StyleSheet` | Native performance, no extra dependencies |
| **State Management** | [Zustand](https://github.com/pmndrs/zustand) | Minimal boilerplate, simple mental model |
| **Backend** | [Convex](https://convex.dev) | Real-time database + serverless functions in one |
| **Navigation** | Expo Router (tabs + stack) | URL-based routing for React Native |
| **Icons** | `@expo/vector-icons` (Feather) | Clean outlined icons, no external dependencies |
| **Fonts** | `@expo-google-fonts/syne` + `dm-sans` | Editorial typography pairing |
| **Images** | `expo-image` | Fast loading, blurhash placeholders |
| **Animations** | `react-native-reanimated` + Lottie | Smooth transitions, expressive empty states |
| **Storage** | `@react-native-async-storage/async-storage` | Persists theme + saved articles offline |

---

## 🎨 Design System

### Color Palette

**Light mode**
- Background: `#F5F6FA` · Surface: `#FFFFFF`
- Primary accent: `#0057FF` · Secondary: `#00B8D9`
- Text: `#0A1628` / `#4A5578` / `#8B94B2`

**Dark mode**
- Background: `#0B0F1A` · Surface: `#111827`
- Primary accent: `#4D8AFF` · Secondary: `#00D9FF`
- Text: `#E8EDFB` / `#8B97C0` / `#4E5A7A`

### Typography
- **Headings**: Syne (600 / 700 / 800)
- **Body**: DM Sans (300 / 400 / 500)

### Corner Radii
- Chips & tags: `12px` · Thumbnails: `14px` · Cards: `18–20px`

### Icons
Clean outlined vector icons only (Feather set). **No emoji icons anywhere.**

---

## 📁 Project Structure

```
yonews/
├── app.json
├── package.json
├── README.md
│
├── convex/                       # Convex backend
│   ├── schema.js                 # Database tables
│   ├── articles.js               # Article queries & mutations
│   ├── categories.js             # Category queries
│   ├── users.js                  # User profile + stats
│   └── savedArticles.js          # Bookmark logic
│
├── assets/
│   ├── animations/               # Lottie files
│   └── images/                   # App icons, splash, onboarding art
│
└── src/
    ├── app/                      # Expo Router routes
    │   ├── _layout.js            # Providers, fonts, theme
    │   ├── index.js              # Entry / redirect
    │   ├── onBoarding.js         # 3-slide onboarding
    │   ├── (tabs)/
    │   │   ├── _layout.js        # Custom bottom tab bar
    │   │   ├── index.js          # Home
    │   │   ├── category.js
    │   │   ├── favorite.js
    │   │   └── profile.js
    │   └── article/
    │       └── [id].js           # Article detail
    │
    ├── components/               # Reusable UI
    │   ├── ui/                   # Chip, Tag, Button, Avatar, Card
    │   ├── article/              # HeroCard, ArticleListItem
    │   ├── nav/                  # BottomTabBar, headers
    │   ├── category/             # CategoryTile
    │   └── profile/              # ProfileCard, StatTile, SettingsRow
    │
    ├── contexts/                 # React Context providers
    │   ├── ConvexProvider.js
    │   ├── ThemeProvider.js
    │   └── useTheme.js
    │
    ├── store/                    # Zustand stores
    │   ├── useThemeStore.js
    │   ├── useSavedStore.js
    │   ├── useAuthStore.js
    │   └── useOnboardingStore.js
    │
    ├── hooks/                    # Custom hooks
    │   ├── useAppFonts.js
    │   ├── useColors.js
    │   └── useArticles.js        # Convex query wrappers
    │
    ├── utils/                    # Pure helpers
    │   ├── colors.js             # Theme palettes
    │   ├── spacing.js
    │   ├── radii.js
    │   ├── typography.js
    │   ├── storage.js
    │   ├── icons.js
    │   ├── haptics.js
    │   └── formatters.js
    │
    └── data/
        └── mockData.js           # Seed data
```

---

## 🏗️ Architecture (For Students)

YoNews follows a **clean four-layer architecture**. Each layer has one job and only talks to its neighbors.

```
┌─────────────┐    ┌──────────┐    ┌─────────┐    ┌────────┐
│   SCREENS   │ ─► │  STORE   │ ─► │ CONVEX  │ ─► │   DB   │
│ (React UI)  │    │(Zustand) │    │(backend)│    │(tables)│
└─────────────┘    └──────────┘    └─────────┘    └────────┘
```

**The three rules**:

1. **Screens never call the backend directly** — they go through Zustand or `useQuery`
2. **Shared state lives in Zustand, never in `useState`** — `useState` is for local UI only
3. **If two screens need the same data, it goes in the store**

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm
- Expo Go app on your phone (or a simulator)
- A free [Convex](https://convex.dev) account

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/yonews.git
cd yonews

# Install dependencies
pnpm install

# Set up Convex (creates a dev deployment)
npx convex dev
```

The Convex CLI will prompt you to log in and create a new project. It'll write the deployment URL into a `.env.local` file automatically.

### Run the app

```bash
# Start the Expo dev server
pnpm start

# Or target a specific platform
pnpm android
pnpm ios
pnpm web
```

Scan the QR code with the Expo Go app to open YoNews on your phone.

---

## 🔧 Environment Variables

Create a `.env.local` file at the project root:

```
EXPO_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
```

The Convex CLI populates this automatically when you run `npx convex dev`.

---

## 📜 Scripts

| Command | What it does |
|---|---|
| `pnpm start` | Start Expo dev server |
| `pnpm android` | Build and run on Android |
| `pnpm ios` | Build and run on iOS |
| `pnpm web` | Run in the browser |
| `npx convex dev` | Start Convex dev backend + sync functions |
| `npx convex deploy` | Deploy backend to production |

---

## 🗺️ Roadmap

- [x] Onboarding flow (3 slides)
- [x] Home, Category, Favorites, Profile, Article Detail screens
- [x] Light + dark themes
- [x] Bookmark / unbookmark articles
- [ ] Convex authentication (sign in with email)
- [ ] Push notifications for breaking news
- [ ] In-app comments and reactions
- [ ] Personalized "For You" feed based on reading history
- [ ] Audio version of articles (read-aloud mode)
- [ ] Offline reading queue

---

## 🎓 For the Mentorship Program

This project is structured as a **progressive build**. Students can stop after any phase and still have a working app:

1. **Phase 1**: Static UI with mock data — focus on JSX, StyleSheet, layout
2. **Phase 2**: Add Zustand — manage theme + saved articles in memory
3. **Phase 3**: Add Convex schema + queries — replace mock data with real backend
4. **Phase 4**: Add mutations — wire up bookmarks and profile updates
5. **Phase 5**: Add authentication — Convex Auth with email magic links

Each phase teaches one new concept clearly. No phase requires throwing away earlier work.

---

## 🤝 Contributing

This is a mentorship-program project, but pull requests and suggestions from students are very welcome. Please:

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes with clear messages
4. Push and open a PR

---

## 📄 License

MIT — free to use, modify, and learn from.

---

## 🙏 Acknowledgments

- **Typography**: [Syne](https://fonts.google.com/specimen/Syne) by Bonjour Monde, [DM Sans](https://fonts.google.com/specimen/DM+Sans) by Colophon Foundry
- **Icons**: [Feather Icons](https://feathericons.com)
- **Photography**: [Unsplash](https://unsplash.com)
- **Inspiration**: The Verge, Wired, Linear, Arc Browser

---

<p align="center">
  Built with care for the YoNews mentorship cohort · 2026
</p>
