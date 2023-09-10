'use client'

import { Accordion, AccordionItem } from '@nextui-org/accordion'

export default function LoadingContacts () {
  return (
    <Accordion variant="shadow">
      <AccordionItem key="1" aria-label="Accordion 1" subtitle="loading...">
        <div className="space-y-2 mb-5">
          <p className="font-extrabold">Loading...</p>
        </div>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 1" subtitle="loading...">
        <div className="space-y-2 mb-5">
          <p className="font-extrabold">Loading...</p>
        </div>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 1" subtitle="loading...">
        <div className="space-y-2 mb-5">
          <p className="font-extrabold">Loading...</p>
        </div>
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 1" subtitle="loading...">
        <div className="space-y-2 mb-5">
          <p className="font-extrabold">Loading...</p>
        </div>
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 1" subtitle="loading...">
        <div className="space-y-2 mb-5">
          <p className="font-extrabold">Loading...</p>
        </div>
      </AccordionItem>
    </Accordion>
  )
}
