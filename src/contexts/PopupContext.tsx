'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import ConfirmationPopup from '@/shared/components/popups/ConfirmationPopup';

export type PopupType = 'confirmation';

// Define props for each popup type
export interface PopupProps {
  confirmation?: {
    action: unknown;
    onPositive: () => void;
  };
}

interface PopupContextType {
  open: (type: PopupType, props?: PopupProps[PopupType]) => void;
  close: () => void;
  isOpen: boolean;
  currentPopup: {
    type: PopupType | null;
    //eslint-disable-next-line
    props: any;
  };
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPopup, setCurrentPopup] = useState<{
    type: PopupType | null;
    //eslint-disable-next-line
    props: any;
  }>({
    type: null,
    props: {},
  });

  const open = (type: PopupType, props?: PopupProps[PopupType]) => {
    setCurrentPopup({ type, props: props || {} });
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    // Reset popup type after animation completes
    setTimeout(() => {
      setCurrentPopup({ type: null, props: {} });
    }, 300);
  };

  // Render the appropriate popup component based on type
  const renderPopup = () => {
    if (!currentPopup.type) return null;

    switch (currentPopup.type) {
      case 'confirmation':
        return (
          <ConfirmationPopup
            open={isOpen}
            onClose={close}
            {...currentPopup.props}
          />
        );
      default:
        return null;
    }
  };

  return (
    <PopupContext.Provider value={{ open, close, isOpen, currentPopup }}>
      {children}
      {renderPopup()}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};
