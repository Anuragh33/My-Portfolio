export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#070b0a]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#070b0a_0%,rgba(7,11,10,0.9)_28%,rgba(7,11,10,0.62)_62%,#020403_100%)]" />
      <div className="absolute left-1/2 top-[-9rem] h-[22rem] w-[70vw] -translate-x-1/2 rounded-full bg-[#5ed29c]/18 blur-[90px]" />
      <div className="absolute left-[-18%] top-[16%] h-[34rem] w-[34rem] rounded-full bg-[#123f34]/45 blur-[120px]" />
      <div className="absolute right-[-14%] top-[34%] h-[30rem] w-[30rem] rounded-full bg-[#5ed29c]/10 blur-[110px]" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,transparent_24.95%,rgba(255,255,255,0.08)_25%,transparent_25.05%,transparent_49.95%,rgba(255,255,255,0.08)_50%,transparent_50.05%,transparent_74.95%,rgba(255,255,255,0.08)_75%,transparent_75.05%)] md:block" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,#070b0a_0%,rgba(7,11,10,0.12)_28%,rgba(7,11,10,0)_60%)]" />
    </div>
  );
}
