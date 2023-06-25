import { useEffect,useState } from "react";
import axios from "axios";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import BASE_URL from "../config/env.config";
const AllBill = () => {
const[bills,setBills]=useState([]);
  const getBills=async()=>{
    const response = await axios.get(`${BASE_URL}getAllBills`);
    console.log("The data come from API response ",response.data.data);
    setBills(response.data.data)
  }
  useEffect(() => {
    getBills();
  }, [])
  return (
    <View style={styles.rootContainer}>
       <ScrollView contentContainerStyle={{alignItems:'center',justifyContent:'center'}}>
   {bills.map((item)=>{
    console.log(item);
    const imagePathArray = item.image;
    const imagePath = imagePathArray[0];
    const imageUrl = `${BASE_URL}${imagePath}`;
    return(
      <View key={item._id} style={styles.Container}>
      <View style={styles.textContainer}>
        <View>
          {/*User name */}
          <Text style={styles.text}>{item?item.userName:""}</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        {/*Picture... */}
        <Image
          style={styles.image}
          source={{
            uri:imageUrl
          }}
        />
      </View>
    </View>
    )
   })}
    </ScrollView>
    </View>
  );
};

export default AllBill;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  Container: {
    width: "90%",
    marginVertical: 20,
    borderWidth:4,
    borderColor: "#58fcb9",
    backgroundColor: "#defff1",
    padding:4,
    borderRadius:8,
    flexDirection:"column-reverse",
    alignItems:"center",
    justifyContent:"center",
  },
  textContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 4,
    marginTop:8
  },
  imageContainer: {
    height: 150,
    width: "75%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});