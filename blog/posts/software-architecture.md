## How to build a App?

Building an application may seem like a complex task, but with the right knowledge of modern software architecture, you'll be well on your way to creating your own impressive software solutions. In this blog, we'll explore the various components and techniques involved in building an app, from frontend development to backend logic, persistence, middleware, and more.

## End User Application level Concepts

To start off, let's take a look at the general architecture of an end user application. It typically consists of multiple frontends, middlewares, backends, and persistence. These components work together to ensure a seamless user experience and efficient data management.

### Frontend: Captivating User Interfaces

The frontend of an application is what users interact with directly. There are several options available for building frontends, depending on the platform and requirements. You can create browser web pages, browser applications, desktop applications, mobile applications, or even command-line interface (CLI) applications. Each option has its own unique set of tools and frameworks to enhance interactivity and responsiveness.

### Backend: Powering the Logic

The backend of an application handles heavy server-side computations and business logic. It's where the real magic happens. Depending on your language preference, you can choose from a variety of backend technologies. JavaScript provides frameworks like Nest.js, Express.js, or even plain Node.js. Java enthusiasts can leverage frameworks like Spring, while C# developers can utilize ASP.NET. For those seeking exceptional performance, C++ is a viable option.

### Persistence: Storing and Retrieving Data

Persistence refers to how data is stored and retrieved in an application. There are various options available to suit different data storage requirements. In-memory persistence is useful for temporarily storing volatile data. File system-based persistence allows for more permanent storage. Relational databases like PostgreSQL, MySQL, or SQL Server are ideal for structured and relational data. Document databases like MongoDB are great for storing and querying JSON-like documents. Key-value databases like Redis or Apache Cassandra excel at fast key-value data storage and retrieval. If you're working with graph data structures, graph databases like Neo4j or Amazon Neptune are the way to go. Time series databases like InfluxDB or Prometheus specialize in storing and analyzing time-stamped data.

### Middleware: Enhancing Application Functionality

Middleware components enhance the functionality and performance of an application. Some essential middleware components include authentication, authorization, message queues for asynchronous communication, caching for improved performance, gateways for routing requests, proxies for intermediary communication, and monitoring tools to collect and analyze application metrics.

### Network Protocols and Standards

Network protocols and standard play a crucial role in modern software architecture as they facilitate communication and data transfer between different components and systems. Let's explore some important network protocols and standard commonly used in app development:

TCP/IP, a suite of protocols that form the basis of communication on the internet and most private networks. It provides a set of rules and standards for transmitting data between devices in a network.

HTTP/HTTPS, foundation of the World Wide Web. It enables communication between web browsers and servers, allowing the transfer of hypertext documents. HTTP follows a client-server model, where a client sends a request to a server, and the server responds with the requested data. WebSocket, a protocol that enables bidirectional, full-duplex communication between a client and a server over a single TCP connection. It allows real-time data streaming and facilitates interactive web applications, such as chat applications or collaborative editing tools.

REST (Representational State Transfer): REST is an architectural style for designing networked applications. It utilizes HTTP as the underlying protocol and defines a set of principles for building scalable and stateless web services. RESTful APIs (Application Programming Interfaces) adhere to these principles and allow clients to interact with server resources using standard HTTP methods like GET, POST, PUT, and DELETE.

MQTT (Message Queuing Telemetry Transport), a lightweight messaging protocol designed for efficient communication between devices with limited resources. It is widely used in Internet of Things (IoT) applications, where low power consumption and minimal bandwidth usage are essential. MQTT follows a publish-subscribe model, where clients can publish messages to topics, and other clients can subscribe to receive those messages.

OData (Open Data Protocol) is a protocol and query language that allows for the creation and consumption of RESTful APIs. It provides a standardized way to expose and access data over the web, enabling interoperability between different systems and platforms. OData defines a set of conventions and rules for building APIs that support querying, filtering, sorting, and paging of data. It also supports features like data shaping, metadata discovery, and batch requests. OData is often used in scenarios where data integration and interoperability are important, such as enterprise applications and data-driven services.

GraphQL is a query language and runtime that was developed by Facebook. It provides a more flexible and efficient approach to querying data compared to traditional RESTful APIs. With GraphQL, clients can specify exactly what data they need, and the server responds with precisely that data, eliminating over-fetching or under-fetching of data. GraphQL allows clients to request multiple resources in a single query, reducing the number of round trips to the server. It also supports real-time updates and subscriptions. GraphQL is often favored for building client-centric applications, where the client has more control over the data it receives.

SAML (Security Assertion Markup Language) is an XML-based open standard for exchanging authentication and authorization data between identity providers (IdPs) and service providers (SPs). It enables single sign-on (SSO) and federated identity management across different systems and organizations.

OAuth (Open Authorization) is an open standard protocol and framework that enables secure authorization and delegated access to protected resources, such as APIs, on behalf of a user. It allows users to grant permissions to third-party applications without sharing their credentials (e.g., username and password) with those applications. OAuth works through a flow involving multiple parties: the resource owner (user), the client application (third-party application), the authorization server, and the resource server.

### Modern Solutions

To keep up with the latest trends in software architecture, it's important to utilize modern solutions and frameworks.

Web based client side rending frontend: Native HTML/JS /CSS and JQuery, JS based web technologies like SCSS, Tailwind, with React and Nest.js, Vue and Nuxt.js, etc.

Mobile native frontend: Android Jetpack Compose, iOS SwiftUI

Cross platform frontend: React Native and Expo \, Flutter, etc.

Backend solutions: JS(Nest.js, Express, etc.), Java(Spring, etc.), C#(ASP.NET), C++, etc

Server side rending fullstack solutions: JS(Next.js with SSR, Nuxt.js with SSR, etc), Java(JSP, etc.), PHP, C#(Blazor, etc.), Python(Flask, Django, etc.)

Persistence solutions: PostgreSQL, MongoDB, Redis, Neo4j, InfluxDB, etc

## Project Structure level Concepts

### Architectural Design Patterns: Design different Layers

When it comes to package layer design patterns, there are several commonly used patterns that help in organizing and structuring code within an application. Let's explore some of these patterns and their corresponding components:

1. MVC (Model-View-Controller):
   - Model: Represents the data and business logic of the application. It encapsulates the application's data and behavior, often including entities or domain objects.
   - View: Handles the presentation and user interface of the application. It displays the data to the user and captures user input.
   - Controller: Acts as an intermediary between the Model and View. It receives user input from the View, interacts with the Model to perform necessary operations, and updates the View with the updated data.
2. MVP (Model-View-Presenter):
   - Model: Similar to MVC, it represents the data and business logic.
   - View: Handles the presentation and user interface.
   - Presenter: Takes input from the View, interacts with the Model to perform operations, and updates the View. The Presenter acts as a mediator between the View and Model.
3. MVVM (Model-View-ViewModel):
   - Model: Represents the data and business logic.
   - View: Handles the presentation and user interface.
   - ViewModel: Sits between the View and Model. It exposes data and commands to the View, manages the state and behavior of the View, and interacts with the Model to retrieve or update data.

Now, let's discuss some additional components that are commonly used in combination with the above patterns:

- Controller: Centralizes and handles the incoming requests from clients, or acts as interface of receiving requests, performs necessary validations and business logic, and coordinates with other components to fulfill the request.
- DTO (Data Transfer Object): Represents a lightweight data container used for transferring data between layers or components. DTOs often carry data between the Controller and View, or between different layers of an application.
- Service: Implements the application's business logic and performs specific operations or tasks. Services are responsible for orchestrating the interactions between different components, such as the Controller, DTOs, and DAOs.
- DAO (Data Access Object): Provides an interface for accessing and manipulating data in a specific data storage system, such as a database. DAOs abstract away the underlying data storage details and provide methods for CRUD (Create, Read, Update, Delete) operations on entities or data objects.
- Entity: Represents a domain object or a data object that encapsulates the data and behavior of a specific entity within the application's domain. Entities often correspond to database tables or other data sources.

These components and patterns help in organizing code into logical layers, separating concerns, and promoting maintainability and scalability in software applications. It's important to note that the usage and implementation of these patterns and components may vary depending on the specific requirements and technologies used in an application.

### Package Manager: Managing Dependencies

When building applications, a package manager is a valuable tool for managing dependencies. It allows you to easily install, update, and remove libraries or packages required by your application. Popular package managers include npm for JavaScript, pip for Python, and Maven for Java.

### Build Tool: Automating the Build Process

A build tool automates various tasks involved in building an application, such as compiling source code, running tests, and packaging the application for deployment. Common build tools include webpack for JavaScript, and Maven for Java.

### Debug Tool: Simplifying the Debugging Process

To identify and fix issues in your application, a reliable debug tool is essential. Debuggers enable you to step through your code, set breakpoints, inspect variables, and analyze the flow of execution.

### Unit Testing: Ensuring Code Quality

Unit testing is a critical aspect of software development. It involves writing tests for individual units of code to ensure they function correctly. Frameworks like Jest for JavaScript, JUnit for Java, and unittest for Python provide robust unit testing capabilities.

### Integration: Testing the Whole System

Integration testing verifies the interaction between various components of an application. It ensures that different parts work together seamlessly. Tools like Selenium, Cypress, and JUnit can be used to perform integration testing.
