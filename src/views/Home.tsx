import type { Component } from 'solid-js'
import { TbLanguageOff } from 'solid-icons/tb'

const Splash: Component = () => {
  return (
    <div class="flex justify-center items-center w-full h-full">
      <div class="space-y-3">
        <div class="flex justify-center items-center">
          <span class="text-surface-variant text-[12rem]"><TbLanguageOff /></span>
        </div>
        <h1 class="font-bold text-center text-on-primary-container text-xl">
          There is no translation selected yet
        </h1>
      </div>
    </div>
  )  
}

// <Home /> will be the no translation selected yet splash.
export const Home: Component = () => {
  return (
    <>
      <Splash />
    </>
  )
}
