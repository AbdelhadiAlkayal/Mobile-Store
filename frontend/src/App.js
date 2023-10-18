// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/HomePage";
import RootLayout from "./page/RootLayout";
import RootPhones from "./page/RootPhones";
import PhonesPage, { phonesLoader } from "./page/PhonesPage";
import PhoneDetailPage, { loaderPhonesDetail } from "./page/PhoneDetailPage";
import AboutPage from "./page/AboutPage";

import CartPage from "./page/CartPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "phones",
        element: <RootPhones />,
        children: [
          { index: true, element: <PhonesPage />, loader: phonesLoader },
          {
            path: ":phoneId",
            id: "phoneDetails",
            loader: loaderPhonesDetail,
            children: [
              {
                index: true,
                element: <PhoneDetailPage />,
              },
            ],
          },
        ],
      },
      { path: "about", element: <AboutPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
