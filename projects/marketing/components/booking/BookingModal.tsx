"use client";

import { useEffect, useRef } from "react";
import { CALENDLY_URL, CALENDLY_WIDGET_SRC } from "@/lib/booking/constants";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        resize?: boolean;
      }) => void;
    };
  }
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Booking dialog: native <dialog> hosting the Calendly inline widget.
 * The container deliberately omits Calendly's auto-scanned
 * `calendly-inline-widget` class — the widget is initialised explicitly on
 * every open (into an emptied container) so reopening cannot stack widgets
 * or double-initialise on first script load.
 */
export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  useEffect(() => {
    const widget = widgetRef.current;
    if (!isOpen || !widget) return;

    const init = () =>
      window.Calendly?.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: widget,
        resize: true,
      });

    let script: HTMLScriptElement | null = null;
    if (window.Calendly) {
      init();
    } else {
      script = document.querySelector<HTMLScriptElement>(
        `script[src="${CALENDLY_WIDGET_SRC}"]`,
      );
      if (!script) {
        script = document.createElement("script");
        script.src = CALENDLY_WIDGET_SRC;
        script.async = true;
        document.head.append(script);
      }
      script.addEventListener("load", init);
    }

    return () => {
      script?.removeEventListener("load", init);
      widget.replaceChildren();
    };
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current?.close();
      }}
      aria-labelledby="booking-dialog-title"
      className="m-auto w-[min(920px,calc(100%-40px))] rounded-[20px] border-none bg-transparent p-0 backdrop:bg-navy-950/72 backdrop:backdrop-blur-[4px]"
    >
      <div className="relative flex max-h-[calc(100dvh-40px)] flex-col gap-[10px] overflow-y-auto rounded-[20px] bg-white p-[clamp(16px,3vw,28px)] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
        <button
          type="button"
          aria-label="Close"
          onClick={() => dialogRef.current?.close()}
          className="absolute right-[14px] top-[14px] h-[34px] w-[34px] cursor-pointer rounded-full border-none bg-surface text-base text-navy-800 transition-colors hover:bg-pill-hover"
        >
          ✕
        </button>

        <h2
          id="booking-dialog-title"
          className="m-0 pr-12 font-heading text-[22px] font-semibold uppercase tracking-[1px] text-navy-800"
        >
          Schedule a meeting
        </h2>

        <div
          ref={widgetRef}
          className="min-h-[400px] w-full overflow-hidden rounded-[12px]"
        />
      </div>
    </dialog>
  );
}
