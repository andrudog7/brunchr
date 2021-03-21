import React from 'react';
import {useParams} from "react-router-dom";
import RestaurantInfoPage from './RestaurantInfoPage';

export default function GetId() {

    const id = useParams();

    return (
        <div>
            <RestaurantInfoPage restaurantId={id} />
        </div>
    );
}