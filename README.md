# Onelast.AI - AI Memory SaaS Platform

A comprehensive AI-powered memory and knowledge management platform that learns and remembers everything users share.

## 🚀 Features

- **Smart Memory Management**: AI-powered categorization and tagging
- **Real-time Synchronization**: Socket.IO powered live updates
- **Semantic Search**: Find information by meaning, not just keywords
- **User Authentication**: JWT-based secure authentication
- **Dashboard Analytics**: Visual insights into memory patterns
- **Multiple Memory Types**: Notes, conversations, tasks, ideas, documents
- **RESTful API**: Complete API for all memory operations
- **Real-time Chat**: WebSocket support for live interactions

## 🏗️ Architecture

### Backend (Node.js + Express + MongoDB)

- **Location**: `./backend/`
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT with bcrypt password hashing
- **Real-time**: Socket.IO integration
- **API**: RESTful endpoints with comprehensive validation

### Frontend (Next.js + React + TailwindCSS)

- **Location**: `./frontend/`
- **Framework**: Next.js 15 with TypeScript
- **Styling**: TailwindCSS with Lucide React icons
- **State Management**: React Context API
- **API Client**: Axios with interceptors

### Database Schema

- **Users**: Authentication, profiles, subscription management
- **Memories**: Content storage with metadata, tags, and relationships
- **Indexes**: Optimized for search and retrieval

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+
- MongoDB 7.0+
- npm or yarn

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/AI-Digital-Market/onelast-ai.git
   cd onelast-ai
   ```

2. **Backend Setup**

   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   npm run dev
   ```

3. **Frontend Setup**

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Access the application**

   - Frontend: <http://localhost:3000>
   - Backend API: <http://localhost:5000>

### Docker Deployment

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

## 📱 API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login  
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile

### Memories

- `POST /api/memories` - Create memory
- `GET /api/memories` - List memories (with pagination/filtering)
- `GET /api/memories/:id` - Get specific memory
- `PUT /api/memories/:id` - Update memory
- `DELETE /api/memories/:id` - Delete memory
- `GET /api/memories/search/:query` - Search memories
- `GET /api/memories/:id/related` - Get related memories

### Users

- `GET /api/users/dashboard` - Dashboard data
- `GET /api/users/stats` - User statistics
- `POST /api/users/export` - Export user data
- `DELETE /api/users/account` - Delete account

## 🚀 Deployment

### Azure Deployment

1. **Infrastructure as Code**

   ```bash
   az group create --name onelast-ai-rg --location eastus
   az deployment group create \
     --resource-group onelast-ai-rg \
     --template-file azure/main.bicep \
     --parameters @azure/parameters.json
   ```

2. **GitHub Actions CI/CD**
   - Configure secrets in GitHub repository
   - Push to main branch triggers deployment

### Environment Variables

#### Backend (.env)

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb://localhost:27017/onelast-ai
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
```

#### Frontend

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend linting
cd frontend
npm run lint
```

## 📊 Database Indexes

The application uses the following MongoDB indexes for optimal performance:

- Users: `email` (unique), `username` (unique)
- Memories: `userId + createdAt`, `userId + type`, `userId + tags`, full-text search on content

## 🔒 Security Features

- JWT authentication with secure token handling
- Password hashing with bcrypt (12 rounds)
- Input validation with Joi
- Rate limiting (100 requests per 15 minutes)
- CORS configuration
- Helmet.js security headers
- Environment variable protection

## 🎯 Future Enhancements

- [ ] AI integration (Azure OpenAI/OpenAI API)
- [ ] Voice memory recording
- [ ] File attachment support
- [ ] Advanced analytics and insights
- [ ] Team collaboration features
- [ ] Mobile applications (React Native)
- [ ] Browser extension
- [ ] Email integration
- [ ] Calendar synchronization
- [ ] Advanced search with filters

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- **AI-Digital-Market** - Initial work and architecture

## 🙏 Acknowledgments

- Next.js team for the amazing React framework
- MongoDB team for the flexible database
- TailwindCSS for the utility-first CSS framework
- All open-source contributors who made this project possible

---

**Built with ❤️ for the AI-powered future of personal knowledge management.**
