#!/usr/bin/env bash

# filename: newbsc.sh
echo "What's the new component called?"
read name
mkdir src/components/bsd/$name
echo "Folder created"
cd src/components/bsd/$name 
echo ".$name {
    border: 1px solid green;
}" | tee $name.module.css
echo "$name.css created"
echo "import React from 'react';
import styles from './$name.module.css';

export const $name = (props) => {
    return (
        <div className={styles.$name}>$name</div>
    )
};

export default $name" | tee $name.jsx
echo "$name.jsx created"
echo "import { $name } from './$name';
const meta = {
    title: 'Design System/BSD/$name',
    component: $name,
};
export default meta;
export const Default = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd'
    }
  };
" | tee $name.stories.jsx
echo "$name.stories.jsx created"
echo "$name component built"
