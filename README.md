# Dune Security Frontend Engineering Assignment

This file outlines the technologies, libraries, and languages used in the **Dune Security Frontend Engineering Assignment**. The project is live at [https://assignment-dune-security.vercel.app/](https://assignment-dune-security.vercel.app/).

## Technologies and Libraries Used

1. **React**  
   React was chosen for its robust support of Single Page Applications (SPA). It leverages client-side rendering (CSR) to deliver a fast, responsive user experience. Since the project does not require server-side rendering (SSR) or API routes, React was the ideal choice.

2. **TypeScript**  
   TypeScript improves code quality with static typing, which helps catch errors early, enhances maintainability, and provides better tooling for scaling the codebase.

3. **CSS & SCSS**  
   Core CSS and SCSS were chosen over other CSS frameworks to keep the styling lightweight, customizable, and minimal. This ensures fast performance and easy maintainability while retaining full control over styles without external dependencies.

4. **Bootstrap Grid**  
   The minified version of Bootstrap Grid (20 KB) was used for layout structuring. It provides essential grid functionality without unnecessary overhead and remains flexible for responsive layouts.

5. **React Flow**  
   React Flow was selected for interactive data visualizations. It is optimized for React and offers an easy-to-use API for flowchart and diagramming needs. Its small (~45 KB) footprint and React-specific optimizations made it an excellent choice.

6. **AG Grid**  
   AG Grid was chosen for efficient tabular data management. It is lightweight, offers robust features, and is flexible in handling large datasets. AG Grid outperforms alternatives like Material UI Data Grid and JQuery DataTables in terms of performance and customization.

7. **Font and Color Choices**  
   "DM Sans", sans-serif, was chosen for readability and consistency with the provided design. The color scheme was selected based on the design without specific instructions.

8. **Data Handling**  
   A simple approach to data handling was used for now, as no specific instructions were provided for API routes or data management. There are plans to implement more advanced solutions as the project evolves.

9. **Vercel**  
   Vercel was chosen for deployment due to its seamless React integration, serverless functions, automatic scaling, and CI/CD support, ensuring fast and efficient delivery with automated deployment.

10. **GitHub & GitLab**  
    These platforms were used for version control and collaboration, ensuring efficient project management.

## Justifications for Technology Choices

1. **React vs. Next.js**  
   React was preferred over Next.js because the project is focused on a Single Page Application (SPA) and benefits from React's client-side rendering (CSR). Next.js, while excellent for server-side rendering (SSR) and API routes, wasn't necessary for this project, as SEO optimization or server-side functionality were not required.

2. **CSS/SCSS vs. Other CSS Frameworks**  
   Using large CSS frameworks like Tailwind or Material UI would add unnecessary bloat for this small-scale project. SCSS was selected for its flexibility, control, and efficiency in writing and maintaining the stylesheets.

3. **React Flow**  
   React Flow was chosen due to its React-specific optimizations and lightweight nature (~45 KB). Unlike D3.js, which is more complex, React Flow offers an easy-to-use API for interactive visualizations in React, making it ideal for this project’s flowchart functionality.

4. **AG Grid vs. Material UI Data Grid / JQuery DataTables**  
   AG Grid outperforms both Material UI Data Grid and JQuery DataTables in terms of performance, flexibility, and customization. AG Grid is optimized for large datasets, offering more features and avoiding the jQuery dependency of DataTables.

## Future Scope

1. **API Integration**  
   Implementing Axios will streamline data fetching, error handling, and communication with backend services, providing a simple API for managing HTTP requests and responses.

2. **Migration to Next.js**  
   If the project scope expands to include SSR or API routes, migrating to Next.js will improve performance with optimized page rendering and built-in SSR. This will also enhance SEO for content-heavy platforms.

3. **State Management**  
   As the app scales, state management complexity will increase. Introducing Redux or Context API will help manage global state efficiently and reduce prop-drilling.

4. **Bootstrap Grid for Scalability**  
   Bootstrap Grid will continue to serve as the core layout system for responsive layouts. As the project grows, transitioning to Tailwind CSS may be considered for utility-first design, particularly in a Next.js environment.

5. **Performance Optimizations**  
   Implementing lazy loading, code splitting, and dynamic imports will further enhance performance and help manage increased app complexity.

## Conclusion

The technologies and libraries chosen for this project prioritize efficiency, maintainability, and scalability. React, React Flow, and AG Grid deliver a smooth user experience with lightweight functionality and efficient data handling. Core CSS and SCSS minimize bloat while providing flexibility and control over styling. Future enhancements, including API integration, state management, and potential migration to Next.js, will ensure the app can scale efficiently. These choices create a solid foundation for the project, ensuring optimal performance and scalability as it evolves.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html).

### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
The page will reload if you make changes.  
You may also see any lint errors in the console.

