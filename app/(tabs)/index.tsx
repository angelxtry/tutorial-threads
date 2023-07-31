import {Platform, RefreshControl, SafeAreaView, ScrollView } from 'react-native';

import {useRef} from "react";
import LottieView from "lottie-react-native";

export default function TabOneScreen() {
  const animationRef = useRef<any>(null)
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {animationRef.current?.play()}}
            tintColor={"transparent"}
          />
        }
      >
        <LottieView
          ref={animationRef}
          source={require("../../assets/lottie-animations/threads.json")}
          loop={false}
          autoPlay
          style={{ width: 90, height: 90, alignSelf: "center" }}
          onAnimationFinish={() => {alert("Animation Finished")} }
        />
      </ScrollView>
    </SafeAreaView>
  );
}
