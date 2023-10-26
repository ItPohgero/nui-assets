import { useColor } from "niu-assets-origin";
function App() {
  const { Slate } = useColor()
  return (
    <div>
      <p className="text-red-600">{Slate[300]} NIU Components</p>
    </div>
  );
}
export default App;
