import ScriptBuilder from "@/components/ScriptBuilder";

export default function Page() {
  return (
    <main className="container">
      <header className="header">
        <div className="brand">
          <div className="logo" />
          <div>
            <h1 className="title">UGC CAD Reel Script Builder</h1>
            <div style={{ color: "#aab4d4" }}>Hook-first scripts for CAD training ads</div>
          </div>
        </div>
      </header>

      <section className="card" style={{ marginBottom: 16 }}>
        <ScriptBuilder />
      </section>

      <p className="footer">Tip: Choose exactly two tones. Keep it under 30?40 seconds.</p>
    </main>
  );
}
