import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AccountScreen from "../screens/Account";

const Stack = createNativeStackNavigator();

const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Accounts"
        component={AccountScreen}
        options={{
          title: "Mi Cuenta",
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigation;
