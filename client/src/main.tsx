import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NavigationBar  from './NavigationBar.tsx'

const initialRoot = document.getElementById("root");

if(!initialRoot) {
  throw new Error("Failed to find the root element!");
}

const initialNavigationBar = document.getElementById("navBar");

if(!initialNavigationBar) {
  throw new Error("Failed to find the navigation bar element!");
}

const navBar = createElement();
const root = createRoot(initialRoot);

root.render(
  <StrictMode>
    <NavigationBar />
    <App />
  </StrictMode>,
)

