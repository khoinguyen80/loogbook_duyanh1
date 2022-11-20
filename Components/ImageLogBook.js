import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styleCofig";

function ImageLogBook() {
  const [listItem, setListItems] = useState([
    "https://thuviendohoa.vn/upload/images/items/hinh-anh-png-hoa-hong-phai-co-dien-554.jpg",
    "https://o.rada.vn/data/image/2021/01/21/top-trang-web-tai-anh-png-trong-suot-700.jpg",
    "https://img.lovepik.com/original_origin_pic/18/09/08/05ac91004feeb7bf58068f69c356b219.png_wh300.png",
  ]);
  const [url, setUrl] = useState("");
  const [down, setDown] = useState(0);

  const uploadImageToDatabasae = () => {
    if (!url) {
      Alert.alert("You have not entered data!");
      return;
    } else {
      setUrl("");
      setListItems([...listItem, url]);
      setDown(listItem.length - 1);
      alert("UpLoad Image succses!");
    }
  };

  const onBackward = (e) => {
    setDown((e) => e - 1);
  };
  const onForward = (e) => {
    setDown((e) => e + 1);
  };
  const onChageTextInputUrl = (e) => {
    setUrl(e);
  };
  console.log(listItem);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.Container_Image}>
        <Text style={{ fontSize: 24, textAlign: "center", color: "#000" }}>
          LogBook Native
        </Text>
        <Image
          style={styles.Image_Mini}
          source={{
            uri: listItem?.[down],
          }}
        />
        <View style={styles.Center_container}>
          <TouchableOpacity
            style={[styles.Button, { marginTop: 25 }]}
            onPress={onBackward}
            disabled={down === 0}
          >
            <Text style={styles.Button_LB}>Backward</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onForward}
            disabled={down === listItem.length - 1}
            style={[styles.Button, { marginTop: 25 }]}
          >
            <Text style={styles.Button_LB}>Forward</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ marginTop: 25 }}>URL</Text>
        <TextInput style={styles.input} onChangeText={onChageTextInputUrl} />
        <TouchableOpacity style={[styles.Button, { marginTop: 25 }]}>
          <Text style={styles.Button_LB} onPress={uploadImageToDatabasae}>
            Upload
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ImageLogBook;
