import React from 'react';
import Button from '../../Button';
import {HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi';
import styles from './HeaderAction.module.css';

const HeaderAction = () => {
return (
<div>
    <Button variant="icon" className={styles.cartButton}>
        <HiOutlineShoppingCart  />
    </Button >
     <Button variant="icon" className={styles.userButton}>
        <HiOutlineUser   />
    </Button>
</div>
);
};

export default HeaderAction;