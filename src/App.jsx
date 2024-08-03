import { Quiz } from "./components/Quiz";
import { QuizProvider } from "./store/QuizContext";

function App() {
  return <QuizProvider>
    <Quiz />
  </QuizProvider>;
}

export default App;
