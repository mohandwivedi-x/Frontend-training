import TodoContextProvider from "./context/todoContextProvider";
import AppRoutes from "./routes/AppRoutes";
import { store } from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <TodoContextProvider>
        <AppRoutes />
      </TodoContextProvider>
    </Provider>
  );
};

export default App;
