import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SiteLayout from './components/SiteLayout'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import SocialPage from './pages/SocialPage'
import TextClubPage from './pages/TextClubPage'
import TermsPage from './pages/TermsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-and-conditions" element={<TermsPage />} />
        <Route path="social" element={<SocialPage />} />
        <Route path="text-club" element={<TextClubPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
