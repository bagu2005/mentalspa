import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SupportScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('peer');
  const [message, setMessage] = useState('');

  const handleStartChat = () => {
    if (!message.trim()) {
      Alert.alert('Message Required', 'Please tell us what\'s on your mind.');
      return;
    }

    Alert.alert(
      'Chat Started',
      `Your ${selectedOption === 'counsellor' ? 'counselling' : 'peer support'} request has been submitted. You'll be connected shortly.`,
      [{ text: 'OK' }]
    );
  };

  const handleCrisisSupport = () => {
    navigation.navigate('CrisisSupport');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Talk to Someone</Text>
        <Text style={styles.subtitle}>You're not alone. Choose how you'd like to connect.</Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === 'counsellor' && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption('counsellor')}
        >
          <Ionicons
            name="person"
            size={24}
            color={selectedOption === 'counsellor' ? '#4A90E2' : '#666'}
          />
          <Text style={[
            styles.optionText,
            selectedOption === 'counsellor' && styles.selectedOptionText,
          ]}>
            Counsellor
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === 'peer' && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption('peer')}
        >
          <Ionicons
            name="people"
            size={24}
            color={selectedOption === 'peer' ? '#4A90E2' : '#666'}
          />
          <Text style={[
            styles.optionText,
            selectedOption === 'peer' && styles.selectedOptionText,
          ]}>
            Peer Support
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.messageContainer}>
        <TextInput
          style={styles.messageInput}
          placeholder="Tell us what's on your mind..."
          placeholderTextColor="#999"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
        />
      </View>

      <TouchableOpacity style={styles.startChatButton} onPress={handleStartChat}>
        <Text style={styles.startChatText}>Start Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.crisisLink} onPress={handleCrisisSupport}>
        <Text style={styles.crisisLinkText}>Need immediate help? Go to Crisis Support.</Text>
      </TouchableOpacity>

      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('CounsellingRequest')}
        >
          <Ionicons name="document-text" size={24} color="#4A90E2" />
          <Text style={styles.actionText}>Request Counselling</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('CrisisSupport')}
        >
          <Ionicons name="warning" size={24} color="#FF6B35" />
          <Text style={styles.actionText}>Crisis Support</Text>
        </TouchableOpacity>
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
  optionsContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  optionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginHorizontal: 5,
    backgroundColor: '#f8f9fa',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedOption: {
    backgroundColor: '#E3F2FD',
    borderColor: '#4A90E2',
  },
  optionText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  selectedOptionText: {
    color: '#4A90E2',
  },
  messageContainer: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 20,
  },
  messageInput: {
    borderWidth: 1,
    borderColor: '#e9ecef',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    textAlignVertical: 'top',
    minHeight: 100,
  },
  startChatButton: {
    backgroundColor: '#8E44AD',
    margin: 20,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  startChatText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  crisisLink: {
    alignItems: 'center',
    marginBottom: 20,
  },
  crisisLinkText: {
    color: '#4A90E2',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  quickActions: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  actionButton: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    minWidth: 120,
  },
  actionText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    textAlign: 'center',
  },
});

export default SupportScreen;

