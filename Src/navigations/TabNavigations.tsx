import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps, TabParamList } from '../../types';
import TabBarButton from '../components/TabBarButton';
import { HomeScreen, MenuScreen, MoreScreen } from '../screens';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigation(
  { }: StackScreenProps<'Tabs'>,
) {
  const { bottom } = useSafeAreaInsets();

  const height = useMemo(() => 60 + bottom, [bottom]);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      safeAreaInsets={{ bottom }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          height,
          paddingTop: 5,
          paddingBottom: Math.max(bottom, 8),
          backgroundColor: '#FFFFFF',

          borderTopWidth: 0,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,

          elevation: 12,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.08,
          shadowRadius: 8,
        },

        tabBarBackground: () => (
          <View style={styles.tabBackground} />
        ),
      }}>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarAccessibilityLabel: 'Home',
          tabBarButton: props => (
            <TabBarButton
              {...props}
              ActiveIcon="home"
              InActiveIcon="home-outline"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarAccessibilityLabel: 'Menu',
          tabBarButton: props => (
            <TabBarButton
              {...props}
              ActiveIcon="grid"
              InActiveIcon="grid-outline"
            />
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarAccessibilityLabel: 'More',
          tabBarButton: props => (
            <TabBarButton
              {...props}
              ActiveIcon="ellipsis-horizontal-circle"
              InActiveIcon="ellipsis-horizontal-circle-outline"
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBackground: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});