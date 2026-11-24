'use client';

import { useEffect, useState } from 'react';
import type { BranchKey } from '@/config/contact';

export const BRANCH_STORAGE_KEY = 'bls-selected-branch-v3';
export const BRANCH_CHANGED_EVENT = 'bls-branch-changed';

function readSelectedBranch(): BranchKey {
  if (typeof window === 'undefined') return 'krakow';

  return window.localStorage.getItem(BRANCH_STORAGE_KEY) === 'warsaw'
    ? 'warsaw'
    : 'krakow';
}

export function saveSelectedBranch(branch: BranchKey) {
  window.localStorage.setItem(BRANCH_STORAGE_KEY, branch);
  window.dispatchEvent(new CustomEvent(BRANCH_CHANGED_EVENT, { detail: branch }));
}

export function useSelectedBranch() {
  const [branch, setBranch] = useState<BranchKey>('krakow');

  useEffect(() => {
    setBranch(readSelectedBranch());

    const updateBranch = () => setBranch(readSelectedBranch());
    window.addEventListener(BRANCH_CHANGED_EVENT, updateBranch);
    window.addEventListener('storage', updateBranch);

    return () => {
      window.removeEventListener(BRANCH_CHANGED_EVENT, updateBranch);
      window.removeEventListener('storage', updateBranch);
    };
  }, []);

  return branch;
}
