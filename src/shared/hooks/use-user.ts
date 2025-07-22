// hooks/use-user.ts
import { useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';

export function useUser() {
  const supabase = createClient(); // works in Next.js App Router or use createClient() for Vite/React
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (mounted) {
        setUser(user);
        setLoading(false);
      }
    };

    getUser();

    // const { data: listener } = supabase.auth.onAuthStateChange(
    //   (_event, session) => {
    //     console.log('AUTH STATE CHANGE', session);
    //     setUser(session?.user ?? null);
    //   },
    // );

    return () => {
      mounted = false;
      // listener.subscription.unsubscribe();
    };
  }, []);

  return { user, loading };
}
