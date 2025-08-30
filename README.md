# Salon Service App

A modern React Native application built with Expo, TypeScript, and best practices for mobile app development. The Salon Service App offers a clean and intuitive UI, seamless navigation, and optimized performance for a smooth user experience.

This project is designed as a scalable and maintainable codebase, following a component-driven architecture and responsive design principles, making it ideal for learning, prototyping, or further enhancement into a full production application.

## Features

- **Home Screen**: Discover featured services and packages.
- **Salon Services**: Browse and book a variety of salon treatments.
- **Reusable Components**: Includes custom tiles, cards, search bars, and more for a consistent UI.
- **Asset Management**: Organized fonts and images for branding and visual appeal.
- **TypeScript Support**: Ensures type safety and maintainability.
- **Custom Hooks**: For theme and color scheme management.
- **Linting**: Enforced code quality with ESLint.

## Screenshot
![WhatsApp Image 2025-08-31 at 3 14 50 AM](https://github.com/user-attachments/assets/a83b68aa-9222-465b-b1c2-73b1d9b305f5)
![WhatsApp Image 2025-08-31 at 3 14 51 AM](https://github.com/user-attachments/assets/c2931c0b-408a-42e1-8867-016cd96944fc)
![WhatsApp Image 2025-08-31 at 3 14 51 AM (1)](https://github.com/user-attachments/assets/5265d3a8-461c-427c-a085-89763ebf6771)


## Demo Url
https://drive.google.com/file/d/1ZEop3n7xmhD1U6su9QfiwPlwULB6xbCW/view



## Project Structure

```
my-app/
├── app/
│   ├── App.tsx
│   ├── components/
│   │   ├── CategoryTile.tsx
│   │   ├── Chip.tsx
│   │   ├── LocationBar.tsx
│   │   ├── PackageCard.tsx
│   │   ├── SearchBar.tsx
│   │   ├── ServiceCard.tsx
│   │   └── ServiceList.tsx
│   └── screens/
│       ├── HomeScreen.tsx
│       └── SalonServices.tsx
├── assets/
│   ├── fonts/
│   │   ├── Inter_18pt-Bold.ttf
│   │   ├── Inter_18pt-Medium.ttf
│   │   ├── Inter_18pt-Regular.ttf
│   │   └── SpaceMono-Regular.ttf
│   └── images/
│       ├── adaptive-icon.png
│       ├── beard.jpg
│       ├── Bleach & Detan.jpg
│       ├── Cut & Style.png
│       ├── Face & Skin Care.png
│       ├── Facial & Skin.png
│       ├── Facial Favorites.png
│       ├── facial.jpeg
│       ├── favicon.png
│       ├── Hair Spa & Styling.png
│       ├── Hair Treatment.png
│       ├── Hair Treatments.png
│       ├── hair.webp
│       ├── Hand & Foot Care.png
│       ├── icon.png
│       ├── Makeup & Mehendi.png
│       ├── Makeup & Styling.png
│       ├── Massage & Relax.png
│       ├── Occasion and Ritual.png
│       ├── package_2.png
│       ├── partial-react-logo.png
│       ├── Pedicure & Manicu.png
│       ├── react-logo.png
│       ├── react-logo@2x.png
│       ├── react-logo@3x.png
│       ├── Rituals-Classic.webp
│       ├── Salon Services.jpg
│       ├── Skin Treatments.png
│       ├── Spa and Wellness.png
│       ├── splash-icon.png
│       ├── Styling and Makeup.png
│       ├── Thread & Tint.png
│       ├── Wax & Go.png
│       ├── Waxing.png
│       ├── Waxing1.png
│       └── ...more images
├── constants/
│   ├── Colors.ts
│   └── Fonts.ts
├── data/
│   └── home.ts
├── hooks/
│   ├── useColorScheme.ts
│   ├── useColorScheme.web.ts
│   └── useThemeColor.ts
├── scripts/
│   └── reset-project.js
├── .expo/
│   ├── devices.json
│   ├── README.md
│   └── types/
│       └── router.d.ts
├── .vscode/
│   └── settings.json
├── app.json
├── eslint.config.js
├── expo-env.d.ts
├── package.json
├── README.md
├── tsconfig.json
└── .gitignore
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

```bash
# Clone the repository
git clone https://github.com/Mohd-Fazal-khan/Shopping-App-Demo.git
cd my-app

# Install dependencies
npm install
```

### Running the App

```bash
# Start the Expo development server
npx expo start
```

Scan the QR code with the Expo Go app or run on an emulator.

## Scripts

- `npm start` — Start the development server
- `npm run lint` — Run ESLint
- `npm run reset` — Reset the project (see `scripts/reset-project.js`)

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.

---

**Created by:** Mohd Fazal Khan
