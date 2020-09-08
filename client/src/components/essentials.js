import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import classes from './essentials.module.css'

export const LinkText = props => 
    <Link to={props.linkto}>{props.text}</Link>;


export const LinkButton = props => {
       return (
         <div className={classes.LinkButton}>
           <Link to={props.linkto}>
             <Button
               onClick={props.onClick}
               color={props.color}
               type={props.type}
               variant={props.variant}
             >
               {props.text}
             </Button>
           </Link>
         </div>
       );};
