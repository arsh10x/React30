import "./App.css";
import DarkTheme from "./components/Theme/DarkTheme";
import Theme from "./components/Theme/Theme";
import { ThemeProvider } from "./components/Theme/ThemeContex";
// import ColorPicker from "./components/ColorPicker";
// import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
// import Pagination from "./components/Pagination";
// import Search from "./components/Search";
// import Weather from "./components/Weather";
// import Authentication from "./components/Authentication";
// import Quote from "./components/Quotes/Quote";
// import FileUploader from "./components/FileUploader";
// import BackgroundChange from "./components/BackgroundChange";
// import Routing from "./components/Routing/Routing";
// import ToDoList from "./components/ToDoList";
// import Api from "./components/Api";
// import Timer from "./components/Timer";
// import Hello from "./components/Hello";
// import Two from "./components/Two";
// import Form from "./components/Form";
// import List from "./components/List";
// import Toggle from "./components/Toggle";
function App() {
  // const items = ["Item 1", "Item 2", "Items 3", "Items 4", "hello1", "hello2"];
  return (
    <div className="container">
      <h1>30 React Exercise</h1>
      <div className="boxStyle">
        {/* <Hello /> */}
        {/* <Counter /> */}
        {/* <Form /> */}
        {/* <List /> */}
        {/* <Toggle /> */}
        {/* <Api /> */}
        {/* <Timer /> */}
        {/* <ToDoList /> */}
        {/* <BackgroundChange /> */}
        {/* <Routing /> */}
        {/* <Quote /> */}
        {/* <FileUploader /> */}
        {/* <Authentication/> */}
        {/* <Weather /> */}
        {/* <Search items={items} /> */}
        {/* <Pagination items={items} itemsPerPage={2} /> */}
        {/* <ColorPicker /> */}
        {/* <HamburgerMenu /> */}
        <ThemeProvider>
          <div className="App">
            <DarkTheme />
            <Theme />
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
