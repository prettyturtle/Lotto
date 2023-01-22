import { useCallback, useEffect, useState } from "react"
import { Animated, Text, View } from "react-native"

export default (props) => {
  const [viewHeight, setViewHeight] = useState(0)
  const [animatedValue] = useState(new Animated.Value(1))
  const getNumberBackgroundColor = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 10) % 6
    switch (randomNumber) {
      case 0:
        return "red"
      case 1:
        return "blue"
      case 2:
        return "grey"
      case 3:
        return "green"
      case 4:
        return "purple"
      default:
        return "black"
    }
  }, [])

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-viewHeight * 0.6, 0],
  })

  useEffect(() => {
    animatedValue.setValue(0)
    Animated.timing(animatedValue, {
      duration: 1000,
      toValue: 1,
    }).start()
  }, [props.numbers])

  return (
    <View
      onLayout={({ nativeEvent }) => {
        setViewHeight(nativeEvent.layout.height)
      }}
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {props.numbers.map((item) => {
        return (
          <Animated.View
            key={`lotto-${item}`}
            style={{
              backgroundColor: getNumberBackgroundColor(),
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              transform: [
                {
                  translateY: translateY,
                },
              ],
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
              }}
            >
              {item}
            </Text>
          </Animated.View>
        )
      })}
    </View>
  )
}
