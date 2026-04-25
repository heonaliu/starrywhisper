import { Routes, Route } from 'react-router-dom'
import LandingPage from '@/pages/LandingPage'
import UniversePage from '@/pages/UniversePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/universe" element={<UniversePage />} />
    </Routes>
  )
}