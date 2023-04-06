import React from 'react'

function Testimonials() {
  return (
        <div className="testimonial-img col-md mb-4 mt-4" style={{display : "flex"}} >
          <div className="card w-100 text-center p-4 m-4">
              <img src= "https://images.unsplash.com/photo-1522035612764-b0e4ba8915e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NTg0NDQ1fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
              alt="Nderitu's plane"
              style={{objectFit: "cover"}} 
              className="card-img-top"
              height='400px'
            />
              <div className="card-body">
                <h1 className="card-title mb-0">BOEING 254</h1> 
                <p>Talk about creativity!! Through our website we were able to raise $20 000 for Frederick's helicopter-like vehicle that caused a stir online. This surparsed our target by $1000 </p>
              </div>           
          </div>
          <div className="card w-100 text-center p-4 m-4">            
              <img src="https://images.unsplash.com/photo-1530884698386-d42ad3199b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
              alt="Next in fashion design" 
              style={{objectFit: "cover"}} 
              className="card-img-top"
              height='400px'/>
              <div className="card-body">
                <h1 className="card-title mb-0">Pink & Pearl Men's Wear</h1>
                <p>The Pink Clothesline for Men is a revolutionary clothing line designed to break the stereotype that pink is only for women. This unique collection of men's clothing features a variety of pink hues, from soft pastels to bold fuchsia.We managed to raise $100 000 for them. </p>
              </div>
          </div>
          <div className="card w-100 text-center p-4 m-4">            
              <img src="https://images.unsplash.com/photo-1519748771451-a94c596fad67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Woman in Tech startup" 
              style={{objectFit: "cover"}} 
              className="card-img-top"
              height='400px'/>
              <div className="card-body">
                <h1 className="card-title mb-0">FullStack Web Designs by WoTech.</h1>
                <p>Pledge Up had the pleasure of supporting WoTech in fundraising for their new offices and laptop. The target amount was $50 000 which was met.</p>
              </div>
          </div>
      </div>
  )
}

export default Testimonials