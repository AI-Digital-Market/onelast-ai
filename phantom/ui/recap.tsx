import React, { useEffect, useState } from 'react';
import { summarizeWeek } from '../core/reflector';

export default function Recap() {
  const [summary, setSummary] = useState('');

  useEffect(() => {
    const data = summarizeWeek();
    setSummary(data);
  }, []);

  return (
    <section className='p-6 bg-black text-white'>
      <h2 className='text-3xl font-bold mb-4'>🪞 Weekly Reflection</h2>
      <pre className='bg-gray-800 p-4 rounded'>{summary}</pre>
    </section>
  );
}
