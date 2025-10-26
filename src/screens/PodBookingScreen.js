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

const PodBookingScreen = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState('Library Level 2');
  const [selectedDate, setSelectedDate] = useState('Tue 27');
  const [selectedTime, setSelectedTime] = useState('10:00 - 10:15 AM');
  const [selectedOption, setSelectedOption] = useState(null);

  const locations = [
    'Library Level 2',
    'Student Center Level 1',
    'Campus Wellness Center',
    'Quiet Study Room A',
  ];

  const dates = [
    { day: 'Mon', date: '26', fullDate: 'Mon 26' },
    { day: 'Tue', date: '27', fullDate: 'Tue 27' },
    { day: 'Wed', date: '28', fullDate: 'Wed 28' },
    { day: 'Thu', date: '29', fullDate: 'Thu 29' },
    { day: 'Fri', date: '30', fullDate: 'Fri 30' },
  ];

  const timeSlots = [
    '10:00 - 10:15 AM',
    '10:30 - 10:45 AM',
    '11:00 - 11:15 AM',
    '11:30 - 11:45 AM',
    '12:00 - 12:15 PM',
    '12:30 - 12:45 PM',
    '1:00 - 1:15 PM',
    '1:30 - 1:45 PM',
    '2:00 - 2:15 PM',
    '2:30 - 2:45 PM',
  ];

  const podOptions = [
    {
      id: 'mindfulness',
      title: 'Guided Mindfulness',
      duration: '10 min',
      icon: 'phone-portrait',
      description: 'Guided meditation and breathing exercises',
    },
    {
      id: 'quiet',
      title: 'Quiet Space Only',
      duration: '18 min',
      icon: 'leaf',
      description: 'Peaceful environment for reflection',
    },
  ];

  const handleLocationSelect = () => {
    Alert.alert(
      'Select Location',
      'Choose your preferred pod location',
      locations.map((location) => ({
        text: location,
        onPress: () => setSelectedLocation(location),
      }))
    );
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.fullDate);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option.id);
  };

  const handleConfirmBooking = () => {
    if (!selectedOption) {
      Alert.alert('Selection Required', 'Please select a pod option.');
      return;
    }

    Alert.alert(
      'Booking Confirmed',
      `Your pod session is booked for ${selectedDate} at ${selectedTime} in ${selectedLocation}. You'll receive a QR code on your Appointments page.`,
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Appointments'),
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Book a Pod</Text>
        <Text style={styles.subtitle}>Find a safe space to relax and recharge.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <TouchableOpacity style={styles.locationButton} onPress={handleLocationSelect}>
          <Text style={styles.locationText}>{selectedLocation}</Text>
          <Ionicons name="chevron-down" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Date</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateContainer}>
          {dates.map((date, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dateButton,
                selectedDate === date.fullDate && styles.selectedDate,
              ]}
              onPress={() => handleDateSelect(date)}
            >
              <Text style={[
                styles.dateDay,
                selectedDate === date.fullDate && styles.selectedDateText,
              ]}>
                {date.day}
              </Text>
              <Text style={[
                styles.dateNumber,
                selectedDate === date.fullDate && styles.selectedDateText,
              ]}>
                {date.date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Available Time Slots</Text>
        <View style={styles.timeGrid}>
          {timeSlots.map((time, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.timeSlot,
                selectedTime === time && styles.selectedTimeSlot,
              ]}
              onPress={() => handleTimeSelect(time)}
            >
              <Text style={[
                styles.timeText,
                selectedTime === time && styles.selectedTimeText,
              ]}>
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pod Options</Text>
        {podOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionCard,
              selectedOption === option.id && styles.selectedOption,
            ]}
            onPress={() => handleOptionSelect(option)}
          >
            <View style={styles.optionContent}>
              <Ionicons
                name={option.icon}
                size={24}
                color={selectedOption === option.id ? '#4A90E2' : '#666'}
              />
              <View style={styles.optionText}>
                <Text style={[
                  styles.optionTitle,
                  selectedOption === option.id && styles.selectedOptionText,
                ]}>
                  {option.title} ({option.duration})
                </Text>
                <Text style={styles.optionDescription}>{option.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmBooking}>
        <Text style={styles.confirmButtonText}>Confirm Booking</Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        You'll receive a QR code on your Appointments page.
      </Text>
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
  locationButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  locationText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  dateContainer: {
    flexDirection: 'row',
  },
  dateButton: {
    padding: 15,
    marginRight: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 60,
  },
  selectedDate: {
    backgroundColor: '#4A90E2',
  },
  dateDay: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  dateNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 2,
  },
  selectedDateText: {
    color: 'white',
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeSlot: {
    width: '48%',
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  selectedTimeSlot: {
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2',
  },
  timeText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  selectedTimeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  optionCard: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  selectedOption: {
    backgroundColor: '#E3F2FD',
    borderColor: '#4A90E2',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 15,
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  selectedOptionText: {
    color: '#4A90E2',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
  },
  confirmButton: {
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
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  note: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

export default PodBookingScreen;
