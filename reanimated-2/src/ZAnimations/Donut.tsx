import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Svg from "react-native-svg";

import Camera from "./components/Camera";
import ZEllipse from "./components/ZEllipse";
import ZRect from "./components/ZRect";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const useCamera = () => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  return { x, y };
};

const canvas = {
  x: width,
  y: width,
  z: width,
};

const strokeWidth = 0.1;
const colors = ["#FFC27A", "#7EDAB9", "#45A6E5", "#FE8777"];

const Arc = () => {
  const camera = useCamera();
  return (
    <View style={styles.container}>
      <View>
        <Svg
          width={canvas.x}
          height={canvas.y}
          viewBox={[-canvas.x / 2, -canvas.y / 2, canvas.x, canvas.y].join(" ")}
        >
          <ZEllipse
            rx={0.5}
            ry={0.5}
            strokeWidth={strokeWidth}
            stroke={colors[2]}
            canvas={canvas}
            camera={camera}
          />
          <ZRect
            width={1}
            height={1}
            strokeWidth={strokeWidth}
            stroke={colors[1]}
            canvas={canvas}
            camera={camera}
            fill
          />
        </Svg>
        <Camera camera={camera} canvas={canvas} />
      </View>
    </View>
  );
};

export default Arc;
