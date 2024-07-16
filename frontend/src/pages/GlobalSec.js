import React from 'react'
import './GlobalSec.css'

const GlobalSec = () => {
  return (
    <>
      <section className='stats-section' style={{backgroundColor: '#000000'}}>
        <div className='container'>
        <div className='row'>
          <div className='col-lg-7 col-md-6 col-12'>
        <div className='left-side'>
          <h3>globally serving and building in public</h3>
        </div></div>
        <div className='col-lg-5 col-md-6 col-12'>
        <div className='stats-data-grid'>

          <div class="item">
            <div class="logo">
              
            </div>
            <div class="count">3896</div>
            <div class="label">Users</div>
          </div>

          <div class="item">
            <div class="logo">
              
            </div>
            <div class="count">5800 </div>
            <div class="label">Blueprints</div>
          </div>

          <div class="item">
            <div class="logo">
             
            </div>
            <div class="count">158 </div>
            <div class="label">Upgrades</div>
          </div>

          <div class="item">
            <div class="logo">
              
            </div>
            <div class="count">24 </div>
            <div class="label">Countries</div>
          </div>
        </div></div></div></div>
      </section>
    </>
  )
}

export default GlobalSec;