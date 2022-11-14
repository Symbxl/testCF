import { useState } from "react";
import styled from "styled-components"
import Card from "./Card";

const initialForm = {
  symbol: ""
}

const SearchStocks = () => {
  const [stock, setStock] = useState()
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const getStock = async (symbol) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.KEY}`
      );
      const data = await response.json();
      setStock(data["Global Quote"]);
      setIsLoading(false)
      setIsSubmitted(true)
    } catch (error) {
      console.error(error)
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value.toUpperCase()
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setIsSubmitted(false)
    getStock(formData.symbol)
    setFormData(initialForm)
  }

  return ( 
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="symbol" name="symbol" value={formData.symbol} onChange={handleChange} />
        <Input type="submit" />
      </Form>
    { isSubmitted && (
          <Card stock={stock} />
    )}
    { isLoading && (
          <div>LOADING...</div>
    )}
    </>
  );
}

export default SearchStocks;


const Form = styled.form`
  margin: 2rem;
`

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
`
