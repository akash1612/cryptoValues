import React, { Component } from 'react';
import './Card.css';
import axios from 'axios';
import { render } from '@testing-library/react';

    class Card extends Component{
        
        constructor(props) {
            super(props);

            this.state = {
                name:props.name,
                crypto:[]
            };
        }
        
        componentDidMount() {
            const url='https://min-api.cryptocompare.com/data/price?fsym='+this.state.name+'&tsyms=USD,INR';
             axios.get(url).then(res=>{
                const cryptos=res.data;
                console.log(cryptos);
                this.setState({crypto:cryptos});
            })
        }
        
        render() {
            return(

            <div className='card'>
            <h1>{this.state.name}</h1>
            
            
            <h3><p>
            <span>USD   :   </span>
            <span>{this.state.crypto.USD}</span>
            </p>
            <p>
            <span>INR   :   </span>
            <span>{this.state.crypto.INR}</span>    
            </p></h3> 
            
            
            
            </div>);
        }
    }


export default Card;