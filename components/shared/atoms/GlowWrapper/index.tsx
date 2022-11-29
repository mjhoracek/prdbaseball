import { Container, useMantineTheme, ContainerProps } from "@mantine/core";
import { ReactNode } from "react";

export interface GlowWrapperProps<T> extends ContainerProps {
  children: ReactNode;
}

export const GlowWrapper = <T,>({ children }: GlowWrapperProps<T>) => {
  return (
    <Container
      sx={({ other }) => ({
        position: "relative",
        width: "fit-content",
        padding: 0,

        "::before": {
          zIndex: -1,
          content: '""',
          position: "absolute",
          inset: -1.75,
          borderRadius: "4px",
          background: other.gradients.conicGradient,
          border: "2px solid transparent",
          WebkitMask: ` linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        },
      })}
    >
      <Container
        sx={({ other }) => ({
          width: "fit-content",
          padding: 0,

          "::before": {
            content: '""',
            position: "absolute",
            inset: -1.5,
            background: other.gradients.conicGradient,
            filter: "blur(35px)",
            zIndex: -2,
          },
        })}
      >
        {children}
      </Container>
    </Container>
  );
};
