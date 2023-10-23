
import './App.css';
import { useRoutes } from "react-router-dom";
import UsersMaster from "./components/UsersMaster";
import UsersDetails from "./components/UsersDetails";




    


function App()
{


    return useRoutes([
        {
            
            path: '/',
            element:<UsersMaster /> ,
            children: [
                {
                    path: '/user/:id',
                    element: <UsersDetails />
                }
            ]
        }
    ]);
    
}


export default App;
