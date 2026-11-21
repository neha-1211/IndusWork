import React from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import type {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

type IconName = React.ComponentProps<typeof Ionicons>['name'];

interface Props extends BottomTabBarButtonProps {
  ActiveIcon: IconName;
  InActiveIcon: IconName;
}

export default function TabBarButton({
  ActiveIcon,
  InActiveIcon,
  accessibilityState,
  accessibilityLabel,
  onPress,
  onLongPress,
  testID,
  style,
}: Props) {
  const isActive = accessibilityState?.selected ?? false;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={accessibilityState}
      testID={testID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={({pressed}) => [
        styles.container,
        style as StyleProp<ViewStyle>,
        pressed && styles.pressed,
      ]}>
      <View style={styles.iconWrapper}>
        <Ionicons
          name={isActive ? ActiveIcon : InActiveIcon}
          size={23}
          color={isActive ? '#2563EB' : '#8795A8'}
        />

        {isActive && <View style={styles.activeIndicator} />}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  activeIndicator: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#2563EB',
  },
  pressed: {
    opacity: 0.7,
  },
});