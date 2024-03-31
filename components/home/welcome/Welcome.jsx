import { useState } from "react";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router"; 
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobTypes] = useState("Full-time")
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Pacifique</Text>
        <Text style={styles.WelcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
          style={styles.searchInput}
          value=""
          onChange={()=>{}}
          placeholder="what are you looking for?" 
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image 
          source={icons.search}
          style={styles.searchBtnImage}/>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
        data={jobTypes}
        renderItem={({item}) =>(
          <TouchableOpacity 
          style={styles.tab(activeJobType, item)}
          onPress={()=>{
            setActiveJobTypes(item);
            router.push(`/search/${item}`)
          }}>
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle = {{ columnGap: SIZES.small}}
        horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
