export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-surface"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0a0f1a_0%,rgba(10,15,26,0.9)_28%,rgba(10,15,26,0.62)_62%,#030508_100%)]" />
      <div className="absolute left-1/2 top-[-9rem] h-[22rem] w-[70vw] -translate-x-1/2 rounded-full bg-blue-400/18 blur-[90px]" />
      <div className="absolute left-[-18%] top-[16%] h-[34rem] w-[34rem] rounded-full bg-blue-900/45 blur-[120px]" />
      <div className="absolute right-[-14%] top-[34%] h-[30rem] w-[30rem] rounded-full bg-blue-400/10 blur-[110px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(96,165,250,0.12),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,#0a0f1a_0%,rgba(10,15,26,0.12)_28%,rgba(10,15,26,0)_60%)]" />
    </div>
  );
}
