import "./index.css";
import Text from "./components/polymorphic/Text";

function App() {
  return (
    <>
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" size="sm">
        Label
      </Text>
    </>
  );
}

export default App;
