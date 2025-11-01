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

      <View style={styles.additionalResources}>
        <Text style={styles.resourcesTitle}>NTU Resources</Text>
        
        <View style={styles.resourceSubsection}>
          <Text style={styles.subsectionTitle}>University Counselling Centre</Text>
          <TouchableOpacity 
            style={styles.resourceItem}
            onPress={() => Linking.openURL('tel:67904462')}
          >
            <Ionicons name="call" size={18} color="#4A90E2" />
            <Text style={styles.resourceText}>6790 4462 (Office Hours)</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.resourceItem}
            onPress={() => Linking.openURL('tel:69047041')}
          >
            <Ionicons name="call" size={18} color="#FF6B35" />
            <Text style={styles.resourceText}>6904 7041 (After hours - Psychological emergency)</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.resourceItem}
            onPress={() => Linking.openURL('mailto:UWC-students@ntu.edu.sg')}
          >
            <Ionicons name="mail" size={18} color="#27AE60" />
            <Text style={styles.resourceText}>UWC-students@ntu.edu.sg</Text>
          </TouchableOpacity>
          <Text style={styles.addressText}>#02-01 University Health Service{'\n'}36 Nanyang Avenue{'\n'}Singapore 639801</Text>
        </View>

        <View style={styles.resourceSubsection}>
          <Text style={styles.subsectionTitle}>NTU Psychological Crisis Hotline</Text>
          <TouchableOpacity 
            style={styles.resourceItem}
            onPress={() => Linking.openURL('tel:65141911')}
          >
            <Ionicons name="call" size={18} color="#E91E63" />
            <Text style={styles.resourceText}>6514-1911</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.resourceItem}
            onPress={() => Linking.openURL('mailto:UWO-incidentsupport@ntu.edu.sg')}
          >
            <Ionicons name="mail" size={18} color="#27AE60" />
            <Text style={styles.resourceText}>UWO-incidentsupport@ntu.edu.sg</Text>
          </TouchableOpacity>
        </View>
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
        <Text style={styles.resourcesTitle}>Community Resources</Text>
        
        <TouchableOpacity 
          style={styles.resourceItem}
          onPress={() => Linking.openURL('tel:65366366')}
        >
          <Ionicons name="call" size={18} color="#4A90E2" />
          <Text style={styles.resourceText}>Counselling & Care Centre: 6536 6366</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.resourceItem}
          onPress={() => Linking.openURL('tel:63861928')}
        >
          <Ionicons name="call" size={18} color="#8E44AD" />
          <Text style={styles.resourceText}>Silver Ribbon: 6386 1928</Text>
        </TouchableOpacity>
        
        <View style={styles.resourceSubsection}>
          <Text style={styles.subsectionTitle}>Institute of Mental Health</Text>
          <TouchableOpacity 
            style={styles.resourceItem}
            onPress={() => Linking.openURL('tel:63892222')}
          >
            <Ionicons name="call" size={18} color="#E91E63" />
            <Text style={styles.resourceText}>6389 2222 (24 Hr Emergency Helpline)</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.resourceItem}
            onPress={() => Linking.openURL('tel:63892200')}
          >
            <Ionicons name="call" size={18} color="#4A90E2" />
            <Text style={styles.resourceText}>6389 2200 (Appointments only)</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.resourceItem}
          onPress={() => Linking.openURL('tel:18007389595')}
        >
          <Ionicons name="call" size={18} color="#27AE60" />
          <Text style={styles.resourceText}>Mount Elizabeth-Charter's Helpline: 1800 738 9595 (24 Hr)</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.resourceItem}
          onPress={() => Linking.openURL('tel:69782728')}
        >
          <Ionicons name="call" size={18} color="#8E44AD" />
          <Text style={styles.resourceText}>CARE Singapore: 6978 2728</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.resourceItem}
          onPress={() => Linking.openURL('tel:18002214444')}
        >
          <Ionicons name="call" size={18} color="#FF6B35" />
          <Text style={styles.resourceText}>Samaritans of Singapore (SOS): 1800 221 4444 (24 Hr)</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.resourceItem}
          onPress={() => Linking.openURL('tel:18002837019')}
        >
          <Ionicons name="call" size={18} color="#4A90E2" />
          <Text style={styles.resourceText}>Singapore Association for Mental Health: 1800 283 7019 (9am-6pm, Mon-Fri)</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.additionalResources}>
        <Text style={styles.resourcesTitle}>Virtual Resources</Text>
        
        <View style={styles.resourceSubsection}>
          <Text style={styles.subsectionTitle}>eC2.sg by Fei Yue Community Services</Text>
          <Text style={styles.resourceDescription}>Free counselling chat room for Singaporean youths and young adults</Text>
          <Text style={styles.resourceDescription}>Monday to Friday, 2:00 PM to 5:30 PM</Text>
          <TouchableOpacity 
            style={styles.linkButton}
            onPress={() => Linking.openURL('https://fycs.org/ec2-sg/')}
          >
            <Ionicons name="link" size={18} color="#4A90E2" />
            <Text style={styles.linkText}>https://fycs.org/ec2-sg/</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resourceSubsection}>
          <Text style={styles.subsectionTitle}>Silver Ribbon (Singapore)</Text>
          <Text style={styles.resourceDescription}>Free video call counselling for individuals struggling with mental health</Text>
          <TouchableOpacity 
            style={styles.linkButton}
            onPress={() => Linking.openURL('https://www.silverribbonsingapore.com/ccs.html')}
          >
            <Ionicons name="link" size={18} color="#8E44AD" />
            <Text style={styles.linkText}>https://www.silverribbonsingapore.com/ccs.html</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resourceSubsection}>
          <Text style={styles.subsectionTitle}>Community Mental Health Team (CHAT)</Text>
          <Text style={styles.resourceDescription}>Free and confidential mental health checks for Singaporean youths aged 16-30</Text>
          <TouchableOpacity 
            style={styles.linkButton}
            onPress={() => Linking.openURL('https://www.chat.mentalhealth.sg/get-help/make-chat-referral/')}
          >
            <Ionicons name="link" size={18} color="#27AE60" />
            <Text style={styles.linkText}>https://www.chat.mentalhealth.sg/get-help/make-chat-referral/</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.emergencyInfo}>
        <Text style={styles.emergencyTitle}>In Case of Emergency</Text>
        <Text style={styles.emergencyText}>
          If you or someone you know is in immediate danger, please call 995 (Singapore Emergency Services) or go to your nearest emergency room.
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
  quickResources: {
    backgroundColor: '#E3F2FD',
    margin: 15,
    marginTop: 0,
    padding: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#4A90E2',
  },
  quickResourcesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  quickResourceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
  },
  quickResourceText: {
    fontSize: 14,
    color: '#4A90E2',
    marginLeft: 10,
    fontWeight: '600',
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
  resourceSubsection: {
    marginTop: 15,
    marginBottom: 10,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 10,
  },
  addressText: {
    fontSize: 13,
    color: '#666',
    marginTop: 8,
    marginLeft: 33,
    fontStyle: 'italic',
    lineHeight: 20,
  },
  resourceDescription: {
    fontSize: 13,
    color: '#666',
    marginTop: 5,
    marginLeft: 0,
    lineHeight: 18,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  linkText: {
    fontSize: 13,
    color: '#4A90E2',
    marginLeft: 10,
    flex: 1,
    textDecorationLine: 'underline',
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

