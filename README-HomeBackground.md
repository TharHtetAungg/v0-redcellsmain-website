# HomeBackground System Documentation

## Overview

The HomeBackground system provides a stable, deterministic network map background that appears only on the homepage (`/`) and remounts cleanly during navigation.

## Architecture

### Components

1. **`HomeBackground`** (`components/home-background.tsx`)
   - Canvas-based network animation with nodes, edges, and aurora effects
   - Respects `prefers-reduced-motion` accessibility preference
   - Fixed positioning with `z-[-1]` to stay below all content

2. **`HomeBackgroundWrapper`** (`components/home-background-wrapper.tsx`)
   - Conditionally renders HomeBackground only when `pathname === '/'`
   - Uses pathname-based key for clean remounting on navigation
   - Prevents stale canvas state and ensures fresh initialization

### Mounting Strategy

The HomeBackground is mounted in the root layout (`app/layout.tsx`) but only renders on the homepage:

\`\`\`tsx
<HomeBackgroundWrapper />
\`\`\`

The wrapper uses `usePathname()` to conditionally render:

\`\`\`tsx
<div key={pathname === '/' ? 'home-bg' : 'no-home-bg'}>
  {pathname === '/' ? <HomeBackground /> : null}
</div>
\`\`\`

### Key Benefits

- **Clean Navigation**: Fresh mount when returning to homepage via logo click
- **Performance**: Only renders on homepage, not on other routes
- **Accessibility**: Respects reduced motion preferences
- **Stability**: No brittle body class side effects or global DOM manipulation

## Z-Index Scheme

- **HomeBackground**: `z-[-1]` (below all content)
- **Main content**: `z-0` and above
- **Navbar**: `z-50`

## Asset Management

Background assets are procedurally generated via Canvas 2D API - no static images required in `/public/bg/`.

## Navigation Flow

1. **Hard refresh on `/`** → Background visible ✅
2. **Navigate to other page** → Background hidden ✅  
3. **Return via logo click** → Background remounts and visible ✅

## Performance Optimizations

- Canvas rendering respects device pixel ratio (capped at 1.5x)
- Animation frame requests only when motion is enabled
- Efficient event listener cleanup on unmount
- Preload critical assets for faster LCP

## Updating Assets

To modify the network background:

1. Edit `components/home-background.tsx`
2. Adjust node positions, colors, or animation parameters
3. Test with reduced motion enabled/disabled
4. Verify clean remounting by navigating away and back

## Troubleshooting

- **Background not showing**: Check that you're on `/` route and component is mounted
- **Stale animations**: Verify the pathname key is forcing remount
- **Performance issues**: Check device pixel ratio capping and animation frame cleanup
