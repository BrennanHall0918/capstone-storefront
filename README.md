
Wax & Wire is a fictional online record store built as a NeXTStack capstone front-end web development project.

## Features

- Responsive navigation bar using Bootstrap
- Custom hero section with background image
- Featured records section with styled album cards
- Catalog (store) page with search and filter UI
- Consistent theming using CSS variables
- Flexbox-based layouts for card grids and page structure

## Technologies Used

- HTML
- CSS
- Bootstrap

## Pages

- Home (`index.html`)
- Store (`catalog.html`)
- About (`about.html`)
- Contact (`contact.html`)

## Notes

I wanted to try combining Bootstrap styling with my own layouts, instead of just purely relying on Bootstrap's grid.

## Project Reflection

1. Chosen Framework

* Why did you choose this framework for this specific business?
    I chose Bootstrap because it provides pre-built components like the navbar and buttons, which made it easier to create a consistent and responsive design quickly. 
    For a record store website, I wanted something that could handle responsiveness out of the box while still allowing me to customize the layout. 
    I used Bootstrap for structure and components, but relied on custom CSS and Flexbox to control the layout and overall visual style.

2. The "Hero" Component Breakdown

* Identify one section of your code that you are most proud of.
    The section I am most proud of is my hero section because it establishes the vibe of the website and uses both Bootstrap and custom CSS effectively.

* List 3-4 specific classes you used in this section and explain exactly what they do for the layout.
    - d-flex: Uses flexbox to center the hero horizontally and virtically.
    - align-items-center: Vertically centers the text inside the hero section.
    - justify-content-center: Horizontally centers the content.
    - text-center: Centers all text inside the hero.

3. The Responsive Challenge

* What was the hardest part about making your store look good on a mobile phone versus a desktop?
    The hardest part of making the site responsive was ensuring that the record cards displayed well on both desktop and mobile screens. 
    On desktop, multiple cards could sit side-by-side, but on smaller screens they needed to stack cleanly without looking cramped.

* How did you solve it using your framework?
    I solved this by using Flexbox with flex-wrap, which allows the cards to automatically move to the next line when there isn’t enough space. 
    I also adjusted spacing and card sizes using media queries so the layout remained clean and readable on smaller devices.

4. Semantic Choices

* Why did you choose a specific HTML5 semantic tag (like <article>, <section>, or <aside>) for a part of your site instead of just using a <div>?
    I used semantic tags to improve the structure and readability of my code. For example, I used <section> for grouped content like the featured records area because it represents a distinct part of the page.
    Using semantic tags also makes the code easier to understand and improves accessibility, since screen readers and browsers can better interpret the structure of the content.