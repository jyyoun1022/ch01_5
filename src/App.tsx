// import * as D from './data'
import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'

export default function App() {
  return (
    <ul>
      <ClassComponent href="https://google.com" text="go to Google" />
      <ArrowComponent href="https://twitter.com" text="go To Twitter" />
    </ul>
  )
}
