import React from 'react'
import { MILLISECONDS_JAVA } from '../config';

function Block({ block }){

    const { timestamp, hash, tx } = block;
    const hashDisplay = `${hash.substring(0,15)}...`
    const timestampDisplay = new Date(timestamp / MILLISECONDS_JAVA).toLocaleString();
    return (
        <div className="Block">
            <div>Hash: {hashDisplay}</div>
            <div>Timestamp: {timestamp}</div>
            <div>Date: {timestampDisplay}</div>
            <div>Data: {JSON.stringify(tx)}</div>
        </div>
    )

}

export default Block