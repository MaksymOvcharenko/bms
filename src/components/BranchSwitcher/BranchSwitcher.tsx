'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronDown, MapPin } from 'lucide-react';
import type { BranchKey } from '@/config/contact';
import { saveSelectedBranch, useSelectedBranch } from '@/hooks/useSelectedBranch';
import styles from './BranchSwitcher.module.css';

export default function BranchSwitcher() {
  const t = useTranslations('BranchWelcome');
  const selectedBranch = useSelectedBranch();
  const [isOpen, setIsOpen] = useState(false);

  const selectBranch = (branch: BranchKey) => {
    saveSelectedBranch(branch);
    setIsOpen(false);
  };

  return (
    <div className={styles.switcher}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-label={t('switch_label')}
      >
        <MapPin aria-hidden="true" />
        <span>{selectedBranch === 'warsaw' ? t('warsaw') : t('krakow')}</span>
        <ChevronDown className={isOpen ? styles.rotated : undefined} aria-hidden="true" />
      </button>

      {isOpen ? (
        <div className={styles.menu}>
          <button type="button" className={selectedBranch === 'krakow' ? styles.active : undefined} onClick={() => selectBranch('krakow')}>
            {t('krakow')}
          </button>
          <button type="button" className={selectedBranch === 'warsaw' ? styles.active : undefined} onClick={() => selectBranch('warsaw')}>
            <span>{t('warsaw')}</span>
            <em>{t('new')}</em>
          </button>
        </div>
      ) : null}
    </div>
  );
}
