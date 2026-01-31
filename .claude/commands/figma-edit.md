# Figma Edit

Modify Figma designs via browser automation.

## Usage
```
/figma-edit <figma-url> <edit-instruction>
```

## Arguments
- `figma-url`: URL to the Figma file to edit
- `edit-instruction`: What to change (e.g., "change button color to blue", "update heading text to 'Welcome'")

## Instructions

You are modifying a Figma design via browser automation. Follow these steps:

### Step 1: Open Figma in Browser
Use the browser automation tools to:
1. Get the current tab context with `tabs_context_mcp`
2. Create a new tab if needed with `tabs_create_mcp`
3. Navigate to the Figma URL provided: $ARGUMENTS

### Step 2: Verify Edit Access
Before making changes:
1. Check if the user has edit access (not view-only)
2. Look for the editing toolbar and layer panel
3. If view-only, inform the user they need edit permissions

### Step 3: Locate the Element to Edit
Based on the edit instruction:
1. Take a screenshot to understand the current design
2. Navigate the layers panel or click directly on the canvas
3. Select the element that needs to be modified

### Step 4: Perform the Edit
Common edit operations:

**Text Changes:**
1. Double-click the text element to enter edit mode
2. Select all text (Cmd+A / Ctrl+A)
3. Type the new text
4. Click outside to deselect

**Color Changes:**
1. Select the element
2. Open the Fill section in the right panel
3. Click the color picker
4. Enter the new color value (hex, RGB)
5. Or use the color picker to select

**Size/Position Changes:**
1. Select the element
2. Use the properties panel on the right
3. Update W (width), H (height), X, Y values
4. Or drag handles directly on canvas

**Font Changes:**
1. Select the text element
2. Use the Text section in the right panel
3. Change font family, size, weight, etc.

**Adding Elements:**
1. Use keyboard shortcuts:
   - R for rectangle
   - O for ellipse
   - T for text
   - F for frame
2. Or use the toolbar at the top

**Duplicating:**
1. Select element
2. Cmd+D / Ctrl+D to duplicate
3. Or Alt+drag to duplicate while moving

**Deleting:**
1. Select element
2. Press Delete/Backspace

### Step 5: Verify the Change
After making the edit:
1. Take a screenshot to confirm the change
2. Compare with the original if needed
3. Check that surrounding elements weren't affected

### Step 6: Report Results
Provide:
- Confirmation of what was changed
- Screenshot of the updated design
- Any issues encountered

## Safety Considerations
- Always take a screenshot before making changes
- For destructive changes (delete), confirm with user first
- Note that Figma has version history if changes need to be reverted
- Be careful with batch operations

## Common Keyboard Shortcuts (Mac/Windows)
- Select All: Cmd+A / Ctrl+A
- Duplicate: Cmd+D / Ctrl+D
- Copy: Cmd+C / Ctrl+C
- Paste: Cmd+V / Ctrl+V
- Undo: Cmd+Z / Ctrl+Z
- Redo: Cmd+Shift+Z / Ctrl+Shift+Z
- Group: Cmd+G / Ctrl+G
- Ungroup: Cmd+Shift+G / Ctrl+Shift+G
- Zoom In: Cmd++ / Ctrl++
- Zoom Out: Cmd+- / Ctrl+-
- Fit to Screen: Shift+1

## Limitations
- Cannot modify components from external libraries (only instances)
- Cannot access files without edit permissions
- Complex operations may require multiple steps
- Some Figma features may have different UI in browser vs desktop

## Notes
- Figma auto-saves changes
- Use Cmd+Z liberally to undo mistakes
- For complex edits, consider breaking into smaller steps
- If Figma becomes unresponsive, refresh the page
