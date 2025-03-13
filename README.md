Introduction

This report outlines the technologies, libraries, and languages used in the Dune Security Frontend Engineering Assignment and provides justifications for each choice.
The project is live at https://assignment-dune-security.vercel.app/.


Technologies and Packages Used

1.	React: Selected for its robust support of Single Page Applications (SPA), React leverages client-side rendering (CSR) to deliver a fast, responsive user experience. Since the project did not require server-side rendering (SSR) or API routes, React was the ideal choice.
2.	TypeScript: TypeScript improves code quality with static typing, which catches errors early, enhances maintainability, and provides better tooling for scaling the codebase.
3.	CSS & SCSS: Core CSS and SCSS were chosen over other CSS frameworks. This choice keeps the styling lightweight, customizable, and minimal, ensuring fast performance and easy maintainability for the small-scale project while retaining full control over styles without external dependencies.
4.	Bootstrap Grid: The minified version of Bootstrap Grid (20 KB) was used for layout structuring. It provides essential grid functionality without unnecessary overhead and remains flexible for responsive layouts.
5.	React Flow: Ideal for interactive data visualizations, React Flow was selected for its ease of use and React-specific optimizations. It is lighter than other libraries, tailored for flowchart and diagramming needs, providing high customization (~45 KB footprint).
6.	AG Grid: AG Grid was chosen for efficient tabular data management, known for its lightweight performance, robust features, and flexibility in handling large datasets. AG Grid’s performance and customization made it a better fit compared to alternatives.
7.	Font and Color Choices: "DM Sans", sans-serif, was chosen for readability and consistency with the provided design. Colors were selected based on the design without specific instructions.
8.	Data Handling: Since no specific instructions were provided for API routes or data handling, a simple approach was used for now, with plans to integrate more advanced solutions as the project evolves.
9.	Vercel: Chosen for deployment due to its serverless functions, seamless React integration, automatic scaling, and CI/CD support, ensuring fast and efficient delivery with automated deployment.
10.	GitHub & GitLab: These platforms were used for version control and collaboration, ensuring efficient project management.


Justifications for Technology Choices

1.	React vs. Next.js: React was preferred over Next.js as the project requires a Single Page Application (SPA), which benefits from React's client-side rendering (CSR). Next.js, while excellent for server-side rendering (SSR) and API routes, was unnecessary for this project as it did not need SEO optimization or server-side functionality.
2.	CSS/SCSS vs. Other CSS Frameworks: Given the small scope, using large CSS frameworks like Tailwind or Material UI would add unnecessary bloat. SCSS was selected for its flexibility and control over styling, making it more efficient to write and maintain the stylesheets.
3.	React Flow: React Flow was chosen due to its React-specific optimizations and lightweight footprint (~45 KB). Unlike D3.js, which is more complex, React Flow offers an easy-to-use API for interactive visualizations in React, making it better suited for this project's flowchart functionality.
4.	AG Grid vs. Material UI Data Grid / JQuery DataTables: AG Grid outperforms both Material UI Data Grid and JQuery DataTables in terms of performance, lightweight nature, and customization. AG Grid offers more flexibility and features, optimized for large datasets, while avoiding the jQuery dependency of DataTables.


Future Scope

1.	API Integration: Implementing Axios will streamline data fetching, error handling, and communication with backend services. Axios offers a simple API for managing HTTP requests and responses, improving data handling in the app.
2.	Migration to Next.js: If the project scope expands to include SSR or API routes, migrating to Next.js will improve performance with optimized page rendering and built-in SSR. This will also enhance SEO for content-heavy platforms.
3.	State Management: As the app scales, state management complexity will increase. Introducing Redux or Context API will help manage global state efficiently and reduce prop-drilling.
4.	Bootstrap Grid for Scalability: Bootstrap Grid will serve as the core layout system for responsive layouts, easily scalable as the project grows. If needed, we can transition to Tailwind CSS, which is well-suited for utility-first design with Next.js, aligns with modern frontend practices.
5.	Performance Optimizations: Implementing lazy loading, code splitting, and dynamic imports will improve performance and handle increased app complexity.


Conclusion

The technologies and libraries selected for the project prioritize efficiency, maintainability, and scalability. React, React Flow, and AG Grid provide a smooth user experience with lightweight functionality and efficient data handling. Core CSS and SCSS minimize bloat while offering flexibility and control over styling. Future enhancements like API integration, state management, and potential migration to Next.js will ensure the app scales efficiently. These choices create a strong foundation, ensuring optimal performance and scalability as the project evolves.