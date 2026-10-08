'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Image as ImageIcon, 
  Sparkles, 
  CheckCircle2, 
  Move, 
  Layers, 
  Eye, 
  FileText
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

type WrapMode = 'inline' | 'square' | 'behind' | 'infront';

export function GraphicWrapper() {
  const [wrapMode, setWrapMode] = useState<WrapMode>('square');
  const [hasDropCap, setHasDropCap] = useState<boolean>(true);

  const handleWrapModeChange = (mode: WrapMode) => {
    sound.playClick(mode === 'square' ? 750 : 550);
    setWrapMode(mode);
  };

  const toggleDropCap = () => {
    sound.playClick(hasDropCap ? 400 : 850);
    setHasDropCap(!hasDropCap);
  };

  return (
    <div className="space-y-6">
      {/* Top Station Sub-header & Wrap Mode Toolbar */}
      <div className="bg-slate-900/90 border border-purple-500/30 rounded-2xl p-4 sm:p-5 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
            <ImageIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>Station 4: The Graphics & Text Wrapper</span>
              <span className="text-xs font-sinhala text-purple-400 font-normal">
                (පින්තූර සහ පෙළ එතීමේ ආකාර - Text Wrap & Drop Cap)
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Control how text flows around images (Square, Behind, In Front) and toggle typographic Drop Caps.
            </p>
          </div>
        </div>

        {/* Wrap Mode Toggles */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold gap-1 self-start md:self-auto flex-wrap">
          <button
            onClick={() => handleWrapModeChange('inline')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              wrapMode === 'inline' ? 'bg-purple-500 text-slate-950 font-black shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            In Line
          </button>
          <button
            onClick={() => handleWrapModeChange('square')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              wrapMode === 'square' ? 'bg-purple-500 text-slate-950 font-black shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Square / Tight
          </button>
          <button
            onClick={() => handleWrapModeChange('behind')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              wrapMode === 'behind' ? 'bg-purple-500 text-slate-950 font-black shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Behind Text (Watermark)
          </button>
          <button
            onClick={() => handleWrapModeChange('infront')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              wrapMode === 'infront' ? 'bg-purple-500 text-slate-950 font-black shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            In Front of Text
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Document Stage (Left) & Wrapping Rules HUD (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Live Document Simulation Canvas (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[460px]">
          
          <div className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-800/80">
            <span className="text-xs font-mono text-purple-400 font-bold">
              PAGE LAYOUT: {wrapMode.toUpperCase()} WRAPPING
            </span>

            <button
              onClick={toggleDropCap}
              className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all border ${
                hasDropCap 
                  ? 'bg-purple-500/20 text-purple-300 border-purple-500/40' 
                  : 'bg-slate-900 text-slate-500 border-slate-800'
              }`}
            >
              Drop Cap: {hasDropCap ? 'ENABLED (3 Lines)' : 'DISABLED'}
            </button>
          </div>

          {/* Central Interactive Document Page */}
          <div className="relative z-10 my-auto py-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative max-w-lg mx-auto font-serif text-slate-800 dark:text-slate-200 leading-relaxed text-xs sm:text-sm">
              
              {/* Document Header */}
              <h4 className="font-sans font-bold text-base text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-800 mb-3">
                Digital Publishing & Visual Content Flow
              </h4>

              {/* WRAP MODE 1: SQUARE / TIGHT (Floats left and wraps text around) */}
              {wrapMode === 'square' && (
                <div>
                  <div className="float-left mr-4 mb-2 p-2 rounded-xl bg-purple-500/10 border-2 border-purple-500/40 text-center w-36 shadow-lg">
                    <div className="w-full h-20 bg-purple-600 rounded-lg flex flex-col items-center justify-center text-white text-xs font-mono font-bold">
                      <ImageIcon className="w-6 h-6 mb-1" />
                      <span>Graphic Sticker</span>
                    </div>
                    <span className="text-[10px] text-purple-400 font-mono block mt-1">Square Wrap</span>
                  </div>

                  <p>
                    {hasDropCap && (
                      <span className="float-left text-4xl font-bold font-sans text-purple-500 leading-none mr-2 mt-1">
                        C
                      </span>
                    )}
                    omputers have revolutionized modern typography and document publishing. Graphic illustrations and charts can be inserted seamlessly alongside paragraphs. When using <strong>Square Wrapping</strong>, the paragraph text ripples and wraps smoothly around the rectangular bounding box of the graphic, maximizing reading clarity and page economy.
                  </p>
                  <p className="mt-2">
                    Professional books, newspapers, and newsletters rely on tight wrapping and drop caps to create engaging editorial hierarchy for readers.
                  </p>
                </div>
              )}

              {/* WRAP MODE 2: IN LINE WITH TEXT (Splits single line) */}
              {wrapMode === 'inline' && (
                <div>
                  <p>
                    {hasDropCap && (
                      <span className="float-left text-4xl font-bold font-sans text-purple-500 leading-none mr-2 mt-1">
                        C
                      </span>
                    )}
                    omputers treat images differently based on wrapping. In <strong>In Line with Text</strong> mode, the image acts like a single giant text character:
                  </p>
                  
                  {/* Inline character graphic */}
                  <div className="inline-block align-middle my-2 p-2 rounded-xl bg-purple-500/20 border border-purple-500 text-center w-28 mx-2">
                    <ImageIcon className="w-5 h-5 mx-auto text-purple-400" />
                    <span className="text-[9px] font-mono text-purple-300">In-Line Block</span>
                  </div>

                  <span>
                    causing large vertical gaps between preceding and succeeding lines because the line height expands to accommodate the image height.
                  </span>
                </div>
              )}

              {/* WRAP MODE 3: BEHIND TEXT (Watermark overlay) */}
              {wrapMode === 'behind' && (
                <div className="relative">
                  {/* Watermark Graphic Layer */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
                    <div className="w-48 h-48 rounded-full border-4 border-dashed border-purple-400 flex flex-col items-center justify-center text-purple-300 font-mono font-bold">
                      <ImageIcon className="w-12 h-12 mb-1" />
                      <span>CONFIDENTIAL</span>
                    </div>
                  </div>

                  <p className="relative z-10">
                    {hasDropCap && (
                      <span className="float-left text-4xl font-bold font-sans text-purple-500 leading-none mr-2 mt-1">
                        C
                      </span>
                    )}
                    omputers enable <strong>Behind Text</strong> wrapping for decorative backgrounds and official watermark stamps. The image resides on a sub-layer below the text baseline, allowing words and paragraphs to be typed straight across its surface without breaking line flow.
                  </p>
                  <p className="mt-2 relative z-10">
                    Used widely in legal contracts, draft examination papers, and school certificates.
                  </p>
                </div>
              )}

              {/* WRAP MODE 4: IN FRONT OF TEXT */}
              {wrapMode === 'infront' && (
                <div className="relative">
                  <p>
                    {hasDropCap && (
                      <span className="float-left text-4xl font-bold font-sans text-purple-500 leading-none mr-2 mt-1">
                        C
                      </span>
                    )}
                    omputers can also position floating graphics directly above the text using <strong>In Front of Text</strong> wrapping.
                  </p>
                  <p className="mt-2">
                    This mode places the image on the top layer, which obscures and covers any underlying words directly beneath its perimeter.
                  </p>

                  {/* Floating Overlay Card */}
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute top-8 left-1/3 p-3 rounded-xl bg-purple-600 border-2 border-purple-300 text-white font-mono text-xs shadow-2xl flex items-center gap-2"
                  >
                    <Layers className="w-4 h-4" />
                    <span>Overlay Sticker (In Front)</span>
                  </motion.div>
                </div>
              )}

            </div>
          </div>

          <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Graphics & Drop Cap §6.5</span>
            <span className="text-purple-400">Desktop Publishing Modes</span>
          </div>

        </div>

        {/* Right Side: Text Wrapping Modes Explanation HUD (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between shadow-2xl space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Wrapping Mode Reference</span>
              </h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Visual Flow
              </span>
            </div>

            {/* Spec Cards */}
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="font-mono text-purple-400 font-bold">1. In Line with Text (පෙළට අනුකූලව):</span>
                <p className="text-slate-400 text-[11px]">
                  Default behavior. Image is anchored inside the text line like an enormous font character.
                </p>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="font-mono text-purple-400 font-bold">2. Square / Tight (සමචතුරස්‍ර / තදින්):</span>
                <p className="text-slate-400 text-[11px]">
                  Text flows smoothly around the image borders. Best for newsletter columns and magazine articles.
                </p>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="font-mono text-purple-400 font-bold">3. Behind Text (පෙළට පිටුපසින්):</span>
                <p className="text-slate-400 text-[11px]">
                  Image floats on the background layer behind text. Standard for watermarks and letterheads.
                </p>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="font-mono text-purple-400 font-bold">4. Drop Cap (ආරම්භක විශාල අකුර):</span>
                <p className="text-slate-400 text-[11px]">
                  Enlarges the initial capital letter of a paragraph to span 2 to 3 vertical lines downward.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs">
            <strong>Page Break Shortcut:</strong> Press <code className="bg-slate-900 px-1 py-0.5 rounded text-white font-mono">Ctrl + Enter</code> to instantly insert a Page Break (පිටු කඩනය) and push following text to a new page!
          </div>
        </div>

      </div>
    </div>
  );
}
