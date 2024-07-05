## Tests diagram

├── ui
│   ├── common
│       └── data.ts      # Data to be used by the tests
│
│   ├── features
│       └── ui.feature   # UI scenarios
│
│   ├── pages
│       ├── elements.ts  # Elements to be used by the tests
│       └── page.ts      # Page sections
│
│   └── steps
│       └── steps.ts     # Logic to be used in the features
│


##### Workflows

Workflows list:
    · Services navigation menu is displayed
    · Preferred Partners is displayed
    · Check Computer Vision selected
    · Search for 2 results in Computer Vision Hazard Detection
    · Reset all filters from search
    · Search for invalid Preferred Partner 'Genda$'
    · Read more for valid search Preferred Partner 'Genda'
    · Submit an invalid form for Preferred Partner 'Genda':
        · Empty form
        · Email has incorrect format
        · Invalid characters on name and message fields
    · Fill 'Genda' form but do not submit it

# How to run
In order to run UI tests, just execute the following command: npm run testUI.

