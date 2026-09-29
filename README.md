# ✈️ VSTravel

VSTravel is a multi-page travel agency website concept that introduces the beauty and diversity of Indonesia. It lets visitors browse destinations, explore travel packages, book a trip, and get in touch with the VSTravel team.

The project was built for an **Human-Computer Interaction (HCI) lab assignment**, with a focus on clear navigation, a consistent layout, and an accessible user experience.

## Table of Contents

- [Features](#features)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [HCI Design Considerations](#hci-design-considerations)
- [Author](#author)

## Features

- **Responsive layout**, with a hamburger menu on smaller screens
- **Destination filtering** by region, category, and rating
- **Popular destinations** section highlighting places such as Jakarta, Bali, and Raja Ampat
- **Trip booking form** with client-side validation
- **Contact form** with client-side validation
- **Consistent header and footer** across all pages for predictable navigation

## Pages

| Page | File | Description |
| --- | --- | --- |
| Home | `index.html` | Hero section, popular destinations, company intro, and "Why Choose VSTravel?" |
| About | `about.html` | Information about VSTravel and its mission |
| Destination | `destination.html` | Browse and filter destinations |
| Travel | `travel-now.html` | Trip booking form |
| Contact | `contact.html` | Contact form and contact information |

## Tech Stack

- **HTML5** for structure
- **CSS3** for styling and responsive layout
- **JavaScript (vanilla)** for the navigation menu, destination filter, and form validation

No frameworks or build tools are required.

## Project Structure

```
VSTravel/
├── index.html
├── about.html
├── destination.html
├── travel-now.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

## Getting Started

No installation is needed.

1. **Clone the repository**

   ```bash
   git clone https://github.com/Edward-NA/VSTravel.git
   cd VSTravel
   ```

2. **Open the site**

   Open `index.html` in your browser, or use a local server such as the VS Code *Live Server* extension.

## HCI Design Considerations

- **Consistency:** the same navigation bar and footer appear on every page.
- **Visibility:** the current page is highlighted in the navigation, and the "Book Trip" button is always visible.
- **Feedback:** form validation tells users what needs to be corrected.
- **Flexibility:** destinations can be filtered so users can find what they need faster.
- **Responsiveness:** the layout adapts to desktop, tablet, and mobile screens.

## Author

**Edward** — Computer Science student, Bina Nusantara University

- GitHub: [@Edward-NA](https://github.com/Edward-NA)

---

> This project is an academic assignment and a concept website. VSTravel is a fictional brand.
