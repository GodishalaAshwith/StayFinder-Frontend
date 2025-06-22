# StayFinder

StayFinder is a modern web application for finding and booking accommodations. This repository contains the frontend codebase built with React and TypeScript.

## Architecture & Development Approach

### Tech Stack Rationale

#### Frontend (Current Repository)
- **React 18**: Chosen for its robust ecosystem, concurrent rendering features, and extensive community support
- **TypeScript**: Ensures type safety, better IDE support, and reduces runtime errors
- **Vite**: Selected over CRA for its superior build performance and hot module replacement
- **Tailwind CSS**: Enables rapid UI development with utility-first approach and zero runtime cost
- **shadcn/ui**: Provides accessible, customizable components while maintaining full styling control

#### Backend (Planned)
- **Node.js/Express**: For API development, leveraging JavaScript across the stack
- **PostgreSQL**: For robust data relationships (user profiles, bookings, reviews)
- **Redis**: For caching and real-time features
- **Prisma**: Type-safe ORM with excellent TypeScript integration

### Full-Stack Development Capability
Our team is equipped to handle both frontend and backend development, with experience in:
- Frontend: React ecosystem, state management, responsive design
- Backend: RESTful APIs, database design, authentication systems
- DevOps: Docker, CI/CD, cloud deployment

### Unique Features Roadmap

1. **Smart Group Booking System**
   - Split payments between multiple guests
   - Room assignment optimization
   - Shared shopping lists and expense tracking
   - Group activity planning

2. **Local Host Connection Platform**
   - Direct local experience bookings
   - Personalized city guides from hosts
   - Local event notifications and ticketing
   - Language exchange opportunities

### Security & Scaling Strategy

#### Security Implementation
- **Authentication**: JWT with refresh tokens, OAuth 2.0
- **Data Protection**: 
  - HTTPS-only communication
  - Input validation & sanitization
  - XSS/CSRF prevention
  - Rate limiting on API endpoints

#### Scaling Architecture
- **Frontend**: 
  - CDN deployment
  - Code splitting and lazy loading
  - Static asset optimization
- **Backend**: 
  - Horizontal scaling with load balancing
  - Database replication
  - Caching strategies
  - Microservices for specific features

## Features (In Development)

### Current Features

- Modern, responsive UI
- Property listing and details pages
- User authentication interfaces
- Host dashboard interface

### Planned Features

- Property search and filtering
- Booking system
- User reviews and ratings
- Host property management
- Messaging system between hosts and guests

## Project Structure

```
src/
  ├── components/    # Reusable UI components
  ├── pages/        # Page components
  ├── lib/          # Utility functions
  └── hooks/        # Custom React hooks
```

## Development Requirements

- Node.js 18 or higher
- npm or Bun package manager
- Git

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or Bun for faster development)
- Git for version control
- VS Code (recommended editor)

### Development Setup

1. Clone the repository

```bash
git clone https://github.com/yourusername/stayfinder-frontend.git
cd stayfinder-frontend
```

2. Install dependencies

```bash
npm install
# or with Bun
bun install
```

3. Set up environment variables

```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server

```bash
npm run dev
# or with Bun
bun dev
```

The application will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
npm run preview
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code
- `npm run test` - Run tests
- `npm run type-check` - Check TypeScript types

## Deployment

### Quick Deploy

The easiest way to deploy is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/stayfinder-frontend)

### Manual Deployment

1. Build the project

```bash
npm run build
```

2. Deploy the `dist` folder to any static hosting service:

- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

### Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000
```

Note: Additional environment variables will be added as features are implemented.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License
