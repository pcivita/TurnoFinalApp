import React from "react";
import Svg, { Path } from "react-native-svg";
import { Themes } from "../../assets/Themes";

const Kudos = ({ color, size, notFilled }) => (
  <Svg width={size} height={size} viewBox="0 0 23 25" fill="none">
    <Path
      d="M18.4369 23.3744L6.55134 18.9103C6.19952 18.7851 5.88461 18.5727 5.6356 18.2927C5.3866 18.0127 5.2115 17.6741 5.12644 17.3081C5.04138 16.942 5.04908 16.5603 5.14884 16.198C5.24859 15.8357 5.4372 15.5046 5.69729 15.235L13.1524 7.72308C13.4278 7.463 13.7639 7.27718 14.1296 7.18287C14.4953 7.08855 14.8786 7.08879 15.2442 7.18355C15.6097 7.27831 15.9456 7.46454 16.2207 7.72496C16.4957 7.98538 16.7011 8.31157 16.8177 8.67328L21.2303 20.6493C21.3529 21.0373 21.3656 21.4521 21.2669 21.8469C21.1682 22.2417 20.9621 22.601 20.6718 22.8842C20.3815 23.1674 20.0185 23.3634 19.6236 23.45C19.2288 23.5366 18.8178 23.5104 18.4369 23.3744V23.3744Z"
      stroke={color}
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={(color === Themes.colors.salmon && !notFilled) ? color : undefined}
    />
    <Path
      d="M1 12.4921C1.79011 12.0478 2.71539 11.9137 3.59774 12.1156"
      stroke={color}
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.05685 7.38231C4.55299 6.61694 4.34417 5.6924 4.46969 4.78271"
      stroke={color}
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.14899 1C8.52537 2.9249 8.60744 5.01132 9.3803 6.88045"
      stroke={color}
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Kudos;
