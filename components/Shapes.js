import React from 'react';
import { Circle, G, Path, Rect } from 'react-native-svg';
import { Center, Icon } from 'native-base';

export function TriangleShape({ size, color }) {
  return (
    <Center>
      <Icon size={size} viewBox="0 0 129 112">
        <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
          <Path
            d="M62.7679 1C63.5377 -0.33333 65.4623 -0.333333 66.2321 1L128.153 108.25C128.923 109.583 127.96 111.25 126.421 111.25H2.57919C1.03959 111.25 0.0773323 109.583 0.847133 108.25L62.7679 1Z"
            fill={color}
          />
        </G>
      </Icon>
    </Center>
  );
}

export function SquareShape({ size, color }) {
  return (
    <Center>
      <Icon size={size} viewBox="0 0  113 113">
        <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
          <Rect width="113" height="113" rx="2" fill={color} />
        </G>
      </Icon>
    </Center>
  );
}

export function CircleShape({ size, color }) {
  return (
    <Center>
      <Icon size={size} viewBox="0 0 112 112">
        <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
          <Circle cx="56" cy="56" r="56" fill={color} />
        </G>
      </Icon>
    </Center>
  );
}

export function HexagonShape({ size, color }) {
  return (
    <Center>
      <Icon size={size} viewBox="0 0 98 112">
        <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
          <Path
            d="M48 0.577351C48.6188 0.220086 49.3812 0.220085 50 0.57735L96.4974 27.4226C97.1162 27.7799 97.4974 28.4402 97.4974 29.1547V82.8453C97.4974 83.5598 97.1162 84.2201 96.4974 84.5774L50 111.423C49.3812 111.78 48.6188 111.78 48 111.423L1.50258 84.5774C0.883778 84.2201 0.502579 83.5598 0.502579 82.8453V29.1547C0.502579 28.4402 0.883777 27.7799 1.50258 27.4226L48 0.577351Z"
            fill={color}
          />
        </G>
      </Icon>
    </Center>
  );
}
