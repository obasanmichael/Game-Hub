import { Box, Spinner } from "@chakra-ui/react";
import useGameTrailer from "../hooks/useGameTrailer";
interface Props{
    gameId: number;
}
const Trailer = ({gameId}: Props) => {
    const { data, isLoading, error } = useGameTrailer(gameId);

    const trailer = data?.results[0]; // get first trailer
    if (!trailer) return null;

    if (error) throw error;
    if (isLoading) return <div><Spinner /></div>
  return (
    <>
      <Box w="100%" borderRadius="lg" overflow="hidden" mt={4}>
        <video
          src={trailer.data["480"]}
          poster={trailer.preview}
          controls
          style={{ width: "100%", height: "auto", borderRadius: "inherit" }}
        />
      </Box>
    </>
  );
}

export default Trailer