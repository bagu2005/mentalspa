# Mental Health App Prototype

A comprehensive mental health support application designed for students and young adults, featuring pod booking, peer support, crisis intervention, and psychological first aid training.

## Features

### Core Functionality
- **Home Dashboard**: Personalized dashboard with mood tracking and quick actions
- **Pod Booking**: Book private spaces for relaxation and mindfulness sessions
- **Peer Support**: Connect with peer supporters and professional counselors
- **Crisis Support**: Immediate access to crisis intervention resources
- **Learning Section**: PFA (Psychological First Aid) training with progress tracking
- **Journaling**: Personal reflection and mood tracking
- **Appointments**: View upcoming sessions and generate QR codes

### Key Features
- **QR Code Generation**: Generate QR codes for pod sessions
- **Mood Tracking**: Daily mood and emotion tracking
- **Progress Analytics**: Track learning progress and session completion
- **Crisis Intervention**: Direct access to emergency support
- **PFA Training**: Structured learning modules for psychological first aid

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Expo CLI
- React Native development environment

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on your preferred platform:
```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## App Structure

```
src/
├── screens/
│   ├── HomeScreen.js           # Main dashboard
│   ├── PodBookingScreen.js    # Pod booking interface
│   ├── AppointmentsScreen.js   # Appointments and QR codes
│   ├── SupportScreen.js        # Support options
│   ├── CounsellingRequestScreen.js # Counselling request form
│   ├── CrisisSupportScreen.js  # Crisis intervention
│   ├── LearningScreen.js       # PFA training
│   ├── JournalingScreen.js     # Personal journaling
│   └── ProfileScreen.js        # User profile and settings
└── components/                 # Reusable components
```

## Key Technologies

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **React Navigation**: Navigation between screens
- **React Native QR Code**: QR code generation
- **Ionicons**: Icon library

## Features Overview

### 1. Home Dashboard
- Mood tracking with emoji selection
- Quick action buttons for main features
- Crisis support banner
- Progress indicators

### 2. Pod Booking
- Location selection
- Date and time picker
- Pod options (mindfulness, quiet space)
- Booking confirmation

### 3. Appointments & QR Codes
- View upcoming appointments
- Generate QR codes for sessions
- Session history tracking

### 4. Support System
- Peer support chat
- Professional counselling requests
- Crisis support with emergency contacts

### 5. Learning & Training
- PFA training modules
- Progress tracking
- Achievement system
- Personal journaling

### 6. Crisis Support
- Emergency contact information
- Direct calling and texting
- Additional mental health resources

## Analytics & Feedback

The app includes features for:
- Pre/post intervention surveys
- Pod booking analytics
- App usage tracking
- Qualitative feedback collection
- Referral rate monitoring

## Development Notes

This is a prototype application designed for demonstration purposes. In a production environment, you would need to:

1. Implement backend services for data persistence
2. Add user authentication and authorization
3. Integrate with real crisis support services
4. Implement push notifications
5. Add data encryption and privacy measures
6. Conduct thorough testing and security audits

## Contributing

This is a prototype application. For production use, please ensure proper security measures, data protection, and compliance with healthcare regulations.

## License

This project is for educational and demonstration purposes.
