# QR Generator

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue)](https://qr-code-generator-umber-delta.vercel.app)

A modern, feature-rich web application built with Next.js 13 and React 18, designed to create and manage QR codes effortlessly. This project combines the power of TypeScript, Tailwind CSS, and modern React patterns to deliver a seamless QR code generation experience. With real-time preview, gradient UI elements, and a history tracking system, it provides a comprehensive solution for all your QR code needs.

## Features

- Generate QR codes from text, URLs, or other content
- Modern and responsive UI built with Next.js and Tailwind CSS
- Real-time QR code generation with live preview
- Downloadable QR codes
- View history of generated QR codes
- Gradient UI elements

## Tech Stack

- [Next.js 13](https://nextjs.org/) - React framework with app router
- [React 18](https://reactjs.org/) - JavaScript library for user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Type safety and better DX
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [qrcode.react](https://npmjs.com/package/qrcode.react) - React component for QR generation
- [react-text-gradients](https://npmjs.com/package/react-text-gradients) - Text gradient effects
- [react-icons](https://react-icons.github.io/react-icons/) - Icon components
- [next/navigation](https://nextjs.org/docs/app/api-reference/functions/use-router) - App router navigation

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/BoraOzkoc/qr-generator.git
cd qr-generator
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Usage

1. Enter the content you want to encode in the QR code (text, URL, etc.)
2. The QR code will be generated automatically with a live preview
3. Customize the QR code if needed (size, color, etc.)
4. Download the generated QR code by clicking the download button
5. View your QR code history in the history section

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Here's how you can contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
