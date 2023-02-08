import { useEffect } from 'react';
import axios from "axios";
import { BASE_URL } from "@env";
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import PrimaryButton from './PrimaryButton';
import PrimaryTitle from './PrimaryTitle';
import { useState } from 'react';
const EditUser = ({route,navigation}) => {
    const user=route.params.userName;
    const userMail=route.params.userEmail;
    const[name,setName]=useState(user);
    const[email,setEmail]=useState(userMail);
    const updateUsers = async () => {
        try {
          console.log("UUUSSSER ID on Edit User Page",  route.params.userId);
          console.log(BASE_URL);
          console.log(name,email);
            const fetchedUser = await axios.patch(`${BASE_URL}updateUser`, {
              id:  route.params.userId.toString(),
              name,
              email,
            });
            const response = await fetchedUser.data;
            if(response.success) {
                Alert.alert("Updated Successfully","User has been updated successfully",[
                    {
                        text:'ok',
                        onPress:()=>navigation.navigate("Admin")
                    }
                ]);
                // navigation.navigate("Admin");
            }
            console.log("the Response from Single User API on Edit User Screen",response)
        } catch (error) {
          console.log("error ", error.message);
        }
      };
  return (
    <View style={styles.rootContainer}>
    <PrimaryTitle title="Update User" />
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={(e) => setName(e)}
      />
    </View>
    <View style={styles.descripContainer}>
      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={(e) => setEmail(e)}
      />
    </View>
    <View style={styles.buttonContainer}>
      <PrimaryButton buttonText="Update User" onTap={updateUsers} />
    </View>
  </View>
  )
}

export default EditUser

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingTop: 100,
        alignItems: "center",
      },
      inputContainer: {
        borderWidth: 2,
        backgroundColor: "#defff1",
        borderColor: "#58fcb9",
        width: 250,
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 4,
        marginVertical: 8,
      },
      descripContainer: {
        borderWidth: 2,
        backgroundColor: "#defff1",
        borderColor: "#58fcb9",
        width: 250,
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 4,
        marginVertical: 8,
      },
      buttonContainer: {
        marginTop: 10,
      },
})