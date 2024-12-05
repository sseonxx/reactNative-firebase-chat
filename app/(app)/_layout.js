import { View, Text } from "react-native";
import React, { useEffect } from "react";
import "../../global.css";
import { AuthContextProvider, useAuth } from "../../context/authContext";
import { Slot, useSegments } from "expo-router";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segment = useSegments();

  useEffect(() => {
    // check if user is authendticated or not
  }, [isAuthenticated]);

  return <Slot />;
};
export default function _layout() {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
}
