import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G clipPath="url(#clip0_3330_19954)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.552 22.133C15.112 22.08 11.031 21.516 6.757 17.243C2.484 12.969 1.921 8.88897 1.867 7.44797C1.787 5.25197 3.469 3.11897 5.412 2.28597C5.64598 2.18494 5.9022 2.14647 6.15553 2.17435C6.40886 2.20222 6.65059 2.29548 6.857 2.44497C8.457 3.61097 9.561 5.37497 10.509 6.76197C10.7176 7.0667 10.8068 7.43752 10.7596 7.80377C10.7123 8.17002 10.532 8.5061 10.253 8.74797L8.302 10.197C8.20774 10.265 8.14139 10.365 8.11528 10.4783C8.08916 10.5916 8.10505 10.7105 8.16 10.813C8.602 11.616 9.388 12.812 10.288 13.712C11.189 14.612 12.441 15.45 13.3 15.942C13.4077 16.0024 13.5345 16.0193 13.6543 15.9892C13.774 15.9591 13.8777 15.8842 13.944 15.78L15.214 13.847C15.4475 13.5368 15.7919 13.329 16.1752 13.2672C16.5584 13.2053 16.9508 13.2941 17.27 13.515C18.677 14.489 20.319 15.574 21.521 17.113C21.6826 17.3209 21.7854 17.5684 21.8187 17.8296C21.8519 18.0908 21.8144 18.3562 21.71 18.598C20.873 20.551 18.755 22.214 16.552 22.133Z"
        fill="#808080"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3330_19954">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
