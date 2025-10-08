import OverwatchCounterPick from './overwatch_counter_pick';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <OverwatchCounterPick />
      <Analytics />
    </div>
  );
}

export default App;