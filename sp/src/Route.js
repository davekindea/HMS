import React from 'react'
import { BrowserRouter,Routes,Route,Switch} from 'react-router-dom';
import ReactDOM from "react-dom";
import Navbar from './Componenet/Navbar/nav.js';
import Profile from './pages/profile';
import Home from './pages/Home';
import Employee from './pages/employee';

import EmployeecontextProvider from './Componenet/EmployeeMain/Context/Employeecontext.js';
import Content from './pages/content.js';
import AnnounceVacancy from "../src/Componenet/hr/VacancyForm.js";
import FireEmployee from "../src/Componenet/hr/Fire.js";
import HireForm from "../src/Componenet/hr/HireForm.js";
import ForPhoto from "../src/Componenet/hr/ForPhoto.js";
import SoldProduct from "../src/Componenet/Finance/SoldProduct"; 
import EmployeeTable from "../src/Componenet/Finance/EmployeeTable.jsx"; 
import HospitalService from "../src/Componenet/Finance/HospitalService"; 
import Expense from "../src/Componenet/Finance/Expense";
import Revenue from "../src/Componenet/Finance/Revenue";
import Overview from "../src/Componenet/Finance/Overview";
import PayExpense from "../src/Componenet/Finance/PayExpense";
import Hr from './pages/Hr.js';
import FinancePage from './pages/FinancePage.js';
import EmployeeDetailInfo from './Componenet/EmployeeMain/employeeDetailInfo/EmployeeDetaileInfo.js'
import EmployeeDetail from "./Componenet/EmployeeMain/EmployeeDetail/EmployeDetail.js";



const Routee = () => {
  return (
  <div>
    <EmployeecontextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/Financee" element={<FinancePage/>}/>
          <Route path="/HRM" element={<Hr />}></Route>
          <Route path="/Employee" element={<Employee/>}></Route>
          <Route path="/Employee">
            <Route path=":EmployeeId" element={<EmployeeDetail />}>
              
            </Route>
          </Route>
          
          <Route path="/" element={<ForPhoto />} />
          <Route path="/fireEmployee" element={<FireEmployee />} />
          <Route path="/hireForm" element={<HireForm />} />
          
          <Route path="/announceVacancy" element={<AnnounceVacancy />} />
          

          
          <Route path="/salary-payment" element={<EmployeeTable />}/>
          <Route path="/sold-products" element={<SoldProduct />} />
          <Route path="/pay-expense" element={<PayExpense/>}/>
          
          <Route path="/hospitalservice" element={<HospitalService />} /> 
          <Route path="/overview" element={<Overview/>}/>
          <Route path="/expense" element={<Expense/>}/>
          <Route path="/revenue" element={<Revenue/>}/>
        </Routes>
      </BrowserRouter>
    </EmployeecontextProvider>
      
  </div>
  )
}

export default Routee;
