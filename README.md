# ClinicPesa Dashboard

A modern healthcare savings and loan management dashboard built with React, TypeScript, and Tailwind CSS. ClinicPesa empowers users to manage medical expenses, access loans, join community savings groups (MaMas), and track their financial health.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Components](#components)
- [Styling](#styling)
- [Scripts](#scripts)
- [Contributing](#contributing)

## ✨ Features

- **Balance Management**: View and toggle balance visibility with secure masking
- **AutoSave Tracking**: Monitor automatic savings frequency and amounts
- **Quick Actions**: One-tap access to:
  - Pay Medical Bills
  - Get Loans
  - Join Community Groups (MaMas)
  - View Approvals
- **Tabbed Navigation**: Switch between Account Options, Investment, and Transaction history
- **Responsive Design**: Mobile-first approach with beautiful gradient backgrounds
- **User Greeting**: Dynamic greeting based on time of day
- **Smooth Animations**: Hover effects and transitions for better UX

## 🛠 Tech Stack

- **React 19** - UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool with HMR
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **ESLint** - Code quality and linting

## 📁 Project Structure

```
clinic-pesa-dashboard/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Header.tsx        # Top navigation and greeting
│   │   ├── BalanceCard.tsx   # Savings balance display
│   │   ├── ActionButton.tsx  # Deposit & Share buttons
│   │   ├── ActionCard.tsx    # Individual action card
│   │   ├── ActionGrid.tsx    # Grid container for action cards
│   │   ├── TabNavigation.tsx # Tab switcher component
│   │   ├── CarouselDots.tsx  # Carousel indicator dots
│   │   ├── Footer.tsx        # T&Cs footer section
│   │   └── index.ts          # Component exports
│   ├── pages/
│   │   └── Dashboard.tsx     # Main dashboard page
│   ├── assets/               # Static assets
│   ├── App.tsx              # Root App component
│   ├── main.tsx             # React DOM entry point
│   └── index.css            # Global styles
├── public/                  # Static files
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

```bash
git clone <https://github.com/kidde60/clinic-pesa-dashboard.git>
cd clinic-pesa-dashboard
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 💻 Development

### Development Server

Start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Changes to your code will instantly reflect in the browser without page reload.

### Code Quality

Run ESLint to check code quality:

```bash
npm run lint
```

## 🏗 Building

Create an optimized production build:

```bash
npm run build
```

This command:

- Runs TypeScript compiler for type checking
- Bundles and minifies all assets
- Generates optimized output in the `dist/` folder

Preview the production build locally:

```bash
npm run preview
```

## 🧩 Components

### Header

**Location**: `src/components/Header.tsx`

Top section with logo, greeting message, and navigation buttons.

**Props:**

- `greeting`: string - Time-based greeting (Good Morning/Afternoon/Evening/Night)
- `userName`: string - User's name to display
- `onBack?`: () => void - Back button callback
- `onClose?`: () => void - Close button callback

**Usage:**

```tsx
<Header
  greeting={getGreeting()}
  userName="Robert"
  onBack={() => console.log("Back clicked")}
  onClose={() => console.log("Close clicked")}
/>
```

### BalanceCard

**Location**: `src/components/BalanceCard.tsx`

Displays savings balance with visibility toggle and AutoSave information.

**Props:**

- `balance`: number - Account balance amount
- `autosaveAmount`: number - AutoSave amount
- `frequency?`: string - Save frequency (default: "Monthly")
- `onBalanceToggle?`: (visible: boolean) => void - Callback when toggling visibility

**Usage:**

```tsx
<BalanceCard balance={50000} autosaveAmount={1000} frequency="Monthly" />
```

### ActionButton

**Location**: `src/components/ActionButton.tsx`

Reusable button component for primary actions (Deposit, Share Medical).

**Props:**

- `icon`: React.ReactNode - Icon to display
- `label`: string - Button label text
- `onClick?`: () => void - Click handler

### ActionCard

**Location**: `src/components/ActionCard.tsx`

Card component for grid-based actions with hover animations.

**Props:**

- `icon`: React.ReactNode - Icon to display
- `label`: string - Card label text
- `onClick?`: () => void - Click handler

### ActionGrid

**Location**: `src/components/ActionGrid.tsx`

Container component that renders multiple action cards in a grid layout.

**Props:**

- `cards`: ActionCardItem[] - Array of action card data
- `onCardClick?`: (index: number) => void - Callback when card is clicked

### TabNavigation

**Location**: `src/components/TabNavigation.tsx`

Tabbed navigation with active state indicator.

**Props:**

- `activeTab`: string - Currently active tab ID
- `tabs`: Array<{ id: string; label: string }> - Tab definitions
- `onTabChange`: (tabId: string) => void - Tab change handler

### CarouselDots

**Location**: `src/components/CarouselDots.tsx`

Carousel indicator dots for carousel sections.

**Props:**

- `totalDots`: number - Total number of dots
- `activeDot`: number - Index of active dot

### Footer

**Location**: `src/components/Footer.tsx`

Footer with Terms & Conditions link.

## 🎨 Styling

### Color Scheme

The application uses a professional healthcare-focused color palette:

| Color           | Hex Value | Usage                      |
| --------------- | --------- | -------------------------- |
| Primary Dark    | `#013E5D` | Text, icons, main elements |
| Primary Light   | `#015873` | Header gradient top        |
| Primary Darkest | `#012840` | Header gradient bottom     |
| Accent Yellow   | `#FFCB05` | Highlights, active states  |
| Light Blue      | `#8BD8FE` | Badge backgrounds          |
| Gray            | `#AFAFAF` | Secondary text             |
| Light Gray      | `#E5E5E5` | Borders, dividers          |
| White           | `#FFFFFF` | Card backgrounds           |

### Tailwind CSS

The project uses Tailwind CSS v4 with the official `@tailwindcss/vite` plugin for optimal performance.

Global styles are defined in `src/index.css`.

## 📦 Scripts

| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Create production build  |
| `npm run lint`    | Run ESLint checks        |
| `npm run preview` | Preview production build |

## 🔧 Configuration Files

### `vite.config.ts`

Vite configuration with React plugin for JSX transformation.

### `tsconfig.json` & `tsconfig.app.json`

TypeScript compiler options for strict type checking.

### `eslint.config.js`

ESLint configuration for code quality enforcement.

### `tailwind.config.js`

Tailwind CSS configuration (auto-generated by Tailwind v4).

## 📱 Browser Support

The application supports all modern browsers that support ES2020+ JavaScript.

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes and commit with clear messages
3. Ensure code passes linting: `npm run lint`
4. Create a pull request

## 📄 License

This project is private. All rights reserved.

## 👥 George William Kidde

**ClinicPesa** - Healthcare Financial Solutions

For issues, questions, or suggestions, please contact the development team.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
# school
