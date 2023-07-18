<!-- prettier-ignore-start -->

-----------------------------------------------------------------
* Copyright © Written by [Yariv Gilad](https://yarivgilad.com) ©  
-----------------------------------------------------------------

* Implement the two features (context and routing) 
  in any order you wish :)


## Refactor Robots App to use Context API
===============================================

1. Refactor The Robots App
The starting point uses hooks to manage the state in the App component
We want you to manage all state in a separate module using the Context API with the same pattern we used in step 4 of the demos
(step 4 of the demos can be found in the previous classroom material...)


## Reroute those robots!!
=============================================

1. Add routing to the robots Application - first install the necessary library - `react-router-dom`
2. Rename the `<App>` component to `Browse`
3. Create a new `<App>` component that will handle all of the routing
We need 3 routes:
- `/` for a home page
- `/browse` for browsing robots - this will display the `Browse` page that contains the app we have developed so far
- `/create` - a placeholder page for a future bot creation form
4. Create a `<Home>` component for the `/` homepage route
5. Create a `<Create>` component for the `/create` route
6. Create a `<Links>` component for the navigation links
7. Create a `<TopBar>` component - You can copy this one from the routing example demos...
  ,_,
 (O,O)
 (   )
--"-"-------
Good luck!!
Yariv

💡"Luck is the residue of good design" - Branch Rickey
---

[linkedin connect](https://www.linkedin.com/in/yarivgilad/)

<!-- prettier-ignore-end -->
