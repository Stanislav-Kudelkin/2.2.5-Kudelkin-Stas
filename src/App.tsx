import './App.css'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [value, setValue] = useLocalStorage('inputValue', '')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <>
      <p>
        <label style={{ marginRight: '10px' }}>Сохраненное значение:</label>
        {value}
      </p>
      <p>
        <input value={value} onChange={handleChange} />
      </p>
    </>
  )
}

export default App
