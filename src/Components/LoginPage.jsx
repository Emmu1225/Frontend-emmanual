import React from 'react'

const LoginPage = () => {
  return (
    <div>
      
        <h3>LOGIN PAGE</h3>
        <br /><br />
      <div className="container">
        <div className="card">
            <div className="col col-12 col-lg-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
            <div className="card-body">
              <div className="row g-3">
                <div className="col col-12 col-sm-6 col-xl-6 col-xxl-6 col-md-12">
                    <label htmlFor="" className='form-label'>Username</label>
                    <input type="password" className='form-control' />
                </div>
                <div className="row g-3">
                <div className="col col-12 col-sm-6 col-xl-6 col-xxl-6 col-md-12">
                    <label htmlFor="" className='form-label'>Password</label>
                    <input type="password" className='form-control' />
                </div>
                <div className="row g-3">
                <div className="col col-12 col-sm-6 col-xl-6 col-xxl-6 col-md-12">
                   <button className='btn btn-success'>Login</button>
                </div>
             </div>
            </div>
        </div>
            </div>
        </div>
      </div>
</div>
      </div>
  )
}

export default LoginPage
