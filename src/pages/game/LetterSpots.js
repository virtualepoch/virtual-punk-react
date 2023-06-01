import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { Cylinder, Text3D, Center } from "@react-three/drei";
import { useGameStore } from "./store";
import { letters } from "./letters";

export const LetterSpots = () => {
  const { level, currentLetter, currentStage } = useGameStore((state) => ({
    level: state.level,
    currentLetter: state.currentLetter,
    currentStage: state.currentStage,
  }));

  if (!level) {
    return null;
  }

  return level[currentStage].map((letter, index) => (
    <group key={letter.letter} rotation-y={(index / level[currentStage].length) * Math.PI * 2}>
      <group position-x={3.5} position-z={-3.5}>
        <RigidBody colliders={false} type="fixed">
          <CylinderCollider args={[0.25 / 2, 1]} />
          <Cylinder scale={(1, 0.25, 1)} />
        </RigidBody>

        <Center position-y={0.9}>
          <Text3D font={"./fonts/Roboto_Bold.json"} size={0.92} rotation-y={-(index / level[currentStage].length) * Math.PI * 2}>
            {letters[0].letter}
            <meshNormalMaterial />
          </Text3D>
        </Center>
      </group>
    </group>
  ));
};
