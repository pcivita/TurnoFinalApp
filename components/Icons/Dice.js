import React from 'react';
import { Svg, G, Rect, Defs, ClipPath } from 'react-native-svg';

const Dice = ({color}) => (
  <Svg width={31} height={31} viewBox="0 0 44 44" fill="none">
    <Defs>
      <ClipPath id="clip0_1462_2217">
        <Rect
          y="22.0593"
          width="31.1966"
          height="30.9682"
          rx="3.92045"
          transform="rotate(-45 0 22.0593)"
          fill="white"
        />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip0_1462_2217)">
      <Rect
        width="5.17146"
        height="5.17146"
        rx="2.58573"
        transform="matrix(0.702981 -0.711209 0.702981 0.711209 18.6465 32.3005)"
        fill={color}
      />
      <Rect
        width="5.17146"
        height="5.17146"
        rx="2.58573"
        transform="matrix(0.702981 -0.711209 0.702981 0.711209 18.6465 21.9786)"
        fill={color}
      />
      <Rect
        width="5.17146"
        height="5.17146"
        rx="2.58573"
        transform="matrix(0.702981 -0.711209 0.702981 0.711209 8.2832 21.9786)"
        fill={color}
      />
      <Rect
        width="5.17146"
        height="5.17146"
        rx="2.58573"
        transform="matrix(0.702981 -0.711209 0.702981 0.711209 29.0117 21.9786)"
        fill={color}
      />
      <Rect
        width="5.17146"
        height="5.17146"
        rx="2.58573"
        transform="matrix(0.702981 -0.711209 0.702981 0.711209 18.6465 11.6566)"
        fill={color}
      />
    </G>
    <Rect
      x="2.77218"
      y="22.0593"
      width="27.2761"
      height="27.0477"
      rx="1.96023"
      transform="rotate(-45 2.77218 22.0593)"
      stroke={color}
      strokeWidth="3.92045"
    />
  </Svg>
);

export default Dice;
