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

const LearningScreen = ({ navigation }) => {
  const [progress, setProgress] = useState(20);
  const [currentLevel, setCurrentLevel] = useState(2);

  const levels = [
    {
      id: 1,
      title: 'Understanding Emotions',
      icon: 'brain',
      status: 'completed',
      description: 'Learn to identify and understand different emotions',
    },
    {
      id: 2,
      title: 'Active Listening',
      icon: 'ear',
      status: 'in-progress',
      description: 'Develop skills for effective listening and communication',
      progress: 60,
    },
    {
      id: 3,
      title: 'Offering Support',
      icon: 'ribbon',
      status: 'locked',
      description: 'Learn how to provide emotional support to others',
    },
    {
      id: 4,
      title: 'Empathy in Action',
      icon: 'heart',
      status: 'locked',
      description: 'Practice empathy in real-world scenarios',
    },
    {
      id: 5,
      title: 'Self-Care & Reflection',
      icon: 'hand-left',
      status: 'locked',
      description: 'Develop personal self-care strategies',
    },
  ];

  const handleLevelPress = (level) => {
    if (level.status === 'locked') {
      Alert.alert(
        'Level Locked',
        'Complete the previous level to unlock this one.',
        [{ text: 'OK' }]
      );
      return;
    }

    if (level.status === 'completed') {
      Alert.alert(
        'Level Completed',
        `You have already completed "${level.title}". Great job!`,
        [{ text: 'OK' }]
      );
      return;
    }

    Alert.alert(
      'Start Lesson',
      `Begin "${level.title}" lesson?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Start', onPress: () => startLesson(level) },
      ]
    );
  };

  const startLesson = (level) => {
    Alert.alert(
      'Lesson Started',
      `Starting "${level.title}" lesson. This is a demo - in a real app, you would navigate to the lesson content.`,
      [{ text: 'OK' }]
    );
  };

  const handleJournaling = () => {
    navigation.navigate('Journaling');
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'checkmark-circle';
      case 'in-progress':
        return 'play-circle';
      case 'locked':
        return 'lock-closed';
      default:
        return 'ellipse-outline';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return '#27AE60';
      case 'in-progress':
        return '#4A90E2';
      case 'locked':
        return '#BDC3C7';
      default:
        return '#BDC3C7';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Learn & Train</Text>
        <Text style={styles.subtitle}>
          Build empathy and resilience through short PFA lessons.
        </Text>
      </View>

      <View style={styles.progressSection}>
        <Text style={styles.progressText}>Your Progress: {progress}%</Text>
        <View style={styles.progressCircle}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
          <Text style={styles.progressPercentage}>{progress}%</Text>
        </View>
        <Text style={styles.badgeText}>
          Complete all 5 levels to earn your Mindfulness Badge.
        </Text>
      </View>

      <View style={styles.levelsSection}>
        {levels.map((level) => (
          <TouchableOpacity
            key={level.id}
            style={[
              styles.levelCard,
              level.status === 'locked' && styles.lockedCard,
            ]}
            onPress={() => handleLevelPress(level)}
          >
            <View style={styles.levelHeader}>
              <View style={styles.levelIconContainer}>
                <Ionicons
                  name={level.icon}
                  size={24}
                  color={getStatusColor(level.status)}
                />
              </View>
              <View style={styles.levelInfo}>
                <Text style={[
                  styles.levelTitle,
                  level.status === 'locked' && styles.lockedText,
                ]}>
                  Level {level.id}: {level.title}
                </Text>
                <Text style={styles.levelDescription}>{level.description}</Text>
              </View>
              <Ionicons
                name={getStatusIcon(level.status)}
                size={24}
                color={getStatusColor(level.status)}
              />
            </View>

            {level.status === 'in-progress' && level.progress && (
              <View style={styles.progressBar}>
                <View style={styles.progressBarBackground}>
                  <View style={[
                    styles.progressBarFill,
                    { width: `${level.progress}%` }
                  ]} />
                </View>
                <Text style={styles.progressBarText}>{level.progress}% Complete</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.additionalResources}>
        <Text style={styles.resourcesTitle}>Additional Resources</Text>
        
        <TouchableOpacity style={styles.resourceButton} onPress={handleJournaling}>
          <Ionicons name="book" size={24} color="#4A90E2" />
          <Text style={styles.resourceText}>Personal Journal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resourceButton}>
          <Ionicons name="library" size={24} color="#8E44AD" />
          <Text style={styles.resourceText}>PFA Resources</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resourceButton}>
          <Ionicons name="people" size={24} color="#27AE60" />
          <Text style={styles.resourceText}>Peer Support Groups</Text>
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
  progressSection: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  progressCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    position: 'relative',
    overflow: 'hidden',
  },
  progressFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    backgroundColor: '#8E44AD',
  },
  progressPercentage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    zIndex: 1,
  },
  badgeText: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  levelsSection: {
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
  levelCard: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  lockedCard: {
    backgroundColor: '#f5f5f5',
    opacity: 0.7,
  },
  levelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  levelIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  levelInfo: {
    flex: 1,
  },
  levelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  lockedText: {
    color: '#BDC3C7',
  },
  levelDescription: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  progressBar: {
    marginTop: 10,
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: '#e9ecef',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#4A90E2',
    borderRadius: 3,
  },
  progressBarText: {
    fontSize: 12,
    color: '#4A90E2',
    marginTop: 5,
    textAlign: 'right',
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
  resourceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 10,
  },
  resourceText: {
    fontSize: 16,
    color: '#2c3e50',
    marginLeft: 15,
    fontWeight: '500',
  },
});

export default LearningScreen;
