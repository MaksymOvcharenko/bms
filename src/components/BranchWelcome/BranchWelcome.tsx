'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { MapPin } from 'lucide-react';
import type { BranchKey } from '@/config/contact';
import { BRANCH_STORAGE_KEY, saveSelectedBranch } from '@/hooks/useSelectedBranch';
import styles from './BranchWelcome.module.css';

export default function BranchWelcome() {
  const t = useTranslations('BranchWelcome');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(window.localStorage.getItem(BRANCH_STORAGE_KEY) === null);
  }, []);

  const selectBranch = (branch: BranchKey) => {
    saveSelectedBranch(branch);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <aside
      className={styles.notice}
      role="dialog"
      aria-labelledby="branch-welcome-title"
      aria-describedby="branch-welcome-description"
    >
      <div className={styles.accent} />
      <p className={styles.eyebrow}>BLS SERVICE</p>
      <h2 id="branch-welcome-title" className={styles.title}>{t('title')}</h2>
      <p id="branch-welcome-description" className={styles.description}>{t('description')}</p>

      <div className={styles.options}>
        <button className={styles.option} type="button" onClick={() => selectBranch('krakow')}>
          <MapPin aria-hidden="true" />
          <strong>{t('krakow')}</strong>
        </button>

        <button className={`${styles.option} ${styles.newOption}`} type="button" onClick={() => selectBranch('warsaw')}>
          <MapPin aria-hidden="true" />
          <strong>{t('warsaw')}</strong>
          <em>{t('new')}</em>
        </button>
      </div>
    </aside>
  );
}
