import type { Component } from 'solid-js'
import { Router, Routes, Route } from '@solidjs/router'

import { AppNavigator } from './components/AppNavigator'
import { TranslationsNavigator } from './components/TranslationsNavigator'
import { Home } from './views/Home'

const App: Component = () => {
  return (
    <div class="flex overflow-hidden h-[100vh]">
      <div class="flex h-full">
        <AppNavigator />
        <TranslationsNavigator />
      </div>
      <div class="bg-background text-on-primary-container w-full h-full overflow-y-auto">
        <Router>
          <Routes>
            <Route path="/" component={Home} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
