# Application

[Vercel Deployment](https://urb-mock-blog-forum.vercel.app/)

This project is a simple blog app built with NextJS, React Query, Material UI.

## Features

* **Posts Listing:** Displays a list of posts from a mock backend free tier. Each list item shows post title, author, image, summary and a "Read more" button.
* **Post Details**: Displays post cover image, summary, title, full body and author details.
* **Create Post Form**: Form for creating simple posts. Since free tier of mock backend does not allow creating data, the post is not actually created. But form management, API invocation and query invalidation is demonstrated in the codebase.


## Challenges faced
The assignment required using React Query as well as Server Side Rendering. RQ is primarliy a client side library. Using it with SSR required advanced usage. This has been achieved by prefetching posts query on server when rendering Blog listing as a server side component. The preset query client is then deyhdrated and provisioned to frontend where it can access the prefetched posts without making a new call. Hence, SSR with React Query.

Free Backend Tier does not allow creating posts.

## Codebase

The codebase has been designed feature-wise. The app routing directory only contains the routing code. The rendering is encapsulated in feature-specific components in src/components. This makes the components routing-agnostic and portable.

With feature-specific structure, the codebase can scale seamlessly and different teams, responsible for different verticals, can work in parallel without conflicts.

## Technologies Used

* **Next.js:** React framework for server-side rendering and static site generation.
* **React:** JavaScript library for building user interfaces.
* **TypeScript:** Static type checker for JavaScript.
* **Tailwind CSS:** Utility-first CSS framework.
* **Lucide React:** Icon library.
* **React Query Toast:** Server-state Aware API communication.
* **Axios:** HTTP client for making API requests.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/mubashir-irfan/urb_mock_blog_forum
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd urb_mock_blog_forum
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

5.  **Open your browser and visit `http://localhost:3000`.**

## Building for Production

1.  **Build the application:**

    ```bash
    npm run build
    # or
    yarn build
    # or
    pnpm build
    ```

2.  **Start the production server:**

    ```bash
    npm run start
    # or
    yarn start
    # or
    pnpm start
    ```