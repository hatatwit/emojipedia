import Card from "./components/Card";
import emojis from "./emojipedia";

function App() {
  return (
    <div>
       <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojis.map(emoji => 
            <Card 
              key={emoji.id}
              emoji={emoji.emoji}
              name={emoji.name}
              meaning={emoji.meaning}
            />
        )}
      </dl>
    </div>
  );
}

export default App;
