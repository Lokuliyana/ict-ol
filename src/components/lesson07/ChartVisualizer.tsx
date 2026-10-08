'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart2, 
  PieChart, 
  TrendingUp, 
  Sparkles, 
  RotateCcw, 
  Layers, 
  Sliders,
  Table as TableIcon
} from 'lucide-react';
import { sound } from '@/utils/soundEffects';

type ChartType = 'column' | 'bar' | 'pie' | 'line';

interface DataPoint {
  label: string;
  value: number;
  color: string;
}

export function ChartVisualizer() {
  const [chartType, setChartType] = useState<ChartType>('column');
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([
    { label: 'Term 1', value: 75, color: '#10b981' },
    { label: 'Term 2', value: 85, color: '#06b6d4' },
    { label: 'Term 3', value: 92, color: '#f59e0b' },
    { label: 'O/L Model', value: 98, color: '#8b5cf6' }
  ]);

  const maxVal = Math.max(...dataPoints.map(d => d.value), 100);
  const totalVal = dataPoints.reduce((sum, d) => sum + d.value, 0);

  const handleUpdateValue = (idx: number, newVal: number) => {
    sound.playClick(700, 0.02);
    setDataPoints(prev => prev.map((d, i) => i === idx ? { ...d, value: Math.max(0, Math.min(100, newVal)) } : d));
  };

  const handleSelectChart = (type: ChartType) => {
    sound.playClick(600);
    setChartType(type);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              STATION 06 • දත්ත දෘශ්‍යකරණය
            </span>
            <span className="text-xs font-semibold text-slate-400">
              Column, Bar, Pie & Line Chart Generator
            </span>
          </div>
          <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-emerald-400" />
            The Chart Visualizer Studio (දත්ත ප්‍රස්ථාරකරණ මැදිරිය)
          </h2>
          <p className="text-xs text-slate-300">
            Convert tabular data into dynamic Column, Bar, Pie, and Line charts and learn when each chart format is appropriate for O/L exams.
          </p>
        </div>

        {/* Chart Format Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
          <button
            onClick={() => handleSelectChart('column')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              chartType === 'column' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Column
          </button>
          <button
            onClick={() => handleSelectChart('bar')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              chartType === 'bar' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Bar
          </button>
          <button
            onClick={() => handleSelectChart('pie')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              chartType === 'pie' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Pie
          </button>
          <button
            onClick={() => handleSelectChart('line')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              chartType === 'line' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Line
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Canvas: Live Rendered Dynamic Chart */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-950 border-2 border-slate-800 shadow-2xl min-h-[380px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-white uppercase">
                {chartType === 'column' && 'Vertical Column Chart (සිරස් තීරු ප්‍රස්ථාරය)'}
                {chartType === 'bar' && 'Horizontal Bar Chart (තිරස් තීරු ප්‍රස්ථාරය)'}
                {chartType === 'pie' && 'Proportional Pie Chart (වෘත්ත ප්‍රස්ථාරය)'}
                {chartType === 'line' && 'Trend Line Chart (රේඛා ප්‍රස්ථාරය)'}
              </span>
              <span className="text-xs font-mono text-emerald-400">Total: {totalVal}</span>
            </div>

            {/* Chart Area */}
            <div className="my-auto py-6">
              {/* 1. Column Chart */}
              {chartType === 'column' && (
                <div className="flex items-end justify-around h-52 gap-4 pt-4 border-b border-slate-800">
                  {dataPoints.map((d, idx) => {
                    const heightPercent = Math.round((d.value / 100) * 100);
                    return (
                      <div key={idx} className="flex flex-col items-center gap-2 flex-1 max-w-[70px]">
                        <span className="text-xs font-mono font-bold text-slate-300">{d.value}</span>
                        <motion.div
                          layout
                          initial={{ height: 0 }}
                          animate={{ height: `${heightPercent}%` }}
                          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                          style={{ backgroundColor: d.color }}
                          className="w-full rounded-t-xl shadow-lg"
                        />
                        <span className="text-[11px] font-mono text-slate-400 truncate">{d.label}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* 2. Bar Chart */}
              {chartType === 'bar' && (
                <div className="space-y-3">
                  {dataPoints.map((d, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs font-mono text-slate-300">
                        <span>{d.label}</span>
                        <span className="font-bold">{d.value}</span>
                      </div>
                      <div className="w-full h-5 bg-slate-900 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${d.value}%` }}
                          style={{ backgroundColor: d.color }}
                          className="h-full rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 3. Pie Chart */}
              {chartType === 'pie' && (
                <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
                  {/* Proportional Donut Stack */}
                  <div className="relative w-40 h-40 rounded-full border-4 border-slate-800 flex items-center justify-center bg-slate-900">
                    <div className="text-center font-mono">
                      <div className="text-xs text-slate-400">Total</div>
                      <div className="text-lg font-black text-white">{totalVal}</div>
                    </div>
                  </div>

                  {/* Legend Slices */}
                  <div className="space-y-2">
                    {dataPoints.map((d, idx) => {
                      const slicePercent = Math.round((d.value / (totalVal || 1)) * 100);
                      return (
                        <div key={idx} className="flex items-center gap-3 text-xs font-mono">
                          <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: d.color }} />
                          <span className="text-slate-300 w-24 truncate">{d.label}:</span>
                          <span className="font-bold text-white">{slicePercent}% ({d.value})</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 4. Line Chart */}
              {chartType === 'line' && (
                <div className="relative h-52 flex items-end justify-between px-6 pt-4 border-b border-l border-slate-800">
                  {dataPoints.map((d, idx) => {
                    const bottomPercent = Math.round((d.value / 100) * 80);
                    return (
                      <div key={idx} className="flex flex-col items-center relative">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1, bottom: `${bottomPercent}%` }}
                          className="w-4 h-4 rounded-full border-2 border-white shadow-lg absolute"
                          style={{ backgroundColor: d.color }}
                        />
                        <span className="text-xs font-mono font-bold text-white absolute -top-6">
                          {d.value}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 mt-4">{d.label}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-500 font-mono flex justify-between">
              <span>AXIS: ICT SCORE (0 - 100)</span>
              <span>DYNAMIC SVG RENDERER</span>
            </div>
          </div>
        </div>

        {/* Right: Live Data Table Editor */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-white flex items-center gap-1.5 text-emerald-400">
                <TableIcon className="w-4 h-4" />
                <span>Live Data Table Inputs</span>
              </span>
              <span className="text-[10px] text-slate-400">Adjust sliders below</span>
            </div>

            <div className="space-y-3">
              {dataPoints.map((d, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300 font-bold">{d.label}</span>
                    <span className="font-bold" style={{ color: d.color }}>{d.value} Marks</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={d.value}
                    onChange={(e) => handleUpdateValue(idx, Number(e.target.value))}
                    className="w-full accent-emerald-400"
                  />
                </div>
              ))}
            </div>

            {/* O/L Chart Selection Guide */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5">
              <div className="text-white font-bold">O/L Examination Chart Selection:</div>
              <ul className="list-disc list-inside text-slate-300 text-[11px] space-y-1">
                <li><strong>Column / Bar Chart:</strong> Best for comparing individual categories (e.g. Student marks across subjects).</li>
                <li><strong>Pie Chart:</strong> Best for showing proportions / shares of a 100% whole.</li>
                <li><strong>Line Chart:</strong> Best for displaying continuous trends over time.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
