import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";

import initialUsers from "../../data/users.js";

const UserListScreen = () => {
  // Initialisations--
  const users = initialUsers;
  // State--
  // Handlers--
  const handleSelect = () => alert("Item selected");
  // View--
  return (
    <Screen>
      <ScrollView style={styles.container}>
        {users.map((user) => {
          return (
            <Pressable key={user.UserFirstname} onPress={handleSelect}>
              <View style={styles.item}>
                <Text style={styles.text}>
                  {user.UserFirstname} {user.UserLastname} {user.UserType}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  text: {
    fontSize: 16,
  },
});

export default UserListScreen;
