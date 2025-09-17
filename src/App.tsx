import TodoContextProvider from './context/todoContextProvider'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <TodoContextProvider >
      <AppRoutes />
    </TodoContextProvider>
  )
}

export default App