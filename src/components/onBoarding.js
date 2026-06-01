import Onboarding from "react-native-onboarding-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import LottieView from "lottie-react-native";
import { setItems } from "../utils/storage";

export default function OnBoarding() {

    const handleDone = async () => {
        try {
            await setItems("onboardingCompleted", "true");
            console.log("Onboarding status set to true");
        } catch (error) {
            console.error("Error setting onboarding status:", error);
        }
    };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Onboarding
        controlStatusBar={false}
        onDone={handleDone}
        pages={[
          {
            backgroundColor: "#b80000",
            image: (
              <LottieView
                autoPlay
                loop
                style={{ width: 200, height: 200 }}
                source={require("../../assets/animations/productivity.json")}
              />
            ),
            title: "1st Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#1c7600",
            image: (
              <LottieView
                autoPlay
                loop
                style={{ width: 200, height: 200 }}
                source={require("../../assets/animations/examTimer.json")}
              />
            ),
            title: "2nd Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#173eab",
            image: (
              <LottieView
                autoPlay
                loop
                style={{ width: 200, height: 200 }}
                source={require("../../assets/animations/timer.json")}
              />
            ),
            title: "3rd Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </SafeAreaView>
  );
}
