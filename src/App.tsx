import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { DemoShell } from "@/pages/DemoShell";
import { MarketingPage } from "@/pages/MarketingPage";
import { LoginPage } from "@/pages/LoginPage";
import { SignupPage } from "@/pages/SignupPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/v/:verticalId" element={<DemoShell />}>
        <Route index element={<MarketingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Route>
    </Routes>
  );
}
