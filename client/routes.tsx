import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './App.tsx'
import Blog from './Blog.tsx'
import Arin from './blog/Arin.tsx'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/arin" element={<Arin />} />
  </>
)
