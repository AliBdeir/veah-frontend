import { getDatabase, off, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { firebaseApp } from "../firebase/firebaseConfig";
import usePersistedState from "./state";

export interface Message {
  senderId: string;
  text: string;
  timestamp: number;
}

export interface ChatSession {
  id?: string;
  messages: Message[];
  sent?: boolean;
}

export const useChatSession = () => {
  const { session, setSession } = usePersistedState((x) => ({ session: x.session, setSession: x.setSession }));
  const sessionId = session?.id;
  console.log("session", session?.id);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!sessionId) {
      return;
    }
    const dbRef = ref(getDatabase(firebaseApp), `chatSessions/${sessionId}`);
    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        const data = snapshot.val();
        console.log("data has changed", data);
        setSession({ id: sessionId, ...data });
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );

    return () => off(dbRef, "value", unsubscribe);
  }, [sessionId]);

  return { session, loading, error };
};
