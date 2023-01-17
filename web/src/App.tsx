import './styles.css';

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return <button>{props.title}</button>;
}

function App() {
  return (
    <div>
      <button title='' />
    </div>
  );
}

export default App;
