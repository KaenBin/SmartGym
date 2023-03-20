import React, {useState, useEffect} from 'react';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';

import Icon from 'react-native-vector-icons/FontAwesome5'

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Image,
} from 'react-native';

const HomeScreen = () => {
  // const [search, setSearch] = useState('');
  // const [filteredDataSource, setFilteredDataSource] = useState([]);
  // const [masterDataSource, setMasterDataSource] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       setFilteredDataSource(responseJson);
  //       setMasterDataSource(responseJson);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // const searchFilterFunction = (text) => {
  //   // Check if searched text is not blank
  //   if (text) {
  //     // Inserted text is not blank
  //     // Filter the masterDataSource
  //     // Update FilteredDataSource
  //     const newData = masterDataSource.filter(
  //       function (item) {
  //         const itemData = item.title
  //           ? item.title.toUpperCase()
  //           : ''.toUpperCase();
  //         const textData = text.toUpperCase();
  //         return itemData.indexOf(textData) > -1;
  //     });
  //     setFilteredDataSource(newData);
  //     setSearch(text);
  //   } else {
  //     // Inserted text is blank
  //     // Update FilteredDataSource with masterDataSource
  //     setFilteredDataSource(masterDataSource);
  //     setSearch(text);
  //   }
  // };

  // const ItemView = ({item}) => {
  //   return (
  //     // Flat List Item
  //     <Text
  //       style={styles.itemStyle}
  //       onPress={() => getItem(item)}>
  //       {item.id}
  //       {'.'}
  //       {item.title.toUpperCase()}
  //     </Text>
  //   );
  // };

  // const ItemSeparatorView = () => {
  //   return (
  //     // Flat List Item Separator
  //     <View
  //       style={{
  //         height: 0.5,
  //         width: '100%',
  //         backgroundColor: '#C8C8C8',
  //       }}
  //     />
  //   );
  // };

  // const getItem = (item) => {
  //   // Function for click on an item
  //   alert('Id : ' + item.id + ' Title : ' + item.title);
  // };
{/*, justifyContent: 'space-between',*/}
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#D1FFFE", alignContent: 'stretch'}}>
      <View style={styles.navigationBar}>
        <Text style={{marginTop: 50, marginBottom: 25, fontSize: 33, color: 'white', alignSelf: 'center'}}>
            Welcome to the home page
        </Text>
        <Text style={{fontSize: 13, color: 'white', alignSelf: 'center'}}>
            Here's where we provide you amazing features of the app
        </Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          // onChangeText={text}
          // value={search}
          underlineColorAndroid="transparent"
          placeholder="🔍Search"
          placeholderTextColor='white'
        />
      </View>
      <Image 
        style={styles.imageStyle}
        source={require('../../assets/images/strong-man-training-gym.jpg')}
      />
      <View style={{flex: 3, flexDirection: 'row', alignSelf: 'flex-end'}}>
        <View style={styles.containerBox}>
          <Icon name="calendar-alt" style={styles.iconStyle}/>
          <Text style={styles.textBox}>Training History</Text>
          <Icon name="calendar-alt" style={styles.iconStyle}/>
          <Text style={styles.textBox}>Training History</Text>
        </View>
        <View style={styles.containerBox}>
          <Icon name="calendar-alt" style={styles.iconStyle}/>
          <View style={styles.textBox}>
            <Text style={styles.textStyle}>Training</Text>
            <Text style={styles.textStyle}>History</Text>
          </View>
          <Icon name="calendar-alt" style={styles.iconStyle}/>
          <Text style={styles.textBox}>Training History</Text>
        </View>
        <View style={styles.containerBox}>
          <Icon name="calendar-alt" style={styles.iconStyle}/>
          <Text style={styles.textBox}>Training History</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: '#3300C6',
    height: "25%",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  container: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: '#C1FDFF',
  },
  imageStyle: {
    alignSelf: 'center',
    height: 200,
    width: "75%",
  },
  iconStyle: {
    fontSize: 70,
    marginTop: 20,
    color: 'black',
  },
  textBox: {
    height: '15%',
    width: '75%',
    backgroundColor: '#ECECEC',
    borderRadius: 20,
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  textStyle: {
    fontWeight: 'bold',
    // fontSize
  },
  textInputStyle: {
    height: 50,
    borderWidth: 1,
    margin: 5,
    borderColor: 'black',
    backgroundColor: '#3300C6',
    borderRadius: 10,
    textAlign: 'center',
    color: 'white'
  },
  containerBox: {
    flex: 1, 
    alignItems: 'center'
  },
});

export default HomeScreen;