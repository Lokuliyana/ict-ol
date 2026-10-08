'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Box, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Zap, 
  RotateCcw, 
  Globe, 
  FolderTree,
  Eye,
  FileCode
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

interface SkeletonBlock {
  id: string;
  tag: string;
  order: number;
  type: 'doctype' | 'html_open' | 'head_open' | 'title_open' | 'title_content' | 'title_close' | 'head_close' | 'body_open' | 'body_content' | 'body_close' | 'html_close';
}

const INITIAL_SKELETON_BLOCKS: SkeletonBlock[] = [
  { id: 'b1', tag: '<!DOCTYPE html>', order: 1, type: 'doctype' },
  { id: 'b2', tag: '<html>', order: 2, type: 'html_open' },
  { id: 'b3', tag: '  <head>', order: 3, type: 'head_open' },
  { id: 'b4', tag: '    <title>Exam Portal</title>', order: 4, type: 'title_content' },
  { id: 'b5', tag: '  </head>', order: 5, type: 'head_close' },
  { id: 'b6', tag: '  <body>', order: 6, type: 'body_open' },
  { id: 'b7', tag: '    <h1>Welcome to School ICT</h1>', order: 7, type: 'body_content' },
  { id: 'b8', tag: '  </body>', order: 8, type: 'body_close' },
  { id: 'b9', tag: '</html>', order: 9, type: 'html_close' }
];

export function SkeletonBuilder() {
  const [activeSubtab, setActiveSubtab] = useState<'skeleton' | 'tagSorter' | 'tabTitle'>('skeleton');

  // Skeleton Assembly State
  const [availableBlocks, setAvailableBlocks] = useState<SkeletonBlock[]>(() => 
    [...INITIAL_SKELETON_BLOCKS].sort(() => Math.random() - 0.5)
  );
  const [slottedBlocks, setSlottedBlocks] = useState<SkeletonBlock[]>([]);
  const [isSkeletonValid, setIsSkeletonValid] = useState<boolean>(false);

  // Tab Title Test State
  const [tabTitleText, setTabTitleText] = useState<string>('Department of Examinations');

  // Container vs Empty Tag Sorter State (2024 Paper II Q05(b))
  const [sortedTags, setSortedTags] = useState<{
    empty: string[];
    container: string[];
  }>({
    empty: [],
    container: []
  });

  const availableTagsToSort = [
    { name: '<img>', isContainer: false },
    { name: '<p>', isContainer: true },
    { name: '<br>', isContainer: false },
    { name: '<a>', isContainer: true },
    { name: '<hr>', isContainer: false },
    { name: '<table>', isContainer: true },
    { name: '<input>', isContainer: false },
    { name: '<h1>', isContainer: true }
  ];

  const handleSlotBlock = (block: SkeletonBlock) => {
    sound.playSnap();
    const newSlotted = [...slottedBlocks, block];
    const newAvailable = availableBlocks.filter((b) => b.id !== block.id);
    setSlottedBlocks(newSlotted);
    setAvailableBlocks(newAvailable);

    if (newAvailable.length === 0) {
      const isValid = newSlotted.every((b, idx) => b.order === idx + 1);
      if (isValid) {
        sound.playVictory();
        setIsSkeletonValid(true);
      } else {
        sound.playError();
        setIsSkeletonValid(false);
      }
    }
  };

  const handleResetSkeleton = () => {
    sound.playClick(500);
    setAvailableBlocks([...INITIAL_SKELETON_BLOCKS].sort(() => Math.random() - 0.5));
    setSlottedBlocks([]);
    setIsSkeletonValid(false);
  };

  const handleSortTag = (tagName: string, targetBin: 'empty' | 'container') => {
    sound.playSnap();
    setSortedTags((prev) => {
      const isAlreadyInEmpty = prev.empty.includes(tagName);
      const isAlreadyInContainer = prev.container.includes(tagName);

      let newEmpty = prev.empty.filter((t) => t !== tagName);
      let newContainer = prev.container.filter((t) => t !== tagName);

      if (targetBin === 'empty') {
        newEmpty.push(tagName);
      } else {
        newContainer.push(tagName);
      }

      return { empty: newEmpty, container: newContainer };
    });
  };

  const handleResetSorter = () => {
    sound.playClick(500);
    setSortedTags({ empty: [], container: [] });
  };

  return (
    <div className="space-y-6">
      {/* Subtab Navigation */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-blue-500/20 max-w-lg mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('skeleton');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'skeleton'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Code2 className="w-4 h-4" />
          <span>HTML5 Skeleton</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('tagSorter');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'tagSorter'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Box className="w-4 h-4" />
          <span>Container vs. Empty</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveSubtab('tabTitle');
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeSubtab === 'tabTitle'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>Tab Title &lt;title&gt;</span>
        </button>
      </div>

      {activeSubtab === 'skeleton' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Code Assembly Canvas */}
          <div className="lg:col-span-7 bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  DOCUMENT SKELETON • මූලික ලේඛන සැකිල්ල
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  The HTML5 Skeleton Stacker
                </h3>
              </div>
              <button
                onClick={handleResetSkeleton}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-mono transition-colors self-start sm:self-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Blocks</span>
              </button>
            </div>

            {/* Slotted Assembly Frame */}
            <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>CODE EDITOR (index.html):</span>
                <span className="text-blue-400">{slottedBlocks.length} / {INITIAL_SKELETON_BLOCKS.length} blocks slotted</span>
              </div>

              <div className="min-h-[220px] p-4 bg-slate-950 rounded-xl border-2 border-dashed border-slate-800 space-y-1.5 overflow-x-auto">
                {slottedBlocks.length === 0 ? (
                  <span className="text-slate-600 italic">
                    Click magnetic tags below in hierarchical order to construct a valid HTML5 skeleton...
                  </span>
                ) : (
                  slottedBlocks.map((block) => (
                    <motion.div
                      key={block.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="px-3 py-1 bg-blue-950/60 text-blue-200 border border-blue-500/30 rounded-lg text-xs font-mono whitespace-pre"
                    >
                      {block.tag}
                    </motion.div>
                  ))
                )}
              </div>

              {/* Validation Status */}
              {slottedBlocks.length === INITIAL_SKELETON_BLOCKS.length && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3.5 rounded-xl border flex items-center gap-3 ${
                    isSkeletonValid
                      ? 'bg-emerald-950/80 border-emerald-400 text-emerald-200'
                      : 'bg-rose-950/80 border-rose-400 text-rose-200'
                  }`}
                >
                  {isSkeletonValid ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <div className="font-bold text-xs">Valid HTML5 Document Hierarchy! (නිරවද්‍ය සැකිල්ලකි)</div>
                        <div className="text-[11px] text-emerald-300/80 mt-0.5 font-sans">
                          Browser successfully loaded and rendered the root structure.
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      <div>
                        <div className="font-bold text-xs">Invalid Tag Order! (ටැග් අනුපිළිවෙල වැරදියි)</div>
                        <div className="text-[11px] text-rose-300/80 mt-0.5 font-sans">
                          Remember: &lt;!DOCTYPE&gt; ➔ &lt;html&gt; ➔ &lt;head&gt; ➔ &lt;title&gt; ➔ &lt;/head&gt; ➔ &lt;body&gt; ➔ &lt;/body&gt; ➔ &lt;/html&gt;
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </div>

            {/* Available Blocks */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400">AVAILABLE TAG BLOCKS:</span>
              <div className="flex flex-wrap gap-2">
                {availableBlocks.map((block) => (
                  <button
                    key={block.id}
                    onClick={() => handleSlotBlock(block)}
                    className="px-3 py-2 bg-slate-900 hover:bg-blue-900/40 text-slate-200 hover:text-white rounded-xl border border-slate-700 hover:border-blue-400 text-xs font-mono font-bold transition-all shadow-md active:scale-95 whitespace-pre"
                  >
                    {block.tag.trim()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Theory & Structure Inspector Deck */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Curriculum Competency 5.2
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  Document Structure Rules
                </h3>
                <h4 className="text-xs font-semibold text-blue-300">
                  මූලික ලේඛන ව්‍යුහය
                </h4>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-mono font-bold text-blue-300">&lt;!DOCTYPE html&gt;</div>
                  <div className="text-slate-400 text-[11px]">
                    Declares that the document is written in the HTML5 standard to the web browser.
                  </div>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-mono font-bold text-indigo-300">&lt;head&gt; ... &lt;/head&gt;</div>
                  <div className="text-slate-400 text-[11px]">
                    Holds document metadata, scripts, and the &lt;title&gt;. <strong>No visual page content can be placed inside &lt;head&gt;!</strong>
                  </div>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-mono font-bold text-emerald-300">&lt;body&gt; ... &lt;/body&gt;</div>
                  <div className="text-slate-400 text-[11px]">
                    Encloses all visible elements (headings, paragraphs, tables, images, hyperlinks) displayed on the page.
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-amber-950/30 rounded-xl border border-amber-500/30 text-xs text-amber-200">
                <Zap className="w-4 h-4 text-amber-400 inline mr-1" />
                <strong>Static vs Dynamic Pages:</strong> Static pages (HTML/CSS) show identical fixed content to all users; Dynamic pages (PHP, MySQL) generate personalized content per query or user.
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 text-center font-mono">
              Grade 11 ICT Syllabus • Unit 5.2
            </div>
          </div>
        </div>
      )}

      {activeSubtab === 'tagSorter' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                TAG CLASSIFICATION • 2024 O/L PAPER II Q05(b)
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                Container Tags vs. Empty (Void) Tags
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Click each tag below to sort it into either the Container Tag bin or the Empty (Void) Tag bin.
              </p>
            </div>
            <button
              onClick={handleResetSorter}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-mono transition-colors self-start sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Bins</span>
            </button>
          </div>

          {/* Interactive Bins */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Container Tags Bin */}
            <div className="p-6 bg-slate-900 rounded-2xl border-2 border-indigo-500/40 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-indigo-400" />
                  <h4 className="font-bold text-white text-sm">Container Tags (බහාලුම් ටැග්)</h4>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                  Requires &lt;/closing&gt; tag
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Encapsulate content between an opening &lt;tag&gt; and closing &lt;/tag&gt;.
              </p>

              <div className="min-h-[100px] p-3 bg-slate-950 rounded-xl border border-slate-800 flex flex-wrap gap-2 items-center">
                {sortedTags.container.length === 0 ? (
                  <span className="text-xs text-slate-600 italic">Slot container tags here...</span>
                ) : (
                  sortedTags.container.map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-indigo-950 text-indigo-200 border border-indigo-500/40 rounded-lg text-xs font-mono font-bold">
                      {t} ... {t.replace('<', '</')}
                    </span>
                  ))
                )}
              </div>
            </div>

            {/* Empty / Void Tags Bin */}
            <div className="p-6 bg-slate-900 rounded-2xl border-2 border-amber-500/40 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Box className="w-5 h-5 text-amber-400" />
                  <h4 className="font-bold text-white text-sm">Empty / Void Tags (හිස් ටැග්)</h4>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/30">
                  Standalone / No &lt;/closing&gt;
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Perform a standalone action (e.g. break line, embed image) with no closing tag.
              </p>

              <div className="min-h-[100px] p-3 bg-slate-950 rounded-xl border border-slate-800 flex flex-wrap gap-2 items-center">
                {sortedTags.empty.length === 0 ? (
                  <span className="text-xs text-slate-600 italic">Slot empty tags here...</span>
                ) : (
                  sortedTags.empty.map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-amber-950 text-amber-200 border border-amber-500/40 rounded-lg text-xs font-mono font-bold">
                      {t} (Void)
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Tag Sorter Palette */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400">CLICK TO SORT EACH TAG:</span>
            <div className="flex flex-wrap gap-2.5">
              {availableTagsToSort.map((tag) => {
                const isSorted = sortedTags.empty.includes(tag.name) || sortedTags.container.includes(tag.name);
                return (
                  <div key={tag.name} className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                    <span className="px-2.5 py-1 text-xs font-mono font-bold text-white">{tag.name}</span>
                    <button
                      onClick={() => handleSortTag(tag.name, 'container')}
                      className="px-2 py-1 bg-indigo-950 hover:bg-indigo-900 text-indigo-300 rounded-lg text-[10px] font-mono border border-indigo-500/30"
                    >
                      Container
                    </button>
                    <button
                      onClick={() => handleSortTag(tag.name, 'empty')}
                      className="px-2 py-1 bg-amber-950 hover:bg-amber-900 text-amber-300 rounded-lg text-[10px] font-mono border border-amber-500/30"
                    >
                      Empty
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {activeSubtab === 'tabTitle' && (
        <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              The Browser Tab Title Inspector (&lt;title&gt;)
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              The &lt;title&gt; tag specifies the title of the web document displayed in the browser's title bar or tab, NOT on the web page body surface.
            </p>
          </div>

          {/* Interactive Browser Wireframe */}
          <div className="bg-slate-900 rounded-2xl border-4 border-slate-800 overflow-hidden shadow-2xl space-y-0">
            {/* Top Browser Tab Bar */}
            <div className="bg-slate-950 p-2 flex items-center gap-2 border-b border-slate-800">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 rounded-t-xl border-t border-x border-slate-700 max-w-xs">
                <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="text-xs font-mono font-bold text-blue-300 truncate">
                  {tabTitleText || 'Untitled Document'}
                </span>
                <span className="text-[10px] text-slate-500 ml-2">✕</span>
              </div>
              <span className="text-slate-600 text-xs px-2">+</span>
            </div>

            {/* Address Bar */}
            <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-500">
              <span>🔒 https://www.doenets.gov.lk/index.html</span>
            </div>

            {/* Web Viewport Body */}
            <div className="p-8 bg-white min-h-[160px] text-slate-900 space-y-2">
              <h1 className="text-2xl font-black text-slate-900">National Examination Results Portal</h1>
              <p className="text-sm text-slate-600 leading-relaxed">
                Notice that the text inside &lt;title&gt; (<strong>"{tabTitleText}"</strong>) appears on the browser tab above, while this heading and paragraph live inside the &lt;body&gt;!
              </p>
            </div>
          </div>

          {/* Title Editor Input */}
          <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
            <label className="text-xs font-mono text-slate-400 block">Edit &lt;title&gt; tag content:</label>
            <input
              type="text"
              value={tabTitleText}
              onChange={(e) => setTabTitleText(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl p-3 text-xs font-mono focus:border-blue-400 outline-none"
            />
            <div className="text-[11px] font-mono text-slate-500">
              Code: &lt;head&gt;&lt;title&gt;{tabTitleText}&lt;/title&gt;&lt;/head&gt;
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
