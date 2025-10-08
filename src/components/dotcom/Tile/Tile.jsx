import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../global/Icon/Icon';
import PerformantImage from '@/components/global/Img/Img';
import styles from './Tile.module.css';

export const Tile = (props) => {
    
    return (
        <PerformantImage type='rail' src={props.data.image.href} aspect={169} />
    )
};

export default Tile
