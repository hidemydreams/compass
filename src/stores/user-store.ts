'use client';
import { create } from 'zustand';
import { memory } from '@/shared/utils/memory-store';
import { useEffect } from 'react';
import { UserLayoutSettings } from '@prisma/client';

interface UserProfileState {
  userProfile: UserWithProfile | null;
  isLoading: boolean;
  fetchUserProfile: () => Promise<void>;
  setUserProfile: (profile: UserWithProfile) => void;
  setUserSettings: (settings: Partial<UserLayoutSettings>) => void;
}

export const useUserProfileStore = create<UserProfileState>((set) => ({
  userProfile: null,
  isLoading: true,

  fetchUserProfile: async () => {
    set({ isLoading: true });

    try {
      const response = await fetch('/api/user/profile');
      if (response.ok) {
        const data: UserWithProfile = await response.json();
        set({ userProfile: data });
        memory.set(
          'settingsStringified',
          JSON.stringify(data?.profile?.settings),
        );
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  setUserProfile: (profile) => {
    set({ userProfile: profile });
  },

  setUserSettings: (settings) => {
    //@ts-expect-error some crazy stiff with prisma
    set((state) => {
      const updated = {
        ...state.userProfile,
        profile: {
          ...state.userProfile?.profile,
          settings: {
            ...state?.userProfile?.profile?.settings,
            ...settings,
          },
        },
      };

      return { userProfile: updated };
    });
  },
}));

export const InitUserProfile = () => {
  const fetchUserProfile = useUserProfileStore((s) => s.fetchUserProfile);

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  return null; // no UI needed
};
