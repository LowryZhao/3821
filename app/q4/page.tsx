'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type ChoiceKey = 'creative' | 'fast' | 'relaxed' | 'mix';

export default function Q4Page() {
  const router = useRouter();
  const [selected, setSelected] = useState<ChoiceKey | null>(null);

  const onConfirm = () => {
    if (!selected) return;
    router.push(`/play?step=q4&choice=${selected}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      {/* 画布容器 */}
      <div className="relative w-[390px] h-[844px] rounded-[28px] overflow-hidden shadow-2xl bg-[#FCE9D9]">

        {/* ===== 标题 ===== */}
        <span
          style={{
            position: 'absolute',
            top: 44,
            left: 29,
            width: 316,
            height: 64,
            fontFamily: "'Dongle', sans-serif",
            fontWeight: 700,
            fontSize: 32,
            lineHeight: '32px',
            textAlign: 'center',
            color: '#BF4F26',
            opacity: 1,
          }}
        >
          Where will you set up your basecamp for learning?
        </span>

        {/* ===== 插画 ===== */}
        <img
          src={
            selected
              ? `/quiz/q4/${selected}.png`
              : '/quiz/q4/base.png'
          }
          alt="Basecamp"
          className="absolute select-none pointer-events-none"
          style={{
            top: 142,
            left: 59,
            width: 256,
            height: 256,
            opacity: 1,
          }}
        />

        {/* ===== Big and Creative ===== */}
        <button
          onClick={() => setSelected('creative')}
          style={{
            position: 'absolute',
            top: 418,
            left: 59,
            width: 256,
            height: 44,
            borderRadius: 7,
            padding: '10px',
            gap: 10,
            opacity: 1,
            background: selected === 'creative' ? '#BF4F26' : '#EABFA6',
            color: selected === 'creative' ? '#FFFFFF' : '#BF4F26',
          }}
          className="font-bagel text-[16px] leading-[18px] text-center transition"
        >
          Big and Creative
        </button>

        {/* ===== Fast-paced and Exciting ===== */}
        <button
          onClick={() => setSelected('fast')}
          style={{
            position: 'absolute',
            top: 482,
            left: 59,
            width: 256,
            height: 44,
            borderRadius: 7,
            padding: '10px',
            gap: 10,
            opacity: 1,
            background: selected === 'fast' ? '#BF4F26' : '#EABFA6',
            color: selected === 'fast' ? '#FFFFFF' : '#BF4F26',
          }}
          className="font-bagel text-[16px] leading-[18px] text-center transition"
        >
          Fast-paced and Exciting
        </button>

        {/* ===== Quiet and Relaxed ===== */}
        <button
          onClick={() => setSelected('relaxed')}
          style={{
            position: 'absolute',
            top: 546,
            left: 59,
            width: 256,
            height: 44,
            borderRadius: 7,
            padding: '10px',
            gap: 10,
            opacity: 1,
            background: selected === 'relaxed' ? '#BF4F26' : '#EABFA6',
            color: selected === 'relaxed' ? '#FFFFFF' : '#BF4F26',
          }}
          className="font-bagel text-[16px] leading-[18px] text-center transition"
        >
          Quiet and Relaxed
        </button>

        {/* ===== A mix of City and Nature ===== */}
        <button
          onClick={() => setSelected('mix')}
          style={{
            position: 'absolute',
            top: 610,
            left: 59,
            width: 256,
            height: 44,
            borderRadius: 7,
            padding: '10px',
            gap: 10,
            opacity: 1,
            background: selected === 'mix' ? '#BF4F26' : '#EABFA6',
            color: selected === 'mix' ? '#FFFFFF' : '#BF4F26',
          }}
          className="font-bagel text-[16px] leading-[18px] text-center transition"
        >
          A mix of City and Nature
        </button>

        {/* ===== Confirm 按钮 ===== */}
        <button
          disabled={!selected}
          onClick={onConfirm}
          style={{
            position: 'absolute',
            top: 694,
            left: 83,
            width: 208,
            height: 44,
            borderRadius: 7,
            padding: '10px 40px',
            gap: 10,
            opacity: selected ? 1 : 0.5,
          }}
          className="bg-[#B24C2B] text-white font-semibold font-bagel hover:brightness-110 disabled:cursor-not-allowed transition"
        >
          Confirm
        </button>

        {/* ===== 提示语 ===== */}
        <span
          style={{
            position: 'absolute',
            top: 757,
            left: 29,
            width: 316,
            height: 38,
            fontFamily: "'Dongle', sans-serif",
            fontWeight: 300,
            fontSize: 24,
            lineHeight: '38px',
            textAlign: 'center',
            color: '#BF4F26',
            opacity: 1,
          }}
        >
          Select Answer then Confirm
        </span>
      </div>
    </main>
  );
}
