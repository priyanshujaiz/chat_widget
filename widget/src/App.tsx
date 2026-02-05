import { useWidgetStore } from './store/useWidgetStore';
import { Launcher } from './components/Launcher';
import { ChatWindow } from './components/ChatWindow';
import { AnimatePresence } from 'framer-motion';

function App() {
  const isOpen = useWidgetStore((state) => state.isOpen);

  return (
    <>
      <AnimatePresence>
        {isOpen && <ChatWindow key="chat-window" />}
      </AnimatePresence>
      <Launcher />
    </>
  );
}

export default App;

