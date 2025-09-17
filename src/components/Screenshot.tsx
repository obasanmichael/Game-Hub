import {  Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props{
    gameId: number;
}
const Screenshot = ({ gameId }: Props) => {
    const { data, isLoading, error } = useScreenshots(gameId);
    if (error) throw error;
    if (isLoading) return <div><Spinner /></div>
  return (
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} mt={4}>
          {data?.results.map(file => <Image key={file.id} src={file.image}/>)}
      </SimpleGrid>
  )
}

export default Screenshot