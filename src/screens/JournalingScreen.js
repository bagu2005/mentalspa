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

const JournalingScreen = () => {
  const [journalEntry, setJournalEntry] = useState('');
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedEmotions, setSelectedEmotions] = useState([]);

  const moods = [
    { emoji: '😢', label: 'Sad', value: 'sad' },
    { emoji: '😐', label: 'Neutral', value: 'neutral' },
    { emoji: '😊', label: 'Happy', value: 'happy' },
    { emoji: '😄', label: 'Very Happy', value: 'very-happy' },
  ];

  const emotions = [
    { name: 'Anxious', color: '#FF6B35' },
    { name: 'Grateful', color: '#27AE60' },
    { name: 'Frustrated', color: '#E74C3C' },
    { name: 'Hopeful', color: '#3498DB' },
    { name: 'Lonely', color: '#9B59B6' },
    { name: 'Excited', color: '#F39C12' },
    { name: 'Overwhelmed', color: '#E91E63' },
    { name: 'Peaceful', color: '#4CAF50' },
  ];

  const prompts = [
    "What are three things you're grateful for today?",
    "How did you handle a challenging situation today?",
    "What made you smile today?",
    "What would you like to improve about your day?",
    "How are you feeling right now, and why?",
    "What are you looking forward to tomorrow?",
  ];

  const [selectedPrompt, setSelectedPrompt] = useState(prompts[0]);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleEmotionToggle = (emotion) => {
    setSelectedEmotions(prev => 
      prev.includes(emotion.name) 
        ? prev.filter(e => e !== emotion.name)
        : [...prev, emotion.name]
    );
  };

  const handleSaveEntry = () => {
    if (!journalEntry.trim()) {
      Alert.alert('Entry Required', 'Please write something in your journal.');
      return;
    }

    Alert.alert(
      'Entry Saved',
      'Your journal entry has been saved successfully.',
      [{ text: 'OK' }]
    );
    
    // Reset form
    setJournalEntry('');
    setSelectedMood(null);
    setSelectedEmotions([]);
  };

  const handlePromptSelect = (prompt) => {
    setSelectedPrompt(prompt);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Personal Journal</Text>
        <Text style={styles.subtitle}>Reflect on your thoughts and feelings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How are you feeling?</Text>
        <View style={styles.moodContainer}>
          {moods.map((mood, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.moodButton,
                selectedMood?.value === mood.value && styles.selectedMood,
              ]}
              onPress={() => handleMoodSelect(mood)}
            >
              <Text style={styles.moodEmoji}>{mood.emoji}</Text>
              <Text style={styles.moodLabel}>{mood.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select emotions you're experiencing:</Text>
        <View style={styles.emotionsContainer}>
          {emotions.map((emotion, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.emotionButton,
                { borderColor: emotion.color },
                selectedEmotions.includes(emotion.name) && {
                  backgroundColor: emotion.color,
                },
              ]}
              onPress={() => handleEmotionToggle(emotion)}
            >
              <Text style={[
                styles.emotionText,
                { color: emotion.color },
                selectedEmotions.includes(emotion.name) && {
                  color: 'white',
                },
              ]}>
                {emotion.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Writing Prompts</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {prompts.map((prompt, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.promptButton,
                selectedPrompt === prompt && styles.selectedPrompt,
              ]}
              onPress={() => handlePromptSelect(prompt)}
            >
              <Text style={[
                styles.promptText,
                selectedPrompt === prompt && styles.selectedPromptText,
              ]}>
                {prompt}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Journal Entry</Text>
        <TextInput
          style={styles.journalInput}
          placeholder={selectedPrompt}
          placeholderTextColor="#999"
          value={journalEntry}
          onChangeText={setJournalEntry}
          multiline
          numberOfLines={8}
        />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveEntry}>
          <Ionicons name="save" size={20} color="white" />
          <Text style={styles.saveButtonText}>Save Entry</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clearButton} onPress={() => {
          setJournalEntry('');
          setSelectedMood(null);
          setSelectedEmotions([]);
        }}>
          <Ionicons name="trash" size={20} color="#E74C3C" />
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tips}>
        <Text style={styles.tipsTitle}>💡 Journaling Tips</Text>
        <Text style={styles.tipsText}>
          • Write freely without worrying about grammar or structure{'\n'}
          • Be honest about your feelings{'\n'}
          • Focus on the present moment{'\n'}
          • Celebrate small wins and progress
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
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  section: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  moodButton: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    minWidth: 70,
  },
  selectedMood: {
    borderColor: '#4A90E2',
    backgroundColor: '#E3F2FD',
  },
  moodEmoji: {
    fontSize: 24,
    marginBottom: 5,
  },
  moodLabel: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  emotionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  emotionButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: 'transparent',
    width: '48%',
    alignItems: 'center',
  },
  emotionText: {
    fontSize: 14,
    fontWeight: '500',
  },
  promptButton: {
    padding: 15,
    marginRight: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
    minWidth: 200,
  },
  selectedPrompt: {
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2',
  },
  promptText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  selectedPromptText: {
    color: 'white',
    fontWeight: '500',
  },
  journalInput: {
    borderWidth: 1,
    borderColor: '#e9ecef',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    textAlignVertical: 'top',
    minHeight: 150,
    backgroundColor: '#f8f9fa',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 0.45,
    justifyContent: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E74C3C',
    flex: 0.45,
    justifyContent: 'center',
  },
  clearButtonText: {
    color: '#E74C3C',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  tips: {
    backgroundColor: '#E8F5E8',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },
  tipsText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default JournalingScreen;
