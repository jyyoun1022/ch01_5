const rootDiv = document.getElementById('root')
if (rootDiv) {
  rootDiv.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e
    console.log('mouse click occurs on rootDiv', isTrusted, target, bubbles)
  }
}

if (rootDiv) {
  rootDiv.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e
    console.log('mouse click also occurs on rootDiv', isTrusted, target, bubbles)
  }
}

export default function CopyMe() {
  return <div>OnClick</div>
}