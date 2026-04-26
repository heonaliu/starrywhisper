import { Routes, Route } from 'react-router-dom'
import LandingPage from '@/pages/LandingPage'
import UniversePage from '@/pages/UniversePage'
import AllStarsPage from './pages/AllStarPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/universe" element={<UniversePage />} />
      <Route path="/allStars" element={<AllStarsPage />} />
    </Routes>
  )
}