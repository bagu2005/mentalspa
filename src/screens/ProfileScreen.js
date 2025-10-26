import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AnalyticsComponent from '../components/AnalyticsComponent';

const ProfileScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [weeklyReports, setWeeklyReports] = useState(true);

  const handleEditProfile = () => {
    Alert.alert('Edit Profile', 'Profile editing feature would be implemented here.');
  };

  const handleViewHistory = () => {
    Alert.alert('Session History', 'View your past sessions and progress.');
  };

  const handleSettings = () => {
    Alert.alert('Settings', 'Additional settings and preferences.');
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive', onPress: () => console.log('Logout') },
      ]
    );
  };

  const stats = [
    { label: 'Sessions Completed', value: '12', icon: 'checkmark-circle' },
    { label: 'Days Streak', value: '7', icon: 'flame' },
    { label: 'PFA Progress', value: '40%', icon: 'school' },
    { label: 'Journal Entries', value: '25', icon: 'book' },
  ];

  const [showAnalytics, setShowAnalytics] = useState(false);

  const menuItems = [
    {
      title: 'Edit Profile',
      icon: 'person',
      onPress: handleEditProfile,
    },
    {
      title: 'Session History',
      icon: 'time',
      onPress: handleViewHistory,
    },
    {
      title: 'Analytics & Insights',
      icon: 'analytics',
      onPress: () => setShowAnalytics(true),
    },
    {
      title: 'Privacy Settings',
      icon: 'shield',
      onPress: handleSettings,
    },
    {
      title: 'Help & Support',
      icon: 'help-circle',
      onPress: () => Alert.alert('Help', 'Contact support for assistance.'),
    },
    {
      title: 'About',
      icon: 'information-circle',
      onPress: () => Alert.alert('About', 'Mental Health App v1.0.0'),
    },
  ];

  if (showAnalytics) {
    return (
      <View style={styles.container}>
        <View style={styles.analyticsHeader}>
          <TouchableOpacity onPress={() => setShowAnalytics(false)}>
            <Ionicons name="arrow-back" size={24} color="#4A90E2" />
          </TouchableOpacity>
          <Text style={styles.analyticsTitle}>Analytics & Insights</Text>
          <View style={{ width: 24 }} />
        </View>
        <AnalyticsComponent />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={40} color="white" />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.userEmail}>john.doe@university.edu</Text>
            <Text style={styles.userStatus}>Student • Active</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Ionicons name="create" size={20} color="#4A90E2" />
        </TouchableOpacity>
      </View>

      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Your Progress</Text>
        <View style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <Ionicons name={stat.icon} size={24} color="#4A90E2" />
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>Settings</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="notifications" size={24} color="#4A90E2" />
            <Text style={styles.settingTitle}>Push Notifications</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#767577', true: '#4A90E2' }}
            thumbColor={notifications ? '#fff' : '#f4f3f4'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="moon" size={24} color="#4A90E2" />
            <Text style={styles.settingTitle}>Dark Mode</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#767577', true: '#4A90E2' }}
            thumbColor={darkMode ? '#fff' : '#f4f3f4'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="analytics" size={24} color="#4A90E2" />
            <Text style={styles.settingTitle}>Weekly Reports</Text>
          </View>
          <Switch
            value={weeklyReports}
            onValueChange={setWeeklyReports}
            trackColor={{ false: '#767577', true: '#4A90E2' }}
            thumbColor={weeklyReports ? '#fff' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.menuSection}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={item.onPress}
          >
            <View style={styles.menuItemContent}>
              <Ionicons name={item.icon} size={24} color="#4A90E2" />
              <Text style={styles.menuItemTitle}>{item.title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#BDC3C7" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.achievementsSection}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.achievementGrid}>
          <View style={[styles.achievement, styles.achievementUnlocked]}>
            <Ionicons name="trophy" size={24} color="#F39C12" />
            <Text style={styles.achievementTitle}>First Session</Text>
          </View>
          <View style={[styles.achievement, styles.achievementUnlocked]}>
            <Ionicons name="star" size={24} color="#F39C12" />
            <Text style={styles.achievementTitle}>Week Streak</Text>
          </View>
          <View style={[styles.achievement, styles.achievementLocked]}>
            <Ionicons name="medal" size={24} color="#BDC3C7" />
            <Text style={styles.achievementTitle}>PFA Complete</Text>
          </View>
          <View style={[styles.achievement, styles.achievementLocked]}>
            <Ionicons name="ribbon" size={24} color="#BDC3C7" />
            <Text style={styles.achievementTitle}>Helper</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out" size={20} color="#E74C3C" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 2,
  },
  userEmail: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 2,
  },
  userStatus: {
    fontSize: 12,
    color: '#27AE60',
    fontWeight: '500',
  },
  editButton: {
    padding: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
  },
  statsSection: {
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
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginVertical: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  settingsSection: {
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
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    color: '#2c3e50',
    marginLeft: 15,
  },
  menuSection: {
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 16,
    color: '#2c3e50',
    marginLeft: 15,
  },
  achievementsSection: {
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
  achievementGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  achievement: {
    width: '48%',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  achievementUnlocked: {
    backgroundColor: '#FFF8E1',
    borderWidth: 1,
    borderColor: '#F39C12',
  },
  achievementLocked: {
    opacity: 0.5,
  },
  achievementTitle: {
    fontSize: 12,
    color: '#2c3e50',
    marginTop: 8,
    textAlign: 'center',
    fontWeight: '500',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    margin: 15,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E74C3C',
  },
  logoutText: {
    fontSize: 16,
    color: '#E74C3C',
    marginLeft: 8,
    fontWeight: '500',
  },
  analyticsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  analyticsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
});

export default ProfileScreen;
