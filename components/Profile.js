import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import Svg, {
  Circle,
  Defs,
  G,
  Line,
  LinearGradient,
  Mask,
  Path,
  Rect,
  Stop,
} from "react-native-svg";

export const Profile = (props) => (
    <Svg
      width={200}
      height={200}
      viewBox="0 0 235 235"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={117.5} cy={117.5} r={117.5} fill="#CDCDCD" />
      <Mask
        id="a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={235}
        height={235}
      >
        <Circle cx={117.5} cy={117.5} r={117.5} fill="#CDCDCD" />
      </Mask>
      <G mask="url(#a)" fill="gray">
        <Circle cx={118} cy={93} r={51} />
        <Circle cx={118} cy={250} r={100} />
      </G>
    </Svg>
  );