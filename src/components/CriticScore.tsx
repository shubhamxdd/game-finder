import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 85 ? "green" : score > 60 ? "yellow" : "";
  return (
    <>
      <Badge fontSize="14px" paddingX={2} borderRadius="6px" colorScheme={color}>
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
