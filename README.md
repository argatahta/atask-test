
# atask-test

Live Demo: [https://atask-test-lemon.vercel.app/](https://atask-test-lemon.vercel.app/)

A simple React + TypeScript + Vite application for searching GitHub users and viewing their repositories.

## Features
- Search for GitHub users by username
- View a list of matching users
- Expand a user to see their public repositories
- See repository details including name, description, and star count
- Modern UI using Chakra UI
- Data fetching with custom hooks and SWR or react-query (depending on implementation)

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Open your browser and go to the local address shown in the terminal (usually http://localhost:5173).

### Build for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## Project Structure
```
├── public/                # Static assets
├── src/
│   ├── modules/
│   │   └── home/          # Main feature module
│   │       ├── components/
│   │       │   └── users/ # User and repository UI components
│   │       ├── usecase/   # Custom hooks for business logic
│   │       └── types.ts   # TypeScript types
│   ├── utils/
│   │   └── react-query/   # React query customization
│   ├── App.tsx            # App entry
│   └── main.tsx           # React root
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## License
MIT
