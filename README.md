## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
  wireframe drawn in notebook

1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
  1. Three dropdowns for the waterfront, skyline, and castle
  2. Three divs for the images of the waterfront, skyline, and castle
  3. an input to add a slogan
  4. a button to submit the slogan
  5. a div to display all of the slogans
  6. a div to display how many times each drowpdown has been changed

1) **For each HTML element ask: Why do I need this?** 
  1. so the user can select the waterfront, skyline, and castle
  2. so the images can be displayed
  3. so the user can type in a slogan
  4. so the user can submit the slogan
  5. so all the previous slogans can be displayed
  6. so the user can see how many times they have changed the dropdowns

1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
  1.  dropdowns in HTML
  2. img.sr
  3. input in HTML
  4. button in HTML
  5. div displaying an array
  6. div with spans to display the change count

1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
  1. user clicks each of the dropdowns
      what happens: an image displalys for each
        state change: the display of "times changed" changes
  2. a user clicks the submit button
      what happens: slogan appears
        state change: slogan is added to a slogan array

1) **Think about how to validate each of your features according to a Definition of Done**
  I will console.log elements grabbed for the DOM.
  I will test "createCountString(waterfrontCount, skylineCount, castleCount) : returns a string describing the current count of each piece of state supplied as an argument" with TDD

1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
  The count of changes and the images depend on the dropdowns.
  The slogan array depends on the slogan input and button. 

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
    The dropdown options will be hard coded. 
    The image sources will need to be dynamically generated. 
    The slogan array will need to be dynamically generated.

- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need?
      countArray 

  - What needs to live in a persistence layer?

- Is there some state we need to initialize?
      The empty array will need to be initialized.
      The counts of the three dropdowns will be initialized at 0. 

- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
      displayStats()
      displaySlogans()