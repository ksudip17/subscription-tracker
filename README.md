# Subscription Tracker API

A robust Node.js REST API for managing and tracking user subscriptions with automated renewal notifications and workflow management.

## 🚀 Features

- **User Authentication & Authorization**: Secure JWT-based authentication system
- **Subscription Management**: Create, read, update, and delete subscriptions
- **Multi-Currency Support**: Supports NPR, USD, INR, and EUR
- **Flexible Billing Cycles**: Daily, weekly, monthly, and yearly subscriptions
- **Category Organization**: Organize subscriptions by type (sports, news, AI, entertainment, lifestyle, technology, other)
- **Automated Status Management**: Automatic status updates based on renewal dates
- **Email Notifications**: Automated email alerts for subscription renewals
- **Workflow Automation**: Background job processing with Upstash Workflow
- **Rate Limiting & Security**: Arcjet integration for API protection
- **MongoDB Integration**: Scalable data storage with Mongoose ODM

## 🛠️ Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + bcryptjs
- **Email Service**: Nodemailer
- **Background Jobs**: Upstash Workflow
- **Security**: Arcjet (rate limiting & protection)
- **Development**: Nodemon, ESLint

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB instance
- Email service credentials
- Arcjet account and API key
- Upstash account and credentials

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Subscription-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create environment files based on your environment:
   
   **Development**: `.env.development.local`
   **Production**: `.env.production.local`
   
   ```bash
   # Server Configuration
   PORT=3000
   NODE_ENV=development
   
   # Database
   DB_URI=mongodb://localhost:27017/subscription-tracker
   
   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRES_IN=7d
   
   # Arcjet Configuration
   ARCJET_KEY=your-arcjet-api-key
   ARCJET_ENV=development
   
   # Upstash Workflow
   QSTASH_URL=your-qstash-url
   QSTASH_TOKEN=your-qstash-token
   SERVER_URL=http://localhost:3000
   
   # Email Configuration
   EMAIL_PASSWORD=your-email-password
   ```

4. **Start the application**
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   ```

## 🗄️ Database Models

### User Model
- Name, email, password
- Timestamps for creation and updates
- Email validation and uniqueness constraints

### Subscription Model
- Name, price, currency, frequency
- Category classification
- Payment method and status
- Start and renewal dates
- Automatic status updates
- User association

## 🔌 API Endpoints

### Authentication (`/api/v1/auth`)
- `POST /register` - User registration
- `POST /login` - User login
- `POST /logout` - User logout

### Users (`/api/v1/users`)
- `GET /profile` - Get user profile
- `PUT /profile` - Update user profile
- `DELETE /profile` - Delete user account

### Subscriptions (`/api/v1/subscriptions`)
- `GET /` - Get all user subscriptions
- `POST /` - Create new subscription
- `GET /:id` - Get specific subscription
- `PUT /:id` - Update subscription
- `DELETE /:id` - Delete subscription

### Workflows (`/api/v1/workflows`)
- Background job processing
- Subscription renewal notifications
- Automated status updates

## 📱 Usage Examples

### Creating a Subscription
```bash
curl -X POST http://localhost:3000/api/v1/subscriptions \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Netflix Premium",
    "price": 15.99,
    "currency": "USD",
    "frequency": "monthly",
    "category": "entertainment",
    "paymentMethod": "Credit Card",
    "startDate": "2024-01-01"
  }'
```

### Getting User Subscriptions
```bash
curl -X GET http://localhost:3000/api/v1/subscriptions \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for password security
- **Rate Limiting**: Arcjet integration for API protection
- **Input Validation**: Comprehensive data validation
- **Error Handling**: Centralized error management

## 🚀 Deployment

### Environment Variables
Ensure all required environment variables are set in your production environment.

### Database
- Use MongoDB Atlas or a production MongoDB instance
- Ensure proper indexing for performance
- Set up database backups

### Process Management
Consider using PM2 or similar process managers for production:
```bash
npm install -g pm2
pm2 start app.js --name "subscription-tracker"
```

## 🧪 Development

### Code Quality
- ESLint configuration included
- Follow consistent code style
- Use meaningful commit messages

### Testing
```bash
# Run linting
npx eslint .

# Development with auto-reload
npm run dev
```

## 📝 Environment Variables Reference

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PORT` | Server port | Yes | 3000 |
| `NODE_ENV` | Environment mode | Yes | development |
| `DB_URI` | MongoDB connection string | Yes | - |
| `JWT_SECRET` | JWT signing secret | Yes | - |
| `JWT_EXPIRES_IN` | JWT expiration time | Yes | 7d |
| `ARCJET_KEY` | Arcjet API key | Yes | - |
| `ARCJET_ENV` | Arcjet environment | Yes | development |
| `QSTASH_URL` | Upstash QStash URL | Yes | - |
| `QSTASH_TOKEN` | Upstash QStash token | Yes | - |
| `SERVER_URL` | Server base URL | Yes | - |
| `EMAIL_PASSWORD` | Email service password | Yes | - |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the API documentation

## 🔄 Changelog

### Version 0.0.0
- Initial release
- Basic CRUD operations for subscriptions
- User authentication system
- Email notification system
- Workflow automation
- Security middleware integration
