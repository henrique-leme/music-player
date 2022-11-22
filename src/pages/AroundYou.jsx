import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Error, Loader, SongCard } from '../components';

const AroundYou = () =>{
const [country, setCountry] = useState('');
const [loading, setLoading] = useState(true);
const {activeSong, isPlaying} = useSelector((state) => state.player);


    return (
        
    )};


export default AroundYou;
