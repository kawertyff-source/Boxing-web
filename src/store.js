import { create } from 'zustand';

export const useGameStore = create((set) => ({
  points: 100,
  stats: { strength: 10, speed: 10, stamina: 10 },
  skills: [],
  isShaking: false,
  lastReward: null,

  upgrade: (stat) => set((state) => {
    if (state.points >= 10) {
      return { 
        points: state.points - 10, 
        stats: { ...state.stats, [stat]: state.stats[stat] + 1 } 
      };
    }
    return state;
  }),

  pullGacha: () => {
    const rand = Math.random() * 100;
    let reward = { name: "Basic Punch", color: "#94a3b8", tier: "Basic" };

    if (rand <= 0.2) reward = { name: "JJ KING", color: "#facc15", tier: "GOD" };
    else if (rand <= 6.2) reward = { name: "GON ONE PUNCH", color: "#fb923c", tier: "LEGEND" };
    else if (rand <= 21.2) reward = { name: "BRYAN HAWK", color: "#a855f7", tier: "EPIC" };
    else if (rand <= 55.0) reward = { name: "IPPO MAKINOUCHI", color: "#3b82f6", tier: "RARE" };

    if (reward.tier === "GOD") {
      set({ isShaking: true });
      setTimeout(() => set({ isShaking: false }), 2000);
    }

    set((state) => ({
      lastReward: reward,
      skills: [reward, ...state.skills].slice(0, 10) // เก็บ 10 อันล่าสุด
    }));
  }
}));
