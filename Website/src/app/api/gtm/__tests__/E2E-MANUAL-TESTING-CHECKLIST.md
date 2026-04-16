# End-to-End Manual Testing Checklist for Asset Generation

This checklist verifies the complete one-click HTML generation workflow through the GTM Content Builder UI.

## Setup

- [ ] Run `npm run dev` to start the development server
- [ ] Navigate to the GTM Content Builder in your browser
- [ ] Ensure you have a valid brief generated (generate content for any asset type first)
- [ ] Set up the test API key in `.env.local`:
  ```
  ANTHROPIC_API_KEY=<your-test-key>
  ```

## Pre-Generation Tests

### Brief Generation

- [ ] Select a solution (e.g., Trade Shows)
- [ ] Select "Direct" or "Partner" motion
- [ ] Select a vertical (if Direct motion)
- [ ] Select a content type (e.g., "Infographic")
- [ ] Click "Generate" to create the initial brief
- [ ] Verify the brief appears in the right panel
- [ ] Check that `output` state contains the brief text

## Asset Generation Tests

### Test 1: Infographic Generation

- [ ] With a generated brief visible, scroll to the "Generate Now" button in the Infographic section
- [ ] Verify the button is enabled (not disabled)
- [ ] Click "Generate Now"
- [ ] Observe the button state changes to "Generating..." with spinner
- [ ] Check that `generatingAsset` state is "infographic"
- [ ] Wait 10-30 seconds for Claude to generate HTML
- [ ] Verify the button returns to "Generate Now" state
- [ ] Check that `generatingAsset` state is now null
- [ ] Verify the preview section appears below the button
- [ ] Check that iframe loads the preview from `/api/gtm/infographic-preview?solution=<solution>`
- [ ] Verify the iframe displays the generated infographic

### Test 2: Microsite Generation

- [ ] Select "Microsite" as content type
- [ ] Click "Generate" to create a new brief
- [ ] Wait for brief to load
- [ ] Scroll to the "Generate Now" button
- [ ] Click "Generate Now"
- [ ] Observe loading state (spinner + "Generating...")
- [ ] Wait for completion
- [ ] Verify no error message appears
- [ ] Check that file is saved to `/public/gtm/{solution}-microsite.html`

### Test 3: Carousel Generation

- [ ] Select "Social Carousel" as content type
- [ ] Click "Generate" to create a new brief
- [ ] Wait for brief to load
- [ ] Scroll down to the carousel section
- [ ] Click "Generate Now" button
- [ ] Observe loading state
- [ ] Wait for HTML generation
- [ ] Verify preview section appears with carousel cards
- [ ] Check that cards are navigable with prev/next buttons
- [ ] Verify file is saved to `/public/gtm/{solution}-carousel.html`

### Test 4: One-Pager Generation

- [ ] Select "One Pager" as content type
- [ ] Click "Generate" to create a new brief
- [ ] Wait for brief to load
- [ ] Scroll to the "Generate Now" button
- [ ] Click "Generate Now"
- [ ] Observe loading state
- [ ] Wait for completion
- [ ] Verify success (no error)
- [ ] Check that file is saved to `/public/gtm/{solution}-one-pager.html`

### Test 5: Pitch Deck Generation

- [ ] Select "Pitch Deck" as content type
- [ ] Click "Generate" to create a new brief
- [ ] Wait for brief to load
- [ ] Scroll to the "Generate Now" button (should say "Build with Claude Code" instead)
- [ ] Note: Pitch decks use manual Claude Code generation (no one-click button)
- [ ] Verify the manual generation prompt is displayed

## State Management Tests

### Loading State

- [ ] Click "Generate Now" for any asset type
- [ ] Immediately check DevTools > Application > Local Storage
- [ ] Verify `generatingAsset` is set to the asset type name
- [ ] Verify button is disabled and shows spinner
- [ ] Verify text changes to "Generating..."

### Error State

- [ ] Disconnect internet connection (or use DevTools network throttle)
- [ ] Click "Generate Now" for any asset type
- [ ] Wait for timeout
- [ ] Verify error message appears: "Network error during generation"
- [ ] Check that `assetGenerationError` contains the error text
- [ ] Verify button returns to enabled state
- [ ] Click elsewhere to dismiss error
- [ ] Reconnect internet

### Success State

- [ ] Generate an asset successfully
- [ ] Verify error state is cleared
- [ ] Verify `assetGenerationError` is null
- [ ] For infographic: verify `infographicExists` is true
- [ ] Verify preview section is visible

## Cross-Asset Type Tests

### Switching Between Asset Types While Generating

- [ ] Click "Generate Now" for infographic
- [ ] While generating (button still shows "Generating..."), click on a different content type (e.g., "Carousel")
- [ ] Verify the new content type is selected
- [ ] Verify the original generation continues in the background
- [ ] Once complete, verify the asset appears for the original type
- [ ] Verify the new content type shows empty state

### Multiple Quick Generations

- [ ] Generate an infographic successfully
- [ ] Without changing solution/motion, select carousel
- [ ] Click "Generate" to create new brief
- [ ] Click "Generate Now" for carousel
- [ ] While generating carousel, click back to infographic content type
- [ ] Verify both can be in different states without conflict
- [ ] Once carousel completes, verify preview appears
- [ ] Click back to infographic and verify original preview is still there

## File System Tests

### Verify Files Are Created

- [ ] Open a terminal in the project root
- [ ] Run: `ls -la public/gtm/`
- [ ] Verify files exist:
  - `trade-shows-infographic.html`
  - `trade-shows-microsite.html`
  - `trade-shows-carousel.html`
  - (one-pager, pitch-deck as needed)

### Verify File Content

- [ ] Run: `file public/gtm/trade-shows-infographic.html`
- [ ] Verify output indicates HTML file
- [ ] Run: `head -1 public/gtm/trade-shows-infographic.html`
- [ ] Verify first line is `<!DOCTYPE html>` or `<!doctype html>`
- [ ] Run: `tail -1 public/gtm/trade-shows-infographic.html`
- [ ] Verify last line is `</html>`

### Test Different Solutions

- [ ] Switch solution to "Recruiting" (Tech Recruiting)
- [ ] Generate a brief and asset (e.g., infographic)
- [ ] Verify file is saved as `recruiting-infographic.html`
- [ ] Switch to "Field Sales"
- [ ] Generate an asset
- [ ] Verify file is saved as `field-sales-{assetType}.html`

## Preview / URL Tests

### Preview URL Format

- [ ] Generate an asset successfully
- [ ] Inspect the iframe element in DevTools
- [ ] Verify src attribute matches: `/{solution}-{assetType}.html`
- [ ] For infographic: verify src is `/api/gtm/infographic-preview?solution={solution}`
- [ ] Open the file directly in a new tab:
  - `http://localhost:3000/{solution}-{assetType}.html`
  - (e.g., `http://localhost:3000/trade-shows-carousel.html`)
- [ ] Verify the HTML file loads and displays correctly

### Preview Iframe Rendering

- [ ] Generate an infographic
- [ ] Wait for preview iframe to load
- [ ] Verify iframe displays the infographic without errors
- [ ] Open DevTools > Console
- [ ] Verify no 404 errors for the preview URL
- [ ] Verify no CORS errors
- [ ] Try scrolling within the iframe preview
- [ ] Verify the preview is responsive

## Error Handling Tests

### Missing Brief

- [ ] Click "Generate Now" before generating a brief
- [ ] Verify button is disabled (grayed out)
- [ ] Verify tooltip or disabled state indicates why
- [ ] Generate a brief
- [ ] Verify button becomes enabled

### API Errors (Simulated)

- [ ] Set an invalid API key in `.env.local`
- [ ] Click "Generate Now"
- [ ] Wait for API response
- [ ] Verify error message: "Generation failed. Please try again."
- [ ] Check DevTools > Network > API call
- [ ] Verify the endpoint is `/api/gtm/generate-asset-html`
- [ ] Verify the request method is POST
- [ ] Verify the request body contains `brief`, `assetType`, `solution`

### Network Errors

- [ ] Open DevTools > Network tab
- [ ] Throttle to "Slow 3G"
- [ ] Click "Generate Now"
- [ ] Observe the request is slow
- [ ] Wait for timeout or completion
- [ ] Verify appropriate error state

## UI/UX Tests

### Button Styling

- [ ] Verify "Generate Now" button is styled consistently with other action buttons
- [ ] Verify button color uses `var(--gtm-accent)`
- [ ] Verify button text is white (#fff)
- [ ] During generation:
  - [ ] Verify opacity changes to 0.6
  - [ ] Verify cursor becomes "not-allowed"
  - [ ] Verify button is disabled

### Error Message Display

- [ ] Trigger an error (invalid API key, network failure, etc.)
- [ ] Verify error message appears below the button
- [ ] Verify error text color is red or error color
- [ ] Verify error message is readable and concise
- [ ] Click elsewhere or regenerate
- [ ] Verify error message clears

### Loading Indicators

- [ ] Click "Generate Now"
- [ ] Verify spinner rotates smoothly
- [ ] Verify "Generating..." text appears
- [ ] Verify no janky animations or console errors
- [ ] Wait for completion
- [ ] Verify spinner disappears

## Integration Tests

### Content Builder Flow

- [ ] Start with empty state
- [ ] Select solution, motion, vertical, content type
- [ ] Add additional context if desired
- [ ] Click "Generate"
- [ ] Wait for brief to load
- [ ] Scroll down and verify content appears
- [ ] Click "Generate Now" for applicable asset type
- [ ] Wait for HTML generation
- [ ] Verify preview loads
- [ ] Click "Copy to Library" or "Schedule to Calendar" (if applicable)
- [ ] Verify those features still work with generated content

### Multiple Solutions

- [ ] Generate infographic for "Trade Shows"
- [ ] Switch solution to "Recruiting"
- [ ] Generate a brief
- [ ] Generate carousel for "Recruiting"
- [ ] Verify files are created for both solutions in `/public/gtm/`
- [ ] Verify each iframe loads the correct solution's asset

## Performance Tests

### Generation Time

- [ ] Generate multiple assets in sequence
- [ ] Time each generation (note down)
- [ ] Verify typical generation time is 15-45 seconds
- [ ] Verify no UI freezing during generation
- [ ] Verify button interactions remain responsive

### File Size

- [ ] Check file sizes in `/public/gtm/`
- [ ] Verify HTML files are reasonable size (< 500KB each)
- [ ] Run: `du -h public/gtm/`
- [ ] Verify total directory size is reasonable

## Regression Tests

### Existing Features Still Work

- [ ] Social post generation still works (select "Social Post")
- [ ] Pitch deck canvas rendering still works
- [ ] Carousel card navigation still works
- [ ] Copy buttons still work
- [ ] Regenerate button still works
- [ ] Save to library still works
- [ ] Feedback buttons (thumbs up/down) still work

## Cleanup

- [ ] After testing, verify you can delete generated assets if needed
- [ ] Delete test files from `/public/gtm/` if desired
- [ ] Restore original `.env.local` settings
- [ ] Run `npm run test` to verify automated tests pass
- [ ] Document any issues found in a GitHub issue

---

## Test Summary Template

Copy and fill out after testing:

```
## E2E Manual Testing Results

Date: [DATE]
Tester: [NAME]
Solution Tested: [e.g., Trade Shows, Recruiting]

### Tests Passed
- [ ] Brief generation
- [ ] Infographic generation
- [ ] Microsite generation
- [ ] Carousel generation
- [ ] One-Pager generation
- [ ] State management (loading/error/success)
- [ ] File system operations
- [ ] Preview URL formatting
- [ ] Error handling
- [ ] UI/UX consistency
- [ ] Cross-asset type workflow
- [ ] Performance acceptable

### Tests Failed
(List any failures with reproduction steps)

### Issues Found
(Link GitHub issues if any were created)

### Sign-off
All critical tests passed: [ ] Yes [ ] No
Ready for production: [ ] Yes [ ] No
```
