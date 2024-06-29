import { MantineProvider } from "@mantine/core"
import Footer from "./components/App/Footer";
import '@mantine/core/styles.css';
import AddTodoForm from "./components/AddTodoForm";
import FloatIndicator from "./components/ui/FloatingIndicator";
import ToggleTheme from "./components/App/toggleTheme/ToggleTheme";


function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="container mx-auto flex flex-col space-y-8 justify-center items-center lg:w-1/2 mt-28">
        <MantineProvider defaultColorScheme="dark" cssVariablesSelector="html" withCssVariables={false} deduplicateCssVariables={false} withStaticClasses={false} withGlobalClasses={false} >
          <ToggleTheme/>
          <FloatIndicator/>
          <AddTodoForm/> 
          <Footer />
        </MantineProvider>
        
      </div>
    </div>
  );
}

export default App


