import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HistoryListScreen } from "../screens/HistoryListScreen"
import { HomeScreen } from "../screens/HomeScreen"
import { Ionicons } from "@expo/vector-icons"

export const BottomTabNavigation = () => {

  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            const getIconName = () => {
              switch (route.name) {
                case "Home":
                  return "home"
                case "History":
                  return "time"
                default:
                  return ""
              }
            }
            return (<Ionicons name={getIconName()} size={size} color={color} />)
          }
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={HistoryListScreen} />
    </Tab.Navigator>
  )
}