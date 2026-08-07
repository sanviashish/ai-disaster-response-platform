"use client";

import { useState } from "react";

import AppLayout from "@/components/layout/AppLayout";
import Dashboard from "@/components/dashboard/Dashboard";

import LiveMapScreen from "@/components/screens/LiveMapScreen";
import SOSScreen from "@/components/screens/SOSScreen";
import RescueTeamsScreen from "@/components/screens/RescueTeamsScreen";
import ResourcesScreen from "@/components/screens/ResourcesScreen";
import HospitalsScreen from "@/components/screens/HospitalsScreen";
import ReliefCampScreen from "@/components/screens/ReliefCampScreen";
import AnalyticsScreen from "@/components/screens/AnalyticsScreen";
import ReportsScreen from "@/components/screens/ReportsScreen";
import SettingsScreen from "@/components/screens/SettingsScreen";

export default function Home() {

  const [activeScreen, setActiveScreen] = useState("dashboard");

  const renderScreen = () => {

    switch (activeScreen) {

      case "dashboard":
        return <Dashboard />;

      case "livemap":
        return <LiveMapScreen />;

      case "sos":
        return <SOSScreen />;

      case "teams":
        return <RescueTeamsScreen />;

      case "resources":
        return <ResourcesScreen />;

      case "hospitals":
        return <HospitalsScreen />;

      case "relief":
        return <ReliefCampScreen />;

      case "analytics":
        return <AnalyticsScreen />;

      case "reports":
        return <ReportsScreen />;

      case "settings":
        return <SettingsScreen />;

      default:
        return <Dashboard />;

    }

  };

  return (

    <AppLayout
      activeScreen={activeScreen}
      setActiveScreen={setActiveScreen}
    >

      {renderScreen()}

    </AppLayout>

  );

}