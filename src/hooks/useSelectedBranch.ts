'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { BranchKey } from '@/config/contact';

export const BRANCH_STORAGE_KEY = 'bls-selected-branch-v3';
export const BRANCH_CHANGED_EVENT = 'bls-branch-changed';

function readSelectedBranch(): BranchKey {
  if (typeof window === 'undefined') return 'krakow';

  return window.localStorage.getItem(BRANCH_STORAGE_KEY) === 'warsaw'
    ? 'warsaw'
    : 'krakow';
}

export function withBranchSuffix(pathname: string, branch: BranchKey) {
  const cleanPath = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  const withoutWarsaw = cleanPath.replace(/\/w$/, '') || '/';

  if (branch === 'warsaw') {
    return withoutWarsaw === '/' ? '/w' : `${withoutWarsaw}/w`;
  }

  return withoutWarsaw;
}

function syncBranchUrl(branch: BranchKey) {
  const nextPath = withBranchSuffix(window.location.pathname, branch);
  if (nextPath === window.location.pathname) return;

  window.history.replaceState(
    window.history.state,
    '',
    `${nextPath}${window.location.search}${window.location.hash}`,
  );
}

export function saveSelectedBranch(branch: BranchKey) {
  window.localStorage.setItem(BRANCH_STORAGE_KEY, branch);
  syncBranchUrl(branch);
  window.dispatchEvent(new CustomEvent(BRANCH_CHANGED_EVENT, { detail: branch }));
}

export function useSelectedBranch() {
  const pathname = usePathname();
  const [branch, setBranch] = useState<BranchKey>('krakow');

  useEffect(() => {
    const savedBranch = readSelectedBranch();
    setBranch(savedBranch);
    syncBranchUrl(savedBranch);

    const updateBranch = () => setBranch(readSelectedBranch());
    window.addEventListener(BRANCH_CHANGED_EVENT, updateBranch);
    window.addEventListener('storage', updateBranch);

    return () => {
      window.removeEventListener(BRANCH_CHANGED_EVENT, updateBranch);
      window.removeEventListener('storage', updateBranch);
    };
  }, [pathname]);

  return branch;
}
