'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ListOrdered, 
  List, 
  FileText, 
  Sparkles, 
  Sliders, 
  CheckCircle2, 
  Zap, 
  RotateCcw,
  Layers
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function ListStacker() {
  const [activeTab, setActiveTab] = useState<'ordered' | 'unordered' | 'definition'>('unordered');

  // Unordered List States (2022 Paper II Q05(b))
  const [ulType, setUlType] = useState<'square' | 'disc' | 'circle'>('square');
  const [ulItems, setUlItems] = useState<string[]>(['Apple', 'Mango', 'Orange']);

  // Ordered List States
  const [olType, setOlType] = useState<'1' | 'a' | 'A' | 'i' | 'I'>('1');
  const [olStart, setOlStart] = useState<number>(1);
  const [olItems, setOlItems] = useState<string[]>(['HTML5 Core', 'CSS3 Styling', 'JavaScript Engine']);

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-blue-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('unordered');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'unordered'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <List className="w-4 h-4" />
          <span>Unordered &lt;ul&gt;</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('ordered');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'ordered'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <ListOrdered className="w-4 h-4" />
          <span>Ordered &lt;ol&gt;</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('definition');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'definition'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Definition &lt;dl&gt;</span>
        </button>
      </div>

      {activeTab === 'unordered' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls */}
          <div className="lg:col-span-6 bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl space-y-6">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                2022 O/L PAPER II Q05(b)
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                Unordered List Stacker &lt;ul&gt;
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Bullet types: <code className="text-blue-300">square</code> (solid square), <code className="text-blue-300">disc</code> (solid circle - default), and <code className="text-blue-300">circle</code> (hollow circle).
              </p>
            </div>

            {/* Bullet Type Selector */}
            <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
              <label className="text-xs font-mono text-slate-400 block">Select Bullet Type (type attribute):</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'square', label: 'Square (■)' },
                  { id: 'disc', label: 'Disc (● Default)' },
                  { id: 'circle', label: 'Circle (○)' }
                ].map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      sound.playClick(600);
                      setUlType(b.id as any);
                    }}
                    className={`p-2.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                      ulType === b.id
                        ? 'bg-blue-600 text-white border-blue-400 ring-2 ring-white shadow-md scale-105'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Snippet */}
            <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 font-mono text-xs text-blue-300 space-y-1">
              <div className="text-[10px] text-slate-500">GENERATED HTML:</div>
              <div>&lt;ul type="{ulType}"&gt;</div>
              {ulItems.map((item, idx) => (
                <div key={idx} className="pl-4">&lt;li&gt;{item}&lt;/li&gt;</div>
              ))}
              <div>&lt;/ul&gt;</div>
            </div>
          </div>

          {/* Live Browser Render Viewport */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-2xl flex flex-col justify-between space-y-4">
            <div>
              <div className="text-xs font-mono text-slate-400 pb-3 border-b border-slate-800">
                LIVE BROWSER RENDER VIEWPORT:
              </div>

              <div className="p-8 bg-white rounded-2xl min-h-[200px] text-slate-950 mt-3 shadow-inner">
                <h4 className="font-bold text-sm text-slate-900 mb-3">Fresh Fruits Basket</h4>
                <ul
                  style={{
                    listStyleType: ulType === 'square' ? 'square' : ulType === 'circle' ? 'circle' : 'disc'
                  }}
                  className="pl-6 space-y-2 text-sm font-medium"
                >
                  {ulItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-3.5 bg-amber-950/30 rounded-xl border border-amber-500/30 text-xs text-amber-200">
              <Zap className="w-4 h-4 text-amber-400 inline mr-1" />
              <strong>2022 O/L Exam Problem:</strong> "Write the HTML code to display an unordered list of Apple and Mango with square bullets" ➔ <code className="text-amber-300 font-mono">&lt;ul type="square"&gt;&lt;li&gt;Apple&lt;/li&gt;&lt;li&gt;Mango&lt;/li&gt;&lt;/ul&gt;</code>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'ordered' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Ordered Controls */}
          <div className="lg:col-span-6 bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl space-y-6">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                ORDERED LISTS • අනුක්‍රමික ලැයිස්තු
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                Ordered List Stacker &lt;ol&gt;
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Attributes: <code className="text-blue-300">type="1|a|A|i|I"</code> and <code className="text-blue-300">start="number"</code>.
              </p>
            </div>

            {/* Type Selector */}
            <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
              <label className="text-xs font-mono text-slate-400 block">Select Numbering Type (type attribute):</label>
              <div className="grid grid-cols-5 gap-1.5">
                {[
                  { id: '1', label: '1, 2, 3' },
                  { id: 'A', label: 'A, B, C' },
                  { id: 'a', label: 'a, b, c' },
                  { id: 'I', label: 'I, II, III' },
                  { id: 'i', label: 'i, ii, iii' }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      sound.playClick(600);
                      setOlType(t.id as any);
                    }}
                    className={`p-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                      olType === t.id
                        ? 'bg-blue-600 text-white border-blue-400 ring-2 ring-white shadow-md'
                        : 'bg-slate-950 text-slate-300 border-slate-800'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                  <span>Start Index (start attribute):</span>
                  <span className="text-blue-300 font-bold">{olStart}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={olStart}
                  onChange={(e) => {
                    setOlStart(Number(e.target.value));
                    sound.playCrankTick();
                  }}
                  className="w-full accent-blue-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Generated Code */}
            <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 font-mono text-xs text-blue-300 space-y-1">
              <div className="text-[10px] text-slate-500">GENERATED HTML:</div>
              <div>&lt;ol type="{olType}" start="{olStart}"&gt;</div>
              {olItems.map((item, idx) => (
                <div key={idx} className="pl-4">&lt;li&gt;{item}&lt;/li&gt;</div>
              ))}
              <div>&lt;/ol&gt;</div>
            </div>
          </div>

          {/* Live Preview Viewport */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-2xl flex flex-col justify-between space-y-4">
            <div>
              <div className="text-xs font-mono text-slate-400 pb-3 border-b border-slate-800">
                LIVE BROWSER RENDER VIEWPORT:
              </div>

              <div className="p-8 bg-white rounded-2xl min-h-[200px] text-slate-950 mt-3 shadow-inner">
                <h4 className="font-bold text-sm text-slate-900 mb-3">Curriculum Units</h4>
                <ol
                  style={{
                    listStyleType: 
                      olType === 'A' ? 'upper-alpha' :
                      olType === 'a' ? 'lower-alpha' :
                      olType === 'I' ? 'upper-roman' :
                      olType === 'i' ? 'lower-roman' : 'decimal'
                  }}
                  start={olStart}
                  className="pl-6 space-y-2 text-sm font-medium"
                >
                  {olItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="p-3.5 bg-blue-950/30 rounded-xl border border-blue-500/30 text-xs text-blue-200">
              <strong>Start Attribute Rule:</strong> Regardless of whether type is Roman (I) or letter (A), the <code>start</code> attribute is ALWAYS given as a numerical integer (e.g. <code>start="5"</code> to start from E or V).
            </div>
          </div>
        </div>
      )}

      {activeTab === 'definition' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              Definition Lists &lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              &lt;dl&gt; (Definition List), &lt;dt&gt; (Definition Term), and &lt;dd&gt; (Definition Description, automatically indented).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Code */}
            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 font-mono text-xs text-blue-300 space-y-2">
              <div className="text-[10px] text-slate-500">DEFINITION LIST MARKUP:</div>
              <div className="text-slate-200">&lt;dl&gt;</div>
              <div className="pl-4 text-emerald-300">&lt;dt&gt;HTML&lt;/dt&gt;</div>
              <div className="pl-8 text-slate-300">&lt;dd&gt;HyperText Markup Language&lt;/dd&gt;</div>
              <div className="pl-4 text-emerald-300">&lt;dt&gt;HTTP&lt;/dt&gt;</div>
              <div className="pl-8 text-slate-300">&lt;dd&gt;HyperText Transfer Protocol&lt;/dd&gt;</div>
              <div className="text-slate-200">&lt;/dl&gt;</div>
            </div>

            {/* Rendered Preview */}
            <div className="p-6 bg-white rounded-2xl text-slate-950 space-y-3 shadow-inner">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                Browser Visual Output:
              </div>
              <dl className="space-y-2">
                <dt className="font-bold text-base text-slate-900">HTML</dt>
                <dd className="pl-6 text-sm text-slate-600">HyperText Markup Language</dd>
                <dt className="font-bold text-base text-slate-900 pt-2">HTTP</dt>
                <dd className="pl-6 text-sm text-slate-600">HyperText Transfer Protocol</dd>
              </dl>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
