import React from 'react'
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header title="ADOPTA UN PERRITO"/>
      <div className='cards'>
        <MyCard 
          imageCard="https://pixabay.com/get/g203686aba4cad795501c1593fbc2de3784bc59a4594f7a09bb05f4f98d89f5ebb7420238f09a0d3e7e715bb4dd23eb5c_640.jpg" 
          titleCard="Bartolo" 
          textCard="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece" 
          textButton="Husky"
          colorButton="success"
        />
        <MyCard 
          imageCard="https://pixabay.com/get/g95e2da688cd36734417a159f41a903ef1a7267aab93ba0f21bee39b17cf14ae5d28e58d2b0119b66bfddd74f3e77e8ec_640.jpg" 
          titleCard="Messi" 
          textCard="Es juguetón, amable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!" 
          textButton="Bobtail"
          colorButton="primary"
        />
        <MyCard 
          imageCard="https://pixabay.com/get/g0ed8c52cf2a6cb12142f5ca2d83cc962afcb5a8a6750ad6a32667dcee78558077894b9cc3286e1b5c543bc9e744f25bc_640.jpg" 
          titleCard="Gohan" 
          textCard="Un perro de tamaño mediano con un corazon gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!" 
          textButton="Shar Pei"
          colorButton="danger"
        />
        <MyCard  
          imageCard="https://pixabay.com/get/ga0ec1da9e5282b73f6305cc5717a37980b099504a35634a42c9b0e9a68c822a46c2083eb919a1d92f923481a6b0a74b3_640.jpg" 
          titleCard="Princesa" 
          textCard="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!" 
          textButton="Beagle"
          colorButton="warning"
        />
      </div>
      <Footer footer="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y brindale una segunda oportunidad. Encuentra a tu compañero peludo para siempre."/>
    </>
  )
}

export default App
