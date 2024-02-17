import { Tabs } from 'expo-router';
import { icons } from 'lucide-react-native';
import { FC } from 'react';
import { Text } from 'react-native';
import { cn } from '~/lib/utils';

// creating custom type for tab
export type tab = {
  name?: string;
  Icon: keyof typeof icons;
  label?: string;
  className?: string;
  size?: number;
};

// creating custom type for BottomTab
interface BottomTabProps {
  headershown?: boolean;
  floating?: boolean;
  elevation?: number;
  padding?: number;
  height?: number;
  backgroundColor?: string;
  shadowColor?: string;
  tabBarRadius?: number;
  activeColor?: string;
  inactiveColor?: string;
  iconClass?: string;
  labelClass?: string;
  showLabel?: boolean;
  tabHeaderShown?: boolean;
  filled?: boolean;
  TabData?: tab[];
}

// creating custom type for TabBarIcon
interface TabBarIconProps {
  icon: keyof typeof icons;
  className?: string;
  size?: number;
  filled?: boolean;
  filledColor?: string;
  strokeWidth?: number;
  strokeColor?: string;
}

// Tabicon Component
export const TabIcon: FC<TabBarIconProps> = ({
  icon,
  className,
  size,
  filled,
  filledColor,
  strokeWidth,
  strokeColor,
}) => {
  const Icon = icons[icon];

  return (
    <Icon
      size={size ? size : 25}
      className={className}
      fill={filled ? filledColor : 'none'}
      strokeWidth={strokeWidth}
      color={strokeColor}
    />
  );
};

// tab label
export const TabLabel = ({
  label,
  classname,
  style,
}: {
  label?: string;
  classname?: string;
  style: object;
}) => {
  return (
    <>
      <Text className={classname} style={style}>
        {label}
      </Text>
    </>
  );
};

<!-- Bottom Tab component -->
const BottomTab: FC<BottomTabProps> = ({
  headershown,
  floating,
  elevation,
  padding,
  height,
  backgroundColor,
  shadowColor,
  TabData,
  tabBarRadius,
  activeColor,
  inactiveColor,
  iconClass,
  labelClass,
  showLabel,
  tabHeaderShown,
  filled,
}) => {
  return (
    <Tabs
      screenOptions={{
        headerShown: headershown ? headershown : false,
        tabBarStyle: {
          // NOTE: custom styles for tab bar
          position: 'absolute',
          bottom: floating ? (padding ? padding : 20) : 0,
          left: floating ? (padding ? padding : 20) : 0,
          right: floating ? (padding ? padding : 20) : 0,
          height: height ? height : 80,
          elevation: floating ? elevation : 0,
          shadowColor: shadowColor ? shadowColor : '#000',
          borderRadius: floating ? (tabBarRadius ? tabBarRadius : 25) : 0,
          backgroundColor: backgroundColor ? backgroundColor : '#18181b',
          borderColor: backgroundColor ? backgroundColor : '#18181b',
          paddingBottom: showLabel ? 10 : 0,
        },
      }}>
      {/* mapping all the screens in the tab */}
      {TabData!.map((item, index) => {
        const active = activeColor ? activeColor : '#ffffff';
        const inactive = inactiveColor ? inactiveColor : '#71717a';

        return (
          <Tabs.Screen
            key={index}
            name={item.name}
            options={{
              tabBarShowLabel: showLabel ? showLabel : false,
              headerShown: tabHeaderShown ? tabHeaderShown : false,
              tabBarIcon(props) {
                return (
                  <TabIcon
                    icon={item.Icon}
                    size={item.size}
                    className={cn(`${props.focused ? active : inactive}`, iconClass)}
                    filled={filled}
                    filledColor={filled ? (props.focused ? active : inactive) : 'none'}
                    strokeWidth={filled ? 1 : 2}
                    strokeColor={props.focused ? active : inactive}
                  />
                );
              },
              tabBarLabel(props) {
                return (
                  <TabLabel
                    label={item.label}
                    classname={cn(`text-md font-normal text-center`, labelClass)}
                    style={{ color: props.focused ? active : inactive }}
                  />
                );
              },
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default BottomTab;
