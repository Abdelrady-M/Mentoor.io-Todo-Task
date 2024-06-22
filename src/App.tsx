import { MantineProvider } from "@mantine/core"
import Footer from "./components/App/Footer";
import '@mantine/core/styles.css';
import AddTodoForm from "./components/AddTodoForm";


function App() {
  


  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="container mx-auto flex flex-col space-y-8 justify-end items-end lg:w-1/2 mt-28">
        <MantineProvider defaultColorScheme="dark" cssVariablesSelector="html" withCssVariables={false} deduplicateCssVariables={false} withStaticClasses={false} withGlobalClasses={false}>
         <AddTodoForm/> 
        </MantineProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App

