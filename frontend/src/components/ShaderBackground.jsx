// Simple animated dark background — no WebGL required, no crash risk
export default function ShaderBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 20% 10%, rgba(129,178,154,0.06) 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at 80% 90%, rgba(212,163,115,0.05) 0%, transparent 60%),
          radial-gradient(ellipse 100% 100% at 50% 50%, rgba(30,29,44,0.8) 0%, #0f0f13 100%)
        `,
      }}
    />
  )
}
