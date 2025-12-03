import { LinearGradient, SkFont, Text as SkiaText, useFont, vec } from "@shopify/react-native-skia";
import * as React from "react";
import { ScrollView, Text, View } from "react-native";
import { useDerivedValue, type SharedValue } from "react-native-reanimated";
import { Area, CartesianChart, PointsArray, useChartPressState } from "victory-native";

export default function VictoryScreen() {
  const font = useFont(require("../../assets/fonts/PlusJakartaSans-Regular.ttf"), 14);
  const { state: singleState, isActive: isSingleChartActive } = useChartPressState({ x: 0, y: { highTmp: 0 } });
  const { state } = useChartPressState({ x: 0, y: { highTmp: 0, other: 0 } });
  // const { state } = useChartPressState({ x: 0, y: { highTmp: 0, other: 0, other2: 0, other3: 0, other4: 0, } });

  const DATA = Array.from({ length: 365 }, (_, i) => ({
    day: i,
    highTmp: i * 2,
    other: 730 - i * 2,
    // other2: 530 - i * 2,
    // other3: 330,
    // other4: 130 - i,
  }));

  return (
    <ScrollView>
      <View style={{ height: 500, backgroundColor: "white", paddingHorizontal: 20 }}>
        <View
          style={{
            backgroundColor: "white",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 40,
            paddingHorizontal: 16,
            marginBottom: 40,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 40 }}>
            Victory Chart (Single)
          </Text>

          <View style={{ height: 300, width: "100%", paddingBottom: 50 }}>
            <CartesianChart
              data={DATA}
              xKey="day"
              yKeys={["highTmp"]}
              domainPadding={{ top: 30, right: 30 }}
              axisOptions={{ font }}
              chartPressState={singleState}
            >
              {({ points, chartBounds }) => {
                const currentPoint = points.highTmp ?? []

                return (
                  <>
                    <Area
                      points={points.highTmp}
                      y0={chartBounds.bottom}
                      animate={{ type: "timing", duration: 500 }}
                    >
                      <LinearGradient
                        start={vec(0, chartBounds.top)}
                        end={vec(0, chartBounds.bottom)}
                        colors={[
                          "rgba(255, 193, 7, 0.8)",
                          "rgba(255, 193, 7, 0.3)",
                        ]}
                      />
                    </Area>

                    {isSingleChartActive && (
                      <ToolTipForSingle
                        x={singleState.x.position}
                        y={singleState.y.highTmp.position}
                        value={singleState.y.highTmp.value}
                        points={currentPoint}
                        font={font}
                      // value={state.y.highTmp.value.value}
                      // font={font}
                      />
                    )}
                  </>
                )
              }}
            </CartesianChart>
          </View>
        </View>
      </View>

      <View style={{ height: 500, backgroundColor: "white", paddingHorizontal: 20 }}>
        <View
          style={{
            backgroundColor: "white",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 40,
            paddingHorizontal: 16,
            marginBottom: 40,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 40 }}>
            Victory Chart (Multi Chart)
          </Text>

          <View style={{ height: 300, width: "100%", paddingBottom: 50 }}>
            <CartesianChart
              data={DATA}
              xKey="day"
              yKeys={["highTmp", "other"]}
              // yKeys={["highTmp", "other", "other2", "other3", "other4"]}
              domainPadding={{ top: 30, right: 30 }}
              axisOptions={{ font }}
              chartPressState={state}
            >
              {({ points, chartBounds }) => {
                // const currentTMPPoint = points.highTmp ?? []
                // const currentOtherPoint = points.other ?? []

                return (
                  <>
                    <Area
                      points={points.highTmp}
                      y0={chartBounds.bottom}
                      animate={{ type: "timing", duration: 300 }}
                    >
                      <LinearGradient
                        start={vec(0, chartBounds.top)}
                        end={vec(0, chartBounds.bottom)}
                        colors={[
                          "rgba(255, 193, 7, 0.8)",
                          "rgba(255, 193, 7, 0.3)",
                        ]}
                      />
                    </Area>

                    <Area
                      points={points.other}
                      y0={chartBounds.bottom}
                      animate={{ type: "timing", duration: 300 }}
                    >
                      <LinearGradient
                        start={vec(0, chartBounds.top)}
                        end={vec(0, chartBounds.bottom)}
                        colors={[
                          "rgba(65, 105, 25, 0.8)",
                          "rgba(65, 105, 25, 0.3)",
                        ]}
                      />
                    </Area>

                    {/* <Area
                      points={points.other2}
                      y0={chartBounds.bottom}
                      animate={{ type: "timing", duration: 300 }}
                    >
                      <LinearGradient
                        start={vec(0, chartBounds.top)}
                        end={vec(0, chartBounds.bottom)}
                        colors={[
                          "rgba(65, 5, 25, 0.8)",
                          "rgba(65, 5, 25, 0.3)",
                        ]}
                      />
                    </Area>

                    <Area
                      points={points.other3}
                      y0={chartBounds.bottom}
                      animate={{ type: "timing", duration: 300 }}
                    >
                      <LinearGradient
                        start={vec(0, chartBounds.top)}
                        end={vec(0, chartBounds.bottom)}
                        colors={[
                          "rgba(65, 105, 125, 0.8)",
                          "rgba(65, 105, 125, 0.3)",
                        ]}
                      />
                    </Area>

                    <Area
                      points={points.other4}
                      y0={chartBounds.bottom}
                      animate={{ type: "timing", duration: 300 }}
                    >
                      <LinearGradient
                        start={vec(0, chartBounds.top)}
                        end={vec(0, chartBounds.bottom)}
                        colors={[
                          "rgba(65, 105, 225, 0.8)",
                          "rgba(65, 105, 225, 0.3)",
                        ]}
                      />
                    </Area> */}

                    {/* {isActive && (
                      <ToolTipForMulti
                        x={state.x.position}
                        y={state.y.highTmp.position}
                        y2={state.y.other.position}
                        points={currentTMPPoint}
                        points2={currentOtherPoint}
                        font={font}
                      // value={state.y.highTmp.value.value}
                      // font={font}
                      />
                    )} */}
                  </>
                )
              }}
            </CartesianChart>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function ToolTipForSingle({
  x,
  y,
  value,
  points,
  font
}: {
  x: SharedValue<number>;
  y: SharedValue<number>;
  value: SharedValue<number>;
  points: PointsArray;
  font: SkFont | null;
}) {
  const nearest = useDerivedValue(() => {
    "worklet";

    let min = Infinity;
    let result = points[0];

    for (const p of points) {
      const d = Math.abs(p.x - x.value);
      if (d < min) {
        min = d;
        result = p;
      }
    }

    return result;
  });

  const shiftedX = useDerivedValue(() => x.value - 20);

  const text = useDerivedValue(() => {
    return (nearest.value.yValue ?? 0).toFixed(2);
  });

  return <SkiaText x={shiftedX} y={y} text={text} font={font} />
}

// function ToolTipForMulti({
//   x,
//   y,
//   y2,
//   points,
//   points2,
//   font
// }: {
//   x: SharedValue<number>;
//   y: SharedValue<number>;
//   y2: SharedValue<number>;
//   points: PointsArray;
//   points2: PointsArray;
//   font: SkFont | null;
// }) {
//   const nearest = useDerivedValue(() => {
//     "worklet";

//     let min = Infinity;
//     let result = points[0];

//     for (const p of points) {
//       const d = Math.abs(p.x - x.value);
//       if (d < min) {
//         min = d;
//         result = p;
//       }
//     }

//     return result;
//   });

//   const nearest2 = useDerivedValue(() => {
//     "worklet";

//     let min = Infinity;
//     let result = points2[0];

//     for (const p of points2) {
//       const d = Math.abs(p.x - x.value);
//       if (d < min) {
//         min = d;
//         result = p;
//       }
//     }

//     return result;
//   });

//   const shiftedX = useDerivedValue(() => x.value - 20);

//   // Compute dynamic text (no render access) → SAFE
//   const text = useDerivedValue(() => {
//     return (nearest.value.yValue ?? 0).toFixed(2);
//   });

//   const text2 = useDerivedValue(() => {
//     return (nearest2.value.yValue ?? 0).toFixed(2);
//   });

//   return <>
//     <SkiaText x={shiftedX} y={y} text={text} font={font} />
//     <SkiaText x={shiftedX} y={y2} text={text2} font={font} />

// </>
// }