import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CrisisSupportScreen = () => {
  const handleCrisisSupport = () => {
    Alert.alert(
      'Crisis Support',
      'You are being connected to immediate crisis support. Please stay on the line.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Call Now', onPress: () => Linking.openURL('tel:5551234567') },
      ]
    );
  };

  const handleTextSupport = () => {
    Alert.alert(
      'Text Support',
      'You can text SUPPORT to 12345 for immediate crisis support.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Send Text', onPress: () => Linking.openURL('sms:12345&body=SUPPORT') },
      ]
    );
  };

  const handlePhoneCall = () => {
    Linking.openURL('tel:5551234567');
  };

  const handleTextMessage = () => {
    Linking.openURL('sms:12345&body=SUPPORT');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Crisis Support</Text>
      </View>

      <TouchableOpacity style={styles.crisisButton} onPress={handleCrisisSupport}>
        <View style={styles.crisisButtonContent}>
          <Ionicons name="warning" size={32} color="white" />
          <Text style={styles.crisisButtonText}>CRISIS{'\n'}SUPPORT</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.contactsSection}>
        <Text style={styles.contactsTitle}>Contacts</Text>
        
        <TouchableOpacity style={styles.contactButton} onPress={handlePhoneCall}>
          <View style={styles.contactContent}>
            <Ionicons name="call" size={24} color="#27AE60" />
            <Text style={styles.contactText}>555-123-4567</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactButton} onPress={handleTextMessage}>
          <View style={styles.contactContent}>
            <Ionicons name="chatbubble" size={24} color="#4A90E2" />
            <Text style={styles.contactText}>Text SUPPORT to 12345</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.additionalResources}>
        <Text style={styles.resourcesTitle}>Additional Resources</Text>
        
        <View style={styles.resourceItem}>
          <Ionicons name="shield" size={20} color="#4A90E2" />
          <Text style={styles.resourceText}>National Suicide Prevention Lifeline: 988</Text>
        </View>
        
        <View style={styles.resourceItem}>
          <Ionicons name="heart" size={20} color="#E91E63" />
          <Text style={styles.resourceText}>Crisis Text Line: Text HOME to 741741</Text>
        </View>
        
        <View style={styles.resourceItem}>
          <Ionicons name="people" size={20} color="#8E44AD" />
          <Text style={styles.resourceText}>Campus Counseling Center: Available 24/7</Text>
        </View>
      </View>

      <View style={styles.emergencyInfo}>
        <Text style={styles.emergencyTitle}>In Case of Emergency</Text>
        <Text style={styles.emergencyText}>
          If you or someone you know is in immediate danger, please call 911 or go to your nearest emergency room.
        </Text>
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
  },
  crisisButton: {
    backgroundColor: '#FF6B35',
    margin: 20,
    padding: 30,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  crisisButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  crisisButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    textAlign: 'center',
  },
  contactsSection: {
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
  contactsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  contactButton: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  contactContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactText: {
    fontSize: 16,
    color: '#2c3e50',
    marginLeft: 15,
    fontWeight: '500',
  },
  additionalResources: {
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
  resourcesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  resourceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  resourceText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 15,
    flex: 1,
  },
  emergencyInfo: {
    backgroundColor: '#FFE6E6',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#E91E63',
  },
  emergencyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E91E63',
    marginBottom: 8,
  },
  emergencyText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default CrisisSupportScreen;
