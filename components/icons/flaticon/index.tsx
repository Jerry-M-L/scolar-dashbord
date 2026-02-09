/**
 * Flaticon-style icon pack for Scholar
 * Outline/rounded line icons, consistent stroke, minimalist
 * Centralized in components/icons/flaticon
 */

import React from 'react'
import { cn } from '@/lib/utils'

const iconBaseProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export interface FlaticonProps {
  size?: number
  className?: string
}

const createIcon = (paths: React.ReactNode) =>
  React.forwardRef<SVGSVGElement, FlaticonProps>(({ size = 24, className, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      className={cn('shrink-0', className)}
      {...iconBaseProps}
      {...props}
    >
      {paths}
    </svg>
  ))

// Dashboard - 4 squares grid
export const IconDashboard = createIcon(
  <>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </>
)

// Users - two silhouettes
export const IconUsers = createIcon(
  <>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>
)

// Graduation cap
export const IconGraduationCap = createIcon(
  <>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </>
)

// Book open
export const IconBookOpen = createIcon(
  <>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </>
)

// Hourglass
export const IconHourglass = createIcon(
  <>
    <path d="M5 22h14M5 2h14" />
    <path d="M5 2v4l7 6 7-6V2" />
    <path d="M5 22v-4l7-6 7 6v4" />
  </>
)

// Layout list - stacked bars
export const IconLayoutList = createIcon(
  <>
    <rect x="3" y="4" width="18" height="4" rx="1" />
    <rect x="3" y="10" width="18" height="4" rx="1" />
    <rect x="3" y="16" width="18" height="4" rx="1" />
  </>
)

// Calendar
export const IconCalendar = createIcon(
  <>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </>
)

// Calendar with check
export const IconCalendarCheck = createIcon(
  <>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
    <path d="M9 16l2 2 4-4" />
  </>
)

// Help circle
export const IconHelpCircle = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </>
)

// Settings - gear
export const IconSettings = createIcon(
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </>
)

// Log out - arrow out
export const IconLogOut = createIcon(
  <>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <path d="M16 17l5-5-5-5" />
    <path d="M21 12H9" />
  </>
)

// Menu - hamburger
export const IconMenu = createIcon(
  <>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </>
)

// X - close
export const IconX = createIcon(
  <>
    <path d="M18 6L6 18M6 6l12 12" />
  </>
)

// Dollar sign - argent
export const IconDollarSign = createIcon(
  <>
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </>
)

// Piggy bank
export const IconPiggyBank = createIcon(
  <>
    <path d="M19 5c-1.5 0-2.8 1.4-3 2A3 3 0 0 0 15 11v1a3 3 0 0 0 3 3" />
    <path d="M2 9v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2" />
    <path d="M6 12v3M10 12v3" />
    <circle cx="19" cy="5" r="1" />
  </>
)

// Check square
export const IconCheckSquare = createIcon(
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 12l2 2 4-4" />
  </>
)

// Search
export const IconSearch = createIcon(
  <>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </>
)

// Filter
export const IconFilter = createIcon(
  <>
    <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
  </>
)

// Download
export const IconDownload = createIcon(
  <>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M7 10l5 5 5-5" />
    <path d="M12 15V3" />
  </>
)

// Trending up
export const IconTrendingUp = createIcon(
  <>
    <path d="M23 6l-9.5 9.5-5-5L1 18" />
    <path d="M17 6h6v6" />
  </>
)

// Bell
export const IconBell = createIcon(
  <>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </>
)

// Chevron down
export const IconChevronDown = createIcon(
  <>
    <path d="M6 9l6 6 6-6" />
  </>
)

// Eye
export const IconEye = createIcon(
  <>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </>
)

// Trash
export const IconTrash = createIcon(
  <>
    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M10 11v6M14 11v6" />
  </>
)

// Check circle
export const IconCheckCircle = createIcon(
  <>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </>
)

// X circle
export const IconXCircle = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M15 9l-6 6M9 9l6 6" />
  </>
)

// Clock
export const IconClock = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </>
)

// Message square
export const IconMessageSquare = createIcon(
  <>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </>
)

// Chevron right
export const IconChevronRight = createIcon(
  <>
    <path d="M9 18l6-6-6-6" />
  </>
)

// Panel left - sidebar toggle
export const IconPanelLeft = createIcon(
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18" />
  </>
)

// Alert circle
export const IconAlertCircle = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4M12 16h.01" />
  </>
)

// Shield
export const IconShield = createIcon(
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </>
)

// Lock
export const IconLock = createIcon(
  <>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </>
)

// Unlock
export const IconUnlock = createIcon(
  <>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a3 3 0 0 1 5.83-1" />
  </>
)

// User - single person
export const IconUser = createIcon(
  <>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </>
)

// School / building
export const IconSchool = createIcon(
  <>
    <path d="M4 22v-6l8-4 8 4v6" />
    <path d="M12 18V12" />
    <path d="M4 16l8-4 8 4" />
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
  </>
)

// Check - for selects, dropdowns
export const IconCheck = createIcon(
  <>
    <path d="M20 6L9 17l-5-5" />
  </>
)

// Chevron left
export const IconChevronLeft = createIcon(
  <>
    <path d="M15 18l-6-6 6-6" />
  </>
)

// Chevron up
export const IconChevronUp = createIcon(
  <>
    <path d="M18 15l-6-6-6 6" />
  </>
)

// Circle - for radio
export const IconCircle = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
  </>
)

// More horizontal - ellipsis
export const IconMoreHorizontal = createIcon(
  <>
    <circle cx="12" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
  </>
)

// Grip vertical
export const IconGripVertical = createIcon(
  <>
    <circle cx="9" cy="5" r="1" />
    <circle cx="9" cy="12" r="1" />
    <circle cx="9" cy="19" r="1" />
    <circle cx="15" cy="5" r="1" />
    <circle cx="15" cy="12" r="1" />
    <circle cx="15" cy="19" r="1" />
  </>
)

// Arrow left
export const IconArrowLeft = createIcon(
  <>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </>
)

// Arrow right
export const IconArrowRight = createIcon(
  <>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </>
)

// Dot - for input-otp
export const IconDot = createIcon(
  <>
    <circle cx="12" cy="12" r="2" />
  </>
)
