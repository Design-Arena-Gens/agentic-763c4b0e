"use client";

import { useMemo, useState } from "react";

type Tone = "Emotion" | "Value" | "Entertainment";

const tones: Tone[] = ["Emotion", "Value", "Entertainment"];

function generateHook(): string {
  const hooks = [
    "Stop scrolling. 30 seconds to upgrade your design career.",
    "From drafter to in-demand designer?here?s the fast track.",
    "If CAD feels confusing, watch this?it's simpler than you think.",
    "Your first paid CAD project could be 4 weeks away?listen.",
  ];
  return hooks[Math.floor(Math.random() * hooks.length)];
}

function generateEmotionalBeat(): string {
  const beats = [
    "I was stuck watching tutorials with zero progress?until I changed how I learned.",
    "I used to doubt if I was ?smart enough? for CAD. Turns out, I needed the right coach.",
    "Seeing my first 3D model render perfectly? Actual goosebumps?because it meant ?I can do this?.",
    "I went from confused to confident by following a step-by-step roadmap instead of random videos.",
  ];
  return beats[Math.floor(Math.random() * beats.length)];
}

function generateValueBeat(): string {
  const beats = [
    "You get industry-standard tools, mentor feedback, and real projects in one place.",
    "No fluff: short lessons, hands-on assignments, and portfolio-ready work.",
    "Live doubt-clearing, downloadable templates, and interview prep included.",
    "Master AutoCAD, SolidWorks, and Revit with job-focused modules.",
  ];
  return beats[Math.floor(Math.random() * beats.length)];
}

function generateEntertainmentBeat(): string {
  const beats = [
    "Watch this sketch turn into a 3D model in 3...2...1.",
    "I bet you didn?t know this CAD shortcut?double your speed instantly.",
    "Here?s a before/after: messy draft vs. clean, client-ready drawing.",
    "Quick challenge: can you spot the mistake? Here?s how to fix it.",
  ];
  return beats[Math.floor(Math.random() * beats.length)];
}

function ctaLine(): string {
  const cta = [
    "Join today?first 50 get a portfolio review.",
    "Tap ?Enroll??build a portfolio in 30 days.",
    "DM ?CAD? for the syllabus and a free trial lesson.",
    "Apply now?career support included.",
  ];
  return cta[Math.floor(Math.random() * cta.length)];
}

function buildScript(selected: Tone[]): string {
  const hook = generateHook();

  const beats: string[] = [];
  if (selected.includes("Emotion")) beats.push(generateEmotionalBeat());
  if (selected.includes("Value")) beats.push(generateValueBeat());
  if (selected.includes("Entertainment")) beats.push(generateEntertainmentBeat());

  const instituteLine =
    "At Nexus CAD Institute, we coach you with real briefs, mentor feedback, and job-focused practice.";

  const flow = [
    `HOOK: ${hook}`,
    "",
    ...beats.map((b, i) => `Beat ${i + 1}: ${b}`),
    "",
    instituteLine,
    "",
    `CTA: ${ctaLine()}`,
    "",
    "Format suggestions: Start with face-cam or a strong visual. Keep energy high, captions bold, and show at least one on-screen transformation or tip.",
  ];

  return flow.join("\n");
}

export default function ScriptBuilder() {
  const [selected, setSelected] = useState<Tone[]>(["Emotion", "Value"]);
  const [script, setScript] = useState<string>("");

  const isValid = selected.length === 2;

  const generated = useMemo(() => buildScript(selected), [selected]);

  function toggleTone(t: Tone) {
    setSelected((prev) => {
      if (prev.includes(t)) return prev.filter((x) => x !== t);
      if (prev.length >= 2) return [prev[1], t];
      return [...prev, t];
    });
  }

  function handleGenerate() {
    setScript(buildScript(selected));
  }

  async function handleCopy() {
    const text = script || generated;
    await navigator.clipboard.writeText(text);
    alert("Script copied to clipboard");
  }

  return (
    <div>
      <div className="controls" style={{ marginBottom: 16 }}>
        <div className="group">
          <span className="badge">Choose exactly two</span>
          <div className="choiceRow">
            {tones.map((t) => (
              <label key={t} className="choice" data-active={selected.includes(t)}>
                <input
                  type="checkbox"
                  checked={selected.includes(t)}
                  onChange={() => toggleTone(t)}
                />
                {t}
              </label>
            ))}
          </div>
        </div>
        <div className="group">
          <span className="badge">Institute</span>
          <div style={{ color: "#aab4d4", fontSize: 14 }}>
            CAD training institute ? optimized for short UGC reels
          </div>
        </div>
      </div>

      <div className="group" style={{ marginBottom: 12 }}>
        <span className="badge">Script</span>
        <textarea
          className="textarea"
          value={script || generated}
          onChange={(e) => setScript(e.target.value)}
        />
      </div>

      <div className="actions">
        <button className="button" onClick={handleGenerate} disabled={!isValid}>
          Regenerate variation
        </button>
        <button className="button secondary" onClick={handleCopy}>
          Copy script
        </button>
      </div>
    </div>
  );
}
