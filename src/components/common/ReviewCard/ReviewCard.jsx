import React from 'react'
import styles from './ReviewCard.module.css'

function ReviewCard({reviewData}) {
    let plants = Array(reviewData.rating).fill("★")
  return (
    <main className={styles.l_card}>
	<section className={styles.l_card_text}>
		<p>
			{reviewData.comment}
		</p>
	</section>
	<section className={styles.l_card_user}>
		<div className={styles.l_card_userImage}>
			<img src="https://thumbs.dreamstime.com/b/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-107388687.jpg" alt="Naruto"/>
		</div>
		<div className={styles.l_card_userInfo}>
			<span>{reviewData.user.username}</span>
			<span> {reviewData.rating} {plants.join("")}</span>
		</div>
	</section>
</main>
  )
}

export default ReviewCard