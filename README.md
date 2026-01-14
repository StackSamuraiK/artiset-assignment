# E-Commerce Application

A simple e-commerce website built with HTML, CSS, and JavaScript.

## Features
- Product listing with filtering and search
- Shopping cart functionality
- Cart persistence with localStorage
- Responsive design
- Smooth animations

## Local Development

### Prerequisites
- Node.js (v18 or higher)
- Docker (optional, for containerization)

### Setup

1. Install dependencies:
```bash
npm install
```

2. Run tests:
```bash
npm test
```

3. Open `index.html` in your browser to view the application

## Docker

### Build and run with Docker:
```bash
docker build -t ecommerce-app .
docker run -p 80:80 ecommerce-app
```

### Using Docker Compose:
```bash
docker-compose up -d
```

Access the application at `http://localhost`

## CI/CD Pipeline

This project uses GitHub Actions for automated testing and Docker image deployment.

### Pipeline Steps:
1. **Run Tests** - Automatically runs Jest tests on every push
2. **Build Docker Image** - Creates optimized Docker image
3. **Push to Docker Hub** - Pushes image to Docker Hub (requires credentials)
4. **Push to GHCR** - Pushes image to GitHub Container Registry (automatic)

### Setup Instructions:

#### For Docker Hub:
1. Create a Docker Hub account at https://hub.docker.com
2. Go to your GitHub repository Settings → Secrets and variables → Actions
3. Add the following secrets:
   - `DOCKER_USERNAME` - Your Docker Hub username
   - `DOCKER_PASSWORD` - Your Docker Hub access token (NOT password)

To create a Docker Hub access token:
- Go to https://hub.docker.com/settings/security
- Click "New Access Token"
- Give it a name and select appropriate permissions
- Copy the token and add it as `DOCKER_PASSWORD` secret

#### For GitHub Container Registry (GHCR):
- No additional setup needed! Uses `GITHUB_TOKEN` automatically
- Images will be pushed to `ghcr.io/your-username/your-repo`

## Testing

Run tests with:
```bash
npm test              # Run tests once
npm run test:watch    # Run tests in watch mode
```

## Project Structure
```
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # Main JavaScript
├── utils.js            # Utility functions
├── utils.test.js       # Test file
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose setup
├── package.json        # Node.js configuration
└── .github/
    └── workflows/
        └── ci-cd.yml   # GitHub Actions workflow
```

