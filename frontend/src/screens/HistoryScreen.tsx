import React, {useState, useEffect} from 'react';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import { todayString } from 'react-native-calendars/src/expandableCalendar/commons';

const CalendarTheme = {
  arrowColor: 'white',
  calendarBackground: '#1C2B41',
  dayTextColor: 'white',
  monthTextColor: 'white',
  textDisabledColor: 'gray',
  todayTextColor: 'white',
}

const HistoryScreen = ({navigation}) => {
  const [currentDate, setCurrentDate] = useState(moment()
     .utcOffset('+01:00')
     .format('YYYY-MM-DD'));
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1C2B41'}}>
      <Calendar 
        style={styles.calendar} 
        enableSwipeMonths={true} 
        theme={CalendarTheme} 
        markedDates={
          {[currentDate]: {selected: true, selectedColor: '#589C5F'},
          }} />
    </SafeAreaView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: '#1C2B41',
  },
});