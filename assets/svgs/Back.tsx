import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M20.5 7L11.5 16L20.5 25" stroke="white" strokeWidth={2.25} strokeMiterlimit={10} strokeLinecap="square" />
  </Svg>
);
export default SVGComponent;
