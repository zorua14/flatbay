import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  Feather,
  Foundation,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import Gallery from "../components/Gallery";
import PersonDetails from "../components/PersonDetails";

import { useSelector, useDispatch } from "react-redux";
import { setProfilePicture } from "../redux/profilePictureSlice";
const TopTab = createMaterialTopTabNavigator();
const Profile = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  //const [image, setImage] = useState(null);
  const image = useSelector((state) => state.profilePicture);
  const dispatch = useDispatch();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      //setImage(result.assets[0].uri);
      dispatch(setProfilePicture(result.assets[0].uri));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Profile</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Feather
              name="settings"
              size={24}
              color="black"
              style={{ marginHorizontal: 10 }}
            />
          </View>
        </View>
        <View style={styles.person}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{ uri: image }}
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
                borderRadius: 60,
                right: -15,
                backgroundColor: "gray",
              }}
            />
            <TouchableOpacity
              style={{
                left: -10,
                bottom: -10,

                height: 30,
                width: 30,
                borderRadius: 15,
                padding: 3,
              }}
            >
              <Feather
                name="edit-2"
                size={24}
                color="black"
                onPress={pickImage}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#FED807",
              width: 120,
              borderRadius: 25,
              padding: 5,
              top: -30,
            }}
          >
            <Text style={{ color: "black", alignSelf: "center", fontSize: 18 }}>
              10% Complete
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              top: -15,
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>John Doe</Text>
            <Foundation
              name="male-symbol"
              size={30}
              color="gray"
              style={{ marginLeft: 10 }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 16 }}>22 Years | </Text>
          <Text style={{ fontSize: 16 }}>IT Engineer | </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons name="google-maps" size={24} color="red" />
            <Text style={{ marginLeft: 5, fontSize: 16 }}>
              Coimbatore, Tamilnadu
            </Text>
          </View>
        </View>

        <TopTab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName; //MARK: - SCROLLVIEW for gallery

              if (route.name === "Gallery") {
                iconName = "bars";
              } else if (route.name === "Details") {
                iconName = "user-circle-o";
              }

              return <FontAwesome name={iconName} size={24} color={color} />;
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#FED807",
            tabBarInactiveTintColor: "gray",
            tabBarIndicatorStyle: { backgroundColor: "#FED807" },
            tabBarStyle: {
              elevation: 0, // Remove shadow on Android
              shadowOpacity: 0, // Remove shadow on iOS
              borderBottomWidth: 0, // Remove bottom border
            },
          })}
        >
          <TopTab.Screen name="Gallery" component={Gallery} />
          <TopTab.Screen name="Details" component={PersonDetails} />
        </TopTab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  person: {
    alignItems: "center",
    marginTop: 20,
  },
});
