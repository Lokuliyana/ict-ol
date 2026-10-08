'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Link2, 
  Image as ImageIcon, 
  ExternalLink, 
  Mail, 
  FileText, 
  ImageOff, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Sparkles, 
  RotateCcw, 
  Eye, 
  FormInput, 
  Monitor, 
  Edit3,
  Globe
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

export function LinkMediaTerminal() {
  const [activeTab, setActiveTab] = useState<'anchor' | 'image' | 'form' | 'editors'>('anchor');

  // Hyperlink states
  const [linkUrl, setLinkUrl] = useState<string>('https://www.moe.gov.lk');
  const [linkText, setLinkText] = useState<string>('Ministry of Education');
  const [linkTarget, setLinkTarget] = useState<'_blank' | '_self'>('_blank');
  const [linkProtocol, setLinkProtocol] = useState<'http' | 'mailto' | 'relative'>('http');
  const [navHistory, setNavHistory] = useState<string[]>([]);
  const [linkStatusMessage, setLinkStatusMessage] = useState<string>('Ready to click link');

  // Image states
  const [imgSrc, setImgSrc] = useState<string>('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60');
  const [imgAlt, setImgAlt] = useState<string>('Sri Lanka Digital Classroom Laptop');
  const [imgWidth, setImgWidth] = useState<number>(280);
  const [imgHeight, setImgHeight] = useState<number>(180);
  const [isBrokenImg, setIsBrokenImg] = useState<boolean>(false);
  const [isLinkedImg, setIsLinkedImg] = useState<boolean>(true);
  const [imgBorder, setImgBorder] = useState<number>(0);

  // Form states
  const [formTextVal, setFormTextVal] = useState<string>('Kasun Perera');
  const [formPassVal, setFormPassVal] = useState<string>('p@ssw0rd');
  const [formGender, setFormGender] = useState<'male' | 'female'>('male');
  const [formStreams, setFormStreams] = useState<{ ict: boolean; science: boolean; commerce: boolean }>({
    ict: true,
    science: false,
    commerce: false
  });
  const [formDistrict, setFormDistrict] = useState<string>('Colombo');
  const [formRemarks, setFormRemarks] = useState<string>('Preparing for O/L ICT exam.');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Quick protocol switch
  const handleProtocolSwitch = (type: 'http' | 'mailto' | 'relative') => {
    sound.playClick(520);
    setLinkProtocol(type);
    if (type === 'http') {
      setLinkUrl('https://www.moe.gov.lk');
      setLinkText('Ministry of Education (ශ්‍රී ලංකා අධ්‍යාපන අමාත්‍යාංශය)');
    } else if (type === 'mailto') {
      setLinkUrl('mailto:info@doenets.lk');
      setLinkText('Email Department of Examinations (විභාග දෙපාර්තමේන්තුව)');
    } else {
      setLinkUrl('gallery.html');
      setLinkText('View Photo Gallery (දේශීය පිටුව)');
    }
  };

  const handleSimulateClick = () => {
    sound.playSuccess();
    setNavHistory((prev) => [linkUrl, ...prev.slice(0, 4)]);
    setLinkStatusMessage(
      linkTarget === '_blank'
        ? `🚀 Opened in new tab/window: ${linkUrl}`
        : `🔄 Navigated current window to: ${linkUrl}`
    );
  };

  return (
    <div className="space-y-6">
      {/* Station Subtab Bar */}
      <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-teal-500/20 max-w-xl mx-auto shadow-lg">
        <button
          onClick={() => {
            sound.playClick(500);
            setActiveTab('anchor');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 px-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'anchor'
              ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md shadow-teal-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Link2 className="w-4 h-4 text-teal-300" />
          <span>Hyperlinks &lt;a&gt;</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(550);
            setActiveTab('image');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 px-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'image'
              ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md shadow-teal-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <ImageIcon className="w-4 h-4 text-cyan-300" />
          <span>Images &lt;img&gt;</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(600);
            setActiveTab('form');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 px-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'form'
              ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md shadow-teal-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <FormInput className="w-4 h-4 text-emerald-300" />
          <span>Forms &lt;form&gt;</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(650);
            setActiveTab('editors');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 px-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'editors'
              ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md shadow-teal-500/25'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Edit3 className="w-4 h-4 text-amber-300" />
          <span>WYSIWYG vs Text</span>
        </button>
      </div>

      {/* Tab 1: Hyperlinks <a> */}
      {activeTab === 'anchor' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls */}
          <div className="lg:col-span-6 bg-slate-900/80 border border-teal-500/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <Link2 className="w-5 h-5 text-teal-400" />
                Hyperlink Studio (&lt;a&gt; Anchor Tag)
              </h3>
              <span className="text-xs bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-full font-mono font-bold">
                href & target
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In HTML, hyperlinks are created with the <code className="text-teal-300 font-bold">&lt;a&gt;</code> container tag.
              The mandatory <code className="text-amber-300 font-bold">href</code> (Hypertext Reference) attribute specifies the destination URL, email, or relative file path.
            </p>

            {/* Quick Presets */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Preset Link Types (විභාග ප්‍රශ්න රටා):
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleProtocolSwitch('http')}
                  className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-left flex flex-col items-start gap-1 ${
                    linkProtocol === 'http'
                      ? 'bg-teal-500/20 border-teal-400 text-teal-200'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="flex items-center gap-1 font-mono text-[11px] text-teal-400">
                    <Globe className="w-3 h-3" /> External Web
                  </span>
                  <span className="truncate w-full text-[10px] text-slate-300">https://</span>
                </button>

                <button
                  onClick={() => handleProtocolSwitch('mailto')}
                  className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-left flex flex-col items-start gap-1 ${
                    linkProtocol === 'mailto'
                      ? 'bg-teal-500/20 border-teal-400 text-teal-200'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="flex items-center gap-1 font-mono text-[11px] text-teal-400">
                    <Mail className="w-3 h-3" /> Mailto Link
                  </span>
                  <span className="truncate w-full text-[10px] text-slate-300">mailto:address</span>
                </button>

                <button
                  onClick={() => handleProtocolSwitch('relative')}
                  className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-left flex flex-col items-start gap-1 ${
                    linkProtocol === 'relative'
                      ? 'bg-teal-500/20 border-teal-400 text-teal-200'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="flex items-center gap-1 font-mono text-[11px] text-teal-400">
                    <FileText className="w-3 h-3" /> Relative Page
                  </span>
                  <span className="truncate w-full text-[10px] text-slate-300">local .html</span>
                </button>
              </div>
            </div>

            {/* Link Inputs */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-300 mb-1 block">
                  1. href Destination Attribute:
                </label>
                <input
                  type="text"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  className="w-full bg-slate-950/80 border border-teal-500/40 rounded-xl px-3 py-2 text-xs sm:text-sm font-mono text-teal-300 focus:outline-none focus:border-teal-400"
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 mb-1 block">
                  2. Clickable Display Text (Anchor Text):
                </label>
                <input
                  type="text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-teal-400"
                  placeholder="Click Here to Visit"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 mb-1 block">
                  3. target Attribute (නව ටැබ් එකක හෝ එම පිටුවේම විවෘත කිරීම):
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      sound.playClick(480);
                      setLinkTarget('_blank');
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                      linkTarget === '_blank'
                        ? 'bg-teal-600/30 border-teal-400 text-teal-200'
                        : 'bg-slate-800/40 border-slate-700 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    target="_blank" (New Window/Tab)
                  </button>
                  <button
                    onClick={() => {
                      sound.playClick(460);
                      setLinkTarget('_self');
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                      linkTarget === '_self'
                        ? 'bg-teal-600/30 border-teal-400 text-teal-200'
                        : 'bg-slate-800/40 border-slate-700 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    target="_self" (Same Window)
                  </button>
                </div>
              </div>
            </div>

            {/* Generated Code */}
            <div className="bg-slate-950 rounded-2xl p-4 border border-teal-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-teal-400" /> HTML Output:
                </span>
                <span className="text-[10px] bg-teal-950 text-teal-300 border border-teal-700 px-2 py-0.5 rounded font-mono">
                  Container Tag
                </span>
              </div>
              <pre className="text-xs sm:text-sm font-mono text-teal-200 bg-slate-900/90 p-3 rounded-xl border border-teal-500/20 overflow-x-auto">
                <code>{`<a href="${linkUrl}"${linkTarget === '_blank' ? ' target="_blank"' : ''}>${linkText}</a>`}</code>
              </pre>
            </div>
          </div>

          {/* Live Browser Viewport */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900/90 border border-teal-500/30 rounded-3xl overflow-hidden shadow-2xl">
              {/* Browser Address Bar */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1 text-xs text-slate-300 font-mono flex items-center justify-between">
                  <span className="truncate">http://localhost:3000/index.html</span>
                  <span className="text-[10px] text-teal-400 font-bold bg-teal-950/80 px-1.5 py-0.5 rounded">
                    LIVE PREVIEW
                  </span>
                </div>
              </div>

              {/* Viewport Canvas */}
              <div className="p-6 bg-white min-h-[220px] text-slate-900 flex flex-col justify-center">
                <p className="text-sm text-slate-600 mb-2">
                  Welcome to the Official Portal. Please use the link below to access resources:
                </p>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl my-2">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSimulateClick();
                    }}
                    className="text-blue-600 underline font-medium hover:text-blue-800 active:text-red-600 cursor-pointer inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{linkText || 'Empty Link'}</span>
                    {linkTarget === '_blank' && <ExternalLink className="w-3.5 h-3.5 inline text-blue-500" />}
                  </a>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  * Click the link above to test hyperlink interaction and trigger simulated navigation.
                </p>
              </div>

              {/* Action Log / Feedback */}
              <div className="bg-slate-950/90 p-4 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Status: {linkStatusMessage}</span>
                  <span className="text-teal-400 font-mono text-[11px]">
                    Default Style: Blue & Underlined
                  </span>
                </div>
              </div>
            </div>

            {/* Exam Insight Card */}
            <div className="p-4 rounded-2xl bg-teal-950/40 border border-teal-500/30 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2 text-teal-300 font-bold">
                <Sparkles className="w-4 h-4" />
                O/L Exam Master Key: Default Link States
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-400 text-[11px]">
                <li><b className="text-blue-400">Unvisited Link (නොගිය සබැඳිය):</b> Blue color with underline.</li>
                <li><b className="text-purple-400">Visited Link (පිවිසි සබැඳිය):</b> Purple color with underline.</li>
                <li><b className="text-red-400">Active Link (ක්ලික් කරන මොහොත):</b> Red color with underline.</li>
                <li><b className="text-teal-300">target="_blank":</b> Opens destination in a brand-new tab or browser window.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Images <img> */}
      {activeTab === 'image' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls */}
          <div className="lg:col-span-6 bg-slate-900/80 border border-cyan-500/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-cyan-400" />
                Image Embedding Studio (&lt;img&gt;)
              </h3>
              <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-full font-mono font-bold">
                Empty Tag
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <code className="text-cyan-300 font-bold">&lt;img&gt;</code> is an <b className="text-amber-400">Empty Tag (හිස් ටැගය)</b> with no closing tag.
              It uses <code className="text-cyan-300 font-bold">src</code> for file path and <code className="text-emerald-300 font-bold">alt</code> for alternative text when the image cannot load.
            </p>

            {/* Image Dimension Sliders */}
            <div className="space-y-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300">width attribute:</span>
                <span className="font-mono text-xs text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                  width="{imgWidth}"
                </span>
              </div>
              <input
                type="range"
                min="120"
                max="400"
                step="10"
                value={imgWidth}
                onChange={(e) => setImgWidth(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-bold text-slate-300">height attribute:</span>
                <span className="font-mono text-xs text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                  height="{imgHeight}"
                </span>
              </div>
              <input
                type="range"
                min="80"
                max="260"
                step="10"
                value={imgHeight}
                onChange={(e) => setImgHeight(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Attributes Inputs */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-300 mb-1 block">
                  alt Attribute (විකල්ප පාඨය - 2020 P2 Q05):
                </label>
                <input
                  type="text"
                  value={imgAlt}
                  onChange={(e) => setImgAlt(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-400"
                  placeholder="Describe image for screen readers or broken links"
                />
              </div>

              {/* Toggles */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={() => {
                    sound.playClick(isBrokenImg ? 500 : 350);
                    setIsBrokenImg(!isBrokenImg);
                  }}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                    isBrokenImg
                      ? 'bg-red-500/20 border-red-400 text-red-300'
                      : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:text-white'
                  }`}
                >
                  <ImageOff className="w-4 h-4 text-red-400" />
                  {isBrokenImg ? 'Fix Image Path' : 'Simulate Broken Image (Test alt)'}
                </button>

                <button
                  onClick={() => {
                    sound.playVictory();
                    setIsLinkedImg(!isLinkedImg);
                  }}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                    isLinkedImg
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  <Link2 className="w-4 h-4 text-cyan-300" />
                  {isLinkedImg ? 'Wrap Image in <a> Link' : 'Standalone Image'}
                </button>
              </div>
            </div>

            {/* Code Output */}
            <div className="bg-slate-950 rounded-2xl p-4 border border-cyan-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" /> HTML Output (2020 P2 Q05):
                </span>
                <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-700 px-2 py-0.5 rounded font-mono">
                  Empty Tag (No &lt;/img&gt;)
                </span>
              </div>
              <pre className="text-xs sm:text-sm font-mono text-cyan-200 bg-slate-900/90 p-3 rounded-xl border border-cyan-500/20 overflow-x-auto whitespace-pre-wrap">
                {isLinkedImg ? (
                  <code>{`<a href="https://www.moe.gov.lk">\n  <img src="${isBrokenImg ? 'broken_photo.jpg' : 'classroom.jpg'}" alt="${imgAlt}" width="${imgWidth}" height="${imgHeight}">\n</a>`}</code>
                ) : (
                  <code>{`<img src="${isBrokenImg ? 'broken_photo.jpg' : 'classroom.jpg'}" alt="${imgAlt}" width="${imgWidth}" height="${imgHeight}">`}</code>
                )}
              </pre>
            </div>
          </div>

          {/* Browser Preview */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900/90 border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1 text-xs text-slate-300 font-mono">
                  <span>http://localhost:3000/media.html</span>
                </div>
              </div>

              <div className="p-6 bg-slate-100 min-h-[300px] flex flex-col items-center justify-center text-center">
                {isBrokenImg ? (
                  <div 
                    style={{ width: `${imgWidth}px`, height: `${imgHeight}px` }}
                    className="border-2 border-dashed border-red-400 bg-red-50 rounded-xl flex flex-col items-center justify-center p-4 text-red-700 shadow-inner"
                  >
                    <ImageOff className="w-8 h-8 text-red-500 mb-2" />
                    <span className="text-xs font-bold font-mono">[Broken Image: src="broken_photo.jpg"]</span>
                    <span className="text-xs mt-1 bg-white px-2 py-1 rounded border border-red-200 font-medium text-slate-800">
                      alt text rendered: "{imgAlt}"
                    </span>
                  </div>
                ) : (
                  <div className="relative group inline-block">
                    {isLinkedImg ? (
                      <a
                        href="https://www.moe.gov.lk"
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.preventDefault();
                          sound.playVictory();
                          alert('Clicked Linked Image! Simulating navigation to https://www.moe.gov.lk');
                        }}
                        className="block rounded-xl overflow-hidden border-2 border-blue-500 shadow-lg hover:ring-4 hover:ring-blue-400 transition-all cursor-pointer"
                      >
                        <img
                          src={imgSrc}
                          alt={imgAlt}
                          style={{ width: `${imgWidth}px`, height: `${imgHeight}px`, objectFit: 'cover' }}
                          className="rounded-lg"
                        />
                        <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1 backdrop-blur-[2px]">
                          <ExternalLink className="w-4 h-4" /> Click Image to Navigate
                        </div>
                      </a>
                    ) : (
                      <img
                        src={imgSrc}
                        alt={imgAlt}
                        style={{ width: `${imgWidth}px`, height: `${imgHeight}px`, objectFit: 'cover' }}
                        className="rounded-xl border border-slate-300 shadow-md"
                      />
                    )}
                  </div>
                )}
              </div>

              <div className="bg-slate-950/90 p-4 border-t border-slate-800 text-xs flex items-center justify-between">
                <span className="text-slate-400 font-mono">
                  {isBrokenImg ? '⚠️ Triggered Alt Text Fallback' : '✅ Image Rendered Successfully'}
                </span>
                <span className="text-cyan-400 font-mono text-[11px]">
                  {isLinkedImg ? '🔗 Linked Hyperlink Image' : '🖼️ Static Embedded Image'}
                </span>
              </div>
            </div>

            {/* Tip Card */}
            <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-300 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                Image Attributes Quick Summary (විභාග සාරාංශය):
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-400 text-[11px]">
                <li><b className="text-cyan-300">src:</b> URL or file path of the image (<code className="text-slate-200">photo.jpg</code>).</li>
                <li><b className="text-cyan-300">alt:</b> Alternative text displayed if image fails to load or for visually impaired screen readers.</li>
                <li><b className="text-cyan-300">width & height:</b> Specified in pixels or percentage (e.g., <code className="text-slate-200">width="200"</code>).</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: HTML Forms <form> */}
      {activeTab === 'form' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls */}
          <div className="lg:col-span-6 bg-slate-900/80 border border-emerald-500/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <FormInput className="w-5 h-5 text-emerald-400" />
                HTML Form Elements Workshop
              </h3>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-mono font-bold">
                &lt;form&gt; & &lt;input&gt;
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Forms collect user input via input controls. Key input types tested in O/L: <code className="text-emerald-300">text</code>, <code className="text-emerald-300">password</code>, <code className="text-emerald-300">radio</code> (single choice), <code className="text-emerald-300">checkbox</code> (multiple choice), <code className="text-emerald-300">submit</code>, and <code className="text-emerald-300">reset</code>.
            </p>

            {/* Form Fields Config */}
            <div className="space-y-4">
              {/* Text & Password */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    &lt;input type="text"&gt;:
                  </label>
                  <input
                    type="text"
                    value={formTextVal}
                    onChange={(e) => setFormTextVal(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-200"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    &lt;input type="password"&gt;:
                  </label>
                  <input
                    type="password"
                    value={formPassVal}
                    onChange={(e) => setFormPassVal(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-200"
                  />
                </div>
              </div>

              {/* Radio Group (Single Choice) */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  &lt;input type="radio" name="gender"&gt; (Single Choice - Shared name attribute):
                </label>
                <div className="flex gap-4 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <label className="flex items-center gap-2 text-xs text-slate-200 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      checked={formGender === 'male'}
                      onChange={() => setFormGender('male')}
                      className="accent-emerald-500"
                    />
                    Male (පිරිමි)
                  </label>
                  <label className="flex items-center gap-2 text-xs text-slate-200 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      checked={formGender === 'female'}
                      onChange={() => setFormGender('female')}
                      className="accent-emerald-500"
                    />
                    Female (ගැහැණු)
                  </label>
                </div>
              </div>

              {/* Checkboxes (Multiple Choice) */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  &lt;input type="checkbox"&gt; (Multiple Choice Selection):
                </label>
                <div className="flex gap-4 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <label className="flex items-center gap-2 text-xs text-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formStreams.ict}
                      onChange={(e) => setFormStreams({ ...formStreams, ict: e.target.checked })}
                      className="accent-emerald-500"
                    />
                    ICT
                  </label>
                  <label className="flex items-center gap-2 text-xs text-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formStreams.science}
                      onChange={(e) => setFormStreams({ ...formStreams, science: e.target.checked })}
                      className="accent-emerald-500"
                    />
                    Science
                  </label>
                  <label className="flex items-center gap-2 text-xs text-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formStreams.commerce}
                      onChange={(e) => setFormStreams({ ...formStreams, commerce: e.target.checked })}
                      className="accent-emerald-500"
                    />
                    Commerce
                  </label>
                </div>
              </div>

              {/* Dropdown <select> */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  &lt;select&gt; &lt;option&gt; Dropdown:
                </label>
                <select
                  value={formDistrict}
                  onChange={(e) => setFormDistrict(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-200"
                >
                  <option value="Colombo">Colombo (කොළඹ)</option>
                  <option value="Gampaha">Gampaha (ගම්පහ)</option>
                  <option value="Kandy">Kandy (මහනුවර)</option>
                  <option value="Galle">Galle (ගාල්ල)</option>
                </select>
              </div>
            </div>

            {/* Generated Form Code */}
            <div className="bg-slate-950 rounded-2xl p-4 border border-emerald-500/30">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                HTML Form Code Snippet:
              </span>
              <pre className="text-xs font-mono text-emerald-200 bg-slate-900/90 p-3 rounded-xl border border-emerald-500/20 overflow-x-auto whitespace-pre-wrap max-h-48 overflow-y-auto">
{`<form action="submit.php" method="POST">
  Name: <input type="text" name="fname" value="${formTextVal}">
  Password: <input type="password" name="pwd">
  Gender:
  <input type="radio" name="gender" value="male"${formGender === 'male' ? ' checked' : ''}> Male
  <input type="radio" name="gender" value="female"${formGender === 'female' ? ' checked' : ''}> Female
  <input type="submit" value="Register">
  <input type="reset" value="Clear">
</form>`}
              </pre>
            </div>
          </div>

          {/* Form Live Preview */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900/90 border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1 text-xs text-slate-300 font-mono">
                  <span>http://localhost:3000/register.html</span>
                </div>
              </div>

              {/* Rendered Form */}
              <div className="p-6 bg-white text-slate-800 min-h-[300px] space-y-4">
                <h4 className="font-bold text-slate-900 border-b pb-2">Student Registration Form</h4>
                
                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-4">
                    <span className="w-24 font-medium text-slate-600">Full Name:</span>
                    <span className="font-mono bg-slate-100 px-3 py-1.5 rounded border border-slate-300 flex-1">
                      {formTextVal || '(empty)'}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="w-24 font-medium text-slate-600">Password:</span>
                    <span className="font-mono bg-slate-100 px-3 py-1.5 rounded border border-slate-300 flex-1">
                      {'•'.repeat(formPassVal.length || 8)}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="w-24 font-medium text-slate-600">Gender:</span>
                    <span className="font-semibold text-emerald-700 capitalize">{formGender}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="w-24 font-medium text-slate-600">Selected Subjects:</span>
                    <div className="flex gap-2">
                      {formStreams.ict && <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">ICT</span>}
                      {formStreams.science && <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">Science</span>}
                      {formStreams.commerce && <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">Commerce</span>}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="w-24 font-medium text-slate-600">District:</span>
                    <span className="font-semibold text-slate-800">{formDistrict}</span>
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="pt-4 border-t flex gap-3">
                  <button
                    onClick={() => {
                      sound.playVictory();
                      setFormSubmitted(true);
                      setTimeout(() => setFormSubmitted(false), 3000);
                    }}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg text-xs shadow transition-all cursor-pointer"
                  >
                    Submit Form (&lt;input type="submit"&gt;)
                  </button>
                  <button
                    onClick={() => {
                      sound.playClick(400);
                      setFormTextVal('');
                      setFormPassVal('');
                      setFormGender('male');
                      setFormStreams({ ict: false, science: false, commerce: false });
                    }}
                    className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold px-4 py-2 rounded-lg text-xs transition-all cursor-pointer"
                  >
                    Reset Form (&lt;input type="reset"&gt;)
                  </button>
                </div>

                {formSubmitted && (
                  <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs rounded-lg flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Form payload packaged and transmitted via HTTP POST method!</span>
                  </div>
                )}
              </div>
            </div>

            {/* Exam Tip Card */}
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-300 font-bold">
                <Sparkles className="w-4 h-4" />
                O/L Exam Focus: Radio vs Checkbox
              </div>
              <p className="text-slate-400 text-[11px]">
                • <b className="text-emerald-300">Radio button:</b> Allows the user to select <i>only one</i> option among multiple choices with matching <code className="text-slate-200">name</code> attributes.
                <br />
                • <b className="text-emerald-300">Checkbox:</b> Allows the user to select <i>zero, one, or multiple</i> options simultaneously.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: WYSIWYG vs Text Editors */}
      {activeTab === 'editors' && (
        <div className="bg-slate-900/80 border border-amber-500/30 rounded-3xl p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <Edit3 className="w-5 h-5 text-amber-400" />
              Web Authoring Tools: WYSIWYG vs. Text Editors
            </h3>
            <span className="text-xs bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full font-mono font-bold">
              Syllabus Taxonomy
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            In Grade 11 ICT syllabus, web development tools are categorized into two primary categories: 
            <b className="text-amber-300"> Text-Based Editors</b> (Raw HTML code entry) and 
            <b className="text-cyan-300"> WYSIWYG Editors</b> (What You See Is What You Get - Visual Layout).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Text-Based Editors Card */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-4 hover:border-amber-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Text-Based Editors (පෙළ සංස්කාරක)</h4>
                  <span className="text-[11px] text-slate-400">Manual Code Writing</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                  <b className="text-amber-300">Key Software Examples:</b>
                  <p className="text-slate-400 mt-0.5">Notepad, Notepad++, Sublime Text, Visual Studio Code</p>
                </div>

                <ul className="list-disc list-inside space-y-1.5 text-slate-400 text-[11px]">
                  <li>Requires deep knowledge of HTML tags, attributes, and syntax.</li>
                  <li>Lightweight, minimal resource usage, and fast startup.</li>
                  <li>Developer has 100% fine-grained control over clean HTML markup.</li>
                  <li>Files must be saved with <code className="text-amber-300 font-bold">.html</code> or <code className="text-amber-300 font-bold">.htm</code> extension.</li>
                </ul>
              </div>
            </div>

            {/* WYSIWYG Editors Card */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-4 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">WYSIWYG Editors (දකින දෙයම ලැබෙන සංස්කාරක)</h4>
                  <span className="text-[11px] text-cyan-400">What You See Is What You Get</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                  <b className="text-cyan-300">Key Software Examples (Syllabus):</b>
                  <p className="text-slate-400 mt-0.5">KompoZer, Adobe Dreamweaver, Microsoft Expression Web</p>
                </div>

                <ul className="list-disc list-inside space-y-1.5 text-slate-400 text-[11px]">
                  <li>Visual drag-and-drop design interface similar to word processors.</li>
                  <li>Automatically generates HTML/CSS code behind the scenes.</li>
                  <li>Beginner friendly: does not require memorizing every single HTML tag.</li>
                  <li>May generate redundant or bloated code compared to hand-written HTML.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Interactive Matcher / Check */}
          <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-300 space-y-0.5">
              <span className="font-bold text-amber-300 block">💡 G.C.E. O/L Examination Question Pattern:</span>
              <p className="text-slate-400 text-[11px]">
                "State one Open-Source WYSIWYG web editor recommended in the O/L syllabus." &rarr; Answer: <b className="text-white">KompoZer</b>.
              </p>
            </div>
            <button
              onClick={() => sound.playVictory()}
              className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition-all shrink-0 cursor-pointer"
            >
              Sound Check (Mastered)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
