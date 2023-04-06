import React, {useState, useEffect} from 'react'
import styles from './CardDetails.module.css'
import oldman from './h.jpg'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReviewCard from '../ReviewCard/ReviewCard';
import {useParams} from 'react-router-dom'
import Error from '../Error/Error';


function CardDetails({userId}) {
    const id = useParams().id
    
    
    const initialState = {
        comment: "",
        rating: "",
        campaign_id: id
      };
    
    const [data, setData] = useState([])
    const [reviewData, setReviewData] = useState([])
    const [pledge, setPledge] = useState(0)
    const [errors, setErrors] =useState([])
    const [formData, setFormData] = useState(initialState)

    useEffect(()=>{
        fetch(`/campaigns/${id}`)
        .then(r => r.json())
        .then((data) => setData(data))

    }, [])

    useEffect(()=>{
        fetch(`/campaigns/${id}/reviews`)
        .then(r=>r.json())
        .then((data) => {
            console.log(data)
            setReviewData(data)})

    },[])
    
    let goal_percent = Math.round((data.current_amount/data.goal_amount)*100)
   
    function handleChange(e){
       setPledge(e.target.value)
    }
    

    function handleClick() {
        fetch("/pledges", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                pledge_amount: pledge,
                campaign_id: id
        })
        })
        window.location.reload();
    }

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData)
        })
        .then((r)=>{
            if(r.ok) {
                r.json().then((data)=>{
                    setReviewData([...reviewData, data])
                    setFormData(initialState)
                })
            } else {
                r.json().then((err)=>{
                    setErrors(err.errors)
                })
            }       
            })
        }
        


  return (
    <div className={styles.body_container}>
        <h2> Campaign</h2>
        <h1 style={{fontWeight: "bold", color: "gold"}}>{data.title}</h1>
        <h3>Category: {data.category}</h3>
    <div className={styles.container}>
        <div className={styles.photo_container}>
            <img src={data.image_url} alt={data.title} />
        </div>

        <div className={styles.details_container}>
        <div className={styles.separator}>
            <h2>Campaign progress</h2>
            <hr className={styles.line}/>
        </div>
       
        <h3>End date: {data.end_date} </h3>
        <div className={styles.progress_container}>
        <CircularProgressbar value={goal_percent} text={`${goal_percent}% of goal met`} strokeWidth={7} styles={{ 
            path: {
                stroke: '#1DA1F2',
                strokeLinecap: 'butt',
                transition: 'stroke-dashoffset 0.5s ease 0s',
            },
            text: {
                fill: 'black',
                fontSize: '10px',
            },
        }} />
        
    </div>
    <h3>$<span style={{color: 'green'}}>{data.current_amount}</span></h3>
    <h4>Goal: $<span style={{color: 'red', fontSize: '2rem'}}>{data.goal_amount}</span></h4>

    <div className={styles.pledge_amount}>
        <input type="number"  onChange={handleChange} name="amount" placeholder="Amount"/>  
    </div>

    <div className={styles.button} onClick={handleClick}>
      <div className={styles.box}>P</div>
      <div className={styles.box}>L</div>
      <div className={styles.box}>E</div>
      <div className={styles.box}>D</div>
      <div className={styles.box}>G</div>
      <div className={styles.box}>E</div>
        </div>
        </div>

    </div>
    <div className={styles.separator}>
            <hr className={styles.line}/>
        </div>
    <div className={styles.description_reviews}>
    <div className={styles.description_container} style={{ gridColumn: "1 / span 2", width: "66.67%" }}>
        <h3 style={{color: "green"}}>Story</h3>
        <h4><span style={{fontSize: '1.5rem'}}>{data.description}</span></h4>
        
    </div>
    
    <div className={styles.input_container} style={{ width: "33.33%" }}>
    <form onSubmit={handleSubmit}>
        <label>Tell us your experience</label>
        <div className={styles.input_group}>
        <input type="text" id='comment' name="comment" value={formData.comment} placeholder="Leave a Review..." onChange={handleFormChange}/>     
        <input type="number"  id="rating" max="5" min="0" name="star_rating" value={formData.rating} placeholder="Stars" onChange={handleFormChange}/>       
        <input type="submit"  value="Post Review" />
        </div>
    </form>
    <ul>
    {errors.map((element, index)=><Error key={index}>{element}</Error>)}
    </ul>
    </div>
    </div>
    <h2>Reviews</h2>
    <div className={styles.reviews_div}>
        <div className={styles.card_details_reviews}>
        {reviewData.map((review)=> <ReviewCard reviewData={review} key={review.id}/>)}
        </div>
    </div>

    </div>

  )
}

export default CardDetails