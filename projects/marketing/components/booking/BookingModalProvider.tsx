"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { BookingModal } from "./BookingModal";

const BookingModalContext = createContext<{ open: () => void } | null>(null);

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal requires a BookingModalProvider");
  }
  return context;
}

/** Holds the booking dialog and lets any descendant trigger open it. */
export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const value = useMemo(() => ({ open: () => setIsOpen(true) }), []);

  return (
    <BookingModalContext.Provider value={value}>
      {children}
      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </BookingModalContext.Provider>
  );
}
