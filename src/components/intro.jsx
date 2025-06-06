import { Player } from '@lottiefiles/react-lottie-player';

export default function Intro() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#fff8ef', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Player
        autoplay
        keepLastFrame
        src="/ahlan.json"
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
}