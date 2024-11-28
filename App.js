import "react-native-gesture-handler";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleListScreen from "./src/components/screens/ModuleListScreen";
import ModuleAddScreen from "./src/components/screens/ModuleAddScreen";
import ModuleModifyScreen from "./src/components/screens/ModuleModifyScreen";
import ModuleViewScreen from "./src/components/screens/ModuleViewScreen";
import UserListScreen from "./src/components/screens/UserListScreen";
import UserAddScreen from "./src/components/screens/UserAddScreen";
import UserViewScreen from "./src/components/screens/UserViewScreen";
import UserModifyScreen from "./src/components/screens/UserModifyScreen";

// Create navigators
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// Module Stack
const ModuleStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "white" },
      headerTintColor: "black",
    }}
  >
    <Stack.Screen
      name="ModuleListScreen"
      component={ModuleListScreen}
      options={{
        title: "List Modules",
        headerTitle: (props) => (
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text>{props.children}</Text>
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="ModuleAddScreen"
      component={ModuleAddScreen}
      options={{ title: "Add Modules" }}
    />
    <Stack.Screen
      name="ModuleViewScreen"
      component={ModuleViewScreen}
      options={{ title: "View Modules" }}
    />
    <Stack.Screen
      name="ModuleModifyScreen"
      component={ModuleModifyScreen}
      options={{ title: "Modify Modules" }}
    />
  </Stack.Navigator>
);

// User Stack
const UserStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "white" },
      headerTintColor: "black",
    }}
  >
    <Stack.Screen
      name="UserListScreen"
      component={UserListScreen}
      options={{ title: "List Users" }}
    />
    <Stack.Screen
      name="UserAddScreen"
      component={UserAddScreen}
      options={{ title: "Add Users" }}
    />
    <Stack.Screen
      name="UserViewScreen"
      component={UserViewScreen}
      options={{ title: "View Users" }}
    />
    <Stack.Screen
      name="UserModifyScreen"
      component={UserModifyScreen}
      options={{ title: "Modify Users" }}
    />
  </Stack.Navigator>
);

// Drawer
export const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Modules"
          component={ModuleStack}
          options={{ title: "Module Crudler" }}
        />
        <Drawer.Screen
          name="Users"
          component={UserStack}
          options={{ title: "User Crudler" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
