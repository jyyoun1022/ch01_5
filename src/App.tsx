import P from './P';

export default function App() {
  // const texts = [<p key="1">hello</p>, <p key="2">world</p>]

  // const texts = ['hellso', 'wordsld'].map((text, index) => {
  //   return <p key={index} children={text}></p>
  // })

  // return <div>{texts}</div>


  const texts = ['hello1', 'world1'].map((text, index) => {
    return <P key={index} children={text}></P>
  })

  return <div>{texts}</div>
}
