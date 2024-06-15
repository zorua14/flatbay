import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { addImage } from "../redux/imagesSlice";
const { width, height } = Dimensions.get("window");
const Gallery = () => {
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();
  //const [images, setImages] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      // setImages([...images, { uri: result.assets[0].uri }]);
      dispatch(addImage({ uri: result.assets[0].uri }));
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <View style={styles.commentContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white" }}>+6</Text>
          <Entypo name="message" size={14} color="white" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white" }}>+4</Text>
          <AntDesign name="heart" size={14} color="white" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white" }}>+8</Text>
          <Entypo name="add-user" size={14} color="white" />
        </View>
      </View>
    </View>
  );

  const renderAddButton = () => (
    <TouchableOpacity style={styles.addButtonContainer} onPress={pickImage}>
      <AntDesign name="plus" size={30} color="white" />
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={[...images, { addButton: true }]}
      renderItem={({ item }) =>
        item.addButton ? renderAddButton() : renderItem({ item })
      }
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
      style={styles.flatList}
    />
  );
};

export default Gallery;

const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  imageContainer: {
    // flex: 1,
    margin: 5,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width / 3 - 15,
    height: width / 3 - 15,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  commentContainer: {
    position: "absolute",
    bottom: 8, // Adjust this to position the text correctly
    left: 8, // Adjust this to position the text correctly
    right: 8, // Adjust this if needed for more padding
    justifyContent: "space-around",
    flexDirection: "row",
  },
  addButtonContainer: {
    margin: 5,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 10,
    width: width / 3 - 15,
    height: width / 3 - 15,
  },
});
