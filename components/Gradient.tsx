import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "@/constants";

const Gradient = ({
  children,
  radius,
  color_1,
  color_2,
}: {
  children: React.ReactNode;
  radius?: number;
  color_1?: string;
  color_2?: string;
}) => {
  return (
    <>
      <LinearGradient
        style={{
          borderRadius: radius!==undefined ? radius : 12,
          justifyContent: "center",
          alignItems: "center",
        }}
        colors={[
          color_1 === undefined ? COLORS.purple_gradient.color_1 : color_1,
          color_2 === undefined ? COLORS.purple_gradient.color_2 : color_2,
        ]}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 1, y: 1 }}
      >
        {children}
      </LinearGradient>
    </>
  );
};


export const Overlay = ({children, radius}: {
  children?: React.ReactNode,
  radius?: number,
}) => {
  return (
<LinearGradient colors={["transparent", "rgba(0,0,0, 0.8)"]} style={{borderRadius: radius}}>
  {children}
</LinearGradient>
  )
}
export default Gradient;
