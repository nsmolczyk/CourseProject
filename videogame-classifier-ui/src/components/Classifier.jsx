import React, { useEffect, useState } from 'react'



export default function Classifier() {

    const [review, setReview] = useState();
    const [rating, setRating] = useState("Hello");

    const getData = async () => {
        const response = await fetch('http://127.0.0.1:5000/classify?review=terrible')
        const data = await response.json();
        setRating(data);
    }

    useEffect(() => {
        getData();
    }, [review])


    return (
        <div>{rating}</div>
    )
}
