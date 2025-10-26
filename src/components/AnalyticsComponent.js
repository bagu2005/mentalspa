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

const AnalyticsComponent = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const analyticsData = {
    week: {
      sessionsCompleted: 3,
      moodAverage: 3.2,
      journalEntries: 5,
      pfaProgress: 15,
      crisisSupportUsed: 0,
    },
    month: {
      sessionsCompleted: 12,
      moodAverage: 3.1,
      journalEntries: 18,
      pfaProgress: 40,
      crisisSupportUsed: 1,
    },
    year: {
      sessionsCompleted: 45,
      moodAverage: 3.3,
      journalEntries: 67,
      pfaProgress: 85,
      crisisSupportUsed: 2,
    },
  };

  const currentData = analyticsData[selectedPeriod];

  const handleFeedback = () => {
    Alert.alert(
      'Feedback Survey',
      'Thank you for using our mental health app. Your feedback helps us improve our services.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Take Survey', onPress: () => console.log('Survey started') },
      ]
    );
  };

  const handlePreSessionSurvey = () => {
    Alert.alert(
      'Pre-Session Survey',
      'How are you feeling before your session?',
      [
        { text: 'Stressed', onPress: () => console.log('Pre-session: Stressed') },
        { text: 'Anxious', onPress: () => console.log('Pre-session: Anxious') },
        { text: 'Neutral', onPress: () => console.log('Pre-session: Neutral') },
        { text: 'Good', onPress: () => console.log('Pre-session: Good') },
      ]
    );
  };

  const handlePostSessionSurvey = () => {
    Alert.alert(
      'Post-Session Survey',
      'How do you feel after your session?',
      [
        { text: 'Much Better', onPress: () => console.log('Post-session: Much Better') },
        { text: 'Better', onPress: () => console.log('Post-session: Better') },
        { text: 'Same', onPress: () => console.log('Post-session: Same') },
        { text: 'Worse', onPress: () => console.log('Post-session: Worse') },
      ]
    );
  };

  const periods = [
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
    { label: 'Year', value: 'year' },
  ];

  const getMoodEmoji = (average) => {
    if (average >= 4) return '😄';
    if (average >= 3) return '😊';
    if (average >= 2) return '😐';
    return '😢';
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Analytics & Insights</Text>
        <Text style={styles.subtitle}>Track your mental health journey</Text>
      </View>

      <View style={styles.periodSelector}>
        {periods.map((period) => (
          <TouchableOpacity
            key={period.value}
            style={[
              styles.periodButton,
              selectedPeriod === period.value && styles.selectedPeriod,
            ]}
            onPress={() => setSelectedPeriod(period.value)}
          >
            <Text style={[
              styles.periodText,
              selectedPeriod === period.value && styles.selectedPeriodText,
            ]}>
              {period.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Ionicons name="checkmark-circle" size={24} color="#27AE60" />
          <Text style={styles.statValue}>{currentData.sessionsCompleted}</Text>
          <Text style={styles.statLabel}>Sessions Completed</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="happy" size={24} color="#F39C12" />
          <Text style={styles.statValue}>
            {getMoodEmoji(currentData.moodAverage)} {currentData.moodAverage.toFixed(1)}
          </Text>
          <Text style={styles.statLabel}>Average Mood</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="book" size={24} color="#8E44AD" />
          <Text style={styles.statValue}>{currentData.journalEntries}</Text>
          <Text style={styles.statLabel}>Journal Entries</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="school" size={24} color="#4A90E2" />
          <Text style={styles.statValue}>{currentData.pfaProgress}%</Text>
          <Text style={styles.statLabel}>PFA Progress</Text>
        </View>
      </View>

      <View style={styles.surveysSection}>
        <Text style={styles.sectionTitle}>Feedback & Surveys</Text>
        
        <TouchableOpacity style={styles.surveyButton} onPress={handlePreSessionSurvey}>
          <Ionicons name="play-circle" size={24} color="#4A90E2" />
          <View style={styles.surveyInfo}>
            <Text style={styles.surveyTitle}>Pre-Session Survey</Text>
            <Text style={styles.surveyDescription}>Rate your mood before sessions</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.surveyButton} onPress={handlePostSessionSurvey}>
          <Ionicons name="checkmark-circle" size={24} color="#27AE60" />
          <View style={styles.surveyInfo}>
            <Text style={styles.surveyTitle}>Post-Session Survey</Text>
            <Text style={styles.surveyDescription}>Rate your mood after sessions</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.surveyButton} onPress={handleFeedback}>
          <Ionicons name="chatbubbles" size={24} color="#8E44AD" />
          <View style={styles.surveyInfo}>
            <Text style={styles.surveyTitle}>General Feedback</Text>
            <Text style={styles.surveyDescription}>Share your app experience</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.insightsSection}>
        <Text style={styles.sectionTitle}>Insights</Text>
        
        <View style={styles.insightCard}>
          <Ionicons name="trending-up" size={20} color="#27AE60" />
          <Text style={styles.insightText}>
            Your mood has improved by 15% this month compared to last month.
          </Text>
        </View>

        <View style={styles.insightCard}>
          <Ionicons name="calendar" size={20} color="#4A90E2" />
          <Text style={styles.insightText}>
            You've maintained a 7-day streak of daily check-ins.
          </Text>
        </View>

        <View style={styles.insightCard}>
          <Ionicons name="school" size={20} color="#8E44AD" />
          <Text style={styles.insightText}>
            You're making great progress in your PFA training!
          </Text>
        </View>
      </View>

      <View style={styles.referralSection}>
        <Text style={styles.sectionTitle}>Professional Referrals</Text>
        <View style={styles.referralCard}>
          <Ionicons name="medical" size={24} color="#E74C3C" />
          <View style={styles.referralInfo}>
            <Text style={styles.referralTitle}>Mind Spa Referrals</Text>
            <Text style={styles.referralCount}>2 referrals this month</Text>
            <Text style={styles.referralDescription}>
              Based on your usage patterns and feedback
            </Text>
          </View>
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
  periodSelector: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 12,
    padding: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  periodButton: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  selectedPeriod: {
    backgroundColor: '#4A90E2',
  },
  periodText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  selectedPeriodText: {
    color: 'white',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginVertical: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  surveysSection: {
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  surveyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 10,
  },
  surveyInfo: {
    marginLeft: 15,
    flex: 1,
  },
  surveyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 2,
  },
  surveyDescription: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  insightsSection: {
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
  insightCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 10,
  },
  insightText: {
    fontSize: 14,
    color: '#2c3e50',
    marginLeft: 15,
    flex: 1,
  },
  referralSection: {
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
  referralCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF5F5',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#E74C3C',
  },
  referralInfo: {
    marginLeft: 15,
    flex: 1,
  },
  referralTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 2,
  },
  referralCount: {
    fontSize: 14,
    color: '#E74C3C',
    fontWeight: '500',
    marginBottom: 2,
  },
  referralDescription: {
    fontSize: 12,
    color: '#7f8c8d',
  },
});

export default AnalyticsComponent;
