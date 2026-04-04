const WaveDivider = ({ flip = false, color = "hsl(var(--background))" }: { flip?: boolean; color?: string }) => (
  <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <path
        d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z"
        fill={color}
      />
    </svg>
  </div>
);

export default WaveDivider;