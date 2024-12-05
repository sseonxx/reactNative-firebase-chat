import React, { useEffect, useReducer } from "react";
import "../../global.css";
import { AuthContextProvider, useAuth } from "../../context/authContext";
import { Slot, useRouter, useSegments } from "expo-router";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // check if user is authendticated or not
    if (typeof isAuthenticated == "undefined") return;
    const inApp = segments[0] == "(app)";
    if (isAuthenticated && !inApp) {
      //redirect to home
      router.replace("home");
    } else if (isAuthenticated == false) {
      //redirect to
      router.replace("signIn");
    }
  }, [isAuthenticated]);

  return <Slot />;
};
export default function RootLayout() {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
}
