import { useEffect } from 'react'
import './styles.css'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// ── Exact Figma asset URLs (Hero / Navbar)
const imgLogo        = "/assets/final/logo-white.png"
const imgHeroBadge   = "https://www.figma.com/api/mcp/asset/110bf016-a63e-4854-959c-8884080d2c7c"
const imgHeroCard1   = "https://www.figma.com/api/mcp/asset/2eb8e893-7566-4365-a929-0622e41b1093"
const imgHeroLaptop  = "https://www.figma.com/api/mcp/asset/cde2d1db-a511-4c8d-9a17-651ef708634c"
const imgHeroMock    = "https://www.figma.com/api/mcp/asset/fcdf986b-f3f3-4257-904a-f506bc8e282f"
const imgEllipse1    = "https://www.figma.com/api/mcp/asset/818ed263-038c-4c4a-baa9-f326d370f9e3"
const imgEllipse2    = "https://www.figma.com/api/mcp/asset/87a4042f-888b-4b6f-bc79-97ef3c1eb24f"

// ── Features section
const imgMockGen     = "https://www.figma.com/api/mcp/asset/fbb47399-b35f-48f2-8e3c-5acdc2f65ce3"
const imgRubric      = "https://www.figma.com/api/mcp/asset/6b520f7a-d0cd-45eb-bf32-450a80315b34"
const imgScorePred   = "https://www.figma.com/api/mcp/asset/38c0ce39-287a-48af-bf92-2c5a3a326c09"
const imgBenchmark   = "https://www.figma.com/api/mcp/asset/fcc7b46e-cc00-46cc-873b-d0a887631b96"
const imgConceptTutor= "https://www.figma.com/api/mcp/asset/5eb7cd4e-91f6-488c-b46a-5642cf2cff88"

// ── Journey section
const imgProgress    = "https://www.figma.com/api/mcp/asset/d60c3b21-6234-451d-86dc-16dad3aae4aa"
const imgTopper      = "https://www.figma.com/api/mcp/asset/e3cff2ff-36fb-4093-ac1d-edf6e1e5a23c"
const imgRevision    = "https://www.figma.com/api/mcp/asset/2babe861-e536-41fa-bf3b-c150640c1df8"
const imgParent      = "https://www.figma.com/api/mcp/asset/3c1524fc-849b-465d-89ff-3bb0566e2adc"

// ── Mock measure
const imgMockMeasure = "https://www.figma.com/api/mcp/asset/c474fd41-9043-4df0-8300-3f041ca47d63"

// ── Voice Call
const imgTutor53     = "https://www.figma.com/api/mcp/asset/dec5f275-0732-4f57-a996-3c8cb21a70bc"
const imgTutor55     = "https://www.figma.com/api/mcp/asset/75945d1b-438b-4a1c-80e8-aaf974366ec9"
const imgTutor56     = "https://www.figma.com/api/mcp/asset/e8ec4419-469d-4cad-b2fd-b9f5cb2fed63"
const imgTutor57     = "https://www.figma.com/api/mcp/asset/c9e67f97-d0c9-4eec-90d8-30924dccf062"
const imgTutor58     = "https://www.figma.com/api/mcp/asset/0a98ef80-3183-4d72-98ec-b0fbd90651bf"
const imgTutor59     = "https://www.figma.com/api/mcp/asset/c4cdb83f-9449-4384-8253-6218dfbc6968"
const imgVoiceYou    = "https://www.figma.com/api/mcp/asset/151fb259-ca6b-43c6-b519-161402066057"
const imgVoiceAI     = "https://www.figma.com/api/mcp/asset/6a7f684a-6271-4e27-a0aa-63797faaf808"
const imgVoiceWave   = "https://www.figma.com/api/mcp/asset/b713bdb1-7422-44eb-ae7f-654fe68924de"
const imgVoiceMic    = "https://www.figma.com/api/mcp/asset/7559a7f9-568b-48e7-8444-bae3f991bf03"
const imgVoiceSpk    = "https://www.figma.com/api/mcp/asset/2e9c0c1d-3e82-48b2-958b-8e1f5690237c"
const imgVoiceUp     = "https://www.figma.com/api/mcp/asset/4c56f565-ac76-45fd-b1eb-f28f5617e4a5"
const imgVoiceCap    = "https://www.figma.com/api/mcp/asset/b273b8db-a4ab-48cb-884b-3f2fe43b90d2"
const imgVector1     = "https://www.figma.com/api/mcp/asset/385ec405-423e-4917-b37e-34a4bb8769e2"
const imgVector2     = "https://www.figma.com/api/mcp/asset/e3728ba7-1878-4064-8119-000c133f99af"
const imgMicBtn      = "https://www.figma.com/api/mcp/asset/fcafc923-c2b2-49e6-b5a2-4982a9477eca"

// ── Sketchpad
const imgSketchIsha  = "https://www.figma.com/api/mcp/asset/1c49d8e3-881f-47d1-bf12-fc3d61b6e365"
const imgSketchRajat1= "https://www.figma.com/api/mcp/asset/20167303-6163-4565-bfe4-38bb11ab98ca"
const imgSketchRajat2= "https://www.figma.com/api/mcp/asset/d3672880-7d34-40c5-b13c-9ffbbff4678e"
const imgSketchGraph = "https://www.figma.com/api/mcp/asset/f667f3eb-17f1-431f-a025-82884e8fc7b7"
const imgSketchDot   = "https://www.figma.com/api/mcp/asset/43e29e14-af17-4519-8da2-dcd49b4cec37"
const imgSketchF5    = "https://www.figma.com/api/mcp/asset/8f80e6f9-d0b5-40de-816f-d9286a76c2af"
const imgSketchF6    = "https://www.figma.com/api/mcp/asset/13584916-e4aa-452f-9054-cf9e5a2ffcc8"
const imgSketchF7    = "https://www.figma.com/api/mcp/asset/56e8c040-57c5-4178-92a4-bad23812071d"
const imgSketchF8    = "https://www.figma.com/api/mcp/asset/96d79b8a-ad43-47ee-bd85-103b1b6295c4"
const imgSketchLine  = "https://www.figma.com/api/mcp/asset/b5c66584-a7fc-4267-a18d-111eb9ea51c7"
const imgSketchEnd   = "https://www.figma.com/api/mcp/asset/ea06c61b-e1b9-425e-8afc-56f020127686"
const imgSketchChat  = "https://www.figma.com/api/mcp/asset/6db6c9a0-5ef0-4692-9396-72c117a1ae2d"

// ── Tools
const imgTool42      = "https://www.figma.com/api/mcp/asset/0d3d3cb1-c6d6-46ae-9a92-e469b8134c20"
const imgTool43      = "https://www.figma.com/api/mcp/asset/217608cc-9264-4db5-8c50-c1c16b1b4716"
const imgTool44      = "https://www.figma.com/api/mcp/asset/449ad6c8-1494-4c74-bc18-fa3e14f23223"
const imgTool45      = "https://www.figma.com/api/mcp/asset/aa4f184c-be7e-405f-aee6-f864329c96b6"
const imgTool46      = "https://www.figma.com/api/mcp/asset/f7b7824a-1d73-4107-8ea8-2408809449ee"
const imgTool47      = "https://www.figma.com/api/mcp/asset/d4f7ef84-cd23-4b1e-b37d-ea5432e92848"

// ── Testimonials
const imgAvatar30    = "https://www.figma.com/api/mcp/asset/8e8d9efe-97e2-473a-b301-bfa14f4ccc99"
const imgComma       = "https://www.figma.com/api/mcp/asset/fafe9645-51b2-4a9f-9d6e-d5565c481e75"

// ── CTA
const imgCTABg       = "https://www.figma.com/api/mcp/asset/cfe5b066-7375-4757-b2f4-b4b76aed1cfa"

export default function Desktop3() {
  useReveal()
  return (
    <div className="bg-white relative" style={{ width: 1440, margin: '0 auto', fontFamily: "'Poppins', sans-serif" }}>

      {/* ── HERO (Frame 1) ── */}
      <div className="bg-white relative overflow-clip" style={{ height: 750 }}>
        {/* background image placeholder */}
        <div className="absolute" style={{ height: 887, left: -76, top: -54, width: 1774 }} />

        {/* NAVBAR */}
        <div className="absolute flex items-center justify-between" style={{ left: '50%', transform: 'translateX(-50%) translateX(-1.5px)', top: 0, width: 1327, height: 90 }}>
          {/* Logo */}
          <div className="relative shrink-0" style={{ width: 190, height: 90 }}>
            <img alt="Macmillan.AI" className="block" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'left center' }} src={imgLogo} />
          </div>

          {/* Nav links */}
          <div className="flex flex-1 items-center justify-center min-w-0">
            <div className="flex gap-[48px] items-center text-[#1a1a1a] text-[16px] text-center whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>
              {['Features','Preparation','Tools','AI Tutors','Get Started'].map(l => <p key={l} className="nav-link shrink-0 cursor-pointer">{l}</p>)}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-[10px] items-center justify-end shrink-0">
            <a href="https://structuredlearningdemo-copy-production.up.railway.app/dashboard?tab=plan" target="_blank" rel="noopener noreferrer" className="btn-ghost flex h-[45px] items-center justify-center overflow-clip px-[16px] py-[12px] rounded-[6px] shrink-0" style={{ background: 'rgba(221,51,51,0.1)', textDecoration: 'none' }}>
              <p className="text-[#d33] text-[16px] whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Login</p>
            </a>
            <a href="https://structuredlearningdemo-copy-production.up.railway.app/dashboard?tab=plan" target="_blank" rel="noopener noreferrer" className="btn-primary flex h-[45px] items-center justify-center overflow-clip px-[16px] py-[12px] rounded-[6px] shrink-0" style={{ background: '#dd3333', textDecoration: 'none' }}>
              <p className="text-white text-[16px] whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Get Started</p>
            </a>
          </div>
        </div>

        {/* CTA button */}
        <div className="absolute flex gap-[10px] items-start justify-end" style={{ left: '50%', transform: 'translateX(-50%) translateX(0.5px)', top: 341 }}>
          <a href="https://structuredlearningdemo-copy-production.up.railway.app/dashboard?tab=plan" target="_blank" rel="noopener noreferrer" className="btn-primary flex h-[45px] items-center justify-center overflow-clip px-[16px] py-[12px] rounded-[6px] shrink-0" style={{ background: '#dd3333', textDecoration: 'none' }}>
            <p className="text-white text-[16px] whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Attempt your first Mock Test</p>
          </a>
        </div>

        {/* Score card top-left */}
        <div className="absolute rounded-[19px]" style={{ height: 133, left: 45, top: 295, width: 273 }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[19px]">
            <img alt="" className="absolute max-w-none" style={{ height: '591.91%', left: '-17.46%', top: '-186.13%', width: '432.68%' }} src={imgHeroCard1} />
          </div>
        </div>

        {/* Ellipses */}
        <div className="absolute" style={{ left: 408, top: 530, width: 580, height: 580 }}>
          <div className="absolute" style={{ inset: '-3.05%' }}>
            <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
          </div>
        </div>
        <div className="absolute" style={{ left: 318, top: 414, width: 755, height: 755 }}>
          <div className="absolute" style={{ inset: '-4.72% -5.25% -5.77% -5.25%' }}>
            <img alt="" className="block max-w-none size-full" src={imgEllipse2} />
          </div>
        </div>

        {/* Laptop image */}
        <div className="absolute" style={{ height: 358, left: 275, top: 428, width: 866 }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute max-w-none" style={{ height: '180.43%', left: 0, top: '-80.43%', width: '149.25%' }} src={imgHeroLaptop} />
          </div>
        </div>

        {/* Hero heading */}
        <div className="absolute flex flex-col gap-[15px] items-center" style={{ left: '50%', transform: 'translateX(-50%)', top: 98, width: 1156 }}>
          <div className="flex gap-[10px] items-center justify-center px-[16px] py-[8px] rounded-[27px] shrink-0" style={{ background: 'rgba(221,51,51,0.1)', border: '1px solid rgba(221,51,51,0.2)' }}>
            <div className="relative shrink-0" style={{ width: 20, height: 20 }}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHeroBadge} />
            </div>
            <p className="text-[#d33] text-[14px] uppercase whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: 1.3 }}>
              Built around CBSE exam patterns for Class 10 &amp; 12 students.
            </p>
          </div>
          <div className="flex flex-col gap-[8px] items-center text-center w-full">
            <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 48, lineHeight: 0, color: '#1a1a1a', width: 868, whiteSpace: 'pre-wrap' }}>
              <p style={{ marginBottom: 0 }}>
                <span style={{ lineHeight: 1.25 }}>India's First </span>
                <span style={{ lineHeight: 1.25, color: '#dd3333' }}>CBSE Board Exam AI </span>
              </p>
              <p style={{ lineHeight: 1.25 }}>for Personalized Learning Journeys</p>
            </div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 18, color: '#333', lineHeight: 1.3, width: 784 }}>
              Predict your marks, understand every concept, and track your progress from your first mock test to exam day.
            </p>
          </div>
        </div>

        {/* Concept card bottom-left */}
        <div className="absolute rounded-[23px]" style={{ height: 188, left: 41, top: 445, width: 357 }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[23px]">
            <img alt="" className="absolute max-w-none" style={{ height: '544.68%', left: '-17.09%', top: '-275%', width: '430.25%' }} src={imgHeroCard1} />
          </div>
        </div>

        {/* Mock card right */}
        <div className="absolute rounded-[16px]" style={{ height: 282, left: 969, top: 351, width: 446 }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
            <img alt="" className="absolute max-w-none" style={{ height: '120.33%', left: '-6.95%', top: '-10.34%', width: '114.13%' }} src={imgHeroMock} />
          </div>
        </div>
      </div>

      {/* ── WHY STUDENTS CHOOSE (Frame 86) ── */}
      <div className="flex flex-col gap-[125px] items-center relative reveal" style={{ padding: '80px 77px 0', marginLeft: 44 }}>
        {/* Header */}
        <div className="flex flex-col gap-[48px] items-center relative shrink-0 w-[1285px]">
          <div className="flex flex-col items-start text-center w-[868px]">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 36, color: '#1a1a1a', lineHeight: 'normal', width: '100%' }}>
              <span>Why Students Choose </span>
              <span style={{ color: '#dd3333' }}>Macmillan AI</span>
            </p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 18, color: '#333', lineHeight: 1.3, width: '100%' }}>
              From CBSE patterned based mock test to live benchmarking and topper-level evaluation, every feature is built to improve marks, accuracy, and confidence.
            </p>
          </div>

          {/* Cards grid */}
          <div className="flex flex-col gap-[48px] items-end w-full">
            <div className="flex flex-col gap-[16px] items-start w-full">
              {/* Row 1 */}
              <div className="flex gap-[24px] items-center w-full">
                <div className="bg-white card-hover relative rounded-[12px] overflow-clip shrink-0" style={{ height: 264, width: 752, boxShadow: '0px 0px 5.8px 0px rgba(90,0,0,0.15)' }}>
                  <div className="absolute flex flex-col gap-[4px] items-start" style={{ left: 24, top: 28, width: 424 }}>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 20, color: '#1a1a1a', lineHeight: 1.25, width: '100%' }}>Unlimited fresh mock tests</p>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 14, color: '#4d4d4d', lineHeight: 'normal', width: '100%' }}>AI generates additional mock test based on CBSE- pattern from previous years. Students never run out of fresh papers.</p>
                  </div>
                  <div className="absolute" style={{ left: 400, top: 0, width: 392, height: 392 }}>
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMockGen} />
                  </div>
                </div>
                <div className="bg-white card-hover relative rounded-[12px] overflow-clip shrink-0" style={{ height: 264, width: 510, boxShadow: '0px 0px 5.8px 0px rgba(90,0,0,0.15)' }}>
                  <div className="absolute flex flex-col gap-[4px] items-start" style={{ left: 16, top: 23, width: 477 }}>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 20, color: '#1a1a1a', lineHeight: 1.25, width: '100%' }}>Find where you lose marks</p>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 14, color: '#4d4d4d', lineHeight: 'normal', width: '100%' }}>Every answer marked against CBSE's official marking scheme with step-by-step marks, partial credit where applicable, and value-point analysis for long answers.</p>
                  </div>
                  <div className="absolute" style={{ left: 287, top: 115, width: 206, height: 206 }}>
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRubric} />
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex gap-[24px] items-center w-full">
                <div className="bg-white card-hover relative rounded-[12px] overflow-clip shrink-0" style={{ height: 326, width: 510, boxShadow: '0px 0px 5.8px 0px rgba(90,0,0,0.15)' }}>
                  <div className="absolute" style={{ left: 254, top: 110, width: 283, height: 283 }}>
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScorePred} />
                  </div>
                  <div className="absolute flex flex-col gap-[4px] items-start" style={{ left: 15, top: 23, width: 477 }}>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 20, color: '#1a1a1a', lineHeight: 1.25, width: '100%' }}>Predict your board score early</p>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 14, color: '#4d4d4d', lineHeight: 'normal', width: '100%' }}>Predicts likely board exam percentage per subject after each attempt, calibrated against historical CBSE scoring patterns and the student's improvement trajectory.</p>
                  </div>
                </div>
                <div className="bg-white card-hover relative rounded-[12px] overflow-clip shrink-0" style={{ height: 326, width: 752, boxShadow: '0px 0px 5.8px 0px rgba(90,0,0,0.15)' }}>
                  <div className="absolute flex flex-col gap-[4px] items-start" style={{ left: 20, top: 34, width: 727 }}>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 20, color: '#1a1a1a', lineHeight: 1.25, width: '100%' }}>Compare with students nationwide</p>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 14, color: '#4d4d4d', lineHeight: 'normal', width: '100%' }}>Compares student performance against a national cohort of Macmillan.AI users in real time for percentile rank, subject-wise and chapter-wise ranking. Far richer than the one-time benchmarking test in the book.</p>
                  </div>
                  <div className="absolute" style={{ left: 399, top: 105, width: 359, height: 359 }}>
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBenchmark} />
                  </div>
                </div>
              </div>
            </div>

            {/* Full-width card */}
            <div className="bg-white card-hover relative rounded-[12px] overflow-clip shrink-0 w-full" style={{ height: 326, boxShadow: '0px 0px 5.8px 0px rgba(90,0,0,0.15)' }}>
              <div className="absolute flex flex-col gap-[4px] items-center text-center" style={{ left: '50%', transform: 'translateX(-50%)', top: 21, width: 819 }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 20, color: '#1a1a1a', lineHeight: 1.25, width: '100%' }}>Clear doubts instantly</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 14, color: '#4d4d4d', lineHeight: 'normal', width: '100%' }}>Ask anything about any chapter — explained by an AI tutor trained on Macmillan's content, calibrated to CBSE board question patterns. Voice support in all official languages.</p>
              </div>
              <div className="absolute overflow-hidden pointer-events-none" style={{ height: 222, left: 497, top: 113, width: 319 }}>
                <img alt="" className="absolute max-w-none" style={{ height: '143.69%', left: 0, top: '-31.53%', width: '100%' }} src={imgConceptTutor} />
              </div>
            </div>
          </div>
        </div>

        {/* ── PROGRESS JOURNEY ── */}
        <div className="flex flex-col gap-[24px] items-center w-full">
          {/* Track improvement */}
          <div className="flex gap-[56px] items-center shrink-0 reveal">
            <div className="flex flex-col gap-[4px] items-start shrink-0" style={{ width: 655 }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 36, color: '#1a1a1a', lineHeight: 1.25, width: '100%' }}>Track improvement after every test</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 16, color: '#4d4d4d', lineHeight: 'normal', width: '100%' }}>Visual timeline of every attempt, showing score progression, accuracy improvement, time-per-question trends, and predicted exam day performance. Shareable with parents and teachers.</p>
            </div>
            <div className="relative rounded-[16px] shrink-0" style={{ height: 375, width: 562, boxShadow: '0px 0px 4px 0px rgba(213,0,0,0.15)' }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgProgress} />
            </div>
          </div>

          {/* Learn topper */}
          <div className="flex gap-[147px] items-center shrink-0 reveal">
            <div className="relative shrink-0 overflow-hidden" style={{ height: 443, width: 533 }}>
              <img alt="" className="absolute max-w-none" style={{ height: '100%', left: '-12.22%', top: 0, width: '124.58%' }} src={imgTopper} />
            </div>
            <div className="flex flex-col gap-[4px] items-start shrink-0" style={{ width: 655 }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 36, color: '#1a1a1a', lineHeight: 1.25, width: '100%' }}>Learn topper answer writing</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 16, color: '#4d4d4d', lineHeight: 'normal', width: '100%' }}>Visual timeline of every attempt, showing score progression, accuracy improvement, time-per-question trends, and predicted board day performance. Shareable with parents and teachers.</p>
            </div>
          </div>

          {/* Revise */}
          <div className="flex gap-[28px] items-center shrink-0 w-full reveal">
            <div className="relative overflow-clip shrink-0" style={{ height: 323, width: 758 }}>
              <div className="absolute flex flex-col gap-[4px] items-start" style={{ left: 17.5, top: 124.5, width: 655 }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 36, color: '#1a1a1a', lineHeight: 1.25, width: '100%' }}>Revise only what matters</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 16, color: '#4d4d4d', lineHeight: 'normal', width: '100%' }}>AI schedules revision of weak topics at optimal intervals before the board state</p>
              </div>
            </div>
            <div className="relative shrink-0 overflow-hidden" style={{ height: 414, width: 558 }}>
              <img alt="" className="absolute max-w-none" style={{ height: '114.11%', left: '-11.37%', top: '-5.41%', width: '127.09%' }} src={imgRevision} />
            </div>
          </div>

          {/* Share progress */}
          <div className="flex gap-[28px] items-center shrink-0 reveal">
            <div className="relative shrink-0" style={{ height: 362, width: 542 }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgParent} />
            </div>
            <div className="relative overflow-clip shrink-0" style={{ height: 323, width: 758 }}>
              <div className="absolute flex flex-col gap-[4px] items-start" style={{ left: 17.5, top: 124.5, width: 655 }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 36, color: '#1a1a1a', lineHeight: 1.25, width: '100%' }}>Share progress automatically</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 16, color: '#4d4d4d', lineHeight: 'normal', width: '100%' }}>Weekly progress report emailed to parents: predicted board score trend, strengths, weaknesses, and revision recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── WORKFLOW (Frame 39) ── */}
      <div className="relative" style={{ background: '#f5f5f5', height: 909, overflow: 'clip', marginLeft: -3 }}>
        {/* Header */}
        <div className="absolute flex flex-col gap-[17px] items-center" style={{ left: 254, top: 33, width: 868 }}>
          <div className="flex items-center justify-center px-[16px] py-[8px] rounded-[27px] shrink-0" style={{ background: 'rgba(221,51,51,0.1)', border: '1px solid rgba(221,51,51,0.2)' }}>
            <p className="text-[#d33] text-[14px] uppercase whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: 1.3 }}>Smart Adaptive Workflow</p>
          </div>
          <div className="flex flex-col gap-[4px] items-start text-center w-full">
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 36, lineHeight: 0, color: '#1a1a1a', width: '100%' }}>
              <span style={{ lineHeight: 1.3 }}>A Structured Workflow for </span>
              <span style={{ lineHeight: 1.3, color: '#dd3333' }}>Smarter Board Preparation</span>
            </p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 18, color: '#333', lineHeight: 1.3, width: '100%' }}>
              Macmillan combines planning, concept learning, mock practice, answer evaluation, and improvement tracking into one continuous preparation system.
            </p>
          </div>
        </div>

        {/* Vertical red line */}
        <div className="absolute flex items-center justify-center" style={{ height: 331, left: 113, top: 370, width: 2 }}>
          <div style={{ transform: 'rotate(-90deg)' }}>
            <div style={{ background: '#dd3333', height: 2, width: 331 }} />
          </div>
        </div>

        {/* Plan label */}
        <p className="absolute text-[#d33] text-[16px] text-center whitespace-nowrap" style={{ left: '50%', transform: 'translateX(-50%)', fontFamily: "'Poppins', sans-serif", fontWeight: 500, lineHeight: 1.3, left: 142.5, top: 363 }}>Plan</p>

        {/* Plan content */}
        <div className="absolute flex flex-col gap-[4px] items-start" style={{ left: 125, top: 389, width: 598 }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 20, color: '#1a1a1a', lineHeight: 1.3, width: 465 }}>Board Exam Study Plan — Personalised from Day One</p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 16, color: 'rgba(26,26,26,0.8)', lineHeight: 'normal', width: '100%' }}>
            Student enters their class (10 or 12), selects subjects, and sets their board exam date. The AI generates a personalised study plan: which chapters to study this week, which Macmillan sample papers to attempt in which order, and how many mock tests to complete before boards. The plan adapts every week based on practice performance.
          </p>
        </div>

        {/* Tags */}
        <div className="workflow-tag-hover absolute flex items-center justify-center px-[6px] py-[4px] rounded-[2px]" style={{ background: 'rgba(221,51,51,0.1)', left: 125, top: 586 }}>
          <p className="text-[#d33] text-[16px] whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>Chapter-wise study schedule</p>
        </div>
        <div className="workflow-tag-hover absolute flex items-center justify-center px-[6px] py-[4px] rounded-[2px]" style={{ background: 'rgba(221,51,51,0.1)', left: 383, top: 586 }}>
          <p className="text-[#d33] text-[16px] whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}>Mock test calendar auto-set</p>
        </div>
        <div className="workflow-tag-hover absolute flex items-center justify-center px-[6px] py-[4px] rounded-[2px]" style={{ background: 'rgba(34,37,37,0.05)', left: 125, top: 631 }}>
          <p className="text-[16px] whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: 'rgba(26,26,26,0.8)' }}>Countdown to board date</p>
        </div>
        <div className="workflow-tag-hover absolute flex items-center justify-center px-[6px] py-[4px] rounded-[2px]" style={{ background: 'rgba(34,37,37,0.05)', left: 351, top: 631 }}>
          <p className="text-[16px] whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: 'rgba(26,26,26,0.8)' }}>Weak chapter priority boost</p>
        </div>
        <div className="workflow-tag-hover absolute flex items-center justify-center px-[6px] py-[4px] rounded-[2px]" style={{ background: 'rgba(34,37,37,0.05)', left: 125, top: 672 }}>
          <p className="text-[16px] whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: 'rgba(26,26,26,0.8)' }}>Daily study target (30/60/90 min)</p>
        </div>
      </div>

      {/* ── DON'T GUESS (mock measure image) ── */}
      <div className="flex flex-col gap-[24px] items-center relative" style={{ width: 1442 }}>
        <div className="relative shrink-0" style={{ height: 839, width: 1328 }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMockMeasure} />
        </div>

        {/* ── VOICE CALL ── */}
        <div className="bg-white relative overflow-clip shrink-0" style={{ height: 1130, width: 1442 }}>
          {/* Heading */}
          <div className="absolute flex flex-col items-center reveal" style={{ left: '50%', transform: 'translateX(-50%) translateX(-21px)', top: 347, width: 868 }}>
            <div className="flex flex-col gap-[4px] items-start text-center w-full">
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 36, lineHeight: 0, width: '100%' }}>
                <span style={{ lineHeight: 1.3, color: '#dd3333' }}>Voice Call</span>
                <span style={{ lineHeight: 1.3, color: '#1a1a1a' }}> with AI Tutors</span>
              </p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 18, color: '#333', lineHeight: 1.3, width: '100%' }}>Ask doubts instantly, and learn faster with voice-first tutoring.</p>
            </div>
          </div>

          {/* Tutor photos */}
          <div className="absolute rounded-[12px] overflow-hidden pointer-events-none" style={{ height: 272, left: 598, top: 794, width: 219 }}>
            <img alt="" className="absolute max-w-none" style={{ height: '104.99%', left: '-5.35%', top: '-2.04%', width: '110.42%' }} src={imgTutor53} />
          </div>
          <div className="absolute rounded-[12px] overflow-hidden pointer-events-none" style={{ height: 225, left: 1201, top: 636, width: 181 }}>
            <img alt="" className="absolute max-w-none" style={{ height: '103.61%', left: '-3.61%', top: '-1.44%', width: '107.67%' }} src={imgTutor55} />
          </div>
          <div className="absolute overflow-hidden pointer-events-none" style={{ height: 278, left: 1107, top: 86, width: 223 }}>
            <img alt="" className="absolute max-w-none" style={{ height: '103.32%', left: '-3.96%', top: '-1.66%', width: '108.29%' }} src={imgTutor56} />
          </div>
          <div className="absolute rounded-[12px] overflow-hidden pointer-events-none" style={{ height: 293, left: 74, top: 568, width: 235 }}>
            <img alt="" className="absolute max-w-none" style={{ height: '103.32%', left: '-3.66%', top: '-2.19%', width: '107.7%' }} src={imgTutor58} />
          </div>
          <div className="absolute rounded-[8px] overflow-hidden pointer-events-none" style={{ height: 188, left: 162, top: 158, width: 147 }}>
            <img alt="" className="absolute max-w-none" style={{ height: '102.72%', left: '-2.91%', top: '-1.03%', width: '105.54%' }} src={imgTutor59} />
          </div>
          <div className="absolute overflow-hidden pointer-events-none" style={{ height: 231, left: 620, top: 64, width: 176 }}>
            <img alt="" className="absolute max-w-none" style={{ height: '103.6%', left: '-3.56%', top: '-2.2%', width: '107.51%' }} src={imgTutor57} />
          </div>

          {/* Voice widget */}
          <div className="absolute bg-white overflow-clip rounded-[24px]" style={{ height: 282, left: 440, top: 454, width: 561, boxShadow: '0px 0px 8.3px 0px rgba(0,0,0,0.15)' }}>
            {/* Avatar you */}
            <div className="absolute" style={{ left: 31, top: 55, width: 70, height: 70 }}>
              <div className="absolute" style={{ inset: '-14.57%' }}>
                <img alt="" className="block max-w-none size-full" height="90.4" src={imgVoiceYou} width="90.4" />
              </div>
            </div>
            {/* Avatar AI */}
            <div className="absolute" style={{ left: 475, top: 55, width: 70, height: 70 }}>
              <div className="absolute" style={{ inset: '-11.43%' }}>
                <img alt="" className="block max-w-none size-full" height="86" src={imgVoiceAI} width="86" />
              </div>
            </div>
            {/* Live badge — pulsing dot */}
            <div className="absolute flex items-center justify-center gap-[6px] px-[16px] py-[6px] rounded-[27px]" style={{ left: '50%', transform: 'translateX(-50%)', top: 13, background: 'rgba(221,51,51,0.1)', border: '1px solid rgba(221,51,51,0.2)' }}>
              <span className="live-dot" />
              <p className="text-[#d33] text-[12px] uppercase whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: 1.3 }}>Live voice call</p>
            </div>
            {/* Waveform — animated bars */}
            <div className="absolute flex items-center justify-center gap-[6px]" style={{ left: 108, top: 59, width: 365, height: 57 }}>
              {[52, 32, 44, 52, 20, 40, 52, 28, 44, 36, 52, 24, 48, 36, 20, 44].map((h, i) => (
                <div key={i} className="waveform-bar" style={{ width: 4, height: h, animationDelay: `${(i * 0.07).toFixed(2)}s` }} />
              ))}
            </div>
            {/* Status */}
            <div className="absolute flex flex-col gap-[2px] items-center whitespace-nowrap" style={{ left: 254, top: 141 }}>
              <p className="text-[#30363f] text-[14px] text-center" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: 1.3 }}>00:24</p>
              <p className="text-[#11a939] text-[14px] flex items-center gap-[4px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: 1.3 }}><span className="connected-dot" />connected</p>
            </div>
            {/* Labels */}
            <p className="absolute text-[#30363f] text-[14px] text-center whitespace-nowrap" style={{ left: 63.5, transform: 'translateX(-50%)', top: 132, fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: 1.3 }}>You</p>
            <p className="absolute text-[#30363f] text-[14px] text-center whitespace-nowrap" style={{ left: 509.5, transform: 'translateX(-50%)', top: 132, fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: 1.3 }}>AI Tutor</p>
            {/* Controls */}
            <div className="absolute flex flex-col gap-[12px] items-center" style={{ left: 125, top: 191, width: 299 }}>
              <div className="flex gap-[26px] items-center w-full">
                {[imgVoiceMic, imgVoiceSpk, imgVoiceUp, imgVoiceCap].map((src, i) => (
                  <div key={i} className="bg-white rounded-[41px] overflow-clip shrink-0 relative" style={{ width: 55, height: 55, border: '1px solid #f4f4f4', boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.1)' }}>
                    <div className="absolute" style={{ left: 17, top: 17, width: 20, height: 20 }}>
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={src} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-[26px] items-center text-[#515c6a] text-[12px] text-center w-full" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: 1.3 }}>
                {['Mic','Speaker','Upload','captions'].map(l => <p key={l} className="shrink-0" style={{ width: 55 }}>{l}</p>)}
              </div>
            </div>
          </div>

          {/* Vector connectors */}
          <div className="absolute" style={{ height: 159, left: 892, top: 193.5, width: 213.5 }}>
            <div className="absolute" style={{ inset: '0 -0.23%' }}>
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
          <div className="absolute bg-white rounded-[41px] overflow-clip" style={{ left: 993, top: 253, width: 55, height: 55, boxShadow: '0px 0px 4px 0px rgba(221,51,51,0.5)' }}>
            <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translateX(-50%) translateX(0.5px) translateY(-50%) translateY(0.5px)', width: 20, height: 20 }}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMicBtn} />
            </div>
          </div>
          <div className="absolute" style={{ height: 180, left: 206, top: 736, width: 336 }}>
            <div className="absolute" style={{ inset: '0 -0.15% -0.28% 0' }}>
              <img alt="" className="block max-w-none size-full" src={imgVector2} />
            </div>
          </div>
          <div className="absolute bg-white rounded-[41px] overflow-clip" style={{ left: 354, top: 790, width: 55, height: 55, boxShadow: '0px 0px 4px 0px rgba(221,51,51,0.5)' }}>
            <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translateX(-50%) translateX(0.5px) translateY(-50%) translateY(0.5px)', width: 20, height: 20 }}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMicBtn} />
            </div>
          </div>
        </div>

        {/* ── SKETCHPAD ── */}
        <div className="bg-white flex flex-col gap-[49px] items-center overflow-clip px-[89px] py-[67px] shrink-0">
          <div className="flex flex-col items-center shrink-0" style={{ width: 868 }}>
            <div className="flex flex-col gap-[4px] items-start text-center w-full">
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 36, lineHeight: 0, width: '100%' }}>
                <span style={{ lineHeight: 1.3, color: '#dd3333' }}>Interactive Sketchpad </span>
                <span style={{ lineHeight: 1.3, color: '#1a1a1a' }}>for Live Doubt Solving</span>
              </p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 18, color: '#333', lineHeight: 1.3, width: '100%' }}>Learn step-by-step with voice guidance and visual explanations on a real-time sketchpad.</p>
            </div>
          </div>
          {/* Sketchpad card — exact Figma node 113:488 */}
          <div className="bg-white relative rounded-[24px] overflow-clip shrink-0" style={{ height: 716, width: 1263, border: '6px solid #f6f7fa', boxShadow: '0px 0px 8.3px 0px rgba(0,0,0,0.15)' }}>

            {/* Status top-right */}
            <div className="absolute flex flex-col gap-[2px] items-center whitespace-nowrap" style={{ left: 1144, top: 37, fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: 1.3 }}>
              <p style={{ fontSize: 14, color: '#30363f', textAlign: 'center' }}>00:24</p>
              <p style={{ fontSize: 14, color: '#11a939', display: 'flex', alignItems: 'center', gap: 4 }}><span className="connected-dot" />connected</p>
            </div>

            {/* User pills top-left */}
            <div className="absolute flex gap-[10px] items-center" style={{ left: 21, top: 36 }}>
              {/* Isha Pillai */}
              <div className="bg-white relative rounded-[12px] overflow-clip shrink-0" style={{ height: 60, width: 210, border: '1px solid #e9e9e9' }}>
                <div className="absolute flex flex-col items-start" style={{ left: 62, top: 9, width: 135 }}>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 14, color: '#171a1c', lineHeight: 'normal', whiteSpace: 'nowrap' }}>Isha Pillai</p>
                  <div className="flex gap-[8px] items-center w-full">
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 12, color: '#00c1c1', lineHeight: 'normal', whiteSpace: 'nowrap' }}>Tutor</p>
                    <div className="relative shrink-0" style={{ width: 4, height: 4 }}>
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="https://www.figma.com/api/mcp/asset/2c4a98f4-f2f3-4390-a1b1-0045238732a2" />
                    </div>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 12, color: '#73808c', lineHeight: 'normal', whiteSpace: 'nowrap' }}>Explaning...</p>
                  </div>
                </div>
                <div className="absolute bg-[#e7e7e7] overflow-clip rounded-[26px]" style={{ left: 12, top: 9, width: 40, height: 40 }}>
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[500px] size-full" src="https://www.figma.com/api/mcp/asset/05cd231e-4541-42af-bc23-a27237c7270b" />
                </div>
              </div>
              {/* Rajat Garg */}
              <div className="bg-white relative rounded-[12px] overflow-clip shrink-0" style={{ height: 60, width: 210, border: '1px solid #e9e9e9' }}>
                <div className="absolute bg-[#e7e7e7] overflow-clip rounded-[26px]" style={{ left: 12, top: 9, width: 40, height: 40 }}>
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[500px] size-full" src="https://www.figma.com/api/mcp/asset/22f2be10-91f7-46b6-b106-c6f08026846b" />
                  <div className="absolute overflow-hidden pointer-events-none rounded-[500px]" style={{ height: 40, left: -1, top: 0, width: 41 }}>
                    <img alt="" className="absolute max-w-none" style={{ height: '100.05%', left: '-42.06%', top: '-0.03%', width: '146.34%' }} src="https://www.figma.com/api/mcp/asset/f2eb4918-75ff-44ad-9b59-a7bbefd11e2f" />
                  </div>
                </div>
                <div className="absolute flex flex-col items-start" style={{ left: 62, top: 9, width: 100 }}>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 14, color: '#171a1c', lineHeight: 'normal', width: '100%' }}>Rajat Garg</p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 12, color: '#73808c', lineHeight: 'normal', width: '100%' }}>Listening...</p>
                </div>
              </div>
            </div>

            {/* Toolbar panel — node 121:587, absolute at left:432 top:595 */}
            <div className="absolute bg-white overflow-clip p-[12px] rounded-[46px]" style={{ left: 432, top: 595, boxShadow: '0px 2px 8.3px 0px rgba(8,35,46,0.15), 0px 0px 15px 0px rgba(7,32,44,0.1)' }}>
              <div className="flex gap-[16px] items-center">
                {/* 5 tool buttons */}
                <div className="flex gap-[8px] items-center shrink-0">
                  {[
                    "https://www.figma.com/api/mcp/asset/d7a884e2-a142-4f76-96aa-7d0d17615d7a",
                    "https://www.figma.com/api/mcp/asset/0a44c14a-0bb5-4591-b0ec-9ecfc8a23112",
                    "https://www.figma.com/api/mcp/asset/71ca75c8-fa40-4844-b1b4-60aa040eb025",
                    "https://www.figma.com/api/mcp/asset/42c99810-fa03-422d-b563-e9eef49a8ad8",
                    "https://www.figma.com/api/mcp/asset/c8f02c3e-d22c-4204-8752-659758c10324",
                  ].map((src, i) => (
                    <div key={i} className="flex items-center justify-center overflow-clip p-[12px] rounded-[500px] shrink-0" style={{ background: '#f7f7f8', width: 50, height: 50 }}>
                      <div className="relative shrink-0" style={{ width: 20, height: 20 }}>
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={src} />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Vertical divider line */}
                <div className="flex items-center justify-center shrink-0" style={{ height: 50, width: 0 }}>
                  <div style={{ transform: 'rotate(90deg)' }}>
                    <div className="relative" style={{ height: 0, width: 50 }}>
                      <div className="absolute" style={{ inset: '-1px 0 0 0' }}>
                        <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/6aabe451-aae2-49d9-9c8b-147396a33852" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End call button — red bg */}
                <div className="flex items-center justify-center overflow-clip p-[12px] rounded-[500px] shrink-0" style={{ background: '#ffeeec', width: 50, height: 50 }}>
                  <div className="relative shrink-0" style={{ width: 20, height: 20 }}>
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="https://www.figma.com/api/mcp/asset/5ae004d9-e05b-4cd9-a343-096f6bf418c6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Teal chat button — node 121:632 at left:1170 top:607 */}
            <div className="absolute flex items-center justify-center overflow-clip p-[12px] rounded-[500px]" style={{ background: '#00c1c1', left: 1170, top: 607, width: 50, height: 50 }}>
              <div className="relative shrink-0" style={{ width: 20, height: 20 }}>
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="https://www.figma.com/api/mcp/asset/3e580d41-a7ed-4523-a36d-e9a73318ba72" />
              </div>
            </div>

            {/* Text content — node 121:706, exact Figma text */}
            <div className="absolute flex flex-col gap-[16px] items-start" style={{ left: 24, top: 120, width: 561, fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 16, color: '#424254', lineHeight: 0 }}>
              <p className="relative shrink-0 w-full">
                <span style={{ lineHeight: 'normal' }}>Projectile Motion:</span>
                <span style={{ fontWeight: 400, lineHeight: 'normal' }}>
                  <br aria-hidden="true" />
                  Projectile motion occurs when an object is thrown or launched into the air and continues moving under the influence of gravity alone. Instead of travelling in a straight line, the object follows a curved path called a parabola. The horizontal motion keeps the object moving forward, while gravity continuously pulls it downward, creating the curved trajectory.
                </span>
              </p>
              <div className="relative shrink-0 w-full">
                <p style={{ lineHeight: 'normal', marginBottom: 0, whiteSpace: 'pre-wrap' }}>Key Characteristics:</p>
                <ul className="list-disc" style={{ paddingLeft: 24 }}>
                  {[' Horizontal velocity remains nearly constant', ' Vertical velocity changes due to gravity', ' The path of motion forms a parabola', ' Commonly seen in sports, physics experiments, and everyday motion'].map(t => (
                    <li key={t} style={{ marginBottom: 0 }}><span style={{ fontWeight: 400, lineHeight: 'normal' }}>{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="relative shrink-0 w-full">
                <p style={{ lineHeight: 'normal', marginBottom: 0, whiteSpace: 'pre-wrap' }}>Real-Life Examples:</p>
                <ul className="list-disc" style={{ paddingLeft: 24 }}>
                  {[' A basketball shot toward the hoop', ' A cricket ball hit into the air', ' Water flowing from a fountain', ' Fireworks launched into the sky'].map(t => (
                    <li key={t} style={{ marginBottom: 0 }}><span style={{ fontWeight: 400, lineHeight: 'normal' }}>{t}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Graph image — node 121:709 */}
            <div className="absolute overflow-hidden pointer-events-none" style={{ height: 314, left: 699, top: 135, width: 524 }}>
              <img alt="" className="absolute max-w-none" style={{ height: '243.24%', left: '-134.82%', top: '-108.11%', width: '259.11%' }} src="https://www.figma.com/api/mcp/asset/3b8c1513-0c4f-4d48-b99e-1d359d2a6f5f" />
            </div>
          </div>
        </div>

        {/* ── SMART LEARNING TOOLS ── */}
        <div className="overflow-clip shrink-0 w-full reveal" style={{ background: '#fff', padding: '103px 82px 80px' }}>
          <div className="flex flex-col gap-[30px] items-center" style={{ width: 1279, margin: '0 auto' }}>
            {/* Header */}
            <div className="flex flex-col gap-[17px] items-center shrink-0" style={{ width: 868 }}>
              <div className="flex items-center justify-center px-[16px] py-[8px] rounded-[27px] shrink-0" style={{ background: 'rgba(221,51,51,0.1)', border: '1px solid rgba(221,51,51,0.2)' }}>
                <p className="text-[#d33] text-[14px] uppercase whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: 1.3 }}>Smart learning tools</p>
              </div>
              <div className="flex flex-col gap-[4px] items-start text-center w-full">
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 36, lineHeight: 0, color: '#1a1a1a', width: '100%' }}>
                  <span style={{ lineHeight: 1.3 }}>Everything you need to </span>
                  <span style={{ lineHeight: 1.3, color: '#dd3333' }}>study smarter</span>
                </p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 18, color: '#333', lineHeight: 1.3, width: '100%' }}>AI-powered tools designed to simplify concepts, speed up revision, and help students prepare more effectively for board exams.</p>
              </div>
            </div>
            {/* Tool cards */}
            <div className="flex flex-col gap-[12px] items-start shrink-0 w-full">
              {[
                [
                  { img: imgTool42, tagBg: 'rgba(221,51,51,0.1)', tagColor: '#d33', tag: 'Instant revision', title: 'Key Point Extractor', desc: 'Extract the most important concepts, formulas, definitions, and exam-focused notes from any chapter within seconds.' },
                  { img: imgTool43, tagBg: 'rgba(221,193,51,0.1)', tagColor: '#ddc133', tag: 'QUICK SUMMARY', title: 'Smart Summarizer', desc: 'Convert long chapters into concise summaries designed for quick revision before exams and mock tests.' },
                  { img: imgTool44, tagBg: 'rgba(51,17,193,0.1)', tagColor: '#4a25e7', tag: 'visual learning', title: 'Flowchart Generator', desc: 'Turn lengthy chapters into structured visual flowcharts that make difficult topics easier to understand and revise.' },
                ],
                [
                  { img: imgTool45, tagBg: 'rgba(17,169,57,0.1)', tagColor: '#11a939', tag: 'AI VISUAL EXPLAINER', title: 'Concept Visualizer', desc: 'Understand difficult concepts using AI-generated diagrams, visual explanations, and simplified breakdowns.' },
                  { img: imgTool46, tagBg: 'rgba(51,173,221,0.1)', tagColor: '#33addd', tag: 'SMART CONNECTIONS', title: 'Mind Map Generator', desc: 'Transform complete chapters into connected mind maps for better understanding, memory retention, and faster recall.' },
                  { img: imgTool47, tagBg: 'rgba(193,99,17,0.1)', tagColor: '#c16311', tag: 'GUIDED SOLUTIONS', title: 'Step-by-Step Problem Solver', desc: 'Get detailed step-by-step solutions with proper explanations for numerical and conceptual problems.' },
                ]
              ].map((row, ri) => (
                <div key={ri} className="flex gap-[14px] items-center shrink-0 w-full">
                  {row.map(({ img, tagBg, tagColor, tag, title, desc }) => (
                    <div key={title} className="bg-white card-hover flex flex-1 flex-col items-start min-w-0 overflow-clip p-[16px] relative rounded-[12px]" style={{ boxShadow: '0px 0px 4px 0px rgba(0,0,0,0.15)' }}>
                      <div className="flex flex-col gap-[24px] items-start w-full">
                        <div className="flex items-start justify-between w-full">
                          <div className="relative shrink-0" style={{ width: 60, height: 60 }}>
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
                          </div>
                          <div className="flex items-center justify-center px-[8px] py-[4px] rounded-[18px] shrink-0" style={{ background: tagBg }}>
                            <p className="text-[12px] uppercase whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: tagColor, lineHeight: 1.3 }}>{tag}</p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[4px] items-start w-full">
                          <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 16, color: '#1a1a1a', lineHeight: 1.3, width: '100%' }}>{title}</p>
                          <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 12, color: 'rgba(26,26,26,0.8)', lineHeight: 'normal', width: '100%' }}>{desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TESTIMONIALS ── */}
        <div className="bg-white overflow-clip shrink-0 reveal" style={{ width: 1440, padding: '80px 134px' }}>
          <div className="flex flex-col gap-[60px] items-center" style={{ width: 1172, margin: '0 auto' }}>
            <div className="flex flex-col gap-[12px] items-center shrink-0" style={{ width: 868 }}>
              <div className="flex items-center justify-center px-[16px] py-[8px] rounded-[27px] shrink-0" style={{ background: 'rgba(221,51,51,0.1)', border: '1px solid rgba(221,51,51,0.2)' }}>
                <p className="text-[#d33] text-[14px] uppercase whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: 1.3 }}>Success journeys</p>
              </div>
              <div className="flex flex-col gap-[4px] items-start leading-[1.3] text-center w-full">
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 36, color: '#1a1a1a', width: '100%' }}>Loved by Outstanding Students and Encouraging Parents</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 18, color: '#333', width: '100%' }}>See verified score improvements accomplished by Class 10-12 candidates utilizing our adaptive curriculum analytics.</p>
              </div>
            </div>
            <div className="flex gap-[24px] items-center shrink-0 w-full">
              {[
                { bg: 'linear-gradient(180deg,#fff4f4 0%,#ffd9d9 100%)', roleColor: '#dd3333', role: 'Student', text: '“The AI mock tests feel exactly like real CBSE board exams. After every test, I get detailed feedback on where I lost marks and how to improve. My confidence has improved a lot.”', name: 'Arjun Mehta', sub: 'Class 10 Student' },
                { bg: '#fff', roleColor: '#1a1a1a', role: 'Parent', text: '“The mock test analysis and weekly reports helped us track our child’s improvement properly. We can now understand strengths, weaknesses, and overall preparation.”', name: 'Pooja Mehta', sub: 'Parent of Class 10 Student' },
                { bg: 'linear-gradient(180deg,#fff4f4 0%,#ffd9d9 100%)', roleColor: '#dd3333', role: 'Student', text: '“The rubric-based answer evaluation is my favorite feature. It checks every step just like a real examiner and helps me write better long answers for boards.”', name: 'Ananya Sharma', sub: 'Class 12 Student' },
                { bg: '#fff', roleColor: '#1a1a1a', role: 'Parent', text: '“The board score prediction feature gives us confidence about our child’s readiness for exams. The platform feels much more advanced than regular coaching apps.”', name: 'Amit Sharma', sub: 'Parent of Class 12 Student' },
              ].map(({ bg, roleColor, role, text, name, sub }, i) => (
                <div key={i} className="tcard-hover relative overflow-clip rounded-[20px] shrink-0" style={{ background: bg, border: '4px solid white', height: 363, width: 275, boxShadow: '0px 0px 24.2px 0px rgba(221,51,51,0.15)' }}>
                  {/* Quote icon */}
                  <div className="absolute flex items-center justify-center" style={{ left: i === 0 ? 15 : 16, top: i === 0 ? 23 : 29 }}>
                    <div style={{ transform: 'rotate(180deg)' }}>
                      <div className="flex items-center relative">
                        <div className="relative shrink-0" style={{ width: 24, height: 24, marginRight: -4 }}>
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgComma} />
                        </div>
                        <div className="relative shrink-0" style={{ width: 24, height: 24 }}>
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgComma} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Text */}
                  <p className="absolute text-black text-[14px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: 'normal', left: i === 0 ? 15 : 16, top: i === 0 ? 64 : 70, width: 235 }}>{text}</p>
                  {/* User */}
                  <div className="absolute flex gap-[8px] items-center" style={{ left: i === 0 ? 15 : 16, top: i === 0 ? 280 : 286 }}>
                    <div className="relative rounded-[500px] shrink-0" style={{ width: 40, height: 40 }}>
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[500px]">
                        <img alt="" className="absolute max-w-none" style={{ height: '263.85%', left: '-78.37%', top: '-8.73%', width: '254.07%' }} src={imgAvatar30} />
                      </div>
                    </div>
                    <div className="flex flex-col items-start leading-[normal]">
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: 14, color: '#1a1a1a' }}>{name}</p>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 12, color: 'rgba(26,26,26,0.8)' }}>{sub}</p>
                    </div>
                  </div>
                  {/* Role badge */}
                  <p className="absolute text-[12px] text-center whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: 1.3, color: roleColor, left: i < 2 ? 225.5 : 226.5, transform: 'translateX(-50%)', top: i === 0 ? 27 : 31 }}>{role}</p>
                  {/* Inner glow */}
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit]" style={{ boxShadow: 'inset 0px 0px 15.2px 0px rgba(255,255,255,0.5)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA IMAGE ── */}
        <div className="relative overflow-clip shrink-0 w-full reveal" style={{ height: 750 }}>
          <div className="absolute rounded-[32px] overflow-hidden pointer-events-none" style={{ height: 536, left: '50%', transform: 'translateX(-50%)', top: 107, width: 986 }}>
            <img alt="" className="absolute max-w-none" style={{ height: '108.58%', left: '-2.64%', top: '-4.29%', width: '104.88%' }} src={imgCTABg} />
          </div>
        </div>
      </div>
    </div>
  )
}
