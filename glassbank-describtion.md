# GlassBank

## A Mobile Banking App UX Case Study

**Comprehensive Project Documentation**

Designed by Zoltan | UX Design Portfolio Project

---

## Executive Summary

GlassBank is a comprehensive mobile banking application prototype designed for a UX design portfolio. The project showcases the complete UX design process from research through to high-fidelity prototyping, with a distinctive glassmorphic visual design system featuring purple-to-pink gradients and frosted glass effects.

The app addresses critical gaps identified in the UK digital banking market through five core MVP features: multilingual instant onboarding, adaptive dashboard with simplified accessibility mode, merchant clarity with enriched transaction data, task automation for recurring payments, and post-update safety nets to help users adapt to app changes.

This document provides a detailed overview of the project including user personas, user flows for each feature, competitive audit findings, and research conclusions that informed the design decisions.

---

## User Personas

Two primary personas were developed to guide design decisions throughout the project. These personas represent distinct user needs and accessibility requirements that informed feature prioritisation and interface design.

### Persona 1: Lorraine
*The Busy Professional*

| Attribute | Details |
|-----------|---------|
| **Demographics** | 34 years old, Marketing Manager in London, UK |
| **Tech Proficiency** | High - comfortable with digital banking and mobile apps |
| **Goals** | Quick access to account information, efficient bill payments, spending insights, and time-saving automation features |
| **Pain Points** | Confusing merchant names, difficulty tracking subscriptions, too many steps for simple tasks, unclear transaction details |
| **Behaviours** | Checks app multiple times daily, prefers quick actions over detailed navigation, values clear visual hierarchy |
| **Quote** | *"I want to check my balance and pay a bill in under 30 seconds."* |

**Design Implications for Lorraine:** The standard dashboard mode is optimised for Lorraine's needs, featuring quick actions prominently displayed, spending tracking with budget visualisation, and a streamlined transaction list with merchant logos and category tags. The automation feature allows her to set up recurring payments without repeated manual intervention.

---

### Persona 2: Javier
*The Accessibility-Focused User*

| Attribute | Details |
|-----------|---------|
| **Demographics** | 58 years old, Spanish-speaking, lives in the UK with limited English proficiency |
| **Tech Proficiency** | Moderate - uses smartphone daily but prefers simpler interfaces |
| **Goals** | Bank independently without language barriers, use app without confusion, complete tasks without asking for help |
| **Pain Points** | English-only apps, small text, too many options at once, complex navigation, fear of making mistakes |
| **Accessibility Needs** | Larger text sizes, high contrast colours, native language support, reduced cognitive load, clear visual feedback |
| **Quote** | *"I just want to manage my money without feeling lost or anxious."* |

**Design Implications for Javier:** The simplified dashboard mode is specifically designed for Javier's needs, featuring significantly larger text (40px balance vs 32px standard), full-width stacked action buttons instead of a grid, reduced options on screen, Spanish language support from the moment the app opens, and high-contrast visual elements. The onboarding flow supports multiple languages with clear visual examples rather than text-heavy instructions.

---

## User Flows by Feature

Each of the five MVP features has been designed with detailed user flows that guide users through key tasks. Multiple wireframe variations were explored for each feature to identify the optimal approach.

### Feature 1: Multilingual Instant Onboarding

**User Flow:** Welcome Screen → Language Selection → ID Upload → Selfie Capture → Verification Processing → Account Setup → Dashboard

**Purpose:** Enable users to open a bank account in under 5 minutes with support for multiple languages from the first interaction.

**Key Design Decisions:**
- Language selection appears immediately before any other content
- Step-by-step progressive disclosure reduces cognitive load
- Visual examples show correct and incorrect ID placement
- Real-time camera guidance with frame overlay and positioning hints
- Quality validation with clear feedback on photo capture success

**Variations Explored:**
1. **Flag-based single screen** - All languages visible with flag icons
2. **Grid layout** - All language options displayed at once
3. **Step-by-step guided approach** - Progressive disclosure with focused screens

**Recommendation:** Variation 3 (Step-by-Step) was selected as the primary approach due to its excellent accessibility and lower cognitive load, aligning with GlassBank's inclusive mission.

---

### Feature 2: Adaptive Dashboard

**User Flow:** Login → Dashboard View → Quick Actions OR Transaction List → Detail View → Back to Dashboard

**Purpose:** Provide a home screen that adapts to user needs with two distinct modes: Standard (for tech-comfortable users like Lorraine) and Simplified (for accessibility-focused users like Javier).

#### Standard Mode Features:
- Balance card with spending progress visualisation
- 2x2 quick actions grid (Send Money, Pay Bill, Add Money, Cards)
- Recent transactions with merchant logos and category tags
- Notifications and settings icons in header
- 5-item bottom navigation

#### Simplified Mode Features:
- 40% larger text throughout the interface
- Full-width stacked action buttons instead of grid
- Reduced number of visible options (3 vs 4+ actions)
- Simplified bottom navigation (3 items vs 5)
- High contrast visual elements with clear borders

**Variations Explored:**

*Standard Mode:*
1. **Classic Vertical Scroll** - Traditional feed-style layout
2. **Tabbed Organisation** - Content organised into tabs
3. **Modular Cards** - Widget-based customisable layout

*Simplified Mode:*
1. **Large & Stacked** - Everything larger with vertical stacking
2. **Focus Mode** - One main action at a time with rotating featured action
3. **Text-First** - Optimised for screen reader users

**Recommendation:** Classic Vertical Scroll (Standard) and Focus Mode (Simplified) were selected as optimal choices for their balance of familiarity, accessibility, and smart personalisation.

---

### Feature 3: Merchant Clarity 360

**User Flow:** Transactions List → Tap Transaction → View Details (Logo, Map, Merchant Info) → Report Issue (optional) → Guided Dispute Flow

**Purpose:** Transform cryptic transaction codes into clear, contextual information including merchant logos, location maps, and enriched details.

**Key Features:**
- Merchant logo and clear business name instead of cryptic codes
- Map preview showing transaction location
- Category tagging (Food & Drink, Transport, Shopping, etc.)
- Transaction timeline showing processing stages
- Quick dispute initiation with guided flow

**Variations Explored:**

*Transaction List:*
1. **Chronological Groups** - Date-based grouping with time headers
2. **Category-First View** - Organised by spending categories
3. **Visual Timeline** - Rich visual feed with inline maps

*Transaction Details:*
1. **Information-Dense** - All details visible on one screen
2. **Tabbed Sections** - Content organised into tabs (Details, Location, Actions)
3. **Timeline Story** - Narrative approach showing transaction lifecycle

**Recommendation:** Chronological Groups and Information-Dense were selected for their familiarity and alignment with the transparency goal.

---

### Feature 4: Task Automation

**User Flow:** Automation Hub → Create New → Select Task Type → Configure Amount/Recipient → Schedule (Now/Later) → Calendar Selection → Confirm → Success

**Purpose:** Allow users to set up recurring payments, scheduled transfers, and automated savings rules without repeated manual intervention.

**Automation Types:**
- Recurring bill payments (utilities, subscriptions)
- Scheduled transfers to savings accounts
- Automatic round-ups for savings
- Balance-triggered actions

**Variations Explored:**
1. **Compact List** - Dense list view with quick toggle controls
2. **Visual Cards** - Large card-based layout with spacious touch targets
3. **Timeline View** - Chronological view showing when tasks will execute

**Recommendation:** Compact List recommended for standard mode (efficient management for power users), Visual Cards for simplified mode (accessibility focus with large touch targets).

---

### Feature 5: Post-Update Safety Net

**User Flow:** App Update → What's New Intro → Feature Highlights → Interactive Tour (optional) → Dashboard with New Badges → Contextual Tooltips on First Use

**Purpose:** Help users adapt to app changes without feeling lost, reducing anxiety about updates and ensuring continued confidence in using the app.

**Key Features:**
- "What's New" introduction screen after updates
- Interactive guided tour for major changes
- "NEW" badges highlighting updated features
- Contextual tooltips appearing at point of need
- Easy skip/dismiss options respecting user time
- Settings access to revisit update information

**Variations Explored:**
1. **Full Interactive Tour** - Comprehensive walkthrough (2-3 minutes, blocks usage)
2. **Quick Highlights Carousel** - Brief slideshow (30-45 seconds)
3. **Contextual Tooltips** - Tips appear naturally as users explore

**Recommendation:** The approach should be selected based on update magnitude - Full Tour for major overhauls, Quick Highlights for minor updates, Contextual Tooltips for small refinements.

---

## Competitive Audit

A comprehensive competitive analysis was conducted of leading UK digital banks to identify market gaps and design opportunities. The audit examined both challenger banks (Monzo, Starling, Revolut) and traditional bank mobile apps to understand current best practices and areas for improvement.

### Banks Analysed

**Challenger Banks:**
- **Monzo:** Known for instant notifications, spending insights, and bright coral card design
- **Starling Bank:** Strong on personal and business accounts, real-time balance updates, savings spaces
- **Revolut:** Multi-currency focus, cryptocurrency trading, premium subscription tiers

**Traditional Banks:**
- **Barclays:** Large customer base, established trust, comprehensive services
- **Lloyds:** Broad demographics, branch network integration
- **NatWest:** Government-backed stability, recent digital improvements

### Key Findings

#### 1. Language Support Gap

| Aspect | Details |
|--------|---------|
| **Finding** | Most UK banking apps are English-only or offer limited language options buried deep in settings |
| **Opportunity** | Instant language selection from the first screen serves the 4.5+ million UK residents whose first language isn't English |
| **GlassBank Solution** | Language selection is the very first interaction, supporting English, Spanish, Polish, and Mandarin |

#### 2. Accessibility Mode Limitations

| Aspect | Details |
|--------|---------|
| **Finding** | Existing apps rely on system-level accessibility settings rather than providing in-app simplified modes |
| **Opportunity** | A dedicated simplified mode reduces cognitive load beyond what system settings achieve |
| **GlassBank Solution** | Toggle-accessible simplified mode with larger text, fewer options, and high-contrast elements |

#### 3. Transaction Clarity Issues

| Aspect | Details |
|--------|---------|
| **Finding** | Cryptic merchant codes like "AMZN MKTP UK*2A6PQ" leave users uncertain about transactions |
| **Opportunity** | Enriched transaction data with logos, locations, and clear merchant names builds trust |
| **GlassBank Solution** | Merchant Clarity 360 with logos, maps, categories, and timeline storytelling |

#### 4. Automation Friction

| Aspect | Details |
|--------|---------|
| **Finding** | Setting up recurring payments often requires multiple screens and isn't prominently featured |
| **Opportunity** | Streamlined automation with calendar integration and visual confirmation |
| **GlassBank Solution** | Dedicated Automation Hub with quick-toggle controls and clear scheduling |

#### 5. Update Anxiety

| Aspect | Details |
|--------|---------|
| **Finding** | App updates often disorient users, especially those less comfortable with technology |
| **Opportunity** | Guided onboarding after updates maintains user confidence |
| **GlassBank Solution** | Post-Update Safety Net with tours, highlights, and contextual tooltips |

---

## Research Conclusions

The research phase combined competitive analysis, persona development, and user need identification to establish clear design principles for GlassBank. The following conclusions guided all subsequent design decisions.

### Core Design Principles Established

**1. Inclusion First**
Every feature must work for users across language barriers, technical comfort levels, and accessibility needs. This isn't an afterthought—it's foundational to the product strategy.

**2. Clarity Over Density**
Rather than cramming features onto screens, GlassBank prioritises clear hierarchy and progressive disclosure. Users should understand their options without feeling overwhelmed.

**3. Trust Through Transparency**
Banking apps handle sensitive financial data. Every interaction should reinforce trust through clear merchant information, explicit confirmations, and undo-friendly workflows.

**4. Respect for Time**
Busy professionals need efficiency. The app should enable core tasks (check balance, pay bill, review transaction) in under 30 seconds.

---

### Key Research Insights

**Insight 1 - Dual Mode Necessity**
A single interface cannot optimally serve both power users seeking efficiency and accessibility-focused users needing simplicity. The adaptive dashboard with standard and simplified modes addresses this tension directly.

**Insight 2 - Onboarding is Trust-Building**
The account opening experience sets expectations for the entire relationship. A frictionless, multilingual onboarding signals that the bank values the user's time and identity.

**Insight 3 - Transaction Anxiety is Real**
Users frequently don't recognise their own transactions due to cryptic merchant codes. This creates unnecessary worry and support requests. Enriched transaction data directly addresses this pain point.

**Insight 4 - Automation Reduces Errors**
Manual recurring payments lead to forgotten bills and late fees. Well-designed automation features help users stay on top of financial obligations without cognitive overhead.

**Insight 5 - Update Fatigue is Universal**
Both tech-comfortable and tech-anxious users experience frustration when apps change without guidance. The safety net feature acknowledges that learning new interfaces takes effort.

---

### Design System Decisions

The glassmorphic visual design system was selected for several strategic reasons:

- **Modern Differentiation:** The frosted glass aesthetic stands out from competitors' flat designs while remaining readable and professional

- **Depth and Hierarchy:** Layered transparency creates natural visual hierarchy without heavy borders or drop shadows

- **Purple-to-Pink Gradient:** The signature gradient (#7B3FF2 primary) conveys innovation while maintaining accessibility with sufficient contrast ratios

- **Scalability:** The component-based system allows consistent application across all features and screen sizes

**Technical Specifications:**
- Glass effect: 15% opacity white backgrounds with backdrop blur
- Active states: 8% opacity purple (#7B3FF2)
- Inactive elements: #999999 (icons), #666666 (text)
- Target device: iPhone 14/15 Pro (393px width)

---

### Portfolio Demonstration

This GlassBank project demonstrates comprehensive UX skills including:

- User research and persona development
- Competitive analysis and market positioning
- Information architecture and user flow design
- Wireframing with multiple variation exploration
- Visual design system creation
- Accessibility-focused design decisions
- Component-based Figma implementation
- Interactive prototyping

---

*GlassBank represents a research-driven approach to solving real problems in digital banking, with particular attention to underserved user needs around language accessibility and cognitive simplicity.*