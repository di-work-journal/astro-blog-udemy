import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const [greeting, setGreeting] = useState(messages[0]);

  const randomMesseage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  return (
    <div>
      <h3>{greeting}！ 訪問いただきまして、ありがとうございます！</h3>
      <button onClick={() => setGreeting(randomMesseage())}>新しい挨拶</button>
    </div>
  );
}
