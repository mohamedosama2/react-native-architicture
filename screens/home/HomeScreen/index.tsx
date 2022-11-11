import * as React from "react";
import { Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  selectCounter,
} from "../../../utils/store/reducers/counter";
import { Text, View } from "native-base";
import ScrollWrapper from "../../../utils/ScrollWrapper";

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const [counter, setCounter] = React.useState(0);
  const count = useSelector(selectCounter);
  const disbatch = useDispatch();
  return (
    <ScrollWrapper>
      <View backgroundColor={"green.400"} width={100} height={900}>
        <Text
          backgroundColor={"green.400"}
          color="black"
          paddingY={"16"}
          fontFamily="body"
          fontWeight="100"
          fontStyle="normal"
        >
          {count} Home Screen
        </Text>
        <Button
          title="Add"
          onPress={() => {
            disbatch(increment());
          }}
        />
        <Text
          backgroundColor={"green.400"}
          color="black"
          paddingY={"16"}
          fontFamily="body"
          fontWeight="100"
          fontStyle="normal"
        >
          {counter}
        </Text>
        <Button
          title="Add"
          onPress={() => {
            setCounter((prev) => prev + 1);
          }}
        />
      </View>
    </ScrollWrapper>
  );
};

export default React.memo(HomeScreen);
