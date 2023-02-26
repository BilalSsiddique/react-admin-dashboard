import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";

import DashBoard from "./scenes/dashboard/index";
import Team from "./scenes/team/Team";
import Invoices from "./scenes/invoices/Invoices";
import Contact from "./scenes/contacts/Contact";
import Faq from "./scenes/faq/Faq";
import Bar from "./scenes/bar/index";
import Form from "./scenes/form/Form";
import Calendar  from "./scenes/calendar/Calendar";
import Line from "./scenes/line/index";
import Pie from "./scenes/pie/index";
import Geography from './scenes/geography/index'

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form/>} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
