import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './App.tsx'
import Blog from './screens/Blog.tsx'
import Portfolio from './screens/Portfolio.tsx'
import Arin from './blog/Arin.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Portfolio />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/arin" element={<Arin />} />
  </Route>
)
