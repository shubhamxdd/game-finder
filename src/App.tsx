import { Grid, GridItem, Show } from "@chakra-ui/react"
import './App.css'

function App() {
  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}>
        <GridItem area={"nav"} bg="red.300">Nav</GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg="green.300">Aside</GridItem>
        </Show>
        <GridItem area={"main"} bg="blackAlpha.500">Main</GridItem>
      </Grid>
    </>
  )
}

export default App
