import { useCallback, useEffect, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { createNewNumber } from "../actions/lottoNumberAction"
import { Header } from "../header/Header"
import Spacer from "../Spacer"
import LottoNumberView from "./LottoNumberView"

export const HomeScreen = (props) => {
  const numbers = useSelector((state) => state.numbers.currentNumber)

  const dispatch = useDispatch()

  const onPressGetNumber = useCallback(() => {
    dispatch(createNewNumber())
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 12,
        flexDirection: "column",
      }}
    >
      <Header>
        <Header.Title title="HOME" />
      </Header>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: 250,
            flexDirection: "column",
            paddingHorizontal: 24,
            backgroundColor: "white",
            borderColor: "grey",
            justifyContent: "center",
          }}
        >
          {numbers.length === 6 && <LottoNumberView numbers={numbers} />}
        </View>
        <Spacer
          isVertical
          spacing={20}
        />
        <TouchableOpacity onPress={onPressGetNumber}>
          <View
            style={{
              backgroundColor: "black",
              paddingVertical: 24,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
              }}
            >
              로또 번호 추출하기
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
