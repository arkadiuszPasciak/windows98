import useTest from './use-test.hook'
import './test.scss'

export default function Test(): JSX.Element {
  const { count, setCountByOne } = useTest()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={''} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={''} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCountByOne()}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
