import './App.css'
import { Outlet } from '@tanstack/react-router'
import { AudioProvider } from './audiocontext.tsx'
import { useAudio } from './audiocontext.tsx'
import { CardProvider } from './deckcontent.tsx'
import { AuthProvider } from './logincontext.tsx'
function AppContent() {
  const { clickvolume, clickmute, allvolume, allmute} = useAudio();
  //효과음 함수도 나중에 만들어야 함
  const playclicksound = () => {
    if (clickmute || allmute) return;
    
    const clicksound = new Audio("/sounds/click_sound.mp3");
    const finalVolume = (clickvolume / 100) * (allvolume / 100)/5;
    clicksound.volume = finalVolume;
    clicksound.play();
  };

  return (
    <div className="w-screen h-screen p-0 m-0" onClick={playclicksound}>
      <Outlet />
    </div>
  );
}
function App() {
  
    return (
    <AuthProvider>
      <CardProvider>
        <AudioProvider>
          <AppContent />
        </AudioProvider>
      </CardProvider>
    </AuthProvider>
  );
}

export default App
