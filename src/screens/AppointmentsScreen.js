import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import QRCode from 'react-native-qrcode-svg';

const AppointmentsScreen = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  const currentAppointment = {
    id: 1,
    title: 'Mindfulness Pod - Library Level 2',
    date: 'Today',
    time: '2:00 PM – 2:15 PM',
    type: 'pod',
    qrData: 'POD_SESSION_12345_LIBRARY_L2_2024_01_15_14_00',
  };

  const upcomingAppointments = [
    {
      id: 2,
      title: 'Counselling Session',
      date: '28 Oct',
      time: '11:00 AM',
      type: 'counselling',
    },
    {
      id: 3,
      title: 'Peer Support',
      date: '30 Oct',
      time: '3:00 PM',
      type: 'peer',
    },
    {
      id: 4,
      title: 'Pod Session',
      date: '1 Nov',
      time: '5:15 PM',
      type: 'pod',
    },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'pod':
        return 'person';
      case 'counselling':
        return 'chatbubbles';
      case 'peer':
        return 'people';
      default:
        return 'calendar';
    }
  };

  const handleGenerateQR = () => {
    setShowQRCode(true);
    Alert.alert(
      'QR Code Generated',
      'Show this QR code at the Pod to begin your session.',
      [{ text: 'OK' }]
    );
  };

  const handleCloseQR = () => {
    setShowQRCode(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Appointments</Text>
        <Text style={styles.subtitle}>View your upcoming sessions and access your QR code.</Text>
      </View>

      {currentAppointment && (
        <View style={styles.currentAppointment}>
          <View style={styles.appointmentHeader}>
            <Ionicons name={getTypeIcon(currentAppointment.type)} size={24} color="#8E44AD" />
            <View style={styles.appointmentInfo}>
              <Text style={styles.appointmentTitle}>{currentAppointment.title}</Text>
              <Text style={styles.appointmentDateTime}>
                {currentAppointment.date}, {currentAppointment.time}
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.qrButton} onPress={handleGenerateQR}>
            <Text style={styles.qrButtonText}>Generate QR Code</Text>
          </TouchableOpacity>

          <Text style={styles.qrInstruction}>
            Show this at the Pod to begin your session.
          </Text>

          {showQRCode && (
            <View style={styles.qrContainer}>
              <View style={styles.qrHeader}>
                <Text style={styles.qrTitle}>Your Session QR Code</Text>
                <TouchableOpacity onPress={handleCloseQR}>
                  <Ionicons name="close" size={24} color="#666" />
                </TouchableOpacity>
              </View>
              <View style={styles.qrCodeWrapper}>
                <View style={styles.qrCodePlaceholder}>
                  <Ionicons name="qr-code" size={80} color="#2c3e50" />
                  <Text style={styles.qrPlaceholderText}>QR Code Generated</Text>
                  <Text style={styles.qrData}>{currentAppointment.qrData}</Text>
                </View>
              </View>
            </View>
          )}
        </View>
      )}

      <View style={styles.upcomingSection}>
        <Text style={styles.sectionTitle}>Other upcomings</Text>
        
        {upcomingAppointments.map((appointment) => (
          <View key={appointment.id} style={styles.upcomingAppointment}>
            <Ionicons name={getTypeIcon(appointment.type)} size={20} color="#4A90E2" />
            <View style={styles.upcomingInfo}>
              <Text style={styles.upcomingTitle}>{appointment.title}</Text>
              <Text style={styles.upcomingDateTime}>
                {appointment.date}, {appointment.time}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  currentAppointment: {
    backgroundColor: '#8E44AD',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  appointmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  appointmentInfo: {
    marginLeft: 15,
    flex: 1,
  },
  appointmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  appointmentDateTime: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  qrButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  qrButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  qrInstruction: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    textAlign: 'center',
  },
  qrContainer: {
    backgroundColor: 'white',
    marginTop: 15,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  qrHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  qrTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  qrCodeWrapper: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  qrData: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  qrCodePlaceholder: {
    alignItems: 'center',
    padding: 20,
  },
  qrPlaceholderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 10,
    marginBottom: 10,
  },
  upcomingSection: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  upcomingAppointment: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  upcomingInfo: {
    marginLeft: 15,
    flex: 1,
  },
  upcomingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 3,
  },
  upcomingDateTime: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});

export default AppointmentsScreen;
