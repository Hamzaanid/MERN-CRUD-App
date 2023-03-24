import {createBrowserRouter } from "react-router-dom";
import Items from '../Compenents/BodyPage/Items/Items.js';
import FormAddItem from '../Compenents/BodyPage/FormItems/FormAddItem.js';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Items />
      },
      {
        path: "addItem",
        element: <FormAddItem />,
      },
])
export default router;
