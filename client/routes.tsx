import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './App.tsx'
import Blog from './screens/Blog.tsx'
import Portfolio from './screens/Portfolio.tsx'
import Arin from './blogScreens/Arin.tsx'

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Portfolio />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/arin" element={<Arin />} />
    </Route>
  )
)
