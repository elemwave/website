# ADR-0002: Embed the Calendly inline widget in the booking dialog

Status: Draft
Supersedes: ADR-0001

## Context

ADR-0001 put a mocked email + confirmation-code flow
in front of a Calendly link
while no real mailer existed.
The team now prefers to let Calendly handle the entire scheduling flow
directly on the page,
which makes the verification layer — mocked or real — unnecessary.

## Decision

- The booking dialog keeps the native `<dialog>` shell
  and its three calls to action,
  but its body is now the **Calendly inline widget**
  (`https://calendly.com/marina-munoz-aircury?primary_color=122949`,
  the `primary_color` mirroring the `navy-700` token).
- The widget script (`assets.calendly.com/assets/external/widget.js`)
  is appended once, on the first open — nothing third-party loads up front.
  Every open calls `Calendly.initInlineWidget` into an emptied container,
  with `resize: true` so the iframe follows the content's real height
  instead of a fixed 700px box.
  The auto-scanned `calendly-inline-widget` class is deliberately not used:
  combining it with explicit initialisation would double-initialise
  on first script load, and alone it cannot survive dialog re-opens.
- The mocked email-verification domain (`lib/booking/` service, store,
  sender, validation, types, client), its API routes (`/api/booking/*`),
  the dialog form steps, and the `--color-error` token are removed;
  `lib/booking/constants.ts` keeps only the Calendly URL and script source.
- Trade-off: the page gains a third-party script and iframe,
  but only after the visitor opens the dialog,
  and the site no longer holds any booking state of its own.
