Introduction
This report outlines the technologies, libraries, and languages used in the Dune Security Frontend Engineering Assignment and provides justifications for each choice.
________________________________________
Technologies and Packages Used
1.	React: React was selected over Next.js for the project's requirement of a Single Page Application (SPA). As the project did not require server-side rendering (SSR) or API routes, React's client-side rendering (CSR) was sufficient, offering a fast and responsive user experience.
2.	TypeScript: Chosen for its static typing, TypeScript enhances code quality by catching errors early, improving maintainability, and making the development process smoother. It also provides better tooling support for scaling the codebase.
3.	CSS & SCSS: Core CSS and SCSS were chosen over frameworks like Bootstrap, Tailwind, or Material-UI. This choice keeps the styling lightweight, customizable, and minimal, ensuring fast performance and easy maintainability for the small-scale project while retaining full control over styles without external dependencies.
4.	Bootstrap Grid: The minified version of Bootstrap Grid (20 KB) was used for layout structuring. It offers essential grid functionality without unnecessary overhead and is flexible enough for responsive layouts. It is retained to extend the project and provide a more complex dashboard structure as the scope grows.
5.	React Flow: Ideal for interactive data visualizations, React Flow was selected for its ease of use and React-specific optimizations. It is lighter than other libraries like D3.js, tailored for flowchart and diagramming needs, providing high customization (~45 KB footprint).
6.	AG Grid: AG Grid was chosen for efficient tabular data management, known for its lightweight performance, robust features, and flexibility in handling large datasets. AG Grid’s performance and customization made it a better fit compared to alternatives like Material UI Data Grid and JQuery DataTables, which had additional bloat or dependencies.
7.	Vercel: Selected for deployment due to its serverless functions, seamless integration with React, and automatic scaling capabilities. Vercel optimizes deployment, ensuring the app can scale automatically and providing fast delivery.
8.	GitHub & GitLab: These platforms were used for version control and project collaboration, ensuring proper code management and efficient deployment.
________________________________________
Justifications for Technology Choices
1.	React vs. Next.js: React was preferred over Next.js as the project requires a Single Page Application (SPA), which benefits from React's client-side rendering (CSR). Next.js, while excellent for server-side rendering (SSR) and API routes, was unnecessary for this project as it did not need SEO optimization or server-side functionality.
2.	CSS/SCSS vs. Other CSS Frameworks: Given the small scope, using large CSS frameworks like Tailwind or Material UI would add unnecessary bloat. SCSS was selected for its flexibility and control over styling, making it more efficient to write and maintain the stylesheets.
3.	React Flow: React Flow was chosen due to its React-specific optimizations and lightweight footprint (~45 KB). Unlike D3.js, which is more complex, React Flow offers an easy-to-use API for interactive visualizations in React, making it better suited for this project's flowchart functionality.
4.	AG Grid vs. Material UI Data Grid / JQuery DataTables: AG Grid outperforms both Material UI Data Grid and JQuery DataTables in terms of performance, lightweight nature, and customization. AG Grid offers more flexibility and features, optimized for large datasets, while avoiding the jQuery dependency of DataTables.
________________________________________
Future Scope
1.	API Integration: Implementing Axios will streamline data fetching, error handling, and communication with backend services. Axios offers a simple API for managing HTTP requests and responses, improving data handling in the app.
2.	Migration to Next.js: If the project scope expands to include SSR or API routes, migrating to Next.js will improve performance with optimized page rendering and built-in SSR. This will also enhance SEO for content-heavy platforms.
3.	State Management: As the app scales, state management complexity will increase. Introducing Redux or Context API will help manage global state efficiently, allowing better control over shared data across components and reducing prop-drilling.
4.	Bootstrap Grid for Scalability: The Bootstrap Grid will serve as the core layout system, offering flexibility for responsive layouts. As the project grows, it can easily scale. If needed, we can transition to Tailwind CSS, which is well-suited for utility-first design with Next.js, ensuring ease of implementation, maintainability, and better alignment with modern frontend practices.
5.	Performance Optimizations: To enhance performance, lazy loading, code splitting, and dynamic imports will be implemented, ensuring the app can handle increased complexity.
________________________________________
Conclusion
The technologies and libraries selected for the project prioritize efficiency, maintainability, and scalability. React, React Flow, and AG Grid provide a smooth user experience with lightweight functionality and efficient data handling. Core CSS and SCSS help avoid unnecessary bloat while offering flexibility and control over the styling.
Future enhancements such as API integration, state management improvements, and potential migration to Next.js will ensure the app can scale efficiently. These technology choices create a strong foundation, ensuring optimal performance, maintainability, and scalability as the project evolves.

