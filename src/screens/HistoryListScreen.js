import { useState, useCallback } from "react"
import { FlatList, View, Text } from "react-native"
import { useSelector } from "react-redux"
import { Header } from "../header/Header"
import LottoNumberView from "./LottoNumberView"

export const HistoryListScreen = (props) => {
  // const [history] = useState([
  //   { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
  //   { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
  //   { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
  //   { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
  //   { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
  // ])

  const history = useSelector((state) => state.numbers.history)

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="HISTORY" />
      </Header>

      <FlatList
        style={{ flex: 1 }}
        data={history}
        contentContainerStyle={{
          paddingVertical: 24,
        }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 12,
                marginHorizontal: 24,
                height: 120,
                backgroundColor: "white",
              }}
            >
              <Text style={{ fontSize: 16 }}>{item.date}</Text>
              <LottoNumberView numbers={item.numbers} />
            </View>
          )
        }}
      />
    </View>
  )
}
