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

const HomeScreen = ({ navigation }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodRating, setMoodRating] = useState(null);

  const moods = [
    { emoji: '😢', label: 'Sad', value: 1 },
    { emoji: '😐', label: 'Neutral', value: 2 },
    { emoji: '😊', label: 'Happy', value: 3 },
    { emoji: '😄', label: 'Very Happy', value: 4 },
  ];

  const handleMoodSelection = (mood) => {
    setSelectedMood(mood);
    setMoodRating(mood.value);
    // Here you would typically save this to your backend
    console.log('Mood selected:', mood);
  };

  const handleCrisisSupport = () => {
    navigation.navigate('Support', { screen: 'CrisisSupport' });
  };

  const quickActions = [
    {
      title: 'Book a Pod',
      icon: 'person',
      color: '#4A90E2',
      onPress: () => navigation.navigate('Pod', { screen: 'PodBooking' }),
    },
    {
      title: 'Counselling / Peer Support',
      icon: 'chatbubbles',
      color: '#8E44AD',
      onPress: () => navigation.navigate('Support', { screen: 'CounsellingRequest' }),
    },
    {
      title: 'My Appointments',
      icon: 'calendar',
      color: '#4A90E2',
      onPress: () => navigation.navigate('Pod', { screen: 'Appointments' }),
    },
    {
      title: 'Learn & Train (PFA)',
      icon: 'school',
      color: '#8E44AD',
      onPress: () => navigation.navigate('Learn', { screen: 'LearningMain' }),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good afternoon, John</Text>
        <Text style={styles.moodQuestion}>How are you feeling today?</Text>
        
        <View style={styles.moodContainer}>
          {moods.map((mood, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.moodButton,
                selectedMood?.value === mood.value && styles.selectedMood,
              ]}
              onPress={() => handleMoodSelection(mood)}
            >
              <Text style={styles.moodEmoji}>{mood.emoji}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.quickActions}>
        {quickActions.map((action, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.actionButton, { backgroundColor: action.color }]}
            onPress={action.onPress}
          >
            <Ionicons name={action.icon} size={24} color="white" />
            <Text style={styles.actionText}>{action.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.crisisBanner} onPress={handleCrisisSupport}>
        <View style={styles.crisisContent}>
          <Ionicons name="warning" size={24} color="white" />
          <Text style={styles.crisisText}>Need help now?</Text>
        </View>
        <Text style={styles.crisisSubtext}>Tap here for Crisis Support</Text>
      </TouchableOpacity>

      <View style={styles.encouragement}>
        <Text style={styles.encouragementText}>
          Take a deep breath; you are doing your best.
        </Text>
        <View style={styles.progressContainer}>
          <Ionicons name="flower" size={16} color="#E91E63" />
          <Text style={styles.progressText}>2 pod sessions completed this week</Text>
        </View>
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
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  moodQuestion: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 20,
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  moodButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedMood: {
    borderColor: '#4A90E2',
    backgroundColor: '#E3F2FD',
  },
  moodEmoji: {
    fontSize: 24,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '48%',
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  actionText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  crisisBanner: {
    backgroundColor: '#FF6B35',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  crisisContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  crisisText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  crisisSubtext: {
    color: 'white',
    fontSize: 14,
    marginLeft: 34,
  },
  encouragement: {
    padding: 20,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  encouragementText: {
    fontSize: 16,
    color: '#2c3e50',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 14,
    color: '#7f8c8d',
    marginLeft: 8,
  },
});

export default HomeScreen;
