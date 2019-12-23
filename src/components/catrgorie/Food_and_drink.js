import React, { Component } from 'react'
import image from './imageCategory'
import CategoryTemplate from './CategoryTemplate'


export default class Food_and_drink extends Component {
    render() {
        return (
            <div>
                 <CategoryTemplate  namecategory='Food and Drink' tableimage={image.Food_and_Drink} />
            </div>
        )
    }
}
