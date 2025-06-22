# StayFinder - Modern Accommodation Booking Platform

StayFinder is a full-stack web application that revolutionizes the way people find and book accommodations. Built with modern technologies and designed for scale, it offers unique features that set it apart from traditional booking platforms.

## Tech Stack & Architecture

### Frontend (Current Repository)

- **React + TypeScript**: For type-safe, component-based UI development
- **Vite**: For lightning-fast development and optimized builds
- **Tailwind CSS**: For utility-first styling and rapid UI development
- **shadcn/ui**: For beautiful, accessible, and customizable UI components
- **React Query**: For efficient server state management
- **Zustand**: For simple and scalable client state management

### Backend (Separate Repository)

- **Node.js + Express**: For a robust and scalable API
- **PostgreSQL**: For reliable data persistence
- **Redis**: For caching and real-time features
- **TypeORM**: For type-safe database operations
- **AWS S3**: For media storage
- **Socket.IO**: For real-time messaging and notifications

## Unique Features

1. **Dynamic Pricing with AI**

   - Machine learning algorithms analyze market trends, events, and demand
   - Real-time price adjustments based on multiple factors
   - Predictive pricing suggestions for hosts

2. **Local Experience Integration**
   - Connect travelers with local guides and experiences
   - Virtual reality property tours
   - Integration with local events and activities
   - Personalized itinerary planning

## Security & Scaling

### Security Measures

- JWT-based authentication with refresh tokens
- Rate limiting and request validation
- Input sanitization and XSS prevention
- HTTPS-only communication
- Regular security audits
- Data encryption at rest and in transit

### Scaling Strategy

- Containerized microservices architecture
- Horizontal scaling with Kubernetes
- CDN integration for static assets
- Database sharding for large datasets
- Caching layers with Redis
- Load balancing across multiple regions

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

### Environment Variables

Required environment variables:

```env
VITE_API_URL=https://api.stayfinder.com
VITE_STRIPE_PUBLIC_KEY=pk_test_...
VITE_MAPBOX_TOKEN=pk.eyJ1...
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@stayfinder.com or join our Discord community.
