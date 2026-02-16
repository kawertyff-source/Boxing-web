import { useGameStore } from '../store.js';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const { stats, points, upgrade, pullGacha, lastReward, skills } = useGameStore();

  return (
    <div className="absolute inset-y-0 right-0 w-96 bg-black/80 border-l-4 border-red-600 p-6 text-white backdrop-blur-md overflow-y-auto">
      <h1 className="text-4xl font-black italic mb-6 border-b-4 border-white pb-2 italic">DASHBOARD</h1>
      
      {/* Status */}
      <div className="space-y-4 mb-10">
        <p className="text-yellow-400 font-bold">POINTS: {points}</p>
        {Object.entries(stats).map(([key, val]) => (
          <div key={key} className="flex flex-col">
            <div className="flex justify-between uppercase text-xs font-bold mb-1">
              <span>{key}</span> <span>{val}</span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 h-3 bg-gray-800 border border-gray-600 overflow-hidden">
                <div className="h-full bg-red-600" style={{ width: `${val}%` }} />
              </div>
              <button onClick={() => upgrade(key)} className="bg-white text-black text-xs px-2 font-bold hover:bg-red-500">+</button>
            </div>
          </div>
        ))}
      </div>

      {/* Gacha */}
      <button onClick={pullGacha} className="w-full bg-red-600 hover:bg-red-500 py-4 font-black text-xl skew-x-[-10deg] transition-all active:scale-95">
        PULL SKILL (10 PTS)
      </button>

      {lastReward && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-4 p-4 border-2 border-dashed text-center" style={{ borderColor: lastReward.color }}>
          <p className="text-xs uppercase">New Skill Unlocked!</p>
          <p className="text-2xl font-black" style={{ color: lastReward.color }}>{lastReward.name}</p>
        </motion.div>
      )}

      {/* Inventory */}
      <div className="mt-10">
        <h2 className="font-bold border-b border-gray-700 mb-4 uppercase">Skill History</h2>
        <div className="grid grid-cols-1 gap-2">
          {skills.map((s, i) => (
            <div key={i} className="bg-gray-900 p-2 text-xs border-l-2" style={{ borderColor: s.color }}>
              {s.name} <span className="float-right text-gray-500">{s.tier}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
