import React, {useState, useEffect} from 'react';
import {Calendar} from 'react-native-calendars';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/Foundation'
import Icon4 from 'react-native-vector-icons/FontAwesome'
import moment from 'moment';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  // FlatList,
  TextInput,
  Image,
  // Button,
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
  container: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: '#EFFEFF',
  },
  containerBox: {
    flex: 1, 
    alignItems: 'center',
  },
  imageStyle: {
    alignSelf: 'center',
    height: 150,
    width: "65%",
    marginBottom: 10,
  },
  iconStyle: {
    fontSize: 60,
    // marginTop: 10,
    marginBottom: 10,
    color: 'black',
  },
  navigationBar: {
    backgroundColor: '#2F486D',
    height: "25%",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  opcaityStyle: {
    alignItems: 'center',
    marginBottom: 0,
  },
  textBox: {
    height: '30%',
    width: 100,
    backgroundColor: '#ECECEC',
    borderRadius: 20,
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
    // alignContent: 'center',
    // textAlign: 'center',
    justifyContent: 'center',
  },  
  textHCMUT: {
    alignSelf: 'center',
    color: '#1976D2',
  },  
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    margin: 10,
    borderColor: 'black',
    backgroundColor: '#2F486D',
    borderRadius: 20,
    textAlign: 'center',
    color: '#BEBEBE'
  },  
  textIntro: {
    fontSize: 13, 
    color: 'white', 
    alignSelf: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 12,
    // textAlign: 'center',
    // justifyContent: 'center',
  },
  textWelcome: {
    marginTop: 50, 
    marginBottom: 25, 
    fontSize: 33, 
    color: 'white', 
    alignSelf: 'center',
  },
});